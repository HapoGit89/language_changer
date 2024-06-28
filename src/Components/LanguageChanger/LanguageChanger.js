import { Button } from "reactstrap"
import "./LanguageChanger.css"
import { useContext } from "react"
import LanguageContext from "../../languageContext"


const LanguageChanger = ({changeLang}) => {

    const lang = useContext(LanguageContext)

    const setL = (lang)=>{
        changeLang(lang)
    }


    if (lang == "ENG"){
        return (
            <div className="LanguageChanger">
                <Button onClick={()=>setL("GER")}>
                    Change to 🇩🇪
                </Button>
            </div>
        )

    }
    else {
        return (
            <div className="LanguageChanger">
                <Button onClick={()=>setL("ENG")}>
                   Change to 🇬🇧
                </Button>
            </div>
        )
}
}

export default LanguageChanger