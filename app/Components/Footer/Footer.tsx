import Image from "next/image";
import "./footer.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-logo-container">
                    <Image
                        src={require("../../../Assets/Logo.svg")}
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
                                src={require("../../../Assets/mail.svg")}
                                alt="Picture of the author"
                            />
                        </div> info@xplode.am
                    </div>
                </div>
                <div className="footer-info-container">
                    <p>
                        Մշակված <span>Էքսփլոուդ ՍՊԸ</span>-ի կողմից
                    </p>
                    <p className="all-rights-reserved">
                        Բոլոր իրավունքները պաշտպանված են 2024
                    </p>
                </div>
            </div>
        </footer>
    );
}
