export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden font-sans">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#050505,#070707,#050505)]" />

        {/* GLOW */}
        <div className="absolute top-[-200px] left-1/3 w-[700px] h-[700px] bg-[#b08d57]/10 blur-[180px] animate-pulse" />

        <div className="absolute bottom-[-300px] right-0 w-[600px] h-[600px] bg-[#b08d57]/5 blur-[180px]" />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:80px_80px]" />

      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-5">

            <img
              src="/logo.png"
              alt="Quiet Heures"
              className="w-24 h-24 object-contain hover:rotate-3 transition-transform duration-500"
            />

            <div>

              <h1 className="text-xl md:text-2xl tracking-[0.45em] uppercase font-light">
                Quiet Heures
              </h1>

              <p className="text-xs tracking-[0.3em] uppercase text-[#b08d57]/70 mt-1">
                Emotional Sanctuary
              </p>

            </div>

          </div>

          {/* NAV */}
          <div className="hidden lg:flex items-center gap-10 text-sm uppercase tracking-[0.2em] text-white/50">

            <a href="#vision" className="hover:text-[#b08d57] transition-colors">
              Vision
            </a>

            <a href="#spaces" className="hover:text-[#b08d57] transition-colors">
              Spaces
            </a>

            <a href="#waitlist" className="hover:text-[#b08d57] transition-colors">
              Waitlist
            </a>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-5">

            <a
              href="https://www.instagram.com/quietheures/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#b08d57] transition-colors"
            >
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/@quietheures"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#b08d57] transition-colors"
            >
              TikTok
            </a>

            <a
              href="#waitlist"
              className="border border-[#b08d57]/30 bg-[#b08d57]/10 hover:bg-[#b08d57]/20 transition-all px-6 py-3 rounded-md uppercase tracking-[0.2em] text-sm"
            >
              Join Waitlist
            </a>

          </div>

        </div>

      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div className="space-y-10">

            {/* TAG */}
            <div className="inline-flex items-center gap-3 border border-[#b08d57]/20 bg-[#b08d57]/5 px-5 py-3 rounded-md text-sm uppercase tracking-[0.25em] text-[#b08d57] backdrop-blur-xl">

              <div className="w-2 h-2 bg-[#b08d57] animate-pulse" />

              Future Urban Sanctuary

            </div>

            {/* HEADLINE */}
            <div className="space-y-8">

              <h1 className="text-6xl md:text-8xl leading-[0.9] font-light tracking-tight">

                Connect.

                <span className="block text-white/35">
                  Create.
                </span>

                <span className="block bg-gradient-to-r from-white via-[#d7c1a0] to-[#b08d57] bg-clip-text text-transparent">
                  Cultivate.
                </span>

              </h1>

              <p className="uppercase tracking-[0.25em] text-xs text-white/40">
                Hospitality • Wellness • Culture • Community
              </p>

              <p className="text-xl text-white/55 leading-relaxed max-w-2xl">

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
                className="w-full bg-black/40 border border-white/10 px-7 py-5 rounded-md outline-none focus:border-[#b08d57]/40 text-lg"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Why would a space like Quiet Heures matter to you?"
                className="w-full bg-black/40 border border-white/10 px-7 py-5 rounded-md outline-none focus:border-[#b08d57]/40 text-lg resize-none"
              />

              <button
                type="submit"
                className="w-full border border-[#b08d57]/30 bg-[#b08d57]/10 hover:bg-[#b08d57]/20 transition-all px-8 py-5 rounded-md text-white uppercase tracking-[0.15em]"
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
                className="w-full h-[720px] object-cover transition-transform duration-[4000ms] group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 border border-white/10 bg-black/40 backdrop-blur-xl p-8 rounded-lg">

                <p className="uppercase tracking-[0.3em] text-xs text-[#b08d57] mb-4">
                  Architectural Vision
                </p>

                <h3 className="text-3xl font-light mb-4">
                  A city within the city.
                </h3>

                <p className="text-white/50 leading-relaxed">

                  A sanctuary designed around emotional recovery,
                  wellness, creativity, and meaningful human connection.

                </p>

              </div>

            </div>

            {/* FLOATING LINE */}
            <div className="absolute -left-10 top-20 w-[1px] h-40 bg-gradient-to-b from-[#b08d57] to-transparent animate-pulse" />

          </div>

        </div>

      </section>

      {/* VISION */}
      <section
        id="vision"
        className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-20 items-center"
      >

        {/* LEFT */}
        <div className="space-y-8">

          <div>

            <p className="uppercase tracking-[0.35em] text-sm text-[#b08d57] mb-5">
              Why This Exists
            </p>

            <h2 className="text-5xl md:text-7xl leading-[1] font-light tracking-tight">

              Modern cities

              <span className="block text-white/30">
                forgot humanity.
              </span>

            </h2>

          </div>

          <div className="space-y-6 text-white/55 text-lg leading-relaxed">

            <p>
              Quiet Heures was created in response to the emotional exhaustion,
              overstimulation, loneliness, and disconnection experienced in modern city life.
            </p>

            <p>
              We are building a sanctuary for thinkers, creatives,
              entrepreneurs, introverts, artists, wellness seekers,
              and emotionally intelligent communities centered around calmness,
              restoration, beauty, and genuine human connection.
            </p>

            <p>
              Quiet Heures combines the atmosphere of a luxury members club,
              wellness retreat, boutique hotel, creative sanctuary,
              and cultural community into one immersive urban experience.
            </p>

          </div>

        </div>

        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-xl border border-white/10 group">

          <img
            src="/vision-interior.jpg"
            alt="Quiet Heures Interior"
            className="w-full h-[720px] object-cover transition-transform duration-[4000ms] group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

        </div>

      </section>

      {/* SPACES */}
      <section
        id="spaces"
        className="border-y border-white/10 bg-white/[0.02]"
      >

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="max-w-4xl mb-20">

            <p className="uppercase tracking-[0.35em] text-sm text-[#b08d57] mb-5">
              Inside Quiet Heures
            </p>

            <h2 className="text-5xl md:text-7xl leading-[1] font-light tracking-tight mb-8">

              Designed for every

              <span className="block text-white/30">
                emotional state.
              </span>

            </h2>

            <p className="text-lg text-white/50 leading-relaxed max-w-3xl">

              Quiet Heures blends hospitality, wellness,
              culture, and emotional restoration into one immersive sanctuary.

            </p>

          </div>

          {/* SERVICES */}
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">

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
                  "Holistic wellness spaces including movement studios, recovery rooms, yoga, and mindfulness.",
              },

              {
                title: "Creative Studios",
                description:
                  "Dedicated environments for artists, founders, musicians, designers, and creators.",
              },

              {
                title: "Social Lounges",
                description:
                  "Curated spaces designed for conversation, networking, and meaningful connection.",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="group border-b border-white/10 pb-8 hover:border-[#b08d57]/30 transition-all"
              >

                <div className="flex items-start gap-5">

                  <div className="pt-1">

                    <p className="text-[#b08d57]/60 text-xs tracking-[0.25em]">
                      0{index + 1}
                    </p>

                  </div>

                  <div className="space-y-3">

                    <h3 className="text-2xl md:text-3xl font-light group-hover:text-[#d7c1a0] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-white/45 text-base leading-relaxed max-w-xl">
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
        className="max-w-5xl mx-auto px-6 py-28"
      >

        <div className="border border-white/10 bg-gradient-to-br from-[#b08d57]/5 to-transparent p-14 rounded-xl backdrop-blur-xl text-center">

          <p className="uppercase tracking-[0.35em] text-sm text-[#b08d57] mb-6">
            Founding Community
          </p>

          <h2 className="text-5xl md:text-7xl leading-[1] font-light tracking-tight mb-8">

            Help shape the future

            <span className="block text-white/30">
              of human-centered cities.
            </span>

          </h2>

          <p className="text-white/40 text-sm uppercase tracking-[0.25em] mb-8">

            Founding waitlist members will receive first access
            to memberships, launch events, experiences,
            and future Quiet Heures locations.

          </p>

          <p className="text-lg text-white/55 max-w-3xl mx-auto leading-relaxed mb-14">

            Joining the Quiet Heures founding waitlist gives you early access
            to future memberships, launch announcements, private experiences,
            and the first wave of community offerings when we officially open.

            <br />
            <br />

            Your support also helps demonstrate real demand to future investors,
            wellness collaborators, and strategic partners helping us
            build the future of emotionally intelligent urban living.

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
              className="w-full bg-black/40 border border-white/10 px-7 py-5 rounded-md outline-none focus:border-[#b08d57]/40 text-lg"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Why would a space like Quiet Heures matter to you?"
              className="w-full bg-black/40 border border-white/10 px-7 py-5 rounded-md outline-none focus:border-[#b08d57]/40 text-lg resize-none"
            />

            <button
              type="submit"
              className="w-full border border-[#b08d57]/30 bg-[#b08d57]/10 hover:bg-[#b08d57]/20 transition-all px-8 py-5 rounded-md text-white uppercase tracking-[0.15em]"
            >
              Join Waitlist
            </button>

          </form>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex items-center gap-4">

            <img
              src="/logo.png"
              alt="Quiet Heures Logo"
              className="w-16 h-16 object-contain"
            />

            <p className="uppercase tracking-[0.3em] text-white/40 text-sm">
              Quiet Heures
            </p>

          </div>

          <div className="flex items-center gap-6 text-white/40">

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
