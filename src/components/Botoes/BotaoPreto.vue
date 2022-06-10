<template>
    <button type="button" >{{text}}</button>
</template>

<script>
    export default{
        name:'BotaoPreto',
        props:{
            text:{
                type:String,
            }
        }
    }
</script>

<style scoped>

    
    button{
        font-weight: 700;
        font-size: 1vw;
        background-color: rgb(41, 40, 40);
        color:azure;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        border-radius: 25px;
        border:none;
        padding: 0.5%;
        margin-top: 0.5%;
        margin-right: 3%;
        height: 6vw;
        width: 19vw
    }

    button:hover{
        background-color: rgb(56, 54, 54);
    }

    



    
</style>