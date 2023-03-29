import { useRef, useEffect } from 'react';
import { Requirement, Seniority } from '../../types/Types';

function RequirementComponent({ requirement, order }: { requirement: Requirement, order:number }) {
    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (ref.current) {
            const move = ref.current.clientWidth / 2;
            const y = Math.sin(order * Math.PI / 4);
            const x = Math.asin(y)*4/Math.PI;
            
            const marginX = x * move;
            const marginY = move / 2;

            ref.current.style.marginLeft = `${marginX}px`;
            ref.current.style.marginTop = `${marginY}px`;
        }
    }, []);


    return (
        <div className={`level ${requirement.status}`} ref={ref}>
            <h1 className="text-2xl font-bold">{requirement.name}</h1>
            <p className="level-status">{requirement.status}</p>
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