import React, { useState } from "react";
import { BLOG_POSTS_DATA } from "../data";
import { BlogPost } from "../types";
import { Calendar, User, Clock, ArrowRight, X, Heart } from "lucide-react";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Todos");

  const categories = ["Todos", "Projeto Social", "Performance", "Defesa Pessoal"];

  const filteredPosts =
    activeCategory === "Todos"
      ? BLOG_POSTS_DATA
      : BLOG_POSTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="blog" className="py-24 bg-[#050505] relative">
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_left,rgba(57,255,20,0.04),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-primary font-mono block">
            Conteúdo Educativo & SEO • Blog
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white">
            Compartilhando <span className="text-brand-primary">Conhecimento e Ciência</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Leia nossos artigos exclusivos sobre preparação física, os benefícios neurológicos e motores do jiu-jitsu atípico, 
            e dicas práticas de defesa pessoal e emagrecimento.
          </p>

          {/* Category Filter */}
          <div className="pt-6 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-xs text-[10px] font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-brand-primary text-brand-dark"
                    : "bg-[#0c0c0c] text-gray-400 hover:text-white hover:bg-[#1a1a1a] border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-[#0c0c0c] border border-white/10 hover:border-brand-primary/30 rounded-xs overflow-hidden shadow-xl hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="h-[200px] overflow-hidden relative border-b border-white/10">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category overlay */}
                  <span className="absolute top-4 left-4 bg-brand-primary text-brand-dark text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-xs">
                    {post.category}
                  </span>
                </div>

                {/* Content info */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 text-[9px] text-gray-500 font-mono uppercase tracking-wider">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-display font-bold uppercase tracking-wide text-white text-sm line-clamp-2 group-hover:text-brand-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 text-xs line-clamp-3 leading-relaxed font-sans">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Footer action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="text-[10px] font-black uppercase tracking-wider text-brand-primary group-hover:text-green-400 flex items-center space-x-1 cursor-pointer"
                >
                  <span>Ler Artigo Completo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0c0c0c] border border-white/10 rounded-xs max-w-4xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl">
            {/* Header image inside modal */}
            <div className="h-[260px] sm:h-[350px] relative border-b border-white/10">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent" />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 bg-black/80 backdrop-blur-md hover:bg-red-600 text-white p-2 rounded-xs transition-colors border border-white/10 hover:border-transparent cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content info inside modal */}
            <div className="p-6 sm:p-10 space-y-8">
              <div className="space-y-4">
                <span className="bg-brand-primary/5 border border-brand-primary/25 text-brand-primary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-xs">
                  {selectedPost.category}
                </span>
                <h1 className="font-display font-black text-white text-2xl sm:text-3xl md:text-4xl leading-tight">
                  {selectedPost.title}
                </h1>

                {/* Metadata details */}
                <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500 border-b border-white/5 pb-6 pt-2">
                  <div className="flex items-center space-x-2">
                    <img
                      src={selectedPost.author.avatar}
                      alt={selectedPost.author.name}
                      className="w-8 h-8 rounded-full object-cover border border-brand-primary"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="text-white block font-semibold">{selectedPost.author.name}</span>
                      <span className="text-[10px] text-gray-500 font-medium block">{selectedPost.author.role}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1.5 font-mono uppercase text-[10px]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{selectedPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 font-mono uppercase text-[10px]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Rich Styled Content Text */}
              <div className="text-gray-400 space-y-6 leading-relaxed font-sans text-sm sm:text-base whitespace-pre-line prose prose-invert prose-emerald max-w-none">
                {selectedPost.content}
              </div>

              {/* Modal Bottom Close Button */}
              <div className="pt-8 border-t border-white/5 flex justify-end">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-display font-semibold text-xs px-6 py-3 rounded-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Voltar para o Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
