import Image from "next/image";
import "./footer.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import logo from "../../../Assets/logo.svg"
import emailIcon from "../../../Assets/mail.svg"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-logo-container">
                    <Image
                        src={logo}
                        alt="Picture of the author"
                    />
                </div>
                <div className="footer-links-container">
                    <Link href={"/privacy"}>
                        <p>
                            Գաղտնիության քաղաքականություն
                        </p>
                    </Link>

                    <Link href={"/terms"}>
                        <p>
                            Օգտագործման պայմաններ
                        </p>
                    </Link>
                    <p>
                        Կապ մեզ հետ
                    </p>
                    <div>
                        <div className="mail-icon-container">
                            <Image
                                src={emailIcon}
                                alt="Picture of the author"
                            />
                        </div> info@xplode.am
                    </div>
                </div>
                <div className="footer-info-container">
                    <p>

                        Մշակված <span><Link href={"https://xplode.am/"} target="_blank">Էքսփլոուդ ՍՊԸ</Link></span>-ի կողմից
                    </p>
                    <p className="all-rights-reserved">
                        Բոլոր իրավունքները պաշտպանված են 2024
                    </p>
                </div>
            </div>
        </footer>
    );
}
