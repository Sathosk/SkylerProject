<template>
    <section class="main-content">
        <section class="post-container">
            <header class="post-header">
                <div class="profile-pic">
                    <img src="../assets/14572760_1114764891941494_7246158643300506908_n.jpg" alt="">
                </div>
                <div class="name-email">
                    <h4>Tiago Cruz</h4>
                    <b>sathoskath@gmail.com</b>
                </div>
                <div class="edit-delete-button">
                    <a href="" class="button">
                        <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                    </a>
                    <a href="" class="button">
                        <font-awesome-icon icon="fa-solid fa-trash" />
                    </a>
                </div>
            </header>
            <div class="divider"></div>
            <section class="post-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui lacus, elementum eget finibus in, vestibulum at justo. Nulla facilisi. Fusce viverra magna ante, a facilisis erat pharetra in. Donec at pharetra quam. Donec condimentum vitae elit vel rhoncus. Sed at tincidunt quam, placerat faucibus tortor. Pellentesque suscipit laoreet arcu, eget vehicula justo tincidunt a. Donec in neque accumsan, finibus magna sed, aliquet nibh. Maecenas ut est erat. Sed vel mi vel dui fermentum aliquam.</p>
            </section>
            <footer class="post-footer">
                <button>
                    <font-awesome-icon icon="fa-solid fa-thumbs-up" />
                </button>
                <span>0</span>
            </footer>
        </section>
    </section>
</template>

<script>
    export default {
        name: 'PostsComponent'
    }
</script>

<style lang="scss" scoped>
    .main-content {
        width: 100%;
    }

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
                
                .button {
                    svg {
                        width: 20px;
                        height: 20px;
                    }
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
        }
    }
    
</style>