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
 
export default HomeBlueBar;