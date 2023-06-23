import Newstudent from "./Newstudent";
const Registered = ({enrolled, onDelete}) => {
  return (
    <div>
       
       {enrolled.map((newstudent) => (
            <Newstudent key={newstudent.id} newstudent= {newstudent} onDelete={onDelete} />))}
        
    </div>
  )
}

export default Registered