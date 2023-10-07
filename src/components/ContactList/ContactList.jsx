import PropTypes from "prop-types";
import React from "react";
import css from "./ContactList.module.css";

export const ContactList = ({ contacts, onClick }) => {

    const deleteContact = (id) => {
        onClick(id)
    }
    
    return (
        <ul className={css.contactsList}>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={css.contactsItem}>
            <p className={css.contactsName}>{contact.name}</p>
            <p className={css.contactsNumber}>{contact.number}</p>
            <button
              type="button"
              onClick={() => deleteContact(contact.id)}
              className={css.contactsButton}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        }).isRequired
    ),
}