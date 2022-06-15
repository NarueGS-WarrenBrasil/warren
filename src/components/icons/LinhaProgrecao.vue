<template>
  
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 810.4 28.6">
      <circle @click="click1" class="on" cx="10.3" cy="15.2" r="10.3"/>
      <circle @click="click1" class="b" cx="10.2" cy="15.3" r="9.1"/>
      <circle @click="click1" class="on" cx="10.3" cy="15.3" r="7.3"/>
      <g>
      <rect class="c" x="21.6" y="14.5" width="763" height="1.63"/>
      <rect :class="progrecao" class="on" x="21.6" y="14.5" width="0" height="1.63"/>
     
      <circle :class="two" cx="404.3" cy="14.7" r="10.3"/>
      <circle class="b" cx="404.2" cy="14.7" r="9.1"/>
      <circle :class="two" cx="404.3" cy="14.8" r="7.3"/>
      </g>
      <circle :class="three" cx="796.4" cy="14.5" r="10.3"/>
      <circle class="b" cx="796.3" cy="14.6" r="9.1"/>
      <circle :class="three" cx="796.4" cy="14.6" r="7.3"/>
      <rect :class="three" x="795.7" width="1.2" height="3.06"/>
      <rect class="a" x="795.7" y="25.5" width="1.2" height="3.06"/>
      <rect :class="three" x="891.8" y="58.8" width="1.2" height="3.06" transform="translate(869.3 -877.9) rotate(90)"/>
    </svg>
  </div>

</template>

<script>
export default {
  data() {
    return {
      
    }
  },

  props:{
    progrecao:{
      type:String,
      required:true
    },
    two:{
      type:String,
      required:true
    },
    three:{
      type:String,
      required:true
    }
    
  },
  methods: {
    click1(){
      this.$emit('click1')
    }
    
  },
}
</script>

<style scoped>
      .on {
        fill: #ff0061;
      }

      .off{
        fill:gray
      }

      .b { 
        fill: #f9f9f9;
      }
      .c{
        fill:rgb(186, 183, 183)
      }

      .first{
        animation-name:first;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease;
      }

      @keyframes  first{
        from{ width: 0px;}
        to{ width: 372px;}
      }

      .final{
        animation-name:final;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease;
      }

      @keyframes  final{
        from{ width: 72px;}
        to{ width: 763px;}
      }



      svg{
        width: 30vw;
      }

      
</style>

