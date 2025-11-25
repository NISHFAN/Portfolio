export default function Header() {
  return (
    <header className="bg-gradient-to-r from-mint to-sky">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    <div className="flex items-center gap-4">
      {/* Profile Photo */}
      <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg ring-2 ring-primary/35">
        <img 
          src="/dp.jpg" 
          alt="MN" 
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h1 className="text-3xl font-semibold">Mohamed Nishfan</h1>
        <p className="text-sm">BSc. Hons. in Science and Technology (Mechatronics Specialization) • AI/ML Enthusiast</p>
      </div>
    </div>

    <nav className="hidden md:flex gap-6 items-center font-semibold">
      <a href="#projects" className="text-sm hover:underline">Projects</a>
      <a href="#experience" className="text-sm hover:underline">Experience</a>
      <a href="#contact" className="text-sm hover:underline">Contact</a>
      <a href="/Mohamed_Nisfan_Resume.pdf" download className="text-sm px-4 py-2 rounded-lg bg-white/90 shadow">Download CV</a>
    </nav>
  </div>
</header>
  )
}