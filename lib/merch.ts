import { supabase, MerchProduct, Order } from "./supabase";

export async function getProducts(
  category?: string,
  limit = 50
): Promise<MerchProduct[]> {
  let query = supabase.from("cb_merch_products").select("*");

  if (category) {
    query = query.eq("category", category);
  }

  const { data, error } = await query
    .eq("inventory", ">", 0)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }

  return data || [];
}

export async function getProduct(id: string): Promise<MerchProduct | null> {
  const { data, error } = await supabase
    .from("cb_merch_products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching product:", error);
    return null;
  }

  return data;
}

export async function createProduct(
  product: Omit<MerchProduct, "id" | "created_at">
): Promise<MerchProduct | null> {
  const { data, error } = await supabase
    .from("cb_merch_products")
    .insert([product])
    .select()
    .single();

  if (error) {
    console.error("Error creating product:", error);
    return null;
  }

  return data;
}

export async function updateProductInventory(
  id: string,
  quantity: number
): Promise<void> {
  await supabase.rpc("update_inventory", { product_id: id, qty: quantity });
}

export async function createOrder(
  userId: string,
  productId: string,
  quantity: number,
  stripeOrderId: string
): Promise<Order | null> {
  const { data, error } = await supabase
    .from("cb_orders")
    .insert([
      {
        user_id: userId,
        product_id: productId,
        quantity,
        stripe_order_id: stripeOrderId,
        status: "pending",
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Error creating order:", error);
    return null;
  }

  return data;
}

export async function getOrders(userId: string): Promise<Order[]> {
  const { data, error } = await supabase
    .from("cb_orders")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching orders:", error);
    return [];
  }

  return data || [];
}

export async function updateOrderStatus(
  id: string,
  status: Order["status"]
): Promise<Order | null> {
  const { data, error } = await supabase
    .from("cb_orders")
    .update({ status })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Error updating order:", error);
    return null;
  }

  return data;
}
