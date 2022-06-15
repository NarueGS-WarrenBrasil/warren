<template>

    <div class="modal-shadow" v-show="status">
        <div class="modal">
            <div class="modal-top">
                <span id="text">Confirmar informações de cadastro</span>
            </div>{{this.dados_pessoais.checkSMS}}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
            <div class="modal-content" >
                <span id="text">Análise e confirme os dados inputados no cadastro</span><br>
                <button type="button" :class="contato_button"  @click="change1">Contato</button>
                <button type="button" :class="pessoal_button"  @click="change2">Pessoal</button>
                <div class="modalzito" v-show="contato">
                    <p>Dados de Contato</p>
                    <div class="dados">
                        <ol>
                            <li>
                                <span class="field_name">CPF</span><br>
                                <strong>{{this.dados_contato.cpf}}</strong>
                            </li>
                            <li>
                                <span class="field_name">Nome Completo</span><br>
                                <strong>{{this.dados_contato.nome}}</strong>
                            </li>
                            <li>
                                <span class="field_name">Nascimento</span><br>
                                <strong>{{this.dados_contato.data}}</strong>
                                
                            </li>
                        </ol>
                        <ol>
                            <li>
                                <span class="field_name">Telefone</span><br>
                                <strong>{{this.dados_contato.telefone}}</strong>
                            </li>
                            <li>
                                <span class="field_name">Contato</span><br>
                                <div v-show="dados_contato.checkZap">
                                    <fa-icon icon="fa-brands fa-whatsapp" size="2x" alt="whatsapp"/>
                                </div>
                                <div v-show="dados_contato.checkSMS">
                                    <fa-icon icon="free-solid fa-square-envelope" size="2x"/>
                                </div>
                                <!-- v-show="this.dados_contato.checkZap" -->
                                
                            </li>
                        </ol>
                    </div>
                </div> 
                <div class="modalzito" v-show="pessoal">
                    <p>Dados pessoais</p>
                    <div class="dados">
                    <ol>
                        <li>
                            <span class="field_name">País</span><br>
                            <strong>{{this.dados_pessoais.pais}}</strong>
                        </li>
                        <li>
                            <span class="field_name">Cidade</span><br>
                            <strong>{{this.dados_pessoais.cidade}}</strong>
                        </li>
                        <li>
                            <span class="field_name"> Cep</span><br>
                            <strong>{{this.dados_pessoais.cep}}</strong>
                        </li>
                        </ol>
                        <ol>
                        <li>
                            <span class="field_name">Endereço</span><br>
                            <strong>{{this.dados_pessoais.endereco}}</strong>
                        </li>
                        <li>
                            <span class="field_name">Número</span><br>
                            <strong>{{this.dados_pessoais.numero}}</strong>
                        </li>
                    </ol>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button @click="cancel_modal" class="cancelar_modal">Cancelar</button>
                <button @click="confirm_modal" class="confirmar_modal">Confirmar</button>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    components:{
        
    },
    props:{
        status: Boolean,
        dados_contato:Object,
        dados_pessoais:Object,
    },
    data() {
        return {
            contato_button:"on",
            pessoal_button:"off",
            pessoal:false,
            contato:true,
            status_local:true,
            
        }
    },
        
    methods: {
        confirm_modal(){
            this.$emit('confirm_modal')
        },
        cancel_modal(){
            this.$emit('cancel_modal')
        },
        change1(){
            if(this.contato_button == "off"){
                this.contato_button = "on"
                this.contato = true
                this.pessoal_button = "off"
                this.pessoal = false 
            }
        },

        change2(){
            if(this.pessoal_button == "off"){
                this.pessoal_button = "on"
                this.pessoal = true
                this.contato_button = "off"
                this.contato = false 
            }
        }
        
        },
    }


</script>

<style scoped>

    .modal-shadow{
        width: 99.2vw;
        height: 70vw;
        background-color: rgba(0, 0, 0, 0.527);
        position: absolute;
        z-index: 1;
        display:flex;
        justify-content: center;
    }

    .modal{
        border-radius: 0.5vw;
        width: 30vw;
        height: 33vw;
        top: 4vw;
        background-color: rgb(255, 255, 255);
        position: absolute;
        z-index: 5;
        text-align: center;
    }  
    .modal-top{
        width: 30vw;
        height: 2vw;
        font-weight: 700;
        display: flex;
        justify-content: center;
        padding: 1.5vw 0 0 0;
        border-bottom: solid 1px rgb(186, 183, 183);
    }

    .modal-content{
        margin: 3vw 2.5vw;
        margin-bottom: 0vw;
        text-align: left;
        width: 25vw;
        height: 22vw;
        top: 2.5vw;
        background-color: rgb(255, 255, 255);
        z-index: 5;
    }

    .on{
        font-size:0.7vw;
        margin: 0.5vw;
        padding: 0.5vw;
        border-radius: 1vw;
        border: solid 1px;
        color:white;
        background-color: black;
    }

    .off{
        font-size:0.7vw;
        margin: 0.5vw;
        padding: 0.5vw;
        border-radius: 1vw;
        border-style: none;
        border: solid 1px;
        color:black;
        background-color: white;
    }

    .modalzito{
        width: 25vw;
        height: 15vw;
        border:solid 1px rgb(186, 183, 183);
        
    }

    .dados{
        display:flex;
        width: 25vw;
        height: 12vw;
    }

    .field_name{
        color:gray;
        font-size:1vw;
    }

    strong{
        font-size: 1vw;
    }

    p{
        font-size: 1.3vw;
        font-weight: 700;
        margin-left: 2vw;
        margin-bottom: 0%;
        border-bottom: solid 1px rgb(186, 183, 183);
        width: 21vw;
    }

    ol{
        list-style: none;
    }
    li{
        margin:1vw
    }

    .modal-footer{
        display: flex;
        justify-content: space-evenly;
        
        width: 30vw;
        height: 4.4vw;
        border-top: solid 1px rgb(186, 183, 183);
    }

    .cancelar_modal{
        background-color: rgb(255, 255, 255);
        border: solid 1px rgba(255, 26, 95, 0.258);
        border-radius: 0.5vw;
        color:rgb(255, 0, 0);
        width: 7vw;
        height: 3vw;
        margin-top:0.8vw;
    }

    .cancelar_modal:hover{
        background-color: rgba(255, 0, 0, 0.348);
        
    }

    .confirmar_modal{
        background-color: rgb(255, 26, 95);
        color: white;
        width: 7vw;
        border:none;
        height: 3vw;
        margin-top:0.8vw;
        border-radius: 0.5vw;
    }

    .confirmar_modal:hover{
        background-color: rgb(250, 89, 137);
        
    }

    

    

    
    
</style>