"use client";

import React from "react";
import { Menu, X } from "lucide-react";
import { posts } from "../dymmy/dummyData";

const menuItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

const BlogPosts = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="mx-auto max-w-7xl px-2">
        <div className="mt-10 hidden w-full flex-col justify-between space-y-4 md:flex md:flex-row">
          <div className="flex w-full items-end border-b border-gray-300">
            {[
              "Design",
              "Product",
              "Software Engineering",
              "Customer Success",
            ].map((filter, index) => (
              <div
                className="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-black"
                key={filter}
              >
                {filter}
              </div>
            ))}
          </div>
        </div>
        {/* posts */}
        <div className="grid lg:gap-8 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3 cursor-pointer">
          {posts.map((post) => (
            <div className="flex flex-wrap ">
              <div
                key={post.title}
                className="border rounded-md  md:mx-5 lg:mx-0 sm:mx-10"
              >
                <img
                  src={post.poster}
                  className="aspect-video w-full rounded-md"
                  alt=""
                />
                <div className="min-h-min p-3">
                  <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                    #{post.category}
                  </p>
                  <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
                    {post.title}
                  </p>
                  <p className="mt-4 w-full text-sm leading-normal text-gray-600">
                    {post.description}
                  </p>
                  <div className="mt-4 flex space-x-3 ">
                    <img
                      className="h-full w-10 rounded-lg"
                      src={post.avatar}
                      alt={post.author}
                    />
                    <div>
                      <p className="text-sm font-semibold leading-tight text-gray-900">
                        {post.author}
                      </p>
                      <p className="text-sm leading-tight text-gray-600">
                        {post.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full border-t border-gray-300">
          <div className="mt-2 flex items-center justify-between">
            <div className="hidden md:block">
              <p>
                showing <strong>1</strong> to <strong>10</strong> of{" "}
                <strong>20</strong> results
              </p>
            </div>
            <div className="space-x-2">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
