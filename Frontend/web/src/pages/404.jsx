import React from 'react'

function EmptyPage() {
  return (
    <div class="flex flex-col items-center justify-center h-screen bg-[#DBE2EF]">
      <img src='images/404.svg' className='w-auto h-56 mt-auto' alt='404' />
      <h1 class="text-6xl font-bold mb-4 text-blue-500 text-center">404</h1>
      <h1 class="text-3xl font-semibold mb-4 text-blue-500 text-center">Halaman tidak ditemukan</h1>
      <p class="text-lg text-gray-600 mb-8 text-center">Maaf, halaman yang Anda cari tidak dapat ditemukan.</p>
      <a href="/" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">Kembali ke Beranda</a>
      <p className='text-sm font-semibold mt-auto mb-4 text-center'>
        &copy; Copyright by Ren-Project 2023
      </p>
    </div>
  )
}

export default EmptyPage