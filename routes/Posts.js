const express = require('express')
const db = require('../firebase')
const Post = require('../models/Post')

const router = express.Router()

router.get('/', async (_, res) => {
  const querySnapshot = await db.collection('posts').get()
  const docs = querySnapshot.docs.map((doc) => doc.data())
  res.json(docs)
})

router.get('/:postId', async (req, res) => {
  const postId = req.params.postId

  try {
    const docRef = await db.collection('posts').doc(postId).get()
    const data = docRef.data()
    res.json(data)
  } catch (error) {
    res.json({ error })
  }
})

router.post('/', async (req, res) => {
  const post = new Post(
    req.body.title,
    req.body.description,
    req.body.author,
    req.body.content
  )

  try {
    const docRef = await db.collection('posts').add({
      title: post.title,
      description: post.description,
      author: post.author,
      content: post.content,
    })
    res.json({ id: docRef.id, message: 'Post successfully added' })
  } catch (error) {
    res.json({ error: error })
  }
})

router.put('/:postId', async (req, res) => {
  const postId = req.params.postId
  const field = req.body.field
  const newValue = req.body.newValue

  try {
    await db
      .collection('posts')
      .doc(postId)
      .update({
        [field]: newValue,
      })
    res.json({ message: `Field ${field} successfully updated.` })
  } catch (error) {
    res.json({ error })
  }
})

router.delete('/:postId', async (req, res) => {
  const postId = req.params.postId
  try {
    await db.collection('posts').doc(postId).delete()
    res.json({ message: `Post deleted successfully` })
  } catch (error) {
    res.json({ error })
  }
})

module.exports = router
