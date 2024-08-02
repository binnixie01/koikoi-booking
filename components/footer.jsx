import Link from 'next/link'
import React from 'react'
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { IconBrandWhatsapp } from '@tabler/icons-react'

const Footer = () => {
  return (
    <footer className="bg-black border-t">
      <div className="mx-auto max-w-5xl px-4 pb-6 sm:px-6 lg:px-8 mb-0 flex flex-col justify-center gap-6 items-center">


        <nav className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">

          <Link className="text-gray-700 transition hover:text-white" href="/about"> About </Link>





          <Link className="text-gray-700 transition hover:text-white" href={"/"}>Home</Link>



          <Link className="text-gray-700 transition hover:text-white" href={"/explore"}> Explore </Link>



          <Link className="text-gray-700 transition hover:text-white" href={"https://wa.me/qr/B42U5WSOC7FTD1"}> Contact us </Link>

        </nav>

        <ul className="flex justify-center items-center gap-6 md:gap-8">
          <li>
            <Link
              href="https://wa.me/qr/B42U5WSOC7FTD1"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Whatsapp</span>
              <IconBrandWhatsapp />

            </Link>
          </li>

          <li>
            <Link
              href="https://www.instagram.com/th_binson?utm_source=qr&igsh=M2swdjc5bTJuend3"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Instagram</span>
              <InstagramLogoIcon className='w-5 h-5' />
            </Link>
          </li>

          <li>
            <Link
              href="https://www.linkedin.com/in/binson-thangjam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">LinkedIn</span>
              <LinkedInLogoIcon className='w-5 h-5' />
            </Link>
          </li>

          <li>
            <Link
              href="https://github.com/binnixie01"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">GitHub</span>
              <GitHubLogoIcon className='w-5 h-5' />
            </Link>
          </li>


        </ul>
        <div className='text-gray-700'>© Thangjam Binson Singh. All rights reserved.</div>
      </div>
    </footer>

  )
}

export default Footer
