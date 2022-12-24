import React from 'react'
import "../styles/HomeBlueBar.css"

function Home() {
    return (
        <div>
            <h1>HOME PAGE</h1>
            <HomeBlueBar title = "Hello ! We are The BASE Entrepreneurship Ambassadors!" content = "We are a group of students at HKUST who aim to educate what entrepreneurship means and promote entrepreneurship culture whilst providing a dedicated coworking space"/> 
            <div style={{ width: '100%', height: '500px' }}>PLACE HOLDER</div>
        </div>
    );
}

function HomeBlueBar(props) {
    return ( 
         <section className="blockstyle">
            <div>
                <h1 className ="block--title">{props.title}</h1>
                <p className="block--text">{props.content}</p>
            </div>
         </section>
     );
}
 
export default Home;