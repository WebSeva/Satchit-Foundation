import { useState,useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Navbar (){
    const router = useRouter();
    const [windowSize,setWindowSize] = useState({
        width:0,
        height:0
    });
    const [buttonState,setButtonState] = useState(false);
    useEffect(()=>{
        const handleResize = ()=>{
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        };
        handleResize();
        
        window.addEventListener('resize',handleResize);
        return()=>window.removeEventListener('resize',handleResize);
    },[]);

    const handleButton  =()=>{
        setButtonState(!buttonState);
    }
    
    return(
        <div className="navbar" style={{}}>
        <nav className={`${styles.mainnav}`}>
                <ul>
                    
                  <div className={styles.navbar_body}>
                        <Link href={'/'}>
                            <div className={styles.logoContainer}>
                            
                                <p className={styles.logoname}>Satchit Foundation</p>
                            </div>
                        </Link>

                        {windowSize.width > 769 ?
                            <div className={styles.pageContainer}>
                                <Link href={'/AboutUs'} className={router.pathname === '/AboutUs' ? styles.signupdiv_active : styles.signupdiv}>
                                    <p className={styles.signuptext}>About Us</p>
                                </Link>
                                <Link href='/Projects' className={router.pathname === '/Projects' ? styles.signupdiv_active : styles.signupdiv}>
                                    <p className={styles.signuptext}>Projects</p>
                                
                                </Link>
                                
                            
                                <Link href="/Donate" className={router.pathname === '/ContactUs' ? styles.signupdiv_active : styles.signupdiv} >
                                    <p className={styles.signuptext}>Donate</p>
                                    
                                </Link>
                            </div>
                        : 
                       
                                <button className={styles.closeButton} onClick={handleButton}>
                                    <img src={buttonState ? '/close.png' : '/more.png'} width={30} height={30}/>
                                </button>
                      
                         
                        }

                    </div>
                   
                        
                </ul>

               
        </nav>
            {buttonState && (
                            <div className={styles.pageContainer_Mobile}>
                                <Link href={'/AboutUs'} className={styles.page_link}>
                                    <p className={styles.signuptext}>About Us</p>
                                </Link>
                                <Link href='/Projects' className={styles.page_link}>
                                    <p className={styles.signuptext}>Projects</p>
                                
                                </Link>
                                {/* <Link href="/GetInvolved" className={styles.page_link}>
                                    <p className={styles.signuptext}>Get Involved</p>
                                </Link> */}
                            
                                <Link href="/Donate" className={styles.page_link}>
                                    <p className={styles.signuptext}>Donate</p>
                                    
                                </Link>
                            </div>
                        )}
        </div>
    )
}