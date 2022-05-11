<template>
    <div class="investimento">
        <h1>Investir é sobre você<br> <p>começe a investir em poucos minutos. descomplique</p></h1>
        
        <BotaoPreto id="b"/>
    </div>
</template>

<script>
    import BotaoPreto from '../Botoes/BotaoPreto.vue'
    export default {
        
        components:{
            BotaoPreto,
        }
    }
</script>

<style scoped>
    div{
        background-color: rgb(164, 161, 161);
        display: flex;
        margin-bottom: 5%;
        width: 100%;
        
        
    }
    p{
        font-size: 50%;
        
    }

    h1{
        margin: 8% 0%;
        color: azure;
        font-size: 250%;
    }
    #b{
        font-size: 130%;
        display: inline-block;
        margin: 8% 0%;
        width: 10%;
        height: 20%;
        border-radius: 40px;
    }
    .investimento{
        display: flex;
        justify-content: space-around;
        height: 400px;
    }
</style>