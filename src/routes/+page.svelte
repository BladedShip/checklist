<script>
    import AddTodoSection from "../lib/components/todos/AddTodoSection.svelte";
</script>

<div class="bg-olive-one selection:bg-green-two min-h-screen p-0 md:px-8 md:py-24">
	<main
		class="bg-cream-four mx-auto min-h-screen max-w-none rounded-none px-5 py-10 outline-none md:min-h-max md:max-w-[60rem] md:rounded-2xl md:px-8 md:outline md:outline-4 md:outline-offset-8 md:outline-cream-four"
	>
		<h1 class="text-2xl font-bold text-gray-three">Dashboard</h1>
		<div class="mt-10" >
            <AddTodoSection />
        </div>
	</main>
</div>
