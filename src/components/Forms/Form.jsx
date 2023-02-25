import React,{useState} from 'react'
import {useNavigate } from 'react-router-dom';
import styles from  './Form.module.css';


export default function Form() {
  const [registration, setResgistration] = useState({name: "", userName:"", email:"",mobile:"", checkbox:false,valid:false })
  const[error,setError] = useState(false)
  console.log(registration)

  const changeHandler =(e)=>{
    setResgistration({...registration, [e.target.name]:e.target.value,valid:true})
    console.log({...registration, [e.target.name]:e.target.value,valid:true})
  }
  const changeCheckBox = (e)=>{
    let checker = (e.target.checked)
    setResgistration({...registration, [e.target.name]:e.target.value, checkbox:checker, valid:true})
  }
const navigate = useNavigate();
  function handleSubmit(e){
    e.preventDefault()
    if(registration.name.length ===0 || registration.userName.length ===0 || registration.email.length === 0 || registration.mobile.length === 0 || registration.checkbox === false){
      setError(true)
      setResgistration({...registration,valid:true})
    }else{
       
      setResgistration({name: "", userName:"", email:"",mobile:"", checkbox:false,valid:false})
      
      navigate("/onboarding")
    }
  
  }
  return (
    <div className={styles.container}>
    <div className={styles.left}>
      <div className={`${styles.left_flex}`}><div className='left_span roboto'>Already have an account? </div>
      <button className={`${styles.login} ${styles.roboto}`}>LOGIN</button></div>
      <div className={styles.left_bottom}>Discover new things on Superapp</div>
    </div>
    <div className={styles.main}>
      <div className={styles.brand}><h1>Super app</h1><p>Create your new account</p></div>
      <div className={styles.mail_login}><button className={styles.Email}>Email</button><span>|</span><button className={styles.Gmail}>Gmail</button></div>
      <div className={styles.form_container}>
        <form   className={styles.inputs} onSubmit={handleSubmit}>
            <div className={styles.flex_label}>
          <input name='name' type="text" placeholder='Name' value={registration.name} onChange={changeHandler}/>
          {error && registration.name<=0&&registration.valid?<label className={styles.error}>⚠</label>:""}</div>

          <div className={styles.flex_label}>
          <input name='userName' type="text" placeholder='UserName'   value={registration.userName}  onChange={changeHandler} />
          {error && registration.userName<=0&&registration.valid?<label className={styles.error}>⚠</label>:""}</div>

          <div className={styles.flex_label}>
          <input name='email' type="email" placeholder='email'   value={registration.email}  onChange={changeHandler} />
          {error && registration.email<=0&&registration.valid?<label className={styles.error}>⚠</label>:""}</div>

          <div className={styles.flex_label}>
          <input name='mobile' type="text" placeholder='Mobile Number' maxLength="10" value={registration.mobile} onChange={changeHandler}/>
          {error && registration.mobile<=1000000000 &&registration.valid?<label className={styles.error}>⚠</label>:""}</div>

          <div className={styles.flex_check}>
          <div>{registration.checkbox?<input  name="checkbox" type="checkbox" className={styles.checkbox}  onChange={changeCheckBox} checked/>:<input  name="checkbox" className={styles.checkbox} type="checkbox"  onChange={changeHandler}/>}<label className={styles.terms}>Share my registration data with Superapp</label></div>
          {error && registration.checkbox===false&&registration.valid?<label className={styles.error}>⚠ Please read terms and check the box</label>:""}</div>
          <button className={styles.sign_up} >SIGN UP</button>
          <p className={styles.tns}>By click on Sign up, you agree to Superapp <span> Terms and Conditions of use</span></p>
          <p className={styles.tns}>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></p>
        </form>
      </div>
    </div>
    </div>
  ) 
}
