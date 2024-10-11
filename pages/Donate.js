import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Assistant from "@/components/Assistant";
import styles from '@/styles/Donate.module.css';
export default function Donate (){
    return(
        <>  
            <Head>
                <title>Satchit Foundation</title>
                <meta name="description" content="Satchit Foundation is a non-profit organization dedicated to empowering marginalized communities in South West Delhi through education, skill development, and women's empowerment. Join us in making a difference by supporting our programs that uplift lives and foster self-reliance." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"/>
                <link rel="icon" href="/logo.jpeg" />
                </Head>

                <div className={styles.container}>
                <Assistant/>
                    <div className={styles.topDiv}>
                         <Navbar/>
                    </div>
                    <div className={styles.newsDiv}>
                            <div className={styles.newsDiv_top}>

                                        <h2 className={styles.newsDiv_top_header}>Donate Us</h2>

                            </div>

                            <div className={styles.donateDiv}>
                                        <img src={"/donate.jpeg"} className={styles.donateImage} width={150} height={150} />
                            </div>
                    </div>
                    <Footer/>
                </div>
        </>
    )
}