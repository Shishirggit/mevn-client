// import StockPrice from '@/services/StockPrice'
import Api from '@/services/Api'

export default {
  getStockPrice (song) {
    // return StockPrice().get('stock/niftyStockWatch.json')
    return Api().get('stockApi')
  }
}
