"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import "./page.scss"
import { faCheckCircle, faChevronDown, faUpload } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

import uploadIcon from "../../../Assets/upload-icon.svg"

const JoinUs = () => {

    const [checked, setChecked] = useState(false)
    const toggleCheck = () => {
        setChecked(!checked)
    }

    return (
        <div>
            <Header></Header>
            <section className="join-us-section">
                <div className="container">
                    <div className="join-us-modal-container">
                        <div className="join-us-modal">
                            <h3>Գրանցում</h3>
                            <p>Բիզնես էջի անուն (ինչպես գրանցված եք Instagram-ում)</p>
                            <input type="text" placeholder="Բիզնեսի անուն" />

                            <p>Էլ. հասցե</p>
                            <input type="text" placeholder="Էլ. հասցե" />

                            <p>Instagram-յան էջի հղում</p>
                            <input type="text" placeholder="Instagram-յան էջի հղում" />

                            <p>Նկարագրություն</p>
                            <div className="description-textarea">
                                <textarea maxLength={150} placeholder="Նկարագրությունը հայերեն"></textarea>
                                <span>0/150</span>
                            </div>

                            <div className="description-textarea">
                                <textarea maxLength={150} placeholder="Նկարագրությունը անգլերեն"></textarea>
                                <span>0/150</span>
                            </div>

                            <p>Նկար</p>
                            <div className="add-photo">
                                <Image src={uploadIcon} alt="Upload Icon"></Image>
                                <p>
                                    Ավելացնել նկար (jpg,png)
                                </p>
                            </div>
                            <ul>
                                <li>Ձեր բիզնեսն ամենալավը բնութագրող կատեգորիան</li>
                                <li>Խանութ <FontAwesomeIcon icon={faChevronDown} /></li>
                                <li>Ծառայություն <FontAwesomeIcon icon={faChevronDown} /></li>
                                <li>Ժամանց <FontAwesomeIcon icon={faChevronDown} /></li>
                                <li>Գեղեցկություն <FontAwesomeIcon icon={faChevronDown} /></li>
                                <li>Առողջություն/Խնամք <FontAwesomeIcon icon={faChevronDown} /></li>
                            </ul>

                            <div className="agreed">
                                <div onClick={toggleCheck} className="checkbox-round">
                                    {checked ? <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> : ""}
                                </div>
                                <span>Համաձայն եմ &nbsp;<Link href={"/privacy"}> գաղտնիության քաղաքականությանը </Link>&nbsp; և &nbsp;<Link href={"/terms"}> օգտագործման պայմաններին</Link>:</span>
                            </div>

                            <Link href={"/success"}>
                                <button type="submit" className="button disabled">Գրանցվել</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default JoinUs