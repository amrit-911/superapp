import React,{useState} from 'react'
import   './Form.css';

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

  function handleSubmit(e){
    e.preventDefault()
    if(registration.name.length ===0 || registration.userName.length ===0 || registration.email.length === 0 || registration.mobile.length === 0 || registration.checkbox === false){
      setError(true)
      setResgistration({...registration,valid:true})
    }else{
      setResgistration({name: "", userName:"", email:"",mobile:"", checkbox:false,valid:false})
    }
  
  }
  return (
    <div className='container'>
    <div className="left">
      <div className='left-flex'><div className='left-span roboto'>Already have an account? </div>
      <button className='login roboto'>LOGIN</button></div>
      <div className='left-bottom'>Discover new things on Superapp</div>
    </div>
    <div className="main">
      <div className="brand"><h1>Super app</h1><p>Create your new account</p></div>
      <div className="mail-login"><button className="Email">Email</button><span>|</span><button className="Gmail">Gmail</button></div>
      <div className='form-container'>
        <form   className='inputs' onSubmit={handleSubmit}>
            <div className="flex-label">
          <input name='name' type="text" placeholder='Name'  className='' value={registration.name} onChange={changeHandler}/>
          {error && registration.name<=0&&registration.valid?<label className='error'>⚠</label>:""}</div>

          <div className="flex-label">
          <input name='userName' type="text" placeholder='UserName'  className=''value={registration.userName}  onChange={changeHandler} />
          {error && registration.userName<=0&&registration.valid?<label className='error'>⚠</label>:""}</div>

          <div className="flex-label">
          <input name='email' type="email" placeholder='email' className='' value={registration.email}  onChange={changeHandler} />
          {error && registration.email<=0&&registration.valid?<label className='error'>⚠</label>:""}</div>

          <div className="flex-label">
          <input name='mobile' type="text" placeholder='Mobile Number' className='' maxLength="10" value={registration.mobile} onChange={changeHandler} onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" />
          {error && registration.mobile<=100 &&registration.valid?<label className='error'>⚠</label>:""}</div>

          <div className='flex-check'>
          <div>{registration.checkbox?<input  name="checkbox" type="checkbox" className='checkbox'  onChange={changeCheckBox} checked/>:<input  name="checkbox" className='checkbox' type="checkbox"  onChange={changeHandler}/>}<label className="terms">Share my registration data with Superapp</label></div>
          {error && registration.checkbox===false&&registration.valid?<label className='error'>⚠ Please read terms and check the box</label>:""}</div>
          
          <button className="sign-up" >SIGN UP</button>
          <p className='tns'>By click on Sign up, you agree to Superapp <span> Terms and Conditions of use</span></p>
          <p className='tns'>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></p>
        </form>
      </div>
    </div>
    </div>
  ) 
}
