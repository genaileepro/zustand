import useTodosStore from './zustand/useTodosStore';

function App() {
    const { todos, addTodo, toggleTodo } = useTodosStore();

    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                            style={{
                                textDecoration: todo.completed
                                    ? 'line-through'
                                    : 'none',
                            }}
                            onClick={() => toggleTodo(todo.id)}
                        >
                            {todo.text}
                        </span>
                    </li>
                ))}
            </ul>
            <button
                onClick={() =>
                    addTodo(prompt('새로운 todolist를 입력해주세요.'))
                }
            >
                Add Todo
            </button>
        </div>
    );
}

export default App;

// import { useState } from 'react';
// import useTodosStore from './zustand/todosStore';

// function App() {
//     const todos = useTodosStore((state) => state.todos);
//     const addTodo = useTodosStore((state) => state.addTodo);
//     const removeTodo = useTodosStore((state) => state.removeTodo);
//     const [input, setInput] = useState('');

//     return (
//         <div>
//             <h1>Todo List</h1>
//             <input value={input} onChange={(e) => setInput(e.target.value)} />
//             <button
//                 onClick={() => {
//                     addTodo(input);
//                     setInput('');
//                 }}
//             >
//                 Add Todo
//             </button>
//             <ul>
//                 {todos.map((todo, index) => (
//                     <li key={index}>
//                         {todo}{' '}
//                         <button onClick={() => removeTodo(index)}>
//                             Remove
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default App;

// import useBearsStore from './zustand/bearsStore';
// const App = () => {
// const bears = useBearsStore(function (state) {
//     return state.bears;
// });

// const increase = useBearsStore(function (state) {
//     return state.increase;
// });

// const { bears, increase } = useBearsStore(function (state) {
//     return state;
// });

//     const { bears, increase, init } = useBearsStore((state) => state);

//     return (
//         <div>
//             <h2>Zustand</h2>
//             <h4>{bears}</h4>
//             <button onClick={increase}>+1</button>
//             <button onClick={init}>초기화</button>
//         </div>
//     );
// };
