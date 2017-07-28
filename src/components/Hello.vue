<template>

  <div class="hello">
   
   <br>
   <img class="broker_logo" src="http://logos-download.com/wp-content/uploads/2016/12/ERA_Real_Estate_logo.png" alt="ERA logo">
    <h1>{{ msg }}</h1>
    <h2>Our brand new online magazine</h2>
    <router-link to="introduction">Open Magazine</router-link>

    <nav>
      <div class="arrow_right">></div>
    </nav>

  </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'ERA Magazine'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  background-image:url('../assets/mag_cover.jpg');
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

h1, h2 {
  font-weight: normal;
  color: #EFEFEF;
}


nav {
  position: relative;
}

nav .arrow_right {
  background: #FFF;
  color: #0b3279;
  font-weight: bold;
  position: absolute;
  right: 0;
  width: 50px;
  font-size: 2em;
  height: 50px;
  text-align: center;
  padding-top: 5px;
  display: inline-block;
  cursor: pointer;
}

nav .arrow_right:hover {
  background: #0b3270;
  color: #FFF;
}



.broker_logo {
  width: 100px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #FFF;
  font-weight: bold;
  text-decoration: none;
  border: 5px solid white;
  padding: 8px;
  text-transform: uppercase;
}
a:hover {
  background-color: #FFF;
  color: #0b3279;
}


.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .35s;
}

.fade-enter-active {
  transition-delay: .35s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}


</style>
