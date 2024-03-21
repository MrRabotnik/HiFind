import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import "./page.scss"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

const JoinUs = () => {
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
                            <textarea maxLength={20} placeholder="Նկարագրությունը հայերեն"></textarea>
                            <textarea maxLength={20} placeholder="Նկարագրությունը անգլերեն"></textarea>

                            <p>Նկար</p>
                            <input type="file" placeholder="Upload" />

                            <p>Ձեր բիզնեսն ամենալավը բնութագրող կատեգորիան</p>
                            <ul>
                                <li>Խանութ <FontAwesomeIcon icon={faChevronDown} /></li>
                                <li>Ծառայություն <FontAwesomeIcon icon={faChevronDown} /></li>
                                <li>Ժամանց <FontAwesomeIcon icon={faChevronDown} /></li>
                                <li>Գեղեցկություն <FontAwesomeIcon icon={faChevronDown} /></li>
                                <li>Առողջություն/Խնամք <FontAwesomeIcon icon={faChevronDown} /></li>
                            </ul>

                            <div className="agreed">
                                <input type="checkbox" className="checkbox-round" placeholder="terms" />
                                <span>Համաձայն եմ <Link href={"/privacy"}>գաղտնիության քաղաքականությանը</Link> և <Link href={"/terms"}>օգտագործման պայմաններին</Link>:</span>
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