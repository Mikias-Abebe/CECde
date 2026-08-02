import Link from 'next/link';
import { Heart, Globe, ShieldCheck, ArrowRight, DollarSign, Award, Users } from 'lucide-react';

export default function RedietPage() {
  const focusAreas = [
    
    {
      title: 'Human Rights Advocacy',
      description: 'Promoting justice, equality, and dignity while amplifying the voices of marginalized and affected populations.',
      icon: ShieldCheck,
    },
    {
      title: 'Community Empowerment',
      description: 'Supporting sustainable development through education, healthcare access, and economic self-sufficiency initiatives.',
      icon: Globe,
    },
  ];

  const projects = [
    {
      tag: 'Emergency Relief',
      title: 'Family Food & Essential Supplies',
      description: 'Distributing critical nutrition packages, clean water access, and winter essentials to families in acute need.',
      status: 'Ongoing Program',
    },
    {
      tag: 'Education',
      title: 'Children Educational Support',
      description: 'Providing school supplies, tuition support, and safe learning environments for underprivileged children.',
      status: 'Active',
    },
    {
      tag: 'Healthcare',
      title: 'Medical Aid & Rehabilitation',
      description: 'Facilitating medical assistance, essential hygiene kits, and healthcare support for vulnerable individuals.',
      status: 'Active',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* Hero Section */}
      <section className="relative h-[440px] md:h-[520px] flex items-center justify-center bg-[#182736] text-white overflow-hidden">
        {/* Subtle Background Pattern / Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/80 to-[#182736] z-10" />
        
        <div className="relative z-20 max-w-4xl mx-auto text-center px-6 space-y-5">
          <span className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <Heart className="w-3.5 h-3.5 fill-amber-300" />
            <span>Rediet Humanitarian Initiative</span>
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
            Restoring Hope, Dignity &amp; Compassion
          </h1>
          <p className="text-base md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Partnering with CEC Munich to deliver emergency humanitarian assistance, defend human rights, and empower communities in need.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <a
              href="#donate"
              className="inline-flex items-center space-x-2 bg-amber-500 text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-amber-400 transition-colors shadow-md"
            >
              <DollarSign className="w-4 h-4" />
              <span>Support Our Cause</span>
            </a>
            <a
              href="#mission"
              className="inline-flex items-center space-x-2 bg-slate-800 text-slate-200 border border-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-700 transition-colors"
            >
              <span>Learn More</span>
            </a>
          </div>
        </div>
      </section>

      {/* About & Mission Section */}
      <section id="mission" className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-amber-600 font-semibold text-xs uppercase tracking-widest">
                Who We Are
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-serif text-slate-900">
                Driven by Compassion, Committed to Justice
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              <strong>Rediet</strong> is dedicated to delivering vital humanitarian relief and restoring dignity to individuals and families facing extreme hardship, displacement, and injustice.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              In collaboration with the Christ&apos;s Evangelical Church (CEC) community in Munich, Rediet channels resources directly to high-impact emergency relief projects, child education support, and community assistance programs.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-100 border border-slate-200">
                <p className="text-2xl font-bold text-slate-900">100%</p>
                <p className="text-xs text-slate-600 mt-1">Direct Cause Commitment</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-100 border border-slate-200">
                <p className="text-2xl font-bold text-slate-900">Direct</p>
                <p className="text-xs text-slate-600 mt-1">Community Delivery</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 space-y-6 shadow-xl border border-slate-800">
            <h3 className="text-2xl font-serif font-bold text-amber-300">Our Core Mission</h3>
            <blockquote className="text-slate-300 italic text-base leading-relaxed border-l-2 border-amber-400 pl-4">
              &ldquo;To serve as a beacon of love and practical assistance—standing with the brokenhearted, uplifting those in poverty, and serving as a voice for the vulnerable.&rdquo;
            </blockquote>
            
            <ul className="space-y-3 text-sm text-slate-300 pt-2">
              <li className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Accountability and transparency in every project.</span>
              </li>
              <li className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Grassroots community engagement &amp; localized aid.</span>
              </li>
              <li className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Faith-driven, unconditional love for all human beings.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Strategic Focus Areas */}
      <section className="bg-slate-100/80 border-y border-slate-200 py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Key Focus Areas</h2>
            <p className="text-slate-600 text-sm md:text-base">
              Addressing urgent physical needs while building long-term hope and self-reliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{area.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto py-16 px-6 space-y-12">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Current Initiatives</h2>
          <p className="text-slate-600 text-sm md:text-base">
            Where your contributions and prayers make an immediate impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-100 text-amber-800">
                  {proj.tag}
                </span>
                <h3 className="text-lg font-bold text-slate-900 pt-1">{proj.title}</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium text-emerald-600">● {proj.status}</span>
                <a href="#donate" className="text-amber-600 hover:text-amber-700 font-semibold inline-flex items-center space-x-1">
                  <span>Support</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to Support / Donate Section */}
      <section id="donate" className="max-w-4xl mx-auto pb-16 px-6">
        <div className="bg-[#182736] text-white rounded-3xl p-8 md:p-12 space-y-8 shadow-xl text-center">
          <div className="space-y-3 max-w-xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-serif font-bold">
              Partner With Rediet Today
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Your donation directly funds essential aid packages, child education programs, and emergency support.
            </p>
          </div>

          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 max-w-md mx-auto text-left space-y-3 text-sm">
            <p className="font-semibold text-amber-300 uppercase tracking-wide text-xs">Bank Transfer Information (Germany/EU)</p>
            <div className="space-y-1 text-slate-300 font-mono text-xs">
              <p><span className="text-slate-400">Account Name:</span> Christ&apos;s Evangelical Church / Rediet</p>
              <p><span className="text-slate-400">IBAN:</span> DE89 XXXX XXXX XXXX XXXX XX</p>
              <p><span className="text-slate-400">BIC / SWIFT:</span> BYLADEM1XXX</p>
              <p><span className="text-slate-400">Purpose / Verwendungszweck:</span> Rediet Humanitarian Support</p>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:info@cecmunich.de?subject=Rediet%20Support%20Inquiry"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 transition-colors"
            >
              Inquire / Get Involved
            </a>
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 font-semibold hover:bg-slate-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}