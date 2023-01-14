<template>
  <header-component/>
  <posts-component :posts="posts" :apiUrl="API_URL" @newPost="newPost"/>

</template>

<script>
  import HeaderComponent from './components/Header.vue'
  import PostsComponent from './components/Posts.vue'

  export default {
    name: 'app',
    components: {
      'header-component': HeaderComponent,
      'posts-component': PostsComponent
    },

    data() {
      return {
        API_URL: "http://localhost:3000/api/",
        posts: []
      }
    },

    methods: {
      getPosts: async function () {
        const response = await fetch(this.API_URL + "post/all")
        const posts = await response.json();
        
        this.posts = posts.result;
      },

      newPost: function (newPost) {
        this.posts.push(newPost)
      }
    },

    beforeMount() {
      this.getPosts();

    },
  }
</script>

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
