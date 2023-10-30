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
      elections: {
        Row: {
          close_date: string | null
          contestants: Json | null
          created_at: string
          created_by: string | null
          election_id: string
          election_name: string | null
          election_type: string | null
          open_date: string | null
          voters: Json | null
        }
        Insert: {
          close_date?: string | null
          contestants?: Json | null
          created_at?: string
          created_by?: string | null
          election_id?: string
          election_name?: string | null
          election_type?: string | null
          open_date?: string | null
          voters?: Json | null
        }
        Update: {
          close_date?: string | null
          contestants?: Json | null
          created_at?: string
          created_by?: string | null
          election_id?: string
          election_name?: string | null
          election_type?: string | null
          open_date?: string | null
          voters?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "elections_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          email: string | null
          firstname: string | null
          lastname: string | null
          user_id: string
        }
        Insert: {
          email?: string | null
          firstname?: string | null
          lastname?: string | null
          user_id: string
        }
        Update: {
          email?: string | null
          firstname?: string | null
          lastname?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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
