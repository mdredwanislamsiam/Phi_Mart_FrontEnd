import React, { useEffect, useState } from 'react';

const DiscountTimer = () => {
    const targetDate = new Date("2026-01-25T00:00:00").getTime(); 
    const getTimeRemaining = () => {
        const now = new Date().getTime(); 
        const diff = targetDate - now; 
        return {
            days: Math.floor(diff/(1000*60*60*24)), 
            hours: Math.floor((diff%(1000*60*60*24))/(1000*60*60)), 
            mins: Math.floor((diff%(1000*60*60))/(1000*60)), 
            secs: Math.floor((diff%(1000*60))/(1000)),
        }
    }; 
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining()); 

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeRemaining()); 
        }, 1000); 
        return () => clearInterval(timer);
    }, []); 

    return (
		<div className="flex space-x-8 items-center justify-center md:justify-start">
			<div className="mb-5">
				<span className="text-4xl md:text-5xl font-bold text-pink-800">{timeLeft.days}</span>
				<p className="text-xl md:text-2xl font-bold text-pink-700 text-center">Days</p>
			</div>
			<div className="mb-5">
				<span className="text-4xl md:text-5xl font-bold text-pink-800">{timeLeft.hours}</span>
				<p className="text-xl md:text-2xl font-bold text-pink-700 text-center">Hrs</p>
			</div>
			<div className="mb-5">
				<span className="text-4xl md:text-5xl font-bold text-pink-800">{timeLeft.mins}</span>
				<p className="text-xl md:text-2xl font-bold text-pink-700 text-center">Min</p>
			</div>
			<div className="mb-5">
				<span className="text-4xl md:text-5xl font-bold text-pink-800">{timeLeft.secs}</span>
				<p className="text-xl md:text-2xl font-bold text-pink-700 text-center">Sec</p>
			</div>
		</div>
	);
};

export default DiscountTimer;