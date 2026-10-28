
import Navbar from './Components/Navbar'
import ProfileHeader from './Components/ProfileHeader'
import StoryHighlights from './Components/StoryHighlights'
import PostGrid from './Components/PostGrid'

const profile = {
  username: 'Lidi',
  name: 'Lydia Sherpa',
  image: 'https://i.pinimg.com/1200x/f4/1a/6c/f41a6ce5fa572442afc6d0995844afd8.jpg',
  posts: 9,
  followers: 850,
  following: 320,
  bio: 'BCA Student 💻 | Capturing little moments ✨',
}

const highlights = [
  { id: 1, name: 'Travel', image: 'https://picsum.photos/200?random=11' },
  { id: 2, name: 'Friends', image: 'https://picsum.photos/200?random=12' },
  { id: 3, name: 'Food', image: 'https://picsum.photos/200?random=13' },
  { id: 4, name: 'Life', image: 'https://picsum.photos/200?random=14' },
  { id: 5, name: 'Memories', image: 'https://picsum.photos/200?random=15' },
]

const posts = [
  { id: 1, image: 'https://picsum.photos/500?random=21', caption: 'Travel', likes: 120, comments: 12 },
  { id: 2, image: 'https://picsum.photos/500?random=22', caption: 'Coffee', likes: 98, comments: 8 },
  { id: 3, image: 'https://picsum.photos/500?random=23', caption: 'Mountains', likes: 210, comments: 20 },
  { id: 4, image: 'https://picsum.photos/500?random=24', caption: 'Friends', likes: 150, comments: 14 },
  { id: 5, image: 'https://picsum.photos/500?random=25', caption: 'Flowers', likes: 175, comments: 10 },
  { id: 6, image: 'https://picsum.photos/500?random=26', caption: 'Memories', likes: 88, comments: 6 },
  { id: 7, image: 'https://picsum.photos/500?random=27', caption: 'Nature', likes: 130, comments: 11 },
  { id: 8, image: 'https://picsum.photos/500?random=28', caption: 'Evening', likes: 190, comments: 18 },
  { id: 9, image: 'https://picsum.photos/500?random=29', caption: 'Sunset', likes: 240, comments: 25 },
]

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 sm:px-8">
        <ProfileHeader profile={profile} />

        <div className="border-b border-gray-200">
          <StoryHighlights highlights={highlights} />
        </div>

        <div className="flex justify-center gap-10 border-b border-gray-200 text-xs font-semibold tracking-widest">
          <button className="border-t border-black py-4">
            ▦ POSTS
          </button>
          <button className="py-4 text-gray-400">
            ♧ SAVED
          </button>
          <button className="py-4 text-gray-400">
            ▣ TAGGED
          </button>
        </div>

        <PostGrid posts={posts} />
      </main>

    </div>
  )
}

export default App
