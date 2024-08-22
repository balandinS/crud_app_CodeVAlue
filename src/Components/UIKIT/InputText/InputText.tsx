import { IPropsInput } from "../../../types/UIKIT";

function InputText<T extends string | number | readonly string[] | undefined>({
    placeholder,
    value,
    type,
    onChange,
    className = "mt-1 block w-full px-3 py-2 border border-black bg-white text-black rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:turbo focus:border-turbo text-left",
}: IPropsInput<T>): JSX.Element {
    return (
        <input
            value={value}
            type={type}
            placeholder={placeholder}
            className={`${className}`}
            onChange={onChange}
        />
    );
}

export default InputText;