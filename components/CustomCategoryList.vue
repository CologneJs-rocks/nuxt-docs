<script lang="ts" setup>
import PocketBase from 'pocketbase';
import {usePocketbaseStore} from '~/stores/pocketbase';

let store = usePocketbaseStore();
let {url} = storeToRefs(store);
const pb = new PocketBase(url.value);

let products = ref([]);
let category = ref({});

let {identifier} = defineProps({
  identifier: {type: String, required: true}
});

let load = async function () {
  category.value = await pb.collection('categories').getFirstListItem('id="' + identifier + '"');
  products.value = (await pb.collection('products').getList(1, 10, {
    filter: 'category ~ "' + identifier + '" && public=true'
  })).items;
}

onMounted(() => {
  load();
})
</script>

<template>
  <div class="divider font-bold mt-6">{{ category.name }}</div>
  <div v-for="item in products">
    <a class="text-sm" href="/">{{ item.name }}</a>
    <p class="text-xs">{{ item.desc }}</p>
    <p class="text-xs text-primary flex justify-end">{{ item.price.toFixed(2) }} €</p>
  </div>
</template>
