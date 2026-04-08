import { ClimbingBoxLoader } from 'react-spinners'

export default function LoadingScreen() {
    return (
        <div className="flex min-h-[calc(100vh-4.5rem)] flex-col items-center justify-center gap-8 bg-slate-50 px-6">
            <div className="space-y-3 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                    BusinessBlog
                </p>
                <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                    Loading your business insights
                </h1>
            </div>

            <ClimbingBoxLoader color="#2563eb" size={18} />
        </div>
    )
}
