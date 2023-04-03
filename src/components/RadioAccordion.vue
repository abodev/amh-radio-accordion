<template>
  <div
    class="flex p-4 pb-0 my-4 shadow-md"
    :class="['bg-' + (expanded ? 'amh-light-yellow' : 'white')]"
  >
    <div class="relative mr-4">
      <input
        :id="id"
        :name="name"
        :value="value"
        :disabled="!active"
        type="radio"
        v-model="internalModelValue"
        class="hidden"
      />
      <CheckMarkIcon
        :checked="expanded"
        @click="onChange"
        class="absolute top-[14px] cursor-pointer"
      />
    </div>
    <div class="w-full px-0 py-2">
      <div class="pb-3 pl-2">
        <div class="text-lg font-medium">{{ option.title }}</div>
        <div class="text-amh-subtitle">{{ option.subtitle }}</div>
      </div>
      <div v-show="expanded" class="border-t-[1px] border-t-gray mt-2 pt-2">
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
import CheckMarkIcon from './CheckMarkIcon.vue';

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
