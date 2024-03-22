"use client"
// import { useEffect, useState } from "react"
import "./page.scss"
// import axios from "axios"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import logo from "../../../Assets/logo.svg";
import signOutIcon from "../../../Assets/sign-out-icon.svg";
import bellIcon from "../../../Assets/bell-icon.svg";
import userCheckIcon from "../../../Assets/user-check-icon.svg";
import userMinusIcon from "../../../Assets/user-minus-icon.svg";
import filterIcon from "../../../Assets/filter-icon.svg";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import editIcon from "../../../Assets/edit-icon.svg";
import deleteIcon from "../../../Assets/delete-icon.svg";

const CategoriesList = () => {
    // const [email, setEmail] = useState("")

    // useEffect(() => {
    //     axios.get('/api/admin/login/')
    //         .then((data: any) => {
    //             console.log(data.data.data[0].email)
    //             setEmail(data.data.data[0].email)
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }, [])

    return (
        <section>
            <aside>
                <Image src={logo} alt="logo"></Image>
                <nav>
                    <div >
                        <Link href="/dashboard/notifications">
                            <Image src={bellIcon} alt="Bell Icon"></Image>
                            <div>Ընտրացանկ</div>
                            <span>3</span>
                        </Link>
                    </div>
                    <div>
                        <Link href="/dashboard/approved">
                            <Image src={userCheckIcon} alt="Bell Icon"></Image>
                            <div>Հաստատված հաշիվներ</div>
                        </Link>
                    </div>
                    <div>
                        <Link href="/dashboard/denied">
                            <Image src={userMinusIcon} alt="Bell Icon"></Image>
                            <div>Մերժված հայտեր</div>
                        </Link>
                    </div>
                    <div className="selected">
                        <Link href="/dashboard/categories-list">
                            <Image src={filterIcon} alt="Bell Icon"></Image>
                            <div>Ընտրացանկ</div>
                        </Link>
                    </div>
                </nav>
                <div>
                    <Image src={signOutIcon} alt="Sign Out Icon"></Image>
                    <p>Դուրս գալ</p>
                </div>
            </aside>
            <main>
                <h2>Ընտրացանկ</h2>

                <div className="list">
                    <CategoryItem name={"Խանութներ"}></CategoryItem>
                    <CategoryItem name={"Ծառայություն"}></CategoryItem>
                    <CategoryItem name={"Ժամանց"}></CategoryItem>
                    <CategoryItem name={"Գեղեցկություն"}></CategoryItem>
                    <CategoryItem name={"Առողջություն / Խնամք"}></CategoryItem>
                </div>
            </main>
        </section>
    )
}

export default CategoriesList

const CategoryItem: any = (props: any) => {
    return (
        <div className="row">
            <div className="first-column">
                <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                <p>{props.name}</p>
            </div>
            <div className="edit-delete-icons">
                <div>
                    <Image src={editIcon} alt="Edit Icon"></Image>
                </div>
                <div>
                    <Image src={deleteIcon} alt="Edit Icon"></Image>
                </div>
            </div>
        </div>
    )
}