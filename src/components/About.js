import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
    constructor(props){
        super(props);
        //console.log("Parent constructor")
    }

    componentDidMount(){
        //console.log("Parent component Did Mount");
    }
    render(){
        //console.log("Parent render");
        return (
            <div>
                <h1>About</h1>
                <h2>This is Namaste React Web Series</h2>
                <UserClass name={"Namrata Revankar(class)"} location={"Hubli"}/>
    
            </div>
        );
    }
}


export default About;