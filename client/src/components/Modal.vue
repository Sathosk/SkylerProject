<template>
    <transition name="fade">
        <div class="modal-overlay" @click="$emit('close-modal')" @close-modal="$emit('close-modal')">
          <div class="modal" @click.stop>
            <addForm-component :apiUrl="apiUrl" @form-submitted="passNewPost"/>
          </div>
        </div>
    </transition>
</template>
  
  <script>
    import AddForm from "./AddForm.vue"

    export default {
      name: "Modal",
      components: {
        'addForm-component': AddForm,
      },
      props: [
        'apiUrl'
      ],
      methods: {
        passNewPost(newPost) {
          this.$emit('form-submitted', newPost)
        }
      }
    }
  </script>

<style lang="scss" scoped>

  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000da;
  }

  .modal {
      padding: 30px;
      text-align: center;
      background-color: white;
      width: 500px;
      border-radius: 20px;
  }
  .close {
      margin: 10%;
      cursor: pointer;
  }

  h6 {
      font-weight: 500;
      font-size: 28px;
      margin: 20px 0;
  }

  p {
      font-size: 16px;
      margin: 20px 0;
  }

  button {
      background-color: #ac003e;
      width: 150px;
      height: 40px;
      color: white;
      font-size: 14px;
      border-radius: 16px;
      margin-top: 50px;
  }

  .fade-enter-active, .fade-leave-active {
      transition: opacity .7s;
  }
  .fade-enter-from, .fade-leave-to {
      opacity: 0;
  }
</style>