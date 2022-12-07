import './App.css';
import PersonCard from './Component/PersonCard';

function App() {
  const person1 = { firstName: "Doe", lastName: "Jane" ,age:"45",hairColor:"Black" };
  const person2 = { firstName: "Smith", lastName: "John" ,age:"88",hairColor:"Brown" };
  const person3 = { firstName: "Fillmore", lastName: "Millard" ,age:"50",hairColor:"Brown" };
  const person4 = { firstName: "Smith", lastName: "Maria" ,age:"62",hairColor:"Brown" };
  return (
    <div className="App">
     <PersonCard person={person1} />
     <PersonCard person={person2} />
     <PersonCard person={person3} />
     <PersonCard person={person4} />
    </div>
  );
}

export default App;
