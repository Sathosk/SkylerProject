<template>    
    <form class="form-style" @submit.prevent="onSubmit">
        <ul>
            <p>{{ apiUrl }}</p>
            <li>
                <input type="text" v-model="formData.name" class="field-style field-split align-left" placeholder="Name" />
                <input type="text" v-model="formData.email" class="field-style field-split align-right" placeholder="Email" />

            </li>

            <li>
                <textarea v-model="formData.content" class="field-style" placeholder="Message"></textarea>
            </li>

            <li>
                <input type="submit" value="Send Message" />
            </li>
        </ul>
    </form>
</template>

<script>
    export default {
        name: "AddForm",
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
            }
        },

        methods: {
            async onSubmit () {
                try {
                    const response = await fetch(`${this.apiUrl}post/createPost`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(this.formData)
                    });

                    const data = await response.json();

                    if (response.ok) {
                        //console.log(data)
                        this.$emit('form-submitted', data.result);
                    }
                    

                } catch (error) {
                    console.error(error)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
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