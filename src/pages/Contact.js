import React from 'react'
import './Contact.css'

class Contact extends React.Component {
    state = {  }
    render() { 
        return (  
            <div className="email-container">
                <h3 className="email-heading" >email us!</h3>
                <h2 className="email-detail">subtleorangeofficial@gmail.com</h2>
            </div>
         );
    }
}
 
export default Contact;