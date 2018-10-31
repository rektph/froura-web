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
                <v-progress-linear :indeterminate="true" height="3" class="ma-0" color="secondary lighten-1" :active="loading"></v-progress-linear>
                <v-card-text class="pb-0 mb-0">
                    <div class="full-width">
                        <v-form v-model="valid" lazy-validation>
                            <v-text-field
                                class="pt-1"
                                :disabled="loading"
                                v-model="code"
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
        code: '',
        codeError: [],
        valid: false,
        loading: false
    }),
    methods: {
        verify() {
            const self = this
            self.loading = true
            confirmationResult.confirm(self.code).then((res) => {
                self.$store.commit('snackbar/showSnack', {"text":"Verification Success", "icon":"info", "color":"green"})
                self.$user.doc(res.user.uid).get().then((doc) => {
                    self.loading = false
                    if(doc.exists) {
                        // redirect
                    } else {
                        // close dialog verifcode but save userid
                        self.$store.commit('dialog/showdialog', {key:"verifCode"})
                        self.$store.commit('auth/setUid', {uid:res.user.uid})
                        self.$user.doc(res.user.uid).set({
                            utype:"1"
                        })
                        // open dialog registration
                        self.$store.commit('dialog/showdialog', {key:"regForm"})
                    }
                })
            }).catch((e) => {
                this.$store.commit('snackbar/showSnack', {"text":"Verification Code Error", "icon":"warning", "color":"red"})
                self.codeError = "The Code is "
            })
        },
        key(e) {
            console.log(e)
        }
    },
    computed: mapGetters({
        show: 'dialog/showVerifCode'
        
    })
}
</script>

<style scoped>
.full-width {
    width: 100%;
}
</style>
