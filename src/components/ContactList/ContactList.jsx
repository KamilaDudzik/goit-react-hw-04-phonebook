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
                            type="submit"
                            onClick={() => deleteContact(contact.id)}
                            className={css.contactsButton}
                            value={contact.id}
                        >
                            Delete
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        }).isRequired
    ),
    onClick: PropTypes.func.isRequired,
}

// base code from hw-03
// export class ContactList extends Component {

//     deleteContact = id => {
//         const { value } = id.target;
//         this.props.onClick(value);
//     }

//     render() {
//         const { contacts } = this.props;

//         return (
//             <ul className={css.contactsList}>
//                 {contacts.map(contact => {
//                     return (
//                         <li key={contact.id} className={css.contactsItem}>
//                             <p className={css.contactsName}>{contact.name}</p>
//                             <p className={css.contactsNumber}>{contact.number}</p>
//                             <button
//                                 type="submit"
//                                 onClick={this.deleteContact}
//                                 className={css.contactsButton}
//                                 value={contact.id}
//                             >
//                                 Delete
//                             </button>
//                         </li>
//                     )
//                 })}
//             </ul>
//         )
//     }
// }

// // ContactList.defaultProps = { contacts: [] }

// ContactList.propTypes = {
//     // contacts: PropTypes.object.isRequired,
//     contacts: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             number: PropTypes.string.isRequired
//         }).isRequired,
//     ),
//     onClick: PropTypes.func.isRequired,
//     // value: PropTypes.string.isRequired // not used in the component
// }