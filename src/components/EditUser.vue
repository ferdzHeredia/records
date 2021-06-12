<template>
    <div>
        <mdb-container>
            <mdb-row>
            <mdb-col size="12" class="text-center ">
                
                <mdb-modal :show="issshowEditModal" @close="issshowEditModal = !issshowEditModal" cascade class="text-left">
                <mdb-modal-header class="primary-color white-text">
                    <h4 class="title fas fa-pencil-alt" > Update form</h4>
                </mdb-modal-header>
                <mdb-modal-body class="grey-text">
                    <mdb-input size="sm" label="Your name" v-model="fullName" icon="user" group type="text" validate error="wrong" success="right"/>
                    <mdb-input size="sm" label="Your email" v-model="EmailAdd" icon="envelope" group type="email" validate error="wrong" success="right"/>
                    <mdb-input size="sm" label="Your Phone Number" v-model="phoneNum" icon="phone-square-alt" group type="tel" validate error="wrong" success="right"/>
                </mdb-modal-body>
                <mdb-modal-footer>
                    <mdb-btn class="btn btn-outline-purple" @click.native="issshowEditModal = !issshowEditModal">Close</mdb-btn>
                    <mdb-btn outline="btn btn-outline-purple" @click="updateUserData(phoneNum, EmailAdd, fullName)">Update User</mdb-btn>
                </mdb-modal-footer>
                </mdb-modal>
            </mdb-col>
            </mdb-row>
        </mdb-container>
    </div>    
</template>
<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
      Vue.use(VueAxios, axios)

    import { mdbContainer, mdbRow, mdbCol, mdbInput,  mdbBtn,  mdbModal, mdbModalHeader, mdbModalBody, mdbModalFooter } from 'mdbvue';
    export default {

        name: 'EditUser',
        components: {
        mdbContainer,
        mdbRow,
        mdbCol,
        mdbInput,
        mdbBtn,      
        mdbModal,
        mdbModalHeader,
        mdbModalBody,
        mdbModalFooter
        },
        props:{
        issshowEditModal: Boolean,
        phoneNum: String,
        EmailAdd: String,
        fullName: String,
        UserInfoData: Array,

    },

        data() {
        return {
            showEditModalss: false
        }
        },
        methods:{
            async updateUserData(phoneNum, EmailAdd, fullName){
                
                //url used for the put function 
            const url = "http://localhost:3333/user_data/"


            //Try to update the info
            try{
                await axios.put(`${url}${this.$editUser[3]}`, { Name: fullName, Email:EmailAdd, Phone: phoneNum }); //pushes the data using the put method with the api 
            }
            catch(e)//Catches any error and outputs it to the console for debuguging 
            {
                console.log(e);
            }
                 window.location.reload();//reload the page
               

        
            },

    
        }
        
    }
    
</script>