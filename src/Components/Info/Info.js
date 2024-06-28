import { useContext } from "react"
import LanguageContext from "../../languageContext"
import './Info.css'

const Info = () => {

    const lang = useContext(LanguageContext)
   
    if ( lang == "ENG"){

        return (
            <div className="Info">
                <h1>
                    Here is some Info:
                </h1>
                <h2> I made this react app as a challenge to myself and also to test the language_changer functionality for a customer project.</h2>
                <h2>
                   Click the little flag in the Navbar to change languages. Does it work??
                </h2>
                <h3> It should also persist across tabs and reloads, try it!</h3>
            </div>
        )
    }

    else {
    
    return (
        <div className="Info">
        <h1>
            Ein paar Infos
        </h1>
        <h2>Ich habe diese React Anwendung als Übung programmiert und auch um die language_changer Funtkionalität für ein Kundenprojekt zu testen.</h2>
        <h2>
           Klick die kleine Flagge in der Navbar um die Sprache zu ändern. Funktioniert es?
        </h2>
        <h3>Die Sprache sollte auch bei Page Reloads und Subpages bestehen, probier es aus!</h3>
    </div>
    )
}
}

export default Info