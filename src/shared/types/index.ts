export interface Product {
    name: string;
    img: string;
    price?: string;
    oldPrice?: string;
    tag?: 'NEW' | 'SALE';
    description?: string;
}

export interface NavLink {
    name: string;
    href: string;
    isHome?: boolean;
}

export interface Section {
    title: string;
    items: Product[];
}
