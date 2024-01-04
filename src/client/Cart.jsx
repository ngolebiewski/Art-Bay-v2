import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

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
  const [userName, setUserName] = useState("Guest");
  const [userCart, setUserCart] = useState([]);
  const [cartId, setCartId] = useState(null);
  const [cartItems, setCartItems] = useState([])
  const [cartItem, setCartItem] = useState({})
  const token = window.localStorage.getItem("TOKEN"); 

  const getUser = async () => {
    try {
      const response = await axios.get("/api/user", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUserId(response.data.id)
      setUserName(response.data.firstName)
    } catch (error) {
      console.error(error)
    }
  }

  const getCart = async () => {
    try {
      const { data } = await axios.get("/api/cart", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUserCart(data[0]);
      setCartId(data[0].id)
    } catch (error) {
      console.log(error)
    }
  }

  const getCartItems = async () => {
    try {
      const { data } = await axios.get(`/api/cart/${cartId}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setCartItems(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!token) return;

    const getUserCartData = async () => {
      try{
        await getUser();
        await getCart();
        await getCartItems();
       
      } catch(error){
        console.error(error)
      }
    }
    getUserCartData();
    
  }, []);

  if (!userId) {
    return (
      <>
        <h1>In the future you can shop as a Guest.<br />
          In the meantime, {<Link to='/login'>Login or Register</Link>} to start shopping</h1>
      </>
    )
  }

  return (
    <>
      <h1>Hello, you're logged in as {userName}</h1>
      <h1>Cart</h1>
      <CartItem cartItems={cartItems} />
    </>
  )

}

export default Cart