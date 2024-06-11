import { defineStore } from 'pinia'

export const usePocketbaseStore = defineStore({
  id: 'pocketbaseStore',
  state: () => ({
    url: 'https://admin.colognejs.rocks'
  }),
  actions: {}
})
