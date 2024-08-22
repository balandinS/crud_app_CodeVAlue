import { IPropsButton } from '../../../types/UIKIT'

const Button = (props: IPropsButton): JSX.Element => {
    return (
        <button
            type={props.type}
            className={`inline-flex justify-center rounded-md bg-turbo border-[2px] border-black py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${props.disabled ? "bg-gray-400 cursor-not-allowed hover:bg-gray-400" : ""
                } ${props.className}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.node && props.node}
            {props.title}
        </button>
    )
}

export default Button

