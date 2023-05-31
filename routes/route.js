const express = require ('express');
const router = express.Router()


const {Books, getAllPosts, findPostById, updatePostById , deletePostById} = require ("../controller/one");


router.post("/Books",Books)


// GET /books: Retrieve all books
router.get ("/Books" , getAllPosts)

router.get('/Books/:id', findPostById);


// Update a specific post by ID
router.put('/Books/:id', updatePostById);


// Delete a specific post by ID
router.delete('/Books/:id', deletePostById);

















module.exports = router;