import React from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Notiflix from "notiflix";

import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export const App = () => {
  
  const [contacts, setContact] = useState([])
  const [setFilter] = useState("")

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("Contacts_Local_Storage") || "[]")
    setContact(savedContacts)
  }, [])

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem("Local_Storage_Contacts", JSON.stringify(contacts))
    } else {
      localStorage.removeItem("Local_Storage_Contacts")
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
    return contacts.filter(showContacts => showContacts.name)
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

// the base code from hw-03
// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: "",
//   };

//   componentDidMount() {

//     const storedState = localStorage.getItem("Contacts_Local_Storage")

//     if (storedState) {
      
//       this.setState({ contacts: JSON.parse(storedState) })
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {    
     
//     if (this.state.contacts !== prevState.contacts) {
         
//            localStorage.setItem("Contacts_Local_Storage", JSON.stringify(this.state.contacts))
//       }
//     if (this.state.contacts.length === 0) {
        
//            localStorage.removeItem("Contacts_Local_Storage");
//     }
//   }

//   newContact = (name, number) => {

//     const { contacts } = this.state

//     const contactNames = contacts.map(contact => {

//       return contact.name;
//     })

//     if (contactNames.includes(name))
      
//       return alert(`${name} is alredy in contacts`);
    
//     this.setState(prevState => ({

//       contacts: [...prevState.contacts, { id: nanoid(), name, number }]

//     }))
//   }

//   showContacts = () => {

//     const { contacts, filter } = this.state

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     )
//   }

//   deleteContact = id => {

//     this.setState(prevState => ({

//       contacts: prevState.contacts.filter(contact => contact.id !== id)

//     }))
//   }

//   filterContacts = newValue => {

//     this.setState({
//       filter: newValue

//     })
//   }

//   render() {

//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.newContact} />
//         <h2>Contacts</h2>
//         <Filter value={this.state.filter} onChange={this.filterContacts} />
//         {/* {this.state.contacts.length > 0 && (<ContactList contacts={this.showContacts()} onClick={this.deleteContact} />)} */}
//         <ContactList contacts={this.showContacts()} onClick={this.deleteContact} />

//       </div>
//     )
//   }
// }