import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';
import { create } from 'zustand';

// Zustand 스토어 생성
const useTodosStore = create(
    persist(
        immer((set) => ({
            todos: [],
            addTodo: (text) =>
                set((state) => {
                    // 불변성을 어기는 예시: 직접 배열을 수정
                    state.todos.push({
                        id: Date.now(),
                        text,
                        completed: false,
                    });
                    return state;
                }),
            toggleTodo: (id) =>
                set((state) => {
                    // 불변성을 어기는 예시: 직접 객체를 수정
                    const todo = state.todos.find((todo) => todo.id === id);
                    if (todo) {
                        todo.completed = !todo.completed;
                    }
                    return state;
                }),
        })),
        { name: 'todos-store', getStorage: () => sessionStorage }
    )
);

export default useTodosStore;
