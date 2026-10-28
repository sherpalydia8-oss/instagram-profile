
function ProfileHeader({ profile }) {
  return (
    <div className="flex flex-col items-center gap-5 p-5 sm:flex-row">

      <img
        src={profile.image}
        alt="Profile"
        className="h-28 w-28 rounded-full border-2 border-black-500 p-1 object-cover"
      />

      <div>
        <h2 className="text-xl font-bold">
          {profile.username}
        </h2>

        <div className="my-4 flex gap-5 text-sm">
          <p><b>{profile.posts}</b> posts</p>
          <p><b>{profile.followers}</b> followers</p>
          <p><b>{profile.following}</b> following</p>
        </div>

        <p className="font-semibold">{profile.name}</p>
        <p className="text-sm">{profile.bio}</p>

        <div className="mt-4 flex gap-3">
          <button className="rounded-lg bg-gray-500 px-4 py-2 text-white">
            Edit Profile
          </button>

          <button className="rounded-lg bg-gray-200 px-4 py-2">
            Share Profile
          </button>
        </div>
      </div>

    </div>
  );
}

export default ProfileHeader;
