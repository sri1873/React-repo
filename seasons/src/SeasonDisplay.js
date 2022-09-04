import React from 'react';

const getSeason = (month, lat) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    }
    else {
        return lat > 0 ? "winter" : "summer";
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(new Date().getMonth(), props.lat)
    return (
        <div>
            {season === 'summer' ? "Let's hit the Beach!" : "Brr! its chilly"}
        </div>
    );
}

export default SeasonDisplay;