export const todoStore = {
    namespaced: true,
    state: {
        todos: [],
        todo:''
    },
    mutations: {
        completeTodo(state, payload) {
            const todoIndex = state.todos.indexOf(payload);
            state.todos[todoIndex].done = true;
        },
        pendingTodo(state, payload) {
            const todoIndex = state.todos.indexOf(payload);
            state.todos[todoIndex].done = false;
        },
        deleteTodo(state, payload) {
            const todoIndex = state.todos.indexOf(payload);
            state.todos.splice(todoIndex, 1);
        },
        addTodo(state, todo) {
            state.todos.push({
                title: todo.title,
                project: todo.project,
                done: todo.done
            });
        // sweetalert('Success!', 'To-Do created!', 'success');
        }
    },
    actions: {
        completeTodo({ commit }, payload) {
            commit('completeTodo', payload)
        },
        pendingTodo(context, payload) {
            context.commit('pendingTodo', payload)
        },
        deleteTodo({ commit }, payload) {
            commit('deleteTodo', payload)
        },
        addTodo({ commit }, todo) {
            commit('addTodo', todo)
        },
        showTodo ({ commit }) {
            axios.get('/tasks')
                .then((response) => {
                commit('showTodo',  response.data.posts );
            }, 
            (error) => {
                console.log(error);
            })
        },
    },
    getters: {
        todo: state => state.todo,
        todos: state => state.todos
    }
}