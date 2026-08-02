import Link from 'next/link';
import { Calendar, Clock, MapPin, Heart, BookOpen, Users, Sparkles } from 'lucide-react';

export default function YouthPage() {
  const youthEvents = [
    {
      title: 'Youth Fellowship & Worship Night',
      date: 'Every 2nd & 4th Saturday',
      time: '17:00 - 19:30',
      location: 'CEC Church Hall, Dachau',
      description: 'Join us for energetic worship, biblical teaching tailored for young adults, and fellowship.',
    },
    {
      title: 'Bible Study & Small Groups',
      date: 'Every Thursday',
      time: '18:30 - 20:00',
      location: 'Online (Zoom) / In-Person',
      description: 'Diving deep into the Word of God, discussing real-life topics, and praying for one another.',
    },
    {
      title: 'Youth Summer Retreat',
      date: 'August 14 - 16, 2026',
      time: 'Full Weekend',
      location: 'Bavarian Alps',
      description: 'A weekend away from routine to connect with God, build lasting friendships, and enjoy outdoor activities.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[480px] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
        {/* Darkened overlay background */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/youth-hero.jpg')" }} // Add your photo here
        />

        <div className="relative z-20 max-w-4xl mx-auto text-center px-6 space-y-4">
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CEC Youth Ministry</span>
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-white">
            Rising Up in Faith, Love &amp; Purpose
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Empowering the young generation in Munich to know Christ, grow in community, and impact the world around them.
          </p>
        </div>
      </section>

      {/* Core Values / What We Do */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What Drives Us</h2>
          <p className="text-slate-600 text-sm md:text-base">
            Building a strong foundation rooted in God&apos;s Word and authentic community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Word &amp; Truth</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We unpack Scripture together to navigate real-world challenges, faith, academics, and relationships with wisdom.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Authentic Fellowship</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              No pretense—just genuine friendships where young people support, encourage, and sharpen one another.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Worship &amp; Service</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Living out our faith through passionate worship, serving our church, and reaching out to the Munich community.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Youth Gatherings */}
      <section className="bg-slate-100/70 border-y border-slate-200 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Youth Events &amp; Gatherings</h2>
            <p className="text-slate-600 text-sm md:text-base">
              Everyone aged 13–30 is welcome to join our meetings!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {youthEvents.map((event, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-900">{event.title}</h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved / Call to Action */}
      <section className="max-w-4xl mx-auto py-16 px-6 text-center">
        <div className="bg-[#182736] text-white rounded-3xl p-8 md:p-12 space-y-6 shadow-xl">
          <h2 className="text-2xl md:text-4xl font-serif font-bold">
            Want to Connect with CEC Youth?
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Whether you are new in Munich, studying, or looking for a vibrant spiritual home, we would love to welcome you.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:youth@cecmunich.de"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 transition-colors"
            >
              Contact Youth Leaders
            </a>
            <Link
              href="/events"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 font-semibold hover:bg-slate-700 transition-colors"
            >
              View Full Calendar
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}