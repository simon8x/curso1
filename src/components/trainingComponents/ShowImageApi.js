import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';

function ShowImageApi() {
    const [url, setUrl] = useState("");

    useEffect(()=>{
        axios.get("https://random.imagecdn.app/500/150").then((url) => {
            setUrl(url.data["file"]);
        })
    }, [])
  return (
    <section className='image-from-api-container'>
        <img src={url} />
    </section>
  )
}
export default ShowImageApi;