// dummy database

const post1 = {id: 1,
    title: "Salam",
    body: "This is my first post."}
const post2 = {id: 2,
    title: "Why I'm here?",
    body: "To explore this technology and see how can I apply it for my own purposes"}
const post3 = {id: 3,
    title: "What will happen next?",
    body: "InshaAllah I will create a website of for one of my projects"}

const allPosts = [post1, post2, post3]

module.exports = {
    posts: function(req, res) {
        
         res.send(allPosts)
    },

    create: function(req, res) {

        const title = req.param('title')
        const body = req.param('body')

        sails.log.debug(title + " " + body)
        const newPost = {id: allPosts.length + 1, 
            title: title, 
            body: body}

        allPosts.push(newPost)
        res.end()
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
    }
}