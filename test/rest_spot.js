const { testRest } = require('./utils');

const exchanges = ['okex'];// , ''. 'hitbtc' 'bittrex'
const tasks = [
  // {
  //   fn: 'order',
  //   params: {
  //     pair: 'OKB-BTC',
  //     amount: 2,
  //     // price: 7155,
  //     side: 'BUY',
  //     type: 'MARKET'
  //   },
  //   name: '交易'
  // },
  // {
  //   fn: 'fastOrder',
  //   params: {
  //     pair: 'ETH-BTC',
  //     amount: 0.02,
  //     price: 0.05,
  //     side: 'BUY',
  //     type: 'LIMIT'
  //   },
  //   name: '交易'
  // },
  // {
  //   fn: 'cancelAllOrders',
  //   params: {
  //     pair: 'OKB-USDT'
  //   },
  //   name: '取消正在执行中的订单'
  // },
  // {
  //   fn: 'activeOrders',
  //   params: {
  //     pair: 'OKB-USDT'
  //   },
  //   name: '正在执行中的订单'
  // },
  // {
  //   fn: 'finishOrders',
  //   params: {
  //     pair: 'OKB-USDT'
  //   },
  //   name: '已经完成的订单'
  // },
  // {
  //   fn: 'orderInfo',
  //   params: {
  //     pair: 'OKB-BTC',
  //     order_id: '11931810',
  //     side: 'SELL'
  //   },
  //   name: '交易'
  // },
  // {
  //   fn: 'cancelOrder',
  //   params: {
  //     pair: 'ETH-BTC',
  //     side: 'BUY',
  //     order_id: '5ab781719dda152895660f43'
  //   },
  //   name: '取消交易'
  // },
  // {
  //   fn: 'pairs',
  //   params: {},
  //   name: '交易对信息'
  // },
  // {
  //   fn: 'coins',
  //   params: {},
  //   name: '币信息'
  // },
  // {
  //   fn: 'ticks',
  //   params: { pair: 'OKB-USDT' },
  //   name: 'ticks数据'
  // },

  // {
  //   fn: 'balances',
  //   params: {},
  //   name: '账户余额'
  // },
  // {
  //   fn: 'futureBalances',
  //   params: {},
  //   name: '合约(全仓)余额'
  // },
  {
    fn: 'depth',
    params: { pair: 'ETH-BTC' },
    name: '深度'
  },
/// {
//   fn: 'orderBook',
//   params: { pair: 'ETH-BTC' },
//   name: 'orderBook数据'
// }
];


testRest(exchanges, tasks);
