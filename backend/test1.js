const express = require('express')
const app = express()
const moment = require('moment')
const port = 3001
const TelegramBot = require("node-telegram-bot-api");
const cron = require('node-cron')
const cowin = require('./data.json')
const axios = require('axios');

const array = ['@cowinnashik', '@cowinpune']

app.use('/test1', function (req, res) {
  var data = ''
  const timer = ms => new Promise(res => setTimeout(res, ms))
  const token = "1841778451:AAFMjpOWjVc2UwMmbEBVD5hPXL0sm-859hI";
  const bot = new TelegramBot(token);
  const chatId = "@cowinnashik";
  
    
  // cron.schedule('1 * * * * *', async function () {
    const test1 = async () => {
    collect = []
    data2send = ''

    await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=389&date=${moment().format('DD-MM-YYYY')}`,
      { headers: { 'user-agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Mobile Safari/537.36' } })
      .then(response => {
        if(response.data.sessions != []){
        data2send = { allData: response.data, district: `@cowin${response.data.sessions[0].district_name.toLowerCase()}test` }
        collect.push(data2send)
        data2send = ''
        console.log("Pushed0")
        }
      })
      .catch((error) => {
        console.log(error)
      })
      
    await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=363&date=${moment().format('DD-MM-YYYY')}`,
      { headers: { 'user-agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Mobile Safari/537.36' } })
      .then(response => {
        if(response.data.sessions != []){
        data2send = { allData: response.data, district: `@cowin${response.data.sessions[0].district_name.toLowerCase()}test` }
        collect.push(data2send)
        console.log("Pushed1")
        }
      })
      .catch((error) => {
        console.log(error)
      })
    load(collect)
  // })
    }
    test1()
    
  async function load(collect) {
    console.log(collect)
    for (value of collect) {
      for (val of value.allData.sessions) {
        data += `Address: ${val.name} ${val.district_name} ${val.pincode}\n
        Available Capacity :${val.available_capacity}\n
        Age Limit:${val.min_age_limit}`

        await timer(6000)
        bot.sendMessage(value.district, data)
        data = ''
        console.log('Sent')
      }
    }
  }
})

app.listen(port)