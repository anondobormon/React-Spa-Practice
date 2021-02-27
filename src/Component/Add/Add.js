import React from 'react';
import './Add.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons'

const Add = (props) => {

    const person = props.person;
    console.log(person)
    const totalSalary = person.reduce((total, user) => total + user.salary,0);
    console.log(totalSalary);
    return (
        <div>
            <h4> {<FontAwesomeIcon icon={faUsers} />} <span id='total-added'>{person.length}</span> Person</h4>
            <h4>Yearly total salary: $ {totalSalary}</h4>
        </div>
    );
};

export default Add;
<i class="fas fa-users"></i>