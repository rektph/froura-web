<template>
    <v-dialog
        :value="true"
        persistent
        max-width="500">
        <v-card>
            <v-toolbar dark card color="primary">
                <v-icon>person</v-icon>
                <v-toolbar-title>Passenger Registration</v-toolbar-title>
            </v-toolbar>
            <v-progress-linear :indeterminate="true" height="3" class="ma-0" color="secondary lighten-1" :active="loading"></v-progress-linear>
            <v-card-title class="pb-0 mb-0">
                <div class="full-width">
                    <v-form v-model="valid" ref="regForm" lazy-validation>
                        <v-layout row wrap>
                            <v-text-field
                                v-model="fname"
                                :disabled="loading"
                                :error-messages="fnameError"
                                label="First Name"
                                required />
                                &nbsp;&nbsp;
                            <v-text-field
                                v-model="lname"
                                :disabled="loading"
                                :error-messages="lnameError"
                                label="Last Name"
                                required />
                        </v-layout>
                        <v-text-field
                            v-model="email"
                            :disabled="loading"
                            :error-messages="emailError"
                            label="E-mail"
                            required />
                    </v-form>
                </div>
            </v-card-title>
            <v-card-actions>
                <v-layout row wrap align-center>
                    <v-flex xs12>
                        <v-btn color="primary" class="full-width" tabindex="1" :loading="loading" @click="validatePassenger()">Register Passenger</v-btn>
                    </v-flex>
                </v-layout>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: 'DialogRegistration',
    data: () => ({
        valid: false,
        loading: false,
        fname: '',
        fnameError: [],
        lname: '',
        lnameError: [],
        email: [],
        emailError: []
    }),
    methods: {
        validatePassenger() {
            this.loading = true
            const self = this
            axios.post(self.baseUrl + "api/passenger/validate", {
                fname: self.fname,
                lname: self.lname,
                email: self.email,
                mobile: self.mobile
            }).then((res) => {
                switch(res.data.status) {
                    case 1:
                        this.loading = false
                        this.$refs.regForm.reset()
                        this.$store.commit('snackbar/showSnack', {"text":"Success", "icon":"info", "color":"green"})
                        this.$router.push('/dashboard')
                    break
                    case 0:
                        this.loading = false
                        for(var key in res.data.errors) {
                            switch(key) {
                                case "email":
                                    this.emailError = res.data.errors.email[0]
                                break
                                case "fname":
                                    this.fnameError = res.data.errors.fname[0]
                                break
                                case "lname":
                                    this.lnameError = res.data.errors.lname[0]
                                break
                            }
                        }
                        this.$store.commit('snackbar/showSnack', {"text":"Input Errors", "icon":"warning", "color":"red"})
                    break
                }
            }).catch((e) => {
                console.log(e)
            })
        }
    },
    computed: mapGetters({
        baseUrl: 'extras/baseUrl',
        mobile: 'extras/mobile'
    })
}
</script>


<style scoped>
.full-width {
    width: 100%;
}
</style>
