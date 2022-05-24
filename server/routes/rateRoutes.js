const express = require('express');
const rateRoute = express.Router();
const rateController = require('../controller/rateController')
// const {upload, upload2} = require('../middlewares/multerUpload')


rateRoute.get('/',rateController.getRate );
rateRoute.get('/2',rateController.getJokeAxios);
// imageRoute.post('/get',imageController.filterImages )
// imageRoute.delete('/:id',imageController.deleteImage)
// imageRoute.delete('/delete-all/:id',imageController.deleteAllImagesByUser)
// imageRoute.post('/',imageController.uploadImage )
// imageRoute.post('/filter-images',imageController.filterImages)





module.exports = rateRoute;
