import { Outlet } from 'react-router-dom'
import ProductList from './ProductList/ProductList'

const ProductSection = () => {
    return (
        <div className='flex flex-1'>
            <div className="flex-shrink">
                <ProductList />
            </div>
            <div className="flex-1 flex">
                <Outlet />
            </div>
        </div>
    )
}

export default ProductSection