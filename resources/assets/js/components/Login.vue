<template ref="loginComponent">
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs4></v-flex>
            <v-flex xs4>
                <v-card>
                    <v-progress-linear 
                        :indeterminate="true"
                        class="ma-0" 
                        :active="typeof loading == 'string'" />
                    <v-flex class="px-4 pb-4 pt2">    
                        <v-card-title primary-title class="pb-0 mb-0">
                        <div class="full-width">
                            <h3 class="headline mb-0">Login to <strong>FROURA</strong></h3>
                            <v-divider></v-divider>
                            <v-form v-model="valid" ref="login">
                                <v-text-field
                                    class="pt-4 pb-2"
                                    v-model="contact"
                                    :disabled="loading == 'contact'"    
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
                                    <v-btn 
                                        color="primary" 
                                        id="recaptcha" 
                                        class="full-width" 
                                        :loading="loading === 'contact'" 
                                        :disabled="!valid" 
                                        @click="loginContact()" >
                                        Login with Contact Number
                                    </v-btn>
                                </v-flex>
                                <v-flex xs12>
                                    <v-btn
                                        color="primary" 
                                        class="full-width" 
                                        :loading="loading === 'facebook'"
                                        @click="loginFacebook()">
                                        Login with Facebook
                                    </v-btn>
                                </v-flex>
                                <v-flex xs12>
                                    <v-btn
                                        color="primary"
                                        class="full-width"
                                        :loading="loading === 'google'"
                                        @click="loginGoogle()">
                                        Login with Google
                                    </v-btn>
                                </v-flex>
                            </v-layout>
                        </v-card-actions>
                    </v-flex>
                </v-card>
            </v-flex>
            <v-flex xs4></v-flex>
        </v-layout>
        <dialog-verification-code />
        <dialog-registration />
        <v-btn
            color="primary"
            dark
            fixed
            top
            right
            fab
            to="/" >
            <v-icon>home</v-icon>
        </v-btn>
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
        loading: null,
        valid: false,
        contact: '+639167983610',
        contactError: [
            v => !!v || 'Contact Number is required',
            v => /^(09|\+639)\d{9}$/.test(v) || 'Contact Number must be valid'
        ]
    }),
    methods: {
        loginContact() {
            this.loading = 'contact'

            if(!this.$refs.login.validate()) {
                return
            }
        },
        verifyRecaptcha() {
            const self = this
            self.loading = null
            self.contact = self.contact = /^(09)\d{9}$/.test(self.contact) ? "+63"+self.contact.substring(1, 11) : self.contact
            self.$store.commit('extras/setMobile', {mobile:self.contact})
            this.$auth.signInWithPhoneNumber(this.contact, window.recaptchaVerifier)
                .then(function (confirmationResult) {
                    window.confirmationResult = confirmationResult
                    self.$store.commit('dialog/showdialog', {"key":"verifCode"})
                }).catch(function (e) {
                    switch(e.code) {
                        case "auth/too-many-requests":
                            self.$store.commit('snackbar/showSnack', {"text":"Too many requests! Try again later.", "icon":"warning", "color":"red"})
                        break
                        case "auth/invalid-phone-number":
                            self.$store.commit('snackbar/showSnack', {"text":"Error!", "icon":"warning", "color":"red"})
                        break
                    }
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
            'callback': (res) => {
                self.verifyRecaptcha();
            },
            'expired-callback': (res) => {
                self.$store.commit('snackbar/showSnack', {"text":"reCAPTCHA Expired!.", "icon":"warning", "color":"red"})
            }
        });

        window.recaptchaVerifier.render().then((widgetId) => {
            window.recaptchaWidgetId = widgetId;
        });
    },
    computed: mapGetters({
        baseUrl: 'extras/baseUrl'
    })
}
</script>

<style scoped>
.full-width {
    width: 100%;
}
</style>
