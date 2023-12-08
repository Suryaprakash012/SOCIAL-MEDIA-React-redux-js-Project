import react, { useState, useEffect } from 'react'
import storeInputData from '../Service/api';


export default function Form() {

   const [inputData, setInputData] = useState("");

   const saveInputData =(e) => {
      setInputData(e.target.value);
   }
   
   const storeData = async() => {
      const response = await storeInputData(inputData);
      return response;
   }

   return (
      <div>
         <input type="text" onChange={(e) => saveInputData(e)}></input>
         <button onClick={() => storeData()}>Save</button>
      </div>
   )
}