<script setup lang="ts">
import type { ID, Task } from '~/types/index';

const props = defineProps<{
	task: Task;
}>();

const emit = defineEmits<{
	(e: 'delete', payload: ID): void;
}>();

const focused = ref(false);

onKeyStroke('Backspace', (e) => {
	if (focused.value) emit('delete', props.task.id);
});
</script>
<template>
	<div
		:title="task.createdAt.toLocaleString()"
		class="task bg-white p-2 mb-2 rounded shadow-sm max-w-[15rem] flex"
		@focus="focused = true"
		@blur="focused = false"
		tabindex="0"
	>
		<DragHandle class="pr-2 text-cyan-300" />
		<span>{{ task.title }} </span>
		<span>{{ task.description }}</span>
	</div>
</template>
<style scoped></style>
