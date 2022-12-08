import React, { useState } from "react";
import PersonCard from "./PersonCard";

const Main = () => {
    const[firstName,lastName,age,hairColor,setAge]= useState("From state");
    const person1 = { firstName: "Doe", lastName: "Jane" ,age:"45",hairColor:"Black" };
    const person2 = { firstName: "Smith", lastName: "John" ,age:"88",hairColor:"Brown" };
    const person3 = { firstName: "Fillmore", lastName: "Millard" ,age:"50",hairColor:"Brown" };
    const person4 = { firstName: "Smith", lastName: "Maria" ,age:"62",hairColor:"Brown" };
  

    return (
        <div className="main">
            <PersonCard
            firstName = 'Doe'
            lastName = 'Jane'
            age = '45'
            hairColor ='Black'
            />
            <PersonCard
            firstName = 'Smith'
            lastName = 'John'
            age = '88'
            hairColor ='Brown'
            />
            <PersonCard
            firstName = 'Fillmore'
            lastName = 'Millard'
            age = '50'
            hairColor ='Brown'
            />
            <PersonCard
            firstName = 'Smith'
            lastName = 'Maria'
            age = '62'
            hairColor ='Brown'
            />
        </div>

    )

}

export default Main