import React from 'react'
import { Link } from 'react-router-dom'

const ProductList: React.FC = () => {
   const sections = [
      {
         id: 1,
         title: 'Tủ Quần Áo Cánh Kính',
         slug: 'canh-kinh-tu-ao',
         items: [
            { id: 1, name: 'Cánh Kính Euro Gold', price: '1.200.000đ', img: '/img1.jpg', description: 'Khung nhôm mạ anode cao cấp, kính 5mm cường lực.' },
            { id: 2, name: 'Cánh Kính Shadow', price: '1.500.000đ', img: '/img2.jpg', description: 'Tay nắm liền khối, sang trọng và hiện đại.' },
            { id: 3, name: 'Cánh Kính Slimline', price: '1.800.000đ', img: '/img3.jpg', description: 'Viền nhôm siêu mỏng, tối đa diện tích kính.' },
         ]
      },
      {
         id: 2,
         title: 'Tủ Bếp Cánh Kính',
         slug: 'tu-bep-canh-kinh',
         items: [
            { id: 4, name: 'Cánh Kính Tủ Bếp Trước', price: '900.000đ', img: '/img13.jpg', description: 'Chống ẩm mốc, dễ dàng vệ sinh dầu mỡ.' },
            { id: 5, name: 'Tủ Bếp Khung Inox', price: '2.500.000đ', img: '/inox2.jpg', description: 'Độ bền vĩnh cửu, không gỉ sét.' },
            { id: 6, name: 'Cánh Kính In Màu', price: '1.400.000đ', img: '/img14.jpg', description: 'Đa dạng màu sắc theo phong thủy.' },
         ]
      },
      {
         id: 3,
         title: 'Tủ Rượu & Decor',
         slug: 'tu-ruou-canh-kinh',
         items: [
            { id: 7, name: 'Tủ Rượu Âm Tường', price: '3.200.000đ', img: '/img3.jpg', description: 'Thiết kế tinh tế, kết hợp đèn LED trang trí.' },
            { id: 8, name: 'Tủ Trưng Bày', price: '2.800.000đ', img: '/img14.jpg', description: 'Làm nổi bật vật dụng trang trí.' },
         ]
      }
   ];

   return (
      <section id="products" className="py-32 bg-white font-sans">
         <div className="container mx-auto px-6 lg:px-24">
            {sections.map((section, sIdx) => (
               <div key={sIdx} className="mb-32 last:mb-0">
                  <div className="flex items-center justify-between mb-16 border-b border-gray-100 pb-8">
                     <Link to={`/projects?category=${section.slug}`} className="group flex items-center gap-6">
                        <h3 className="text-3xl md:text-4xl font-bold font-display text-secondary group-hover:text-primary transition-colors uppercase tracking-tight">
                           {section.title}
                        </h3>
                        <div className="w-12 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                        <span className="text-xs font-black text-primary opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">Xem tất cả</span>
                     </Link>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                     {section.items.map((item) => (
                        <Link 
                           to={`/product/${item.id}`}
                           key={item.id} 
                           className="group cursor-pointer block"
                        >
                           <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden mb-8 shadow-xl border border-gray-50">
                              <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                              <div className="absolute bottom-6 right-6 translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                 <div className="bg-white text-secondary px-6 py-2 rounded-full font-bold text-sm shadow-xl flex items-center gap-2">
                                    Chi tiết <div className="w-4 h-[1px] bg-secondary" />
                                 </div>
                              </div>
                           </div>
                           <h4 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">{item.name}</h4>
                           <div className="flex items-center gap-4">
                              <span className="text-sm font-black text-primary uppercase tracking-widest">{item.price}</span>
                              <div className="w-1 h-1 bg-gray-300 rounded-full" />
                              <span className="text-xs font-medium text-gray-400">Thi công trọn gói</span>
                           </div>
                        </Link>
                     ))}
                  </div>
               </div>
            ))}
         </div>
      </section>
   )
}

export default ProductList
