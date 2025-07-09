"use client";
import { Button } from "@/components/ui/button";
import { currencyFormatter } from "@/lib/currencyFormatter";
import {  citySelector, grandTotalSelector, orderedProductsSelector, orderSelector, shippingAddressSelector, shippingCostSelector, subTotalSelector } from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";


export default function PaymentDetails() {

  const subTotal = useAppSelector(subTotalSelector).toFixed(2)
  const shippingCost = useAppSelector(shippingCostSelector)
  const order = useAppSelector(orderSelector);
  const grandTotal = useAppSelector(grandTotalSelector)
  const city = useAppSelector(citySelector)
  const shippingAddress = useAppSelector(shippingAddressSelector);
  const cartProducts = useAppSelector(orderedProductsSelector);

  const handleOrder = () => {
    const orderLoading = toast.loading("Order is being placed")
    try {
      if(!city) {
        throw new Error("City is missing")
      }
      if(!shippingAddress) {
        throw new Error("Shipping address is missing")
      }
      if(cartProducts.length === 0) {
        throw new Error("Cart is empty")
      }
      toast.success("Order placed successfully", {id: orderLoading})
    } catch (error: any) {
      toast.error(error.message, {id: orderLoading})
    }
  }

  return (
    <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-4 h-fit p-5">
      <h1 className="text-2xl font-bold">Payment Details</h1>
      <div className="space-y-2 mt-4">
        <div className="flex justify-between">
          <p className="text-gray-500 ">Subtotal</p>
          <p className="font-semibold">{subTotal}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 ">Discount</p>
          <p className="font-semibold">80</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 ">Shipment Cost</p>
          <p className="font-semibold">{shippingCost}</p>
        </div>
      </div>
      <div className="flex justify-between mt-10 mb-5">
        <p className="text-gray-500 ">Grand Total</p>
        <p className="font-semibold">{currencyFormatter(grandTotal)}</p>
      </div>
      <Button
        onClick={handleOrder}
        className="w-full text-xl font-semibold py-5"
      >
        Order Now
      </Button>
    </div>
  );
}