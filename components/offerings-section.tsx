import Link from 'next/link'

export function OfferingsSection() {
  const offerings = [
    {
      title: 'WAR ROOM',
      subtitle: 'Live Business Simulation',
      description: 'A 6-stage intensive simulation where you build a business from scratch, make real decisions, and experience the consequences in a risk-free environment.',
      color: 'bg-black',
      textColor: 'text-white',
      buttonColor: 'text-black',
      buttonStyle: { backgroundColor: '#D4A017' }
    },
    {
      title: 'Start With',
      subtitle: 'YOU — Keynote',
      description: 'Transform how you think about your future. This keynote helps leaders and students understand their power in an AI-driven world.',
      color: '#D4A017',
      textColor: 'text-black',
      buttonColor: 'text-white',
      buttonStyle: { backgroundColor: 'black' }
    },
    {
      title: 'The Garage',
      subtitle: 'Build from $0 in 3 Days',
      description: 'An intensive 3-day entrepreneurial sprint where you learn to validate ideas, build MVPs, and think like a founder.',
      color: '#D4A017',
      textColor: 'text-black',
      buttonColor: 'text-white',
      buttonStyle: { backgroundColor: 'black' }
    }
  ]

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="text-xs md:text-sm font-medium text-gray-500 tracking-wide mb-2">Human Advantage • Entrepreneurial Thinking • AI Adoption</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
            Think. Adapt.
            <br />
            Stay in control.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {offerings.map((offering, idx) => (
            <div 
              key={idx}
              className={`${typeof offering.color === 'string' && offering.color.startsWith('bg-') ? offering.color : ''} ${offering.textColor} p-6 md:p-8 rounded-lg flex flex-col justify-between min-h-72 md:min-h-96 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
              style={{ 
                ...(typeof offering.color !== 'string' || !offering.color.startsWith('bg-') ? { backgroundColor: offering.color } : {}),
                animationDelay: `${idx * 0.1}s`
              }}
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-black leading-tight mb-4">
                  {offering.title}
                  <br />
                  {offering.subtitle}
                </h3>
                <p className={`text-sm leading-relaxed ${offering.textColor === 'text-white' ? 'opacity-90' : ''}`}>
                  {offering.description}
                </p>
              </div>
              <Link 
                href={idx === 0 ? '/war-room' : idx === 1 ? '/start-with-you' : '/the-garage'}
                className={`${offering.buttonColor} inline-block px-6 py-2 rounded font-medium text-sm transition-all duration-300 mt-6 w-fit hover:shadow-lg hover:scale-105`}
                style={offering.buttonStyle}
              >
                LEARN MORE
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
