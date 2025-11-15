"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type MediumPost = {
  guid: string;
  title: string;
  link: string;
  contentSnippet: string;
  isoDate: string;
  thumbnail?: string;
  categories?: string[];
};

export function MediumEmbed() {
  const [posts, setPosts] = useState<MediumPost[]>([]);

  useEffect(() => {
    async function loadMedium() {
      try {
        const res = await fetch("/api/medium");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error("Failed to load Medium posts", err);
      }
    }
    loadMedium();
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-20 py-20 px-6 md:py-36">
      <h1 className="text-4xl md:text-7xl text-center font-extrabold tracking-tight">
        Articles & Blogs
      </h1>

      <p className="text-center text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
        A curated list of my recent thoughts, ideas, and learning shared on Medium.
      </p>

      <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <motion.div
            key={post.guid}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all rounded-2xl p-6 flex flex-col"
          >

            <h3 className="text-xl font-bold text-gray-900 leading-snug">
              {post.title}
            </h3>

            <p
              className="text-gray-600 text-sm mt-4 line-clamp-4"
              dangerouslySetInnerHTML={{ __html: post.contentSnippet }}
            />

            <div className="mt-6 flex justify-between items-center">
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold underline hover:text-blue-800"
              >
                Read on Medium →
              </a>

              <span className="text-xs text-gray-500">
                {new Date(post.isoDate).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
