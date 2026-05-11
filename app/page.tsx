export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden font-sans scroll-smooth">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050505,#070707,#050505)]" />

        <div className="absolute top-[-200px] left-1/3 w-[700px] h-[700px] bg-[#b08d57]/10 blur-[180px] animate-pulse" />

        <div className="absolute bottom-[-300px] right-0 w-[600px] h-[600px] bg-[#b08d57]/5 blur-[180px]" />

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:80px_80px]" />

      </div>

      {/* NAVBAR */}
<nav className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-2xl">

  <div className="max-w-7xl mx-auto px-4 py-4">

    {/* MOBILE + DESKTOP CONTAINER */}
    <div className="flex items-center justify-between gap-4">

      {/* LEFT */}
      <div className="flex items-center gap-3 min-w-0">

        <img
          src="/logo.png"
          alt="Quiet Heures"
          className="w-12 h-12 md:w-20 md:h-20 object-contain shrink-0 transition-all duration-500 hover:scale-105"
        />

        <div className="min-w-0">

          <h1 className="text-[11px] sm:text-sm md:text-2xl tracking-[0.18em] md:tracking-[0.4em] uppercase font-light leading-none whitespace-nowrap">
            Quiet Heures
          </h1>

          <p className="text-[8px] md:text-xs tracking-[0.18em] md:tracking-[0.25em] uppercase text-[#b08d57]/70 mt-2">
            Emotional Sanctuary
          </p>

        </div>

      </div>

      {/* RIGHT */}
      <div className="flex items-center">

        <a
          href="#waitlist"
          className="border border-[#b08d57]/30 bg-[#b08d57]/10 hover:bg-[#b08d57]/20 transition-all duration-300 px-3 md:px-5 py-2 rounded-md uppercase tracking-[0.12em] text-[9px] md:text-sm whitespace-nowrap"
        >
          Join
        </a>

      </div>

    </div>

    {/* DESKTOP LINKS */}
    <div className="hidden md:flex items-center justify-end gap-6 pt-4 text-sm text-white/40">

      <a
        href="https://www.instagram.com/quietheures/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#b08d57] transition-colors"
      >
        Instagram
      </a>

      <a
        href="https://www.tiktok.com/@quietheures"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#b08d57] transition-colors"
      >
        TikTok
      </a>

      <a
        href="#vision"
        className="hover:text-[#b08d57] transition-colors"
      >
        Vision
      </a>

      <a
        href="#spaces"
        className="hover:text-[#b08d57] transition-colors"
      >
        Spaces
      </a>

    </div>

  </div>

