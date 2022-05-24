const axios = require('axios');

API_JOKE='https://geek-jokes.sameerkumar.website/api?format=json'
API_JOKE2 ='https://api.jokes.one/jod'

let options = {
    url: 'https://geek-jokes.sameerkumar.website/api?format=json',
    method: 'GET'
}

const getRate = async (req,res) => {
    try {
        // const images = await imageService.getMongoImages()
        // res.status(200).send(images);
        const message = 'ok - this is a quote '
        res.status(200).send(message)
        console.log('%c Oh my heavens rates! ', 'background: #222; color: #bada55');
    } catch (e) {
        res.status(400).json({message: 'Images not found'+ e.message})
    }
}

const getRate2 = async (req,res) => {
    try {
        // const images = await imageService.getMongoImages()
        // res.status(200).send(images);
        const message = 'ok - this is a quote22 222  '
        res.status(200).send(message)
        console.log('%c Oh my heavens rates! ', 'background: #222; color: #bada55');
    } catch (e) {
        res.status(400).json({message: 'Images not found'+ e.message})
    }
}

const getJokeAxios = async (req, res)=> {
    try {
        let responseAxios = await axios.get(API_JOKE, options)
        console.log('axios',responseAxios.data)
        res.status(200).send(responseAxios.data)
        return responseAxios
    }catch (e) {
        console.log(e);
        res.status(400).json({message: 'Images not found'+ e.message})
    }
}


module.exports = { getRate , getRate2, getJokeAxios}