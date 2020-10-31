import React from "react";
import PropTypes from "prop-types";
import "./Search.css";
import { Icon, Input } from "semantic-ui-react";

export default function Search({ onSearch }) {

    const inputStyle = { maxWidth: '300px', color: '#687864' };
    return (
        <>
            <div className="search-box-container">
                <Input
                    icon="search"
                    iconPosition="left"
                    onChange={(event) => onSearch(event.target.value)}
                    style={inputStyle}
                    size="small">
                </Input>
                <Icon
                    className="search-close-icon"
                    name="close"
                    size="large"
                    onClick={() => onSearch('')}
                    style={{ marginLeft: '5px', color: '#687864' }}>
                </Icon>
            </div>
        </>
    );
}

Search.propTypes = {
    // setSearch: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
};
