import {posts_api_url} from '../localConfig'

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

    submit(api_url = posts_api_url){
        fetch(api_url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this)
                })
    }
}

export default Post