import ProductCard from "@/components/ui/core/ProductsCard";
import { IProduct } from "@/types";
import FilterSidebar from "./FilterSidebar";

const AllProducts = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="flex items-start gap-8 mt-10">
      <div className="div">
        <FilterSidebar />
      </div>
      <div className="div">
        <div className="grid grid-cols-3 gap-5">
          {products?.map((product: IProduct, idx: number) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
