import Image from "next/image";

const ArrowButton = ({right, left, className, onClick, style, size, color}:
                         {
                             right?: boolean,
                             left?: boolean,
                             className?: any,
                             onClick: any,
                             style?: any,
                             size?: number,
                             color?: string
                         }) => {

    const circleSize: number = size ? size : 50;
    const arrowSize: number = size ? Math.round(size * 0.7) : 35;
    const arrowColor: string = color ? color : "#061E33";

    return (
        <div style={{...style, width: circleSize, height: circleSize}} className={`arrowButton ${className}`}
             onClick={onClick}>
            {left ?
                <svg style={{marginLeft: "-4px"}} xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512" width={arrowSize} height={arrowSize} stroke-linecap="round" stroke-linejoin="round" stroke-width="48">
                    <path fill="none" stroke={arrowColor} d="M328 112L184 256l144 144" />
                </svg>
                :
                <svg style={{marginLeft: "4px"}} xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512" width={arrowSize} height={arrowSize} stroke-linecap="round" stroke-linejoin="round" stroke-width="48">
                    <path fill="none" stroke={arrowColor} d="M184 112l144 144-144 144"/>
                </svg>
            }
        </div>
    );
}

export default ArrowButton;
