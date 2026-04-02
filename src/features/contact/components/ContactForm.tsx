import React from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

const ContactForm: React.FC = () => {
   return (
      <section id="contact" className="py-24 bg-white font-sans">
         <div className="container mx-auto px-6">
            <div className="bg-[#1A1A1A] rounded-[40px] overflow-hidden flex flex-col lg:flex-row shadow-3xl border border-white/5 relative">
               <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

               {/* Info Side */}
               <div className="lg:w-2/5 p-16 lg:p-20 text-white relative z-10 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-display mb-10 leading-tight uppercase tracking-tight">Liên hệ <span className="text-primary italic">Tư vấn</span> ngay</h2>
                  <p className="text-white/40 mb-12 font-medium max-w-sm">Hãy để chúng tôi giúp bạn hiện thực hóa không gian sống mơ ước với giải pháp cánh kính cao cấp.</p>

                  <div className="space-y-10">
                     <div className="flex items-start gap-6 group hover:translate-x-3 transition-transform cursor-pointer">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-12">
                           <Phone size={24} />
                        </div>
                        <div>
                           <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">Hotline</p>
                           <p className="text-xl font-bold font-display">0973.645.609</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-6 group hover:translate-x-3 transition-transform cursor-pointer">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-12">
                           <Mail size={24} />
                        </div>
                        <div>
                           <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">Email</p>
                           <p className="text-xl font-bold font-display">MienCanhKinh@gmail.com</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-6 group hover:translate-x-3 transition-transform cursor-pointer">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-12">
                           <MapPin size={24} />
                        </div>
                        <div>
                           <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">Địa chỉ xưởng</p>
                           <p className="text-xl font-bold font-display">Đồng Trúc, Thạch Thất, Hà Nội</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Form Side */}
               <div className="lg:w-3/5 bg-white p-16 lg:p-24 flex flex-col justify-center">
                  <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                           <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Họ và tên</label>
                           <input type="text" placeholder="Nguyễn Văn A" className="w-full bg-gray-50 border-gray-100 border-2 rounded-xl px-6 py-4 outline-none focus:border-primary transition-all font-medium text-sm" />
                        </div>
                        <div className="space-y-3">
                           <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Số điện thoại</label>
                           <input type="tel" placeholder="090..." className="w-full bg-gray-50 border-gray-100 border-2 rounded-xl px-6 py-4 outline-none focus:border-primary transition-all font-medium text-sm" />
                        </div>
                     </div>
                     <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Thông tin cần tư vấn</label>
                        <textarea rows={4} placeholder="Tôi cần tư vấn thi công tủ áo cánh kính..." className="w-full bg-gray-50 border-gray-100 border-2 rounded-xl px-6 py-4 outline-none focus:border-primary transition-all font-medium text-sm"></textarea>
                     </div>
                     <button className="w-full bg-secondary text-white py-5 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-primary transition-all shadow-xl shadow-secondary/10 group active:scale-95">
                        Gửi yêu cầu tư vấn
                        <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ContactForm
