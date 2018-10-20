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
                            <v-form v-model="valid">
                                <v-text-field
                                    class="pt-4"
                                    v-model="contact"
                                    :disabled="loading"
                                    :error-messages="contactError"
                                    label="Contact Number"
                                    required />
                            </v-form>
                        </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-layout row wrap align-center>
                                <v-flex xs12>
                                    <v-btn color="primary" class="full-width" tabindex="1" :loading="loading" @click="loginContact()">Login with Contact Number</v-btn>
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
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: 'Login',
    data: () => ({
        loading: false,
        valid: false,
        contact: '',
        contactError: []
    }),
    methods: {
        loginContact() {
            this.loading = true
            this.contactError = []
            
        }
    },
    mounted() {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': function(response) {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                onSignInSubmit();
            }
        })
    },
    computed: mapGetters({
        baseUrl: 'extras/baseUrl'
    }),
}
</script>

<style scoped>
.full-width {
    width: 100%;
}
</style>
