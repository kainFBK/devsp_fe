<template>
  <div class="urlsend">
    <input v-model='url'/>
    <button type='button' v-on:click='click'>go</button>
    <img v-for="item in items" v-bind:src="item.src" alt=""></img>
  </div>
</template>

<script>
// var fetch = require('whatwg-fetch')
export default {
  name: 'urlsend',
  data () {
    return {
      url: '',
      items: []
    }
  },
  methods: {
    click: function (event) {
      // alert(this.url)
      console.log(this)
      var that = this
      fetch('http://47.94.196.19:3000/api/picrew', {
        method: 'POST',
        body: JSON.stringify({
          url: that.url
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(function (response) {
          return response.json()
        }).then(function (json) {
          console.log('parsed json', json)
          that.items = json
        }).catch(function (ex) {
          console.log('parsing failed', ex)
        })
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
