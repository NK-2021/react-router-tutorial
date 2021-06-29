import {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';
import AddContacts from './AddContacts';
import ContactDetail from './ContactDetail';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) =>{
    setContacts([...contacts, contact]);
  }

  useEffect(()=>{
    const retriveContactData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContactData){setContacts(retriveContactData)};
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts])

  const removeHandler = (id) =>{
    const newList = contacts.filter((elem)=>elem.id!==id);
    console.log(id);
    setContacts(newList);
  }
  
  return (
    <BrowserRouter>
      <div className="ui container">
        <Header/>
        <Switch>
          <Route path="/" exact render={(props)=><ContactList {...props} contacts={contacts} getContactId={removeHandler}/>}/>
          <Route path="/add-contacts" render={(props)=><AddContacts {...props} addContactHandler={addContactHandler}/>}/>
          <Route path="/contact/:id" component={ContactDetail}/>
        </Switch>
        {/* <AddContacts addContactHandler={addContactHandler}/>
        <ContactList contacts={contacts} getContactId={removeHandler}/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
