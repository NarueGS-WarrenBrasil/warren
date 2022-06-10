<template>
    <div class="destaques">
        <div class="destaque">
            <img id="img" loading="lazy" src="https://warren.com.br/assets/images/modules/produtos/d_carteiras.jpg" width="645" height="728" alt="foto Carteiras - warren">
            <div class="text">
                <h1 >Tá cansado de Loren ipsum?</h1>
                <h3>Então vem pra Warren!Aqui te impulsionamos pra <strong>bem longe</strong> do velhoLorem ipsum etiam congue
                 hac blandit class duis, aliquam
                 donec gravida sagittis sollicitudin primis 
                 pulvinar, egestas tincidunt lacus suscipit nibh senectus. ultricies leo aliquet 
                 potenti dolor mauris eu arcu etiam habitasse 
                 pulvinar, in netus pretium elementum scelerisque potenti 
                 urna sagittis id, curae conubia etiam  </h3>
                <router-link to="/cadastro"><BotaoMagenta msg="Cadastre-se" id="b"/></router-link>
            </div>
        </div>
        <div class="destaque" style="flex-direction: row-reverse;">
            <img id="img" loading="lazy" src="https://warren.com.br/assets/images/modules/produtos/d_bolsa.jpg" width="645" height="728" alt="foto Carteiras - warren">
            <div class="text">
                <h1 >Tá cansado de Loren ipsum?</h1>
                <h3>Então vem pra Warren!Aqui te impulsionamos pra <strong>bem longe</strong> do velhoLorem ipsum etiam congue
                 hac blandit class duis, aliquam
                 donec gravida sagittis sollicitudin primis 
                 pulvinar, egestas tincidunt lacus suscipit nibh senectus. ultricies leo aliquet 
                 potenti dolor mauris eu arcu etiam habitasse 
                 pulvinar, in netus pretium elementum scelerisque potenti 
                 urna sagittis id, curae conubia etiam  </h3>
                <router-link to="/cadastro"><BotaoMagenta msg="Cadastre-se" id="b"/></router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import BotaoMagenta from "../Botoes/BotaoMagenta.vue"
    export default {
        components:{
            BotaoMagenta
        }
        
    }
</script>

<style scoped>

    .destaques{
        margin-top:45vw;
        height: 80vw;
        line-break: a;
    }

    
    
    .destaque{
        display: flex;
        justify-content: space-evenly;
        
    }
    
    .text{
        font-size: 1.4vw;
        width: 34vw;
    }

    #img{
        width:34vw;
        height:37.4vw;
        border-radius: 0.5vw;
    }

    #b{
        width:40%;
        height: 10%;
    }

  
    #borda{
        border-bottom: solid 2px rgb(255, 0, 98);
        
    }

</style>