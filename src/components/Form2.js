import React from 'react'
import '../index.css';
import { useState , useContext} from 'react';
import { UserContext } from '../App';
export default function Form2(props) {
  const [formdata, setFormdata] = useContext(UserContext);
  const[page, setPage]=useState(0);
  const FormTitiles=["Step-1", "Step-2","Step-3"];
  const PageDisplay =()=>{
    
     if(page===0){
      return (<>
        
        <label>Degree</label>
        
        <input className='py-1 px-1 w-full rounded-lg' type='text' value={formdata.degree} onChange={(event)=>setFormdata({...formdata,degree:event.target.value})} />
        
        <label>Branch </label>
        
        <input className='py-1 px-1 w-full rounded-lg' type='text' value={formdata.branch} onChange={(event)=>setFormdata({...formdata,branch:event.target.value})}/>
        </>)
    }
    else if(page===1){
      return (<>
        <label>College </label>
        
        <input className='py-1 px-1 w-full rounded-lg' type='text' value={formdata.college} onChange={(event)=>setFormdata({...formdata,college:event.target.value})}/>
        
        <label>Year of Graduation</label>
        
        <input className='py-1 px-1 w-full rounded-lg' type='number'value={formdata.passedout} onChange={(event)=>setFormdata({...formdata,passedout:event.target.value})} />
        
        </>)
    }
    else if(page===2) {
      return (<>
        
        <label>Previous Company</label>
        
        <input className='py-1 px-1 w-full rounded-lg' type='text' value={formdata.precompany} onChange={(event)=>setFormdata({...formdata,precompany:event.target.value})}/>
        
        <label>Experience in Years</label>
        
        <input className='py-1 px-1 w-full rounded-lg' type='number' value={formdata.experience} onChange={(event)=>setFormdata({...formdata,experience:event.target.value})}/>
        </>)
    } 
    else{
      return
    }
  }
  return (
    <div className='container  py-2 px-2 grid  '>
    <div className=' my-auto mx-auto px-2 py-2 bg-gray-200 w-full rounded-lg'>
    
      <div className='font-bold text-center my-2 text-4xl	'>
        <h1>Form-2</h1>
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
      className='border  py-1 px-10 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold '
      hidden ={page>0}  display ={page===0} onClick={()=>props.onFormSwitch("form1")}>Previous Sequence</button>
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
     <button className='border  py-1 px-10 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold ' hidden ={page<FormTitiles.length-1}  display ={page===FormTitiles.length-1} onClick={()=>props.onFormSwitch("form3")}>Next Sequence</button> 
     </div>
    </div>
    </div>
  )
}
