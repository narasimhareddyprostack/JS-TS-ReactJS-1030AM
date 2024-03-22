import React from 'react'
import { json } from 'react-router-dom'

const ContactList = (contactData) => {
  let showContact = (contact)=>{
    //alert(contact.email)
    contactData.selectedContact(contact);
  }
  return <div>
   {/*  <h2>Contact List</h2> */}
  {/*   <pre>{JSON.stringify(contactData)}</pre> */}
    <div className="row">
        <div className="col">
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contactData.contacts.map((contact,index)=>{
                            return <tr key={index} onMouseOver={showContact.bind(null,contact)}>
                                <td>{contact.login.uuid.substr(32)}</td>
                                <td>{contact.name.first}</td>
                                <td>{contact.email}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  </div>
}

export default ContactList