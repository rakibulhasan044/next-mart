import AllProducts from "@/components/modules/products";
import ProductBanner from "@/components/modules/products/banner";
import CategoryCard from "@/components/ui/core/CategoryCard";
import NMContainer from "@/components/ui/core/NMContainer";
import { getAllCategories } from "@/services/category";
import { getAllProducts } from "@/services/product";
import { ICategory } from "@/types";
import React from "react";

const AllProductsPage = async () => {
  const { data: categories } = await getAllCategories();
  const { data: products } = await getAllProducts();
  return (
    <div>
      <NMContainer>
        <ProductBanner title="All Products" path="Home - Products" />
        <h2 className="text-2xl font-bold mt-10">Featured Collection</h2>
        <div className="grid grid-cols-6 gap-6 mt-10">
          {categories?.slice(0, 6).map((category: ICategory, idx: number) => (
            <CategoryCard key={idx} category={category} />
          ))}
        </div>
        <AllProducts products={products} />
      </NMContainer>
    </div>
  );
};

export default AllProductsPage;
