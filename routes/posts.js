import express from 'express'
import { getPosts, createPosts, updatePost, deletePost, likePost } from '../controllers/posts.js' 

const router = express.Router()

router.get('/', getPosts)
router.post('/', createPosts)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.patch('/:id/likePost', likePost)

// // url path and callback function
// // callback function has two parameters - request and response
// router.get('/', (req, res) => {
//     // this code block is executed 
//     // when you visit the url specified - localhost:5000/posts
//     res.send("This works!!!")
// })

export default router