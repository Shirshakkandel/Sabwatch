import { useRouter } from 'next/dist/client/router'
import requests from '../utils/requests'

//tailwind-scrollbar-hide
export default function Nav() {
  const router = useRouter()
  return (
    <nav className="relative">
      <div className="scrollbar-hide flex px-10 sm:px-20  text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
            key={key}
          >
            {title}
          </h2>
        ))}
      </div>

      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#6202A] h-10 w-1/12"></div>
    </nav>
  )
}