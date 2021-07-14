// _rfc
import Image from 'next/image'
import {
  BadgeCheckIcon,
  CollectionIcon,
  HeartIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline'

import HeaderItem from './HeaderItem'
export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center h-auto px-5">
      {/* Image have widhth,height and 
      src which should be include in next.config.js 
      images/domains */}
      <div className="flex flex-grow m-5 justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>

      <div style={{ marginRight: '8px', fontWeight: '900', fontSize: '30px' }} className="mr-2 ">
        SabWatch
      </div>
    </header>
  )
}
