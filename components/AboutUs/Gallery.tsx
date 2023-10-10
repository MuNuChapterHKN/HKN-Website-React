import styles from "@/styles/components/AboutUs/gallery.module.scss";
import {useEffect, useState} from "react";
import ArrowButton from "@/components/molecules/ArrowButton";

const images = [
    {title: "Chapter's Birthday", src: "/AboutUs/Gallery/Compleanno del Chapter - March 2023.JPG", date: "March 2023"},
    {title: "Internal Training Reply", src: "/AboutUs/Gallery/Formazione Interna Reply - May 2023.jpeg", date: "May 2023"},
    {title: "Founders'Day", src: "/AboutUs/Gallery/Founders' Day - October 2022.JPG", date: "October 2022"},
    {title: "Hexakappathlon", src: "/AboutUs/Gallery/Hexakappathlon - June 2023.jpg", date: "June 2023"},
    {title: "Mental Wellness & Digital Wellbeing", src: "/AboutUs/Gallery/Mental Wellness & Digital Wellbeing - June 2023.jpg", date: "June 2023"},
]

// get the following 3 images from the current index
const getCurrentImages = (currentIndex: number) => {
    const imagesToShow = 3;
    const imagesLength = images.length;

    const currentImages = [];
    for (let i = 0; i < imagesToShow; i++) {
        currentImages.push(images[(currentIndex + i) % imagesLength]);
    }

    return currentImages;
}

export default function Gallery({ className } : { className?: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const getCurrentClassNames = (index : number) => {
        const diff = Math.abs(index - currentIndex) % images.length;
        if (diff === 0) return styles.carousel__container__0;
        if (diff === 1) return styles.carousel__container__1;
        if (diff === 2) return styles.carousel__container__2;
        if (diff === images.length - 1) return styles.carousel__container__3;
        return styles.carousel__container__next;
    };


    return (
        <div className={`${styles.gallery} ${className}`}>
            <ArrowButton className={styles.gallery__arrows} color="#061E33" onClick={handlePrev} left/>

            <div className={styles.gallery__center}>
                <div className={styles.gallery__uptitle}>
                    photogallery
                </div>
                <div className={styles.gallery__title}>
                    Our best
                    Shots
                </div>

                <div className={styles.carousel}>
                    {images.map((image, index) => (
                        <div key={index} className={`${styles.carousel__container} ${getCurrentClassNames(index)}`}>
                            <img
                                src={image.src}
                                alt={`Image ${index}`}
                                className={styles.carousel__image}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                <div className={styles.gallery__name}>
                    {images[currentIndex].title}
                </div>
                <div className={styles.gallery__date}>
                    {images[currentIndex].date}
                </div>
            </div>

            <ArrowButton className={styles.gallery__arrows} color="#061E33" onClick={handleNext} right/>
        </div>
    );
};
