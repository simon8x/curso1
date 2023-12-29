import React, { useEffect, useState } from 'react';
import axios from 'axios'



function CryptoCurrencis() {    
    const[cryptoList, setCryptoList] = useState([]);

    useEffect(() => {
        axios.get("http://api.coinlore.net/api/tickers/?start=0&limit=5").then(
            (response) => {
            setCryptoList(response.data["data"]);
            console.log(response.data["data"]);
        }
        );
    },[]);
    return (
    <div>CryptoCurrencis</div>
  )
}

export default CryptoCurrencis