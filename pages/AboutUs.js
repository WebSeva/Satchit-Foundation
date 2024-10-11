import Head from "next/head";
import Navbar from "@/components/navbar";
import styles from '@/styles/AboutUs.module.css';
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Assistant from "@/components/Assistant";
import DocumentGallery from "@/components/DocumentGallery";
export default function AboutUs (){
    return(
        <>
            <Head>
                <title>Satchit Foundation</title>
                <meta name="description" content="Satchit Foundation is a non-profit organization dedicated to empowering marginalized communities in South West Delhi through education, skill development, and women's empowerment. Join us in making a difference by supporting our programs that uplift lives and foster self-reliance." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"/>
            </Head>
            <div className={styles.container}>
                <Assistant/>
                <div className={styles.topDiv} style={{backgroundImage:'/about.jpeg'}}>
                         <Navbar/>
                </div>
                        
                <div className={styles.newsDiv}>
                  <div className={styles.newsDiv_top}>

                             <h2 className={styles.newsDiv_top_header}>Learn About Satchit</h2>

                  </div>
                  <div className={styles.newsDiv_bottom}>   
                       
                        <div className={styles.newsDiv_block_second}>
                                    <div className={styles.newsDiv_block_second_left}>
                                                <div className={styles.newsDiv_block_second_left_photo}>
                                                        <img src="/image1.png" className={styles.newsDiv_block_second_left_photo_image} width={150} height={150}/>
                                                </div>
                                    </div>

                                    <div className={styles.newsDiv_block_second_right}>
                                            <div className={styles.newsDiv_block_second_right_top}>
                                                <h2 className={styles.newsDiv_block_header}>Our Mission</h2>
                                                <div className={styles.newsDiv_block_spacer}></div>
                                            </div>

                                            <div className={styles.newsDiv_block_second_right_bottom}>
                                                <p className={styles.newsDiv_block_paragraph}>Satchit Foundation's mission is to empower marginalized communities through education and skill development for self-reliance.</p>
                                            </div>
                                    </div>
                                    {/* <br/> we run a school and implement various developmental activities in 50 villages, aiming to provide quality education and reduce rural migration. */}
                        </div>

                        <div className={styles.newsDiv_block}>
                                <div className={styles.newsDiv_block_left}>
                                        <div className={styles.newsDiv_block_left_top}>
                                            <h2 className={styles.newsDiv_block_header}>Our Vision</h2>
                                            <div className={styles.newsDiv_block_spacer}></div>
                                        </div>

                                        <div className={styles.newsDiv_block_left_bottom}>
                                            <p className={styles.newsDiv_block_paragraph}>Satchit Foundation's vision is to create a society where individuals achieve self-reliance and lead dignified lives through education and empowerment</p>
                                        </div>
                                </div>
                                <div className={styles.newsDiv_block_right}>
                                            <div className={styles.newsDiv_block_right_photo}>
                                                    <img src="/image5.png" className={styles.newsDiv_block_right_photo_image} width={150} height={150}/>
                                            </div>
                                </div>
                        </div>

                       





                                

                    </div>
                       

                </div>
                <div className={styles.infoDiv}>
                            <div className={styles.infoDiv_top}>
                                <h2 className={styles.infoDiv_top_header}>Our Capacity And Experience</h2>
                                <div className={styles.infoDiv_spacer}></div>
                                <div className={styles.infoDiv_top_description}>
                                    <p className={styles.infoDiv_top_paragraph}>Satchit Foundation has significant experience in empowering marginalized communities, focusing on education, women’s empowerment, and skill development since its establishment in 2019. The foundation has successfully implemented various training programs and initiatives that promote self-reliance and improve living conditions for women, youth, and vulnerable groups.</p>
                                </div>
                            </div>
                            <div className={styles.infoDiv_bottom}>
                                 <h2 className={styles.infoDiv_top_header}>Our Values</h2>
                                <div className={styles.infoDiv_spacer}></div>
                                <div className={styles.infoDiv_top_description}>
                                    <p className={styles.infoDiv_top_paragraph}>At Satchit Foundation, we encourage the following values to be upheld both individually and organizationally:

                                        </p>
                                    <ul className={styles.infoDiv_bottom_list}>
                                        <li>Empowerment</li>
                                        <li>Compassion</li>
                                        <li>Integrity</li>
                                        <li>Collaboration</li>
                                        <li>Sustainability</li>
                                        <li>Education</li>
                                        {/* <li>Participation</li>
                                        <li>Solidarity</li> */}
                                    </ul>
                                </div>
                            </div>
                            

                </div>
                <div className={styles.galleryHolder}>
                    <div className={styles.galleryHolder_top}>
                        <div className={styles.galleryHolder_top_content}>
                         <h2 className={styles.galleryHolder_top_header}>Photo Gallery</h2>
                        </div>
                    </div>
                     <Gallery/>

                    
                </div>

                <div className={styles.galleryHolder}>
                    <div className={styles.galleryHolder_top}>
                        <div className={styles.galleryHolder_top_content}>
                         <h2 className={styles.galleryHolder_top_header}>Reports</h2>
                        </div>
                    </div>
                     <DocumentGallery/>

                    
                </div>
                
                <Footer/>
            
            </div>
        </>
    )
}
