<template>
    <router-view />
</template>
<script>
  export default {
    components: {
    },
    data: () => ({
    }),
  }
</script>
<style>
  html{
    min-width: 1000px !important;
    display: flex !important;
    flex-direction: column !important;
    overflow: auto !important;
  }
  html.mobile{
    min-width: 100% !important;
  }
</style>
