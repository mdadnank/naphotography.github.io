import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Camera, Mail, Phone, MapPin, Check, ExternalLink, Instagram, Facebook, Youtube } from "lucide-react";

export default function PhotographyWebsite() {
  const [active, setActive] = useState("home");
  const [category, setCategory] = useState("all");

  const images = useMemo(
    () => [
      // Landscape & Nature
      { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200", alt: "Mountain sunrise", cat: "landscape" },
      { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200", alt: "Forest path", cat: "landscape" },
      { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&sat=-50", alt: "Misty woods", cat: "landscape" },
      // Portraits
      { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200", alt: "Portrait in golden hour", cat: "portraits" },
      { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200", alt: "Studio portrait", cat: "portraits" },
      // Wildlife
      { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200", alt: "Fox in snow", cat: "wildlife" },
      { src: "https://images.unsplash.com/photo-1501706362039-c06b2d715385?w=1200", alt: "Bird in flight", cat: "wildlife" },
      { src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=1200", alt: "Curious cat", cat: "wildlife" },
    ],
    []
  );

  const filtered = useMemo(
    () => (category === "all" ? images : images.filter((i) => i.cat === category)),
    [category, images]
  );

  const NavLink = ({ id, children }: { id: string; children: React.ReactNode }) => (
    <button
      onClick={() => setActive(id)}
      className={`px-4 py-2 rounded-full text-sm md:text-base transition hover:scale-[1.02] ${
        active === id ? "bg-black text-white" : "bg-white/70 backdrop-blur border"
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen w-full text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Camera className="w-6 h-6" />
            <span className="font-semibold tracking-wide">Nishad Adnan Photography</span>
          </div>
          <nav className="flex items-center gap-2 md:gap-3">
            <NavLink id="home">Home</NavLink>
            <NavLink id="portfolio">Portfolio</NavLink>
            <NavLink id="pricing">Pricing</NavLink>
            <NavLink id="booking">Booking</NavLink>
            <NavLink id="contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      {/* Hero */}
      {active === "home" && (
        <section className="bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold leading-tight"
              >
                Story‑driven photography for <span className="underline decoration-wavy">landscapes</span>, <span className="underline decoration-wavy">portraits</span>, and <span className="underline decoration-wavy">wildlife</span>.
              </motion.h1>
              <p className="mt-4 text-gray-600 md:text-lg">
                I capture honest moments and timeless scenes—from alpine sunrises to candid portraits and the quiet drama of the wild.
              </p>
              <div className="mt-6 flex gap-3">
                <button onClick={() => setActive("booking")} className="px-5 py-3 rounded-xl bg-black text-white flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Book a Session
                </button>
                <button onClick={() => setActive("portfolio")} className="px-5 py-3 rounded-xl border">View Portfolio</button>
              </div>
              <div className="mt-6 flex gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2"><Check className="w-4 h-4"/>Editing included</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4"/>Print‑ready files</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4"/>Travel available</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {images.slice(0,6).map((img, idx) => (
                <motion.img
                  key={idx}
                  src={img.src}
                  alt={img.alt}
                  className={`rounded-2xl object-cover h-28 md:h-40 w-full ${idx % 2 ? "mt-6" : ""}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Portfolio */}
      {active === "portfolio" && (
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold">Portfolio</h2>
              <p className="text-gray-600 mt-2">Browse by collection: landscapes & nature, portraits, and wildlife.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[{id:"all",label:"All"},{id:"landscape",label:"Landscape & Nature"},{id:"portraits",label:"Portraits"},{id:"wildlife",label:"Wildlife"}].map(({id,label}) => (
                <button
                  key={id}
                  onClick={() => setCategory(id)}
                  className={`px-4 py-2 rounded-full border ${category===id?"bg-black text-white":"bg-white"}`}
                >{label}</button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {filtered.map((img, i) => (
              <motion.div key={i} className="group overflow-hidden rounded-2xl border" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4, delay: i*0.03}}>
                <img src={img.src} alt={img.alt} className="w-full h-64 object-cover group-hover:scale-[1.02] transition"/>
                <div className="p-3 text-sm text-gray-600 flex items-center justify-between">
                  <span className="capitalize">{img.cat}</span>
                  <a href={img.src} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline">Open <ExternalLink className="w-3 h-3"/></a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Pricing */}
      {active === "pricing" && (
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-4xl font-bold">Pricing</h2>
          <p className="text-gray-600 mt-2">Transparent, session‑based pricing. Custom packages available on request.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[{
              title:"Portrait Session",
              price:"$249",
              features:["Up to 60 minutes","One location","20 edited images","Online gallery & print rights"]
            },{
              title:"Landscape Print Package",
              price:"$199+",
              features:["Open edition prints","Archival paper options","Framing available","Worldwide shipping"]
            },{
              title:"Wildlife/Field Day",
              price:"$499",
              features:["Half‑day coverage","On‑location scouting","30+ edited images","Commercial licensing available"]
            }].map((p, idx)=> (
              <div key={idx} className="rounded-2xl border p-6 hover:shadow-md transition bg-white">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <div className="text-3xl font-bold mt-2">{p.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {p.features.map((f,i)=>(
                    <li key={i} className="flex items-center gap-2"><Check className="w-4 h-4"/>{f}</li>
                  ))}
                </ul>
                <button onClick={()=> setActive("booking")} className="mt-6 w-full py-3 rounded-xl bg-black text-white">Book this</button>
              </div>
            ))}
          </div>
          <div className="mt-8 text-sm text-gray-600">
            <p>Add‑ons: additional retouched images ($15 each), expedited delivery (48h, $50), extra location ($30), hair & makeup (from $120).</p>
          </div>
        </section>
      )}

      {/* Booking */}
      {active === "booking" && (
        <section className="max-w-3xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-4xl font-bold">Book a Session</h2>
          <p className="text-gray-600 mt-2">Fill the form and I’ll reply within 24 hours with availability and next steps.</p>
          <form
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
            action="https://formspree.io/f/your-form-id" // Replace with your Formspree ID or backend endpoint
            method="POST"
          >
            <input className="border rounded-xl p-3" name="name" placeholder="Your name" required/>
            <input className="border rounded-xl p-3" name="email" type="email" placeholder="Email" required/>
            <input className="border rounded-xl p-3 md:col-span-2" name="phone" placeholder="Phone (optional)"/>
            <select className="border rounded-xl p-3" name="sessionType" defaultValue="Portraits" required>
              <option>Portraits</option>
              <option>Landscape & Nature</option>
              <option>Wildlife</option>
              <option>Event/Other</option>
            </select>
            <input className="border rounded-xl p-3" name="date" type="date"/>
            <textarea className="border rounded-xl p-3 md:col-span-2" name="message" rows={5} placeholder="Tell me about your vision…"/>
            <button className="md:col-span-2 py-3 rounded-xl bg-black text-white">Submit Booking Request</button>
          </form>
          <div className="mt-6 text-sm text-gray-600">
            <p>Deposit: 25% due upon confirmation. Travel beyond 25 miles billed at $0.65/mi.</p>
          </div>
        </section>
      )}

      {/* Contact */}
      {active === "contact" && (
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-4xl font-bold">Contact</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="space-y-3 text-gray-700">
              <p className="flex items-center gap-2"><Mail className="w-5 h-5"/> hello@nishad-photo.com</p>
              <p className="flex items-center gap-2"><Phone className="w-5 h-5"/> (945) 400‑2599</p>
              <p className="flex items-center gap-2"><MapPin className="w-5 h-5"/> Denton, TX — available for travel</p>
              <div className="flex items-center gap-4 pt-2">
                <a href="#" className="inline-flex items-center gap-2 hover:underline"><Instagram className="w-4 h-4"/>Instagram</a>
                <a href="#" className="inline-flex items-center gap-2 hover:underline"><Facebook className="w-4 h-4"/>Facebook</a>
                <a href="#" className="inline-flex items-center gap-2 hover:underline"><Youtube className="w-4 h-4"/>YouTube</a>
              </div>
            </div>
            <div className="rounded-2xl border p-6">
              <h3 className="font-semibold">FAQ</h3>
              <ul className="mt-3 text-sm text-gray-700 space-y-2">
                <li><strong>Turnaround:</strong> 5–7 days for portraits; 7–10 days for wildlife/landscapes.</li>
                <li><strong>Delivery:</strong> Online gallery with high‑res downloads and print store.</li>
                <li><strong>Copyright:</strong> Personal print rights included; commercial licensing available.</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-500 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Nishad Adnan Photography. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:underline" href="#" onClick={(e)=>{e.preventDefault(); setActive("pricing");}}>Pricing</a>
            <a className="hover:underline" href="#" onClick={(e)=>{e.preventDefault(); setActive("booking");}}>Book</a>
            <a className="hover:underline" href="#" onClick={(e)=>{e.preventDefault(); setActive("portfolio");}}>Portfolio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
