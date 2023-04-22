import React from "react"

export default function Info(){
    return(
        <header>
            <img src="./duke.jpg" className="image"/>
            <h3 className="name">Duke Yeboah</h3>
            <p className="role"> FrontEnd Developer </p>
            <p className="email"> dukeyeboah@proton.me </p>
            <div className="btns">
                <button className="email-btn">
                <span className="icon">
                <i className="fa-solid fa-envelope"></i></span>Email
                </button>
                <button className="linkedin-btn">
                    <span className="icon">
                    <i className="fa-brands fa-linkedin"></i></span>LinkedIn
                </button>
                
            </div>
        </header>
    )
}


//var email = '<b>Email:</b> <a href="mailto:' + calendarMonth[i].events[j].email + '">' + calendarMonth[i]
            
//<img src="./pic_me.jpg" className="image"/>
//"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
