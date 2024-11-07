/* eslint-disable react/prop-types */
import React from "react";
import { json } from "react-router-dom";


class Userclass extends React.Component{

    constructor(props){
        super(props);
        console.log(props);

            this.state={
                userInfo:{
                    name:"Dummy",
                    location:"Default"
                }
            }
     
        // console.log("Constructor is called");

    }

   async componentDidMount(){
        // console.log("ComponentDidMout is called");
        const data = await fetch("https://api.github.com/users/sohelysayed");
        const user= await data.json();
        this.setState({
            userInfo: json,
        })
        console.log(user);
    }


    render(){

     

        // console.log("Render is called");



        return(
            <div className="user-card">
              

                

            <h2>
                Name : {this.setState.name}
            </h2>
            <h3>
            Location : {this.setState.length}
            </h3>
            <h4>
                Contact no : 8888888888 
            </h4>

        </div>

        )

    }
}


export default Userclass;