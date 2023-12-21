import { Link } from "react-router-dom"

// TODO: Add in welcome line: ie. welcome Dave...or welcome Guest (text tbd)
// TODO: Add in token logic to show login/logout/cart
// TODO: CSS

const Navigation = () => {
  return(
    <>
  <nav>
    <Link className='nav-link' to='/'>Home</Link>
    <Link className='nav-link' to='/artwork'>Browse All</Link>
    <Link className='nav-link' to='/login'>Login</Link>
    <Link className='nav-link' to='/register'>Register</Link>
    <Link className='nav-link' to='/cart'>Cart</Link>
    <Link className='nav-link' to='/checkout'>Checkout</Link>
  </nav>
  </>
  )
}

export default Navigation
