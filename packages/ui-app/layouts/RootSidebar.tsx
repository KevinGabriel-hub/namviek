'use client'

import Link from 'next/link'
import { RiBarChartFill, RiCalendarFill, RiDashboardFill } from 'react-icons/ri'
import { IoIosPlayCircle, IoMdLogOut } from 'react-icons/io'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { HiOutlineUserPlus } from 'react-icons/hi2'
import { LiaCitySolid } from 'react-icons/lia'
import { FcBriefcase, FcOrganization, FcVideoCall } from 'react-icons/fc'
import { Tooltip } from '@shared/ui'

export default function RootSidebar() {
  const { orgID } = useParams()

  return (
    <nav className="primary-sidebar">
      <section>
        <Link href={`/${orgID}/my-works`}>
          <div className="flex justify-center pt-3">
            <Image
              src={'/logo132x132.svg'}
              width={35}
              height={35}
              alt="Homepage"
            />
          </div>
        </Link>

        <Link href="/organization">
          <Tooltip title="Organization" side="right">
            <div>
              <FcOrganization className="main-nav-icon" />
            </div>
          </Tooltip>
        </Link>

        <Link href={`/${orgID}/my-works`}>
          <Tooltip title="Project" side="right">
            <div>
              <FcBriefcase className="main-nav-icon active" />
            </div>
          </Tooltip>
        </Link>

        <Link href={`/${orgID}/meeting`}>
          <Tooltip title="Meeting" side="right">
            <div>
              <FcVideoCall className="main-nav-icon" />
            </div>
          </Tooltip>
        </Link>
      </section>
      <section>
        <Link href={`/${orgID}/setting/people`}>
          <HiOutlineUserPlus className="main-nav-icon" />
        </Link>
        <Link href="/sign-out">
          <IoMdLogOut className="main-nav-icon" />
        </Link>
      </section>
    </nav>
  )
}
