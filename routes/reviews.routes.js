const Router = require('express')
const router = new Router()
const reviewsController = require('../controllers/reviews.controller.js')

router.post('/reviews_static', reviewsController.createReview)
router.get('/reviews_static', reviewsController.getReview)
// router.get('/reviews',)
// router.put('/reviews',)
router.delete('/reviews_static/:id', reviewsController.deleteOneReview)

module.exports = router