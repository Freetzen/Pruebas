
import axios from "axios"
import styles from './Pricing.module.css';
import { FaCheck } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { MdStars } from "react-icons/md";
import { useEffect, useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import pricingProvider from "../../utils/provider/pricingProvider/pricingProvider";

const Pricing = ({ quote }) => {

    const infoUser = JSON.parse(localStorage.getItem('info'))

    initMercadoPago('TEST-a17e8b8f-91a1-4351-bc9c-cdb9d1033859', { locale: "es-AR" });

    const [preferenceId, setPreferenceId] = useState('')

    const [project, setProject] = useState({
        title: "",
        price: 0,
        quantity: 1,
        quote,
        email: infoUser.email
    })

    const handleClick = async (e) => {
        setPreferenceId('')
        console.log('1')
        const newProject = {
            ...project,
            'title': e.target.name,
            'price': e.target.value
        };
        
        await setProject(newProject)
        console.log('2')
        
    } 
    console.log('3', project)

    useEffect(() => {
        handleBuy();
    }, [project])


    const handleBuy = async () => {
        console.log('4')
        const id = await pricingProvider.createPreference(project)
        console.log('ID', id)
        if (id) {
            await setPreferenceId(id)
        }
    }

    return (
        <>
            <section className={styles.pricing}>
                <div className={styles.container}>
                    {/* CARD 1 */}
                    <div className={styles.header}>
                        <img src="./images/responsive.png" />
                        <h1>Basic Plan</h1>
                    </div>

                    <div className={styles.detail}>
                        <p><span className={styles.check}><FaCheck /></span> <b> 1 </b>  Website</p>
                        <p><span className={styles.check}><FaCheck /></span> <b></b>  Custom domain</p>
                        <p><span className={styles.check}><FaCheck /></span> <b></b>  SSL certificate</p>
                        <p><span className={styles.check}><FaCheck /></span> <b></b>  Advanced security features, such as end-to-end encryption.</p>
                        <p><span className={styles.check}><FaCheck /></span> <b></b> Priority access to new features and updates.</p>
                        <p><span className={styles.check}><FaCheck /></span> <b>20</b>  Fields per form</p>
                        <p><span className={styles.check}><FaCheck /></span> <b></b>  Personalized email</p>
                        <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  Personalized website</p>
                        <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  Subscriptions / Transactional portal</p>
                        <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  Site Booster app</p>
                        <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  Email automations</p>
                        <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  Analytics app</p>
                        <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  Professional logo</p>
                        <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  Social media management</p>
                        <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  Multi-site dashboard & admins</p>
                        <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  live chat</p>
                        <p><span className={styles.star}><MdStars /></span> <b></b>  24/7 customer care</p>
                    </div>

                    <div className={styles.price}>
                        <p><sup>$</sup>9.99<sub>/month</sub></p>
                    </div>


                    <button className={styles.cardbutton} name="Basic Plan" value='9.99' onClick={handleClick}>Get Started</button>
                    {
                        preferenceId && project.title === "Basic Plan" && <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />
                    }



                </div>

                {/* CARD 2 */}
                <div className={styles.container}>
                    <div className={styles.header}>
                        <img src="./images/medium.png" />
                        <h1>Business Plan</h1>
                    </div>

                    <div className={styles.detail}>
                        <p><span className={styles.check}><FaCheck /></span> <b></b>  Registration with other platforms.</p>
                        <p><span className={styles.check}><FaCheck /></span> <b></b>  Custom domain.</p>
                        <p><span className={styles.check}><FaCheck /></span> <b></b> Templates predefined.</p>
                        <p><span className={styles.check}><FaCheck /></span> <b>10</b>  Fields per form.</p>
                        <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  Personalized email</p>
                        <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  SSL certificate.</p>
                        <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  Priority access to new features and updates.</p>
                        <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  Email automations</p>
                        <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  Multi-site dashboard & admins</p>
                        <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  live chat</p>
                        <p><span className={styles.nocheck}><MdCancel /></span> <b></b>  AI personalized live chat</p>
                    </div>

                    <div className={styles.price}>
                        <p><sup>$</sup>1500<sub>USD</sub></p>
                    </div>

                    <button className={styles.cardbutton} name="Business Plan" value='1500' onClick={handleClick}>Get Started</button>
                    {
                        preferenceId && project.title === "Business Plan" && <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />
                    }


                </div>

                {/* CARD 3 */}
                <div className={styles.container}>
                    <div className={styles.header}>
                        <img src="./images/basic.png" />
                        <h1>Enterprise Plan</h1>
                    </div>

                    <div className={styles.detail}>
                        <p><span className={styles.check}><FaCheck /></span> <b></b>  SSL certificate.</p>
                        <p><span className={styles.check}><FaCheck /></span> <b></b>  Registration with other platforms.</p>
                        <p><span className={styles.check}><FaCheck /></span> <b></b>  Custom domain.</p>
                        <p><span className={styles.check}><FaCheck /></span> <b></b>  Priority access to new features and updates.</p>
                        <p><span className={styles.check}><FaCheck /></span> <b></b>  Personalized website.</p>
                        <p><span className={styles.check}><FaCheck /></span> <b></b>  Personalized email.</p>
                        <p><span className={styles.check}><FaCheck /></span> <b></b>  Email automations</p>
                        <p><span className={styles.check}><FaCheck /></span> <b></b>  Multi-site dashboard & admins</p>
                        <p><span className={styles.check}><FaCheck /></span> <b></b>  live chat</p>
                        <p><span className={styles.check}><FaCheck /></span> <b></b>  AI personalized live chat</p>
                        <p><span className={styles.check}><FaCheck /></span> <b>+30</b>  Fields per form</p>
                    </div>

                    <div className={styles.price}>
                        <p><sup>$</sup>2300<sub>USD</sub></p>
                    </div>


                    <button className={styles.cardbutton} name="Enterprise Plan" value='2300' onClick={handleClick}>Get Started</button>
                    {
                        preferenceId && project.title === "Enterprise Plan" && <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />
                    }
                </div>
            </section>

        </>
    );
};

export default Pricing;