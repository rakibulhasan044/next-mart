import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/core/ProductsCard";
import { getAllProducts } from "@/services/product";
import { IProduct } from "@/types";
import Link from "next/link";
import React from "react";

const FeaturedProducts = async () => {
  const { data: products } = await getAllProducts();
  return (
    <div className="bg-white bg-opacity-50 py-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link href={"/products"}>
            <Button variant={"outline"} className="rounded-full">
              All Collection
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-5 gap-8 my-5">
          {products.map((product: IProduct, idx: number) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
