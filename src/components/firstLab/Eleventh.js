import React, {useState} from 'react';

const Eleventh = () => {
    const colors = ["red", "green", 'purple', "black", "white"]
    const [curColor, setCurColor] = useState(0)
    const lab11 = () => {
        if (curColor !== colors.length - 1)
            setCurColor(prev => prev + 1)
        else setCurColor(0)
    }
    return <div
        className="item-style"
        onClick={() => lab11()}
        style={{backgroundColor: colors[curColor], cursor: "pointer"}}
    >
        <h3>LAB 10</h3>
        {curColor}
    </div>
}
export default Eleventh;