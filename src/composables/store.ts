import { acceptHMRUpdate, defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  const email = ref('');
  const vk_url = ref('');
  const phone_number = ref('');
  const amount = ref('');

  return {
    email,
    vk_url,
    phone_number,
    amount
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))