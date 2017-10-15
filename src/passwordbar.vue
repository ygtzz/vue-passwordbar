<template>
    <ul class="pwd-list">
        <li v-for="n in len" :class="{'active': n <= password.length}" class="pwd-item" :key="'pwd'+n"></li>
    </ul>
</template>

<script>

export default{
    name:'c-passowrdbar',
    props:{
       len:{
           type:Number,
           default:6
       },
       pwd:{
           type:String,
           required:true,
           default:''
       }
    },
    computed:{
        password(){
            return this.pwd.slice(0,this.len);
        }
    },
    methods:{
        
    }
}
</script>

<style lang="sass" scoped>
     .pwd-list {
        display: inline-block;
        border: 1px solid #ffa200;
        // position: relative;
        font-size:0;
        padding-left:0;
    }
    .pwd-item {
        display: inline-block;
        width:  100px;
        height: 88px;
        position: relative;
        border-right: 1px solid #ccc;
        &:last-of-type{
          border:0 none;
        }
        &.active{
          &:before{
              position: absolute;
              content: '';
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              width: 15px;
              height: 15px;
              border-radius: 50%;
              background-color: #000;
              margin: auto;
          }
        }
    }
</style>