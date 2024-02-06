"use client";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/utils";
import { Fragment } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

const Cart = () => {
  const cartCount = 0;
  const fee = 1;
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2 ">
        <ShoppingCart
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 "
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          0
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6 ">
          <SheetTitle>Cart(0)</SheetTitle>
        </SheetHeader>
        {cartCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">
              {/*TODO:Cart Logic*/}
              CartItems
            </div>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex ">
                  <span className="flex-1">Shipping</span>
                  <span>Free</span>
                </div>{" "}
                <div className="flex ">
                  <span className="flex-1">Transaction Fee</span>
                  <span>{formatPrice(fee)}</span>
                </div>
                <div className="flex ">
                  <span className="flex-1">Total</span>
                  <span>{formatPrice(fee)}</span>
                </div>
              </div>
              <div>
                <SheetFooter>
                  <SheetTrigger asChild>
                    <Link
                      href="/cart"
                      className={buttonVariants({
                        className: "w-full",
                      })}
                    >
                      Continue To Checkout
                    </Link>
                  </SheetTrigger>
                </SheetFooter>
              </div>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col justify-center items-center space-y-1">
            <div className="relative mb-4 h-60 w-60 text-muted">
              <Image src="/hippo-empty-cart.png" alt="empty cart" fill />
            </div>
            <div className="text-xl font-semibold"> Your Cart Is Empty</div>
            <SheetTrigger asChild>
              <Link
                href="/products"
                className={buttonVariants({
                  variant: "link",
                  size: "sm",
                  className: "text-sm text-muted-foreground",
                })}
              >
                Add item's to your cart to checkout.
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
