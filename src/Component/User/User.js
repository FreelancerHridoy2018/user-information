import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const User = (props) => {
    const {name, country, email, photo} = props.user;
    const handleAddFriend = props.handleAddFriend;
    return (
        <div className='main-container'>
                <img className='photo' src={photo} alt="" />
                <h3>Name : <b className='colorName'>{name}</b></h3>
                <p><b>Email : {email}</b></p>
                <p><b>Country : {country}</b></p>
                <button onClick={()=>handleAddFriend(props.user)}><FontAwesomeIcon icon={faUserPlus} /> Add Friend</button>

        </div>
    );
};

export default User;