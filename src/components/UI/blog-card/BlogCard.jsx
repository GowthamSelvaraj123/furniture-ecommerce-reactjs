export default function Blog({ blogData }) {
    return (
        <>
            <div class="post-entry">
                <a href={blogData.link} class="post-thumbnail"><img src={blogData.img} alt="Image" class="img-fluid" /></a>
                <div class="post-content-entry">
                    <h3><a href={blogData.link}>{blogData.title}</a></h3>
                    <div class="meta">
                        <span>by <a href={blogData.link}>{blogData.author}</a></span> <span>on <a href="#">{blogData.date}</a></span>
                    </div>
                </div>
            </div>
        </>
    )
}