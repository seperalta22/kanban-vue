<script setup lang="ts">
import type { Task } from '~/types/index';

defineProps<{
	task: Task;
}>();
</script>
<template>
	<div
		:title="task.createdAt.toLocaleString()"
		class="task bg-white p-2 mb-2 rounded shadow-sm max-w-[15rem]"
	>
		<span>{{ task.title }} </span>
		<span>{{ task.description }}</span>
	</div>
</template>
<style scoped></style>
