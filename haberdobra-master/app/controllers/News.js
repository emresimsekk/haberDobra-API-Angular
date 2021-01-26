const {News} = require('../models/index');
module.exports = {

   
    async add(req,res)
    {
        let { title,content,thumbnail,categoryID } = req.body;
        News.create({
           categoryID:categoryID,
           title:title,
           content:content,
           thumbnail:thumbnail,
       }).then(news=>{
            res.status(200).json({state:'success',news:news});
       });
    },
    async update(req,res)
    {
        let { title,content,thumbnail,categoryID } = req.body;
        News.findByPk(req.params.id).then(news=>{
            if(news)
            {
                news.categoryID=categoryID;
                news.title=title;
                news.content=content;
                news.thumbnail=thumbnail;
                news.modifiedByID=req.user.id;

                news.save().then(update=>{

                    res.status(200).json({state:'success',msg:"Haber başarıyla güncellendi !",news:update})
                })

               
            }
            else {
                res.status(200).json({state:'fail',msg:'Aradığınız kategori bulunamadı !'});  
            }
        })
    

        
    },
    async delete(req,res)
    {   
        News.findByPk(req.params.id).then(news=>{
            if (news) {
                news.destroy().then(del=>{
                    res.status(200).json({state:'success',msg:"Haber başarıyla silindi !"});   
                });
                
            }
            else {
                res.status(200).json({state:'fail',msg:'Aradığınız haber bulunamadı !'});  
            }
        })
    },
    async getAll(req,res)
    {
        News.findAll().then(news=>{
            res.status(200).json(news);
        })
    },
    async get(req,res)
    {   
        News.findOne( {where:{id:req.params.id}}).then(news=>{
            if (news) {
                res.status(200).json(news);   
            }
            else {
                res.status(200).json({state:'fail',msg:'Aradığınız haber bulunamadı !'});  
            }
        })
    }
  

}