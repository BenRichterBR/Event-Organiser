//import components
import NavBar from '../routes/NavBar';
import { useState } from 'react';
import NewEventAdder from './NewEventAdder';
import NewEventDisplayer from './NewEventDisplayer';

//display either the form to create a new event, or the event that was just added. display the navbar either way.
//use state to remember whether or not a new event was just added
export default function AddEvent() {

    const [newEvent, setNewEvent] = useState('');

    return(
        <div>
            <NavBar />
            {
                newEvent === '' ? 
                <div className='main-areas'>
                    <h1>Add an event here!</h1>
                    <br />
                    <NewEventAdder setNewEvent={setNewEvent}/>
                </div> 
                : 
                <NewEventDisplayer newEvent={newEvent}/>
            }
        </div>
    );
}