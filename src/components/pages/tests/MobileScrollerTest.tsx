import React, { useEffect, useRef, useState } from "react";
import "./MobileScrollerTest.scss";

function MobileScrollerTest() {

    const  [currentHole, setCurrentHole] = useState(0);
    const itemRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    let numbers = [];
    for(let i = 0; i < 21; i++) {
        numbers.push(i);
    }

    function handleItemClick(n: number) {
        console.log("current", currentHole, "n", n);
        if(n <= numbers.length - 1)
        {
            setCurrentHole(n);
        }
        else
        {
            setCurrentHole(0);
        }
        
    }

    useEffect(() => {
        if(itemRef.current && listRef.current) {
            let real = null;

            for(let i = 0; i < listRef.current.children.length; i++) {
                if(parseInt(listRef.current.children[i].getAttribute('data-id')!) === currentHole) {
                    real = listRef.current.children[i];
                    break;
                }
            }
            if(real)
            {
                console.log(real);
               real.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            }
           
        }
    }, [currentHole]);

    return (
        <>
            <div id="overall">
                <div className="debug_scroller">
                    <div className="wrap">
                        <div className="text">HOLE</div>
                        <div className="list">
                            <div className='real_list' ref={listRef}>
                            {numbers.map((number, i) => {
                              let isActive = currentHole === i;
                                return (
                                    <div ref={itemRef} data-id={i} onClick={() => handleItemClick(i)} className={`item ${isActive ? 'active' : ''}`} key={i}>{number}</div>
                                )
                            })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer">set 13 <button onClick={() => handleItemClick(currentHole + 1)}>Click me</button></div>
            </div>
        </>
    );
}

export default MobileScrollerTest;
