import React, { useState } from 'react';

const PassDataCountry = ({countryData,handlerVisit}) => {
    const [visit,setVisit]=useState(false)
    const {name,cca3,flags,independent}=countryData
    return (
        <div className={`card ${visit?'visited-col':'non-visit'}`} 
        onClick={()=>{setVisit(!visit);
            handlerVisit(countryData)

        }
            
        } >
            <img style={{width:'100%',height:'200px',borderRadius:'15px'}} src={flags.png} alt="" />
            <h3>Country Code : {cca3}</h3>
            <h3>Country Name : {name.common}</h3>
            <h4>Country Official Name : {name.official}</h4>
            <h3>Independent : {independent?"YES":'N/A'}</h3>
            

        </div>
    );
};

export default PassDataCountry;