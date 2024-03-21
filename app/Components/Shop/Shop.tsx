import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

import "./shop.scss"
import ShopInteface from "../../../types/types"
import Link from "next/link"

const Shop = ({ categoryIcon, brandLogo, shopName, shopInstaName, shopDescription }: ShopInteface) => {
    return (
        <Link href={"https://www.instagram.com/rodeni_shop/"} target="_blank">
            <div className="suggested-pages-box">
                <div className="box-little-icon">
                    <Image
                        src={categoryIcon}
                        alt="Picture of the author"
                    />
                </div>
                <div className="box-image-container">
                    <Image
                        src={brandLogo}
                        alt="Picture of the author"
                    />
                </div>
                <div className="box-text-container">
                    <p>{shopName}</p>
                    <p>{shopDescription}</p>
                </div>
                <div className="hover-box">
                    <div>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <p>{shopInstaName}</p>
                </div>
            </div>
        </Link>
    )
}

export default Shop