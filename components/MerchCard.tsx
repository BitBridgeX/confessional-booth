"use client";

import { MerchProduct } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";

interface MerchCardProps {
  product: MerchProduct;
}

export default function MerchCard({ product }: MerchCardProps) {
  const categoryEmoji: Record<string, string> = {
    vinyl: "💿",
    cd: "💽",
    tshirt: "👕",
    journal: "📓",
    candle: "🕯️",
    print: "🖼️",
    pdf: "📄",
    nft: "🎨",
  };

  return (
    <Link href={`/merch/${product.id}`}>
      <div className="sacred-card sacred-card-hover group cursor-pointer h-full flex flex-col">
        {product.image_url && (
          <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-sacred-purple mb-4">
            <Image
              src={product.image_url}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-2 right-2 bg-black bg-opacity-60 px-2 py-1 rounded text-sm">
              {categoryEmoji[product.type] || "🛍️"}
            </div>
          </div>
        )}

        <div className="flex-1 flex flex-col">
          <h3 className="font-playfair text-lg font-semibold group-hover:text-sacred-gold transition-colors mb-2">
            {product.name}
          </h3>

          <p className="text-sm text-sacred-cream opacity-80 mb-4 flex-1 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-sacred-gold border-opacity-20">
            <span className="font-playfair text-xl text-sacred-gold">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-xs text-sacred-cream opacity-60">
              {product.inventory > 0 ? `${product.inventory} in stock` : "Out of stock"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
