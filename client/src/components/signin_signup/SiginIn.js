import React, { useState } from 'react'
import Sign from './Sign'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const SiginIn = () => {
  const navigate = useNavigate();

  const [logData, setData] = useState({
    'email': "",
    'password': ""
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
  }

  const sendData = async (e) => {
    e.preventDefault();
    const { email, password } = logData;

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    });

    const responseData = await res.json();
    console.log(responseData);

    const { userlogin, token } = responseData;
    console.log(JSON.stringify(userlogin));
    console.log("token: " + token);

    if (res.status === 400 || !userlogin) {
      toast.error("Invalid Details!", {
        position: "top-center"
      });
    } else {
      localStorage.setItem("token", token);
      setData({
        ...logData, 'email': "",
        'password': "",
      });
      toast.success("Logged In!", {
        position: "top-center"
      });
    }

    if (userlogin){navigate('/', { replace: true });};

  }


  return (
    <div>
      <Sign title='Sign In' makeChange={addData} getData={logData} submit={sendData} />
      <ToastContainer />
    </div>
  )
}

export default SiginIn
