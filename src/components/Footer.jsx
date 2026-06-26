import React from 'react'
import facebook from './../img/facebook.svg'
import youtube from './../img/youtube.svg'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer__wrap">
                        <div className="footer__nav">
                            <div className="footer__nav-contact">
                                <h2 className="footer__nav-contact_logo">
                                    NipponWeBshop
                                </h2>
                                <ul className="footer__nav-contact_list">
                                    <li className="footer__nav-contact_list-item">
                                        <a href="mailto:pakfokishiofficial@gmail.com" className="footer__nav-contact_list-item_link">
                                            pakfokishiofficial@gmail.com
                                        </a>
                                    </li>
                                    <li className="footer__nav-contact_list-item">
                                        <a href="#" className="footer__nav-contact_list-item_link">
                                            +81 00 0000 xxxx
                                        </a>
                                    </li>
                                    <li className="footer__nav-contact_list-item">
                                        <a href="#" className="footer__nav-contact_list-item_link">
                                            NipponWeBshop Co., Ltd.
                                            wamotocho 3-10-7, Tojiki Building 7F, Chiyoda-ku, Tokyo, Japan 101-0032 (место положение является случайным)
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="reg">
                <div className='line'>

                </div>
                <div className="container">
                    <div className="reg__info">
                        <div className="reg__info-left">
                            <div className="reg__info-left_text">
                                <p className="reg__info-left_text-p">
                                    2026 этот сайт был сделан в качестве портфолио
                                </p>
                            </div>
                            <div className="reg__info-left_contact">
                                <ul className="reg__info-left_contact-list">
                                    <li className="reg__info-left_contact-list_item">
                                        <a href="#" className="reg__info_contact-list_item-link">
                                            <img src={facebook} alt="facebook" className="reg__info_contact-list_item-link_img"/>
                                        </a>
                                    </li>
                                    <li className="reg__info-left_contact-list_item">
                                        <a href="#" className="reg__info_contact-list_item-link">
                                            <img src={youtube} alt="youtube" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="reg__info-rigt">
                            <p className="reg__info-right_p">
                                Лицензия правительства NNNN No N 105561505123
                                NNNN корпоративный номер. 701140#### (это было сделано как образец)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer