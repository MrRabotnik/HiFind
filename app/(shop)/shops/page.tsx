"use client"
import { useState } from "react"
import { faFilter, faPlus } from "@fortawesome/free-solid-svg-icons"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import "./page.scss"
import { allShops } from "../../../Assets/js/assets"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Shop from "../../Components/Shop/Shop"

const Shops = () => {
    const [shops, setShops] = useState(allShops)

    return (
        <div>
            <Header></Header>
            <section className="shops-section">
                <h2>Խանութներ</h2>
                <div className="container">
                    <div className="filters-container">
                        <div className="filter-heading-container">
                            <h3>Ֆիլտրեր</h3>
                            <FontAwesomeIcon icon={faFilter} />
                        </div>

                        <div className="categories">Խանութներ <FontAwesomeIcon icon={faPlus} /></div>
                        <div className="categories">Ծառայություններ <FontAwesomeIcon icon={faPlus} /></div>
                        <div className="categories">Ժամանց <FontAwesomeIcon icon={faPlus} /></div>
                        <div className="categories">Գեղեցկություն <FontAwesomeIcon icon={faPlus} /></div>
                        <div className="categories">Առողջություն/Խնամք <FontAwesomeIcon icon={faPlus} /></div>
                        <div className="clear-filters">
                            Մաքրել Ֆիլտրերը
                        </div>
                    </div>
                    <div className="shops-container">
                        {
                            shops.map((shop, index) => {
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
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default Shops