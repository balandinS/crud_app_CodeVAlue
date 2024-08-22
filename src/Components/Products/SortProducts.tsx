
import content from '../../constans/content';
import Component from '..'
import { IPropsSortProduct } from '../../types/product.type';
const SortProducts = (props: IPropsSortProduct): JSX.Element => {
    return (
        <div className="w-full max-w-xs mx-auto mb-5">
            <Component.Tooltip content={content.tooltipSortProducts}>
                <Component.Select
                    className="mt-1 block w-[50%] px-3 py-2 border border-turbo bg-white text-black rounded-md text-sm shadow-sm placeholder-gray-400 focus:turbo focus:ring-turbo focus:border-turbo text-left"
                    options={content.sortProductsOptions}
                    handleChange={props.handleSortChange}
                    value={props.sortByCriteria}
                    placeholder={content.productSortPlaceHolder}
                />
            </Component.Tooltip>
        </div>
    );
};


export default SortProducts