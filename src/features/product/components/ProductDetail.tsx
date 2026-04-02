import React, { useEffect } from 'react'
import { ChevronLeft, Star, Heart, Share2 } from 'lucide-react'
import { Product } from '../../../shared/types'

interface ProductDetailProps {
  product: Product | null;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) return null;

  const specs = [
    { label: 'Chất liệu', value: 'Kính cường lực & Khung nhôm cao cấp' },
    { label: 'Màu sắc', value: 'Đen, Vàng Gương, Trắng, Ghi' },
    { label: 'Độ dày kính', value: '5mm / 8mm' },
    { label: 'Bảo hành', value: '12 tháng' },
    { label: 'Thiết kế', value: 'Theo yêu cầu thực tế' },
  ];

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen font-sans">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8 mt-10">
          <button onClick={onBack} className="hover:text-primary">Home</button>
          <span>/</span>
          <span>Sản phẩm</span>
          <span>/</span>
          <span className="text-secondary font-bold">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 mb-6 group">
              <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`aspect-square rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${i === 1 ? 'border-primary' : 'border-transparent hover:border-gray-200'}`}>
                  <img src={product.img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display text-secondary mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-sm text-gray-400 border-l border-gray-200 pl-4">50 lượt đánh giá</span>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed max-w-md">
              Sản phẩm cao cấp được thiết kế tinh xảo, sử dụng vật liệu nhập khẩu chất lượng cao. 
              Mang lại không gian sang trọng và hiện đại cho ngôi nhà của bạn.
            </p>

            <div className="mb-10">
              <span className="block text-sm font-bold text-secondary uppercase tracking-widest mb-4">Màu sắc thịnh hành</span>
              <div className="flex gap-4">
                {['#000', '#D4AF37', '#CCC', '#FFF'].map((color, i) => (
                  <button key={i} className="w-10 h-10 rounded-full border-2 border-white ring-1 ring-gray-200 shadow-md hover:ring-primary transition-all overflow-hidden" style={{ backgroundColor: color }} />
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-10 border-t border-gray-100 mt-auto">
              <button className="flex-grow bg-primary text-white px-12 py-4 rounded-xl font-bold hover:bg-secondary transition-all shadow-xl shadow-primary/20 transform active:scale-95">
                Tư vấn ngay
              </button>
              <button className="w-14 h-14 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary transition-all hover:border-primary shadow-sm">
                <Heart size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-20 mb-24">
          <h2 className="text-center text-2xl font-bold font-display text-secondary mb-16 uppercase tracking-widest relative">
            Thông tin chi tiết
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary rounded-full"></div>
          </h2>
          
          <div className="aspect-[21/9] rounded-[40px] overflow-hidden mb-16 shadow-2xl relative group border border-gray-100">
             <img src="/img2.jpg" alt="Detail View" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
             <div className="absolute inset-0 bg-black/5"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
               <h3 className="text-xl font-bold font-display text-secondary mb-8 uppercase tracking-wider">Thông số kỹ thuật</h3>
               <div className="space-y-4">
                  {specs.map((spec, i) => (
                    <div key={i} className="flex items-center justify-between py-5 border-b border-gray-50 last:border-0 text-sm">
                       <span className="text-gray-400 font-medium">{spec.label}</span>
                       <span className="text-secondary font-bold">{spec.value}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div>
               <h3 className="text-xl font-bold font-display text-secondary mb-8 uppercase tracking-wider">Đánh giá từ khách hàng</h3>
               <div className="space-y-8">
                  {[1, 2].map(i => (
                    <div key={i} className="flex gap-4 p-8 bg-gray-50/50 rounded-3xl border border-gray-100">
                       <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0 relative overflow-hidden">
                           <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10" />
                       </div>
                       <div>
                          <div className="flex items-center gap-2 mb-2">
                             <span className="font-bold text-secondary text-sm">Khách hàng {i}</span>
                             <div className="flex text-yellow-400 scale-75">
                                {[1, 2, 3, 4, 5].map(j => <Star key={j} size={12} fill="currentColor" />)}
                             </div>
                          </div>
                          <p className="text-sm text-gray-500 leading-relaxed italic">"Sản phẩm rất đẹp và chất lượng, độ hoàn thiện cao. Nhân viên kỹ thuật lắp ráp chuyên nghiệp và nhiệt tình."</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-10 border-t border-gray-50">
          <button onClick={onBack} className="inline-flex items-center gap-3 text-gray-400 hover:text-primary transition-all font-bold uppercase tracking-widest text-xs group">
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Quay lại danh sách
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
