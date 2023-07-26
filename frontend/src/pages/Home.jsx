import React, { useEffect, useState } from 'react'
import NotDetay from '../components/NotDetay';
import NotForm from '../components/NotForm';
import { useNotContext } from '../hooks/useNotContext';

function Home() {

 // const [notlar,setNotlar]=useState(null);

  const {notlar,dispatch}=useNotContext();




  useEffect(()=>{
    const fetchNotlar=async ()=>{

      const response =await fetch('/api/notlar')

      const json=await response.json();

      if(response.ok){
        //setNotlar(json)
        dispatch({type:'NOT_DOLDUR', payload:json})
      }

    }

    fetchNotlar()

  },[dispatch])



  return (
    <div className='home'>
        <div className='not-form'>
          <NotForm/>

        </div>


        <div className='notlar'>
          {notlar && notlar.map((not)=>(
            <NotDetay key={not._id} not={not}/>
          ))}
        </div>
    </div>
  )
}

export default Home