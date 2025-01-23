import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const Navbar = () => {
    const { cart } = useSelector(root => root);

    let cartInit = 0;
    cart?.forEach((element) => (cartInit += element.stock));

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"> | MARKETPLACE PPLG 2 |</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/product">Products</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search" id="cart-detail-orders-view">
                        <Link to="/cart">
                            <i className="fa-solid fa-cart-shopping" style={{ color: 'black' }}> {cartInit}</i>
                           
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar