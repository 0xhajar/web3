import { useState, useEffect } from 'react';
import PersonsAPI from '../services/personService';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Person';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    PersonsAPI.getAll().then(initialPersons => {
      setPersons(initialPersons);
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleSearchChange = (event) => setSearchTerm(event.target.value);

  const addPerson = (event) => {
    event.preventDefault();
    const personExists = persons.find(person => person.name === newName);
  
    if (personExists) {
      const confirmUpdate = window.confirm(`${newName} is already added to the phonebook. Do you want to replace the old number with the new one?`);
      
      if (confirmUpdate) {
        PersonsAPI.update(personExists.id, { ...personExists, number: newNumber })
          .then(updatedPerson => {
            setPersons(persons.map(person => person.id === personExists.id ? updatedPerson : person));
            setNewName('');
            setNewNumber('');
          })
          .catch(error => console.error('Error updating person:', error));
      }
    } else {
      const personObject = { name: newName, number: newNumber };
      PersonsAPI.create(personObject)
        .then(newPerson => {
          setPersons(persons.concat(newPerson));
          setNewName('');
          setNewNumber('');
        })
        .catch(error => console.error('Error adding person:', error));
    }
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this person?');
    if (confirmDelete) {
      PersonsAPI.remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
        })
        .catch(error => console.error('Error deleting person:', error));
    }
  };

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} handleDelete={handleDelete} /> {/* Pass handleDelete as a prop */}
    </div>
  );
};

export default App;
