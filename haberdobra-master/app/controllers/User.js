const { User } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');
module.exports = {

   
    async create(req,res)
    {
        let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));
       User.create({
           username:req.body.username,
           password:password,
           name:req.body.name,
           surname:req.body.surname
       }).then(user=>{
           res.status(200).json({state:'success',user:user});
       })


    },
    async signin(req,res)
    {
        let { username, password } = req.body;

        User.findOne({where:{username:username}}).then(user=>{
            if (user) {
                if (bcrypt.compareSync(password, user.password)) {
                    let token = jwt.sign({ user: user }, authConfig.secret, { expiresIn: authConfig.expires });
                    res.json({ state:'success', user: user, token: token });
                }
                else {
                    res.status(200).json({state:'fail',msg:"Kullanıcı adı veya şifra yanlış !"});
                }
                
            }
            else {
                res.status(200).json({state:'fail',msg:"Bu bilgilere ait kullanıcı bulunamadı !"});
            }
        })

    }
}