<template>
  <input
    :id="id"
    :name="name"
    :value="value"
    :disabled="!active"
    type="radio"
    v-model="internalModelValue"
    @click="onChange"
  />
  <div>{{ expanded ? 'expanded' : 'not expanded' }}</div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
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
const emit = defineEmits<(event: 'update:modelValue', value: string) => void>();

const internalModelValue = ref(props.modelValue);

watchEffect(() => {
  internalModelValue.value = props.modelValue;
});

const expanded = computed(() => internalModelValue.value === props.value);

const onChange = () => {
  if (props.value) {
    emit('update:modelValue', props.value);
  }
};
</script>

<style scoped></style>
