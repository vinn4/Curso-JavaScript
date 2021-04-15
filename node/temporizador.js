const schedule = require('node-schedule')


const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = new Date().getHours()
regra.second = 2

const tarefa1 = schedule.scheduleJob(regra, function () {
    console.log('executando tarefa 1', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('cancelando tarefa1')
},20000)

const regra2 = new schedule.RecurrenceRule()
regra2.dayOfWeek = [new schedule.Range(1,5)]
regra2.hour = new Date().getHours()
regra2.second = 30


const tarefa2 = schedule.scheduleJob(regra2, function(){
    console.log('executando tarefa 2', new Date().getSeconds())
})