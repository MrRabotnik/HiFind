"use client"
// import { useEffect, useState } from "react"
import "./page.scss"
// import axios from "axios"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import logo from "../../../Assets/logo.svg";
import signOutIcon from "../../../Assets/sign-out-icon.svg";
import bellIcon from "../../../Assets/bell-icon.svg";
import userCheckIcon from "../../../Assets/user-check-icon.svg";
import userMinusIcon from "../../../Assets/user-minus-icon.svg";
import filterIcon from "../../../Assets/filter-icon.svg";
import brandLogo from "../../../Assets/brand-logo.svg";
import sortLogo from "../../../Assets/sort-icon.svg";
import sendIcon from "../../../Assets/send-icon.svg";
import deleteIcon from "../../../Assets/delete-icon.svg";

const Denied = () => {
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
                            <div>Ծանուցումներ</div>
                            <span>3</span>
                        </Link>
                    </div>
                    <div>
                        <Link href="/dashboard/approved">
                            <Image src={userCheckIcon} alt="Bell Icon"></Image>
                            <div>Հաստատված հաշիվներ</div>
                        </Link>
                    </div>
                    <div className="selected">
                        <Link href="/dashboard/denied">
                            <Image src={userMinusIcon} alt="Bell Icon"></Image>
                            <div>Մերժված հայտեր</div>
                        </Link>
                    </div>
                    <div>
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
                <h2>Մերժված հայտեր</h2>
                <div className="table">
                    <div className="table-titles">
                        <p>Անուն</p>
                        <p>Էլ. հասցե</p>
                        <p>Ինստագրամ</p>
                        <p>Նկարագրություն</p>
                        <p>Ընտրացանկ</p>
                        <p>Օրը <Image src={sortLogo} alt="Sort"></Image></p>
                    </div>
                    <TableRow
                        newNotification={true}
                        brandLogo={brandLogo}
                        brandName={"Brand Name"}
                        email={"rodenishop@gmail.com"}
                        link={"https://www.instagram.com/reserve_eat/"}
                        descriptionArm={"Եղիր այն մեկը , ումով կհիանան ✨"}
                        descriptionEng={"Be the one they admire ✨"}
                        categories={["Կոշիկ", "Պայուսակ", "Աքսեսուարներ"]}
                        date={"05.07.2023"}
                    >
                    </TableRow>
                    <TableRow
                        newNotification={true}
                        brandLogo={brandLogo}
                        brandName={"Brand Name"}
                        email={"rodenishop@gmail.com"}
                        link={"https://www.instagram.com/reserve_eat/"}
                        descriptionArm={"Եղիր այն մեկը , ումով կհիանան ✨"}
                        descriptionEng={"Be the one they admire ✨"}
                        categories={["Կոշիկ", "Պայուսակ", "Աքսեսուարներ"]}
                        date={"05.07.2023"}
                    >
                    </TableRow>
                    <TableRow
                        newNotification={false}
                        brandLogo={brandLogo}
                        brandName={"Brand Name"}
                        email={"rodenishop@gmail.com"}
                        link={"https://www.instagram.com/reserve_eat/"}
                        descriptionArm={"Եղիր այն մեկը , ումով կհիանան ✨"}
                        descriptionEng={"Be the one they admire ✨"}
                        categories={["Կոշիկ", "Պայուսակ", "Աքսեսուարներ"]}
                        date={"05.07.2023"}
                    >
                    </TableRow>
                    <TableRow
                        newNotification={false}
                        brandLogo={brandLogo}
                        brandName={"Brand Name"}
                        email={"rodenishop@gmail.com"}
                        link={"https://www.instagram.com/reserve_eat/"}
                        descriptionArm={"Եղիր այն մեկը , ումով կհիանան ✨"}
                        descriptionEng={"Be the one they admire ✨"}
                        categories={["Կոշիկ", "Պայուսակ", "Աքսեսուարներ"]}
                        date={"05.07.2023"}
                    >
                    </TableRow>
                    <TableRow
                        newNotification={false}
                        brandLogo={brandLogo}
                        brandName={"Brand Name"}
                        email={"rodenishop@gmail.com"}
                        link={"https://www.instagram.com/reserve_eat/"}
                        descriptionArm={"Եղիր այն մեկը , ումով կհիանան ✨"}
                        descriptionEng={"Be the one they admire ✨"}
                        categories={["Կոշիկ", "Պայուսակ", "Աքսեսուարներ"]}
                        date={"05.07.2023"}
                    >
                    </TableRow>
                </div>
            </main>
        </section>
    )
}

export default Denied

const TableRow = (props: any) => {
    const { newNotification, brandName, email, link, descriptionArm, descriptionEng, categories, date } = props
    return (
        <div className={newNotification ? "new" : ""}>
            <div className="brand-logo-name">
                <Image src={brandLogo} alt="Brand Logo"></Image>
                <p>{brandName}</p>
            </div>
            <div className="email">
                <p>{email}</p>
            </div>
            <div className="link">
                <Link href={link}>{link}</Link>
            </div>
            <div className="desc-arm-eng">
                <p>{descriptionArm}</p>
                <p>{descriptionEng}</p>
            </div>
            <div className="categories">
                {
                    categories.length && categories.map((category: any, index: number) => {
                        return <div key={index} className="category">{category}</div>
                    })
                }
            </div>
            <div className="date">
                <p>{date}</p>
            </div>
            <div className="approve-reject-icons">
                <div>
                    <Image src={sendIcon} alt="Edit Icon"></Image>
                </div>
                <div>
                    <Image src={deleteIcon} alt="Edit Icon"></Image>
                </div>
            </div>
        </div>
    );
}
