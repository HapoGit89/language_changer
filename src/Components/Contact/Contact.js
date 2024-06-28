import "./Contact.css"
import { useContext } from "react"
import LanguageContext from "../../languageContext"

const Contact = ()=> {
    const lang = useContext(LanguageContext)

    if ( lang == "ENG"){

        return (
            <div className="Contact">
                <h1>
                    Find me on GitHub
                </h1>
                <h2> <a href="https://github.com/HapoGit89">https://github.com/HapoGit89</a></h2>
            </div>
        )
    }

    else {
    
    return (
        <div className="Contact">
        <h1>
            Mein GitHub Profil:
        </h1>
      <h2> <a href="https://github.com/HapoGit89">https://github.com/HapoGit89</a></h2>
    </div>
    )
}
}

export default Contact