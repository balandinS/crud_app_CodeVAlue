import { useParams } from "react-router-dom";
import { useAppSelector } from "./useRedux";
import { productSelector } from "../Store/productsReducer/products.slice";
import React from "react";
import { ProductTyped } from "../types/product.type";


export const useProductsDetails = (): ProductTyped => {
    const { productID } = useParams();
    const products = useAppSelector(productSelector).products

    const selectedProduct = React.useMemo(() => {

        const findProduct = products?.find((product: ProductTyped) => product.id === productID) ?? {
            id: '',
            name: '',
            description: '',
            price: 0,
            image: '',
            date: '',
        }

        return findProduct;

    }, [productID, products])

    return selectedProduct

}