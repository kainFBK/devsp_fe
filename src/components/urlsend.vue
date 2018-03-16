<template>
  <div class="urlsend">
    <input v-model='url'/>
    <button type='button' v-on:click='click'>go</button>
    <button type='button' v-on:click='click3'>upload</button>
    <div v-for="item in items" class='nomask'>
    <img v-bind:src="item.src" alt="" v-on:click='click2'></img>
    </div>
  </div>
</template>

<script>
// var fetch = require('whatwg-fetch')
export default {
  name: 'urlsend',
  data () {
    return {
      url: '',
      items: [],
      select: []
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
    },
    click2: function (event) {
      if (this.select.indexOf(event.target.src) === -1) {
        this.select.push(event.target.src)
        event.target.parentNode.className = 'mask'
      } else {
        this.select.splice(this.select.indexOf(event.target.src), 1)
        event.target.parentNode.className = 'nomask'
      }
      console.log(this.select)
    },
    click3: function (event) {
      var that = this
      fetch('http://47.94.196.19:3000/api/spdpic', {
        method: 'POST',
        body: JSON.stringify({
          thumb: that.select[0],
          albumname: '新建图集',
          piclist: that.select,
          num: that.select.length
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(function (response) {
          return response.json()
        }).then(function (json) {
          console.log('parsed json', json)
          alert('添加成功')
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

.mask{
  opacity:0.4;
  filter: brightness(0.5);
  float: left;
}

.nomask{
  float: left;
}
</style>
