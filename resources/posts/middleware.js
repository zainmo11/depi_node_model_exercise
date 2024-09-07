const Post = require('./model');

exports.checkPost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        if (req.user_id !== post.user_id.toString()) {
            return res.status(401).json({ message: 'Unauthorized: Invalid user' });
        }
        next();
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};
