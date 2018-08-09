<template><div>
<button @click="getStockDataSocket">Get Data Socket </button>
<br>
  <StockTicker />
 <v-data-table
    :headers="headers"
    :items="stockPrice"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.symbol }}</td>
      <td class="text-xs-right">{{ props.item.open }}</td>
      <td class="text-xs-right">{{ props.item.high }}</td>
      <td class="text-xs-right">{{ props.item.low }}</td>
      <td class="text-xs-right"><span v-bind:style="style">{{ props.item.ltP }}</span></td>
      <td class="text-xs-right">{{ props.item.per }}</td>
    </template>
</v-data-table>
</div></template>

<script>
// import StockPriceService from '@/services/StockPriceService'
import Panel from '@/components/Panel'
import StockTicker from '@/components/StockTicker'
import io from 'socket.io-client'

export default {
  name: 'StockPrice',
  components: {Panel, StockTicker},
  data () {
    return {
      headers: [
        {
          text: 'Symbol',
          align: 'left',
          value: 'symbol'
        },
        { text: 'Open', value: 'open', align: 'right' },
        { text: 'High', value: 'high', align: 'right' },
        { text: 'Low', value: 'low', align: 'right' },
        { text: 'Last Trading Price', value: 'ltp', align: 'right' },
        { text: 'Net Change', value: 'ptsc', align: 'right' }
      ],
      stockPrice: [],
      style: this.styleObject,
      styleObject: {
        'background-color': 'white'
      },
      styleChangeObject: {
        'background-color': 'lightblue',
        'fontSize': '13px'
      },
      socket: null
    }
  },
  async mounted () {
    this.socket = io('https://mevn-server.herokuapp.com', {secure: true, rejectUnauthorized: false})
    // this.socket = io('/api/', {secure: true, rejectUnauthorized: false})
    // this.getStockDataSocket()
    // this.stockPrice = await this.getStockData()
  },
  methods: {
  /*   getStockData () {
      return new Promise(() => {
        var startTime = new Date().getTime()
        var interval = setInterval(() => {
          if (new Date().getTime() - startTime > 300000) {
            clearInterval(interval)
            return
          }
          StockPriceService.getStockPrice().then(response => {
            this.style = this.styleChangeObject
            this.stockPrice = response.data.data
            setTimeout(() => {
              this.style = this.styleObject
            }, 2000)
          })
        }, 60000)
      })
    } */
    getStockDataSocket () {
      this.socket.on('returnStock', (apiData) => {
        this.style = this.styleChangeObject
        this.stockPrice = apiData
        setTimeout(() => {
          this.style = this.styleObject
        }, 2000)
      })
    }
  }
}
</script>

<style>

</style>
