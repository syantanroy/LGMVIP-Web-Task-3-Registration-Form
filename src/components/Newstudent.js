const Newregistration = ({newstudent, onDelete}) => {
    return (
      <div className="added">
        <div className="enrolledDesign row-wise">
          <div className="column-wise">
           <div>Name: {newstudent.name}</div>
             <div>Email: {newstudent.email}</div>
               <div>Age: {newstudent.age}</div>
                <div>Phone: {newstudent.phone}</div>
                  <div>Address: {newstudent.subject}</div>
                   <button className="button-18" onClick={() => onDelete(newstudent.id)}>Delete</button>
                </div>
              <div className="studentimg">
            {!newstudent.imglink ? <img src="https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_960_720.png" alt="Student Img"/> : <img src={newstudent.imglink} alt="Student Img"/>}
          </div>
        </div>
      </div>
    )
  }
  
  export default Newregistration