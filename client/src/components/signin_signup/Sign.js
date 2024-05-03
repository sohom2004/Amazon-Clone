import React from 'react'
import './sign.css';

const Sign = (props) => {
  return (
    <div className='sign'>
      <div className='sign-logo'>
        <a href='/'><img src='blacklogoamazon.png' alt='' /></a>
      </div>
      <div className='sign-form'>
        <form method='POST'>
          <h2>{props.title}</h2>
          {props.title === 'Sign Up' && (<div className='form-data'>
            <label>Name</label>
            <input type='text' onChange={props.makeChange} value={props.getData.name} name='name' id='name' placeholder='First and last name' />
          </div>)}
          <div className='form-data'>
            <label>Email</label>
            <input type='text' onChange={props.makeChange} value={props.getData.email} name='email' id='email' placeholder='Email' />
          </div>
          <div className='form-data'>
            <label>Password</label>
            <input type='password' onChange={props.makeChange} value={props.getData.password} name='password' id='password' placeholder='Atleaast 6 characters' />
          </div>
          {props.title === 'Sign Up' && (<div className='form-data'>
            <label>Confirm password</label>
            <input type='password' onChange={props.makeChange} value={props.getData.confirmPassword} name='confirmPassword' id='confirmPassword' placeholder='Previous password must be same' />
          </div>)}

          <button className='submit_btn' onClick={props.submit}>{props.title}</button>
          <hr />
          {props.title === 'Sign Up' && (<p className='isregistered'>Already have an account? <a href='/login'>Sign in</a></p>)}
          <p className='sign-foot'>By creating an account or logging in, you agree to Amazon’s <a>Conditions of Use</a> and <a>Privacy Policy</a>.</p>
          {props.title === 'Sign In' && (
            <p>New to Amazon? <a href='/register'>Register</a></p>)}

        </form>
      </div>
    </div>
  )
}

export default Sign
