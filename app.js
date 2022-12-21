const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

app.use(express.json({ limit: '50mb' }));

app.get('/home', (req, res) => {
    res.send({ 'message': 'Compare Base64 API!' })
})
app.post('/compare', async (req, res) => {
    const body = req.body
    try {

        const response = await axios.post('http://192.168.20.221:1800/insocio/compare-image', body)

        res.send({ message: 'Success', data: response.data })
    } catch (error) {
        res.status(409).send({
            message: error.message || "Some error while comparing image."
        })
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${ port }`)
})