import "./Home.css"
import { useContext } from "react"
import LanguageContext from "../../languageContext"

const Home = ()=> {
    const lang = useContext(LanguageContext)

    if ( lang == "ENG"){

        return (
            <div className="Home">
                <h1>
                    Hey there this is a test
                </h1>
                <h2>
                   Click the little flag in the Navbar to change languages. Does it work??
                </h2>
                <h3> It should also persist across tabs and reloads, try it!</h3>
            </div>
        )
    }

    else {
    
    return (
        <div className="Home">
        <h1>
            Hey, das ist ein Test!
        </h1>
        <h2>
           Klick die kleine Flagge in der Navbar um die Sprache zu ändern. Funktioniert es?
        </h2>
        <h3>Die Sprache sollte auch bei Page Reloads und Subpages bestehen, probier es aus!</h3>
    </div>
    )
}
}

export default Home