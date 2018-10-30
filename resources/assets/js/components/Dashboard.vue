<template>
    <h1>Patay tayo dyan</h1>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    components: mapGetters({
        uid: 'auth/uid'
    })
    
}
</script>

<style>

</style>
