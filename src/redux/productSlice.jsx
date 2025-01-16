import { createSlice } from "@reduxjs/toolkit";
import { productOne, productThree, productTwo } from "../assets";

export const productSlice = createSlice({
    name: "product",
    initialState: [
        {
            id: 1,
            products_name: 'Nike Air Max SNDR',
            type: 'man shoes',
            description: 'this man shoes brooo',
            stock: 10,
            price: 2849000,
            img_url: productOne
        },
        {
            id: 2,
            products_name: 'Nike Air Max 90',
            type: 'unisex shoes',
            description: 'Costum Man s Shoes',
            stock: 10,
            price: 2489000,
            img_url: productTwo
        },
        {
            id: 3,
            products_name: 'Nike V2K Run',
            type: 'man shoes',
            description: 'this women shoes brooo',
            stock: 10,
            price: 1909000,
            img_url: productThree
        },
    ],
    reducers: {
        addToCartProduct: (state, payload) => {
            const findProduct = state.find(
                (product) => product.id === payload?.payload.id
            );

            if (findProduct.stock === 0) {
                alert("product habis")
                // let newProduct = { ...payload?.payload, stock: 1 };
                // state.push(newProduct);
                return;
            }

            if (findProduct) {
                state.map((product) => {
                    if (product.id === payload?.payload.id) {
                        product.stock -= 1;
                    }
                });
            }

        },
    }
})

export const { addToCartProduct } = productSlice.actions
export default productSlice.reducer