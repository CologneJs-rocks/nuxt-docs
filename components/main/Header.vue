<template>
  <section class="header flex justify-between bg-white px-3 py-3 rounded-b-lg">
    <section class="logo flex items-center ml-3">
      <a class="font-bold mr-3" href="/">CologneJs.rocks - Docs</a>
    </section>
  </section>
</template>

<script lang="ts" setup>
import PocketBase from 'pocketbase';
import { usePocketbaseStore } from '~/stores/pocketbase';

let store = usePocketbaseStore();
let { url } = storeToRefs(store);
const pb = new PocketBase(url.value);
</script>