import React from "react";
import PropTypes from "prop-types";
// import "./Search.css";
import { Dropdown } from 'semantic-ui-react'

export default function Filter({ onFilter }) {

    const ages = [
        {key: '0', text: '', value: ''},
        {key: '1', text: '', value: ''},
        {key: '2', text: '', value: ''},
        {key: '3', text: '', value: ''},
        {key: '4', text: '', value: ''},
        {key: '5', text: '', value: ''},
        {key: '6', text: '', value: ''},
        {key: '7', text: '', value: ''},
        {key: '8', text: '', value: ''},
    ];

    const locations = [
        {key: 'slc', text: 'Salt Lake City', value: 'Salt Lake City'},
        {key: 'lehi', text: 'Lehi', value: 'Lehi'},
        {key: 'murray', text: 'Murray', value: 'Murray'},
        {key: 'holladay', text: 'Holladay', value: 'Holladay'},
        {key: 'bountiful', text: 'Bountiful', value: 'Bountiful'},
        {key: 'wvc', text: 'West Valley City', value: 'West Valley City'},
    ];

    function handleChange(event, result) {
        console.log('event', event);
        console.log('result', result);
    }

    return (
        <>
            <Dropdown 
                placeholder='Location' 
                fluid 
                multiple 
                selection 
                options={locations} 
                onChange={handleChange}
            />
        </>
    );
}

Filter.propTypes = {
    onFilter: PropTypes.func.isRequired,
};