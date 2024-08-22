import content from '../../../constans/content'
import Components from '../../../Components'
import { IPropsItemProduct } from '../../../types/product.type'
const NOOP = (str = '') => { }
const ProductItem = (props: IPropsItemProduct) => {
    const { onClickItem = NOOP, onDelete = NOOP } = props
    return (
        <div onClick={() => {
            const param = props.id ?? ''
            onClickItem(param)
        }} className="flex shrink border-black border-[2px] mt-[24px] rounded-sm py-[16px]">
            <div className="flex flex-1 px-[18px]">
                <img
                    src={props.image}
                    alt={props.name}
                    loading="lazy"
                    className='w-[60px] h-[60px] mb-4 cursor-pointer rounded-lg mr-4'
                />
            </div>
            <div className="flex flex-2 flex-col">
                <h4 className='text-base font-bold'>{props.name}</h4>
                {props.description && (<div className='text-sm'>
                    {props.description}
                </div>)}
            </div>
            <div className="flex flex-1 justify-center items-center px-[8px]">
                <Components.Button className='h-[30px] justify-center py-0 items-center' type="button" title={content.deleteProductBtn} onClick={(event) => {
                    event.stopPropagation();
                    const param = props.id ?? ''
                    onDelete(param)
                }
                } />
            </div>
        </div>
    )
}

export default ProductItem