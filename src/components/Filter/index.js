import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Filter = ({ threshold, setThreshold }) => {
    return (
        <div className="filter">
            <label htmlFor="threshold">Filter by % change:</label>
            <input
                type="number"
                id="threshold"
                value={threshold}
                onChange={(e) => setThreshold(parseFloat(e.target.value))}
            />
        </div>
    );
};

Filter.propTypes = {
    threshold: PropTypes.number.isRequired,
    setThreshold: PropTypes.func.isRequired,
};

export default Filter;
