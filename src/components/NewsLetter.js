import React,{useState,useEffect} from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <>
      <div className='newsletter my-5'>
        <div className='container py-5'>
            <div className='contents '>
            <h1>Subscribe to Newsletter</h1>
            <p>Subscribe to our newsletter to receive early discount offers, new templates info and updates. </p>
            <br/>
            <div className='input'><HiOutlineMail/><input type="" placeholder='Enter your Email'/><button>Subscribe*</button></div>
        </div>
        </div>
      </div>
    </>
  )
}

export default NewsLetter