<template ref="loginComponent">
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs4></v-flex>
            <v-flex xs4>
                <v-card>
                    <!-- <v-progress-linear :indeterminate="true" class="ma-0" :active="loading"></v-progress-linear> -->
                    <v-flex class="px-4 pb-4 pt2">    
                        <v-card-title primary-title class="pb-0 mb-0">
                        <div class="full-width">
                            <h3 class="headline mb-0">Login to <strong>FROURA</strong></h3>
                            <v-divider></v-divider>
                            <v-form v-model="valid" ref="login">
                                <v-text-field
                                    class="pt-4 pb-2"
                                    v-model="contact"
                                    :disabled="loading"    
                                    :rules="contactError"
                                    ref="contact"
                                    label="Contact Number"
                                    required />
                            </v-form>
                        </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-layout row wrap align-center>
                                <v-flex xs12>
                                    <v-btn color="primary" id="recaptcha" class="full-width" tabindex="1" :loading="loading" :disabled="!valid" @click="loginContact()">Login with Contact Number</v-btn>
                                </v-flex>
                                <!-- <v-flex xs12>
                                    <v-btn color="primary" class="full-width" tabindex="1" :loading="loading" @click="loginFacebook()">Login with Facebook</v-btn>
                                </v-flex>
                                <v-flex xs12>
                                    <v-btn color="primary" class="full-width" tabindex="1" :loading="loading" @click="loginGoogle()">Login with Google</v-btn>
                                </v-flex> -->
                            </v-layout>
                        </v-card-actions>
                    </v-flex>
                </v-card>
            </v-flex>
            <v-flex xs4></v-flex>
        </v-layout>
        <dialog-verification-code></dialog-verification-code>
        <dialog-registration></dialog-registration>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VueRecaptcha from "vue-recaptcha";
import firebase from 'firebase/app';
import DialogVerificationCode from "../includes/dialog/DialogVerificationCode";
import DialogRegistration from "../includes/dialog/DialogRegistration";
export default {
    name: 'Login',
    components: {
        VueRecaptcha,
        DialogVerificationCode,
        DialogRegistration
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
            if(!this.$refs.login.validate()) {
                this.loading = false
                return
            }
        },
        verifyRecaptcha() {
            const self = this
            this.loading = false
            this.$auth.signInWithPhoneNumber(this.contact, window.recaptchaVerifier)
                .then(function (confirmationResult) {
                    window.confirmationResult = confirmationResult
                    self.$store.commit('dialog/showdialog', {"key":"verifCode"})
                }).catch(function (e) {
                    console.log(e)
                });
        },
        loginFacebook() {
            
        }
    },
    mounted() {
        const self = this
        if (this.$refs.contact) {
            this.$refs.contact.focus()
        }

        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                self.verifyRecaptcha();
            }
        });

        window.recaptchaVerifier.render().then((widgetId) => {
            window.recaptchaWidgetId = widgetId;
        });
    },
    computed: mapGetters({
        baseUrl: 'extras/baseUrl',
        verifCode: 'dialog/verifCode'
    })
}
</script>

<style scoped>
.full-width {
    width: 100%;
}
</style>
