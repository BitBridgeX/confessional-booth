import { supabase } from "./supabase";
import { getDB } from "./db";
import type { MerchProduct, Order } from "./database.types";

export async function getProducts(category?: string, limit = 100): Promise<MerchProduct[]> {
  let query = supabase.from("cb_merch_products").select("*").gt("inventory", 0);
  if (category && category !== "All") query = (query as any).eq("category", category);
  const { data, error } = await (query as any).order("is_featured", { ascending: false }).order("created_at", { ascending: false }).limit(limit);
  if (error) { console.error("getProducts:", (error as any).message); return []; }
  return (data ?? []) as MerchProduct[];
}

export async function getProduct(id: string): Promise<MerchProduct | null> {
  const { data, error } = await supabase
    .from("cb_merch_products")
    .select("*")
    .eq("id", id)
    .single();
  if (error) { console.error("getProduct:", error.message); return null; }
  return data;
}

export async function getFeaturedProducts(limit = 6): Promise<MerchProduct[]> {
  const { data, error } = await supabase
    .from("cb_merch_products")
    .select("*")
    .eq("is_featured", true)
    .gt("inventory", 0)
    .limit(limit);
  if (error) return [];
  return data ?? [];
}

export async function createOrder(
  userId: string | null,
  productId: string,
  quantity: number,
  stripeSessionId: string,
  totalAmount: number,
  shippingAddress?: Record<string, string>
): Promise<Order | null> {
  const db = getDB();
  const { data, error } = await db
    .from("cb_orders")
    .insert({
      user_id: userId,
      product_id: productId,
      quantity,
      stripe_session_id: stripeSessionId,
      total_amount: totalAmount,
      shipping_address: shippingAddress ?? null,
      status: "pending",
    })
    .select()
    .single();
  if (error) { console.error("createOrder:", (error as any).message); return null; }
  return data as Order;
}

export async function updateInventory(productId: string, qty: number): Promise<void> {
  const db = getDB();
  await db.rpc("update_inventory", { product_id: productId, qty });
}
