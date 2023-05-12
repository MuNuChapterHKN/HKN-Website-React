import styles from "@/styles/components/molecules/RoundButton.module.css";

const RoundButton = ({ onClick, textButton, children, className, style }: { onClick?: () => void, textButton?: string, children?: any, className?: any, style?: any}) => {

    return (
        <button style={style} className={`${styles.button} ${className}`} onClick={onClick}>
            <text className={styles.text}>{textButton}</text>
            {children}
        </button>
    );
};

export default RoundButton;
