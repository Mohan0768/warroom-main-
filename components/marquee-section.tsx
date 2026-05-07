'use client'

export function MarqueeSection() {
  const items = [
    'AI can\'t replace YOU',
    '●',
    'AI in Leadership - Untold Stories of Managers in AI adoption',
    '●',
    'Costly AI Mistakes : The Thinking Gap',
    '●',
    'Future of Work',
    '●',
    'Next Gen Entrepreneurs',
  ]

  return (
    <section className="py-12 bg-gray-100 overflow-hidden border-y border-gray-200">
      <div className="flex gap-8 whitespace-nowrap animate-scroll">
        {/* First set */}
        {items.map((item, idx) => (
          <span key={idx} className="text-sm md:text-base font-medium text-gray-700 flex-shrink-0">
            {item}
          </span>
        ))}
        {/* Second set for continuous loop */}
        {items.map((item, idx) => (
          <span key={`repeat-${idx}`} className="text-sm md:text-base font-medium text-gray-700 flex-shrink-0">
            {item}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
