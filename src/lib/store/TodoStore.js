import { v4 as uuidv4 } from 'uuid';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const data = browser ? JSON.parse(localStorage.getItem('da-kit-list')) ?? [] : [];

export const todoStore = writable(data);

todoStore.subscribe((value) => {
	if (browser) {
		localStorage.setItem('da-kit-list', JSON.stringify(value));
	}
});

export const addTodo = () => {
	todoStore.update((items) => {
		return [...items, { id: uuidv4(), text: '', completed: false }];
	});
};

export const deleteTodo = (id) => {
	todoStore.update((items) => {
		return items.filter((item) => item.id !== id);
	});
};

export const toggleTodo = (id) => {
	todoStore.update((items) => {
		return items.map((item) => {
			if (item.id === id) {
				return { ...item, completed: !item.completed };
			}
			return item;
		});
	});
};

export const editTodo = (id, text) => {
	todoStore.update((items) => {
		return items.map((item) => {
			if (item.id === id) {
				return { ...item, text };
			}
			return item;
		});
	});
};
