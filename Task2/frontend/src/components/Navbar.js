import { Link } from "react-router-dom";
import "../style/Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="logo">Product Management</h2>

            <ul className="nav-links">
                <li><Link to="/">Product List</Link></li>
                <li><Link to="/add">Add Product</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
