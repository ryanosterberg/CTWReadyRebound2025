import { useState } from "react";
function Counter(){
    const [count, setCount] = useState(0);
    const updateCount = () => {setCount(count + 2)};
    const [isClicked, setIsClicked] = useState(false);
    const toggleClicked = () => {setIsClicked(!isClicked)};
    const resetCount = () => {setCount(0);}
    return (
        <>
            {isClicked ? 
                <>
                 <div className="counter">Counter:{count}</div>
                 <br />
                <button className="Btn" onClick={updateCount}>
                    Increment
                </button>
                <br />
            <br />
            <button className="Btn" onClick={resetCount}>
                Reset 
            </button>
                </>
               : null}
            <br />
            <br />
            <button className="Btn" onClick={toggleClicked}>
                Toggle
            </button>

            
        </>
    )
}

export default Counter;