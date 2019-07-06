import axios from 'axios';

const state = {
    todos: []
};

const getters = {
    allTodos: state => state.todos
};

const actions = {
    async getTodos({ commit }) {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");

        commit('setTodos', res.data);
    },
    async addTodo({ commit }, title) {
        const res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
            title,
            completed: false
        });

        commit('addNewTodo', res.data);
    },
    async delTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

        commit('delTodo', id);
    },
    async filterTodos({ commit }, e) {
        const limit = e.target.value;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);

        commit('setTodos', res.data);
    },
    async updateTodo({ commit }, todo) {
        const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo);

        commit('updateTodo', res.data);
    }
};  

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    addNewTodo: (state, todo) => state.todos.unshift(todo),
    delTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodo: (state, updated) => {
        const idx = state.todos.findIndex(todo => todo.id === updated.id);

        if (idx !== -1) {
            state.todos.splice(idx, 1, updated);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}