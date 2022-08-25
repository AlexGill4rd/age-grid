import { Tooltip } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import './GridBox.scss';

function GridBox(props: {currentAge: any, counter: number, type: string, lifeLength: number}) {
    const [box, setBox] = useState<any>();

    useEffect(() => {
        async function createBox(){
            let bornDate = new Date(props.currentAge);
            let todayDate = new Date();
            todayDate.setHours(0, 0, 0, 0);
            let deathDate = bornDate.getDate() + props.lifeLength;

            if (props.type === "year") {
                let loopDate = bornDate;
                loopDate.setFullYear(bornDate.getFullYear() + props.counter)

                let background = "red";
                if (loopDate.getFullYear() === todayDate.getFullYear())
                    background = "green";

                let boxElement = <Tooltip title={<div>To go: {props.lifeLength - props.counter}</div>} placement="top" disableInteractive>
                    <div 
                    className="gridbox"
                    style={todayDate.getFullYear() >= loopDate.getFullYear() ? {backgroundColor: background, width: "70px", height: "70px", color: "white", margin: "3px"} : {backgroundColor: "white", width: "70px", height: "70px", margin: "3px"}}
                >
                    {props.counter}   
                </div></Tooltip>
                setBox(boxElement);
            }else if (props.type === "month"){
                let loopDate = bornDate;
                addMonths(loopDate, props.counter);
                loopDate.setHours(0, 0, 0, 0);

                let background = "red";
                if (loopDate.getFullYear() === todayDate.getFullYear() && loopDate.getMonth() === todayDate.getMonth())
                    background = "green";

                let isPast:boolean = loopDate <= todayDate;

                let boxElement2 = <Tooltip title={<div>To go: {(props.lifeLength * 12) - (props.counter)}</div>} placement="top" disableInteractive>
                <div 
                    className="gridbox"
                    style={isPast ? {backgroundColor: background, width: "30px", height: "30px", color: "white", margin: "1px", fontSize: "0.7em"} : {backgroundColor: "white", width: "30px", height: "30px", margin: "1px", fontSize: "0.7em"}}
                >
                    {props.counter}   
                </div></Tooltip>
                setBox(boxElement2);
            }else if (props.type === "week"){
                let loopDate = bornDate;
                loopDate = addWeeks(props.counter, loopDate);
                loopDate.setHours(0, 0, 0, 0);

                let background = "red";
                if (loopDate.getFullYear() === todayDate.getFullYear() &&
                 loopDate.getMonth() === todayDate.getMonth() && 
                 weekNumber(loopDate) === weekNumber(todayDate))
                    background = "green";

                let isPast:boolean = loopDate <= todayDate;

                let boxElement3 = <Tooltip title={<><div>To go: {(props.lifeLength * 52) - (props.counter)}</div><div>Date: {loopDate.toDateString()}</div></>} placement="top" disableInteractive>
                    <div 
                    className="gridbox"
                     style={isPast ? {backgroundColor: background, width: "20px", height: "20px", color: "white", margin: "1px", fontSize: "0.5em"} : {backgroundColor: "white", width: "20px", height: "20px", margin: "1px", fontSize: "0.5em"}}
                >
                    {props.counter}   
                </div>
                </Tooltip>
                setBox(boxElement3);
            }else if (props.type === "day"){
                let loopDate = bornDate;
                loopDate = addDays(loopDate, props.counter);
                loopDate.setHours(0, 0, 0, 0);

                let background = "red";
                if (loopDate.getFullYear() === todayDate.getFullYear() &&
                 loopDate.getMonth() === todayDate.getMonth() && 
                 loopDate.getDay() === todayDate.getDay() && weekNumber(loopDate) === weekNumber(todayDate))
                    background = "green";

                let isPast:boolean = loopDate <= todayDate;

                let boxElement4 = <Tooltip title={<><div>To go: {(props.lifeLength * 52 * 7) - (props.counter)}</div><div>Date: {loopDate.toDateString()}</div></>} placement="top" disableInteractive>
                    <div 
                    className="gridbox"
                    style={isPast ? {backgroundColor: background, width: "20px", height: "20px", color: "white", margin: "1px", fontSize: "0.5em"} : {backgroundColor: "white", width: "20px", height: "20px", margin: "1px", fontSize: "0.5em"}}
                >
                    {props.counter}   
                </div></Tooltip>
                setBox(boxElement4);
            }
        }
        createBox();
    }, [props.currentAge, props.type]);
    return box;
}
function addMonths(date: any, months: number) {
    var d = date.getDate();
    date.setMonth(date.getMonth() + +months);
    if (date.getDate() != d) {
      date.setDate(0);
    }
    return date;
}
function addWeeks(numOfWeeks: number, date = new Date()) {
    const dateCopy = new Date(date.getTime());
  
    dateCopy.setDate(dateCopy.getDate() + numOfWeeks * 7);
  
    return dateCopy;
}
function addDays(date: any, days: number) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
function weekNumber(date:any = new Date())
{
  var firstJanuary:any = new Date(date.getFullYear(), 0, 1);
  var dayNr = Math.ceil((date - firstJanuary) / (24 * 60 * 60 * 1000));
  var weekNr = Math.ceil((dayNr + firstJanuary.getDay()) / 7);
  return weekNr;
}
export default GridBox;