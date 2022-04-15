const {validationResult} = require('express-validator');
const BlogPost = require('../models/blog');
const path = require('path');
const fs = require('fs');

exports.createBlogPost = (req, res, next) => {
    // Validation
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        const err = new Error('Invalid Value');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }

    if(!req.file) {
        const err = new Error('Image Harus diupload');
        err.errorStatus = 422;
        err.data = errors.array();
        throw err;
    }

    const title = req.body.title;
    const image = req.file.path;
    const body = req.body.body;

    const Posting = new BlogPost({
        title: title,
        image: image,
        body: body,
        author: {uid: 1, name: 'Gusryl'}
    })

    Posting.save()
    .then(result => {
        res.status(201).json({
            message: "Create Blog Post Success",
            data: result
        });  
    }).catch(err => {
        console.log('err: ', err)
    });   
}

exports.getAllBlogPost = (req, res, next) => {
    // Pagination use JavaScript
    const currentPage = req.query.page || 1;
    const perPage = req.query.perPage || 4;
    let totalItems;

    BlogPost.find()
    .countDocuments()
    .then(count => {
        totalItems = count;
        return BlogPost.find()
        .skip((parseInt(currentPage) - 1) * parseInt(perPage))
        .limit(parseInt(perPage));
    })
    .then(result => {
        res.status(200).json({
            message: 'Data Blog Post Berhasil dipanggil',
            data: result,
            total_data: parseInt(totalItems),
            per_page: parseInt(perPage),
            current_page: parseInt(currentPage)
        })
    }).catch(err => {
        next(err)
    })
}

exports.getBlogPostById = (req, res, next) => {
    const postId = req.params.postId;
    BlogPost.findById(postId)
    .then(result => {
        if(!result) {
            const error = new Error('Blog Post tidak ditemukan!');
            error.errorStatus = 404;
            throw error;
        }
        res.status(200).json({
            message: 'Data blog post berhasil dipanggil',
            data: result
        })
    }).catch(err => {
        next(err);
    })
}

exports.updateBlogPost = (req, res, next) => {
    // Validation
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        const err = new Error('Invalid Value');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }

    if(!req.file) {
        const err = new Error('Image Harus diupload');
        err.errorStatus = 422;;
        throw err;
    }
 
    const title = req.body.title;
    const image = req.file.path;
    const body = req.body.body;
    const postId = req.params.postId;

    BlogPost.findById(postId)
    .then(post => {
        if(!post) {
            const err =  new Error('Blog post tidak ditemukan!')
            err.errorStatus = 404;
            throw err;
        }

        post.title = title;
        post.image = image;
        post.body = body;

        return post.save();
    }).then(result => {
        res.status(200).json({
            message: 'Update Success',
            data: result,
        })
    }).catch(err => {
        next(err);
    });    
}

exports.deleteBlogPost = (req, res, next) => {
    const postId = req.params.postId;

    BlogPost.findById(postId)
    .then(post => {
        if(!post) {
            const error = new Error('Blog Post tidak ditemukan!')
            error.errorStatus = 404;
            throw error;
        }
        // delete a image
        removeImage(post.image);
        return BlogPost.findByIdAndRemove(postId);
    })
    .then(result => {
        res.status(200).json({
            message: 'Hapus blog post berhasil!',
            data: result,
        })
    })
    .catch(err => {
        next(err);
    })
}

const removeImage = (filePath) => {
    //console.log('filePath', filePath);
    //console.log('directory name', __dirname);
    filePath = path.join(__dirname, '../..', filePath);
    fs.unlink(filePath, err => console.log(err));
}