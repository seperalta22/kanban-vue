<script setup lang="ts">
import { Column } from '../../types/index';
import { nanoid } from 'nanoid';
import draggable from 'vuedraggable';

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
		title: 'Selected for Dev',
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
	<div>
		<draggable
			v-model="columns"
			group="columns"
			item-key="id"
			class="flex gap-4 overflow-x-auto items-start"
		>
			<template #item="{ element: column }: { element: Column }">
				<div class="column bg-gray-200 p-5 rounded min-w-[15rem]">
					<header class="font-bold mb-4">
						<h2>{{ column.title }}</h2>
					</header>
					<TrelloBoardTask
						v-for="task in column.tasks"
						:task="task"
					/>
					<footer>
						<button class="text-gray-500">+ Add a Card</button>
					</footer>
				</div>
			</template>
		</draggable>
	</div>
</template>
<style scoped></style>
