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
        font-size: clamp(0.1vw, 1vw, 5vw);
        background-color: rgb(255, 26, 95);
        color:azure;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        border-radius: 12px;
        border-color: rgb(255, 26, 95); 
        width: 19vw;
        height: 4vw;
    }
</style>