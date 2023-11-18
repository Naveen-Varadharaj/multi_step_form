import React, { useRef } from 'react'
import '../index.css';
import {  useContext} from 'react';
import { UserContext } from '../App';
import html2canvas from "html2canvas";
import  jsPDF  from "jspdf";

export default function Display() {
    const [formdata, setFormdata] = useContext(UserContext);
    
    const pdfRef=useRef();
    const handleClick=()=>{
        const input=pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'px', 'a4', true);
            const width = pdf.internal.pageSize.getWidth();
            const height = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio= Math.min(width / imgWidth, height / imgHeight)
            const imgX=   (width-imgWidth*ratio)/2;         
            const imgY=   30; 
            pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth*ratio, imgHeight*ratio);
            pdf.save("details_list.pdf");

          })
          setFormdata({firstname:"",
          lastname:"",
          phone:"",
          email:"",
          address:"",
          age:"",
          degree:"",
          branch:"",
          college:"",
          passedout:"",
          precompany:"",
          experience:"",
          skills:"",
          languages:"",
          prelocation:"",
          np:"",
          cursalary:"",
          expsalary:""})

        /* setFormdata({...formdata,firstname:""})
        setFormdata({...formdata,lastname:""})
        setFormdata({...formdata,phone:""})
        setFormdata({...formdata,email:""})
        setFormdata({...formdata,address:"" })
        setFormdata({...formdata,age:""})
        setFormdata({...formdata,degree:""})
        setFormdata({...formdata,branch:""})
        setFormdata({...formdata,college:""})
        setFormdata({...formdata,passedout:""})
        setFormdata({...formdata,precompany:""})
        setFormdata({...formdata,experience:""})
        setFormdata({...formdata,skills:""})
        setFormdata({...formdata,languages:""})
        setFormdata({...formdata,prelocation:""})
        setFormdata({...formdata,np:""})
        setFormdata({...formdata, cursalary:""})
        setFormdata({...formdata, expsalary:""})
         */
    }
    
  return (
    <div className='mb-10' >
        
        <div className='pdf grid  bg-white rounded-lg my-5' ref={pdfRef}>
        <h1 className='h1pdf font-bold'>Details</h1>
        <table className='table-fixed  border border-seperate border-black bg-white my-3 mx-3'>
            <tr>
                <td className='border border-black py-3 text-center '>First Name</td>
                <td className=' border border-black py-3 text-center px-2 '>{formdata.firstname}</td>
                
            </tr>
            <tr>
                <td className='border border-black py-3 text-center px-2'>Last Name</td>
                <td className='border border-black py-3 text-center px-2'>{formdata.lastname}</td>
                
            </tr>
            <tr>
                <td className='border border-black py-3 text-center px-2'>Phone</td>
                <td className='border border-black py-3 text-center px-2'>{formdata.phone}</td>
                
            </tr>
            <tr>
                <td className='border border-black py-3 text-center px-2'>Email</td>
                <td className='border border-black py-3 text-center px-2'>{formdata.email}</td>
                
            </tr>
            <tr>
                <td className='border border-black py-3 text-center px-2'>Address</td>
                <td className='border border-black py-3 text-center px-2'>{formdata.address}</td>
                
            </tr>
            <tr>
                <td className='border border-black py-3 text-center px-2'>Age</td>
                <td className='border border-black py-3 text-center px-2'>{formdata.age}</td>
                
            </tr>
            <tr>
                <td className='border border-black py-3 text-center px-2'>Degree</td>
                <td className='border border-black py-3 text-center px-2'>{formdata.degree}</td>
                
            </tr>
            <tr>
                <td className='border border-black py-3 text-center px-2'>Branch</td>
                <td className='border border-black py-3 text-center px-2'>{formdata.branch}</td>
                
            </tr>
            <tr>
                <td className='border border-black py-3 text-center px-2'>College</td>
                <td className='border border-black py-3 text-center px-2'>{formdata.college}</td>
                
            </tr>
            <tr>
                <td className='border border-black py-3 text-center px-2'>Year of Graduation</td>
                <td className='border border-black py-3 text-center px-2'>{formdata.passedout}</td>
                
            </tr>
            <tr>
                <td className='border border-black py-3 text-center px-2'>Previous Company</td>
                <td className='border border-black py-3 text-center px-2'>{formdata.precompany}</td>
                
            </tr>
            <tr>
                <td className='border border-black py-3 text-center px-2'>Experience in Years</td>
                <td className='border border-black py-3 text-center px-2'>{formdata.experience}</td>
                
            </tr>
            <tr>
                <td className='border border-black py-3 text-center px-2'>Skills</td>
                <td className='border border-black py-3 text-center px-2'>{formdata.skills}</td>
                
            </tr>
            <tr>
                <td className='border border-black py-3 text-center px-2'>Languages Known</td>
                <td className='border border-black py-3 text-center px-2'>{formdata.languages}</td>
                
            </tr>
            <tr>
                <td className='border border-black py-3 text-center px-2'>Prefered Location</td>
                <td className='border border-black py-3 text-center px-2'>{formdata.prelocation}</td>
                
            </tr>
            <tr>
                <td className='border border-black py-3 text-center px-2'>Notice Period in days</td>
                <td className='border border-black py-3 text-center px-2'>{formdata.np}</td>
                
            </tr>
            <tr>
                <td className='border border-black py-3 text-center px-2'>Current Salary in LPA</td>
                <td className='border border-black py-3 text-center px-2'>{formdata.cursalary}</td>
                
            </tr>
            <tr>
                <td className='border border-black py-3 text-center px-2'>Expected Salary in LPA</td>
                <td className='border border-black py-3 text-center px-2'>{formdata.expsalary}</td>  
            </tr>

            </table>
    </div>
        <br/>
        <div className='w-full flex justify-around'>
          
        <div>
            <button className='border  py-1 px-10 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold' onClick={handleClick}>Download</button>
            </div>
        </div>
        </div>
  )
}

