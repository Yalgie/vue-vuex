<template>
    <div>
        <h3>Todos</h3>
        <div class="todos">
            <div :key="todo.id" v-for="todo in allTodos" class="todo" v-bind:class="{'is-complete' : todo.completed}">
                <p>
                    {{ todo.title }}
                    <span v-on:click="delTodo(todo.id)">X</span>
                    <button v-on:click="onDblClick(todo)">Toggle</button>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "Todos",
    created() {
        this.getTodos();
    },
    methods: {
        ...mapActions(['getTodos', 'delTodo', 'updateTodo']),
        onDblClick(todo) {
            const updTodo = {
                id: todo.id,
                title: todo.title,
                completed: !todo.completed
            }

            this.updateTodo(updTodo);
        }
    },
    computed: mapGetters(['allTodos'])
}
</script>

<style scoped>
.is-complete {
    text-decoration: line-through;
}
</style>
