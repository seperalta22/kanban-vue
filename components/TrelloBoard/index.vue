<script setup lang="ts">
import { Column, Task } from '../../types/index';
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
			:animation="150"
			handle=".drag-handle"
			class="flex gap-4 overflow-x-auto items-start"
		>
			<template #item="{ element: column }: { element: Column }">
				<div class="column bg-gray-200 p-5 rounded min-w-[15rem]">
					<header class="font-bold mb-4 flex gap-2">
						<DragHandle />
						<h2>{{ column.title }}</h2>
					</header>
					<draggable
						v-model="column.tasks"
						group="tasks"
						item-key="id"
						:animation="150"
					>
						<template #item="{ element: task }: { element: Task }">
							<TrelloBoardTask :task="task" />
						</template>
					</draggable>
					<footer>
						<button class="text-gray-500">+ Add a Card</button>
					</footer>
				</div>
			</template>
		</draggable>
	</div>
	<!-- <pre>
		{{ columns }}
	</pre
	> -->
</template>
<style scoped></style>
