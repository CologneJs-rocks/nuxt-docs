<template>
  <section class="bg-gray-300 min-h-screen bg-fixed bg-cover">
    <header class="mx-auto max-w-5xl pb-2">
      <mainHeader />
    </header>
    <main class="mx-auto max-w-5xl min-h-screen">
      <router-view></router-view>
    </main>
    <footer class="mx-auto max-w-5xl pt-2">
      <mainFooter />
    </footer>
  </section>
</template>

<script>
import './main.css';
</script>
