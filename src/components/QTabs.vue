<script lang="ts" setup>
interface Props {
    tabList?: Array<string>;
    currentTab?: Number;
}

const props = withDefaults(defineProps<Props>(), {
    tabList: () => ["1", "2"],
    currentTab: () => 0
});

const activeTab = props.currentTab ? ref(props.currentTab) : ref(0)

const emit = defineEmits(["update:modelValue"]);

watch(activeTab, () => {
  emit("update:modelValue", activeTab.value);
});

watch(() => props.currentTab, () => {
  activeTab.value = props.currentTab
});

</script>

<template>
  <div class="border-1 border-teal-500 rounded-sm overflow-hidden">
    <ul class="w-full list-none h-full bg-[#fff] p-1 text-center flex items-center">
      <li
        v-for="(tab, index) in props.tabList"
        :key="index"
        class="w-full py-1 px-5px rounded-sm mx-5px cursor-pointer transition-colors duration-300"
        :class="[index == activeTab ? 'text-white font-medium bg-teal-500' : 'text-black bg-[#f5f7f9] hover:bg-[#dddfe1]']"
        @click="activeTab = index"
      >{{ tab }}</li>
    </ul>
  </div>
</template>