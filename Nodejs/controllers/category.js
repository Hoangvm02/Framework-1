import Category from '../models/category'
import products from '../models/products'

export const listCategory = async (request,response)=>{
    try {
        const category = await Category.find().exec()
        response.json(category)
    } catch (error) {
        response.status(400).json({message:"không thể hiện thị"})
    }
}
export const listCategoryDetail = async (request,response)=>{
    try {
        const category = await Category.findOne({_id:request.params.id}).exec()
        const product = await products.find({category}).exec()
        // const product = await Product.find({category}).populate("category").exec()
        // const product = await Product.find({category}).select("-category").exec()
        response.json({category,product})
    } catch (error) {
        response.status(400).json({message:"Khong the hien thi"})
    }
}
export const createCategory = async (request,response)=>{
   try {
       const category = await Category(request.body).save()
       response.json(category)
   } catch (error) {
       response.status(400).json({message:"Không thể tạo được"})
   }
}
export const deleteCategory = async (request,response)=>{
    try {
        const category = await Category.findOneAndDelete({_id:request.params.id}).exec()
        response.json(category);
    } catch (error) {
        response.status(400).json({message:"Khong xoa duoc"})
    }
    // const category = categorys.filter(item => item.id != request.params.id)
    // response.json(category);
}
export const updateCategory = async (request,response)=>{
    try {
        const category = await Category.findOneAndUpdate({_id:request.params.id},request.body,{new:true}).exec()
        response.json(category)
    } catch (error) {
        response.status(400).json({message:"Loi khong update duoc"})
    }
    // response.json(categorys.map(item => item.id === +request.params.id? request.body:item))
}
