import { Outlet } from "react-router-dom";
import "../styles/Main.scss";
import { useMisc } from "../contexts/MiscContext";

import ScrollContainer from "../components/ScrollContainer";

import gfgLogo from "../assets/GFG_KARE.svg";
// import kluLogo from "../assets/klu.png";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx"

export default function Main() {
    const { theme, setTheme } = useMisc();

    const navigate = useNavigate();

    return (
        <>
            {/* <ScrollContainer> */}
            <div className="navBar">
                <div className="navBarWrap">
                    <div className="logosContainer">
                        <img
                            className="navIcon"
                            src={gfgLogo}
                            alt="GFG logo"
                            // onClick={() =>
                            //     navigate("/")
                            // }
                        />

                        {/* <img
                            className="navIcon"
                            src={kluLogo}
                            alt="KLU logo"
                            onClick={() => window.open("https://klu.ac.in")}
                        /> */}
                    </div>
                    <span className="centerText hideOnMobile">GFG KARE STUDENT CHAPTER</span>

                    <div className="rightMenu">
                        {/* <div className="dropDown">
                            <button className="button">\/</button>
                            <div className="list">
                                <div className="item">Home</div>
                                <div className="item">Home</div>
                                <div className="item">Home</div>
                                <div className="item">Home</div>
                                <div className="item">Home</div>
                            </div>
                        </div> */}
                        

                        <RxHamburgerMenu size={"25px"} />


                        {/* <input
                            type="checkbox"
                            class="toggle"
                            title="change color theme"
                            onClick={() => {
                                if (theme === "light") {
                                    document.body.classList.remove("light");
                                    document.body.classList.add("dark");
                                    setTheme("dark");
                                } else {
                                    document.body.classList.remove("dark");
                                    document.body.classList.add("light");
                                    setTheme("light");
                                }
                            }}
                        /> */}

                    </div>
                </div>
            </div>

            <div className="out">
                <Outlet />
            </div>
            {/* </ScrollContainer> */}
        </>
    );
}
