const NewRegistration = ({newregistration, onDelete}) => {
    return (
      <div className="added">
        <div className="enrolledDesign row-wise">
          <div className="column-wise">
           <div>Name: {newregistration.name}</div>
             <div>Email: {newregistration.email}</div>
               <div>Age: {newregistration.age}</div>
                <div>Phone: {newregistration.phone}</div>
                  <div>Address: {newregistration.subject}</div>
                   <button className="button-18" onClick={() => onDelete(newregistration.id)}>Delete</button>
                </div>
              <div className="studentimg">
            {!newregistration.imglink ? <img src="https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_960_720.png" alt="Student Img"/> : <img src={newregistration.imglink} alt="Student Img"/>}
          </div>
        </div>
      </div>
    )
  }
  
  export default NewRegistration