export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string
          name: string
          description: string
          short_description: string
          price: number
          original_price?: number
          sku: string
          category: string
          subcategory?: string
          brand?: string
          images: string[]
          features: string[]
          specifications: Json
          stock_quantity: number
          is_active: boolean
          is_featured: boolean
          is_new: boolean
          is_on_sale: boolean
          seo_title?: string
          seo_description?: string
          seo_keywords?: string[]
          average_rating: number
          review_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          short_description: string
          price: number
          original_price?: number
          sku: string
          category: string
          subcategory?: string
          brand?: string
          images: string[]
          features: string[]
          specifications?: Json
          stock_quantity?: number
          is_active?: boolean
          is_featured?: boolean
          is_new?: boolean
          is_on_sale?: boolean
          seo_title?: string
          seo_description?: string
          seo_keywords?: string[]
          average_rating?: number
          review_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          short_description?: string
          price?: number
          original_price?: number
          sku?: string
          category?: string
          subcategory?: string
          brand?: string
          images?: string[]
          features?: string[]
          specifications?: Json
          stock_quantity?: number
          is_active?: boolean
          is_featured?: boolean
          is_new?: boolean
          is_on_sale?: boolean
          seo_title?: string
          seo_description?: string
          seo_keywords?: string[]
          average_rating?: number
          review_count?: number
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string
          image?: string
          icon?: string
          parent_id?: string
          sort_order: number
          is_active: boolean
          seo_title?: string
          seo_description?: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description: string
          image?: string
          icon?: string
          parent_id?: string
          sort_order?: number
          is_active?: boolean
          seo_title?: string
          seo_description?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string
          image?: string
          icon?: string
          parent_id?: string
          sort_order?: number
          is_active?: boolean
          seo_title?: string
          seo_description?: string
          created_at?: string
          updated_at?: string
        }
      }
      users: {
        Row: {
          id: string
          email: string
          full_name?: string
          avatar_url?: string
          phone?: string
          date_of_birth?: string
          gender?: string
          preferences: Json
          is_discreet_mode: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string
          avatar_url?: string
          phone?: string
          date_of_birth?: string
          gender?: string
          preferences?: Json
          is_discreet_mode?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          avatar_url?: string
          phone?: string
          date_of_birth?: string
          gender?: string
          preferences?: Json
          is_discreet_mode?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      cart_items: {
        Row: {
          id: string
          user_id: string
          product_id: string
          quantity: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          product_id: string
          quantity: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          product_id?: string
          quantity?: number
          created_at?: string
          updated_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          user_id: string
          order_number: string
          status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
          total_amount: number
          subtotal_amount: number
          tax_amount: number
          shipping_amount: number
          discount_amount: number
          shipping_address: Json
          billing_address: Json
          payment_method: string
          payment_status: 'pending' | 'paid' | 'failed' | 'refunded'
          notes?: string
          tracking_number?: string
          shipped_at?: string
          delivered_at?: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          order_number: string
          status?: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
          total_amount: number
          subtotal_amount: number
          tax_amount: number
          shipping_amount: number
          discount_amount?: number
          shipping_address: Json
          billing_address: Json
          payment_method: string
          payment_status?: 'pending' | 'paid' | 'failed' | 'refunded'
          notes?: string
          tracking_number?: string
          shipped_at?: string
          delivered_at?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          order_number?: string
          status?: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
          total_amount?: number
          subtotal_amount?: number
          tax_amount?: number
          shipping_amount?: number
          discount_amount?: number
          shipping_address?: Json
          billing_address?: Json
          payment_method?: string
          payment_status?: 'pending' | 'paid' | 'failed' | 'refunded'
          notes?: string
          tracking_number?: string
          shipped_at?: string
          delivered_at?: string
          created_at?: string
          updated_at?: string
        }
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          product_id: string
          quantity: number
          unit_price: number
          total_price: number
          created_at: string
        }
        Insert: {
          id?: string
          order_id: string
          product_id: string
          quantity: number
          unit_price: number
          total_price: number
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string
          product_id?: string
          quantity?: number
          unit_price?: number
          total_price?: number
          created_at?: string
        }
      }
      product_reviews: {
        Row: {
          id: string
          product_id: string
          user_id: string
          order_id?: string
          rating: number
          title: string
          comment: string
          is_verified: boolean
          is_approved: boolean
          helpful_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          product_id: string
          user_id: string
          order_id?: string
          rating: number
          title: string
          comment: string
          is_verified?: boolean
          is_approved?: boolean
          helpful_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          product_id?: string
          user_id?: string
          order_id?: string
          rating?: number
          title?: string
          comment?: string
          is_verified?: boolean
          is_approved?: boolean
          helpful_count?: number
          created_at?: string
          updated_at?: string
        }
      }
      blog_posts: {
        Row: {
          id: string
          title: string
          slug: string
          content: string
          excerpt: string
          featured_image?: string
          author_id: string
          category: string
          tags: string[]
          is_published: boolean
          is_featured: boolean
          seo_title?: string
          seo_description?: string
          seo_keywords?: string[]
          read_time_minutes?: number
          view_count: number
          created_at: string
          updated_at: string
          published_at?: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          content: string
          excerpt: string
          featured_image?: string
          author_id: string
          category: string
          tags?: string[]
          is_published?: boolean
          is_featured?: boolean
          seo_title?: string
          seo_description?: string
          seo_keywords?: string[]
          read_time_minutes?: number
          view_count?: number
          created_at?: string
          updated_at?: string
          published_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          content?: string
          excerpt?: string
          featured_image?: string
          author_id?: string
          category?: string
          tags?: string[]
          is_published?: boolean
          is_featured?: boolean
          seo_title?: string
          seo_description?: string
          seo_keywords?: string[]
          read_time_minutes?: number
          view_count?: number
          created_at?: string
          updated_at?: string
          published_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}