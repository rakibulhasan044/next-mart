import CartProducts from "@/components/modules/cart/cartProducts";
import Coupon from "@/components/modules/cart/Coupon";
import ProductBanner from "@/components/modules/products/banner";
import NMContainer from "@/components/ui/core/NMContainer";
import React from "react";

const CartPage = () => {
  return (
    <NMContainer>
      <ProductBanner title="My Cart" path="Home - Cart" />
      <div className="grid grid-cols-12 gap-8 mt-10">
        <CartProducts />
        <Coupon />
      </div>
    </NMContainer>
  );
};

export default CartPage;
