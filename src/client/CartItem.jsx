import { useEffect, useState } from "react"
import axios from "axios"


//from CartItem GET: id, quantity, artId
//from the ArtID GET: imgUrl, price, 
//have an input field to adjust quantity
//have a button to remove from cart

const CartItem = ({ cartItems }) => {

  const [cartArt, setCartArt] = useState({});
  const [artSpecs, setArtSpecs] = useState({});
  const [itemQuantity, setItemQuantity] = useState(0);

  // const getCartItem = async () => {
  //   try {
  //     const currentItem = await axios.get(`/api/cart/${cartItemId}`)
  //     setCartArt(currentItem)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const getArtSpecs = async (artId) => {
    try {
      const currentArtwork = await axios.get(`/api/art/${cartArt.artId}`)
      // setArtSpecs(currentArtwork)
      return currentArtwork;
    } catch (error) {
      console.log(error);
    }
  }

  cartItems.map((eachItem)=> {
    // const art = getArtSpecs(eachItem.artId)
    // console.log(art)
    return(
      <div className="cart-item" key={eachItem.id}>
        <div>
          Hi
        </div>
      </div>
    )
      })
    }

export default CartItem





// import { useEffect, useState } from "react"
// import axios from "axios"


// //from CartItem GET: id, quantity, artId
// //from the ArtID GET: imgUrl, price, 
// //have an input field to adjust quantity
// //have a button to remove from cart

// // const CartItem = ({ cartItemId }) => {
// const CartItem = () => {
//   const cartItemId = 1;
  
//   const [cartArt, setCartArt] = useState({});
//   const [artSpecs, setArtSpecs] = useState({});
//   const [itemQuantity, setItemQuantity] = useState(1);

//   useEffect(() => {
//     const getCartItem = async () => {
//       try {
//         const currentItem = await axios.get(`/api/cart/${cartItemId}`)
//         setCartArt(currentItem)
//       } catch (error) {
//         console.log(error);
//       }
//       getCartItem();
//     }

//     const getArtSpecs = async () => {
//       try {
//         const currentArtwork = await axios.get(`/api/art/${cartArt.artId}`)
//         setArtSpecs(currentArtwork)
//       } catch (error) {
//         console.log(error);
//       }
//       getArtSpecs();
//     }

//   }, [])

//   return (
//     <div className="cart-item" key="cartItemId">
//       CartItem
//     </div>
//   )
// }

// export default CartItem