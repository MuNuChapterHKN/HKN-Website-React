import styles from "@/styles/components/Polygon.module.css";
import {CSSProperties, RefObject, useEffect, useRef, useState} from "react";

const Polygon = ({width, height, vertices, gradient, animationSpeed, top, left, right} : PolygonProps) => {

    const style : CSSProperties= {
        position: 'absolute',
        width: width,
        height: height,
        top: top,
        left: left ? left : 'auto',
        right: right ? right : 'auto',
        background: gradient,
        clipPath: "polygon(" + vertices.map((vertex : any) => vertex.x + "% " + vertex.y + "%").join(", ") + ")",
    }

    return (
        <div style={style}/>
    )
}

export default Polygon;

export interface PolygonProps {
    width: number,
    height : number,
    vertices : object[],
    gradient : any,
    animationSpeed? : number,
    top: number,
    left? : number,
    right? : number
}
