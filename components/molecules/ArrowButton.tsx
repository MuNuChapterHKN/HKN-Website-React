import Image from "next/image";

const ArrowButton = ({right, left, className, onClick, style} :
                     {right?: boolean, left?: boolean, className?: any, onClick: () => void, style? : any}) => {

    return (
      <div style={style} className={`arrowButton ${className}`} onClick={onClick}>
          <Image src={left ? "/left-arrow.svg" : "/right-arrow.svg"} alt="Arrow" width={35} height={35}/>
      </div>
    );
}

export default ArrowButton;
