import Image from "next/image";

const ArrowButton = ({right, left, className, onClick, style, size} :
                     {right?: boolean, left?: boolean, className?: any, onClick: () => void, style? : any, size?: number}) => {

    const circleSize: number = size ? size : 50;
    const arrowSize: number = size ? Math.round(size * 0.7) : 35;

    return (
      <div style={{...style, width: circleSize, height: circleSize }} className={`arrowButton ${className}`} onClick={onClick}>
          <Image src={left ? "/left-arrow.svg" : "/right-arrow.svg"} alt="Arrow" width={arrowSize} height={arrowSize}/>
      </div>
    );
}

export default ArrowButton;
