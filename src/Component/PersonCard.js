import React, { Component } from 'react';
    
class PersonCard extends Component {
    render() {
        const { firstName,lastName,age, hairColor } = this.props.person;
        return (
            <div>
                <h2>{ firstName} , { lastName }</h2>
                <p>Age :{ age}</p>
                <p>HairColor:{ hairColor}</p>
            </div>
        );
    }
}

export default PersonCard;
