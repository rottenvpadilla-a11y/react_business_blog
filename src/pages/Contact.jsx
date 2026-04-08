import { Mail, MapPin, Phone, Send } from 'lucide-react'
import Footer from '../components/Footer'

const contactItems = [
    {
        title: 'Email',
        value: 'hello@businessblog.com',
        detail: 'support@businessblog.com',
        icon: Mail,
        iconClassName: 'bg-blue-100 text-primary',
    },
    {
        title: 'Phone',
        value: '+1 (555) 123-4567',
        detail: 'Mon-Fri 9AM to 6PM',
        icon: Phone,
        iconClassName: 'bg-green-100 text-green-600',
    },
    {
        title: 'Office',
        value: '123 Business Ave',
        detail: 'New York, NY 10001',
        icon: MapPin,
        iconClassName: 'bg-violet-100 text-violet-600',
    },
]

export default function Contact() {
    return (
        <>
            <section className="bg-linear-to-r from-primary to-secondary py-16 text-white sm:py-20">
                <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5 px-6 text-center">
                    <div className="flex h-14 w-14 items-center justify-center">
                        <Mail className="h-10 w-10" />
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Get in Touch</h1>
                        <p className="max-w-2xl leading-7 text-white/80 sm:text-base">
                            Have a question or want to collaborate? We&apos;d love to hear from you.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white py-10 sm:py-14">
                <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 md:grid-cols-[280px_minmax(0,1fr)] md:items-start">
                    <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
                        <h2 className="text-lg font-bold text-slate-900">Contact Information</h2>

                        <div className="mt-6 space-y-5">
                            {contactItems.map((item) => {
                                const Icon = item.icon

                                return (
                                    <div key={item.title} className="flex items-start gap-4">
                                        <div
                                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${item.iconClassName}`}
                                        >
                                            <Icon className="h-4 w-4" />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-sm font-semibold text-slate-900">
                                                {item.title}
                                            </p>
                                            <p className="text-sm text-slate-600">{item.value}</p>
                                            <p className="text-xs text-slate-400">{item.detail}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </aside>

                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
                        <h2 className="text-2xl font-bold text-slate-900">Send us a Message</h2>

                        <form className="mt-6 space-y-5">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <label className="space-y-2">
                                    <span className="text-xs font-semibold text-slate-500">
                                        Your Name *
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                                    />
                                </label>

                                <label className="space-y-2">
                                    <span className="text-xs font-semibold text-slate-500">
                                        Email Address *
                                    </span>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                                    />
                                </label>
                            </div>

                            <label className="space-y-2">
                                <span className="text-xs font-semibold text-slate-500">Subject *</span>
                                <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10">
                                    <option>Select a topic...</option>
                                    <option>General Inquiry</option>
                                    <option>Partnership</option>
                                    <option>Advertising</option>
                                    <option>Press</option>
                                </select>
                            </label>

                            <label className="space-y-2">
                                <span className="text-xs font-semibold text-slate-500">Message *</span>
                                <textarea
                                    rows="7"
                                    placeholder="Tell us how we can help you..."
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                                />
                            </label>

                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition w-full md:w-fit duration-300 hover:bg-primary-dark"
                            >
                                Send Message
                                <Send className="h-4 w-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="bg-white pb-12 sm:pb-16">
                <div className="mx-auto w-full max-w-6xl px-6">
                    <div className="flex min-h-64 md:min-h-100 flex-col items-center justify-center rounded-2xl bg-primary-light/20 px-6 py-10 text-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full text-primary">
                            <MapPin className="h-7 w-7" />
                        </div>
                        <p className="mt-5 text-sm font-semibold text-slate-900">
                            123 Business Ave, New York, NY
                        </p>
                        <p className="mt-1 text-xs text-slate-400">Interactive map would be here</p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
