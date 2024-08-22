import React from 'react'
import { deleteProduct, productSelector } from "../Store/productsReducer/products.slice"
import { useAppDispatch, useAppSelector } from "./useRedux"
import { ProductTyped } from '../types/product.type'
import { useNavigate } from 'react-router-dom'
import { RoutePaths } from '../Enums/RoutesEnums';
import { sortByCriteriaCalc } from '../utilities'



const useProductList = (searchInput: string, sortByCriteria: "name" | "date_desc" | "date_asc" | ''): {
    productList: ProductTyped[],
    onClickItem: (idProduct: string) => void;
    onClickDeleteItem: (idProduct: string) => void;
    onAddNewProduct: () => void

} => {
    const products = useAppSelector(productSelector).products
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const onClickItem = React.useCallback((idProduct: string) => {
        navigate(`/products/${idProduct}`)
    }, [])
    const onClickDeleteItem = React.useCallback((idProduct: string) => {
        dispatch(deleteProduct(idProduct));
    }, [])
    const onAddNewProduct = React.useCallback(() => {
        navigate(`/products/${RoutePaths.ADD_PRODUCT}`)
    }, [])
    const productList = React.useMemo((): ProductTyped[] => {
        if (!products)
            return [];
        const productListSorted = sortByCriteriaCalc(sortByCriteria, products)
        if (searchInput) {
            const filteredProducts = productListSorted.filter((product) => {
                if (product.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())) {
                    return true
                }
                if (product.description?.toLowerCase().includes(searchInput.toLocaleLowerCase())) {
                    return true
                }
                return false
            })

            return filteredProducts
        }
        return productListSorted
    }, [products, searchInput, sortByCriteria])
    return { productList, onClickItem, onClickDeleteItem, onAddNewProduct };
}

export default useProductList