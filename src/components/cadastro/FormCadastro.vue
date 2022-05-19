<template>
  <div>
    <div id="navbar">
        <!-- <VoltarIcon v-on:click.native="back" id="icon"/> -->
        <p id="title">FORMULÁRIO</p>
        <VoltarIcon  v-on:click="back" id="voltar"/>
    </div>
    <div :class="{leave:moviment}" ref="box1" id="box1" class="box" v-show="fase == 1">
         <LinhaProgrecao1 />
         <h1 id="bemVindo">Seja bem-vindo</h1><br>
          
        <span>Quetal começar a investir do melhor jeito? Primeiro nos conte sobre você para
        depois contarmos sobre o jeito Warren de investir!</span>
        <form>
          <label for="nome" class='especialLabel'>NOME COMPLETO</label><br>
          <input type="text-box" id="bigInput" name="nome" v-model="nome"><br>
          <span class="erroMsg" ref="ErrorName">Esse campo deve ser preenchido</span>
          <div class="subBox1">
            <!-- <EmailIcon id="con"/> -->
            <label for="email" class='normalLabel'>EMAIL</label><br><br><br>
            <input type="email" class="inBox" id="emailBox1" name="email" v-model="email"><br>
            <span class="erroMsg" ref="ErrorEmail">Esse campo deve ser preenchido</span>
            
            
            <label for="cpf" class='normalLabel'>CPF</label><br><br><br>
            <input v-maska="'###.###.###-##'" type="text" class="inBox" id="cpf" name="cpf" autocomplete="off" maxlength="14" v-model="cpf"><br>
            <span class="erroMsg" id="cpf" ref="ErrorCPF"  >Esse campo deve ser preenchido</span>
            
          
            <label for="date" class='normalLabel'>DATA DE NASCIMENTO</label><br><br><br>
            <p name="date" id="date">
              <DataIcon id='con'/>
              <input class="dateIn" type="date" v-model="date">
              <span>{{date}}</span>
            </p>
            <span class="erroMsg" id="Edate" ref="ErrorDate"  >Esse campo deve ser preenchido</span>
            

            <br><br><br><strong>
              <p>Quer receber aszz melhores dicas e ficar por dentro do universo Warren?</p>
              <p>Então selecione por onde deseja recerber tudo e mais um pouco:</p><br><br><br>
            </strong>
            <input type="checkbox" id="checkin" name="msg">
            <label for="msg" id="check">Email e SMS</label><br><br><br>
            <label for="whats" id="check">Whatsapp</label>
            <input type="checkbox" id="checkin" name="whats"><br><br><br>

            <p>Quer receber as melhores dicas e ficar por dentro do universo Warren?</p>
            <p>Então selecione por onde deseja recerber tudo e mais um pouco:</p> 
            <a href="#navbar"> <BotaoMagenta msg="Próximo" id="proximo" v-on:click.native = "next"/></a>
          </div>
          <div class="subBox2">
              
              <label for="email" class='normalLabel'>CONFIRMAR EMAIL</label><br><br><br>
              <input type="text-box" class="inBox" id="emailBox2" name="email" v-model="email2"><br>
              <span class="erroMsg" id="email2" ref="ErrorEmail2"  >Esse campo deve ser preenchido</span>
              
              
              <label for="email" class='normalLabel'>TELEFONE</label><br><br><br>
              <input v-maska="'+55(##)#####-####'" type="text-box" class="inBox" id="" name="email" maxlength="17" v-model="telefone"><br>
              <span class="erroMsg" id="telefone" ref="ErrorTelefone"  >Esse campo deve ser preenchido</span>
          
          </div>
          
        </form>
    </div>
    <div :class="{leave:moviment}"  id="box2"  class="box" v-show="fase == 2">
      <LinhaProgrecao2 id="linha"/>
      <h1 id="b">Dados pessoais</h1><br><br><br>
      <span>Quetal começar a investir do melhor jeito? Primeiro nos conte sobre você para
        depois contarmos sobre o jeito Warren de investir!</span>
      <form>
          <div class="subBox1">
            <!-- <EmailIcon id="con"/> -->
            <label for="pais" class='normalLabel'>PAÍS ONDE RESIDE</label><br><br><br>
            <input type="text" class="inBox" i name="pais" v-model="pais"><br>
            <span class="erroMsg" ref="ErrorPais"  >Esse campo deve ser preenchido</span>
            
            <label for="cidade" class='normalLabel'>CIDADE</label><br><br><br>
            <input type="text" class="inBox"  name="cidade" autocomplete="off" v-model="cidade"><br>
            <span class="erroMsg" ref="ErrorCidade"  >Esse campo deve ser preenchido</span>

            <label for="numero" class='especialLabel2'>NÚMERO</label><br>
            <input type="text" id="bigInput" name="numero" v-model="numero"  ><br>
            <span class="erroMsg" ref="ErrorNumero"  >Esse campo deve ser preenchido</span>
             <a href="#navbar"> <BotaoMagenta msg="Próximo" id="proximo" v-on:click.native = "verify2"/></a>
          </div>
          <div class="subBox2">
              <label for="cep" class='normalLabel'>CEP</label><br><br><br>
              <input type="text" class="inBox" name="email" v-model="cep"><br>
              <span class="erroMsg" ref="ErrorCep"  >Esse campo deve ser preenchido</span>
              
              
              <label for="endereco" class='normalLabel'>ENDEREÇO</label><br><br><br>
              <input type="text" class="inBox" name="endereco" maxlength="14" v-model="endereco"><br>
              <span class="erroMsg" ref="ErrorEndereco"  >Esse campo deve ser preenchido</span>
          </div>
          
          
      </form>
    </div>
    <div  class="box" v-show="fase == 3">
      <LinhaProgrecao3 />
      <h1>AA</h1>
     
    </div>
  </div>   
