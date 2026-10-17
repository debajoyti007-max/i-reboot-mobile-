import { Star, Quote, CheckCircle2 } from "lucide-react"
import { REVIEWS } from "../../data/purobiteData"

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4 backdrop-blur-md">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Community Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-serif">
            Loved By Athletes, Doctors <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-emerald-400 bg-clip-text text-transparent">
              & Mindful Families.
            </span>
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg leading-relaxed">
            Real feedback from conscious eaters across Kolkata and India who made the switch to honest superfood snacking.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="glass-panel rounded-3xl p-7 flex flex-col justify-between hover:border-amber-400/30 transition-all duration-300"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-stone-600" />
                </div>

                {/* Quote Text */}
                <p className="text-stone-300 text-sm leading-relaxed mb-6 italic">
                  "{review.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{review.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </h4>
                  <span className="text-xs text-amber-300/80 block">{review.role}</span>
                  <span className="text-[11px] text-stone-500">{review.city}</span>
                </div>
                <span className="text-[10px] text-stone-500 text-right">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
