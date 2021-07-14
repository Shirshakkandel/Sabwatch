import Image from 'next/image'
import { forwardRef } from 'react'
import { FiThumbsUp } from 'react-icons/fi'

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/'

  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 "
    >
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
      />
      <div className="p-2 ">
        <p className="truncate max-w-md space-x-3">{result.overview}</p>
        <h2 className="mt-1 text-2xl transition-all duration-100 ease-out text-white">
          {result.title || result.original_name}
        </h2>
        <div className="flex items-center space-x-3 h-10 opacity-0 group-hover:opacity-100">
          <div className="text-bold">{result.release_date && result.release_date}</div>
          <div className="w-10 sm:w-14 whitespace-nowrap capitalize font-bold text-sm sm:text-lg">
            {result.media_type ? `${result.media_type}` : 'Movie'}
          </div>
          <div className="flex space-x-2 items-center m-2">
            <FiThumbsUp />
            <span>{result.vote_count}</span>
          </div>
        </div>
      </div>
    </div>
  )
})
export default Thumbnail
