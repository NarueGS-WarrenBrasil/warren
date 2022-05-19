<template>
  <div>
    <img alt="progresso" src="@/assets/linha.png" width="650" height="29">
        <h1 id="a">Seja bem-vindo</h1><br>
        <span>Quetal começar a investir do melhor jeito? Primeiro nos conte sobre você para
       depois contarmos sobre o jeito Warren de investir!</span>
      <form>
            <label for="nome" class='especialLabel'>NOME COMPLETO</label><br>
            <input type="text-box" id="nome" name="nome" v-model="nome"  ><br>
            <span class="erroMsg" id="Enome" ref="Enome"  >Esse campo deve ser preenchido</span>
            <span class="erroMsg" id="Enome" ref="Enome"  >Esse campo deve ser preenchido</span>
            <div class="subBox1">
            
            <!-- <EmailIcon id="con"/> -->
            <label for="email" class='normalLabel'>EMAIL</label><br><br><br>
            <input type="email" class="inBox" id="emailBox1" name="email" v-model="email"><br>
            <span class="erroMsg" id="Eemail" ref="Eemail"  >Esse campo deve ser preenchido</span>
            
            
            <label for="cpf" class='normalLabel'>CPF</label><br><br><br>
            <input type="text" class="inBox" id="cpf" name="cpf" autocomplete="off" maxlength="14" v-model="cpf"><br>
            <span class="erroMsg" id="cpf" ref="Ecpf"  >Esse campo deve ser preenchido</span>
            
           
            <label for="date" class='normalLabel'>DATA DE NASCIMENTO</label><br><br><br>
            <p name="date" id="date">
              <DataIcon id='con'/>
              <input class="dateIn" type="date" value="2017-06-01" v-model="date">
              
              <span>{{date}}</span>
              
            </p>
            <span class="erroMsg" id="Edate" ref="Edate"  >Esse campo deve ser preenchido</span>
            

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
            

        
        </div>
        <div class="subBox2">
            
            <label for="email" class='normalLabel'>CONFIRMAR EMAIL</label><br><br><br>
            <input type="text-box" class="inBox" id="emailBox2" name="email" v-model="email2"><br>
            <span class="erroMsg" id="email2" ref="Eemail2"  >Esse campo deve ser preenchido</span>
            
            
            <label for="email" class='normalLabel'>TELEFONE</label><br><br><br>
            <input type="text-box" class="inBox" id="" name="email" maxlength="14" v-model="telefone"><br>
            <span class="erroMsg" id="telefone" ref="Etelefone"  >Esse campo deve ser preenchido</span>
            
        </div>
      </form>
      
      <br><br><br><BotaoMagenta v-on:click.native="next" msg="Próximo" id="proximo"/>
      
    </div>
</template>

<script>


 //import EmailIcon from "/src/components/icons/emailIcon.vue"
import DataIcon from "../../icons/dataIcon.vue"
import BotaoMagenta from '../../Botoes/BotaoMagenta.vue'

export default {
     components:{
    //     EmailIcon,
         DataIcon,
         BotaoMagenta,
         
     },
     props:{
       
     },
     
     data() {
       return {
          nome:"",
          email:"",
          email2:"",
          cpf:"",
          date: "" ,
          telefone: "",
        }
     },
     
     methods: {
       next: function(){
        let v = [
          this.nome, this.email,
          this.email2, this.cpf,
          this.telefone,this.date,
        ]
        let errors = []
        let pass = []
        
        for(let i=0;i < v.length;i ++){
          if(v[i] == ""){
            errors.push(i)
          }
          else{
            pass.push(i)
          }
        }
        for(let i=0;i < errors.length;i ++){
          if(errors[i] == 0){
            this.$refs.Enome.style.display = "block"
           }
           if(errors[i] == 1){
            this.$refs.Eemail.style.display = "block"
          }
          if(errors[i] == 2){
            this.$refs.Eemail2.style.display = "block"
          }
          if(errors[i] == 3){
            this.$refs.Ecpf.style.display = "block"
          }
          if(errors[i] == 4){
            this.$refs.Etelefone.style.display = "block"
          }
          if(errors[i] == 5){
            this.$refs.Edate.style.display = "block"
          }
        }
        for(let i = 0;i<pass.length;i++){
          if(pass[i] == 0){
            if(this.nome == "EU"){
              this.$refs.Enome.style.display = "block"
              console.log(this.nome.type)
            }
            else{
              this.$refs.Enome.style.display = "none"
            }
          }
           if(pass[i] == 1){
            this.$refs.Eemail.style.display = "none"
          }
          if(pass[i] == 2){
            if(this.email2 == this.email){
              this.$refs.Eemail2.style.display = "none"
            }
            else{
              this.$refs.Eemail2.style.display = "block"
            }
          }
          if(pass[i] == 3){
            this.$refs.Ecpf.style.display = "none"
          }
          if(pass[i] == 4){
            this.$refs.Etelefone.style.display = "none"
          }
          if(pass[i] == 5){
            this.$refs.Edate.style.display = "none"
          }
        }
        
      }
     },
     
    
}
</script>

<style scoped>

  .erroMsg{
    position: absolute;
    margin: 1%;
    display:none;
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

  #proximo{
    margin-top: 108%;
    font-size: 150%;
    position: absolute;
    width:30%;
    height: 10%;
    padding: 1%;
  }
</style>