const json1 = require('./center_codes.json')
const express = require('express')
const app = express()
var cors = require('cors')
const port = 3001
const axios = require('axios');

app.use(cors())

app.use('/test',async function(req,res){
        test_array = []
        await axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=519&date=31-03-2021',
        {headers: {'user-agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Mobile Safari/537.36'}})
          .then(response => {
            test_array.push(response.data)
            console.log("Pushed0")
          })
          .catch((error) => {
            console.log(error)
          })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })