import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Share2,
  ExternalLink,
  ChevronUp,
} from "lucide-react";

const Footer: React.FC = () => {
  const branches = [
    "Hà Nội",
    "Tp. Hồ Chí Minh",
    "Hải Phòng",
    "Thanh Hóa",
    "Đà Nẵng",
  ];
  const policies = ["Đổi trả", "Thanh toán", "Khiếu nại", "Trả góp"];
  const helpItems = ["Sản phẩm", "Đơn hàng", "Chất lượng", "Chính sách"];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-50 relative overflow-hidden font-sans">
      <div className="container mx-auto px-6">
        <div className="bg-[#3D3D4E] text-white p-12 lg:p-24 rounded-[60px] shadow-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white p-1 shadow-lg">
                <img
                  src="/logo.jpg"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-2xl font-bold font-display block leading-none tracking-tighter">
                  MIỀN
                </span>
                <span className="text-primary text-[10px] font-black tracking-widest uppercase">
                  Cánh Kính
                </span>
              </div>
            </div>
            <ul className="space-y-8 text-sm text-white/50">
              <li className="flex items-start gap-4 group cursor-pointer transition-all hover:text-white">
                <Phone
                  size={18}
                  className="mt-1 flex-shrink-0 group-hover:scale-110"
                />
                <span className="leading-tight">0973.645.609</span>
              </li>
              <li className="flex items-start gap-4 group cursor-pointer transition-all hover:text-white">
                <Mail
                  size={18}
                  className="mt-1 flex-shrink-0 group-hover:scale-110"
                />
                <span className="leading-tight">nn.mien1903@gmail.com</span>
              </li>
              <li className="flex items-start gap-4 group cursor-pointer transition-all hover:text-white">
                <MapPin
                  size={18}
                  className="mt-1 flex-shrink-0 group-hover:scale-110"
                />
                <span className="leading-tight">
                  Xưởng Cánh Kính An Phát, Đồng Trúc, Thạch Thất, Hà Nội
                </span>
              </li>
            </ul>
            <div className="flex gap-8 mt-16 pb-4 border-b border-white/10 w-fit">
              <button className="text-white/40 hover:text-primary transition-all hover:scale-125">
                <Globe size={24} />
              </button>
              <button className="text-white/40 hover:text-primary transition-all hover:scale-125">
                <Share2 size={24} />
              </button>
              <button className="text-white/40 hover:text-primary transition-all hover:scale-125">
                <ExternalLink size={24} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold font-display mb-12 tracking-[0.2em] uppercase text-primary">
              Chi nhánh
            </h4>
            <ul className="space-y-5 text-white/50 text-sm font-medium">
              {branches.map((b) => (
                <li
                  key={b}
                  className="hover:text-white transition-all cursor-pointer hover:translate-x-2"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-display mb-12 tracking-[0.2em] uppercase text-primary">
              Chính sách
            </h4>
            <ul className="space-y-5 text-white/50 text-sm font-medium">
              {policies.map((p) => (
                <li
                  key={p}
                  className="hover:text-white transition-all cursor-pointer hover:translate-x-2"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-display mb-12 tracking-[0.2em] uppercase text-primary">
              Hỏi đáp
            </h4>
            <ul className="space-y-5 text-white/50 text-sm font-medium">
              {helpItems.map((h) => (
                <li
                  key={h}
                  className="hover:text-white transition-all cursor-pointer hover:translate-x-2"
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-12 right-12 w-16 h-16 bg-white text-secondary rounded-full flex items-center justify-center shadow-3xl border border-gray-100 hover:bg-primary hover:text-white transition-all transform hover:scale-110 active:scale-95 group z-50 ring-4 ring-white/50"
      >
        <ChevronUp
          size={28}
          className="group-hover:-translate-y-2 transition-transform duration-500"
        />
      </button>
    </footer>
  );
};

export default Footer;
