<template>
    <div class="banner">
        <div class="content">
            <h1>Quer investir seu dinheiro?<br>
                
                Abra sua conta.<br>É grátis.
            </h1>
            <p>Clique qui para ter saber por onde começar</p>
            <RouterLink to="/cadastro"><BotaoPreto text="Começar" id="banner_b"/></RouterLink>
        </div>
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
        width: 100%;
        height: 37vw;
        font-size: clamp(0.1em, 2vw, 10em);
        background-color: rgb(255, 26, 95);
        color:rgb(255, 255, 255);

    }

    .content{
        animation-name:init;
        animation-fill-mode: forwards;
        animation-duration: 1s;
        width: 80%;
        position: absolute;
        height: 15em;
        margin: 4.5vw;
        z-index: 0;

    }

    

    #banner_b{
        font-size: 95%;
        display: inline-block;

        width:15%;
        height: 2em;   
    }
    #banner_b :hover{
        background-color: dimgray;
    }
    
    #linha{
        width: 60%;
        height: 10%;
    }
    
    
    
</style>

