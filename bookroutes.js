const express= require('express')
const router= express.Router()
const controllers= require('./controllers')

router.get('/',controllers.home)
router.get('/books',controllers.getbooks)
router.post('/books',controllers.postbook)
router.get('/books/:id',controllers.getbyid)
router.put('/:id',controllers.updatebook)
router.delete('/delete/:id',controllers.deletebook)
router.get('/delete',controllers.deleteall)



module.exports=router