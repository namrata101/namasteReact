import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //multiple state variables in class based component
    this.state = {
        userInfo: {
            name: "Dummy",
            location: "Default",
            avatar_url: "Avatar"
        },
    };
    //console.log("First constructor");
  }

  async componentDidMount() {
    //console.log("First component did mount");
    //API call

    const data = await fetch("https://api.github.com/users/namrata101");
    const json = await data.json();

    this.setState({
        userInfo: json,
    })

    console.log(json);
  }

  componentDidUpdate(){
    console.log("component Did Update");
  }

  componentWillUnmount(){
    console.log("component Will Unmount");
  }

  render() {
    const { name, bio, avatar_url } = this.state.userInfo;
    //console.log("First Render");
    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h3>Bio: {bio}</h3>
        <h4>Contact: namratar101@gmailcom</h4>
      </div>
    );
  }
}

export default UserClass;
