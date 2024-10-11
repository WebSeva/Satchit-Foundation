import React,{useRef} from 'react';
import styles from '@/styles/Gallery.module.css';
export default function Gallery () {
    const galleryRef = useRef(null);

    const scrollLeft = ()=>{

    };

    const scrollRight = ()=>{

    };

    return(
        <div className={styles.galleryContainer}>
              
                <div className={styles.gallery} ref={galleryRef}>
                    <img src='/image1.png' className={styles.galleryImage} width={200} height={200}/>
                    <img src='/image6.png' className={styles.galleryImage} width={150} height={200}/>
                    <img src='/image3.png' className={styles.galleryImage} width={150} height={200}/>
                    <img src='/image4.png' className={styles.galleryImage} width={150} height={200}/>
                    <img src='/image7.png' className={styles.galleryImage} width={150} height={200}/>
                    <img src='/image10.jpeg' className={styles.galleryImage} width={150} height={200}/>
                    <img src='/image9.jpeg' className={styles.galleryImage} width={150} height={200}/>
                    <img src='/image11.jpeg' className={styles.galleryImage} width={150} height={200}/>
                    <img src='/image12.jpeg' className={styles.galleryImage} width={150} height={200}/>

                </div>
              
        </div>
    )
}