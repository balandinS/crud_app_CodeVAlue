
import { IPropsTooltip } from "../../../types/UIKIT";
import useTooltip from "../../../hooks/useTooltip";

const Tooltip: React.FC<IPropsTooltip> = ({
    children,
    content,
}): React.JSX.Element => {
    const { showTooltip, onChangeVisableTooltip } = useTooltip()
    return (
        <div
            className="relative flex items-center"
            onMouseEnter={() => onChangeVisableTooltip(true)}
            onMouseLeave={() => onChangeVisableTooltip(false)}
        >
            {showTooltip && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-turbo text-white text-xs rounded shadow-md">
                    {content}
                </div>
            )}
            {children}
        </div>
    );
};

export default Tooltip;