<template>
    <div class="investimento">
        <h1>Investir é sobre você<br> <p>começe a investir em poucos minutos. descomplique</p></h1>
        
        <RouterLink to="/cadastro"><BotaoPreto text="Começar" id="b"/></RouterLink>
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
    
    p{
        font-size: 1.5vw;
        
    }

    h1{
        margin: 7% 0%;
        color: azure;
        font-size: 3vw;
    }
    #b{
        margin: 148% 0%;
        width: 200%;
        height: 20%;
        border-radius: 0.3vw;
    }
    .investimento{
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 20vw;
        display: flex;
        background-color: rgb(224, 43, 87);
        margin-bottom: 0%;

        
        
    }
    
</style>