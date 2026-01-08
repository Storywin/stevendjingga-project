import React, { useState } from 'react';
import { Lightbulb, Megaphone, Settings, Users, Globe, Handshake, CheckCircle2, ChevronDown, ChevronUp, Play } from 'lucide-react';

function App() {
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleApplyPromo = () => {
    // Simulate promo code check
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
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-600 selection:text-white">
      {/* Navbar / Top Bar */}
      <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
         <div className="text-xl font-bold tracking-tighter">STEVEN DJINGGA</div>
         <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors">
            Gabung
         </button>
      </nav>

      {/* Hero Section */}
      <header className="max-w-4xl mx-auto text-center px-4 pt-10 pb-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-wide leading-tight">
          BISNIS HACKS UNTUK DAPATKAN HINGGA 1M <br/>
          DALAM 7 HARI TANPA MODAL
        </h1>

        {/* Video Placeholder */}
        <div className="relative aspect-video bg-black border border-gray-700 rounded-lg mx-auto mb-8 flex items-center justify-center group cursor-pointer hover:border-blue-500 transition-colors max-w-3xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="flex flex-col items-center">
             <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
             </div>
             <span className="text-xl font-semibold tracking-widest">VIDEO</span>
          </div>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg md:text-xl font-bold py-4 px-12 rounded shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all hover:scale-105 mb-4">
          GABUNG SEKARANG
        </button>
        <p className="text-gray-400 font-medium">DIIKUTI 10.000+ PESERTA SUKSES</p>
      </header>

      {/* Features Grid */}
      <section className="max-w-4xl mx-auto px-4 py-16 border-t border-gray-900">
        <h2 className="text-center text-gray-300 mb-12 text-lg">Temukan Celah Strategi Bangun Bisnis Tanpa Modal</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { icon: <Lightbulb />, label: "Ide Bisnis" },
            { icon: <Megaphone />, label: "Marketing" },
            { icon: <Settings />, label: "Operasional" },
            { icon: <Users />, label: "Team" },
            { icon: <Globe />, label: "Networking" },
            { icon: <Handshake />, label: "Negosiasi" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all">
                {React.cloneElement(item.icon, { className: "w-6 h-6 text-gray-300 group-hover:text-blue-400" })}
              </div>
              <span className="text-sm text-gray-300 font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-gray-500 mb-2 uppercase">MEMPERKENALKAN</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">CARA BERPIKIR YANG BERBEDA</h2>
        <p className="text-gray-400 leading-relaxed">
          Bisnis Hacks dari Steven Djingga adalah platform edukasi eksklusif yang mengajarkan cara tercepat sukses membangun bisnis dengan membaca celah yang tidak pernah diajarkan di sekolah, kampus, atau seminar motivasi. Ini bukan tentang kerja lebih keras atau sabar menunggu kesuksesan. Ini tentang melihat apa yang orang lain lewatkan.
        </p>
      </section>

      {/* Vertical Steps */}
      <section className="max-w-5xl mx-auto px-4 py-16 relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-800 hidden md:block -z-10"></div>

        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-24">
          <div className="flex-1 w-full">
            <div className="aspect-[4/3] border border-gray-700 flex items-center justify-center bg-gray-900/30">
              <span className="text-xl font-bold text-gray-500">FOTO 1</span>
            </div>
          </div>
          <div className="flex-1 text-left md:pl-8">
            <h3 className="text-xl font-bold mb-4 uppercase">PLATFORM BELAJAR <br/> GENERASI BARU</h3>
            <ul className="space-y-4">
              {[
                { title: "Strategi bisnis berbasis hacks", desc: "Bukan teori panjang, tapi pola berulang yang selalu muncul di dunia nyata" },
                { title: "Framework shortcut", desc: "Fokus ke cara paling cepat, paling efisien, dan paling masuk akal untuk scaling up" },
                { title: "Sederhana, tajam, langsung praktek", desc: "Tanpa modal, tanpa koneksi, tanpa basa-basi." }
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                   <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                   <div>
                     <h4 className="font-bold text-white text-sm">{item.title}</h4>
                     <p className="text-sm text-gray-400">{item.desc}</p>
                   </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-24">
          <div className="flex-1 w-full">
            <div className="aspect-[4/3] border border-gray-700 flex items-center justify-center bg-gray-900/30">
              <span className="text-xl font-bold text-gray-500">FOTO 2</span>
            </div>
          </div>
          <div className="flex-1 text-left md:pr-8">
            <h3 className="text-xl font-bold mb-4 uppercase">AKSES KOMUNITAS KHUSUS</h3>
            <ul className="space-y-4">
              {[
                { title: "Tempat berkumpulnya orang yang sadar", desc: "Hidup ini bukan soal siapa yang paling kerja keras, tapi siapa yang paham membaca celah" },
                { title: "Bongkar celah bisnis", desc: "Mulai dari ide bisnis, marketing hingga networking" },
                { title: "Gabung bersama 10.000+ Individual", desc: "" }
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                   <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                   <div>
                     <h4 className="font-bold text-white text-sm">{item.title}</h4>
                     {item.desc && <p className="text-sm text-gray-400">{item.desc}</p>}
                   </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="flex-1 w-full">
            <div className="aspect-[4/3] border border-gray-700 flex items-center justify-center bg-gray-900/30">
              <span className="text-xl font-bold text-gray-500">FOTO 3</span>
            </div>
          </div>
          <div className="flex-1 text-left md:pl-8">
            <h3 className="text-xl font-bold mb-4 uppercase">TERHUBUNG DENGAN MENTOR</h3>
            <ul className="space-y-4">
              {[
                { title: "Panduan hingga sukses", desc: "Kamu akan dipandu mindset & praktek hingga sukses berbasis" },
                { title: "Mentor dengan pengalaman nyata", desc: "Bukan teori buku, tapi hasil dari praktik di lapangan" },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                   <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                   <div>
                     <h4 className="font-bold text-white text-sm">{item.title}</h4>
                     <p className="text-sm text-gray-400">{item.desc}</p>
                   </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded shadow-lg transition-all hover:scale-105">
                GABUNG SEKARANG
            </button>
        </div>
      </section>

      {/* What We Teach */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center border-t border-gray-900">
        <h2 className="text-2xl font-bold mb-6 uppercase">APA YANG KAMI AJARKAN?</h2>
        <p className="text-gray-400 mb-4">
            Mentor kami adalah praktisi teknis yang sukses dengan membaca peluang lebih cepat & akurat dari 99% orang.
        </p>
        <p className="text-gray-400">
            Fokus utama kami adalah membaca peluang bisnis dari nol tanpa modal, strategi marketing tercepat dengan effort minimal, negosiasi lewat celah psikologis.
        </p>
      </section>

      {/* About Steven */}
      <section className="max-w-5xl mx-auto px-4 py-16 border-t border-gray-900">
          <h2 className="text-2xl font-bold mb-8 uppercase md:hidden text-center">TENTANG STEVEN DJINGGA</h2>
          <div className="flex flex-col md:flex-row gap-12 items-start">
             <div className="flex-1">
                <h2 className="text-2xl font-bold mb-8 uppercase hidden md:block">TENTANG STEVEN DJINGGA</h2>
                <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                    <p>Steven Djingga adalah CEO & Founder dari berbagai industri, mulai dari startup, ritel, restoran, hingga platform AI.</p>
                    <p>Melalui bisnis yang ia bangun tanpa modal seperti Cateraja, Bakso, Kopi Kenangan, Steven membuktikan bahwa kesuksesan bisnis bukan karena modal maupun rahasia kurus, melainkan membaca celah yang 99% orang tidak paham.</p>
                    <p>Membangun bisnis di era sekarang sudah terlalu kompetitif. Produk mirip. Strategi mirip. Semua diajarkan hal yang sama. Kamu butuh hacks untuk bisa menjadi TOP 1%.</p>
                </div>
                <div className="mt-8">
                     <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded w-full md:w-auto">
                        GABUNG SEKARANG
                    </button>
                </div>
             </div>
             <div className="w-full md:w-1/3">
                 <div className="aspect-[3/4] border border-gray-700 flex items-center justify-center bg-gray-900/30">
                    <span className="text-xl font-bold text-gray-500 text-center px-4">FOTO STEVEN</span>
                 </div>
             </div>
          </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-2xl mx-auto px-4 py-16">
          <div className="bg-black border border-gray-800 rounded-2xl p-6 md:p-8 relative overflow-hidden">
             {/* Glow effect */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

             <div className="text-center mb-8">
                 <h2 className="text-2xl font-bold mb-2">Daftar & Join Sekarang</h2>
                 <div className="text-red-500 line-through text-sm font-semibold">Rp 27.500.000</div>
                 <div className="text-4xl font-bold mt-1">Rp 9.000.000</div>
             </div>

             <div className="space-y-4 mb-8">
                {[
                    "Strategi Framework Bisnis Yang Terbukti Sukses Hanya Dalam 7 hari",
                    "Strategi Bangun Bisnis, Rekrut Tim Hingga Marketing Tanpa Modal",
                    "Identifikasi Ide Bisnis Dari Blind Spot Market Yang Tidak Terlihat Oleh Pemain Besar",
                    "Strategi Marketing Low Effort High Impact Dengan Probabilitas Viral Hingga 90%",
                    "Strategi Operasional Bisnis Rapi & Professional Yang Autopilot",
                    "Strategi Negosiasi Dengan Partner Bisnis Hingga Investor Dengan Closing Rate 90%"
                ].map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                         <div className="text-cyan-400 mt-1 flex-shrink-0">
                             <CheckCircle2 className="w-5 h-5 fill-cyan-400/20" />
                         </div>
                         <p className="text-sm font-medium text-gray-300">{item}</p>
                         <div className="ml-auto text-cyan-400">
                             <CheckCircle2 className="w-5 h-5" />
                         </div>
                    </div>
                ))}
             </div>

             <div className="mb-6">
                 <label className="block text-xs text-gray-500 mb-2">Masukkan kode promo untuk dapatkan diskon</label>
                 <div className="flex gap-2">
                     <input 
                        type="text" 
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Kode Promo" 
                        className="bg-black border border-gray-700 rounded px-4 py-2 flex-1 text-white focus:outline-none focus:border-blue-500"
                     />
                     <button 
                        onClick={handleApplyPromo}
                        className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-6 py-2 rounded"
                     >
                         APPLY
                     </button>
                 </div>
             </div>

             <div className="border-t border-gray-800 pt-6 mb-6">
                 <div className="flex justify-between items-end">
                     <span className="text-xl font-bold">Total</span>
                     <div className="text-right">
                         <div className={`text-gray-500 line-through text-sm ${discountApplied ? 'block' : 'hidden'}`}>Rp 9.000.000</div>
                         <div className="text-2xl font-bold text-yellow-500">
                             {discountApplied ? 'Rp 4.500.000' : 'Rp 9.000.000'}
                         </div>
                     </div>
                 </div>
             </div>

             <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:scale-[1.02]">
                 GABUNG SEKARANG
             </button>
          </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
              {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white text-black rounded-lg overflow-hidden">
                      <button 
                        onClick={() => toggleFaq(idx)}
                        className="w-full px-6 py-4 text-left font-bold flex justify-between items-center hover:bg-gray-50"
                      >
                          <span className="text-sm md:text-base pr-4">{faq.question}</span>
                          {openFaq === idx ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                      </button>
                      {openFaq === idx && (
                          <div className="px-6 pb-6 pt-2 text-sm text-gray-700 border-t border-gray-100">
                              {faq.answer}
                          </div>
                      )}
                  </div>
              ))}
          </div>
          
          <div className="text-center mt-12">
             <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded shadow-lg transition-all hover:scale-105">
                GABUNG SEKARANG
            </button>
          </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-gray-900 mt-12">
          <p>© 2024 Steven Djingga. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
