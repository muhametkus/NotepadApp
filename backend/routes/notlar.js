const express=require('express');
const NotModel=require('../models/notModel');
const { notOlustur, notlarGetir, notGetir, notSil, notGuncelle } = require('../controllers/notController');
const router=express.Router()

router.get('/', notlarGetir)

//listele
router.get('/:id',notGetir)

//ekle
router.post('/', notOlustur)

//sil
router.delete('/:id',notSil)

//guncelle
router.patch('/:id',notGuncelle)


module.exports=router;