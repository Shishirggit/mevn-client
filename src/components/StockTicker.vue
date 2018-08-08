<template>
<div class="ticker">
  <article class="media">
      <span class="breaking-news media-left">Breaking News</span>
      <div class="media-content">
        <span class="time">11:36</span>
        <transition name="fade" tag="div" mode="out-in">
          <a class="news" href="#" v-if="news[0]" key="0">There has been a massive explosion at the cheese factory</a>
          <a class="news" href="#" v-if="news[1]" key="1">Bob is on fire</a>
          <a class="news" href="#" v-if="news[2]" key="2">Look its Superman!</a>
        </transition>
      </div>
   </article>
</div>
</template>

<script>
export default {
  name: 'StockTicker',
  data () {
    return {
      tickerLocation: 0,
      news: [true, false, false]
    }
  },
  created () {
    setInterval(this.updateTicker, 5000)
  },
  methods: {
    updateTicker () {
      var removed = this.news.pop()
      this.news.unshift(removed)
    }
  }
}
</script>

<style scoped>
    .breaking-news {
  background-color: #33A3F1;
  color: #ffffff;
  border-radius: 10px 50px 50px 10px;
  padding: 5px;
}

.media-content {
  padding: 5px;
}

.time {
  color: #33A3F1;
}

.news {
  color: #666666;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
