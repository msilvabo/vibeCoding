export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      properties: {
        Row: {
          address: string
          area_m2: number
          badge: string | null
          bathrooms: number
          bedrooms: number
          city: string
          country: string | null
          created_at: string
          display_address: string
          id: string
          image_alt: string
          image_url: string
          is_featured: boolean
          listing_type: string
          price: number
          property_type: string
          state: string | null
          title: string
        }
        Insert: {
          address: string
          area_m2?: number
          badge?: string | null
          bathrooms?: number
          bedrooms?: number
          city: string
          country?: string | null
          created_at?: string
          display_address: string
          id?: string
          image_alt: string
          image_url: string
          is_featured?: boolean
          listing_type: string
          price: number
          property_type: string
          state?: string | null
          title: string
        }
        Update: {
          address?: string
          area_m2?: number
          badge?: string | null
          bathrooms?: number
          bedrooms?: number
          city?: string
          country?: string | null
          created_at?: string
          display_address?: string
          id?: string
          image_alt?: string
          image_url?: string
          is_featured?: boolean
          listing_type?: string
          price?: number
          property_type?: string
          state?: string | null
          title?: string
        }
        Relationships: []
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
