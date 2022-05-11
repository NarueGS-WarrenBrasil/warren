<template>
    <div>
        <img alt="progresso" src="@/assets/linha2.png" width="640" height="22">
       <h1 id="a">Seja bem-vindo</h1><br>
        <span>Quetal começar a investir do melhor jeito? Primeiro nos conte sobre você para
       depois contarmos sobre o jeito Warren de investir!</span>
      <form>
            
            <div class="subBox1">
            
            <!-- <EmailIcon id="con"/> -->
            <label for="email" class='normalLabel'>EMAIL</label><br><br><br>
            <input type="email" class="inBox" id="emailBox1" name="email"><br>
            
            
            <label for="cpf" class='normalLabel'>CPF</label><br><br><br>
            <input type="text" class="inBox" id="cpf" name="cpf" autocomplete="off" maxlength="14"><br>

            <label for="nome" class='especialLabel'>NOME COMPLETO</label>
            <input type="text-box" id="nome" name="nome"><br>
        

           
            
            
        
        </div>
        <div class="subBox2">
            
            <label for="email" class='normalLabel'>CONFIRMAR EMAIL</label><br><br><br>
            <input type="text-box" class="inBox" id="emailBox2" name="email"><br>
           
            
            <label for="email" class='normalLabel'>TELEFONE</label><br><br><br>
            <input type="text-box" class="inBox" id="" name="email"><br>
            
        </div>
        
      </form>
      
    </div>
</template>

<script>
// import EmailIcon from "/src/components/icons/emailIcon.vue"
// import DataIcon from "/src/components/icons/dataIcon.vue"

export default {
     components:{
       
    //     EmailIcon,
    //     DataIcon
     },
     
    
}
</script>

<style scoped>

  

    #con{
    position:absolute;
    margin-top: 12.5%;
    margin-left: 2%;
  }

  #nome{
    width: 95%;
    height: 6em;
    padding: 12px 20px;
    display: inline-block;
    border-radius: 4%;
    margin-top: 5% ;
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
    margin-top: 4%;
    float: left;
    font-size: 70%;
    font-weight: 700;
  }
</style>