import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/database';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});

// Helper functions for common operations
export const supabaseHelpers = {
  // Products
  getProducts: async (filters?: {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    inStock?: boolean;
  }) => {
    let query = supabase.from('products').select('*');

    if (filters?.category) {
      query = query.eq('category', filters.category);
    }

    if (filters?.minPrice) {
      query = query.gte('price', filters.minPrice);
    }

    if (filters?.maxPrice) {
      query = query.lte('price', filters.maxPrice);
    }

    if (filters?.inStock) {
      query = query.gt('stock_quantity', 0);
    }

    return query.order('created_at', { ascending: false });
  },

  // Cart operations
  getCart: async (userId: string) => {
    return supabase
      .from('cart_items')
      .select(`
        *,
        products (*)
      `)
      .eq('user_id', userId);
  },

  addToCart: async (userId: string, productId: string, quantity: number) => {
    return supabase.from('cart_items').insert({
      user_id: userId,
      product_id: productId,
      quantity,
    });
  },

  updateCartItem: async (itemId: string, quantity: number) => {
    return supabase
      .from('cart_items')
      .update({ quantity })
      .eq('id', itemId);
  },

  removeFromCart: async (itemId: string) => {
    return supabase.from('cart_items').delete().eq('id', itemId);
  },

  // Orders
  createOrder: async (orderData: {
    user_id: string;
    total_amount: number;
    shipping_address: any;
    items: any[];
  }) => {
    return supabase.from('orders').insert(orderData);
  },

  getUserOrders: async (userId: string) => {
    return supabase
      .from('orders')
      .select(`
        *,
        order_items (
          *,
          products (*)
        )
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
  },
};