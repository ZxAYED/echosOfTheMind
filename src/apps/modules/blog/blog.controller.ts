
import catchAsync from "../../utils/catchAsync";
import { blogService } from "./blog.service";


const createBlog = catchAsync(async (req, res) => {
    const result = await blogService.createBlogIntoDb(req.headers.authorization as string, req.body)
    res.json({
        success: true,
        message: 'Blog created successfully',
        statusCode: 201,
        data: result
    })
})

const getAllBlogs = catchAsync(async (req, res) => {
    const result = await blogService.getAllBlogsFromDb()
    res.json({
        success: true,
        message: 'Blogs retrieved successfully',
        statusCode: 200,
        data: result
    })
})





export const blogController = {
    createBlog, getAllBlogs
}