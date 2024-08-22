import React from 'react'
import { useProductsDetails } from '../../hooks/useProductDetails'
import content from '../../constans/content'
import ProductDetailsTitle from './ProductDetailsTitle';

export default function ProductDetails() {
    const selectedProduct = useProductsDetails();
    return (
        <div className='flex flex-1 flex-col mt-[50px] '>
            <div className='border-[2px] w-3/4 h-3/6  border-black '>
                <ProductDetailsTitle title={content.titleProductDetails.replace('{productName}', selectedProduct.name ?? '')} />
            </div>
        </div>
    )
}
