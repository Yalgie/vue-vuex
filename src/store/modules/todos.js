import axios from 'axios';

const state = {
    todos: []
};

const getters = {
    allTodos: state => state.todos
};

const actions = {
    async getTodos({ commit }) {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5");

        commit('setTodos', res.data);
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos)
};

export default {
    state,
    getters,
    actions,
    mutations
}