<template>
    <div>
        <h3>Add Todo</h3>
        <div class="add">
            <form v-on:submit="onSubmit">
                <input type="text" v-model="title" placeholder="Add Todo...">
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "AddTodo",
    methods: {
        ...mapActions(['addTodo']),
        onSubmit(e) {
            e.preventDefault();
            this.addTodo(this.title);

            this.title = "";
        }
    },
    data() {
        return {
            title: ''
        }
    }
}
</script>

<style>

</style>
