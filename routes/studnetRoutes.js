var express=require('express');
var router=express.Router()



router.get('/getStudnets',(req,res)=>{
    res.render('listeStudents.twig')
})

router.get('/UpdateStudnet',(req,res)=>{
    res.render('UpdateStudnet.twig')
})
router.get('/stundentbyid/:id',(req,res)=>{
    var id=req.params.id;
    console.log(id);
    res.render('detail.twig',{id:req.params.id})
})
module.exports = router;