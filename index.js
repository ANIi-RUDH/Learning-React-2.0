import React from "react";
import ReactDOM from "react-dom";
import Card from "./allcards.jsx"
ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card nname="b" no="+123 456 789" photo="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
       mail="b@beyonce.com"/>

<Card nname="Jack Bauer" photo="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" no="+987 654 321" mail="jack@nowhere.com" />

    
<Card nanme="Chuck Norris"  photo="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" no="+918 372 574" mail="gmail@chucknorris.com" />

 
  </div>, 
  document.getElementById("root")
);
