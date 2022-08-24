import { useState } from 'react';
import { useEffect } from 'react';
import './AgeGridStyle.scss';
import GridBox from './GridBox';

function AgeGrid(props: {currentAge: number, type: string}){
    const averageLifeLength = 85;
    const [boxes, setBoxes] = useState<any[]>([]);

    useEffect(() => {
        function loadBoxes() {
            let newBoxesList: any[] = [];
            if (props.type === "year"){
                for (let i = 1; i < averageLifeLength; i++){
                    const box = <GridBox currentAge={props.currentAge} counter={i} type={props.type} lifeLength={averageLifeLength} />
                    newBoxesList.push(box);
                }
            }else if (props.type === "month"){
                for (let i = 1; i < averageLifeLength * 12; i++){
                    const box = <GridBox currentAge={props.currentAge} counter={i} type={props.type} lifeLength={averageLifeLength} />
                    newBoxesList.push(box);
                }
            }else if (props.type === "week"){
                for (let i = 1; i < averageLifeLength * 52; i++){
                    const box = <GridBox currentAge={props.currentAge} counter={i} type={props.type} lifeLength={averageLifeLength} />
                    newBoxesList.push(box);
                }
            }else if (props.type === "day"){
                for (let i = 1; i < averageLifeLength * 52 * 7; i++){
                    const box = <GridBox currentAge={props.currentAge} counter={i} type={props.type} lifeLength={averageLifeLength} />
                    newBoxesList.push(box);
                }
            }
            
            setBoxes(newBoxesList);
        }
        loadBoxes();
    }, [props.currentAge, props.type]);
    
    return (
        <div className="agegrid">
            <div className='agegrid-boxes'>
                {boxes.map((box: any, index: number) => {
                    return (
                        <div key={index}>
                            {box}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default AgeGrid;