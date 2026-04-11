import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center p-6 md:p-12 lg:p-24 selection:bg-black selection:text-white">
      <main className="w-full max-w-4xl flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-10">
        
        {/* Header Block (Spans 2 columns on tablet/desktop) */}
        <section className="col-span-1 md:col-span-2 border-4 border-black bg-[#87ceeb] p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col items-start gap-4">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-black">
            염지윤
          </h1>
          <div className="border-t-4 border-black w-full my-2"></div>
          <p className="text-xl md:text-2xl font-bold bg-white px-4 py-2 border-2 border-black inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Vibe Coding Learner
          </p>
        </section>

        {/* Intro Block */}
        <section className="col-span-1 border-4 border-black bg-[#fefce8] p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center">
          <h2 className="text-3xl font-black mb-4">About Me</h2>
          <p className="text-lg font-bold leading-relaxed">
            안녕하세요! 바이브 코딩을 배우고 있는 대학생입니다. 새로운 기술을 탐구하고 즐겁게 배우는 것을 좋아합니다.
          </p>
        </section>

        {/* Links / Socials Block */}
        <section className="col-span-1 border-4 border-black bg-[#f472b6] p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-6">
          <h2 className="text-3xl font-black text-black">Connect</h2>
          
          <Link
            href="https://github.com/jiyun-youm"
            target="_blank"
            className="group flex items-center justify-between border-4 border-black bg-white px-6 py-4 text-xl font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none hover:bg-black hover:text-white"
          >
            <span>GitHub</span>
            <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
          </Link>

          <Link
            href="#"
            className="group flex items-center justify-between border-4 border-black bg-white px-6 py-4 text-xl font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none hover:bg-black hover:text-white"
          >
            <span>Blog</span>
            <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </section>

        {/* Skills Block (Spans 2 columns on tablet/desktop) */}
        <section className="col-span-1 md:col-span-2 border-4 border-black bg-[#a7f3d0] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-3xl font-black mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-4">
            {['Next.js', 'React', 'TailwindCSS', 'TypeScript', 'Vibe Coding'].map((skill, index) => (
              <span 
                key={index} 
                className="border-2 border-black bg-white px-4 py-2 text-lg font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:rotate-2 transition-transform cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
        
      </main>
    </div>
  );
}
