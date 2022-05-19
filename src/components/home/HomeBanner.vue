<template>
    <div class="banner">
        
        <h1>Quer investir seu dinheiro?<br>
            
            Abra sua conta.<br>É grátis.
        </h1>
        <p>Clique qui para ter saber por onde começar</p>
        <RouterLink to="/cadastro"><BotaoPreto id="banner_b"/></RouterLink>
        
    </div>
</template>

<script>
    import BotaoPreto from '../Botoes/BotaoPreto.vue'
    export default {
        name:'HomeBanner',
      components:{
        BotaoPreto,
        
      }
    }
</script>

<style scoped>
    
    .banner{
        float: left;
        min-width: 50%;
        max-width: 100%;
        min-height: 500px;
        max-height: 750px;
        font-size: 300%;
        color:azure;
        margin-left: 5%;
    }

    #banner_b{
        font-size: 95%;
        display: inline-block;
        border-radius: 41px;
        width:20%;
        height: 2em;   
    }
    
    #linha{
        width: 60%;
        height: 10%;
    }
    
    
    
</style>

