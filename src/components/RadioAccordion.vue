<template>
  <input
    :id="id"
    :name="name"
    :value="value"
    :disabled="!active"
    type="radio"
  />
  <div>{{ option.title }}</div>
  <div>{{ option.subtitle }}</div>
</template>

<script setup lang="ts">
import { Options } from '../types/RadioAccordion';

interface Props {
  modelValue?: string;
  value?: string;
  name?: string;
  id: string;
  active: boolean;
  option: Options;
}

const props = defineProps<Props>();
</script>

<style scoped></style>
