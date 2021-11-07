import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { createServer, Model } from 'miragejs'
createServer({
  models: {
    transactions: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: '2021-02-12',
        },
        {
          id: 2,
          title: 'Alugel casa ',
          type: 'withdraw',
          category: 'Casa',
          amount: 400,
          createdAt: '2021-02-12',
        },
      ],
    })
  },
  routes() {
    this.namespace = 'api'
    this.get('/transactions', (schema) => {
      return schema.all('transactions')
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      console.log('daat', data)
      return schema.create('transactions', data)
    })
  },
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
