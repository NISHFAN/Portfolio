import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const projects = [
  {
    title: 'Machine Health Monitoring (DBM)',
    desc: 'Real-time monitoring of motor temperature, voltage, & vibration with a Deep Boltzmann Machine for anomaly detection. Shows alerts and visualizations.',
    tags: ['Python', 'Deep Learning', 'Sensors', 'Raspberry Pi'],
    href: '#',
    year: '2025',
  },
  {
    title: 'SymptoGuide : Healthcare Website',
    desc: 'Multilingual (EN / SI / TA) health information platform with AI-assisted features and structured disease info for Sri Lanka.',
    tags: ['React', 'Machine Learning', 'i18n', 'JavaScript'],
    href: 'https://github.com/NISHFAN/SymptoGuide',
    year: '2024',
  },
  {
    title: 'Machinery Identification with Image Processing',
    desc: 'Image classifier to automatically identify machinery and parts in the workshop using deep learning and OpenCV.',
    tags: ['TensorFlow', 'Image Processing', 'Python'],
    href: 'https://github.com/NISHFAN/opencv_identifying_machinaries',
    year: '2024',
  },
  {
    title: "Sign-Language Detection using Python & Scikit-learn",
    desc: "Developed a machine learning-based application to recognize and interpret sign language gestures (real-time gesture classification)",
    tags: ['Python','OpenCV','Scikit-learn','MediaPipe'],
    href: "https://github.com/NISHFAN/Sign_Language_Detection",
    year: '2025',
  }
]

