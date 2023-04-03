<template>
  <div class="flex">
    <div>
      <input
        :id="id"
        :name="name"
        :value="value"
        :disabled="!active"
        type="radio"
        v-model="internalModelValue"
        @click="onChange"
      />
    </div>
    <div>
      <div>
        <div>{{ option.title }}</div>
        <div>{{ option.subtitle }}</div>
      </div>
      <div v-show="expanded">
        <a
          v-for="suboption in option.subOptions"
          :key="suboption.title"
          :href="suboption.link"
        >
          <span>{{ suboption.title }}</span>
        </a>
      </div>
    </div>
  </div>
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
