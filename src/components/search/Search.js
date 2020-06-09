import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Search.css";
import { Icon, Input } from "semantic-ui-react";

export default function Search({ onSearch }) {
    console.log(typeof onSearch);
    // const searchRef = React.createRef();

    // useEffect(() => {
    //     searchRef.current.focus();
    // })

    // function onClose() {
    //     onSearch('');
    //     setSearch(false);
    // }

    const inputStyle = { maxWidth: '300px', color: '#00909A' };
    return (
        <div className="search">
            <div className="search-box-container">
                <Input
                    icon="search"
                    iconPosition="left"
                    onChange={(event) => onSearch(event.target.value)}
                    style={inputStyle}
                    size="small">
                    {/* input={{ ref: searchRef }} */}
                </Input>
                <Icon
                    className="search-close-icon"
                    name="close"
                    size="large"
                    // onClick={onClose}
                    style={{ marginLeft: '10px' }}>
                </Icon>
            </div>
        </div>
    );
}

Search.propTypes = {
    // setSearch: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
};
