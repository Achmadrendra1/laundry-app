import React from 'react'

function EmptyPage() {
  return (
    <div class="flex flex-col items-center justify-center h-screen bg-[#DBE2EF]">
      <img src='images/404.svg' className='w-auto h-56' alt='404' />
      <h1 class="text-4xl font-bold mb-4 text-gray-600">404 - Halaman tidak ditemukan</h1>
      <p class="text-lg text-gray-600 mb-8">Maaf, halaman yang Anda cari tidak dapat ditemukan.</p>
      <a href="/" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">Kembali ke Beranda</a>
    </div>
  )
}

export default EmptyPage