import express from "express";
import { createCategory, deleteCategory, listCategory, listCategoryDetail, updateCategory } from "../controllers/category";
const route = express.Router();

// const category = [
//   { id: 1, name: "category 1" },
//   { id: 2, name: "category 2" },
//   { id: 3, name: "category 3" },
// ];
// danh sách
route.get("/category",listCategory);
// category detail
route.get("/category/:id",listCategoryDetail);
// Thêm sản phẩm
route.post("/category",createCategory);
// xóa sp
route.delete("/category/:id",deleteCategory);
// sửa
route.put("/category/:id",updateCategory);
export default route;
