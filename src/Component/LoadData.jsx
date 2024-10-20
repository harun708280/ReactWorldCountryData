import React, { useEffect, useState } from 'react';
import Country from './Country';
import './Style.css'
const LoadData = () => {
    const [country,setCountry]=useState([])
    const [loadData,setLoadData]=useState(true)
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await fetch(`https://restcountries.com/v3.1/all`)
            const countryData=await response.json()
            if (loadData) {
                setCountry(countryData.slice(0,20))
            }else{
                setCountry(countryData)
            }
        }
        fetchData()
    },[loadData])

    const [addMarkCountry,setAddMarkCountry]=useState([])
    const [mark,setMark]=useState(false)
    const handleAddMark=(country)=>{
        const newAddCountry=[...addMarkCountry,country]
        setAddMarkCountry(newAddCountry)
        console.log(country);
        console.log('add marl click');
        setMark(!mark)
    }

    const [addFlag,setAddFlag]=useState([])

    const [flag,setFlag]=useState(false)
    
    const handleAddFlag=(flag)=>{
        console.log(flag);
        const newAddFlag=[...addFlag,flag]
        setAddFlag(newAddFlag)
        setFlag(!flag)
        
    }
  
    return (
        <div><h1>Country {country.length}</h1>
            

            <div className="container">
                <div className="" style={{width:'100%'}}>
                    <tbody>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Official Name</th>
                            <th>Country Code</th>
                            <th>Independent</th>
                            </tr>
                        </thead>
                        <tbody>
                            {addMarkCountry.length===0 && <h1 style={{textAlign:'center',color:'red'}}>No Add Mark Add !</h1>}
                            {
                                addMarkCountry.map(data=><tr>
                                    <th>{data.name.common}</th>
                                    <th>{data.name.official}</th>
                                    <th>{data.cca3}</th>
                                    <th>{data.independent?'Yes':'No'}</th>
                                    </tr>)
                            }
                        </tbody>
                    </tbody>
                </div>
                <div className="">
                    <tbody>
                        <thead>
                            <tr>
                            <th> Country Name</th>
                            
                            <th>Country Flag</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {
                                addFlag.map(flag=><tr>
                                    <td>{flag.name.common}</td>
                                    <td><img style={{height:'50px',width:'100%'}} src={flag.flags.png} alt="" srcset="" /></td>
                                </tr>)
                            }
                        </tbody>
                    </tbody>
                </div>
            </div>

            
            <div className="country">
                {
                    country.map(country=><Country country={country} handleAddMark={handleAddMark} handleAddFlag={handleAddFlag} mark={mark} flag={flag} ></Country>)
                }

            </div>

            <button
                     style={{
                        background: 'linear-gradient(to bottom, purple, purple, red)',
                        padding: '5px',
                        textAlign: 'center',
                        border: 'none', 
                        color: 'white', 
                        cursor: 'pointer',
                        borderRadius: '20px',
                        fontSize: '16px',      
                        fontWeight: 'bold',
                        paddingLeft:'20px', 
                        paddingRight:'20px',
                        paddingTop:'10px', 
                        paddingBottom:'10px'  
                    }}
                    onClick={() => setLoadData(!loadData)}
                >
                    {loadData ? 'Show More' : 'Back Data'}
            </button>
            
        </div>
    );
};

export default LoadData;