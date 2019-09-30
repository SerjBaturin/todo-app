const express = require('express')

const app = express()

app.use(express.static('app/build'))

app.listen(3000, () => {
  console.log('OK ====== ', process.pid)
})
