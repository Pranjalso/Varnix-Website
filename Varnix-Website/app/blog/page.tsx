'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import Label from '@/components/Label'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { MdArrowOutward } from 'react-icons/md'
import PageLabel from '@/components/PageLabel'
import { blogPosts } from '@/data/blogData'

const page = () => {

  const featuredPost = blogPosts.find(post => post.featured)
  const nonFeaturedPosts = blogPosts.filter(post => !post.featured)
  // Show first 4 non-featured posts in the article list, rest in grid
  const articleList = nonFeaturedPosts.slice(0, 4)
  const gridPosts = nonFeaturedPosts.slice(4)

  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-center bg-white overflow-x-hidden">
      <Navbar />
      <div className="w-full [&>div]:my-2! [&>div]:sm:my-3! [&>div]:md:my-4!">
        <PageLabel title="our blogs." />
      </div>
      
      {/* Header Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 mt-2 sm:mt-3 md:mt-4 animate-fade-in-up blog-header-responsive">
        <div className="flex flex-col md:flex-row justify-between  items-start md:items-end gap-3 sm:gap-4 md:gap-6">
          <div className="flex flex-col gap-1 sm:gap-2 w-full md:w-auto">
            <h1 className="text-gray-400 italic text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light">blogs</h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-md">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, nulla ornare eget felis.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end w-full md:w-auto">
            <p className="text-gray-400 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light">fresh</p>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black">insights.</p>
          </div>
        </div>
        <div className="bg-gray-300 w-full h-px mt-4 sm:mt-5 md:mt-6"></div>
      </section>

      {/* Featured Post and Article List Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 mt-6 sm:mt-8 md:mt-10 lg:mt-12 animate-slide-in-right">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {featuredPost && (
            <div className="flex-1 lg:flex-[1.2] w-full">
              <Link href={`/blog/${featuredPost.slug}`} className="group block">
                <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[450px] rounded-2xl overflow-hidden mb-4 sm:mb-5">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4 group-hover:text-pink-600 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-5 leading-relaxed">
                  {featuredPost.description}
                </p>
                <div className="flex justify-start">
                  <MdArrowOutward className="text-pink-600 text-2xl sm:text-3xl md:text-4xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </Link>
            </div>
          )}
          <div className="flex-1 lg:flex-[0.8] flex flex-col w-full">
            {articleList.map((article, index) => (
              <div key={article.id} className="w-full">
                <Link href={`/blog/${article.slug}`} className="group block py-4 sm:py-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black group-hover:text-pink-600 transition-colors flex-1">
                      {article.title}
                    </h3>
                    <MdArrowOutward className="text-pink-600 text-xl sm:text-2xl md:text-3xl shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </Link>
                {index < articleList.length - 1 && (
                  <div className="bg-gray-300 w-full h-px"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Posts Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 mt-8 sm:mt-10 md:mt-12 lg:mt-16 mb-4 sm:mb-5 md:mb-6 lg:mb-8 animate-fade-in-up">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {gridPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
              <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden mb-4 sm:mb-5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4 group-hover:text-pink-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 leading-relaxed">
                {post.description}
              </p>
              <div className="flex justify-start">
                <MdArrowOutward className="text-pink-600 text-2xl sm:text-3xl md:text-4xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Label />
      <Footer />
    </main>
  )
}

export default page