const express = require('express');
const router = express.Router();
const adsController = require('./controller');


router.get('/', adsController.getAds);
router.get('/:id', adsController.getAdById);
router.post('/', adsController.createAd);
router.put('/:id', adsController.updateAd);
router.delete('/:id', adsController.deleteAd);

module.exports = router;
