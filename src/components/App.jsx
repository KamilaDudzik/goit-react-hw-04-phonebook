import React from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Notiflix from "notiflix";

import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export const App = () => {
  
  const [contacts, setContact] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("Contacts_Local_Storage") || "[]")
    setContact(savedContacts)
  }, [])

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem("Contacts_Local_Storage", JSON.stringify(contacts))
    } else {
      localStorage.removeItem("Contacts_Local_Storage")
    }
  }, [contacts])
  
  const newContact = (name, number) => {
    const contactNames = contacts.map(contact => contact.name)

    if (contactNames.includes(name)) {
      Notiflix.Notify.info(`${name} is already in contacts`)
      return
    }
    setContact([...contacts, { id: nanoid(), name, number }])
    Notiflix.Notify.success(`${name} added to contacts`)
  }

  const filterContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }

  const deleteContact = (id) => {
    setContact(contacts.filter(contact => contact.id !== id))
  }

  const filterChange = value => setFilter(value)

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={newContact} />
        <h2>Contacts</h2>
        <Filter onChange={filterChange} />
        <ContactList contacts={filterContacts()} onClick={deleteContact} />
      </div>
    )
}