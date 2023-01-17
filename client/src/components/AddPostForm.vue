<template>
    <transition name="fade">
        <div class="modal-overlay" @click="$emit('close-modal')">
            <div class="modal" @click.stop>
                <button class="close-button" @click="$emit('close-modal')">
                    <font-awesome-icon icon="fa-solid fa-xmark"/>
                </button>

                <form class="form-style" @submit.prevent="onSubmit" enctype="multipart/form-data">
                    <ul>
                        <li class="input-file-container">
                            <label>Upload Profile Picture:</label>
                            <input type="file" ref="file" class="input-file">
                        </li>
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
                    const formData = new FormData();
                    formData.append('profile-pic', this.$refs.file.files[0]);
                    formData.append('name', this.formData.name);
                    formData.append('email', this.formData.email);
                    formData.append('content', this.formData.content);

                    console.log(formData)

                    const response = await fetch(`${this.apiUrl}post/createPost`, {
                        method: 'POST',
                        body: formData
                    });

                    const data = await response.json();

                    console.log(data.result)
                    
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
            text-align: center;
            background-color: white;
            width: 500px;
            border-radius: 20px;
            max-width: 450px;
            background: #FAFAFA;
            padding: 30px;
            margin: 50px auto;
            box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
            border-radius: 10px;
            border: 4px solid var(--color-text);
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

    textarea {
        resize: none;
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

    .form-style ul .input-file-container{
        text-align: left;
    }

    .form-style ul .input-file-container label {
        font-size: 17px;
        font-weight: 600;
    }

    .form-style ul li .input-file{
        display: block;
    }

    input[type=file]::file-selector-button {
        -moz-box-shadow: inset 0px 1px 0px 0px #3985B1;
        -webkit-box-shadow: inset 0px 1px 0px 0px #3985B1;
        box-shadow: inset 0px 1px 0px 0px #3985B1;
        background-color: #216288;
        border: 1px solid #17445E;
        display: inline-block;
        cursor: pointer;
        color: #FFFFFF;
        text-decoration: none;
        margin-top: 4px;
        margin-right: 10px;
        padding: 10px 20px;
        border-radius: 7px;
        color: #fff;
        cursor: pointer;
        transition: background .2s ease-in-out;
    }

    input[type=file]::file-selector-button:hover {
        background: linear-gradient(to bottom, #2D77A2 5%, #337DA8 100%);
        background-color: #28739E;
    }


    .form-style ul li  .field-style{
        box-sizing: border-box; 
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box; 
        padding: 8px;
        outline: none;
        border: 1px solid #B0CFE0;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
        -webkit-transition: all 0.30s ease-in-out;
        -moz-transition: all 0.30s ease-in-out;
        -ms-transition: all 0.30s ease-in-out;
        -o-transition: all 0.30s ease-in-out;
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
        border-radius: 7px;
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