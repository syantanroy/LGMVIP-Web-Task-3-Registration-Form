import Registration from "./components/Registration";
import Registered from "./components/Registered";
import { useState } from "react";
import React from "react";

function App() {
  const [enrolled, setForms] = useState(
    [
        
        {
            id: "1",
            name: "S Roy",
            email: "sayantanroyinfo@gmail.com",
            age: "XX",
            phone: "9XXXXXXXX5",
            subject: "West Bengal",
            imglink: "https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_960_720.png",
        },
    ]
)

  const addForm = (newstudent)=>{
    const id = Math.floor(Math.random()*10000)+1;
    const newEnrolled = { id, ...newstudent}
    setForms([...enrolled, newEnrolled])
  }
  const deleteTask = (id)=>{
    setForms(enrolled.filter((newstudent)=>newstudent.id !==id))
  }
  return (

    <div className="container">
      <div className="topitem">
      <div id="header">
        Registration Form
      </div>
      </div>
      <div className="bottomitem">
      <div className="addform">
        <Registration onAdd={addForm}/>
      </div>
      <div className="enrolled">
      {enrolled.length>0?<Registered  enrolled={enrolled} onDelete={deleteTask} ></Registered>:"Oops, looks like here is no data to display."}
      </div>
      </div>
    </div>
  );
}

export default App;