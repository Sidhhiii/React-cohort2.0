import React from 'react'

const Card = () => {
  const users = [
  {
    id: 1,
    name: "Aarav Mehta",
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
    banner: "https://picsum.photos/seed/a1/1200/400",
    bio: "Loves building creative web experiences.",
    likeCount: "12.4K",
    postsCount: 134,
    viewsCount: "1.2M"
  },
  {
    id: 2,
    name: "Sanya Kapoor",
    profilePic: "https://randomuser.me/api/portraits/women/21.jpg",
    banner: "https://picsum.photos/seed/a2/1200/400",
    bio: "Passionate about UI/UX and minimal design.",
    likeCount: "8.9K",
    postsCount: 98,
    viewsCount: "856K"
  },
  {
    id: 3,
    name: "Rohan Sharma",
    profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
    banner: "https://picsum.photos/seed/a3/1200/400",
    bio: "Fitness enthusiast & travel explorer.",
    likeCount: "25.6K",
    postsCount: 201,
    viewsCount: "2.4M"
  },
  {
    id: 4,
    name: "Isha Verma",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
    banner: "https://picsum.photos/seed/a4/1200/400",
    bio: "Content creator who loves storytelling.",
    likeCount: "19.1K",
    postsCount: 167,
    viewsCount: "1.8M"
  },
  {
    id: 5,
    name: "Kabir Singh",
    profilePic: "https://randomuser.me/api/portraits/men/55.jpg",
    banner: "https://picsum.photos/seed/a5/1200/400",
    bio: "JavaScript nerd & open-source contributor.",
    likeCount: "31.7K",
    postsCount: 289,
    viewsCount: "3.6M"
  },
  {
    id: 6,
    name: "Meera Nair",
    profilePic: "https://randomuser.me/api/portraits/women/63.jpg",
    banner: "https://picsum.photos/seed/a6/1200/400",
    bio: "Exploring AI and machine learning daily.",
    likeCount: "14.2K",
    postsCount: 142,
    viewsCount: "1.1M"
  },
  {
    id: 7,
    name: "Aditya Rao",
    profilePic: "https://randomuser.me/api/portraits/men/71.jpg",
    banner: "https://picsum.photos/seed/a7/1200/400",
    bio: "Photographer capturing urban life.",
    likeCount: "9.8K",
    postsCount: 120,
    viewsCount: "742K"
  },
  {
    id: 8,
    name: "Priya Desai",
    profilePic: "https://randomuser.me/api/portraits/women/82.jpg",
    banner: "https://picsum.photos/seed/a8/1200/400",
    bio: "Entrepreneur building digital brands.",
    likeCount: "52.3K",
    postsCount: 312,
    viewsCount: "5.4M"
  },
  {
    id: 9,
    name: "Vikram Joshi",
    profilePic: "https://randomuser.me/api/portraits/men/90.jpg",
    banner: "https://picsum.photos/seed/a9/1200/400",
    bio: "Gaming streamer & tech reviewer.",
    likeCount: "73.5K",
    postsCount: 421,
    viewsCount: "7.9M"
  },
  {
    id: 10,
    name: "Ananya Patil",
    profilePic: "https://randomuser.me/api/portraits/women/95.jpg",
    banner: "https://picsum.photos/seed/a10/1200/400",
    bio: "Artist who paints emotions into colors.",
    likeCount: "6.4K",
    postsCount: 76,
    viewsCount: "498K"
  }
];


  return(users.map(function(elem) {
    return (
    <div className='w-58 bg-[#FAF3E0]  rounded-2xl px-1.5 py-2'>
      <div className='relative'>
        <img className= 'h-22 w-full rounded-2xl ' src={elem.banner} alt="" />
        
        <div className='absolute left-4 -bottom-8 border-none'><img className='h-17 w-17 object-cover rounded-[50%] border-2 border-[#463a24] ' src={elem.profilePic} alt="" /></div>
      </div>
      <div className='pt-9 px-4 pb-3'>
        <h1 className='text-lg'>{elem.name}</h1>
        <p className='text-sm'>{elem.bio}</p>
      </div>
      <div className='flex justify-between items-center bg-[#8d826c]  px-3 m-2 py-1.5 text-center rounded-lg'>
        <div>
            <h1 className='text-lg'>{elem.likeCount}</h1>
            <p className='text-center text-sm'>Likes</p>
        </div>
        <div>
            <h1 className='text-lg'>{elem.postsCount}</h1>
            <p className='text-center text-sm'>Posts</p>
        </div>
        <div>
            <h1 className='text-lg'>{elem.viewsCount}</h1>
            <p className='text-center text-sm'>Views</p>
        </div>
      </div>
      <div className='flex gap-6 justify-center text-lg p-0.5 pb-0 '>
          <i className="ri-instagram-line "></i>
          <i className="ri-twitter-x-line"></i>
          <i className="ri-threads-line"></i>
      </div>


    </div>
  )
    
  })
)

}

export default Card
