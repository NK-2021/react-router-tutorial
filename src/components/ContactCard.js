import React from "react";
import user from "../images/user.png";
import {Link} from 'react-router-dom';

const ContactCard = ({name, email, id, clickHandler}) => {
  //const { id, name, email } = props.contact;
  return (
    <div className="item" key={id}>
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link to={{
          pathname: `/contact/${id}`,
          state: {
            contact: {
              name,
              id, 
              email
            }
          }
        }}>
        <div className="header">{name}</div>
        <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => clickHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;