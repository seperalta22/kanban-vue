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

const alt = useKeyModifier('Alt');
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
						:group="{ name: 'tasks', pull: alt ? 'clone' : true }"
						item-key="id"
						:animation="150"
					>
						<template #item="{ element: task }: { element: Task }">
							<div>
								<TrelloBoardTask :task="task" />
							</div>
						</template>
					</draggable>
					<footer>
						<NewTask @add="column.tasks.push($event)" />
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
<style scoped>
/*.sortable-chosen {
	background-color: aqua;
}*/

.sortable-drag .task {
	transform: rotate(5deg);
}

.sortable-ghost .task {
	position: relative;
}

.sortable-ghost .task::after {
	content: '';
	@apply absolute top-0 left-0 w-full h-full bg-slate-300 rounded;
	/* 
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.2);*/
}
</style>
