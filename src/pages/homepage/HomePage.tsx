import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AgeGrid from './components/AgeGrid';
import './style/HomePageStyle.scss';

function HomePage() {
    const [age, setAge] = useState<any>(0);
    const [filter, setFilter] = useState<string>("year");
    const [accepted, setAccepted] = useState<boolean>(false);
    function handleAgeChange(e: any) {
        setAge(e.target.value)
    }
    useEffect(() => {
        if (age <= 0)
            setAccepted(false);
        else
            setAccepted(true);
    }, [age]);
    function handleAccept(e: any) {
        e.preventDefault();
    }
    function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
        setFilter((event.target as HTMLInputElement).value);
    }
    return (
        <div className='homepage'>
            <div className='homepage-header'>
                <form className='homepage-header-content' onSubmit={handleAccept}>
                    <div className='homepage-header-content-left'>
                        <label>Give your age:</label>
                        <input onChange={handleAgeChange} value={age} type="date" id="personage" name="age" />
                        <label><strong>Current filter:</strong> {filter}</label>
                    </div>
                    <div className='homepage-header-content-right'>
                        <FormLabel id="demo-radio-buttons-group-label">Filters</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            value={filter}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="year" control={<Radio />} label="Years" />
                            <FormControlLabel value="month" control={<Radio />} label="Months" />
                            <FormControlLabel value="week" control={<Radio />} label="Weeks" />
                            <FormControlLabel value="day" control={<Radio />} label="Days" />
                        </RadioGroup>
                    </div>
                    
                </form>
            </div>
            {accepted && 
                <AgeGrid currentAge={age} type={filter} />
            }
        </div>
    );
}
export default HomePage;