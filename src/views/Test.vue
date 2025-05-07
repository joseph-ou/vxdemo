<script>
  export default{
    name:'TesT',
    data(){
      return {
        dataset:null,

      }
    },
  }
</script>

<template>
<div class="demo-form-inline">
  <div class="row1">
    <div class="company"></div>
    <div class="pic"></div>
    <div class="pic"></div>
    <div class="pic"></div>
<!--    <div class="pic"></div>-->
  </div>

  <div class="row2">
    <div class="title">
      <div>cellphone</div>
      <div>more content</div>
    </div>
    <div class="pic-list">
        <div class="big"></div>
        <div class="right-list">
          <div class="right-list-element"></div>
          <div class="right-list-element"></div>
          <div class="right-list-element"></div>
          <div class="right-list-element"></div>
          <div class="right-list-element"></div>
          <div class="right-list-element"></div>
          <div class="right-list-element"></div>
          <div class="right-list-element"></div>
        </div>



    </div>



  </div>

  <div class="course-list">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div>

</div>
</template>

<style scoped>
    .demo-form-inline {
      width: 80%;
      margin: 0 auto;

    }

    .row1{
      //border:1px solid red;
      //width: 400px;
      //height: 300px;
      //margin:auto;
      //margin-left: 200px;


      display: flex;
      flex-direction: row;
      justify-content: space-between;

      //align-items: center;
      //flex-wrap: wrap;/*元素过多时换行*/

      //align-content: flex-start;/*多行时元素对其*/


    }

    .row1 .company{
      //border:1px solid blue;
      //padding: 4px;
      width: 210px;
      height: 180px;
      //text-align: center;
      //line-height: 40px;
      background-color: saddlebrown;

    }

    .row1 .pic{
      width: 266px;
      height: 180px;
      margin: 0 10px;
      //border: 1px solid red;
      background-color: cadetblue;
    }

    .row2{
      height: 380px;
      margin: 10px 0;

    }


    .row2 .title{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .row2 .pic-list{
      display: flex;
      flex-direction: row;
      justify-content: space-between;


    }



    .row2 .pic-list  .big{
      width: 266px;
      height: 380px;
      margin-right: 10px;
      background-color: skyblue;
    }


    .row2 .pic-list .right-list{
      display: flex;
      flex-direction: row;
      background-color: antiquewhite;
      flex-grow: 1;
      justify-content: space-between;
      flex-wrap: wrap;/*元素过多时换行*/

      align-content: flex-start;/*多行时元素对其*/

    }

    .row2 .pic-list .right-list-element{
      height: 160px;
      width: 160px;
      margin: 10px;
      background-color: hotpink;
    }

    .course-list{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 20px 0;
    }

    .course-list .item{
      width: 24%;
      height: 100px;
      background-color: cadetblue;
      margin-top: 10px;


    }

    .course-list .item:last-child:nth-child(4n-1){
      margin-right: calc(24% + 4%/3);
    }


    .course-list .item:last-child:nth-child(4n-2){
      margin-right: calc(48% + 8%/3);
    }



</style>