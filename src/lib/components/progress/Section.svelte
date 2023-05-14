<script>
    import Bar from "./Bar.svelte";
    import {todoStore} from "../../stores/TodoStore.js";

    export let completePercentage = 0;
    export let progressPercentage = 0;

    $: totalTodos = $todoStore.length;
    $: completedTodos = $todoStore.filter(todo => todo.completed).length;
    $: progressTodos = $todoStore.filter(todo => !todo.completed).length;
    $: completePercentage = Math.round((completedTodos / totalTodos) * 100) || 0;
    $: progressPercentage = Math.round((progressTodos / totalTodos) * 100) || 0;
</script>

<section class="mt-10">
    <h3 class="text-xl font-bold text-gray-three">Progress</h3>
    <div class="mt-8 space-y-8">
        <Bar title="In Progress" complete={progressPercentage} />
        <Bar title="Completed" complete={completePercentage} />
    </div>
</section>