</template>


<script>
  import VoltarIcon from '../icons/VoltarIcon.vue'
  // import Fase1Cadastro from './fases/Fase1Cadastro.vue'
  import DataIcon from "../icons/dataIcon.vue"
  import BotaoMagenta from '../Botoes/BotaoMagenta.vue'
  import LinhaProgrecao1 from '../icons/LinhaProgrecao1.vue'
  import LinhaProgrecao2 from '../icons/LinhaProgrecao2.vue'
  import LinhaProgrecao3 from '../icons/LinhaProgrecao3.vue'
  // import Fase2Cadastro from './fases/Fase2Cadastro.vue'
  
  export default{
        components:{
          VoltarIcon,
          // Fase1Cadastro,
          // Fase2Cadastro,
          BotaoMagenta,
          DataIcon,
          LinhaProgrecao1,
          LinhaProgrecao2,
          LinhaProgrecao3,         
        },

        
        data(){
          return {
            fase:1,
            moviment: false,
            teste: "paused",
            validEmail: false,

            nome:"",
            email:"",
            email2:"",
            cpf:"",
            date: "" ,
            telefone: "",

            pais:"",
            cep:"",
            cidade:"",
            endereco:"",
            numero:"",          
            
          }
        },
        methods: {          
          back: function(){
            alert()
          },
          
          next: function(){
            this.moviment = true
            setTimeout(() => {
              this.fase += 1
              this.moviment = false}, 500)
          },

          verify1: function () {
            let v = [
                this.nome,
                this.email,
                this.email2,
                this.cpf,
                this.telefone,
                this.date,
              ];
            
            let errors = [];
            let check = [];
            let final = [];
              for(let i =0;i<v.length;i++){
                if(v[i] == ""){
                  errors.push(i)
                }
                else{
                  check.push(i)
                }
              }
            
            for(let n= 0;n<errors.length;n++){
              if(errors[n] == 0){
                this.$refs.ErrorName.style.display = "block"
              }
             if(errors[n] == 1){
                this.$refs.ErrorEmail.innerHTML = "Esse campo deve ser preenchido"
                this.$refs.ErrorEmail.style.display = "block"
                
              }
              if(errors[n] == 2){
                this.$refs.ErrorEmail2.style.display = "block"
                this.$refs.ErrorEmail.innerHTML = "Esse campo deve ser preenção"
              }
              if(errors[n] == 3){
                this.$refs.ErrorCPF.style.display = "block"
                
              }
              if(errors[n] == 4){
                this.$refs.ErrorTelefone.style.display = "block"
               
              }
              if(errors[n] == 5){
                this.$refs.ErrorDate.style.display = "block"
                
              }
            }
            for(let x = 0;x<check.length;x++){
              if(check[x] == 0){
                final.push(this.nome)
                
                //check.splice(x,1)
                this.$refs.ErrorName.style.display = "none"
              }

              if(check[x] == 1){
                let checkMail = this.email.split("@")
                let checkDot = this.email.split(".")
                
                if(checkMail.length == 2 && checkDot.length > 1){
                  this.$refs.ErrorEmail.style.display = "none"
                  this.validEmail = true
                }
                else{
                  this.$refs.ErrorEmail.innerHTML = "Email inválido"
                  this.$refs.ErrorEmail.style.display = "block"
                }
              }

              if(check[x] == 2){
                if(this.email2 == this.email && this.validEmail == true){
                  final.push(this.email)
                  final.push(this.email2)
                  // check.splice(x,1)
                  // check.splice(x-1,1)
                  this.$refs.ErrorEmail2.style.display = "none"
                }
                else{
                  
                  this.$refs.ErrorEmail.innerHTML = "Email inválido"
                  this.$refs.ErrorEmail.style.display = "block"
                  this.$refs.ErrorEmail2.innerHTML = "Email inválido"
                  this.$refs.ErrorEmail2.style.display = "block"
                }
              }

              if(check[x] == 3){
                console.log(x)
                final.push(this.cpf)
                this.$refs.ErrorCPF.style.display = "none"
              }
              if(check[x] == 4){
                if(this.telefone.length == 17){
                  this.$refs.ErrorTelefone.style.display = "none"
                  final.push(this.telefone)
                }
                else{
                  this.$refs.ErrorTelefone.style.display = "block"
                }
              }
              if(check[x] == 5){
                if(this.date != ""){
                  this.$refs.ErrorDate.style.display = "none"
                  final.push(this.date)
                }
              }


              
            }
            if(final.length == 6 ){
              this.next()
            }
            else{
              console.log(errors)
              console.log(final)
              console.log(check)
            }
          },
          verify2: function() {
            let v = [
              this.pais,
              this.cep,
              this.cidade,
              this.endereco,
              this.numero,
            ];
            let errors = [];
            let final = [];
            for(let i = 0; i<v.length;i++){
              if(v[i] != ""){
                final.push(i)
              }
              else{
                errors.push(i)
                }
              }
            for(let n=0;n<errors.length;n++){
                if(errors[n] == 0){
                  this.$refs.ErrorPais.style.display = "block"
                }
                if(errors[n] == 1){
                  this.$refs.ErrorCep.style.display = "block"
                }
                if(errors[n] == 2){
                  this.$refs.ErrorCidade.style.display = "block"
                }
                if(errors[n] == 3){
                  this.$refs.ErrorEndereco.style.display = "block"
                }
                if(errors[n] == 4){
                  this.$refs.ErrorNumero.style.display = "block"
                }
            }
            
            
            }

            
          }
        }
    
