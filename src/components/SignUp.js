import React, { useState } from "react";
import { db } from '../firebase-config.js';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { useEffect } from 'react';


function SignUp({formData, setFormData, DataEmail, setDataEmail}){

  const [emailError, setEmailError] = useState('')
  const [isEmaiValid, setIsEmailValid] = useState(true)
  const [users, setUsers] = useState([]);
  const [isbdateInCorrect, setIsbdateInCorrect] = useState(null)
  const [bdateError, setBdateError] = useState('Empty birth day')
  const emailsCollectionRef = collection(db, "email");

  useEffect(() => {
    const getEmails = async () =>{
    const data = await getDocs(emailsCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));};
    getEmails();
    }, [])

  const emailExistance = () => {
    db.collection("email").map("DataEmail").doc('email').get().then((doc)=>{
          if(doc.exists) {
            if(doc.data().email) {
              doc.data().email.forEach((data)=>{
                if(data === formData.email) {
                  setIsEmailValid(false)
                } else {
                  setIsEmailValid(true)
                }
              });
            }
          }
        })
  }

  const emailHandler = (e) =>{
    const re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())){
      setEmailError('Wrong input')
      setIsEmailValid(false)
    } else {
      setEmailError('')
      setIsEmailValid(true)
    }
  }

  const bdateHandler = (e) =>{
    const isDateValid = new Date(e.target.value)
        console.log(isDateValid)
        if (String(isDateValid) === 'Invalid Date') {
          setIsbdateInCorrect(true)
          setBdateError("Incorrect date of birth")
        } 
        else {
          setIsbdateInCorrect(false)
          setBdateError("")
        }
  }

  return (
  <div className=''>
    <h1 className="sign-up-text">Sign UP</h1>
      <div className="sign-up-container">
        <div className="first-name">
          <label className="sign-up-label" for='fname'>First Name 
          <input className="sign-up-input" type='text' id='fname' placeholder='' value={formData.fname} 
          onChange={(event) => setFormData({ ...formData, fname: event.target.value})} /> 
          </label>
        </div>
        <div className="last-name"> 
          <label className="sign-up-label" for='lname'>Last Name 
          <input className="sign-up-input-lastname" type='text'id='lname' placeholder='' value={formData.lname} 
          onChange={(event) => setFormData({ ...formData, lname: event.target.value})}  />  
          </label>
        </div>
        <div className="date-of-birth">
          <label className="sign-up-label-bdate" for='bdate'>Date of Birth 
          <input className="sign-up-input-bdate" type='date' placeholder="" value={formData.bdate} id="bdate" name="dateOfBirth"  min="1930-01-01" max="2010-12-31" onkeydown="return false"
          onChange={(event) => {setFormData({ ...formData, bdate: event.target.value});
          bdateHandler(event);
          }}/>
          </label>
        </div>
        <div className="email">
          <label className={`${isEmaiValid === true ? 'sign-up-label-email' : 'sign-up-label-error' }`} for='email'>Email Address
          <input className={`${isEmaiValid === true ? 'sign-up-input-email' : 'sign-up-input-error' }`} type='email' id='email' placeholder='' value={formData.email}
          onChange={(event) => {
          setFormData({ ...formData, email: event.target.value})
          setDataEmail({...DataEmail, email: event.target.value})
          emailHandler(event)
          emailExistance()
          }}/> 
          </label>
          {<div style={{color:'rgba(218, 70, 87, 0.919)'}}>{emailError}</div>}
        </div>
        </div>
        <div className="address">  
          <label className="sign-up-label-a" for='address'>Address
          <input className="sign-up-input-a" type='text' id='address' placeholder='' value={formData.address} 
          onChange={(event) => {setFormData({ ...formData, address: event.target.value});}} /> 
          </label>
    </div>
  </div>
  )
}

export default SignUp