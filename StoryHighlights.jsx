
function StoryHighlights({ highlights }) {
  return (
    <section className="flex gap-7 overflow-x-auto py-6 sm:gap-10">
      {highlights.map((story) => (
        <div
          key={story.id}
          className="flex min-w-16 flex-col items-center gap-2"
        >
          <img
            src={story.image}
            alt={story.name}
            className="h-16 w-16 rounded-full border-2 border-gray-300 p-1 object-cover sm:h-20 sm:w-20"
          />

          <p className="text-xs font-medium">
            {story.name}
          </p>
        </div>
      ))}
    </section>
  )
}

export default StoryHighlights
