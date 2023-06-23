import { useState } from "react"

const Registration = ({onAdd}) => {
  const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('')
    const [imglink, setImage] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        if(!name){
            alert('Please add name')
            if(!email){
              alert('Please add email')
              if(!age){
                alert('Please enter a numeric value')
            if(!phone){
              alert('Please enter your phone number')
              return
            }
        }
      }
    }
        onAdd({name,email,age,phone,subject,imglink})
        setName('')
        setEmail('')
        setAge('')
        setPhone('')
        setSubject('')
        setImage('')
      }
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="inputline">
        <label className="add-form">Name: </label>
        <input type="text" placeholder="Enter your name" required value={name} onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div className="inputline">
      <label className="add-form">Email: </label>
        <input type="email" placeholder="Enter you email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div className="inputline">
      <label className="add-form">Age: </label>
        <input type="number" placeholder="Enter your age" required value={age} onChange={(e)=>setAge(e.target.value)}/>
      </div>
      <div className="inputline">
      <label className="add-form">Phone: </label>
        <input type="phone" placeholder="Enter your phone" required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
      </div>
      <div className="inputline">
      <label className="add-form">Address: </label>
        <input type="text" placeholder="Enter Address" required value={subject} onChange={(e)=>setSubject(e.target.value)}/>
      </div>
      <div className="inputline">
      <label className="add-form">Image link: </label>
        <input type="link" placeholder="Enter Image link" value={imglink} onChange={(e)=>setImage(e.target.value)}/>
      </div >
      <input type="submit" className="bn632-hover bn24" value= "Submit" />
      </form>
  )
}
export default Registration