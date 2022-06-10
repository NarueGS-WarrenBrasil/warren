<template>
  <div class="corpo">
    <div id="navbar">
        <!-- <VoltarIcon v-on:click.native="back" id="icon"/> -->
        <Back_cadastro @Back="goBack"/>
        <p id="title">FORMULÁRIO</p>
    </div>
    <LinhaProgrecao  :two="two" :three="three" class="progrecao" :progrecao="fase"/>
    <Fase1Cadastro :animate="animation" id="main_template" @Proxima="first"  v-show="showFase1"/>
    <Fase2Cadastro :animate="animation" id="template" @Proxima="second" v-show="showFase2"/>
    <CheckModal @confirm_modal="finish" @cancel_modal="bye_modal" :dados_pessoais="db_pessoal" :dados_contato="db_contato" :status="showModal" />
    <FinalCadastro id="template" v-show="showFase3"/>
    <img  class="moça" alt="moça grande" src="@/assets/moçaGrande.png"  >
    
  </div>
</template>

<script setup>
import Fase1Cadastro from '../components/cadastro/fases/Fase1Cadastro.vue'
import Fase2Cadastro from '../components/cadastro/fases/Fase2Cadastro.vue'
import FinalCadastro from '../components/cadastro/fases/FinalCadastro.vue'
import LinhaProgrecao from '../components/icons/LinhaProgrecao.vue'
import CheckModal from '../components/cadastro/CheckModal.vue'
import Back_cadastro from '../components/icons/Back_cadastro.vue'

export default{
    components:{
        Fase1Cadastro,
        Fase2Cadastro,
        FinalCadastro,
        LinhaProgrecao,
        CheckModal,
        Back_cadastro
    },
    data() {
      return {
        showFase1:false,
        showFase2: true,
        showFase3: false,
        fase:"",
        two:"off",
        three:"off",
        db_contato:{},
        db_pessoal:{},
        showModal:false,
        animation:"come"

      }
    },
    methods: {
      goBack(){
        if(this.showFase2 && !this.showFase1 && !this.showFase3){
          this.showFase2 = false
          this.showFase1 = true
        }
      },

      bye_modal(){
        this.showModal = false
      },

      first(value){
            if(this.showFase1 && !this.showFase2 && !this.showFase3){
              this.db_contato = value
              this.fase = "first"
              this.animation = "leave"
              setTimeout(() => {
                this.animation = "come"
                this.showFase1 = false
                this.showFase2 = true
                this.two = "on";
              }, "1000")
              

            }
        },
      
      second(value){
        this.db_pessoal = value
        this.showModal = true
      },

      finish(){
        this.showModal = false
        this.showFase2 = false
        this.showFase3 = true
        this.fase = "final"
        setTimeout(() => {
                this.three = "on";
              }, "1000")
        
      }

      

    },

}
</script>

<style>

    @media (min-width: 360px){
  
  }

  

  body{
    margin: 0%;
  }

  .moça{
    float: right;
    position:relative;
    width: 33vw;
    height:70vw;
  }

  #navbar {
    background-color: rgb(255, 26, 95);
    display: flex;
    padding-bottom: 0px;
    height:2vw;
    width: 100%;

    margin-bottom: 0%; 
    text-align: center;  
    color: azure; 
  }

    #title{

      margin-left: 48vw;
      font-size: clamp(0.3em, 0.7vw, 1em);
      font-weight: 700;
    }
    #voltar{
      float: left;
      position:absolute;
      margin: 0.5%
    }
    .progrecao{
      position: absolute;
      left:20vw;
      top: 3vw;

    }

    .box{
    box-sizing: border-box;
    width: 30vw;
    height: 50vw;
    text-align: left;
    position: absolute;
    padding: 1%;
    margin-left:20vw;
  }

  #proximo{
    margin-top: 10%;
    font-size: 1vw;
    position: absolute;
    width: 7vw;
    height: 3vw;
    padding: 1%;
    
  }


  .erroMsg{
    position: absolute;
    display: none;
    font-size:clamp(0.3em, 0.9vw, 1em);
    color:red;
  }

  #bigInput{
    width: 28vw;
    height: 3.5em;
    font-size: 1vw;
    margin-top: 1.2vw;
    padding: 12px 20px;
    display: inline-block;
    border-radius: 0.5vw;
    border: solid 1px;
    box-sizing: border-box;
  }

  .subBox1{
    position: absolute;
    width: 98%;
    text-align: left;
  }
  .subBox2{
    position: absolute;
    margin-left: 50%;
    width: 98%;
  }

  .inBox{
    border: solid 1px;
    margin-top: 1.5vw;
    font-size:0.7vw;
    width: 13vw;
    height: 4.5em;
    border-radius: 0.3vw;
    box-sizing: border-box;
  }

  .come{
    animation-name:come;
    animation-fill-mode: forwards;
    animation-duration: 1s;
  }

  @keyframes come{
        0%   {opacity:0%; left:500px;}
        100%{opacity:100%; left:0px;}
      }
  
  .leave{
    animation-name: run;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
  }

  @keyframes run {
  0%   {opacity:100%; left:0px;}
  100%	{opacity:0%; left:-500px;}
  
  }  
  .in{
    margin: 0.2vw 0.2vw;
    border-radius: 0.3vw;
    font-size: 0.9vw;
    border: solid 1px;
    width: 95%;
    height: 65%;
    border:none;
  }

  #mainText{
    font-size: clamp(1em, 3vw, 15em);
    margin-bottom: 1%;
  }

  #text{
    font-size: clamp(0.1vw, 0.9vw, 10em);

  }
  
  .normalLabel{
    z-index: 1;
    margin-left: 0.2vw;
    position: absolute;
    background: white;
    position: relative;
    margin-top: -0.5vw;
    float: left;
    font-size: 0.7vw;
    font-weight: 700;
  }

  .especialLabel{
    z-index: 1;
    margin-left: 1%;
    position: absolute;
    background: white;
    position: absolute;
    margin-top: 3%;
    float: left;
    font-size: 0.7vw;
    font-weight: 700;
  }
</style>
