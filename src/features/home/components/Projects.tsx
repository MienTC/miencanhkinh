import React from 'react'

const Projects: React.FC = () => {
   const categories = [
      { name: 'Cánh kính tủ áo', count: 124, img: '/img1.jpg' },
      { name: 'Tủ bếp cánh kính', count: 86, img: '/img13.jpg' },
      { name: 'Tủ rượu cánh kính', count: 42, img: '/img3.jpg' },
      { name: 'Thùng tủ inox', count: 56, img: '/inox2.jpg' },
   ];

   return (
      <section id="projects" className="py-24 bg-gray-50/50 font-sans border-y border-gray-100">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-10">
               <div className="max-w-3xl">
                  <h2 className="text-4xl md:text-5xl font-bold font-display text-secondary mb-8 leading-tight uppercase tracking-tight">Kinh nghiệm thực tế qua<br /><span className="text-primary italic">Hàng trăm</span> công trình</h2>
                  <p className="text-gray-500 font-medium">Chúng tôi đã hoàn thiện hàng trăm dự án trên khắp cả nước, mang lại vẻ đẹp đẳng cấp cho không gian sống của mỗi gia đình.</p>
               </div>
               <a href="#contact" className="text-sm font-black text-primary border-b-2 border-primary/20 hover:border-primary transition-all pb-2 uppercase tracking-widest">
                  Xem tất cả dự án
               </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
               {categories.map((cat, idx) => (
                  <div key={idx} className="group relative h-[500px] rounded-[40px] overflow-hidden cursor-pointer shadow-2xl transition-all duration-700 hover:-translate-y-4">
                     <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                     <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/10 to-transparent group-hover:via-secondary/40 transition-all duration-300" />

                     <div className="absolute bottom-0 left-0 p-10 w-full transform group-hover:translate-y-[-20px] transition-transform duration-500">
                        <div className="mb-4 w-12 h-1 bg-primary rounded-full group-hover:w-24 transition-all duration-700" />
                        <h4 className="text-2xl font-bold font-display text-white mb-2 leading-tight tracking-tight">{cat.name}</h4>
                        <div className="h-0 opacity-0 group-hover:h-6 group-hover:opacity-100 overflow-hidden transition-all duration-500 pt-2">
                           <p className="text-gray-300 text-xs font-black uppercase tracking-widest">
                              {cat.count}+ Dự án hoàn thiện
                           </p>
                        </div>
                     </div>

                     <div className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                        <div className="w-6 h-[2px] bg-white relative rotate-45 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-white after:rotate-90"></div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Projects
