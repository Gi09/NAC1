const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async()=>{
    const result = await Product.find({active: true})
    return result
}

exports.create = async(data) => {
    let produto = Product(data)
    await produto.save()
}

exports.getByCategoryId = async (id) => {
    const result = await Product.find({categoryId: id}, '_id title description categoryId price _id active');

    return result;
}

exports.update = async(id, data) =>{
    await Product.findByIdAndUpdate(id, {
        $set:{
            title: data.title,
            categoryId: data.categoryId,
            description: data.description,
            salary: data.salary,
            price: data.price,
            position: data.position
        }
    })
}