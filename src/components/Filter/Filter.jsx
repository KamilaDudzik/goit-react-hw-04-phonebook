import PropTypes from "prop-types";
import React from "react";
import css from "./Filter.module.css";

export const Filter = ({ onChange }) => {

    const filterContacts = (event) => {
        const { value } = event.target
        onChange(value)
    }
    
    return (
        <div>
            <h3 className={css.filter}>Find contacts by name</h3>
            <input
                placeholder="Contact name"
                className={css.filterInput}
                onChange={filterContacts}
            />
        </div>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired
}