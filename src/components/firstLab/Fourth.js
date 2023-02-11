import React from 'react';

const Fourth = () => {
    const lab4 = () => {
        const firstValue = 0.2;
        const secondValue = 123;
        const res = Math.floor(firstValue * secondValue);
        console.log("Lab 4:", res)
        return res
    }
    return <div className="item-style">
        <h3>LAB 4</h3>
        {lab4()}
    </div>
}
export default Fourth;