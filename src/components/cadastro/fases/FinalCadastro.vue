<template>
    <div  class="box">      
      <div class="final">
        <NiceIcon id="nice"/>
        <h1 id="mainText">
          Cadastro<br>
          finalizado
        </h1>
        <router-link to="/"><BotaoPreto text="Concluido" id="final_botao"/></router-link>
      </div>
    </div>
</template>
<script>
import NiceIcon from '../../icons/NiceIcon.vue'
import BotaoPreto from '../../Botoes/BotaoPreto.vue'


export default {
    components:{
        NiceIcon,
        BotaoPreto
    }
}
</script>

<style>
    .final{
    text-align: center;
    font-size: 20%;
    top: 10vw;
    left:1vw;
    justify-content: center;
    width: 28vw;
    position: absolute;
    word-break: break-all;
  }

  #nice{
    width: 2vw;
    height:2vw;
    padding: 1vw;
    border-radius: 3vw;
    background-color: aquamarine;
    box-shadow: 10vw aquamarine;
  }

  #final_botao{
    font-size: 1vw;
    border-radius: 0.5vw;
    margin-top: 3vw;
    width: 7vw;
    height: 3vw;
  }
</style>