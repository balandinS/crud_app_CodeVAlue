import { IPropsTitleProductDetails } from '../../types/product.type'

const ProductDetailsTitle = (props: IPropsTitleProductDetails) => {

  return (
    <div className='p-[8px] bg-white -translate-y-5 w-[150px]'>
      {props.title}
    </div>
  )
}

export default ProductDetailsTitle