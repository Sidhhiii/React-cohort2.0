import React, { useState } from "react";
import Card from "./component/Card";

const App = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [url, setUrl] = useState("");
  const [number, setNumber] = useState();
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("")
  const [arr, setArr] = useState([]);
  function submitHandler(e) {
    console.log("submitted");
    e.preventDefault();

    setArr([
      ...arr,
      {
        firstName: first,
        lastName: last,
        profileUrl: url,
        number: number,
        address: address,
        email: email
      },
    ]);

    setFirst("");
    setLast("");
    setEmail("")
    setAddress("")
    setNumber('')
    setUrl("")

  }

  function deleteHandler(idx){
    const copyArr = [...arr]
    copyArr.splice(idx, 1)
    setArr(copyArr)
  }

  return (
    <div className="main">
      <div className="nameOfForm">
        <h1>Id creation Form</h1>
      </div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="formdiv"
      >
        <label htmlFor="Name">Full Name:</label>
        <div>
          <input
            onChange={(e) => {
              setFirst(e.target.value);
              console.log(first);
            }}
            required
            className="userInput"
            value={first}
            type="text"
            placeholder="First Name"
          />
          <input
            onChange={(e) => {
              setLast(e.target.value);
              console.log(last);
            }}
            required
            className="userInput"
            type="text"
            value={last}
            placeholder="Last Name"
          />
        </div>

        <label htmlFor="image">Photo url:</label>
        <input 
        onChange={(e)=>{
          setUrl(e.target.value)
        }}
        value={url}
        required className='userInput' type="url" placeholder='Enter your url'/>

        <label htmlFor="E-mail">E-mail:</label>
        <input 
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        value={email}
        required className='userInput' type="email" placeholder='Enter your email'/>

        <label htmlFor="Phone Number">Phone Number:</label>
        <input 
        onChange={(e)=>{
          setNumber(e.target.value)
        }}
        value={number}
        required className='userInput' type="tel" placeholder='Enter your number'/>

        <label htmlFor="address">Address:</label>
        <input
        onChange={(e)=>{
          setAddress(e.target.value)
        }}
        value={address}
        required className='userInput' type="text" placeholder='Enter your address'/> 

        <div className="subBtn">
          <button>Submit</button>
        </div>
      </form>


      <div className="cards">
        {arr.map(function(elem, idx){
          return <Card elem={elem} idx={idx} deleteHandler={deleteHandler}/>
        })}
      </div>
    </div>
  );
};

export default App;
