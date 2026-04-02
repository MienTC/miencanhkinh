import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Product, Section } from '../../../shared/types'

interface ProductListProps {
  onProductClick: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onProductClick }) => {
  const sections: Section[] = [
    {
      title: 'Tủ Quần Áo Cánh Kính',
      items: [
        { name: 'Tủ Áo Luxury 01', img: '/img5.jpg' },
        { name: 'Tủ Áo Luxury 02', img: '/img6.jpg' },
        { name: 'Tủ Áo Luxury 03', img: '/img7.jpg' },
      ],
    },
    {
      title: 'Tủ Bếp',
      items: [
        { name: 'Tủ Bếp Hiện Đại 01', img: '/img12.jpg' },
        { name: 'Tủ Bếp Hiện Đại 02', img: '/img14.jpg' },
        { name: 'Tủ Bếp Hiện Đại 03', img: '/img15.jpg' },
      ],
    },
    {
      title: 'Thùng Tủ Inox',
      items: [
        { name: 'Inox 304 Cao Cấp 01', img: '/img17.jpg' },
        { name: 'Inox 304 Cao Cấp 02', img: '/img18.jpg' },
        { name: 'Inox 304 Cao Cấp 03', img: '/inox1.jpg' },
      ],
    },
  ]

  return (
    <section id="products" className="py-24 bg-white font-sans">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-bold font-display text-primary mb-16 uppercase tracking-widest">Sản Phẩm Chính</h2>

        {sections.map((section, sidx) => (
          <div key={sidx} className="mb-20">
            <div className="flex items-center justify-between mb-10 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <h3 className="bg-gray-50 px-6 py-2 rounded-lg text-lg font-bold font-display text-secondary border border-gray-100">{section.title}</h3>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-all"><ChevronLeft size={20} /></button>
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-all"><ChevronRight size={20} /></button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {section.items.map((item, idx) => (
                <div key={idx} className="group cursor-pointer" onClick={() => onProductClick(item)}>
                  <div className="relative h-80 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 mb-4 shadow-md shadow-gray-50">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 bg-white text-secondary px-6 py-2 rounded-full text-sm font-bold transition-all transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                        Xem Chi Tiết
                      </span>
                    </div>
                  </div>

                  <div className="text-center">
                    <h4 className="text-md font-bold font-display text-secondary group-hover:text-primary transition-colors">{item.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* <div className="text-center mt-12">
          <button className="text-gray-400 text-sm font-bold uppercase tracking-widest border-b border-gray-200 hover:text-primary hover:border-primary transition-all pb-1">
            Xem thêm các sản phẩm khác
          </button>
        </div> */}
      </div>
    </section>
  )
}

export default ProductList
