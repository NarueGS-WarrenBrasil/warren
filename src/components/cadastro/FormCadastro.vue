<template>

    <div class="box"  v-if="fase===1">
      <img alt="progresso" src="@/assets/linha.png" width="650" height="29">
        <h1 id="a">Seja bem-vindo</h1><br>
        <span>Quetal começar a investir do melhor jeito? Primeiro nos conte sobre você para
       depois contarmos sobre o jeito Warren de investir!</span>
      <form>
            <label for="nome" class='especialLabel'>NOME COMPLETO</label><br>
            <input type="text-box" id="nome" name="nome" v-model="nome"  ><br>
            <div class="subBox1">
            
            <!-- <EmailIcon id="con"/> -->
            <label for="email" class='normalLabel'>EMAIL</label><br><br><br>
            <input type="email" class="inBox" id="emailBox1" name="email" v-model="email"><br>
            
            
            <label for="cpf" class='normalLabel'>CPF</label><br><br><br>
            <input type="text" class="inBox" id="cpf" name="cpf" autocomplete="off" maxlength="14" v-model="cpf"><br>
            
           
            <label for="date" class='normalLabel'>DATA DE NASCIMENTO</label><br><br><br>
            <p name="date" id="date">
              <DataIcon id='con'/>
              <input class="dateIn" type="date" placeholder="data" v-model="date">
              
              <span>{{date}}</span>
              
            </p>

            <strong>
            <p>Quer receber aszz melhores dicas e ficar por dentro do universo Warren?</p>
            <p>Então selecione por onde deseja recerber tudo e mais um pouco:</p><br><br><br>
            </strong>
            <input type="checkbox" id="checkin" name="msg">
            <label for="msg" id="check">Email e SMS</label><br><br><br>
            <label for="whats" id="check">Whatsapp</label>
            <input type="checkbox" id="checkin" name="whats"><br><br><br>

            <p>Quer receber as melhores dicas e ficar por dentro do universo Warren?</p>
            <p>Então selecione por onde deseja recerber tudo e mais um pouco:</p>
            {{nome}}<br>
      {{email}}<br>
      {{cpf}}<br>
      {{date}}<br>

        
        </div>
        <div class="subBox2">
            
            <label for="email" class='normalLabel'>CONFIRMAR EMAIL</label><br><br><br>
            <input type="text-box" class="inBox" id="emailBox2" name="email" v-model="email2"><br>
           
            
            <label for="email" class='normalLabel'>TELEFONE</label><br><br><br>
            <input type="text-box" class="inBox" id="" name="email" maxlength="14"><br>
            
        </div>
      </form>
      
      <BotaoMagenta v-on:click.native="next"  msg="Próximo" id="proximo"/>
      
    </div>
    <div class="box" v-else-if="fase===2">
      <h1>oi</h1>
      <BotaoMagenta v-on:click.native="next"  msg="Próximo" id="proximo"/>
      

    </div>
    <div class="box" v-else-if="fase===3">
      <h1 >Erro</h1>
      <BotaoMagenta v-on:click.native="next"  msg="Próximo" id="proximo"/>

    </div>
</template>


<script>
  import DataIcon from "../icons/dataIcon.vue"
  import BotaoMagenta from '../Botoes/BotaoMagenta.vue'
  
  export default{
        components:{
            BotaoMagenta,
            DataIcon,
            
        },
        data(){
          return {
            fase:1,
            nome:"",
            email:"",
            email2:"@gmail.com",
            cpf:"",
            date: "",
          }
        },
        methods: {
          next: function(){
            if(this.fase >= 1 && ){
              this.fase += 1
              // let v = [this.nome,
              //       this.email,
              //       this.email2,
              //       this.cpf,
              //       this.date,]
              // let ok = 0
              // for(let i=0; i < 4;i++){
              //   if(v[i] == ""){
              //     ok += 1
              //   }
              // }
              // if(ok == 0){
              //   if(this.email == this.email2 && this.email != (''+'@gmail.com')){
              //     this.fase += 1
              //   }
              //   else{
              //     alert("Erno")
              //   }
              // }
              // else{
              //   alert("Erro")
              // }
            }
          },
          
          back: function(){
            if(this.fase > 1){
              this.fase -= 1
            }
          }
        },
    }
    
    
</script>


<style scoped>
  .link{
    margin-top: 0%;
    margin-bottom: 300%;
    position: absolute;
  }

    div{
      position: absolute;
    }

  .box{
    box-sizing: border-box;
    width: 35%;
    height: 100%;
    margin:2% 15%;
    text-align: left;
    padding: 1%;
    
  }

  #proximo{
    margin-top: 108%;
    font-size: 150%;
    position: absolute;
    width:30%;
    height: 10%;
    padding: 1%;
  }







    input[type=date]{
    margin: 9% 8%;

    color:azure;
    border:none;
    width: 6%;
    height: 20%;
    z-index: 1;
    outline: none;
    
  }  

  #con{
    position:absolute;
    margin-top: 2%;
    margin-left: 2%;
    z-index: -1;
  }

  #nome{
    width: 100%;
    height: 6em;
    padding: 12px 20px;
    display: inline-block;
    border-radius: 4%;
    box-sizing: border-box;
  }

  #check{
    position: absolute;
    margin-left: 10%;
    margin-top:0%;
  }

  #checkin{
    position: absolute;
    
    
  }

  .dateBox{
    border: solid 1px;
    width: 45%;
    margin-top: 7.5%;
    height: 5em;
    border-radius: 4%;
    box-sizing: border-box;

  }
  .subBox1{
    display: flexbox;
    position: absolute;
    width: 98%;
    text-align: left;
  }
  .subBox2{
    display: flexbox;
    position: absolute;
    margin-left: 50%;
    width: 98%;
  }
  .inBox{
    border-color: none;
    border: solid 1px;
    z-index: -1;
    width: 45%;
    height: 6em;
    padding: 3px;
    border-radius: 4%;
    box-sizing: border-box;
  }
  #date{
    border-color: none;
    margin: -0.5%;
    border: solid 1px;
    z-index: -1;
    width: 45%;
    height: 4em;
    padding: 3px;
    border-radius: 4%;
    box-sizing: border-box;
  }

  #a{
    font-size: 350%;
    margin-bottom: 1%;
  }

  .normalLabel{
    z-index: 1;
    margin-left: 1%;
    position: absolute;
    background: white;
    position: absolute;
    margin-top: 7.5%;
    float: left;
    font-size: 70%;
    font-weight: 700;
  }

  .especialLabel{
    z-index: 1;
    margin-left: 1%;
    position: absolute;
    background: white;
    position: absolute;
    margin-top: 2%;
    float: left;
    font-size: 70%;
    font-weight: 700;
  }







  

  
</style>