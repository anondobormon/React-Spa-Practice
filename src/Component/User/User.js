import React from 'react';
import './User.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const User = (props) => {
    const person = props.person;
    return (
        <div className='every-user'>
            <div className="image">
                <div className="details">
                    <img src={person.image} alt="" />
                </div>
            </div>
            <div className="user-details">
                <h2>Name: {person.name} </h2>
                <h3>Email: {person.email}</h3>
                <h4>Address: {person.address}</h4>
                <h4>University: {person.university}</h4>
                <h3>Salary: $ {person.salary}</h3>
                <button onClick={() => props.addPerson(props.person)}><FontAwesomeIcon icon={faUserPlus} /> Add Person</button>
            </div>
        </div>
    );
};

export default User;
