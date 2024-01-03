import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

//PSEUDO-CODE
  //     //if not a token ask to register and login --> NEXT STEP --> shop as guest
  //     //map items specific user's cart
  //       //no items? propmt to shop
  //       //list items
  //         //show picture/title/price/qty
  //           //pull info for that item api/art/:id
  //         //can adjust qty --> goes to PUT api
  //         //can adjust
  // 


const Cart = () => {

  const [userId, setUserId] = useState(null);
  const [userCart, setUserCart] = useState(null);
  const [cartItems, setCartItems] = useState([])

  //check userID

  useEffect(() => {
    // For testing... just use a HARDCODED userID
    // get token //
    ////

    // const randomInteger = Math.floor(Math.random() * 5) + 1;
    // setUserId(randomInteger);

    //get user's cart --> get user id off of token and match
    const getCart = async () => {
      try {
        const { data: userCart } = await axios.get("/api/cart");
        setUserCart(userCart);
      } catch (error) {
        console.log(error)
      }
    }
    getCart();


    if (userCart) {
      //get the cart ID via userCart.id
      const getCartItems = async () => {
        try {
          const userCartItems = await axios.get(`/api/cart/${userCart.id}`)
          setCartItems(userCartItems);
        } catch (error) {
          console.log(error)
        }
      }
      getCartItems();
    }
    

  }, []);

  if (!userId) {
    return (
      <>
        <h1>In the future you can shop as a Guest.<br />
          In the meantime, {<Link to='/register'>Register</Link>} or {<Link to='/login'>Login</Link>} to start shopping</h1>
      </>
    )
  }


  return (
    <>
      <h1>You're logged in as user #{userId}</h1>
      <h1>Cart goes here</h1>
    </>
  )

}

export default Cart