const skills = {
  Programming: ['JavaScript', 'Python', 'C', 'C++', 'HTML', 'CSS'],
  Frameworks: ['React', 'Next.js', 'Tailwind CSS'],
  AI_ML: ['Machine Learning','Deep Learning', 'OpenCV', 'TensorFlow', 'PyTorch'],
  Embedded: ['Arduino', 'ESP32', 'Sensors', 'IoT'],
  Tools: ['Git', 'VS Code', 'Figma', 'Node.js'],
  Mechanical_Design: ['SolidWorks', 'AutoCAD', 'MATLAB']
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Head>
        <title>Mohamed Nishfan Portfolio</title>
        <meta name="description" content="Mechatronics undergraduate, software engineer, AI/ML enthusiast" />
      </Head>

      <Header />

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold leading-tight">I build intelligent software and real-time hardware systems.</h2>
            <p className="mt-4 text-gray-700">Undergraduate in Science and Technology (Mechatronics Specialization) at Uva Wellassa University. I bridge hardware and software, creating embedded systems, computer vision pipelines, and ML models that solve real industrial problems.</p>

            <div className="mt-6 flex gap-4">
              <a href="#projects" className="px-5 py-3 rounded-lg bg-primary text-white shadow hover:opacity-90">See Projects</a>
              <a href="mailto:mohammeddnishfan9295@gmail.com" className="px-5 py-3 rounded-lg border border-gray-300">Get in touch</a>
            </div>

            <div className="mt-6 flex gap-3 text-sm text-gray-600">
              <div><strong>Location:</strong> Sri Lanka</div>
              <div>|</div>
              <div><strong>Looking for:</strong> Jobs related to Software AI/ML</div>
            </div>
          </div>

          <div className="bg-[#F7FFF7] rounded-2xl p-6 shadow-lg">
            <h3 className="font-semibold mb-4">Quick highlights</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✅ Industrial level experience with CAD softwares</li>
              <li>✅ Real-time machine health monitoring with DBM</li>
              <li>✅ Full-stack multilingual healthcare platform (SymptoGuide)</li>
              <li>✅ Strong foundation in embedded systems and AI</li>
            </ul>
          </div>
        </section>

        {/* ABOUT & SKILLS */}
        <section className="mt-14 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold">About Me</h3>
            <p className="mt-3 text-gray-700">I am an Undergrad in Science and Technology (Mechatronics Specialization) with a passion for software and machine learning. My experience spans machine learning, embedded systems, real-time sensor integration, and computer vision for industrial automation. I enjoy turning messy, real-world problems into elegant software + hardware solutions.</p>

            <div className="mt-6">
              <h4 className="font-medium">Selected Projects</h4>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {projects.map((p) => (
                  <article key={p.title} className="p-4 rounded-xl border shadow-sm bg-white">
                    <h5 className="font-semibold">{p.title}</h5>
                    <p className="text-sm mt-2 text-gray-600">{p.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded bg-gray-100">{t}</span>
                      ))}
                    </div>
                    <a href={p.href} className="mt-3 inline-block text-sm text-primary hover:underline">View details</a>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <aside className="p-6 rounded-xl border bg-white">
            <h4 className="font-semibold">Skills</h4>
            <div className="mt-4 space-y-4">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group}>
                  <div className="text-sm text-gray-600">{group}</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {items.map((s) => (
                      <span key={s} className="px-3 py-1 text-xs rounded-full border">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="font-semibold">Tools</h4>
              <div className="mt-2 text-sm text-gray-700">Git • VS Code • Figma • AutoCAD • SolidWorkS</div>
            </div>
          </aside>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-14">
          <h3 className="text-2xl font-semibold">Projects</h3>
          <p className="mt-2 text-gray-600">Selected work — click through for details and code.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {projects.map((proj) => (
              <div key={proj.title} className="p-6 rounded-2xl border bg-white shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-lg">{proj.title}</h4>
                    <p className="mt-2 text-gray-600">{proj.desc}</p>
                  </div>
                  <div className="text-sm text-gray-500">{proj.year}</div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {proj.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-gray-100">{t}</span>
                  ))}
                </div>

                <div className="mt-4 flex gap-3">
                  <a href={proj.href} className="px-4 py-2 border rounded">View</a>
                  <a href={proj.href} className="px-4 py-2 bg-primary text-white rounded">Source</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mt-14">
          <h3 className="text-2xl font-semibold">Experience</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border bg-white shadow-sm">
              <h4 className="font-semibold">Undergraduate Trainee — CWMACKIE PLC (Scan Division)</h4>
              <div className="text-sm text-gray-500 mt-1">2025 — Internship</div>
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                <li>Created detailed technical drawings and layouts using AutoCAD</li>
                <li>Designed mechanical components and assemblies using SolidWorks</li>
                <li>Planned and Maintained maintenance jobs for the machinery</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border bg-white shadow-sm">
              <h4 className="font-semibold">Academic Projects & Research</h4>
              <div className="text-sm text-gray-500 mt-1">2021–2025</div>
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                <li>Real-time machine health monitoring system with DBM for anomaly detection.</li>
                <li>Mobile-controlled Arduino home assistant (Door/Window/Lights) with manual switch override.</li>
                <li>CNC design and G-code projects for CAD/CAM coursework.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-14 mb-20 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-semibold">Contact</h3>
            <p className="mt-2 text-gray-600">I’m open to job roles related with software engineering, ML, and embedded systems. Reach out and let’s talk about how I can contribute.</p>

            <div className="mt-6">
              <p className="text-sm"><strong>Email:</strong> mohammeddnishfan9295@gmail.com</p>
              <p className="text-sm mt-2"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/mohamed-nisfan-mohamed-nisthar-956b25216" className="text-primary hover:underline">Linkedin/Nishfan</a></p>
              <p className="text-sm mt-2"><strong>GitHub:</strong> <a href="github.com/NISHFAN" className="text-primary hover:underline">Github/Nishfan</a></p>
            </div>
          </div>

          <div>
            <form action={`mailto:mohammeddnishfan9295@gmail.com`} method="GET" className="space-y-4">
              <div>
                <label className="text-sm">Your name</label>
                <input name="name" className="w-full mt-1 px-3 py-2 border rounded" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <input name="email" className="w-full mt-1 px-3 py-2 border rounded" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm">Message</label>
                <textarea name="message" rows={4} className="w-full mt-1 px-3 py-2 border rounded" placeholder="Hi, I am interested in..." />
              </div>
              <div className="flex gap-3">
                <button type="submit" className="px-4 py-2 bg-primary text-white rounded">Send</button>
                <a href="/Mohamed_Nisfan_Resume.pdf" download className="px-4 py-2 border rounded">Download Resume</a>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
