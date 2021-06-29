import React from 'react';
import ConactCard from './ContactCard';
import {Link} from 'react-router-dom';

const ContactList = ({contacts, getContactId}) => {

    const renderList = contacts.map(({name, email, id})=>{
        return(
            <ConactCard name={name} email={email} id={id} clickHandler={()=>getContactId(id)} key={id}/>
        )
    })
    return (
        <div className="main">
            <h2>Contact List</h2>
            <Link to="/add-contacts">
                <button className="ui button blue right">Add Contact</button>
            </Link>
            <div className="ui celled list">
                {renderList}
            </div>
        </div>
    )
}

export default ContactList
