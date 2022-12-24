import React from 'react'

function MainComponent() {
  return (
    <div ><link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,900&display=swap" rel="stylesheet" />
    <div class="flex min-h-screen w-full">
      <div class="relative  mx-auto space-x-2 flex flex-col px-4 sm:max-w-full md:max-w-screen-xl md:flex-row">
       
        <div class="mx-auto flex w-full max-w-xl lg:max-w-screen-xl ">
          <div class="mb-16 lg:my-auto lg:max-w-lg ">
            <div class="mb-6 max-w-xl">
              <div>
                <p class="bg-teal-accent-400 mb-2 inline-block rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-900">25% off this summer</p>
              </div>
              <h2 class="mb-6 max-w-lg text-3xl font-extrabold text-slate-700 sm:text-5xl sm:leading-snug">
                Discover Fantasy <br />
                Lands of
                <span class="rounded- abg-gradient-to-r inline-block bg-green-700 from-lime-400 to-sky-400 ml-4 px-4 font-bold text-white"> Zurich</span>
              </h2>
              <p class="text-base text-gray-700 md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ullam rem voluptatem, animi tempora expedita!Lorem ipsum dolor.</p>
            </div>
            <div class="flex items-center">
              <a href="/" class="bg-sky-400a mr-6 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-lime-400 to-sky-400 px-8 font-medium tracking-wide text-white shadow-lg shadow-sky-300 outline-none transition duration-200 hover:scale-110 hover:bg-sky-500 focus:ring"> Get started </a>
              <a href="/" class="inline-flex items-center font-semibold text-sky-400 transition-colors duration-200 hover:text-lime-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                </svg>
                Watch Videos</a
              >
            </div>
          </div>
        </div>
        

        <div class="flex h-full w-full space-x-5 overflow-hidden md:justify-end">
         
          <div class="hidden w-56 items-center space-y-3 lg:flex">
            <div class="overflow-hidden rounded-xl bg-yellow-400">
              <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
            </div>
          </div>
          <div class="w-full flex-col space-y-3 rounded-xl py-4 lg:flex lg:w-80">
            <div class="h-40 overflow-hidden rounded-xl bg-green-600/60">
              <img class="mx-auto h-full w-full object-cover" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
            </div>
            <div class="h-40 overflow-hidden rounded-xl bg-pink-600/60">
              <img class="mx-auto h-full w-full object-cover" src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            </div>
            <div class="h-40 overflow-hidden rounded-xl bg-blue-600/60">
              <img class="mx-auto h-full w-full object-cover" src="https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1342&q=80" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MainComponent