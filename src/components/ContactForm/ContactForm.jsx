import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";
import css from "./ContactForm.module.css";

export const ContactForm = ({ onSubmit }) => {
    
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")

    const handlerAdd = event => {
        event.preventDefault()
        onSubmit(name, number)
        setName("")
        setNumber("")
    }
    
    const handlerChange = event => {
        const { name, value } = event.target
    switch (name) {
      case "name":
        setName(value)
        break
      case "number":
        setNumber(value)
            break
        default:
            return
        }
    }
    
    return (
        <div className={css.section}>
            <form onSubmit={handlerAdd} className={css.form}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        placeholder="Contact name"
                        className={css.formInput}
                        onChange={handlerChange}
                    />
                    </label>
                    <label>
                        Number
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={number}
                            placeholder="Contact number"
                            className={css.formInput}
                            onChange={handlerChange}
                        />
                </label>
                <button type="submit" className={css.add}>Add contact</button>
            </form>
        </div>
    )
}


ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}