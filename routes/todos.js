const {Router} = require('express');
const router = Router();

router.get('/', (req,res) => {
    res.render('index',{
        title: 'Danidoo'
    })
})
router.get('/create', (req,res) => {
    res.render('create',{
        title: 'Create todo'
    })
})

module.exports = router