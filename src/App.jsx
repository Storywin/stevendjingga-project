import React, { useState } from 'react';
import { Lightbulb, Megaphone, Settings, Users, Globe, Handshake, CheckCircle2, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const GlowButton = ({ children, className = "", ...props }) => (
  <button 
    className={`relative overflow-hidden group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] ${className}`}
    {...props}
  >
    <span className="relative z-10">{children}</span>
    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 blur-md"></div>
  </button>
);

function App() {
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleApplyPromo = () => {
    if (promoCode.trim().length > 0) {
      setDiscountApplied(true);
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Apakah program ini cocok untuk pemula?",
      answer: "Ya. Program ini dirancang untuk individu yang memulai dari nol maupun yang sudah berjalan, selama terbuka untuk berpikir strategis dan tidak terpaku pada jalur konvensional."
    },
    {
      question: "Bisnis apa yang cocok untuk program ini?",
      answer: "Program ini relevan untuk hampir semua model bisnis, baik produk maupun jasa selama terdapat ruang untuk optimalisasi struktur, distribusi, atau positioning."
    },
    {
      question: "Berapa lama hingga hasil bisa dirasakan?",
      answer: "Mayoritas peserta mulai melihat perubahan pola pengambilan keputusan dan efisiensi eksekusi dalam 7 hingga 30 hari, tergantung konsistensi penerapan."
    },
    {
      question: "Apakah saya perlu modal besar untuk mengikuti strategi di dalamnya?",
      answer: "Tidak. Fokus utama program ini adalah optimalisasi struktur, positioning, dan leverage bukan modal."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
           <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
             <div className="flex items-center">
               <img src="/logo.png" alt="Steven Djingga Logo" className="h-12 w-auto object-contain" />
             </div>
             <button className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                Gabung
             </button>
           </div>
        </nav>

        {/* Hero Section */}
        <header className="max-w-5xl mx-auto text-center px-4 pt-32 pb-24 relative">
          <FadeIn>
            <div className="inline-block mb-4 px-4 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 text-xs font-bold tracking-widest uppercase">
              BISNIS HACKS BY STEVEN DJINGGA
            </div>
            <h1 className="text-lg md:text-2xl lg:text-4xl font-bold mb-8 uppercase tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500">
              BISNIS HACKS UNTUK DAPATKAN HINGGA 1M <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">DALAM 7 HARI TANPA MODAL</span>
            </h1>
          </FadeIn>

          {/* Video Placeholder */}
          <FadeIn delay={0.2}>
            <div className="relative aspect-video bg-gray-900/50 border border-white/10 rounded-2xl mx-auto mb-12 overflow-hidden shadow-2xl shadow-blue-900/20 max-w-4xl group">
              {/* Glow Effect behind video */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              
              <iframe 
                className="relative w-full h-full rounded-2xl z-10"
                src="https://www.youtube.com/embed/VNoVoxYscNo?si=sV2fkEf3uOkb0-IA" 
                title="Steven Djingga - Business Hacks"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <GlowButton className="text-lg md:text-xl py-5 px-16 rounded-full mb-6">
              GABUNG SEKARANG
            </GlowButton>
            <div className="flex items-center justify-center gap-2 text-gray-400 font-medium text-sm">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full bg-gray-700 border border-black flex items-center justify-center text-[8px] text-white">
                     <Users className="w-3 h-3" />
                  </div>
                ))}
              </div>
              <span>DIIKUTI 10.000+ PESERTA SUKSES</span>
            </div>
          </FadeIn>
        </header>

        {/* Features Grid */}
        <section className="max-w-6xl mx-auto px-4 py-20 border-t border-white/5 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          
          <FadeIn>
            <h2 className="text-center text-gray-400 mb-16 text-lg tracking-wide">Temukan Celah Strategi Bangun Bisnis Tanpa Modal</h2>
          </FadeIn>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {[
              { icon: <Lightbulb />, label: "Ide Bisnis" },
              { icon: <Megaphone />, label: "Marketing" },
              { icon: <Settings />, label: "Operasional" },
              { icon: <Users />, label: "Team" },
              { icon: <Globe />, label: "Networking" },
              { icon: <Handshake />, label: "Negosiasi" },
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="h-full">
                <div className="group h-full p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="w-16 h-16 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-blue-500/50 transition-all relative z-10 shadow-lg">
                    {React.cloneElement(item.icon, { className: "w-8 h-8 text-gray-400 group-hover:text-blue-400 transition-colors" })}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 relative z-10">{item.label}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-4xl mx-auto px-4 py-24 text-center">
          <FadeIn>
            <p className="text-sm font-bold tracking-[0.3em] text-blue-500 mb-4 uppercase">MEMPERKENALKAN</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">CARA BERPIKIR YANG BERBEDA</h2>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm relative">
               <div className="absolute -top-4 -left-4 text-6xl text-blue-900 opacity-50">"</div>
               <p className="text-gray-300 leading-relaxed text-lg md:text-xl font-light">
                Bisnis Hacks dari Steven Djingga adalah platform edukasi eksklusif yang mengajarkan cara tercepat sukses membangun bisnis dengan membaca celah yang tidak pernah diajarkan di sekolah, kampus, atau seminar motivasi. <br/><br/>
                <span className="text-white font-semibold">Ini bukan tentang kerja lebih keras atau sabar menunggu kesuksesan. Ini tentang melihat apa yang orang lain lewatkan.</span>
              </p>
              <div className="absolute -bottom-4 -right-4 text-6xl text-blue-900 opacity-50 rotate-180">"</div>
            </div>
          </FadeIn>
        </section>

        {/* Vertical Steps */}
        <section className="max-w-6xl mx-auto px-4 py-20 relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-900/50 to-transparent md:block -z-10"></div>

          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-32 relative">
            <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,1)] z-10 hidden md:block"></div>
            
            <div className="flex-1 w-full pl-8 md:pl-0 md:pr-12">
               <FadeIn className="aspect-[4/3] rounded-2xl border border-white/10 bg-gray-900/50 flex items-center justify-center overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-50"></div>
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 bg-[url('/1.webp')] bg-cover bg-center opacity-40 mix-blend-overlay hover:opacity-60 transition-opacity duration-700"></div>
               </FadeIn>
            </div>
            <div className="flex-1 text-left pl-8 md:pl-12 border-l border-white/10 md:border-none">
              <FadeIn delay={0.2}>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 uppercase text-blue-400">PLATFORM BELAJAR <br/> GENERASI BARU</h3>
                <ul className="space-y-6">
                  {[
                    { title: "Strategi bisnis berbasis hacks", desc: "Bukan teori panjang, tapi pola berulang yang selalu muncul di dunia nyata" },
                    { title: "Framework shortcut", desc: "Fokus ke cara paling cepat, paling efisien, dan paling masuk akal untuk scaling up" },
                    { title: "Sederhana, tajam, langsung praktek", desc: "Tanpa modal, tanpa koneksi, tanpa basa-basi." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-blue-500 transition-colors duration-300">
                         <CheckCircle2 className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg group-hover:text-blue-300 transition-colors">{item.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-32 relative">
             <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,1)] z-10 hidden md:block"></div>
            
            <div className="flex-1 w-full pl-8 md:pl-0 md:pl-12">
               <FadeIn className="aspect-[4/3] rounded-2xl border border-white/10 bg-gray-900/50 flex items-center justify-center overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-bl from-indigo-900/20 to-transparent opacity-50"></div>
                  <span className="text-2xl font-bold text-white/20 group-hover:text-white/40 transition-colors">FOTO 2</span>
                  <div className="absolute inset-0 bg-[url('/2.png')] bg-cover bg-center opacity-40 mix-blend-overlay hover:opacity-60 transition-opacity duration-700"></div>
               </FadeIn>
            </div>
            <div className="flex-1 text-left pl-8 md:pl-0 md:pr-12 border-l border-white/10 md:border-none">
              <FadeIn delay={0.2}>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 uppercase text-indigo-400">AKSES KOMUNITAS KHUSUS</h3>
                <ul className="space-y-6">
                  {[
                    { title: "Tempat berkumpulnya orang yang sadar", desc: "Hidup ini bukan soal siapa yang paling kerja keras, tapi siapa yang paham membaca celah" },
                    { title: "Bongkar celah bisnis", desc: "Mulai dari ide bisnis, marketing hingga networking" },
                    { title: "Gabung bersama 10.000+ Individual", desc: "Network is Networth. Temukan partner bisnismu disini." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                       <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-indigo-500 transition-colors duration-300">
                         <CheckCircle2 className="w-5 h-5 text-indigo-500 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg group-hover:text-indigo-300 transition-colors">{item.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-12 relative">
             <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,1)] z-10 hidden md:block"></div>
             
            <div className="flex-1 w-full pl-8 md:pl-0 md:pr-12">
               <FadeIn className="aspect-[4/3] rounded-2xl border border-white/10 bg-gray-900/50 flex items-center justify-center overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-50"></div>
                  <span className="text-2xl font-bold text-white/20 group-hover:text-white/40 transition-colors">FOTO 3</span>
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay hover:opacity-60 transition-opacity duration-700"></div>
               </FadeIn>
            </div>
            <div className="flex-1 text-left pl-8 md:pl-12 border-l border-white/10 md:border-none">
              <FadeIn delay={0.2}>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 uppercase text-purple-400">TERHUBUNG DENGAN MENTOR</h3>
                <ul className="space-y-6">
                  {[
                    { title: "Panduan hingga sukses", desc: "Kamu akan dipandu mindset & praktek hingga sukses berbasis" },
                    { title: "Mentor dengan pengalaman nyata", desc: "Bukan teori buku, tapi hasil dari praktik di lapangan" },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-purple-500 transition-colors duration-300">
                         <CheckCircle2 className="w-5 h-5 text-purple-500 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg group-hover:text-purple-300 transition-colors">{item.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>

          <div className="text-center mt-20">
             <GlowButton className="text-lg py-4 px-12 rounded-full">
                GABUNG SEKARANG
            </GlowButton>
          </div>
        </section>

        {/* What We Teach - Glass Card */}
        <section className="max-w-4xl mx-auto px-4 py-20">
          <FadeIn>
             <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -z-10"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] -z-10"></div>
                
                <h2 className="text-3xl font-bold mb-8 uppercase tracking-wide">APA YANG KAMI AJARKAN?</h2>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                   <p>
                        Mentor kami adalah praktisi teknis yang sukses dengan membaca peluang lebih cepat & akurat dari 99% orang.
                    </p>
                    <p>
                        Fokus utama kami adalah membaca peluang bisnis dari nol tanpa modal, strategi marketing tercepat dengan effort minimal, negosiasi lewat celah psikologis.
                    </p>
                </div>
             </div>
          </FadeIn>
        </section>

        {/* About Steven */}
        <section className="max-w-6xl mx-auto px-4 py-20 border-t border-white/5">
          <FadeIn>
             <h2 className="text-3xl md:text-4xl font-bold mb-12 uppercase md:hidden text-center text-white">TENTANG STEVEN DJINGGA</h2>
             <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 order-2 md:order-1">
                   <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">TENTANG STEVEN DJINGGA</h2>
                   <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                       <p>Steven Djingga adalah CEO & Founder dari berbagai industri, mulai dari startup, F&B, restoran, hingga platform AI.</p>
                       <p>Melalui bisnis yang ia bangun tanpa modal seperti Cateringaja, Bai Wei, hingga KontenAja, Steven membuktikan bahwa kesuksesan bisnis bukan karena modal maupun bekerja keras, melainkan membaca celah yang 99% orang tidak paham.</p>
                       <p className="text-white font-medium border-l-4 border-blue-500 pl-4">Membangun bisnis di era sekarang sudah terlalu kompetitif. Produk mirip. Strategi mirip. Semua diajarkan hal yang sama. <br/>Kamu butuh hacks untuk bisa menjadi TOP 1%</p>
                   </div>
                   <div className="mt-10">
                        <GlowButton className="py-3 px-10 rounded-full w-full md:w-auto">
                           GABUNG SEKARANG
                       </GlowButton>
                   </div>
                </div>
                <div className="w-full md:w-1/3 order-1 md:order-2">
                    <div className="aspect-[3/4] rounded-2xl border border-white/10 flex items-center justify-center bg-gray-900/50 relative overflow-hidden group shadow-2xl">
                       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                       {/* Placeholder image for Steven */}
                       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"></div>
                       
                       <div className="absolute bottom-6 left-6 z-20">
                          <div className="text-white font-bold text-xl">STEVEN DJINGGA</div>
                          <div className="text-blue-400 text-sm">CEO & Founder</div>
                       </div>
                    </div>
                </div>
             </div>
          </FadeIn>
        </section>

        {/* Pricing Section - Premium Card */}
        <section className="max-w-4xl mx-auto px-4 py-20">
          <FadeIn>
             <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group shadow-[0_0_50px_rgba(37,99,235,0.15)] hover:shadow-[0_0_80px_rgba(37,99,235,0.25)] transition-shadow duration-500">
                {/* Glow effect */}
                <div className="absolute top-[-50%] right-[-50%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>

                <div className="text-center mb-10 relative z-10">
                    <div className="inline-block px-4 py-1 rounded-full bg-blue-900/30 text-blue-400 text-sm font-bold mb-4 border border-blue-500/20">LIMITED OFFER</div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Daftar & Join Sekarang</h2>
                    <div className="flex flex-col items-center gap-2">
                       <span className="text-red-500 line-through text-xl font-medium">Rp 27.500.000</span>
                       <span className="text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Rp 9.000.000</span>
                    </div>
                </div>

                <div className="space-y-5 mb-10 relative z-10 bg-white/5 p-6 rounded-2xl border border-white/5">
                   {[
                       "Strategi Framework Bisnis Yang Terbukti Sukses Hanya Dalam 7 hari",
                       "Strategi Bangun Bisnis, Rekrut Tim Hingga Marketing Tanpa Modal",
                       "Identifikasi Ide Bisnis Dari Blind Spot Market Yang Tidak Terlihat Oleh Pemain Besar",
                       "Strategi Marketing Low Effort High Impact Dengan Probabilitas Viral Hingga 90%",
                       "Strategi Operasional Bisnis Rapi & Professional Yang Autopilot",
                       "Strategi Negosiasi Dengan Partner Bisnis Hingga Investor Dengan Closing Rate 90%"
                   ].map((item, idx) => (
                       <div key={idx} className="flex gap-4 items-start">
                            <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                <CheckCircle2 className="w-4 h-4 text-green-400" />
                            </div>
                            <p className="text-sm md:text-base font-medium text-gray-300">{item}</p>
                       </div>
                   ))}
                </div>

                <div className="mb-8 relative z-10">
                    <label className="block text-xs text-gray-400 mb-2 uppercase tracking-wider">Masukkan kode promo</label>
                    <div className="flex gap-3">
                        <input 
                           type="text" 
                           value={promoCode}
                           onChange={(e) => setPromoCode(e.target.value)}
                           placeholder="KODE PROMO" 
                           className="bg-black/50 border border-gray-700 rounded-xl px-5 py-3 flex-1 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                        />
                        <button 
                           onClick={handleApplyPromo}
                           className="bg-white text-black hover:bg-gray-200 font-bold px-8 py-3 rounded-xl transition-colors shadow-lg"
                        >
                            APPLY
                        </button>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 mb-8 relative z-10">
                    <div className="flex justify-between items-end">
                        <span className="text-xl font-bold text-gray-400">Total Pembayaran</span>
                        <div className="text-right">
                            <AnimatePresence>
                               {discountApplied && (
                                   <motion.div 
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0 }}
                                      className="text-gray-500 line-through text-sm"
                                   >
                                      Rp 9.000.000
                                   </motion.div>
                               )}
                            </AnimatePresence>
                            <motion.div 
                               key={discountApplied ? 'discounted' : 'normal'}
                               initial={{ scale: 0.9 }}
                               animate={{ scale: 1 }}
                               className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"
                            >
                                {discountApplied ? 'Rp 4.500.000' : 'Rp 9.000.000'}
                            </motion.div>
                        </div>
                    </div>
                </div>

                <GlowButton className="w-full py-5 rounded-xl text-xl relative z-10">
                    GABUNG SEKARANG
                </GlowButton>
             </div>
          </FadeIn>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto px-4 py-20 pb-32">
          <FadeIn>
             <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-wide">Frequently Asked Questions</h2>
             <div className="space-y-4">
                 {faqs.map((faq, idx) => (
                     <div key={idx} className="bg-white/5 border border-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors">
                         <button 
                           onClick={() => toggleFaq(idx)}
                           className="w-full px-6 py-5 text-left font-bold flex justify-between items-center"
                         >
                             <span className="text-sm md:text-base pr-4 text-gray-200">{faq.question}</span>
                             <motion.div
                                animate={{ rotate: openFaq === idx ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                             >
                                <ChevronDown className="w-5 h-5 text-gray-400" />
                             </motion.div>
                         </button>
                         <AnimatePresence>
                             {openFaq === idx && (
                                 <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                 >
                                     <div className="px-6 pb-6 pt-0 text-sm text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                                         <div className="pt-4">{faq.answer}</div>
                                     </div>
                                 </motion.div>
                             )}
                         </AnimatePresence>
                     </div>
                 ))}
             </div>
             
             <div className="text-center mt-16">
                <GlowButton className="py-3 px-10 rounded-full">
                   GABUNG SEKARANG
               </GlowButton>
             </div>
          </FadeIn>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center text-gray-600 text-sm border-t border-white/10 bg-black relative z-10">
             <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <p>© 2026 Steven Djingga. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
             </div>
        </footer>
      </div>
    </div>
  )
}

export default App
