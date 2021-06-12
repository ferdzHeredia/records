<template>
    <div>
        <mdb-container>
            <mdb-row>
            <mdb-col size="12" class="text-center ">
                <mdb-modal :show="isinfoModal"  :v-model="UserInfo()" @close="isinfoModal = !isinfoModal" cascade class="text-left">
                <mdb-modal-header class="primary-color white-text">
                    <h4 class="title fas fa-info-circle" > &nbsp; User Information</h4>
                </mdb-modal-header>
                <mdb-modal-body class="grey-text">
                    <mdb-input size="sm" label="Your name" v-model="name" icon="user"  group type="text" validate error="wrong" success="right" disabled  />
                    <mdb-input size="sm" label="Your email" v-model="email" icon="envelope" group type="email" validate error="wrong" success="right" disabled/>
                    <mdb-input size="sm" label="Your Phone Number" v-model="contact" icon="phone-square-alt" group type="tel" validate error="wrong" success="right" disabled/>
                </mdb-modal-body>
                <mdb-modal-footer class="text-center">
                    <mdb-btn class="btn btn-outline-purple" @click.native="isinfoModal = !isinfoModal">Close</mdb-btn>
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
        isinfoModal: Boolean,
        },
        data() {
        return {
            name: '',
            email: '',
            contact: '',
        }
        },
        methods:{
            UserInfo: function(){
                this.name = this.$Name,
                 this.email = this.$EmailInfo,
                  this.contact = this.$Contact

            },

    
        }
        
    }
    
</script>