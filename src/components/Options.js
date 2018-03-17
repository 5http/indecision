import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <button onClick={props.deleteAllOptions}>Remove all</button>
            {props.options.length === 0 && <p>Please add an item to get started</p>}
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        deleteOption={props.deleteOption}
                    />
                ))
            }
        </div>
    )
}

export default Options;

