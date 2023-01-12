<script>
  import HeaderComponent from './components/Header.vue'
  import PostsComponent from './components/Posts.vue'

  export default {
    name: 'app',
    components: {
      'header-component': HeaderComponent,
      'posts-component': PostsComponent
    }
  }
</script>

<template>
    <header-component/>
    <posts-component/>
</template>

<style lang="scss">
  body {
    background-color: #F0F2F5;
    font-family: "Rockwell", serif;
  }

  h3 {
    color: #171717;
    font-size: 28px;
    font-weight: 700;
  }
</style>
