import { IPropsSearchProduct } from '~src/types/product.type'
import InputText from '../UIKIT/InputText/InputText'
import content from '../../constans/content'


export const SearchProduct = (props: IPropsSearchProduct) => {
    return (
        <div >
            <InputText
                type="text"
                onChange={props.handleOnChangeText}
                value={props.searchInput}
                placeholder={content.searchProductPlaceholder}
            />
        </div>
    )
}
