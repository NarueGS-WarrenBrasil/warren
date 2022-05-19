<template>
    <div ref="div" id="div" >
        
        <div v-show="name == 'A'">
            {{status}}<br>
            {{name}}
        </div>
        <div v-show="name == 'B'">
            <h1>AAAAaaa</h1>
        </div>
    </div>

</template>
<!-- <svg width="84px" height="84px" viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48">
    <circle fill="#4CAF50" cx="26" cy="24" r="21"/>
    <polygon fill="#CCFF90" points="34.6,14.6 21,28.2 15.4,22.6 12.6,25.4 21,33.8 37.4,17.4"/>
    </svg> -->

<script>
export default {

    data() {
        return {
            
        }
    },
    methods: {
        
    },
    props:{
        status: String,
        name: String
    }
}
</script>


<style scoped>

</style>