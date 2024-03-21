"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import "./page.scss";
import { recentShopsFile } from "../../Assets/js/assets"

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Shop from "../Components/Shop/Shop";

export default function Home() {
    const [recentShops, setRecentShops] = useState(recentShopsFile)

    return (
        <main className="main">
            <Header></Header>
            <div className="homepage-banner">
                <div className="container">
                    <p>
                        Ընդլայնեք Ձեր Instagram-յան բիզնեսը, ապահովեք ավելի բարձր տեսանելիություն, ձեռք բերեք նոր հաճախորդներ, բացահայտեք նոր հնարավորություններ
                    </p>
                    <Link href={"/join-us"}>
                        <button type="button" className="button">Միացիր Մեզ</button>
                    </Link>
                </div>
            </div>
            <div className="container">
                {/* ////////////////////  Explore Instagram Section ////////////////////////// */}
                <section className="first-section">
                    <h3>Բացահայտեք Instagram-ի բիզնես հաշիվների աշխարհը</h3>
                    <div className="instagram-boxes-container">
                        <div className="first-box">
                            <Link href={"/shops"}>
                                <div>
                                    <Image
                                        src={require("../../Assets/shopping-bag.svg")}
                                        alt="Picture of the author"
                                    />
                                    <p>Խանութներ</p>
                                </div>
                            </Link>

                            <Link href={"/shops"}>
                                <div>
                                    <Image
                                        src={require("../../Assets/gears.svg")}
                                        alt="Picture of the author"
                                    />
                                    <p>Ծառայություններ</p>
                                </div>
                            </Link>
                        </div>

                        <Link href={"/shops"}>
                            <div className="second-box">
                                <Image
                                    src={require("../../Assets/dishes.svg")}
                                    alt="Picture of the author"
                                />
                                <p>Ժամանց</p>
                            </div>
                        </Link>

                        <div className="third-box">
                            <Link href={"/shops"}>
                                <div>
                                    <Image
                                        src={require("../../Assets/brush.svg")}
                                        alt="Picture of the author"
                                    />
                                    <p>Գեղեցկություն</p>
                                </div>
                            </Link>

                            <Link href={"/shops"}>
                                <div>
                                    <Image
                                        src={require("../../Assets/heart-plus.svg")}
                                        alt="Picture of the author"
                                    />
                                    <p>Առողջություն/Խնամք</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Suggested Pages Section */}
                <section className="second-section">
                    <h3>Առաջարկվող Էջեր</h3>
                    <div className="boxes-container">
                        {
                            recentShops.map((shop, index) => {
                                return (<Shop key={index}
                                    categoryIcon={shop.categoryIcon}
                                    brandLogo={shop.brandLogo}
                                    shopName={shop.shopName}
                                    shopInstaName={shop.shopInstaName}
                                    shopDescription={shop.shopDescription}>
                                </Shop>)
                            })
                        }
                    </div>
                </section>

                {/* About Us Section */}
                <section className="third-section">
                    <div className="img-container">
                        <Image
                            src={require("../../Assets/about-us-img.svg")}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="about-us-container">
                        <h3>Մեր Մասին</h3>
                        <div className="about-us-text">
                            Բարի գալուստ ․․․․․ : <br />
                            Մենք նվիրված ենք Instagram-ի պրոֆիլների ձեր որոնումը պարզեցնելուն, որոնք առաջարկում են եզակի ծառայություններ և ապրանքներ: <br />
                            Մեր առաքելությունն է ձեզ կապել տարբեր կատեգորիաների համապատասխան պրոֆիլների հետ՝ հեշտացնելով ոգեշնչում գտնելը և նոր ընտրյալներ հայտնաբերելը:<br />
                            Միացե՛ք մեզ, երբ մենք աջակցում ենք ստեղծողներին և բիզնեսներին՝ միաժամանակ զարգացնելով բովանդակալից կապերը օգտատերերի և բովանդակության միջև:<br />
                            Շնորհակալություն մեզ ընտրել որպես ձեր նպատակակետ Instagram-ի լավագույնը բացահայտելու համար:
                        </div>
                    </div>

                </section>
            </div >
            <Footer></Footer>

        </main >
    );
}

