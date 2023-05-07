import styles from "@/styles/components/molecules/RoundButton.module.css";

const RoundButton = ({ onClick, text, children, className, style }: { onClick: () => void, text: string, children: any, className: any, style: any}) => {

    return (
        <button style={style} className={`${styles.buttonMine} ${className}`} onClick={onClick}>
            <text className={styles.text}>{text}</text>
            {children}
        </button>
    );
};

export default RoundButton;
