import React, { Component } from 'react'

class ContactDetails extends Component {
  render() {
    return (
      <div>
      <h3>ContactDetails</h3>
      <pre>{JSON.stringify(this.props)}</pre>
      <div className="card">
      <div className="card-header">
      <img src={this.props.contact.picture.large} alt="" />
      </div>
      <div className="card-body"></div>
      </div>
      </div>
    )
  }
}

export default ContactDetails