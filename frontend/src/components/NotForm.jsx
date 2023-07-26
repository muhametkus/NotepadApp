import React, { useState } from 'react'
import { useNotContext } from '../hooks/useNotContext';

function NotForm() {

    const [baslik,setBaslik]=useState('');
    const [aciklama,setAciklama]=useState('');
    const [hata,SetHata]=useState(null);


    const {dispatch}=useNotContext();

    const handleSubmit= async(e)=>{
        e.preventDefault();

        const not={baslik,aciklama}

        //console.log(not)

        const response=await fetch('/api/notlar',{
            method:'POST',
            body: JSON.stringify(not),
            headers:{
                'Content-Type':'application/json'
            }

        })

        const json=await response.json()

        //console.log(json);

        if(!response.ok){
            SetHata(json.hata)
        }

        if(response.ok){
            SetHata(null)
            setBaslik('')
            setAciklama('')
            dispatch({type:'NOT_OLUSTUR',payload:json})
            //console.log('yeni bir not eklendi');
        }


    }
  return (
    <form className='create' onSubmit={handleSubmit}>
        <h3>Yeni Bir Not Ekle</h3>
        <div className='create-group'>
            <div>
                <label>Not Başlık:</label>
                <input type="text" onChange={(e)=>setBaslik(e.target.value)} value={baslik} />
            </div>

            <div>
                <label>Not Açıklama:</label>
                <input type="text" onChange={(e)=>setAciklama(e.target.value)} value={aciklama} />
            </div>

        </div>

        <button type='submit'>EKLE</button>

        {hata && <div className='error'>{hata}</div>}


    </form>
  )
}

export default NotForm