import express from "express"
import {getAllPosts, createPost, getPost, deletePost} from "../controller/post.controller.js"

const router = express.Router()

router.get("/", getAllPosts)
router.post("/", createPost)
router.get("/:id", getPost)
router.delete("/:id", deletePost)


export default router