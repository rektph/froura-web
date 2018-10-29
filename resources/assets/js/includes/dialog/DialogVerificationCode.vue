<template>
    <v-layout>
        <v-dialog
            :value="show"
            persistent
            max-width="400">
            <v-card>
                <v-toolbar dark card color="primary">
                    <v-toolbar-title>Enter Code</v-toolbar-title>
                </v-toolbar>
                <v-progress-linear :indeterminate="true" height="3" class="ma-0" color="secondary lighten-1" :active="false"></v-progress-linear>
                <v-card-text class="pb-0 mb-0">
                    <div class="full-width">
                        <v-form v-model="valid" lazy-validation>
                            <v-text-field
                                class="pt-1"
                                :disabled="loading"
                                :rules="codeError"
                                label="Verification Code"
                                required />
                        </v-form>
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-layout row wrap align-center>
                        <v-flex xs12>
                            <v-btn color="primary" class="full-width" tabindex="1" :loading="loading" @click="verify()">Enter Verification Code</v-btn>
                        </v-flex>
                    </v-layout>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import Login from '../../components/Login';
export default {
    name: 'DialogVerificationCode',
    data: () =>( {
        valid: false,
    }),
    methods: {
        updateDialog() {
            this.$store.dispatch('dialog/showdialog', {"key":"verifCode"})
        },
        verify() {
            const self = this
            console.log(self.code)
            confirmationResult.confirm(self.code).then((res) => {
                console.log(res.user)
            }).catch((e) => {
                console.log(e)
            })
        }
    },
    computed: mapGetters({
        show: 'dialog/showVerifCode',
        loading: 'extras/loading',
        code: 'dialog/verifCode',
        codeError: 'dialog/verifCodeError'
    })
}
</script>

<style scoped>
.full-width {
    width: 100%;
}
</style>
