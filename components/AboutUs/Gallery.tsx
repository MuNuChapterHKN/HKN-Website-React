import styles from "@/styles/components/AboutUs/gallery.module.scss";
import {useEffect, useState} from "react";
import ArrowButton from "@/components/molecules/ArrowButton";
import { fetchPhotogallery } from "@/pages/api/directus";

export default function Gallery({ className } : { className?: string }) {

    const [images, setImages] = useState<{ src: string; title: any; date: any }[]>([]);
    useEffect(() => {
        const fetchImages = async () => {
            const data = await fetchPhotogallery();
            setImages(data);
        };
        fetchImages();
    }, []);

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

    if (images.length === 0) {
        return (
            <div className={`${styles.gallery} ${className}`}>
                <div className={styles.gallery__center}>
                    <div className={styles.gallery__uptitle}>
                        photogallery
                    </div>
                    <div className={styles.gallery__title}>
                        Our best
                        Shots
                    </div>
                    <div className={styles.carousel}>
                        <div className={styles.carousel__container}>
                            <img
                                src="/Activities/StudyGroups/clock.png"
                                alt="Loading..."
                                className={styles.carousel__image}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
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
