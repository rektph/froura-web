<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs4></v-flex>
            <v-flex xs4>
                <v-card>
                    <v-progress-linear :indeterminate="true" class="ma-0" :active="loading"></v-progress-linear>
                    <v-flex class="px-4 pb-4 pt2">    
                        <v-card-title primary-title class="pb-0 mb-0">
                        <div class="full-width">
                            <h3 class="headline mb-0">Login to <strong>FROURA</strong></h3>
                            <v-divider></v-divider>
                            <v-form v-model="valid" ref="contact" lazy-validation>
                                <v-text-field
                                    class="pt-4 pb-2"
                                    v-model="contact"
                                    :disabled="loading"
                                    :rules="contactError"
                                    label="Contact Number"
                                    required />
                                <div id="recaptcha"></div>
                            </v-form>
                        </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-layout row wrap align-center>
                                <v-flex xs12>
                                    <v-btn color="primary" class="full-width" tabindex="1" :loading="loading" :disabled="!valid" @click="loginContact()">Login with Contact Number</v-btn>
                                </v-flex>
                                <v-flex xs12>
                                    <v-btn color="primary" class="full-width" tabindex="1" :loading="loading" @click="loginFacebook()">Login with Facebook</v-btn>
                                </v-flex>
                                <v-flex xs12>
                                    <v-btn color="primary" class="full-width" tabindex="1" :loading="loading" @click="loginGoogle()">Login with Google</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-card-actions>
                    </v-flex>
                </v-card>
            </v-flex>
            <v-flex xs4></v-flex>
        </v-layout>
        <dialog-verification-code></dialog-verification-code>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VueRecaptcha from "vue-recaptcha";
import DialogVerificationCode from "../includes/dialog/DialogVerificationCode";
export default {
    name: 'Login',
    components: {
        VueRecaptcha,
        DialogVerificationCode
    },
    data: () => ({
        loading: false,
        valid: false,
        contact: '',
        contactError: [
            v => !!v || 'Contact Number is required',
            v => /^(09|\+639)\d{9}$/.test(v) || 'Contact Number must be valid'
        ],
        sitekey: '6Ld3KXYUAAAAAJV5-8Vpx-9WE6YyhHw0LOw1pgEO',
        captchaVerified: false
    }),
    methods: {
        loginContact() {
            this.loading = true
            if(!this.$refs.contact.validate()) {
                this.loading = false
                return
            }
        },
        onVerify() {
            
        },
        loginFacebook() {
            // this.$db.collection("users").doc("iExNaP84p5EhvJ78kHx7").get()
            // .then((doc)=>{
            //     if(doc.exists) {
            //         console.log(doc.data())
            //     } else {
            //         console.log("nope")
            //     }
            // }).catch((err) => {
            //     console.log(err)
            // })
        }
    },
    mounted() {
        this.$store.commit('recaptcha/setupVerif', {"elem":"recaptcha", "config" : {
            'size' : 'normal',
            'callback': function(res) {
                return new Promise((resolve, object) => {
                this.captchaVerified = true
                this.$auth.signInWithPhoneNumber(this.contact, this.appVerif)
                    .then(function(res) {
                        console.log("sent: "+res)
                    }).catch(function(e) {
                        console.log("err: "+e)
                    })
                })
            },
            'expired-callback': function(res) {
                this.captchaVerified = false
            }
        }})
    },
    computed: mapGetters({
        baseUrl: 'extras/baseUrl',
        appVerif: 'recaptcha/appVerif'
    })
}
</script>

<style scoped>
.full-width {
    width: 100%;
}
</style>
