'use client'
import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Label from '@/components/Label'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { BsArrowLeft } from 'react-icons/bs'
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa"
import { blogPosts } from '@/data/blogData'

const BlogDetailPage = () => {
  const params = useParams()
  const router = useRouter()
  const slug = params?.slug as string

  const blog = blogPosts.find(post => post.slug === slug)

  if (!blog) {
    return (
      <main className="w-full min-h-screen flex flex-col justify-start items-center gap-6 sm:gap-8 md:gap-10 bg-white">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-6 text-center">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <button
            onClick={() => router.push('/blog')}
            className="text-pink-600 hover:text-pink-700 font-medium flex items-center gap-2"
          >
            <BsArrowLeft className="text-xl" />
            Back to Blogs
          </button>
        </div>
        <Label />
        <Footer />
      </main>
    )
  }

  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-center gap-6 sm:gap-8 md:gap-10 bg-white overflow-x-hidden">
      <Navbar />
      <div className='flex flex-col justify-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 my-4 sm:my-6 md:my-8 lg:my-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 text-black max-w-7xl mx-auto w-full animate-fade-in-up'>
        <div className='flex flex-col justify-start items-center gap-2 sm:gap-3 md:gap-4 animate-fade-in-up'>
          {/* <p className='text-gray-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center'>Turning Engagement</p> */}
          <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-wide text-center font-bold'>{blog.title}</p>
        </div>
        
        <div className="text-justify flex flex-col justify-start items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 animate-slide-in-right">
          <div className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed w-full">
            {(() => {
              const contentLength = blog.content.length
              const middleIndex = Math.floor(contentLength / 2)
              const firstHalf = blog.content.slice(0, middleIndex)
              const secondHalf = blog.content.slice(middleIndex)
              
              return (
                <>
                  {/* First half of content */}
                  {firstHalf.map((paragraph, index) => (
                    <p key={index} className="mb-4 sm:mb-5 md:mb-6">
                      {paragraph}
                    </p>
                  ))}
                  
                  {/* Image in the middle */}
                  {blog.image && (
                    <div className="my-6 sm:my-8 md:my-10 lg:my-12">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={1200}
                        height={600}
                        className='rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] object-cover'
                      />
                    </div>
                  )}
                  
                  {/* Second half of content */}
                  {secondHalf.map((paragraph, index) => (
                    <p key={middleIndex + index} className="mb-4 sm:mb-5 md:mb-6">
                      {paragraph}
                    </p>
                  ))}
                </>
              )
            })()}
          </div>
        </div>
        
        <div className='text-black flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6'>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">Find this insightful? Share this!</p>
          <div className='flex gap-3 sm:gap-4 md:gap-5'>
            <a href="#" aria-label="Instagram" className="text-gray-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl hover:scale-110 transition-transform">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="text-gray-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl hover:scale-110 transition-transform">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl hover:scale-110 transition-transform">
              <FaTwitter />
            </a>
          </div>
        </div>
        
        <button
          onClick={() => router.push('/blog')}
          className='text-pink-600 hover:text-pink-700 font-extrabold hover:scale-110 transition-transform cursor-pointer self-start flex items-center gap-2 sm:gap-3'
        >
          <BsArrowLeft className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl' />
          
        </button>
      </div>
      <Label />
      <Footer />
    </main>
  )
}

export default BlogDetailPage

