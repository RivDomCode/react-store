import { Link } from 'react-router-dom';
import { BsShop, BsFillCartFill} from "react-icons/bs";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar__logo">
            <BsShop className='navbar__logo__icon'/>
            Logo
        </div>
        <div className="navbar__search">
            <input type="text" placeholder='Search a product...'/>
            <input type="submit" value="Search"/>
        </div>
        <div className="navbar__links">
            <Link to="/crud">Create a Product</Link>
            <Link to="/favorites">Favorites List</Link>
            <Link to="/cart">Shopping-Cart <BsFillCartFill/></Link>
        </div>
    </div>
  )
}

export default Navbar