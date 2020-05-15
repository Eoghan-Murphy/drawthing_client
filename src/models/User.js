class User {
    constructor(uID, displayName, display_image = null, posts = [], likes = []){
        this.uID = uID
        this.displayName = displayName
        this.display_image = display_image
        this.posts = posts
        this.likes = likes
    }
}

export default User