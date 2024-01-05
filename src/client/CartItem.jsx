import './cartitem.css'
import { useEffect, useState } from "react"
import axios from "axios"
import { Link, Navigate, useNavigate } from "react-router-dom";

const token = window.localStorage.getItem("TOKEN"); 


//from CartItem GET: id, quantity, artId
//from the ArtID GET: imgUrl, price, 
//have an input field to adjust quantity
//have a button to remove from cart

const CartItem = ({ cartItems, refresh, setRefresh}) => {
  const navigate = useNavigate();
  const [cartArt, setCartArt] = useState({});
  const [artSpecs, setArtSpecs] = useState({});
  const [cartArray, setCartArray] = useState([])
  const [itemQuantity, setItemQuantity] = useState(1);


  const handleDeleteClick = async (id) => {
    try{
    await axios.delete(`/api/cart/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    setRefresh(!refresh);
    navigate('../cart')
    } catch(error){
      console.error(error)
    }
  }

  const handleQuantityClick = async (quantity, id) => {
    try {
        await axios.put(
            '/api/cart/qty',
            { quantity:+quantity, 
              id:+id,}, 
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        );
    } catch (error) {
        console.error(error);
    }
};


  const getCartItem = async () => {
    try {
      const currentItem = await axios.get(`/api/cart/${cartItemId}`)
      setCartArt(currentItem)
    } catch (error) {
      console.log(error);
    }
  }

  const getArtSpecs = async (artId) => {
    try {
      const { data: currentArtwork } = await axios.get(`/api/art/${artId}`)
      setArtSpecs(currentArtwork)
      return currentArtwork;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const getTheCartForTheArtMart = async () => {
      const cartArray = await Promise.all(
        cartItems.map(async (cartUnit) => {
          const { id, quantity, artId } = cartUnit;
          const { title, price, imgUrl } = await getArtSpecs(artId);
          return { id, quantity, title, price, imgUrl, artId };
        })
      );
      setCartArray(cartArray);
    };

    getTheCartForTheArtMart();
  }, [refresh, setRefresh]);


  if (!cartArray[0]) { return (<>Loading...</>) }

  if (cartArray[0]) {
    return (
      <>
        {cartArray.map((artwork) => {
          const { id, quantity, title, price, imgUrl, artId } = artwork;
      
          console.log(artwork)
          return (
            <div className="cart-item" key={id} >
              <div className="cart-image">
                <Link className="cart-image" to={`/artwork/${artId}`}>
                  <img src={imgUrl} alt={`Artwork titled ${title}`} />
                </Link>
              </div>
              <div>
                <p>{title}</p>
                <p>Price: ${price}</p>
              </div>
              <div>
                <label>
                  Quantity:
                  <input
                    type="number"
                    min="0"
                    max="100"
                    defaultValue={quantity}
                    onChange={(e) => {setItemQuantity(e.target.value)}}
                    required
                  />
                </label>
              </div>
              <div>
                <button onClick={() => handleQuantityClick(itemQuantity, id)}>Update Item</button>
                {/* {itemQuantity} {id} */}
              </div>
              <div>
                <button onClick={() => handleDeleteClick(id)}>Remove from Cart</button>
              </div>
              <div>
                Total Price: ${quantity * price}
              </div>
            </div>)
        })}
      </>

    )
  }
}

export default CartItem