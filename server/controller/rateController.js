const getRate = async (req,res) => {
    try {
        // const images = await imageService.getMongoImages()
        // res.status(200).send(images);
        const message = 'ok'
        res.status(200).send(message)
        console.log('%c Oh my heavens rates! ', 'background: #222; color: #bada55');
    } catch (e) {
        res.status(400).json({message: 'Images not found'+ e.message})
    }
}


module.exports = { getRate}