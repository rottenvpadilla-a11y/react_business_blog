import { ArrowUp, PencilLine } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-slate-950 py-14 text-slate-300">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <PencilLine className="h-5 w-5 text-primary" />
                            <h3 className="text-lg font-bold text-white">BusinessBlog</h3>
                        </div>
                        <p className="max-w-sm text-sm leading-7 text-slate-400">
                            Your premier source for business insights, industry trends, and
                            corporate innovation stories. Stay ahead with expert analysis and
                            in-depth reporting.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm text-primary">Quick Links</h3>
                        <div className="ms-2 flex flex-col gap-3 text-sm text-slate-400">
                            <a href="/" className="hover:text-white">
                                Home
                            </a>
                            <a href="/blog" className="hover:text-white">
                                Blog
                            </a>
                            <a href="/contact" className="hover:text-white">
                                Contact
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm text-primary">Contact</h3>
                        <div className="ms-2 flex flex-col gap-3 text-sm text-slate-400">
                            <span>📍 123 Business Ave</span>
                            <span>📞 New York, NY 10001</span>
                            <span>✉️ hello@businessblog.com</span>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center text-center gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">

                    <p>&copy; 2026 BusinessBlog. All rights reserved.</p>

                    <button
                        type="button"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="inline-flex items-center gap-2 transition hover:text-white sm:self-auto"
                    >
                        Back to top
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-400 transition hover:bg-white/10 hover:text-white">
                            <ArrowUp className="h-4 w-4" />
                        </span>
                    </button>

                </div>
            </div>
        </footer>
    )
}
