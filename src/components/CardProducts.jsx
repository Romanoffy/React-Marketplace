import { useDispatch } from "react-redux"
import { addToCart } from "../redux/cartSlice"
import { addToCartProduct } from "../redux/productSlice"

const CardProducts = ({ product }) => {
    const dispacth = useDispatch()
    return (
        <div className="col-lg-4">
            <div className="card" style={{ width: "18rem" }}>
                <img src={product?.img_url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product?.products_name}</h5>
                    <h6 className="card-title">Price: {product?.price}</h6>
                    <p className="card-text">{product?.description}</p>
                    <p className="card-text">Stock: {product?.stock}</p>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => {
                            dispacth(addToCart(product));
                            dispacth(addToCartProduct(product));
                        }}


                    >
                        Add To Chart</button>
                </div>
            </div>
        </div>
    )
}

export default CardProducts