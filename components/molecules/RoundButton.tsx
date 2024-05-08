import styles from "@/styles/components/molecules/RoundButton.module.css";

const RoundButton = ({ onClick, children, className, style }: { onClick?: () => void, children?: any, className?: any, style?: any}) => {

    return (
        <button style={style} className={`roundButton ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default RoundButton;
