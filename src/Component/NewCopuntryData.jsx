import React, { useEffect, useState } from 'react';

import PassDataCountry from './PassDataCountry';
import './Style.css'
const NewCopuntryData = () => {
    const [countryData,setCountryData]=useState([])
    const [loadData,setLoadData]=useState(false)
    const [totaldata,setTotalData]=useState([])
    const [visitedLoad,setVisitedLaodData]=useState([])
    const handlerVisit=(country)=>{
        console.log(country);
        const newAddData=[...visitedLoad,country]
        setVisitedLaodData(newAddData)
        
    }
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await fetch('https://restcountries.com/v3.1/all')
            const countryData=await response.json()
            setTotalData(countryData)
            if (loadData) {
                setCountryData(countryData)
            }else{
                setCountryData(countryData.slice(0,16))
            }
            
        }
        fetchData()
    },[loadData])
    return (
        <div style={{border:'2px solid purple', borderRadius:'5px',padding:'10px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'}}>
            <h1 style={{color:'yellowgreen',textAlign:'center',border:'2px solid yellowgreen',borderRadius:'5px'}}>Total Country List  {totaldata.length}</h1>
            <h1 style={{color:'purple',textAlign:'center',border:'2px solid purple',borderRadius:'5px'}}> Show Country of Data  {countryData.length}</h1>

            <div className="">
            <table>
                <thead>
                   {visitedLoad.length>=1&& <tr>
                    <th>Name</th>
                    <th>Official Name</th>
                    <th>Code</th>
                    <th>Flag</th>
                    </tr>}
                </thead>
                <tbody>
                    {
                        visitedLoad.map(country=><tr>
                            <td>{country.name.common}</td>
                            <td>{country.name.official}</td>
                            <td>{country.cca3}</td>
                            <td><img style={{height:'100px',width:'100%'}} src={country.flags.png} alt="" srcset="" /></td>
                            </tr>)
                    }
                    
                </tbody>
                </table>

            </div>


            <div className="country">
                {
                    countryData.map(data=><PassDataCountry handlerVisit={handlerVisit} key={data.cca3} countryData={data}></PassDataCountry>)
                }
            </div>
            <button style={{backgroundColor:"yellowgreen",padding:'10px',borderRadius:'7px',fontWeight:'900', fontSize:'20px',color:'white'}} onClick={()=>setLoadData(!loadData)}>{loadData?'Less More Data':'Show More Data'}</button>
        </div>
    );
};

export default NewCopuntryData;