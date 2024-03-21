import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import ContactList from './ContactList'
import ContactDetails from './ContactDetails'
const ContactApp = () => {
  let [contacts,setContacts]=useState([])
  let [selContact,setSelContact]=useState({})
  useEffect(()=>{
    Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
    .then((resp)=>{
      setContacts(resp.data)
    })
    .catch()
  },[])
  let selectedContact = (contact)=>{
    //alert(contact.email)
    setSelContact(contact)
  }
  return <div>
   {/*  <pre>{JSON.stringify(contacts)}</pre> */}
   {/* <pre>{JSON.stringify(selContact)}</pre> */}
    {/* <h1>Contact App</h1> */}
    <div className="container mt-5">
      <div className="row">
        <div className="col-8">
          {
            contacts.length>0 ? <>
            <ContactList contacts={contacts} selectedContact={selectedContact}/>
            </>:null
          }
         
        </div>
        <div className="col-4">
        {/* ContactDetails */}
        {
          Object.keys(selContact).length>0 ? <>
          <ContactDetails contact={selContact}/>
          </>:null
        }
        </div>
      </div>
    </div>
  </div>
}

export default ContactApp