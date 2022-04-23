// // import Button from './Button';
// // import styles from './App.module.css';
// import { useState } from 'react';
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
        setToDos((currentToDos) => [toDo, ...currentToDos]);
        setToDo('');
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    type='text'
                    placeholder='type your todos..'
                    value={toDo}
                />
                <button>Add TODO!</button>
            </form>
            <hr />
            {toDos.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </div>
    );
}
export default App;
// function App() {
//     const [toDo, setToDo] = useState('');
//     const [toDos, setToDos] = useState([]);
//     const onChange = (event) => setToDo(event.target.value);
//     const onSubmit = (event) => {
//         event.preventDefault();
//         if (toDo == '') {
//             return;
//         }
//         setToDo(''); // input 비우기
//         // not toDos.push() ..... 직접 수정하지 않기

//         setToDos((currentArray) => [toDo, ...currentArray]);
//         console.log(toDos);
//     };
//     return (
//         <div>
//             <h1>My ToDos : {toDos.length}</h1>
//             <form onSubmit={onSubmit}>
//                 <input
//                     type='text'
//                     onChange={onChange}
//                     placeholder='Write your to do..'
//                 />
//                 <button>Add To Do</button>
//             </form>
//         </div>
//     );
// }

// export default App;
