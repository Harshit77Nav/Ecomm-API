const EcommModel = require("../model/model")
const router = require("express").Router();


router.get("/products", async(req,res)=>{
    try {
        const result = await EcommModel.find();
        res.json({
            status:"successfull",
            result
        })
    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
})

router.get("/products/:id", async(req,res) =>{
    try {
        const {id} = req.params;
        const result = await EcommModel.findOne({_id:id});
        res.json({
            status:"successfull",
            result
        })
    } catch (error) {
        res.status(404).json({
            status:"failed",
            message:error.message
        })        
    }
})

router.post("/products", async(req,res)=>{
    try {
        const {name, description, price, category} = req.body;
        const result = await EcommModel.create({
            name:name,
            description:description,
            price:price,
            category:category
        })
        res.json({
            status:"successfull",
            result
        })
    } catch (error) {
        res.status(403).json({
            status:"failed",
            message:error.message
        })
    }
})

router.put("/products/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const {name, description, price, category} = req.body;
        const result = await EcommModel.updateOne({_id:id},{
            name:name,
            description:description,
            price:price,
            category:category
        })
        res.json({
            status:"successfull",
            result
        })
    } catch (error) {
        res.status(403).json({
            status:"failed",
            message:error.message
        })
    }
})

router.delete("/products/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const result = await EcommModel.deleteOne({_id:id});
        res.json({
            status:"successfull",
            result
        })
    } catch (error) {
        res.status(403).json({
            status:"failed",
            message:error.message
        })
    }
})

module.exports = router;