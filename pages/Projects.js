import Head from "next/head";
import Navbar from "@/components/navbar";
import styles from '@/styles/Projects.module.css';
import Footer from "@/components/Footer";
import Assistant from "@/components/Assistant";
export default function Projects (){
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

                                        <h2 className={styles.newsDiv_top_header}>Projects by Satchit</h2>

                            </div>
                            <div className={styles.newsDiv_bottom}>
                       
                                    <div className={styles.newsDiv_block_second}>
                                                <div className={styles.newsDiv_block_second_left}>
                                                            <div className={styles.newsDiv_block_second_left_photo}>
                                                                    <img src="/project.png" className={styles.newsDiv_block_second_left_photo_image} width={150} height={150}/>
                                                            </div>
                                                </div>

                                                <div className={styles.newsDiv_block_second_right}>
                                                        <div className={styles.newsDiv_block_second_right_top}>
                                                            <h2 className={styles.newsDiv_block_header}>Women Empowerment via skills</h2>
                                                            <div className={styles.newsDiv_block_spacer}></div>
                                                        </div>

                                                        <div className={styles.newsDiv_block_second_right_bottom}>
                                                            <p>The foundation trained women to produce dhoopvati, saamrani hawan cups, and bakery items, providing free resources and training to help them achieve financial independence.</p>
                                                        </div>
                                                </div>
                                                
                                                {/* <br/> we run a school and implement various developmental activities in 50 villages, aiming to provide quality education and reduce rural migration. */}
                                    </div>
                                    <div className={styles.newsDiv_block}>
                                            <div className={styles.newsDiv_block_left}>
                                                    <div className={styles.newsDiv_block_left_top}>
                                                        <h2 className={styles.newsDiv_block_header}>Satchit Youth Club</h2>
                                                        <div className={styles.newsDiv_block_spacer}></div>
                                                    </div>

                                                    <div className={styles.newsDiv_block_left_bottom}>
                                                        <p>
                                                        Satchit Yuva Club, formed in January 2020, empowers youth through free sports academy admissions and fosters leadership, unity, and nation-building skills.</p>
                                                    </div>
                                            </div>
                                            <div className={styles.newsDiv_block_right}>
                                                        <div className={styles.newsDiv_block_right_photo}>
                                                                <img src="/project4.png" className={styles.newsDiv_block_right_photo_image} width={150} height={150}/>
                                                        </div>
                                            </div>
                                    </div>
                                    <div className={styles.newsDiv_block_second}>
                                                <div className={styles.newsDiv_block_second_left}>
                                                            <div className={styles.newsDiv_block_second_left_photo}>
                                                                    <img src="/project2.png" className={styles.newsDiv_block_second_left_photo_image} width={150} height={150}/>
                                                            </div>
                                                </div>

                                                <div className={styles.newsDiv_block_second_right}>
                                                        <div className={styles.newsDiv_block_second_right_top}>
                                                            <h2 className={styles.newsDiv_block_header}>Old-Age Recreational Center</h2>
                                                            <div className={styles.newsDiv_block_spacer}></div>
                                                        </div>

                                                        <div className={styles.newsDiv_block_second_right_bottom}>
                                                            <p> A center was established for senior citizens to engage in recreational activities, receive social support, improve their quality of life, offering them space to overcome loneliness.</p>
                                                        </div>
                                                </div>
                                                
                                                {/* <br/> we run a school and implement various developmental activities in 50 villages, aiming to provide quality education and reduce rural migration. */}
                                    </div>
                                    <div className={styles.newsDiv_block}>
                                            <div className={styles.newsDiv_block_left}>
                                                    <div className={styles.newsDiv_block_left_top}>
                                                        <h2 className={styles.newsDiv_block_header}>Awareness Programs</h2>
                                                        <div className={styles.newsDiv_block_spacer}></div>
                                                    </div>

                                                    <div className={styles.newsDiv_block_left_bottom}>
                                                        <p>Government school students (15+) were introduced to KVIC training programs at Rajghat, New Delhi, through a community awareness visit by the Khadigram team at Satchit Foundation.</p>
                                                    </div>
                                            </div>
                                            <div className={styles.newsDiv_block_right}>
                                                        <div className={styles.newsDiv_block_right_photo}>
                                                                <img src="/project5.png" className={styles.newsDiv_block_right_photo_image} width={150} height={150}/>
                                                        </div>
                                            </div>
                                    </div>
                                    <div className={styles.newsDiv_block_second}>
                                                <div className={styles.newsDiv_block_second_left}>
                                                            <div className={styles.newsDiv_block_second_left_photo}>
                                                                    <img src="/image1.png" className={styles.newsDiv_block_second_left_photo_image} width={150} height={150}/>
                                                            </div>
                                                </div>

                                                <div className={styles.newsDiv_block_second_right}>
                                                        <div className={styles.newsDiv_block_second_right_top}>
                                                            <h2 className={styles.newsDiv_block_header}>Satchit SHG</h2>
                                                            <div className={styles.newsDiv_block_spacer}></div>
                                                        </div>

                                                        <div className={styles.newsDiv_block_second_right_bottom}>
                                                            <p>Formed Self Help Group (SHG) in Madhu Vihar to help women generate income through home-based work, like making banana powder, pickles, and other products.</p>
                                                        </div>
                                                </div>
                                                
                                                {/* <br/> we run a school and implement various developmental activities in 50 villages, aiming to provide quality education and reduce rural migration. */}
                                    </div>
                                    <div className={styles.newsDiv_block}>
                                            <div className={styles.newsDiv_block_left}>
                                                    <div className={styles.newsDiv_block_left_top}>
                                                        <h2 className={styles.newsDiv_block_header}>Satchit Classes</h2>
                                                        <div className={styles.newsDiv_block_spacer}></div>
                                                    </div>

                                                    <div className={styles.newsDiv_block_left_bottom}>
                                                        <p>The foundation provided free English and vocational training classes for over 80 students, ranging from children to housewives.</p>
                                                    </div>
                                            </div>
                                            <div className={styles.newsDiv_block_right}>
                                                        <div className={styles.newsDiv_block_right_photo}>
                                                                <img src="/image8.jpeg" className={styles.newsDiv_block_right_photo_image} width={150} height={150}/>
                                                        </div>
                                            </div>
                                    </div>
                                    
                                   
                            </div>
                    </div>
                    <Footer/>
                </div>
        </>
    )
}