<template>
    <div :class="animate"  class="box">
  
      <h1 id="mainText">Dados pessoais</h1><br>
      <span id="text">Que tal começar a investir do melhor jeito? Primeiro nos conte sobre você para
        depois contarmos sobre o jeito Warren de investir!</span>
      <form>
          <div class="subBox1">
            <div class="inBox">
              <label for="pais" class='normalLabel'>PAÍS</label>
              <input type="text"  class="in" name="pais" v-model="db2.pais"><br>
            </div>
            <span class="erroMsg" ref="ErrorPais">Esse campo deve ser preenchido</span>
            
            <div class="inBox">
              <label for="cidade" class='normalLabel'>CIDADE</label>
              <input type="text" class="in"  name="cidade" autocomplete="off" v-model="db2.cidade"><br>
            </div>
            <span class="erroMsg" ref="ErrorCidade"  >Esse campo deve ser preenchido</span>
            
              <label for="numero" id="lNúmero" class='especialLabel' v-maska="'#*'">NÚMERO</label><br>
              <input type="text" id="bigInput" name="numero" v-model.number="db2.numero"><br>
              <span class="erroMsg" ref="ErrorNumero"  >Esse campo deve ser preenchido</span>
              <a href=""  @click.prevent="verify2"><BotaoMagenta msg="continuar" id="proximo" /></a>
          </div>
          <div class="subBox2">
            <div class="inBox">
              <label for="cep" class='normalLabel'>CEP</label>
              <input v-maska="'#####-###'" type="text" class="in" name="email" v-model="db2.cep">
            </div>  
              <span class="erroMsg" ref="ErrorCep"  >Esse campo deve ser preenchido</span>
              
            <div class="inBox">
              <label for="endereco" class='normalLabel'>ENDEREÇO</label>
              <input type="text" class="in" name="endereco" maxlength="14" v-model="db2.endereco"><br>
            </div>
            <span class="erroMsg" ref="ErrorEndereco"  >Esse campo deve ser preenchido</span>
          </div>
      </form>
      
    </div>
</template>

<script>

import BotaoMagenta from '../../Botoes/BotaoMagenta.vue'

export default {
    components:{
        BotaoMagenta
    },
    data() {
        return {
          db2:{
            pais:"País",
            cep:"11111111",
            cidade:"Cidade",
            endereco:"Rua Tal de Tal lugar",
            numero:"23232434",   
          },
        }
    },
    props:{
      animate:{
        type:String
      }
    },
    methods: {
      
      verify2(){
            
            let v = [
              this.db2.pais,
              this.db2.cep,
              this.db2.cidade,
              this.db2.endereco,
              this.db2.numero,
            ];
            let errors = [];
            let check = [];
            let final = [];
            for(let i = 0; i<v.length;i++){
              if(v[i] != ""){
                check.push(i)
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
            for(let n=0;n<check.length;n++){
              if(check[n] == 0){
                this.$refs.ErrorPais.style.display = "none"
                final.push(check[n])
              }
              if(check[n] == 1){
                if(this.db2.cep.length == 9){
                  this.$refs.ErrorCep.style.display = "none"
                  final.push(check[n])
                }
                else{
                  this.$refs.ErrorCep.style.display = "block"
                }
              }
              if(check[n] == 2){
                this.$refs.ErrorCidade.style.display = "none"
                final.push(check[n])
              }
              if(check[n] == 3){
                this.$refs.ErrorEndereco.style.display = "none"
                final.push(check[n])
              }
              if(check[n] == 4){
                this.$refs.ErrorNumero.style.display = "none"
                final.push(check[n])
              }
                
            }
            if(final.length == 5 ){
              console.log(final)
              this.$emit('Proxima',this.db2)
            }
            else{
              
              console.log(final)
            }
            
            }
    },
}

</script>

<style scoped>
  #lNúmero{
    margin-top: 1.7vw;
  }
</style>