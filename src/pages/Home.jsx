import { ArrowRight, CalendarDays, DollarSign, MapPin, MoveRight, Star, TrendingUp, UserRound, Users } from 'lucide-react'
import Footer from '../components/Footer'
import blogs from '../data/blogs.json'
import businesses from '../data/business.json'

const featuredBlogs = blogs.filter((blog) => blog.featured)
const featuredBusinesses = businesses.filter((business) => business.featured)
const topPerformers = businesses.filter((business) => !business.featured)

function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    })
}

export default function Home() {
    return (
        <>
            <section className="bg-linear-to-r from-primary to-secondary py-10">
                <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center px-6 py-16 sm:py-20">
                    <div className="flex max-w-2xl flex-col items-start gap-6 text-white">
                        <div className='flex items-center justify-center gap-2'>
                            <TrendingUp className='text-sm' />
                            <small className="text-sm font-semibold uppercase tracking-[0.3em]">
                                Top Business Insights
                            </small>
                        </div>

                        <h1 className="max-w-xl text-5xl font-semibold leading-tight lg:text-6xl">
                            Discover Industry Leaders &amp; Market Trends
                        </h1>

                        <p className="max-w-xl text-base leading-8 sm:text-lg">
                            Explore in-depth analysis of Fortune 500 companies, emerging startups, and
                            the strategies driving global business success.
                        </p>

                        <div className="flex gap-4">
                            <button className="btn bg-white text-primary transition duration-300 hover:bg-slate-500 hover:text-white">
                                <span>Read Articles</span>
                                <ArrowRight className="h-4 w-4" />
                            </button>

                            <button className="btn border border-white text-white transition duration-300 hover:bg-white hover:text-primary">
                                Get in Touch
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16 sm:py-20">
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
                    <div className="flex items-center gap-2">
                        <h2 className="text-2xl font-bold text-slate-900">🥇 Featured Stories</h2>
                    </div>

                    <div className="grid gap-6">
                        {featuredBlogs.map((blog) => (
                            <article
                                key={blog.id}
                                className="group grid cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="h-64 w-full object-cover transition duration-300 group-hover:scale-105 md:h-full"
                                    />
                                </div>

                                <div className="flex flex-col gap-4 p-6">
                                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
                                        <span className="rounded-full bg-primary-light/20 px-3 py-1 text-primary">
                                            {blog.category}
                                        </span>
                                        <span>{blog.readTime}</span>
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-bold text-black transition-colors duration-300 group-hover:text-primary">
                                            {blog.title}
                                        </h3>
                                        <p className="leading-7 text-slate-600">{blog.excerpt}</p>
                                    </div>

                                    <div className="mt-auto flex gap-4 pt-4 flex-row items-center justify-between">
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary p-2 text-sm font-bold text-white">
                                                    {blog.author.trim().charAt(0)}
                                                </div>
                                                <span className="flex flex-col gap-1">
                                                    <span className="font-bold text-black">{blog.author}</span>
                                                    <span>{blog.authorRole}</span>
                                                </span>
                                            </div>
                                        </div>

                                        <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition duration-300 hover:translate-x-1">
                                            Read More
                                            <MoveRight className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-16 sm:py-20">
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
                    <div className="space-y-3 text-center">
                        <h2 className="text-3xl font-bold text-slate-900">Featured Businesses</h2>
                        <p className="mx-auto max-w-2xl text-slate-500">
                            Leading companies driving innovation and business success across sectors.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {featuredBusinesses.map((business) => (
                            <article
                                key={business.id}
                                className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={business.image}
                                        alt={business.name}
                                        className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
                                    />
                                </div>

                                <div className="flex flex-col gap-4 p-5">
                                    <div className="flex items-center justify-between gap-3 text-xs font-semibold text-slate-500">
                                        <span className="rounded-full bg-primary-light/20 px-3 py-1 text-primary">
                                            {business.category}
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-gold">
                                            <Star className="h-4 w-4 fill-current" />
                                            Featured
                                        </span>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold group-hover:text-primary">{business.name}</h3>
                                        <p className="text-sm leading-6 text-slate-600">{business.description}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 text-sm text-slate-500">
                                        <span className="inline-flex items-center gap-2">
                                            <DollarSign className="h-4 w-4 text-success" />
                                            {business.revenue}
                                        </span>
                                        <span className="inline-flex items-center gap-2">
                                            <Users className="h-4 w-4 text-primary" />
                                            {business.employees}
                                        </span>
                                        <span className="inline-flex items-center gap-2">
                                            <MapPin className="h-4 w-4 text-danger" />
                                            {business.location}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-16 sm:py-20">
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
                    <div className="space-y-3 text-center">
                        <h2 className="text-3xl font-bold text-slate-900">More Top Performers</h2>
                        <p className="mx-auto max-w-2xl text-slate-500">
                            More companies making moves across finance, retail, and construction.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {topPerformers.map((business) => (
                            <article
                                key={business.id}
                                className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={business.image}
                                        alt={business.name}
                                        className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
                                    />
                                </div>

                                <div className="flex flex-col gap-4 p-5">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                            {business.category}
                                        </span>
                                        <span className="text-sm text-slate-500">{business.revenue}</span>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold text-black transition-colors duration-300 group-hover:text-primary">
                                            {business.name}
                                        </h3>
                                        <p className="text-sm leading-6 text-slate-600">{business.description}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 text-sm text-slate-500">
                                        <span className="inline-flex items-center gap-2">
                                            <DollarSign className="h-4 w-4 text-success" />
                                            {business.revenue}
                                        </span>
                                        <span className="inline-flex items-center gap-2">
                                            <Users className="h-4 w-4 text-primary" />
                                            {business.employees}
                                        </span>
                                        <span className="inline-flex items-center gap-2">
                                            <MapPin className="h-4 w-4 text-danger" />
                                            {business.location}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-linear-to-r from-primary to-fuchsia-600 py-16 sm:py-20">
                <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-6 text-center text-white">
                    <h2 className="text-3xl font-bold sm:text-4xl">Stay Ahead of the Curve</h2>
                    <p className="max-w-2xl text-base leading-7 text-white/80">
                        Get weekly insights on market trends, business moves, and industry analysis
                        delivered straight to your inbox.
                    </p>
                    <button className="btn bg-white text-primary transition duration-300 hover:bg-slate-500 hover:text-white">
                        Subscribe Now
                    </button>
                </div>
            </section>

            <Footer />
        </>
    )
}
