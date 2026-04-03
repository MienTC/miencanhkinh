import React, { useEffect, useState } from 'react'
import { useSearchParams, Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../../shared/lib/supabase'
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'
import Navbar from '../../../components/layout/Navbar'
import Footer from '../../../components/layout/Footer'

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Product {
  id: number;
  name: string;
  img: string;
  category_id: number;
}

const ProjectsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentCategorySlug = searchParams.get('category');
  const currentPage = parseInt(searchParams.get('page') || '1');
  
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  const ITEMS_PER_PAGE = 8;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      
      const { data: catData } = await supabase.from('categories').select('*');
      if (catData) setCategories(catData);
      
      let selectedCategoryId: number | null = null;
      if (currentCategorySlug) {
        const found = catData?.find(c => c.slug === currentCategorySlug);
        if (found) selectedCategoryId = found.id;
      }
      
      let query = supabase
        .from('products')
        .select('*', { count: 'exact' });
        
      if (selectedCategoryId) {
        query = query.eq('category_id', selectedCategoryId);
      }
      
      const from = (currentPage - 1) * ITEMS_PER_PAGE;
      const to = from + ITEMS_PER_PAGE - 1;
      
      const { data: prodData, count } = await query
        .range(from, to)
        .order('id', { ascending: false });
        
      if (prodData) {
        setProducts(prodData.map((p: any) => ({
          ...p,
          img: p.image_url || p.img || '/img1.jpg' 
        })));
      }
      if (count !== null) setTotalCount(count);
      
      setIsLoading(false);
      window.scrollTo(0, 0);
    };
    
    fetchData();
  }, [currentCategorySlug, currentPage]);

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  const handleCategoryClick = (slug: string | null) => {
    if (slug) {
      setSearchParams({ category: slug, page: '1' });
    } else {
      setSearchParams({ page: '1' });
    }
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      if (currentCategorySlug) {
        setSearchParams({ category: currentCategorySlug, page: newPage.toString() });
      } else {
        setSearchParams({ page: newPage.toString() });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar onHomeClick={() => navigate('/')} />
      
      <main className="container mx-auto px-6 pt-32 pb-24">
        <div className="mb-12">
          <Link to="/" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest">
            <ChevronLeft size={16} /> Trang chủ
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-secondary tracking-tight uppercase">
            Hạng Mục <span className="text-primary italic">Dự án</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-1/4">
            <div className="bg-gray-50 rounded-3xl p-8 sticky top-32 border border-gray-100 shadow-xl shadow-gray-50">
              <h3 className="text-xs font-black uppercase tracking-widest text-secondary mb-6 border-b border-gray-200 pb-4">Phân loại</h3>
              <ul className="space-y-4">
                <li>
                  <button 
                    onClick={() => handleCategoryClick(null)}
                    className={`w-full text-left px-4 py-2 rounded-xl font-bold transition-all text-sm uppercase tracking-wider ${!currentCategorySlug ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:bg-gray-100'}`}
                  >
                    Tất cả dự án
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button 
                      onClick={() => handleCategoryClick(cat.slug)}
                      className={`w-full text-left px-4 py-2 rounded-xl font-bold transition-all text-sm uppercase tracking-wider ${currentCategorySlug === cat.slug ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:bg-gray-100'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:w-3/4">
            {isLoading ? (
              <div className="flex items-center justify-center h-96">
                <Loader2 className="animate-spin text-primary" size={48} />
              </div>
            ) : products.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                  {products.map((project) => (
                    <Link to={`/product/${project.id}`} key={project.id} className="group relative h-[300px] rounded-[30px] overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-2 block">
                       <img src={project.img} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                       <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                       <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                         <h4 className="text-sm font-bold font-display text-white mb-2 leading-tight">{project.name}</h4>
                         <div className="w-8 h-1 bg-primary rounded-full" />
                       </div>
                    </Link>
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-4">
                    <button 
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button 
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-12 h-12 rounded-full font-bold transition-all ${currentPage === page ? 'bg-secondary text-white shadow-lg' : 'text-gray-400 hover:bg-gray-50'}`}
                      >
                        {page}
                      </button>
                    ))}
                    <button 
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex items-center justify-center h-96 text-gray-400 font-bold italic">
                Chưa có hình ảnh nào cho hạng mục này.
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ProjectsPage
