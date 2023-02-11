import React from 'react';

const Ninth = () => {
    const first = {1: true, 2: false, 3: true}
    const second = {4: false, 5: false, 6: true}
    const lab9 = (first, second) => {
        let res = ""
        getKeyByValue({...first, ...second}, true).map(v => res += v + ", ")
        console.log("Lab 9:", res)
        return res
    }
    const getKeyByValue = (object, value) => Object.keys(object).filter(key => object[key] === value)


    return <div className="item-style">
        <h3>LAB 9</h3>
        {lab9(first, second)}
    </div>
}
export default Ninth;