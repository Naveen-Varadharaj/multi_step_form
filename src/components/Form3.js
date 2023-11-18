import React from 'react'
import '../index.css';
import { useState, useContext } from 'react';
import { UserContext } from '../App';
import Display from './Display';

export default function Form3(props) {
  const [formdata, setFormdata] = useContext(UserContext);
  const[page, setPage]=useState(0);
  const[bool, setBool]=useState(false);
  const FormTitiles=["Step-1","Step-2","Step-3"];
  const handleClick1=()=>{
    window.location.reload();
    }
  const PageDisplay =()=>{
    
     if(page===0){
      return (<>
        
        <label>Skills</label>
        
        <input className='py-1 px-1 w-full rounded-lg' type='text'  value={formdata.skills} onChange={(event)=>setFormdata({...formdata,skills:event.target.value})}  />
        
        <label>Languages </label>
        
        <input className='py-1 px-1 w-full rounded-lg' type='text' value={formdata.languages} onChange={(event)=>setFormdata({...formdata,languages:event.target.value})}  />
        </>)
    }
    else if(page===1){
      return (<>
        <label>Prefered Location </label>
        
        <input className='py-1 px-1 w-full rounded-lg' type='text' value={formdata.prelocation} onChange={(event)=>setFormdata({...formdata,prelocation:event.target.value})} />
        
        <label>Notice Period</label>
        
        <input className='py-1 px-1 w-full rounded-lg' type='number' value={formdata.np} onChange={(event)=>setFormdata({...formdata,np:event.target.value})} />
        
        </>)
    }
    else if(page===2) {
      return (<>
        
        <label>Current Salary in LPA</label>
        
        <input className='py-1 px-1 w-full rounded-lg' type='number' value={formdata.cursalary} onChange={(event)=>setFormdata({...formdata,cursalary:event.target.value})} />
        
        <label>Expected Salary in LPA</label>
        
        <input className='py-1 px-1 w-full rounded-lg' type='number' value={formdata.expsalary} onChange={(event)=>setFormdata({...formdata,expsalary:event.target.value})} />
        </>)
    } 
    else{
      return
    }
  }
  const handleSubmit=()=>{
    setBool(true);
    
  }
  const handleClick=()=>{
    setBool(false);
    console.log(bool)
    
  }
  return (
    <>
    <div  className={bool===false ? 'container py-2 px-2 grid' : 'hidden' }>
    <div hidden={bool===true} display={bool===false}  className=' my-auto mx-auto px-2 py-2 bg-gray-200  w-full rounded-lg'>
    <div className='font-bold text-center my-2 text-4xl	'>
        <h1>Form-3</h1>
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
     <button className='border  py-1 px-10 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold ' hidden ={page>0}  display ={page===0} onClick={()=>props.onFormSwitch("form2")}>Previous Sequence</button>
      <button
      className='border  py-1 px-10 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold '
        hidden ={page===0} 
        onClick={()=>{
        setPage((currPage)=>currPage-1)
      }}>Back</button>
      <button 
      className='border  py-1 px-10 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold '
       hidden ={page===FormTitiles.length-1} 
      onClick={()=>{
        setPage((currPage)=>currPage+1)
      }}>Next</button>
     <button className='border  py-1 px-10 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold ' hidden ={page<FormTitiles.length-1}  display ={page===FormTitiles.length-1} onClick={handleSubmit}>Submit</button>
     </div>
     </div>
     </div>
     <div hidden={bool===false} display={bool===true} className='mt-10'>
     <div className='flex justify-around'> 
      <div className=''>
      <button  className='border  py-1 px-10 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold ' onClick={handleClick}>Back</button>
      </div>
      <div className='flex  justify-end'>
        <button className='border  py-1 px-10 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold ' onClick={handleClick1} >Home</button>
        </div>
        </div>
      <Display />
     </div> 
    </>
  )
}
