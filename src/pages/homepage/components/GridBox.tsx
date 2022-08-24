import { Tooltip } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import './GridBox.scss';

function GridBox(props: {currentAge: number, counter: number, type: string, lifeLength: number}) {
    const [box, setBox] = useState<any>();

    useEffect(() => {
        function createBox(){
            if (props.type === "year") {
                let background = "red";
                if (props.currentAge == props.counter) 
                    background = "green";
                let boxElement = <Tooltip title={<div>To go: {props.lifeLength - props.counter}</div>} placement="top" disableInteractive>
                    <div 
                    className="gridbox"
                    style={props.currentAge >= props.counter ? {backgroundColor: background, width: "70px", height: "70px", color: "white", margin: "3px"} : {backgroundColor: "white", width: "70px", height: "70px", margin: "3px"}}
                >
                    {props.counter}   
                </div></Tooltip>
                setBox(boxElement);
            }else if (props.type === "month"){
                let background = "red";
                if (props.currentAge * 12 == props.counter) 
                    background = "green";
                let boxElement2 = <Tooltip title={<div>To go: {(props.lifeLength * 12) - (props.counter)}</div>} placement="top" disableInteractive>
                <div 
                    className="gridbox"
                    style={props.currentAge * 12 >= props.counter ? {backgroundColor: background, width: "30px", height: "30px", color: "white", margin: "1px", fontSize: "0.7em"} : {backgroundColor: "white", width: "30px", height: "30px", margin: "1px", fontSize: "0.7em"}}
                >
                    {props.counter}   
                </div></Tooltip>
                setBox(boxElement2);
            }else if (props.type === "week"){
                let background = "red";
                if (props.currentAge * 52 == props.counter) 
                    background = "green";
                let boxElement3 = <Tooltip title={<div>To go: {(props.lifeLength * 52) - (props.counter)}</div>} placement="top" disableInteractive>
                    <div 
                    className="gridbox"
                     style={props.currentAge * 52 >= props.counter ? {backgroundColor: background, width: "20px", height: "20px", color: "white", margin: "1px", fontSize: "0.5em"} : {backgroundColor: "white", width: "20px", height: "20px", margin: "1px", fontSize: "0.5em"}}
                >
                    {props.counter}   
                </div>
                </Tooltip>
                setBox(boxElement3);
            }else if (props.type === "day"){
                let background = "red";
                if (props.currentAge * 52 * 7 == props.counter) 
                    background = "green";
                let boxElement4 = <Tooltip title={<div>To go: {(props.lifeLength * 52 * 7) - (props.counter)}</div>} placement="top" disableInteractive>
                    <div 
                    className="gridbox"
                    style={props.currentAge * 52 * 7 >= props.counter ? {backgroundColor: background, width: "10px", height: "10px", color: "white"} : {backgroundColor: "white", width: "70px", height: "70px"}}
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
export default GridBox;