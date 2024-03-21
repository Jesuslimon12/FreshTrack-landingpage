import React from 'react'

function Cta() {
  return (
    <div className="bg-[#22C55E]">
    <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        It’s 2024. <br />Get a software competitive edge. <br />Get FreshTrack.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white">
        Schedule a free demo with the link below or give us your contact info and we’ll give you a call. We will get back to you on the same day.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="https://calendly.com/renegarza/meeting-with-rene-r-garza"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-[#22C55E] shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Schedule demo
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Contact us <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cta