import express from 'express';
import mongoose from 'mongoose';
import PostModel from "../models/post.model.js"

// get all
export const getAllPosts = async (req, res)=>{
    try {
        const allPosts = await PostModel.find()
        res.status(200).json(allPosts)
    } catch (error) {
        res.status(404).end("404 Error")
        console.log("get all post error")
    }
}

// get by id
export const getPost = async (req, res)=>{
    const {postID} = req.params
    try {
        const post = await PostModel.findById(postID)
        res.status(200).json(post)
    } catch (error) {
        res.status(404).end("404 Error")
        console.log("get post error")
    }
}

// create
export const createPost = async (req, res)=>{
    const { title, content, author, tags } = req.body;
    const newPost = new PostModel({title, content, author, tags})
    try {
        await newPost.save()
        res.status(201).end("Post is saved to database.")

    } catch (error) {
        res.status(409).end("404 Error")
        console.log("create post error")
    }
}

// delete
export const deletePost = async (req, res)=>{
    const {postID} = req.params

    if (mongoose.Types.ObjectId.isValid(postID)) {
        return res.status(404).send(`No post with id: ${id}`);
    }

    await PostModel.findByIdAndRemove(postID)
    res.status(201).end("Post is deleted.")
}