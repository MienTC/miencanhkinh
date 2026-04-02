import React, { useEffect } from 'react'
import { ChevronLeft, Star, Heart, CheckCircle2, Info, ChevronRight } from 'lucide-react'
import { Product } from '../../../shared/types'

interface ProductDetailProps {
  product: Product | null;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    onBack();
    // Đợi một chút để danh sách sản phẩm render lại rồi cuộn xuống
    setTimeout(() => {
      const element = document.getElementById('products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  if (!product) return null;

  const isKitchen = product.name.toLowerCase().includes('tủ bếp');
  const isWardrobe = product.name.toLowerCase().includes('tủ áo');
  const isInox = product.name.toLowerCase().includes('inox');

  const gallery = [
    product.img,
    '/img2.jpg',
    '/img4.jpg',
    '/img1.jpg',
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const specs = [
    { label: 'Chất liệu', value: 'Kính cường lực & Khung nhôm cao cấp' },
    { label: 'Màu sắc nhôm phổ biến', value: 'Đen Mờ, Đen Xước, Vàng Xước, Xám Xước, Vàng Bóng, Hồng Baby' },
    { label: 'Độ dày kính', value: '5mm / 8mm' },
    { label: 'Bảo hành', value: '5 năm' },
  ];

  const reviews: { name: string; avatar: string; rating: number; content: string }[] = [
    {
      name: 'Anh Hoàng - Vinhomes Ocean Park',
      avatar: '/hoang.jpg',
      rating: 5,
      content: 'Tủ cánh kính lắp lên nhìn rất sang trọng, nhôm xi mạ màu vàng xước cực kỳ tinh tế. Đội ngũ lắp đặt nhiệt tình, cẩn thận.'
    },
    {
      name: 'Chị Lan - Ecopark',
      avatar: '/lan.jpg',
      rating: 5,
      content: 'Rất hài lòng với chất lượng kính cường lực và độ hoàn thiện của khung nhôm. Căn phòng trông rộng hơn hẳn nhờ hiệu ứng gương kính.'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen font-sans">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8 mt-10">
          <button onClick={handleBack} className="hover:text-primary cursor-pointer transition-colors">Home</button>
          <span>/</span>
          <button onClick={handleBack} className="hover:text-primary cursor-pointer transition-colors">Sản phẩm</button>
          <span>/</span>
          <span className="text-secondary font-bold">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 mb-6 group">
              <img src={gallery[activeIndex]} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />

              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all shadow-lg"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all shadow-lg"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {gallery.map((imgSrc, i) => (
                <div
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${activeIndex === i ? 'border-primary' : 'border-transparent hover:border-gray-200'}`}
                >
                  <img src={imgSrc} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
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

            <p className="text-gray-600 mb-8 leading-relaxed">
              {isInox ? "Thùng tủ inox 304 là loại thùng tủ bếp cao cấp, bền bỉ nhất hiện nay, nổi bật với khả năng chống ăn mòn, không hoen gỉ và chống mối mọt tuyệt đối." :
                isKitchen ? "Tủ bếp cánh kính cường lực là giải pháp nhà bếp hiện đại, sang trọng, kết hợp giữa khung nhôm cao cấp và kính cường lực, mang lại độ bền >40 năm, kháng nước, chống mối mọt tuyệt đối. Sản phẩm nổi bật với bề mặt sáng bóng, dễ vệ sinh, tạo cảm giác không gian rộng rãi, lung linh nhờ khả năng phản chiếu ánh sáng." :
                  "Tủ áo cánh kính là giải pháp nội thất hiện đại, mang lại vẻ sang trọng, tinh tế cho phòng ngủ. Sản phẩm giúp không gian thông thoáng, rộng rãi hơn và bền bỉ theo thời gian."
              }
            </p>

            {!isInox && (
              <div className="mb-10">
                <span className="block text-sm font-bold text-secondary uppercase tracking-widest mb-4">Màu sắc nhôm thịnh hành</span>
                <div className="flex gap-4">
                  {['#282828', '#FFEE8C', '#CCC', '#FFC0CB'].map((color, i) => (
                    <button key={i} className="w-10 h-10 cursor-pointer rounded-full border-2 border-white ring-1 ring-gray-200 shadow-md hover:ring-primary transition-all overflow-hidden" style={{ backgroundColor: color }} />
                  ))}
                </div>
              </div>
            )}

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-bold font-display text-secondary mb-6 uppercase tracking-wider flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={24} />
                  Đặc điểm nổi bật
                </h3>
                <div className="space-y-4">
                  {(isInox ? [
                    { title: "Độ bền vĩnh cửu", desc: "Tuổi thọ lên tới 30 năm, không bị cong vênh, co ngót hay mối mọt trong môi trường ẩm ướt." },
                    { title: "Vệ sinh & An toàn", desc: "Bề mặt nhẵn mịn, không bám bẩn, dễ lau chùi và đạt tiêu chuẩn an toàn thực phẩm." },
                    { title: "Cấu tạo hiện đại", desc: "Sản xuất dạng module bằng máy chấn thủy lực, CNC, hạn chế mối hàn tăng độ bền và thẩm mỹ." },
                    { title: "Thiết kế thông minh", desc: "Có thể kết hợp linh hoạt với cánh kính, cánh gỗ tạo sự đa dạng và sang trọng." },
                    { title: "Chống nhiệt", desc: "Không bị oxi hóa, không biến dạng khi tiếp xúc với nhiệt độ cao từ xoong nồi." }
                  ] : isKitchen ? [
                    { title: "Cấu tạo bền bỉ", desc: "Kính cường lực 4-6mm, viền nhôm định hình cao cấp, thùng tủ bằng Inox 304 hoặc nhôm tổ ong chống cháy, chống nước tuyệt đối." },
                    { title: "Thẩm mỹ sang trọng", desc: "Bề mặt kính bóng gương, màu sắc đa dạng (trắng, trà, xám khói) tạo vẻ đẹp hiện đại, tinh tế." },
                    { title: "Dễ vệ sinh", desc: "Bề mặt phẳng, không bám bẩn, dầu mỡ, dễ lau chùi chỉ với khăn ướt." },
                    { title: "Tính ứng dụng", desc: "Phù hợp với cả không gian hẹp (tạo cảm giác rộng) và hiện đại, có thể kết hợp đèn LED." }
                  ] : [
                    { title: "Thẩm mỹ cao & Đẳng cấp", desc: "Tạo điểm nhấn hiện đại, thời thượng với các loại kính màu trà, xám khói sang trọng." },
                    { title: "Mở rộng không gian", desc: "Khăng năng phản xạ ánh sáng tốt giúp căn phòng trông rộng và thoáng hơn." },
                    { title: "Bền bỉ, dễ vệ sinh", desc: "Sử dụng kính cường lực chịu lực tốt, khung nhôm không mối mọt, cong vênh." },
                    { title: "Dễ dàng quan sát", desc: "Tiết kiệm thời gian tìm kiếm đồ và biến tủ áo thành nơi trưng bày trang phục." },
                    { title: "Đa dạng mẫu mã", desc: "Nhiều lựa chọn về màu kính (trong suốt, mờ, trà) và khung nhôm cao cấp." }
                  ]).map((item, i) => (
                    <div key={i} className="group">
                      <h4 className="font-bold text-secondary mb-1 group-hover:text-primary transition-colors text-sm">{item.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {isWardrobe && (
                <div className="p-8 bg-secondary/5 rounded-3xl border border-secondary/5">
                  <h3 className="text-xl font-bold font-display text-secondary mb-6 uppercase tracking-wider flex items-center gap-3">
                    <Info className="text-primary" size={24} />
                    Lưu ý khi sử dụng
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                      Nên kết hợp đèn LED âm tủ để tăng hiệu ứng thẩm mỹ, đặc biệt với kính mờ hoặc màu tối.
                    </li>
                    <li className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                      Cần giữ vệ sinh tủ và sắp xếp quần áo gọn gàng bên trong để duy trì vẻ thẩm mỹ.
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-10">
              {(isInox || isWardrobe) && (
                <div>
                  <h3 className="text-xl font-bold font-display text-secondary mb-8 uppercase tracking-wider">
                    {isInox ? "Phân loại & Ứng dụng" : "Các loại phổ biến"}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {isInox ? (
                      <>
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                          <span className="text-xs font-black text-primary uppercase tracking-widest mb-3 block">Ứng dụng</span>
                          <p className="text-sm text-secondary font-bold">Thùng tủ dưới (nơi ẩm ướt) hoặc thùng tủ trên để tối ưu độ bền.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                          <span className="text-xs font-black text-primary uppercase tracking-widest mb-3 block">Phân loại</span>
                          <p className="text-sm text-secondary font-bold">Thùng inox module CNC hoặc Inox 3 lớp (kết hợp nhôm tổ ong).</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                          <span className="text-xs font-black text-primary uppercase tracking-widest mb-3 block">Theo loại cửa</span>
                          <p className="text-sm text-secondary font-bold">Cánh kính lùa (tiết kiệm không gian) hoặc cánh kính mở quay.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                          <span className="text-xs font-black text-primary uppercase tracking-widest mb-3 block">Theo loại kính</span>
                          <p className="text-sm text-secondary font-bold">Kính trong suốt, kính mờ (kính đục), kính trà, kính xám khói.</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {isKitchen && (
                <div className="p-8 bg-secondary/5 rounded-3xl border border-secondary/5">
                  <h3 className="text-xl font-bold font-display text-secondary mb-6 uppercase tracking-wider flex items-center gap-3">
                    <Info className="text-primary" size={24} />
                    Ưu & Nhược điểm
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                      Ưu điểm: Chống cong vênh, mối mọt, ẩm mốc. Khả năng chịu lực, chịu nhiệt cao. Dễ dàng tìm kiếm đồ dùng bên trong.
                    </li>
                    <li className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                      Nhược điểm: Giá thành cao hơn tủ bếp gỗ công nghiệp thông thường. Cần vệ sinh thường xuyên để giữ độ sáng bóng, tránh dấu vân tay.
                    </li>
                  </ul>
                </div>
              )}

              <p className="text-gray-500 italic text-sm leading-relaxed border-l-4 border-primary/20 pl-6 py-2">
                {isInox ? "Thùng tủ inox 304 là khoản đầu tư thông minh, đảm bảo sự chắc chắn và vệ sinh tối đa cho không gian bếp hiện đại." :
                  isKitchen ? "Đây là lựa chọn lý tưởng cho các gia đình yêu thích phong cách sống hiện đại, đẳng cấp và chú trọng độ bền cao." :
                    "Tủ áo cánh kính là lựa chọn lý tưởng cho các căn hộ chung cư, nhà phố hiện đại hoặc phòng thay đồ riêng."
                }
              </p>
            </div>
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
                {reviews.map((rev, i) => (
                  <div key={i} className="flex gap-4 p-8 bg-gray-50/50 rounded-3xl border border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0 relative overflow-hidden border border-gray-100">
                      {rev.avatar ? (
                        <img src={rev.avatar} alt={rev.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-bold text-secondary text-sm">{rev.name}</span>
                        <div className="flex text-yellow-400 scale-75">
                          {Array.from({ length: rev.rating }).map((_, j) => <Star key={j} size={12} fill="currentColor" />)}
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed italic">"{rev.content}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-10 border-t border-gray-50">
          <button onClick={handleBack} className="inline-flex items-center gap-3 text-gray-400 hover:text-primary transition-all font-bold uppercase tracking-widest text-xs group">
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Quay lại danh sách
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
