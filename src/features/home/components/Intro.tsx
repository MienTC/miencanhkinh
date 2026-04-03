import React from "react";

const Intro: React.FC = () => {
  return (
    <section id="about" className="py-35 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        <h2 className="text-center text-5xl font-bold font-display text-primary mb-24 uppercase tracking-[0.2em] relative inline-block w-full">
          Giới thiệu
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary rounded-full opacity-30" />
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/3 relative group">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
            <div className="relative rounded-[40px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-100 group-hover:scale-[1.02] transition-transform duration-700">
              <img
                src="/img4.jpg"
                alt="About"
                className="w-full h-full object-cover aspect-[4/5] scale-110 group-hover:scale-100 transition-transform duration-1000"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl border border-gray-50 flex items-center gap-6 group-hover:-translate-y-4 transition-transform duration-500">
              <div className="text-4xl font-bold font-display text-primary">
                5+
              </div>
              <div className="text-xs font-black text-secondary tracking-widest uppercase leading-tight">
                Năm kinh nghiệm
                <br />
                trong ngành
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-3xl md:text-4xl font-bold font-display text-secondary mb-10 leading-tight">
              Nâng tầm{" "}
              <span className="text-primary italic">Phong cách sống</span>
              <br />
              với giải pháp Cánh Kính Cao Cấp
            </h3>
            <p className="text-gray-500 mb-10 leading-relaxed text-lg max-w-xl">
              Chúng tôi tự hào là đơn vị tiên phong trong lĩnh vực thiết kế và
              thi công cánh kính tủ áo, tủ bếp khung nhôm cao cấp. Với đội ngũ
              kỹ thuật lành nghề và vật liệu nhập khẩu 100%, mỗi sản phẩm là một
              tác phẩm nghệ thuật hiện đại.
            </p>

            <div className="grid grid-cols-2 gap-10">
              <div>
                <h4 className="text-sm font-black text-secondary mb-3 uppercase tracking-widest border-l-4 border-primary pl-4">
                  Chất lượng
                </h4>
                <p className="text-sm text-gray-400">
                  Cam kết vật liệu chuẩn 304, kính cường lực an toàn tuyệt đối.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-black text-secondary mb-3 uppercase tracking-widest border-l-4 border-primary pl-4">
                  Thẩm mỹ
                </h4>
                <p className="text-sm text-gray-400">
                  Kiểu dáng thời thượng, dẫn đầu xu hướng nội thất quốc tế.
                </p>
              </div>
            </div>

            <div className="mt-16">
              <a
                href="#contact"
                className="inline-flex items-center gap-4 bg-secondary text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-primary transition-all shadow-xl shadow-secondary/20 transform active:scale-95"
              >
                Khám phá thêm
                <div className="w-8 h-[1px] bg-white opacity-50" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
