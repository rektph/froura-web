<template>
    <v-dialog
        :value="true"
        persistent
        max-width="500">
        <v-card>
            <v-toolbar dark card color="primary">
                <v-toolbar-title>Passenger Registration</v-toolbar-title>
            </v-toolbar>
            <v-progress-linear :indeterminate="true" height="3" class="ma-0" color="secondary lighten-1" :active="false"></v-progress-linear>
            <v-card-title class="pb-0 mb-0">
                <div class="full-width">
                    <v-form v-model="valid" lazy-validation>
                        <v-layout class="pt-2">
                            <v-flex>
                                <v-text-field
                                    v-model="fname"
                                    :disabled="loading"
                                    :error-messages="fnameError"
                                    label="First Name"
                                    required />
                            </v-flex>
                            
                            <v-flex>
                                <v-text-field
                                    v-model="lname"
                                    :disabled="loading"
                                    :error-messages="lnameError"
                                    label="Last Name"
                                    required />
                            </v-flex>
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
                        <v-btn color="primary" class="full-width" tabindex="1" :loading="loading" @click="verify()">Enter Verification Code</v-btn>
                    </v-flex>
                </v-layout>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
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

}
</script>


<style scoped>
.full-width {
    width: 100%;
}
</style>
