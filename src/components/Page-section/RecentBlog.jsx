import Blog from "../UI/blog-card/BlogCard";

export default function RecentBlog() {
    const blogDatas = [
        { link: '#', img: 'src/assets/post-1.jpg', title: 'First Time Home Owner Ideas', author: 'Kristin Watson', date: 'Dec 19, 2021' },
        { link: '#', img: 'src/assets/post-2.jpg', title: 'How To Keep Your Furniture Clean', author: 'Robert Fox', date: 'Dec 15, 2021' },
        { link: '#', img: 'src/assets/post-3.jpg', title: 'Small Space Furniture Apartment Ideas', author: 'Kristin Watson', date: 'Dec 12, 2021' },
    ];
    return (
        <>
            <div class="blog-section">
                <div class="container">
                    <div class="row mb-5">
                        <div class="col-md-6">
                            <h2 class="section-title">Recent Blog</h2>
                        </div>
                        <div class="col-md-6 d-flex justify-content-end">
                            <a href="#" class="more">View All Posts</a>
                        </div>
                    </div>

                    <div class="row">
                        {blogDatas.map((blogData) => {
                            return (
                                <div class="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                                    <Blog blogData={blogData}></Blog>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}