import React, { useState } from 'react';

const Country = ({ country ,handleAddMark,handleAddFlag,mark,flag}) => {
    const { flags, name } = country;
    const [visit, setVisit] = useState(false);

    const visitHandle = () => {
        setTimeout(function(){
            setVisit(!visit);
        },120)
    };
    

    return (
        <div className={`card ${visit ? 'visited' : 'visiteds'}`}>
            <img style={{ height: '250px', width: '100%', border: '2px solid red' }} src={flags.png} alt="" />
            <div className="row">
                <span>
                    <button
                        style={{
                            background: visit ? 'purple' : 'linear-gradient(to bottom, purple, purple, red)',
                            padding: '5px',
                            textAlign: 'center',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            borderRadius: '10px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                        }}
                        onClick={visitHandle}
                    >
                        {visit ? 'Visited' : 'Visit'}
                    </button>
                </span>
                <span>
                    <button
                        style={{
                            background: mark?'purple':'linear-gradient(to bottom, purple, purple, red)',
                            padding: '5px',
                            textAlign: 'center',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            borderRadius: '10px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                        }}
                        
                        onClick={()=>handleAddMark(country)``}
                    >
                        Add Mark
                    </button>
                </span>
                <span>
                    <button
                        style={{
                            background: flag?'purple':'linear-gradient(to bottom, purple, purple, red)',
                            padding: '5px',
                            textAlign: 'center',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            borderRadius: '10px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                        }}
                        onClick={()=>handleAddFlag(country)}
                    >
                        Add Flag
                    </button>
                </span>
            </div>
            <h3>Name: {name.common}</h3>
            <h3>Official Name: {name.official}</h3>
        </div>
    );
};

export default Country;
