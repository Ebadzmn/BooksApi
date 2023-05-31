const express = require ('express');
const router = express.Router()


const {Books, getAllPosts, findPostById, updatePostById , deletePostById} = require ("../controller/one");


router.post("/Books",Books)


// GET /books: Retrieve all books
router.get ("/books" , getAllPosts)

router.get('/books/:id', findPostById);


// Update a specific post by ID
router.put('/books/:id', updatePostById);


// Delete a specific post by ID
router.delete('/books/:id', deletePostById);

















module.exports = router;