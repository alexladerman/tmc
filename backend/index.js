const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { pool } = require('./config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const getOrders = (request, response) => {
  pool.query('SELECT * FROM orders', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addOrder = (request, response) => {
  const { user_email, name, email, phone, fromaddress, toaddress, movingdate, message } = request.body
  
  pool.query('INSERT INTO orders (user_email, name, email, phone, fromaddress, toaddress, movingdate, message) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [user_email, name, email, phone, fromaddress, toaddress, movingdate, message], error => {
    if (error) {
      throw error
    }
    response.status(201).json({ status: 'success', message: 'Order added.' })
  })
}

// TODO implement remaining of CRUD functions

// const deleteOrder = (request, response) => {
// }

// const findOrder = (request, response) => {
// }

// const updateOrder = (request, response) => {
// }

app
  .route('/orders')
  // GET endpoint
  .get(getOrders)
  // POST endpoint
  .post(addOrder)

// Start server
app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`)
})