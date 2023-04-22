import React from "react"
import ReactDOM from "react-dom"
import Info from "./Info"
import About from "./About"
import Interests from "./Interests"
import Footer from "./Footer"

function Page(){
    return(
        <main>
            <Info/>
            <About/>
            <Interests/>
            <Footer/>
        </main>
    ) 
}


ReactDOM.render(<Page/>, document.getElementById("root"))