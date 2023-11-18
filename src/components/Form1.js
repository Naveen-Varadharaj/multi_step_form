import React, { useState, useContext } from 'react'
import '../index.css';
import {UserContext} from '../App'


export default function Form1(props) {
  const [formdata, setFormdata] = useContext(UserContext);
  const[page, setPage]=useState(0);
 
  
  const FormTitiles=["Step-1", "Step-2","Step-3"];
  const PageDisplay =()=>{
     if(page===0){
      return (<>
        
        <label>First Name</label>
        <input className='py-1 px-1 w-full rounded-lg' type='text' value={formdata.firstname} onChange={(event)=>setFormdata({...formdata,firstname:event.target.value})}/>
        <label>Last Name</label>
        <input className='py-1 px-1 w-full rounded-lg' type='text' value={formdata.lastname} onChange={(event)=>setFormdata({...formdata,lastname:event.target.value})}/>
        </>)
    }
    else if(page===1){
      return (<>
        
        <label>Phone</label>
        <input className='py-1 px-1 w-full rounded-lg' type='number' value={formdata.phone} onChange={(event)=>setFormdata({...formdata,phone:event.target.value})} />
        <label>Email</label>
        <input className='py-1 px-1 w-full rounded-lg' type='email' value={formdata.email} onChange={(event)=>setFormdata({...formdata,email:event.target.value})}/>
       
        </>)
    }
    else if(page===2) {
      return (<>
        
        <label>Address</label>
        
        <input className='py-1 px-1 w-full rounded-lg' type='text' value={formdata.address} onChange={(event)=>setFormdata({...formdata,address:event.target.value})}/>
        
        <label>Age</label>
        
        <input className='py-1 px-1 w-full rounded-lg' type='number' value={formdata.age} onChange={(event)=>setFormdata({...formdata, age:event.target.value})}/>
        </>)
    } 
    else{
      return
    }
  }
 
  
  return (
    <div className='container py-2 px-2 grid   '>
    <div className=' my-auto mx-auto px-2 py-2 bg-gray-200 w-full rounded-lg'>
      <div className='font-bold text-center my-2 text-4xl	'>
        <h1>Form-1</h1>
      </div>
      <div className='grid gap-y-2'>
      <div className='mx-auto text-xl font-semibold'>
        <h2>{FormTitiles[page]}</h2>
      </div>
     
      <div className='mx-auto grid gap-y-2'>
          {PageDisplay()}
      </div> 
      </div>
      <div className='my-5 flex justify-around'>
      <button
        className='border  py-1 px-10 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white font-semibold '
        hidden ={page===0} 
        onClick={()=>{
        setPage((currPage)=>currPage-1)
      }}>
        Back
      </button>
      <button 
      className='border  py-1 px-10 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold  '
       hidden ={page===FormTitiles.length-1} 
      onClick={()=>{
        setPage((currPage)=>currPage+1)
      }}>Next</button>
      
     <button 
        className='border  py-1 px-10 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold ' 
        hidden ={page<FormTitiles.length-1}  
        display ={page===FormTitiles.length-1} 
        onClick={()=>props.onFormSwitch("form2")}>
        Next Sequence
      </button> 
      </div>
    </div>
    </div>
  )
}
