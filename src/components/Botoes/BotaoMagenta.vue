<template>
    <button type="button">{{msg}}</button>
</template>

<script>
export default {
    name:'BotaoM',
    props:{
        msg:String,
    }
}
</script>

<style scoped>

    button{
        font-weight: 700;
        font-size: 55%;
        background-color: rgb(255, 26, 95);
        color:azure;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        border-radius: 35px;
        border-color: rgb(255, 26, 95); ;
        padding: 16% 36%;
    }
</style>