<template>
    <transition name="fade">
        <div class="modal-overlay" @click="$emit('close-modal')">
            <div class="modal" @click.stop>
                <button class="close-button" @click="$emit('close-modal')">
                    <font-awesome-icon icon="fa-solid fa-xmark"/>
                </button>

                <form class="form-style" @submit.prevent="onSubmit">
                    <ul>
                        <li>
                            <input type="text" v-model="formData.name" class="field-style field-split align-left" placeholder="Name" />
                            <input type="text" v-model="formData.email" class="field-style field-split align-right" placeholder="Email" />

                        </li>

                        <li>
                            <textarea v-model="formData.content" class="field-style" placeholder="Message" maxlength="1000"></textarea>
                        </li>

                        <li style="margin-bottom: 0">
                            <input type="submit" value="Send Message" :disabled="submitted"/>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    </transition>
</template>
  
  <script>
    export default {
        name: "AddPostForm",

        props: [
        'apiUrl'
        ],

        data() {
            return {
                formData: {
                    name: '',
                    email: '',
                    content: ''
                },
                submitted: false
            }
        },

        methods: {
            async onSubmit () {
                this.submitted = true;
                try {
                    const response = await fetch(`${this.apiUrl}post/createPost`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(this.formData)
                    });

                    const data = await response.json();

                    if (data.message === 'Validation Error') throw new Error('Validation Error');

                    if (response.ok) {
                        this.$emit('form-submitted', data.result);
                    }

                    this.submitted = false;
                } catch (error) {
                    this.$emit('form-submission-error', error);
                    console.error(error);
                    this.submitted = false;
                }
            }
        }
    }
  </script>

<style lang="scss" scoped>
    /* Modal Style */
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
            position: relative;
            padding: 35px;
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
            position: absolute;
            top: 15px;
            right: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 10px;
            height: 10px;
            border: none;
            font-size: 14px;
            cursor: pointer;
    }

    .fade-enter-active, .fade-leave-active {
            transition: opacity .7s;
    }
    .fade-enter-from, .fade-leave-to {
            opacity: 0;
    }

    /* Form Style */
    
    .form-style ul{
        padding:0;
        margin:0;
        list-style:none;
    }

    .form-style ul li{
        display: block;
        margin-bottom: 10px;
        min-height: 35px;
    }

    .form-style ul li  .field-style{
        box-sizing: border-box; 
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box; 
        padding: 8px;
        outline: none;
    }

    .form-style ul li .field-split{
        width: 49%;
    }

    .form-style ul li .field-full{
        width: 100%;
    }

    .form-style ul li input.align-left{
        float:left;
    }

    .form-style ul li input.align-right{
        float:right;
    }

    .form-style ul li textarea{
        width: 100%;
        height: 100px;
    }

    .form-style ul li input[type="button"], 
    .form-style ul li input[type="submit"] {
        -moz-box-shadow: inset 0px 1px 0px 0px #3985B1;
        -webkit-box-shadow: inset 0px 1px 0px 0px #3985B1;
        box-shadow: inset 0px 1px 0px 0px #3985B1;
        background-color: #216288;
        border: 1px solid #17445E;
        display: inline-block;
        cursor: pointer;
        color: #FFFFFF;
        padding: 8px 18px;
        text-decoration: none;
        font: 12px Arial, Helvetica, sans-serif;
    }

    .form-style ul li input[type="button"]:hover, 
    .form-style ul li input[type="submit"]:hover {
        background: linear-gradient(to bottom, #2D77A2 5%, #337DA8 100%);
        background-color: #28739E;
    }
</style>