const Router = require('express')
const router = new Router()
const postController = require('../controller/post_controller')

router.post('/post', postController.createPost)
router.put('/post/:id', postController.updatePost)
router.get('/post/:id', postController.getOnePost)
router.get('/posts/', postController.getAllPosts)
router.delete('/post/:id', postController.deletePost)

router.get('/posts_filter/:id', postController.getPostsByLabel)
module.exports = router
