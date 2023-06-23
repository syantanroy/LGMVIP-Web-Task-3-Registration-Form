import NewRegistration from "./NewRegistration";
const Registered = ({enrolled, onDelete}) => {
  return (
    <div>
       
       {enrolled.map((newregistration) => (
            <NewRegistration key={newregistration.id} newregistration= {newregistration} onDelete={onDelete} />))}
        
    </div>
  )
}

export default Registered