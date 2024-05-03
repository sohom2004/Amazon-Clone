import React, { useState } from 'react'
import Sign from './Sign'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const [logData, setData] = useState({
    'name': "",
    'email': "",
    'password': "",
    'confirmPassword': ""
  })

  console.log(logData)

  const addData = (e) => {
    const { name, value } = e.target;

    setData(() => {
      return {
        ...logData,
        [name]: value
      }
    })
  };

  const sendData = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = logData;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, password, confirmPassword
      })
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      toast.error("Invalid Details!", {
        position: "top-center"
      });
    } else {
      setData({
        ...logData, 'name': "",
      'email': "",
      'password': "",
      'confirmPassword': ""
      });
      toast.success("Sign-Up Complete!", {
        position: "top-center"
      });
      navigate('/', { replace: true });
    }
  }

  return (
    <div>
      <Sign title='Sign Up' makeChange={addData} getData={logData} submit={sendData} />
      <ToastContainer />
    </div>
  )
}

export default SignUp
