import React from "react";
import "../index.css";
import icon from "../icon.png"; 

class MyComponent extends React.Component {
  render() {
    
    const forcard = {
      fontSize: "20px",
      backgroundColor: "red",
      width : "300px",
      height : "300px",
      borderRadius : "10px"
    };
    const forimg = {
        width : "40px",
        height : "40px",
        marginLeft : "130px",
        marginTop : "10px"
        
    }
    const forh1 = {
        margin : "0px",
        color : "darkred",
        marginLeft : "50px"
    }
    const forp = {
        color : "darkred"
    }
    return (
      <div style={forcard}>
        <h2 style={forh1}>Inbox messages</h2> 
        <img src={icon} alt="icon" style={forimg} /> 
        <p style={forp}>Lorem Ipsum is simply dummy text of the <br />
        printing and typesetting industry. Lorem Ipsum has <br />
         been the industry's standard dummy text ever since <br />
         the 1500s.</p>
      </div>
    );
  }
}

export default MyComponent;
