<script setup lang="ts">
import { Column } from '../types/index';
import { nanoid } from 'nanoid';

const columns = ref<Column[]>([
	{
		id: nanoid(),
		title: 'Backlog',
		tasks: [
			{
				id: nanoid(),
				title: 'Task 1',
				description: 'Description 1',
				createdAt: new Date(),
			},
			{
				id: nanoid(),
				title: 'Task 2',
				description: 'Description 2',
				createdAt: new Date(),
			},
			{
				id: nanoid(),
				title: 'Task 3',
				description: 'Description 3',
				createdAt: new Date(),
			},
		],
	},
	{
		id: nanoid(),
		title: 'To Do',
		tasks: [
			{
				id: nanoid(),
				title: 'Task 1',
				description: 'Description 1',
				createdAt: new Date(),
			},
			{
				id: nanoid(),
				title: 'Task 2',
				description: 'Description 2',
				createdAt: new Date(),
			},
			{
				id: nanoid(),
				title: 'Task 3',
				description: 'Description 3',
				createdAt: new Date(),
			},
		],
	},
	{
		id: nanoid(),
		title: 'In Progress',
		tasks: [],
	},
	{
		id: nanoid(),
		title: 'Done',
		tasks: [],
	},
]);
</script>
<template>
	<div class="flex gap-4 overflow-x-auto items-start">
		<div
			v-for="column in columns"
			:key="column.id"
			class="column bg-gray-200 p-5 rounded min-w-[15rem]"
		>
			<header>
				<h2>{{ column.title }}</h2>
			</header>
			<div>
				<div v-for="task in column.tasks" :key="task.id">
					<h3>{{ task.title }}</h3>
					<p>{{ task.description }}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped></style>
