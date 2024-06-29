const latitude = '56.3595'
const longitude = '44.0596'

const degrees = document.querySelector('.degrees')

const temp = fetch(`https://api.open-meteo.com/v1/forecast?latitude=56.3595&longitude=44.0596&current=temperature_2m&hourly=temperature_2m`)

temp.then(res => {
    const result = res.json()
    return result
}).then(res => {
    console.log(res)
    degrees.innerHTML = res.current.temperature_2m 
})