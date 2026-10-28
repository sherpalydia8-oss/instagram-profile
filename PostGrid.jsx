
function PostGrid({ posts }) {
  return (
    <section className="grid grid-cols-3 gap-1 sm:gap-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="group relative overflow-hidden bg-gray-100"
        >
          <img
            src={post.image}
            alt={post.caption}
            loading="lazy"
            className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
          />

          <div className="absolute inset-0 hidden items-center justify-center gap-4 bg-black/40 text-sm font-semibold text-white group-hover:flex">
            <span>♥ {post.likes}</span>
            <span>● {post.comments}</span>
          </div>
        </div>
      ))}
    </section>
  )
}

export default PostGrid
