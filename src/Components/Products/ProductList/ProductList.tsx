
import { ProductTyped } from '../../../types/product.type'
import useProductList from '../../../hooks/useProductList'
import ProductItem from './ProductItem'
import useSearchInput from '../../../hooks/useSearchInput'
import { SearchProduct } from '../SearchProduct'
import Button from '../../UIKIT/Button/Button'
import content from '../../../constans/content'
import SortProducts from '../SortProducts'
import useSortProducts from '../../../hooks/useSortProducts'

const ProductList = () => {
    const { searchInput, handleOnChangeText } = useSearchInput()
    const { sortByCriteria, handleSortChange } = useSortProducts()
    const { productList, onClickDeleteItem, onClickItem, onAddNewProduct } = useProductList(searchInput, sortByCriteria)
    return (
        <div>
            <div className='flex gap-4 mt-[24px] px-[24px] '>
                <Button className="bg-pure_apple text-white h-[60px]" title={content.addNewProductBtn} onClick={onAddNewProduct} type="button" />
                <SearchProduct searchInput={searchInput} handleOnChangeText={handleOnChangeText} />
                <SortProducts sortByCriteria={sortByCriteria} handleSortChange={handleSortChange} />
            </div>

            <div className="p-4 grid grid-cols-1">

                {productList.map((product: ProductTyped) => {
                    return <ProductItem
                        id={product.id}
                        name={product.name}
                        description={product.description}
                        date={product.date}
                        image={product.image}
                        price={product.price}
                        onClickItem={onClickItem}
                        onDelete={onClickDeleteItem} />
                })}
            </div>
        </div>

    )
}

export default ProductList