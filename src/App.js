import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import { useState , createContext } from 'react';
import './index.css';

export const UserContext = createContext()
function App() {
  const[currForm, setCurrform]=useState("form1");
  const[formdata, setFormdata]=useState({
    firstname:"",
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
    expsalary:""
  })
  const toogleForm=(formName)=>{
    setCurrform(formName)
 }
  return (
    <UserContext.Provider value={[formdata, setFormdata]}>
    <div className="mx-auto my-auto grid place-content-center">
       {currForm ==="form1"? <Form1 onFormSwitch={toogleForm}/>: (currForm ==="form2"? <Form2 onFormSwitch={toogleForm}/>:<Form3 onFormSwitch={toogleForm}/>)}
    </div>
    </UserContext.Provider>
  );
}

export default App;

