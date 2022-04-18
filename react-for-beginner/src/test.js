import { useState } from 'react';

function App() {
    const [toDo, setToDo] = useState('');
    const [toDos, setToDos] = useState([]);

    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo == '') {
            return;
        }
        setToDo('');
        setToDos((currentToDos) => setToDos([toDos, ...currentToDos]));
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    type='text'
                    placeholder='type your todos..'
                />
                <button>Add TODO!</button>
            </form>
        </div>
    );
}
