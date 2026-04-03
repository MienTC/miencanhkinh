import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ChevronLeft, Star, Heart, CheckCircle2, Info, ChevronRight, Loader2 } from 'lucide-react'
import { supabase } from '../../../shared/lib/supabase'
import Navbar from '../../../components/layout/Navbar'
import Footer from '../../../components/layout/Footer'

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      setIsLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching product:', error);
        navigate('/');
        return;
      }

      if (data) {
        setProduct({
          ...data,
          img: data.image_url || '/img1.jpg'
        });
      }
      setIsLoading(false);
      window.scrollTo(0, 0);
    };

    fetchProduct();
  }, [id, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-primary" size={48} />
      </div>
    );
  }

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

  const reviews = [
    {
      name: 'Anh Hoàng - Vinhomes Ocean Park',
      avatar: '',
      rating: 5,
      content: 'Tủ cánh kính lắp lên nhìn rất sang trọng, nhôm xi mạ màu vàng xước cực kỳ tinh tế. Đội ngũ lắp đặt nhiệt tình, cẩn thận.'
    },
    {
      name: 'Chị Lan - Ecopark',
      avatar: '',
      rating: 5,
      content: 'Rất hài lòng với chất lượng kính cường lực và độ hoàn thiện của khung nhôm. Căn phòng trông rộng hơn hẳn nhờ hiệu ứng gương kính.'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans transition-all duration-700">
      <Navbar onHomeClick={() => navigate('/')} />
      
      <main className="pt-32 pb-20 container mx-auto px-6 animate-fade-in">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Trang chủ</Link>
          <span>/</span>
          <Link to="/projects" className="hover:text-primary transition-colors">Dự án</Link>
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
              {product.description || (isInox ? "Thùng tủ inox 304 là loại thùng tủ bếp cao cấp, bền bỉ nhất hiện nay, nổi bật với khả năng chống ăn mòn, không hoen gỉ và chống mối mọt tuyệt đối." :
                isKitchen ? "Tủ bếp cánh kính cường lực là giải pháp nhà bếp hiện đại, sang trọng, kết hợp giữa khung nhôm cao cấp và kính cường lực, mang lại độ bền >40 năm, kháng nước, chống mối mọt tuyệt đối." :
                  "Tủ áo cánh kính là giải pháp nội thất hiện đại, mang lại vẻ sang trọng, tinh tế cho phòng ngủ. Sản phẩm giúp không gian thông thoáng, rộng rãi hơn và bền bỉ theo thời gian.")
              }
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-10 border-t border-gray-100 mt-auto">
              <a href="/#contact" className="flex-grow bg-primary text-white text-center px-12 py-4 rounded-xl font-bold hover:bg-secondary transition-all shadow-xl shadow-primary/20 transform active:scale-95">
                Tư vấn ngay
              </a>
              <button className="w-14 h-14 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary transition-all hover:border-primary shadow-sm">
                <Heart size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-20">
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
                    { title: "Cấu tạo hiện đại", desc: "Sản xuất dạng module bằng máy chấn thủy lực, CNC, hạn chế mối hàn tăng độ bền và thẩm mỹ." }
                  ] : isKitchen ? [
                    { title: "Cấu tạo bền bỉ", desc: "Kính cường lực 4-6mm, viền nhôm định hình cao cấp, thùng tủ bằng Inox 304 hoặc nhôm tổ ong chống cháy." },
                    { title: "Thẩm mỹ sang trọng", desc: "Bề mặt kính bóng gương, màu sắc đa dạng (trắng, trà, xám khói) tạo vẻ đẹp hiện đại." },
                    { title: "Dễ vệ sinh", desc: "Bề mặt phẳng, không bám bẩn, dầu mỡ, dễ lau chùi chỉ với khăn ướt." }
                  ] : [
                    { title: "Thẩm mỹ cao & Đẳng cấp", desc: "Tạo điểm nhấn hiện đại, thời thượng với các loại kính màu trà, xám khói sang trọng." },
                    { title: "Mở rộng không gian", desc: "Khăng năng phản xạ ánh sáng tốt giúp căn phòng trông rộng và thoáng hơn." },
                    { title: "Bền bỉ, dễ vệ sinh", desc: "Sử dụng kính cường lực chịu lực tốt, khung nhôm không mối mọt, cong vênh." }
                  ]).map((item, i) => (
                    <div key={i} className="group">
                      <h4 className="font-bold text-secondary mb-1 group-hover:text-primary transition-colors text-sm">{item.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-10">
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
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
