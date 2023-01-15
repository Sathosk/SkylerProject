<template>
  <header-component/>
  <posts-component :count="postCount" :posts="posts" :apiUrl="API_URL" @newPost="newPost" @removePost="removePost" @updatedPost="updatedPost" @showMore="this.showMore"/>

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
        posts: [],
        postCount: 6,
      }
    },

    methods: {
        getPosts: async function () {
            const response = await fetch(this.API_URL + "post/all")
            const posts = await response.json();
            
            this.posts = posts.result;
            this.sortPost(this.posts);
        },

        showMore: function () {
            this.postCount +=2
        },

        newPost: function (newPost) {
            this.posts.push(newPost)
            this.sortPost(this.posts);
        },

        updatedPost: function(post) {
            const index = this.posts.findIndex(obj => obj._id === post._id);
            this.posts[index] = post;
        },

        sortPost(posts) {
            posts.sort((a,b) => {
                if (a.timeStamp < b.timeStamp) return 1;
                if (a.timeStamp > b.timeStamp) return -1;
                return 0;
            })
      },

        async removePost(index) {
            try {
                const response = await fetch(`${this.API_URL}post/remove`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({_id: this.posts[index]._id})
                });

                const data = await response.json();
                this.posts.splice(index, 1); 
            } catch (error) {
                console.error(error);
            }
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
