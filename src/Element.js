import React from 'react';
function Element({ json }) {
    return (
        <div class="container">
        <div class={"border " + json.class}>
            <div class="inner">
                <div>{json.atomicNumber}</div>
                <div class="large">{json.abreviation}</div>
                <div class="small">{json.name}</div>
                <div>{json.weight}</div>
            </div>
        </div>
        </div>
    );
}
export default Element