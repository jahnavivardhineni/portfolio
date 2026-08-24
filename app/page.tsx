export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">
          Welcome, Explorer
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          The Map of{" "}
          <span className="text-primary">
            Hinged & Unhinged
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text md:text-xl">
          A little map of the things I build, the things I love,
          the places Ive been, and the wonderfully chaotic human
          behind it all.
        </p>

        <button className="mt-10 rounded-full bg-primary px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30">
          Explore the Map
        </button>
      </section>
    </main>
  );
}