</script>


<style scoped>




  #navbar {
    background-color: rgb(255, 26, 95);
    display: flex;
    padding-bottom: 0px;
    height:1.5em;
    font-size: 30px;
    margin-bottom: 0%; 
    text-align: center;  color: azure; 
  }

    #title{
      margin-top: 0.8%;
      margin-left: 48%;
      font-size: 45%;
      font-weight: 700;
    }
    #voltar{
      float: left;
      position:absolute;
      margin: 0.5%
    }

    #icon{
      margin: 0.5%;
      margin-left: 0.5%;
    }

  .box{
    box-sizing: border-box;
    width: 35%;
    height: 100%;
    margin:2% 15%;
    text-align: left;
    position: absolute;
    padding: 1%;
  }

  
  .leave{
    animation-fill-mode: forwards;
    animation-name:thisForm;
    animation-duration: 0.5s;
  }

  .come{
    animation-fill-mode: forwards;
    animation-name:nextForm;
    animation-duration: 0.5s;
  }
@keyframes thisForm{
  from {left: 0px;}
  to {left:  -1000px;}
}
@keyframes nextForm{
  from {left: 1000px;}
  to {left:  0px;}
}

  #proximo{
    margin-top: 10%;
    font-size: 150%;
    position: absolute;
    width: 7em;
    height: 3em;
    padding: 1%;
  }



  .erroMsg{
    position: absolute;
    margin: 1%;
    display: none;
    color:red;
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

  #bigInput{
    width: 100%;
    height: 6em;
    margin-top: 5%;
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
    font-size:100%;
    z-index: -1;
    width: 45%;
    height: 5em;
    padding: 10px;
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

  #bemVindo{
    font-size: clamp(1em, 3vw, 15em);
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
    margin-top: 3%;
    float: left;
    font-size: 70%;
    font-weight: 700;
  }

  


  .especialLabel2{
    z-index: 1;
    margin-left: 1%;
    position: absolute;
    background: white;
    position: absolute;
    margin-top: 7% ;
    float: left;
    font-size: 70%;
    font-weight: 700;
  }

  #b{
    font-size: 350%;
    margin-bottom: 1%;
  }

  #numero{
    width: 100%;
    margin-top: 60%;
    height: 6em;
    padding: 12px 20px;
    display: inline-block;
    border-radius: 4%;
    box-sizing: border-box;
  }
  
</style>
