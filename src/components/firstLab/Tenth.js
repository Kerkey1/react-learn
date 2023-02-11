import React from 'react';

const Tenth = () => {
    const lab10 = () => {
        const array = [0, 1, 2, 3, 4, 5]
        const res = array.map(a => {
            let index = array.indexOf(a);
            if (index === 0)
                return a
            else
                return a + array[index - 1]
        })
        console.log("Lab 10:", res)
        let result = "";
        res.map(v => {
            result += v + ", "
        })
        return result
    }

    return <div className="item-style">
        <h3>LAB 10</h3>
        {lab10()}
    </div>
}
export default Tenth;