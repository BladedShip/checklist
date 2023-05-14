<script>
	import TodoInput from './TodoInput.svelte';
	import { todoStore } from '../../stores/TodoStore.js';
</script>

<section class="mt-8 space-y-4">
	{#each $todoStore as todo (todo.id)}
		<TodoInput {todo} />
	{/each}
</section>
