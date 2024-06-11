<script setup>
import PocketBase from 'pocketbase';
import { usePocketbaseStore } from '~/stores/pocketbase';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebook, faGoogle, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLink, faPhone } from "@fortawesome/free-solid-svg-icons";

let store = usePocketbaseStore();
let { url } = storeToRefs(store);
const pb = new PocketBase(url.value);
let categories = ref([]);
onMounted(async () => {
  categories.value = (await pb.collection('categories').getList(1, 10, { sort: 'order' })).items;
});

useHead
  ({
    script: [{
      src: 'https://tracking.jmse.cloud/script.js',
      "data-website-id": "cd64de06-2d64-455c-9a3e-09ae6e7ebf7e"
    }]
  })
</script>

<template>
 Hero Index Page
</template>