import React from 'react'

const ContactDetails = (data) => {
  return (
    <div>
       {/*  <h1>ContactDetails</h1> */}
        {/* <pre>{JSON.stringify(data)}</pre> */}
        <div className="card">
            <div className="card-header">
                <img src={data.contact.picture.large} alt="" />
            </div>
            <div className="card-body">
                <h3>{data.contact.name.first}</h3>
            </div>
        </div>
    </div>
  )
}

export default ContactDetails