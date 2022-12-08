// Utilities
import './supports/stylesheets/utilities.css'

import { Routes, Route, } from 'react-router-dom';

import Navbar from "./components/navbar";
import Register from "./pages/register/register";
import Login from './pages/login/login'
import Home from './pages/home/home'
import Menu from './pages/menu/menu';
import DetailProduct from './detail/detail';
import Cart from './pages/cart/cart';
import { Suspense, useEffect, useState, useRef } from 'react';

import axios from 'axios';

import toast, { Toaster } from 'react-hot-toast';

// Import Firebase
import {auth} from './firebase';
import {GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth'


  const provider = new GoogleAuthProvider();

export default function App(){

  const [username, setUsername] = useState('')
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    console.log('Appjs Jalan')
    checkIsLogin()
    checkTokenUid()
  }, [])

  let checkIsLogin = async() => {
    try {
      let getTokenId = localStorage.getItem('token')
      if(getTokenId){
        let response = await axios.get(`http://my-json-server.typicode.com/rafliros/jsonserver-jcwd-2203/users?id=${getTokenId}`)
        setUsername(response.data[0].username)
        setRedirect(true)
      }
    } catch (error) {
      
    }
  }

  let onLogin = async(inputUsername, inputPassword) => {
      try {
          // Step0. Get Value Input
          // Step1. Check is Username & Password exist?
          let response = await axios.get(`http://my-json-server.typicode.com/rafliros/jsonserver-jcwd-2203/users?username=${inputUsername}&password=${inputPassword}`)
          if(response.data.length === 0) throw { message: 'Account not found' } // If data not found, throw error
          localStorage.setItem('token', `${response.data[0].id}`)
          setUsername(response.data[0].username)
          toast('Login Success.');
          setTimeout(() => {
            setRedirect(true)
          }, 3000)
      } catch (error) {
          toast(error.message);
      }
  }

  let onLogout =() => {
    localStorage.removeItem('token')
    setRedirect(false)
    setUsername('')
  }

  let onLoginWithGoogle = async() => {
    try {
      let response = await signInWithPopup(auth, provider)
      setUsername(response.user.email)
      setRedirect(true)
      localStorage.setItem('tokenUid', response.user.uid)
      toast('Login Success.');
      setTimeout(() => {
        setRedirect(true)
      }, 3000)
  } catch (error) {
      toast(error.message);
  }
}

  let checkTokenUid = () =>{
    if(localStorage.getItem('tokenUid')){
      onAuthStateChanged(auth, (userFromFirebase) => {
        console.log('Running')
        if(userFromFirebase){
          setUsername(userFromFirebase.email)
        }
      });
    }else{
      onLogoutFirebase()
    }
  }

  let onLogoutFirebase = async() => {
    try {
      await signOut(auth)
      localStorage.removeItem('tokenUid')
      setUsername('')
      setRedirect(false)
    } catch (error) {
      
    }
  }

  return(
    <>
      <Navbar data={{username}} myFunc={{onLogoutFirebase}} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register isRedirect={{redirect}} />} />
          <Route path='/login'  element={<Login myFunc={{onLogin}} myFunc1={{onLoginWithGoogle}} isRedirect={{redirect}} />} />
          <Route path='/menu'  element={<Menu />} />
          <Route path='/product/:id'  element={<DetailProduct />} />
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      <Toaster />
    </>
  )
}