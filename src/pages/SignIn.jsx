import React from 'react';
import { useForm } from "react-hook-form";
import logo from '../Pictures/SignIn/logo-org-blk-side.png'
import {Link} from 'react-router-dom'
import NumPad from 'react-numpad';
import countries from '../components/countries';
import CountdownTimer from "react-component-countdown-timer";
import { Footer } from './LandingPage';
import { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import tvc from '../TvComp.json'
import TextField from '@material-ui/core/TextField';
import TVForm from '../components/TVForm';
import RadioForm from '../components/RadioForm';
import CinemaForm from '../components/CinemaForms';
import PrintForm from '../components/PrintForm';
import OOHForm from '../components/OOHForm';
import { FormContext, FormProvider, PragContext, PragProvider } from '../components/FormContext';
import { useContext } from 'react';



const SingIn = () => {
 
  

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
      console.log(data);
    };
     
    return(
            <div className= "loginPage">
             
              
                <img className="loginPage-img" src={logo}/>
                <div className='signinbox'>
                  <div className="signin-section">
                    <h1>Hello</h1>
                    <p className='signinorcre'>Sign in to Tasweiq or <Link className='signinLinks'>create an account</Link></p>
                    <input type='text' placeholder='Email or Username'></input>
                    <Link to='/LandingPage'><button className='signincont'>Continue</button></Link>
                    <div className='or'>
                    <hr></hr><b><p>or</p></b><hr></hr>
                    </div>
                    <button className='googlebtn'> Sign in
                     </button>
                     <button className='facebookbtn'>Sign in
                    </button>
                    <div className='radiosignin'>
                      <input className="radiosigninbtn" type='radio'></input>
                      <p>Stay signed in</p>
                    </div>
                    <p className='signinorcre2'>Using a public or shared device?</p>
                    <p className='signinorcre2'>Uncheck to protect your account</p>
                    <p className='signinorcre2'><Link className='signinLinks'>Learn More</Link></p>
                  </div>
                </div>

                
               
             </div>
    )
}

export default SingIn