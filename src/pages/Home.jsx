
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    bannerFour,
    bannerOne,
    bannerThree,
    bannerTwo,
    productOne,
    productThree,
    productTwo
} from "../assets"
import Slider from "react-slick";
import { useState } from "react";
import CardProducts from "../components/CardProducts";

const Home = () => {
    const [listProduct, setListProduct] = useState([
        {
            id: 1,
            products_name: 'Shoes Office',
            type: 'man shoes',
            description: 'this man shoes brooo',
            stock: 10,
            price: 250000,
            img_url: productOne
        },
        {
            id: 2,
            products_name: 'Shoes Sport',
            type: 'man shoes',
            description: 'this man shoes Sport brooo',
            stock: 10,
            price: 350000,
            img_url: productTwo
        },
        {
            id: 3,
            products_name: 'Shoes Boats',
            type: 'women shoes',
            description: 'this women shoes brooo',
            stock: 10,
            price: 2500000,
            img_url: productThree
        },
    ])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <div className="container mt-4">
            <Slider {...settings}>
                <img src={bannerOne} className="img-fluid" alt="/banner/banner_1.jpeg" />
                <img src={bannerTwo} className="img-fluid" alt="/banner/banner_2.jpeg" />
                <img src={bannerThree} className="img-fluid" alt="/banner/banner_3.jpeg" />
                <img src={bannerFour} className="img-fluid" alt="/banner/banner_4.jpeg" />
            </Slider>
            <div className="row mt-5">
                {
                    listProduct?.map((p, idx) => <CardProducts product={p} key={idx} />)
                }
            </div>
        </div>
    )
}

export default Home