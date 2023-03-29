import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Requirement, Seniority } from '../../types/Types';

function RequirementComponent({ requirement, order }: { requirement: Requirement, order:number }) {
    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        // if (ref.current) {
        //     const move = ref.current.clientWidth / 2;
        //     const y = Math.sin(order * Math.PI / 4);
        //     const x = Math.asin(y)*4/Math.PI;
            
        //     const marginX = x * move;
        //     const marginY = move / 2;

        //     ref.current.style.marginLeft = `${marginX}px`;
        //     ref.current.style.marginTop = `${marginY}px`;
        // }
    }, []);


    return (
        <div className="level" ref={ref}>
            <h1 className="level-title">{requirement.name}</h1>
            <p className={`level-status  ${requirement.status}`}>{requirement.status}</p>
            {
                requirement.controls && requirement.controls.map((control) => {
                    return (
                        <div className="control">
                            <h2 className="">
                                <Link to={control.url}>{control.name}</Link>
                            </h2>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default function SeniorityLevel({ seniorityLevel }: { seniorityLevel: Seniority}){
    return (
        <div className="flex flex-col items-center justify-center h-full pb-8">
            <header className="seniority-header">{seniorityLevel.name}</header>
            <div className="flex flex-col items-center justify-center">
                {seniorityLevel.requirements?.map((item:Requirement, index: number) =>  <RequirementComponent key={item.name} order={index} requirement={item} />)}
            </div>
        </div>
    );
}