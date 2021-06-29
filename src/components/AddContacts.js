import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const AddContacts = ({addContactHandler}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();
    
    const addHandler = (e) =>{
        e.preventDefault();

        addContactHandler({
            name,
            email,
            id: '_' + Math.random().toString(36).substr(2, 9).toString()
        })
        setName('');
        setEmail('');
        history.push('/');
        
    }

    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={addHandler}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Name</label>
                    <input type="email" name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <button className="ui button blue" type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddContacts
