import React, {useState} from 'react'
import SignUp from './SignUp'
import Message from './Message'
import Checkbox from './Checkbox'
import { useEffect } from 'react';
import { db } from '../firebase-config.js';
import { collection, getDocs, addDoc } from 'firebase/firestore';


function Form() {

  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState([]);
  const usersCollectionRef = collection(db, 'users');
  const emailsCollectionRef = collection(db, 'email');
  const [isEmailExist, setIsEmailExist] = useState(null) 

  const submitInfo = async () => {
   await addDoc(usersCollectionRef, {formData});
  }

  const submitInfoEmails = async () => {
    await addDoc(emailsCollectionRef, {DataEmail});
    window.location.reload();
    alert('submitted')
  }
  useEffect(() => {
  const getUsers = async () =>{
  const data = await getDocs(usersCollectionRef);
  setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));};
  getUsers();
  }, [])




  const[step, setStep] = useState(0);
  const [DataEmail, setDataEmail] = useState({
    email: '',   
  });





  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    bdate: '',
    message: '',
    checkbox1: false,
    checkbox2: false,
    radio1: false,
    radio2: false,
    radio3: false,
    radio4: false,  
  })

  const FormTitles = ["Step1/3", "Step2/3", "Step3/3"];

  const StepDisplay = () => {
    if (step === 0) {
      return <SignUp formData={formData} setFormData={setFormData} DataEmail={DataEmail} setDataEmail={setDataEmail}/>;
    } else if (step === 1){
      return <Message formData={formData} setFormData={setFormData} />;
    } else {
      return <Checkbox formData={formData} setFormData={setFormData} />;
    }
  };
  return (
  <div className='page'>
    <div className='form-border'>
      <div className='form-container'>
        <div  className={`${step === 0 ? 'bg1' : step === 1 ? "bg2" : 'bg3'}`}></div>
          <div className='content'>
            <div className='header'>
              <div className='steps-container'>
                <span className={`${step === 0 ? 'step-active' : "step-inactive"}`}><span className={`${step === 0 ? 'step-1-text' : step === 1 ? "step-2-text" : "step-3-text"}`}>1</span></span>
                <span className={`${step === 0 ? 'text-active' : "text-inactive"}`}>SignUp</span>
                <span className={`${step === 1 ? 'step-active' : "step-inactive"}`}><span className={`${step === 0 ? 'step-1-text' : step === 1 ? "step-1-text" : "step-3-text"}`}>2</span></span>
                <span className={`${step === 1 ? 'text-active' : "text-inactive"}`}>Message</span>
                <span className={`${step === 2 ? 'step-active' : "step-inactive"}`}>3</span>
                <span className={`${step === 2 ? 'text-active' : "text-inactive"}`}>Checkbox</span>
              </div>
              <div className={`${step === 0 ? 'line-top-1' : step === 1 ? "line-top-2" : 'line-top-3'}`}>
              </div>
            </div>
            <div className='body'>
              <span className='current-step'>{FormTitles[step]}</span>
              {StepDisplay()}
            </div>
            <div className='footer'>
              <div className={`${step === 0 ? 'line-bot-1' : step === 1 ? "line-bot-2" : 'line-bot-3'}`}>
              </div>
              <div className='buttons'>
                <button className={`${step === 0 ? 'back-step-1' :  step === 1 ? 'back-step-2' : 'back-step-3' }`} disabled={step == 0} onClick={() => {setStep((currStep) => currStep-1)}}>Back</button>
                <button className={`${step === 0 ? 'next-step-1' :  step === 1 ? 'next-step-2' : 'next-step-3' }`} 
                onClick={() => {
                  if (step === FormTitles.length - 1){
                  submitInfo();
                  submitInfoEmails();
                  } else{
                  setStep((currStep) => currStep+1)}
                }}>{step === 2 ? "Submit" : "Next Step"}</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  );
}

export default Form