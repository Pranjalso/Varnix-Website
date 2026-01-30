import React from 'react'
import Navbar from '@/components/Navbar'
import Label from '@/components/Label'
import Footer from '@/components/Footer'
import Blogs from '@/components/Blogs'


const page = () => {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-center gap-6 sm:gap-8 md:gap-10 bg-white">
    <Navbar />
    <Blogs />
    <Label />
    <Footer />
  </main>
  )
}

export default page
