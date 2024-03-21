import React from 'react'
import Image from 'next/image'

function AboutProduct() {
  return (
    <div id='learn-more' className="relative isolate overflow-hidden bg-white py-24 sm:py-32">


        <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
        >
            <defs>
            <pattern
                id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
            >
                <path d="M.5 200V.5H200" fill="none" />
            </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
        </svg>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-[#40C057]">Important data at-a-glance</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-[#4D5562] sm:text-4xl">Automated tracking for <br />all your orders</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Don&apos;t miss out on knowing what&apos;s happening with your orders! Our clients told us they really need to see what&apos;s coming in, going out, and how all their orders are doing. That&apos;s why we have the <span className='text-[#40C057]'>IN OUT Dashboard</span>. It tracks your order progress on auto-pilot, giving operators the crucial information needed to make quick and precise decisions at any moment. 
                <br /><br />Use this tool to make sure your business stays on top and never falls behind.
              </p>

              <p className='text-[#969696] mt-10'><span className='font-bold'>Developer note:</span> <br />“By the way, web view is standard, but we made a TV/Signage view so you can connect your computer to a TV and have your dashboard visible to all team members for even more efficiency. We got you.”</p>
            
            </div>
          </div>
          <Image
            src="/project-app-screenshot-2.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[50rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}

export default AboutProduct