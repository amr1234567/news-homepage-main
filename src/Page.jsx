import { useState, useEffect } from "react";

import NavBar from "./components/NavBar/NavBar";
import Body from "./components/body/Body";
import Upper from "./components/body/Upper";
import NavBarMobile from "./components/body/NavBarMobile";
import Footer from "./components/Footer";

import disableScroll from 'disable-scroll';

const Page = () => {
    const links = ["Home", "New", "Popular", "Trending", "Categories"];

    const [width, setWidth] = useState(window.innerWidth);
    const [navOpened, setNavOpened] = useState(false);
    let handleNavBar = () => {
        if (navOpened) setNavOpened(false);
        else setNavOpened(true);
    };
    let hundleWidth = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", hundleWidth);
        return () => window.removeEventListener("resize", hundleWidth);
    });

    useEffect(() => {
        if (navOpened === true) {
            disableScroll.on();
        } else {
            disableScroll.off();
        }
    }, [navOpened])

    return (
        <div className="page">
            {navOpened && (
                <NavBarMobile
                    data={links}
                    navOpened={navOpened}
                    handleNavBar={handleNavBar}
                />
            )}
            {width > 500 ? (
                <NavBar data={links} />
            ) : (
                <>
                    <Upper navOpened={navOpened} handleNavBar={handleNavBar} />{" "}
                </>
            )}
            <Body></Body>
            <Footer></Footer>
        </div>
    );
};

export default Page;
