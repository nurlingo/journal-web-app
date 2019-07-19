

module.exports = {
    posts: async function(req, res) {
        try {
            const posts = await Post.find()
            return res.send(posts)
        } catch(err) {
            return res.serverError(err.toString())
        }

        // Post.find().exec(function(err, posts) {
        //     if (err) {
        //          return res.serverError(err.toString())
        //     }
        //     sails.log.debug('finished fetching all Post objects')
        //     return res.send(posts)
        // })
    },

    create: function(req, res) {

        const title = req.body.title
        const description = req.body.description
        
        sails.log.debug(title + " " + description)

        Post.create({title: title, description: description}).exec( function(err) {
            if (err) {
                return res.serverError(err.toString())
            }
            sails.log.debug('finished creating Post object')
            return res.redirect('/home')
        })
        
    },

    findById: function(req, res) {
        const postId = req.param('postId')
        
        const filteredPosts = allPosts
            .filter(p => {return p.id == postId})

        if (filteredPosts.length > 0) {
            res.send(filteredPosts[0])
        } else {
            res.send('Failed to find post by id: ' + postId)
        }

        res.send(postId)
    },

    delete: async function(req, res) {
        const postId = req.param('postId')
        
        try {
            await Post.destroy({id: postId})
            res.send('Deleted post at id: ' + postId)
        } catch(err) {
            return res.serverError(err.toString())
        }
    },

    populate: async function(req, res) {
        await Post.create({title: "Salam",
            description: "This is my first post."})
   
        await Post.create({title: "Why I'm here?", 
            description: "To explore this technology and see how can I apply it for my own purposes"})
        
        await Post.create({title: "What will happen next?",
            description: "InshaAllah I will create a website for one of my projects"})
        
        res.send('posts populated succesfully')
    }
}