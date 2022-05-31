<template>
  <div class="box">
          <LinhaProgrecao1 />
          
          <h1 id="mainText">Seja bem-vinda(o)</h1>
          <form>
            <label for="nome" class='especialLabel'>NOME COMPLETO</label>
            <input type="text-box" id="bigInput" name="nome" v-model="nome"><br>
            <span class="erroMsg" ref="ErrorName">Esse campo deve ser preenchido</span>
            <div class="subBox1">
              <!-- <EmailIcon id="con"/> -->
              
                
              <div class="inBox">
                <label for="email" class='normalLabel'>EMAIL</label>
                <input type="email"  class="in" name="email" v-model="email"><br>
              </div>
              <span class="erroMsg" ref="ErrorEmail">Esse campo deve ser preenchido</span>
              
              <div class="inBox">
                <label for="cpf" class='normalLabel'>CPF</label>
                <input v-maska="'###.###.###-##'" type="text" class="in" name="cpf" autocomplete="off" maxlength="14" v-model="cpf"><br>
              </div>
              <span class="erroMsg" ref="ErrorCpf"  >Esse campo deve ser preenchido</span>
              
              <div class="inBox">
                <label for="date"  class='normalLabel'>DATA DE NASCIMENTO</label>
                <input  type="date" id="dateIn" v-model="date">
              </div>
              <span class="erroMsg" id="Edate" ref="ErrorDate"  >Esse campo deve ser preenchido</span><br>
              
              

              <strong id="text">
                <p>Quer receber as melhores dicas e ficar por dentro do universo Warren?</p>
                <p>Então selecione por onde deseja recerber tudo e mais um pouco:</p>
              </strong>
              <div class="checkBox">
                <input type="checkbox" id="checkin" name="msg">
                <label for="msg" id="check">Email e SMS</label>
              </div><br>
              <div class="checkBox">
                <label for="whats" id="check">Whatsapp</label>
                <input type="checkbox" id="checkin" name="whats">
              </div>
              <a href="#navbar"  @click.prevent="verify"><BotaoMagenta msg="continuar" id="proximo" /></a>
            </div>
            <div class="subBox2">
              <div class="inBox">
                <label for="email" class='normalLabel'>CONFIRMAR EMAIL</label>
                <input type="text-box" class="in" name="email" v-model="email2"><br>
              </div>
              <span class="erroMsg" id="email2" ref="ErrorEmail2"  >Esse campo deve ser preenchido</span>

              <div class="inBox">
                <label for="email" class='normalLabel'>TELEFONE</label>
                <input v-maska="'+55(##)#####-####'" type="text-box" class="in" id="" name="email" maxlength="17" v-model="telefone">
              </div>
              <span class="erroMsg" id="telefone" ref="ErrorTelefone"  >Esse campo deve ser preenchido</span>
            </div>
            
          </form>
      </div>
</template>

<script>



import BotaoMagenta from '../../Botoes/BotaoMagenta.vue'
import LinhaProgrecao1 from '../../icons/LinhaProgrecao1.vue'
  

export default {
     components:{
        LinhaProgrecao1,
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

          array:[this.nome,
                this.email,
                this.email2,
                this.cpf,
                this.telefone,
                this.date,],
          status:"paused",
        }

        
     },
     
     methods: {
       
       cpfClean(){
            let l = []
            let str = this.cpf.split("")
            for(let i=0;i<str.length;i++){
                if(str[i] != "."){
                    if(str[i] != "-"){
                        l.push(parseInt(str[i]))
                    }
                }
            }
            return l.join("")
          },


          

          verifyCPF(){
            let soma = 0
            let resto
            let cpf = this.cpfClean()
            if(cpf == "") return false

            for(let i=1;i<=9;i++){
              soma += parseInt(cpf.substring(i-1,i)) *(11 - i)
            }
            resto = (soma*10) % 11
            if ((resto == 10) || (resto == 1)){
              resto = 0
            }
            if(resto != parseInt(cpf.substring(9,10))){
               return false
            }

            soma = 0
            for(let i=1; i<=10; i++){
              soma += parseInt(cpf.substring(i-1, i)) * (12 - i)
            }
            resto = (soma *10) % 11

            if((resto == 10) || (resto == 11)){
              resto = 0
            }
            if(resto != parseInt(cpf.substring(10,11))){
              return false
            }
            return true
          },


          verify() {
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
                this.$refs.ErrorCpf.style.display = "block"
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
                if(this.verifyCPF()){
                  final.push(this.cpf)
                  this.$refs.ErrorCpf.style.display = "none"
                }
                else{
                  this.$refs.ErrorCpf.innerHTML = "CPF inválido"
                  this.$refs.ErrorCpf.style.display = "block"
                }
                
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
              console.log(final)
              this.$emit('Proxima',this.array)
            }
            else{
              console.log(final)
            }
          },
     },
     
    
}
</script>

<style scoped>


  #dateIn{
    background-color: whitesmoke;  
    border: none;
    font-size: 0.9vw;
    border-radius: 1vw;
    margin: 0.7vw;
    width: 8vw;
    height: 1.5vw;
    padding: 0vw 1vw;
  }

  

  .checkBox{
    margin-top:1vw;
  }
  #check{
    position: absolute;
    font-size: 1vw;
    
    margin-left: 10%;
    margin-top:0%;
  }

  #checkin{
    position: absolute;
    width: 1vw;
    height: 1vw;
  }
  /* futura animação */
  /* .box{
    animation-name: example;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
    animation-play-state: paused;
  }

  @keyframes example {
  0%   {opacity:100%; left:0px;}
  50%	{opacity:0%; left:-500px;}
  90% {opacity:0%; left:200px;}
  99% {opacity:10%; left:50px;}
  100% {opacity:100%; left:0px;}
} */
  
  
</style>