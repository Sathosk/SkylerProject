<template>
    <section class="main-content">
        <section class="post-container" v-for="post in posts" :key="post._id">
            <header class="post-header">
                <div class="profile-pic">
                    <img src="../assets/14572760_1114764891941494_7246158643300506908_n.jpg" alt="">
                </div>
                <div class="name-email">
                    <h4>{{ post.name }}</h4>
                    <b>{{ post.email }}</b>
                </div>
                <div class="edit-delete-button">
                    <button class="update-delete-button">
                        <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                    </button>
                    <button class="update-delete-button">
                        <font-awesome-icon icon="fa-solid fa-trash" />
                    </button>
                </div>
            </header>
            <div class="divider"></div>
            <section class="post-content">
                <p>{{ post.content }}</p>
            </section>
            <footer class="post-footer">
                <button>
                    <font-awesome-icon icon="fa-solid fa-thumbs-up" />
                </button>
                <span>{{ post.like }}</span>
            </footer>
        </section>

        <button class="add-button" data-hover="Create a new post" @click="showModal = true">
            <font-awesome-icon icon="fa-solid fa-plus" />
        </button>


        <transition name="fade">
            <modalForm-component v-if="showModal" @form-submitted="handleFormSubmission" @close-modal="showModal = false" :apiUrl="apiUrl"/>
        </transition>
    </section>
</template>

<script>
    import ModalForm from './Modal.vue'

    export default {
        name: 'PostsComponent',
        props: [
            'posts',
            'apiUrl'
        ],
        components: {
            'modalForm-component': ModalForm,
        },

        data () {
            return {
                showModal: false,
            }
        },

        methods: {
            handleFormSubmission(newPost) {
                this.showModal = false;
                this.$emit('newPost', newPost);
            }
        },

        mounted() {

        }
    }
</script>

<style lang="scss" scoped>
    .main-content {
        width: 100%;

        .post-container {
        margin: 20px auto;
        padding: 20px;
        width: 40%;
        min-width: 500px;
        background-color: white;
        border-radius: 12px;
        box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);

        .post-header {
            
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            height: 50px;
            background: white;

            .profile-pic {
                display: flex;
                align-items: center;

                img {
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                }
            }

            .name-email {
                flex: 2;
                h4 {
                    line-height: 1;
                    font-size: 20px;
                    font-weight: bold;
                }

                b {
                    font-size: 13px;
                    font-weight: 600;
                    color: rgb(101, 103, 107);
                }
            }

            .edit-delete-button {

                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 10px;

                .update-delete-button {
                    padding: 0;
                    border: none;
                    background-color: inherit;
                    cursor: pointer;
                }
                
                svg {
                    width: 20px;
                    height: 20px;
                }
            }
        }

        .divider {
            width: 100%;
            margin: 20px auto;
            height: 1px;
            background-color: rgba(167, 164, 164, 0.4);
        }
        .post-content {
        }

        .post-footer {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 10px;

            button {
                border: none;
                background-color: #f1f1f1;
                box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                transition: all 0.3s cubic-bezier(.25,.8,.25,1);
            }

            button:hover {
                background-color: #e6e6e6;
                box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
            }

            button:active {
                background-color: #e6e6e6;
                box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
            }
        }
        }

        .add-button {
            position: fixed;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;

            height: 50px;
            width: 50px;
            border-radius: 50%;
            bottom: 50px;
            right: 40px;

            border: none;
            background-color: #f1f1f1;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            transition: all 0.3s cubic-bezier(.25,.8,.25,1);
            background-color: white;
            box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.4);
        }

        .add-button:before {
            position: fixed;
            bottom: 62.5px;
            right: 100px;
            content: attr(data-hover);
            font-size: 15px;
            visibility: hidden;
            opacity: 0;
            width: auto;
            background-color: black;
            color: white;
            text-align: center;
            border-radius: 5px;
            padding: 5px;
            transition: opacity 1s ease-in-out;
        }

        .add-button:hover:before {
            opacity: 1;
            visibility: visible;
        }

        .add-button:hover {
            background-color: #e6e6e6;
            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        }

        .add-button:active {
            background-color: #e6e6e6;
            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        }


    }
</style>