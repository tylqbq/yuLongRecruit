<template>
  <div class="hello">
    {{msg}}
      <form  action="welcome" method="get">
          XXXX<input type="text" name="username"> <br>
          口令：<input type="password" name="userpass"><br>
          <input type="reset" value="重置">
          <input type="submit" value="提交"><br>
  </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
  color: #42b983;
}
</style>