</nav>


      {/* HERO */}
      <section className="relative min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 md:py-24 grid lg:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* LEFT */}
          <div className="space-y-10">

            <div className="inline-flex items-center gap-3 border border-[#b08d57]/20 bg-[#b08d57]/5 px-4 md:px-5 py-3 rounded-md text-xs md:text-sm uppercase tracking-[0.25em] text-[#b08d57] backdrop-blur-xl hover:scale-[1.02] transition-all duration-500">

              <div className="w-2 h-2 bg-[#b08d57] animate-pulse" />

              Future Urban Sanctuary

            </div>

            <div className="space-y-8">

              <h1 className="text-4xl sm:text-5xl md:text-8xl leading-[0.95] font-light tracking-tight">

                Connect.

                <span className="block text-white/35">
                  Create.
                </span>

                <span className="block bg-gradient-to-r from-white via-[#d7c1a0] to-[#b08d57] bg-clip-text text-transparent">
                  Cultivate.
                </span>

              </h1>

              <p className="uppercase tracking-[0.2em] text-[10px] md:text-xs text-white/40">
                Hospitality • Wellness • Culture • Community
              </p>

              <p className="text-base md:text-xl text-white/55 leading-relaxed max-w-2xl">

                Quiet Heures is a next-generation members sanctuary designed
                for emotional recovery, creativity, wellness, deep rest,
                meaningful connection, and elevated urban living.

                <br />
                <br />

                Blending hospitality, wellness,
                culture, and community into one immersive ecosystem,
                Quiet Heures reimagines what modern cities should feel like.

              </p>

            </div>

            {/* HERO WAITLIST */}
            <form
              action="https://formsubmit.co/heuresquiet@gmail.com"
              method="POST"
              className="space-y-5"
            >

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full bg-black/40 border border-white/10 px-5 md:px-7 py-4 md:py-5 rounded-md outline-none focus:border-[#b08d57]/40 text-base md:text-lg transition-all duration-300 focus:scale-[1.01]"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Why would a space like Quiet Heures matter to you?"
                className="w-full bg-black/40 border border-white/10 px-5 md:px-7 py-4 md:py-5 rounded-md outline-none focus:border-[#b08d57]/40 text-base md:text-lg resize-none transition-all duration-300 focus:scale-[1.01]"
              />

              <button
                type="submit"
                className="w-full border border-[#b08d57]/30 bg-[#b08d57]/10 hover:bg-[#b08d57]/20 transition-all duration-500 px-8 py-4 md:py-5 rounded-md text-white uppercase tracking-[0.15em] hover:-translate-y-[2px]"
              >
                Join Waitlist
              </button>

            </form>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <div className="relative overflow-hidden rounded-xl border border-white/10 group">

              <img
                src="/vision-exterior.jpg"
                alt="Quiet Heures"
                className="w-full h-[420px] md:h-[720px] object-cover transition-transform duration-[4000ms] group-hover:scale-105 group-hover:rotate-[0.3deg]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 border border-white/10 bg-black/40 backdrop-blur-xl p-4 md:p-8 rounded-lg transition-all duration-500 group-hover:translate-y-[-4px]">

                <p className="uppercase tracking-[0.3em] text-[10px] md:text-xs text-[#b08d57] mb-4">
                  Architectural Vision
                </p>

                <h3 className="text-2xl md:text-3xl font-light mb-4">
                  A city within the city.
                </h3>

                <p className="text-sm md:text-base text-white/50 leading-relaxed">

                  A sanctuary designed around emotional recovery,
                  wellness, creativity, and meaningful human connection.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* VISION */}
      <section
        id="vision"
        className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-16 md:gap-20 items-center"
      >

        <div className="space-y-8">

          <div>

            <p className="uppercase tracking-[0.35em] text-sm text-[#b08d57] mb-5">
              Why This Exists
            </p>

            <h2 className="text-3xl sm:text-5xl md:text-7xl leading-[1] font-light tracking-tight">

              Modern cities

              <span className="block text-white/30">
                forgot humanity.
              </span>

            </h2>

          </div>

          <div className="space-y-6 text-white/55 text-base md:text-lg leading-relaxed">

            <p>
              Quiet Heures was created in response to emotional exhaustion,
              overstimulation, loneliness, and disconnection in modern city life.
            </p>

            <p>
              We are building a sanctuary for thinkers, creatives,
              entrepreneurs, introverts, artists, and wellness seekers centered
              around calmness, restoration, beauty, and genuine connection.
            </p>

            <p>
              Quiet Heures combines the atmosphere of a luxury members club,
              wellness retreat, boutique hotel, and creative sanctuary into one immersive experience.
            </p>

          </div>

        </div>

        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-xl border border-white/10 group">

          <img
            src="/vision-interior.jpg"
            alt="Quiet Heures Interior"
            className="w-full h-[420px] md:h-[720px] object-cover transition-transform duration-[4000ms] group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

        </div>

      </section>

      {/* SPACES */}
      <section
        id="spaces"
        className="border-y border-white/10 bg-white/[0.02]"
      >

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-24">

          <div className="max-w-4xl mb-16 md:mb-20">

            <p className="uppercase tracking-[0.35em] text-sm text-[#b08d57] mb-5">
              Inside Quiet Heures
            </p>

            <h2 className="text-3xl sm:text-5xl md:text-7xl leading-[1] font-light tracking-tight mb-8">

              Designed for every

              <span className="block text-white/30">
                emotional state.
              </span>

            </h2>

            <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-3xl">

              Quiet Heures blends hospitality, wellness,
              culture, and emotional restoration into one immersive sanctuary.

            </p>

          </div>

          {/* SERVICES */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">

            {[
              {
                title: "Recovery Pods",
                description:
                  "Private decompression suites designed for deep rest, meditation, and nervous-system recovery.",
              },

              {
                title: "Quiet Library",
                description:
                  "A silent sanctuary with curated books, reflective lounges, and focus environments.",
              },

              {
                title: "Dining Commons",
                description:
                  "Wellness-centered dining experiences featuring tea lounges and elevated hospitality.",
              },

              {
                title: "Wellness & Fitness",
                description:
                  "Holistic wellness spaces including movement studios, yoga, mindfulness, and recovery rooms.",
              },

              {
                title: "Creative Studios",
                description:
                  "Dedicated environments for artists, founders, musicians, designers, and creators.",
              },

              {
                title: "Social Lounges",
                description:
                  "Curated spaces designed for meaningful conversation and connection.",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="group border-b border-white/10 pb-8 hover:border-[#b08d57]/30 transition-all duration-500"
              >

                <div className="flex items-start gap-5">

                  <p className="text-[#b08d57]/60 text-xs tracking-[0.25em] pt-2">
                    0{index + 1}
                  </p>

                  <div className="space-y-3">

                    <h3 className="text-xl md:text-3xl font-light group-hover:text-[#d7c1a0] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-white/45 leading-relaxed">
                      {item.description}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WAITLIST */}
      <section
        id="waitlist"
        className="max-w-5xl mx-auto px-4 md:px-6 py-20 md:py-28"
      >

        <div className="border border-white/10 bg-gradient-to-br from-[#b08d57]/5 to-transparent p-6 md:p-14 rounded-xl backdrop-blur-xl text-center">

          <p className="uppercase tracking-[0.35em] text-sm text-[#b08d57] mb-6">
            Founding Community
          </p>

          <h2 className="text-3xl sm:text-5xl md:text-7xl leading-[1] font-light tracking-tight mb-8">

            Help shape the future

            <span className="block text-white/30">
              of cities.
            </span>

          </h2>

          <p className="text-white/40 text-xs md:text-sm uppercase tracking-[0.2em] mb-8">

            Founding waitlist members receive first access to memberships,
            launch events, and future Quiet Heures experiences.

          </p>

          <p className="text-base md:text-lg text-white/55 max-w-3xl mx-auto leading-relaxed mb-14">

            Joining the Quiet Heures founding waitlist gives you early access
            to memberships, launch announcements, private experiences,
            and the first wave of community offerings.

            <br />
            <br />

            Your support also helps demonstrate real demand to investors,
            collaborators, and strategic partners helping us build the future
            of emotionally intelligent urban living.

          </p>

          {/* WAITLIST FORM */}
          <form
            action="https://formsubmit.co/heuresquiet@gmail.com"
            method="POST"
            className="max-w-3xl mx-auto space-y-5"
          >

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full bg-black/40 border border-white/10 px-5 md:px-7 py-4 md:py-5 rounded-md outline-none focus:border-[#b08d57]/40 text-base md:text-lg transition-all duration-300"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Why would a space like Quiet Heures matter to you?"
              className="w-full bg-black/40 border border-white/10 px-5 md:px-7 py-4 md:py-5 rounded-md outline-none focus:border-[#b08d57]/40 text-base md:text-lg resize-none transition-all duration-300"
            />

            <button
              type="submit"
              className="w-full border border-[#b08d57]/30 bg-[#b08d57]/10 hover:bg-[#b08d57]/20 transition-all duration-500 px-8 py-4 md:py-5 rounded-md text-white uppercase tracking-[0.15em]"
            >
              Join Waitlist
            </button>

          </form>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10">

        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex items-center gap-4">

            <img
              src="/logo.png"
              alt="Quiet Heures Logo"
              className="w-14 h-14 object-contain"
            />

            <p className="uppercase tracking-[0.25em] text-white/40 text-xs md:text-sm">
              Quiet Heures
            </p>

          </div>

          <div className="flex items-center gap-6 text-white/40 text-sm">

            <a
              href="https://www.instagram.com/quietheures/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#b08d57] transition-colors"
            >
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/@quietheures"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#b08d57] transition-colors"
            >
              TikTok
            </a>

          </div>

        </div>

      </footer>

    </div>
  )
}
