import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addPassCate } from '../redux';

function PassCatContainer(props) {
    const [category, setCategory] = useState('');
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Add Password Category</h1>
            <h1>Category = {props.category}</h1>
            <input type="text" value={category} onChange={e => setCategory(e.target.value)} />
            <button onClick={() => dispatch(addPassCate())}>ADD</button>
        </div>
    )
}

export default PassCatContainer;