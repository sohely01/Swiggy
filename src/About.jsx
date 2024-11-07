import Header from "./Header/Header";
// import User from "./User";
import Userclass from "./Userclass";

const About = ()=>{
    return (
        <div>
            <Header/>
            <h1>This is my About Page</h1>
            {/* <User name={"Sohel Sayed (functional)"}/> */}
            <Userclass name = {"Sohel Sayed (Class)"}  location ={"Pune class"}/>

        </div>
    )
}


export default About ; 