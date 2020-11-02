import React, { useState } from 'react';

function Filter() {

    const [ open, setOpen ] = useState(false);

    let filter = "tools__dropdown";
    switch (open) {
        case true :
            filter += " active";
            break;
        default :
            filter = "tools__dropdown";
            break;
    };

    return (
        <div className="tools__filter" open={open} onClick={() => setOpen(!open)}>
            <h3 style={{display: open ? "none" : "block"}}>/Filter +/</h3>
            <h3 style={{display: open ? "block" : "none"}}>/Filter -/</h3>
            <div className={filter}>
                <ul>
                    <li>Lowest price</li>
                    <li>Highest price</li>
                </ul>
            </div>
        </div>
    )
};

export default Filter;
