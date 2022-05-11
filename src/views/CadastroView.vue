<template>
  <div class="corpo">
    <NavCadastro />
    <FormCadastro />
    
    <img  id="moça" alt="moça grande" src="@/assets/moçaGrande.png" width="621" height="1287" >
    
  </div>
</template>

<script setup>
import NavCadastro from '../components/cadastro/NavCadastro.vue'
import FormCadastro from '../components/cadastro/FormCadastro.vue'

export default{
    components:{
        NavCadastro,
        FormCadastro,
    }
}
</script>

<style>
  body{
    background-color: rgb(246, 253, 254);
    margin: 0%;
    font-family: ;
  }

  #moça{
    float: right;
  }
</style>
