import { FileSearch, MoveRight, Newspaper, Search, UserRound, X } from 'lucide-react'
import { useState } from 'react'
import Footer from '../components/Footer'
import blogs from '../data/blogs.json'

const categories = ['All', ...new Set(blogs.map((blog) => blog.category))]

function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
    })
}

export default function Blog() {
    const [searchTerm, setSearchTerm] = useState('')
    const [activeCategory, setActiveCategory] = useState('All')

    const normalizedSearch = searchTerm.trim().toLowerCase()
    const filteredBlogs = blogs.filter((blog) => {
        const matchesCategory =
            activeCategory === 'All' || blog.category === activeCategory

        const matchesSearch =
            normalizedSearch === '' ||
            blog.title.toLowerCase().includes(normalizedSearch) ||
            blog.author.toLowerCase().includes(normalizedSearch) ||
            blog.authorRole.toLowerCase().includes(normalizedSearch) ||
            blog.category.toLowerCase().includes(normalizedSearch) ||
            blog.excerpt.toLowerCase().includes(normalizedSearch)

        return matchesCategory && matchesSearch
    })

    return (
        <>
            <section className="border-b border-slate-200 bg-slate-50/70 py-14 shadow-md sm:py-16">
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6">
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                        <Newspaper className="h-4 w-4" />
                        Business Insights
                    </span>
                    <div className="space-y-3">
                        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                            Latest Articles &amp; Analysis
                        </h1>
                        <p className="max-w-2xl text-base leading-7 text-slate-500">
                            Explore our collection of in-depth business articles, market analysis,
                            and industry trends from leading experts.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white py-10 sm:py-14">
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6">
                    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                        <div className="mx-auto max-w-3xl">
                            <div className="relative">
                                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(event) => setSearchTerm(event.target.value)}
                                    placeholder="Search by title, author, or keywords..."
                                    className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-11 text-sm text-slate-700 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                                />
                                {searchTerm && (
                                    <button
                                        type="button"
                                        onClick={() => setSearchTerm('')}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-primary"
                                        aria-label="Clear search"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="mt-5 flex flex-wrap items-center gap-2">
                            {categories.map((category) => {
                                const isActive = activeCategory === category

                                return (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() => setActiveCategory(category)}
                                        className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                                            isActive
                                                ? 'bg-primary text-white shadow-sm'
                                                : 'bg-slate-100 text-slate-600 hover:bg-primary hover:text-white'
                                        }`}
                                    >
                                        {category}
                                    </button>
                                )
                            })}
                        </div>

                        <p className="mt-5 text-center text-xs font-semibold text-slate-400">
                            Showing {filteredBlogs.length} of {blogs.length} articles
                        </p>
                    </div>

                    {filteredBlogs.length > 0 ? (
                        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                            {filteredBlogs.map((blog) => (
                                <article
                                    key={blog.id}
                                    className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="overflow-hidden">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-4 p-4">
                                        <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-slate-500">
                                            <span className="rounded-full bg-primary-light/20 px-2.5 py-1 text-primary">
                                                {blog.category}
                                            </span>
                                            <span>{blog.readTime}</span>
                                        </div>

                                        <div className="space-y-2">
                                            <h2 className="line-clamp-2 text-lg font-bold text-black transition-colors duration-300 group-hover:text-primary">
                                                {blog.title}
                                            </h2>
                                            <p className="line-clamp-3 text-sm leading-6 text-slate-600">
                                                {blog.excerpt}
                                            </p>
                                        </div>

                                        <div className="mt-auto space-y-3 border-t border-slate-100 pt-3 text-xs text-slate-500">
                                            <div className="flex items-center gap-3">
                                                <span className="inline-flex items-center gap-2">
                                                    <UserRound className="h-3.5 w-3.5 text-primary" />
                                                    {blog.author}
                                                </span>
                                                <span className='block w-1 h-1 rounded-full bg-gray-400'></span>
                                                <span>{formatDate(blog.date)}</span>
                                            </div>

                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="flex min-h-80 flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                                <FileSearch className="h-8 w-8" />
                            </div>
                            <h2 className="mt-6 text-3xl font-bold text-slate-900">No blogs found</h2>
                            <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                                We couldn&apos;t find any articles matching{' '}
                                <span className="font-semibold text-slate-700">
                                    "{searchTerm || activeCategory}"
                                </span>
                                .
                            </p>
                            <button
                                type="button"
                                onClick={() => {
                                    setSearchTerm('')
                                    setActiveCategory('All')
                                }}
                                className="mt-6 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-primary-dark"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </>
    )
}
