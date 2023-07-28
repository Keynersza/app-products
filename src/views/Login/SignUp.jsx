import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Session from '../../controllers/session';
import InputGeneric from '../../components/Inputs/InputGeneric';
import { tSesion } from '../../locales/es-es/es-es';



const SignUp = () => {
 const navigate = useNavigate()
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [getEmail, setGetEmail] = useState([])
 const [getPassword, setGetPassword] = useState([])
 const [error, setError] = useState(false)
 const [message, setMessage] = useState('')
 const { register} = Session()



 const test = async () => {
  const emailRegex = RegExp(/^[\w-_+]+([.-]?[\w-_+]+)*@[\w-_+]+([.-]?[\w-_+]+)*(\.[\w-_+]{2,})+$/)
  if (!emailRegex.test(email)) {
   setError(true)
   console.log('campo email obligatorio')
  } else if (password.length < 6) {
   setError(true)
   console.log('campo password obligatorio')
  } else {
   const result = await register(email, password)
   if (result.status === '200') {
    navigate('/login')
   } else {
    setMessage(result)
   }
   setError(false)
  }
 }
 return (
  <div>
   <section className='nav'>
    <form className="forms">
     <input
      name='email'
      style={error ? { border: '1px solid red' } : {}}
      type="email"
      placeholder='Email'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
     />
     <input
      style={error ? { border: '1px solid red' } : {}}
      type="number"
      placeholder='Password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
     />
     <div className='register'> {tSesion.singIn.noTines} <Link to={'/'}>Registrase</Link></div>
     <div className='buton' onClick={test} >Iniciar</div>
    </form>
    <p style={{ color: 'red', fontWeight: 'bold' }}>  {message}</p>


   </section>
  </div >
 )
}

export default SignUp