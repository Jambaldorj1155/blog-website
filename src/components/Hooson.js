import React, { useState, useEffect } from "react";

export const Hooson = () => {
    const [timeRemaining, setTimeRemaining] = useState(10); 
    
    useEffect(() => {
        if(timeRemaining <= 0) return
        const interval = setInterval(() => {
            setTimeRemaining(timeRemaining - 1)
        }, 1000);
        return () => {clearInterval(interval)}
        
    },[timeRemaining])
    const handlereClick = () => {
        setTimeRemaining(timeRemaining - 1);
    }
   
   
    return (
        <div>

            <h1>Countdown Timer {timeRemaining} seconds</h1>
            <button onClick={handlereClick}>Start</button>
           
        </div>
    );
};



