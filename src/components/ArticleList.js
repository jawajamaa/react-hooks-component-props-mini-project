import Article from "./Article";

function ArticleList({ posts }) {
console.log(posts);
    const SinglePost = posts.map(post=>{
        return <Article
            key = {post.id}
            title = {post.title}
            date = {post.date}
            preview = {post.preview}
            minutes = {post.minutes}
        />
    });
    return (
        <main>
            { SinglePost }
        </main>
    )
}

export default ArticleList;
