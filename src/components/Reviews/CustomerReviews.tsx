import { Star, CheckCircle } from "lucide-react"
import { REVIEWS } from "../../data/purobiteData"

export default function CustomerReviews() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white border-b border-[#e8e3d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1 text-[#b47919] mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#b47919]" />
            ))}
            <span className="text-xs font-bold text-stone-800 ml-1.5 font-mono">5.0 / 5.0</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-stone-900 font-serif-luxury tracking-tight leading-tight">
            Loved By Mindful <span className="text-[#b47919] italic font-serif">Snackers</span>
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base font-light">
            Genuine taste and texture impressions from verified customers who enjoy our Kolkata-crafted banana chew.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-[#faf8f5] border border-[#e8e3d8] flex flex-col justify-between shadow-2xs hover:border-[#b47919] transition-colors"
            >
              <div>
                {/* Rating stars & verified badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-0.5 text-[#b47919]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#b47919]" />
                    ))}
                  </div>
                  {rev.verifiedPurchase && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      <span>Verified Buyer</span>
                    </span>
                  )}
                </div>

                {/* Headline */}
                <h4 className="text-base font-bold text-stone-900 font-serif-luxury mb-2">
                  "{rev.headline}"
                </h4>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mb-4">
                  {rev.comment}
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-stone-900 block font-serif-luxury">
                    {rev.author}
                  </span>
                  <span className="text-[11px] text-stone-500">{rev.location}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-[#b47919] font-medium block">
                    {rev.packPurchased}
                  </span>
                  <span className="text-[10px] text-stone-400">{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
