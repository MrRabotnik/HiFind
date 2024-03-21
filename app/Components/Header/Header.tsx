import Image from "next/image";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="logo-container">
                    <Link href={"/"}><Image
                        src={require("../../../public/Logo.svg")}
                        alt="Picture of the author"
                    /></Link>

                </div>
                <div className="search">
                    <div className="search-input-container">
                        <input type="text" placeholder="Որոնել" />
                    </div>
                    <div className="search-icon-container">
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                </div>
                <div className="language-container">
                    <select title="lng">
                        <option>Հայ</option>
                        <option>Eng</option>
                    </select>
                </div>
            </div>
        </header>
    );
}
