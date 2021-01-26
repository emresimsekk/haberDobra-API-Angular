const {Category} = require('../models/index');
module.exports = {

   
    async add(req,res)
    {
        let { name } = req.body;
       Category.create({
           name:name,
        
       }).then(category=>{
            res.status(200).json({state:'success',category:category});
       });
    },
    async update(req,res)
    {
        Category.findByPk(req.params.id).then(category=>{
            if(category)
            {
                category.name=req.body.name;
                category.modifiedByID=req.user.id;

                category.save().then(update=>{

                    res.status(200).json({state:'success',msg:"Kategori başarıyla güncellendi !",category:update})
                })

               
            }
            else {
                res.status(200).json({state:'fail',msg:'Aradığınız kategori bulunamadı !'});  
            }
        })
    

        
    },
    async delete(req,res)
    {   
        Category.findByPk(req.params.id).then(category=>{
            if (category) {
                category.destroy().then(del=>{
                    res.status(200).json({state:'success',msg:"Kategori başarıyla silindi !"});   
                });
                
            }
            else {
                res.status(200).json({state:'fail',msg:'Aradığınız kategori bulunamadı !'});  
            }
        })
    },
    async getAll(req,res)
    {
        Category.findAll().then(category=>{
            res.status(200).json(category);
        })
    },
    async get(req,res)
    {   
        Category.findOne( {where:{id:req.params.id}}).then(category=>{
            if (category) {
                res.status(200).json({state:'success',category:category});   
            }
            else {
                res.status(200).json({state:'fail',msg:'Aradığınız kategori bulunamadı !'});  
            }
        })
    }
  

}