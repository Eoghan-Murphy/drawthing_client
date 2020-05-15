class Post {
    constructor(user, image, time_created = Date.now(), likes = [], comments = [], remix_of = null, super_post = null){
        this.user = user
        this.image = image
        this.time_created = time_created
        this.likes = likes
        this.comments = comments
        this.remix_of = remix_of
        this.super_post = super_post
    }
}

export default Post