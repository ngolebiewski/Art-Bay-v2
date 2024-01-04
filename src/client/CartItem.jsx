import './cartitem.css'
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";


//from CartItem GET: id, quantity, artId
//from the ArtID GET: imgUrl, price, 
//have an input field to adjust quantity
//have a button to remove from cart

const CartItem = ({ cartItems }) => {

  const [cartArt, setCartArt] = useState({});
  const [artSpecs, setArtSpecs] = useState({});
  const [cartArray, setCartArray] = useState([])
  const [itemQuantity, setItemQuantity] = useState(1);

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
  }, []);


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
                    defaultValue={quantity}
                    onChange={(e) => setItemQuantity(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div>
                Total Price: ${quantity * price}
              </div>
              <div>
                <button>Update Cart</button>
              </div>
              <div>
                <button>Remove</button>
              </div>
            </div>)
        })}
      </>

    )
  }
}

export default CartItem