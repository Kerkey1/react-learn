import React from 'react';

const Fifth = () => {
    const lab5 = () => {
        const string = "Hello world";
        const resString = string.slice(6);
        let res = "";
        for (let i = 0; i < resString.length; i++) {
            res += resString.charCodeAt(i) + " ";
        }
        console.log("Lab 5:", res)
        return res
    }

    return <div className="item-style">
        <h3>LAB 5</h3>
        {lab5()}
    </div>
}
export default Fifth;