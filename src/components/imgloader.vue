<template>
<!-- 制作一个框架包裹slider -->
  <div style="width:100%;margin:20px auto;height:100%">
      <!-- 配置slider组件 -->
      <slider :pages="pages" :sliderinit="sliderinit" @slide='slide' @tap='onTap' @init='onInit'>
          <!-- 设置loading,可自定义 -->
          <div slot="loading">loading...</div>
      </slider>
  </div>
</template>

<script>
import slider from 'vue-concise-slider'// import slider components
export default {
  name: 'imgloader',
  data () {
    return {
      // Image list
      pages: [
        {
          html: '<div class="slider1">slider1</div>',
          style: {
            'background': '#1bbc9b'
          }
        },
        {
          html: '<div class="slider2">slider2</div>',
          style: {
            'background': '#4bbfc3'
          }
        },
        {
          html: '<div class="slider3">slider3</div>',
          style: {
            'background': '#7baabe'
          }
        }
      ],
      // Sliding configuration [obj]
      sliderinit: {
        currentPage: 0,
        thresholdDistance: 500,
        thresholdTime: 100,
        infinite: 1,
        slidesToScroll: 1,
        timingFunction: 'ease',
        duration: 300
      }
    }
  },
  components: {
    slider
  },
  methods: {
    getData () {
      var that = this
      fetch('http://47.94.196.19:3000/api/picrew', {
        method: 'POST',
        body: JSON.stringify({
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(function (response) {
          return response.json()
        }).then(function (json) {
          console.log('parsed json', json)
          for (var a = 0; a < json.length; a++) {
            that.pages.push({
              html: '<img src="' + json[a].src + '" ></img>'
            })
          }
        }).catch(function (ex) {
          console.log('parsing failed', ex)
        })
    },
    // Listener event
    slide (data) {
      console.log(data)
    },
    onTap (data) {
      console.log(data)
    },
    onInit (data) {
      console.log(data)
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
