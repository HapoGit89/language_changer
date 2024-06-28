import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { useContext } from "react";
import "./MyNavBar.css"
import LanguageChanger from "../LanguageChanger/LanguageChanger";
import LanguageContext from "../../languageContext";





const MyNavBar = ({changeLang}) => {

    const lang = useContext(LanguageContext)

    if (lang == "ENG"){
        return (
            <div>
                <div className="NavBar">
                    <NavLink to="/">
                        <div className="Brand">
                            language_changer
                        </div>
                    </NavLink>
                    <div className="Tabs">
                        <NavLink to="/contact">
                            <div className="Link">
                            Contact
                            
                            </div>
                        </NavLink>
                        <NavLink to="info">
                            <div className="Link">
                            Info
                            </div>
                        </NavLink>
                    </div>
                    <LanguageChanger changeLang={changeLang}></LanguageChanger>
                </div>
            </div>
        )
}
else {
    return (
        <div>
            <div className="NavBar">
                <NavLink to="/">
                    <div className="Brand">
                        language_changer
                    </div>
                </NavLink>
                <div className="Tabs">
                    <NavLink to="/contact">
                        <div className="Link">
                        Kontakt
                        
                        </div>
                    </NavLink>
                    <NavLink to="/info">
                        <div className="Link">
                        Über
                        </div>
                    </NavLink>
                </div>
                <LanguageChanger changeLang={changeLang}></LanguageChanger>
            </div>
        </div>
    )
}

}


export default MyNavBar