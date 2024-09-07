const Ad = require('./model');

// Get all ads
exports.getAds = async (req, res) => {
    try {
        const ads = await Ad.find();
        res.status(200).json(ads);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get single ad by ID
exports.getAdById = async (req, res) => {
    try {
        const ad = await Ad.findById(req.params.id);
        if (!ad) {
            return res.status(404).json({ message: 'Ad not found' });
        }
        res.status(200).json(ad);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create new ad
exports.createAd = async (req, res) => {
    const { title, description, price } = req.body;
    const newAd = new Ad({
        title,
        description,
        price,
    });

    try {
        const savedAd = await newAd.save();
        res.status(201).json(savedAd);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update an existing ad
exports.updateAd = async (req, res) => {
    try {
        const updatedAd = await Ad.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        if (!updatedAd) {
            return res.status(404).json({ message: 'Ad not found' });
        }

        res.status(200).json(updatedAd);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete an ad
exports.deleteAd = async (req, res) => {
    try {
        const deletedAd = await Ad.findByIdAndDelete(req.params.id);
        if (!deletedAd) {
            return res.status(404).json({ message: 'Ad not found' });
        }

        res.status(200).json({ message: 'Ad deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
