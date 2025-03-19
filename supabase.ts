export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      branch_medicine_stock_link: {
        Row: {
          branch_id: number
          medicine_id: number
          standard: number | null
          stock: number | null
          supplier_id: number
        }
        Insert: {
          branch_id: number
          medicine_id: number
          standard?: number | null
          stock?: number | null
          supplier_id: number
        }
        Update: {
          branch_id?: number
          medicine_id?: number
          standard?: number | null
          stock?: number | null
          supplier_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "branch_medicine_stock_link_branch_id_fkey"
            columns: ["branch_id"]
            isOneToOne: false
            referencedRelation: "branchs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "branch_medicine_stock_link_medicine_id_fkey"
            columns: ["medicine_id"]
            isOneToOne: false
            referencedRelation: "medicines"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "branch_medicine_stock_link_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
        ]
      }
      branch_supplier_manager_link: {
        Row: {
          branch_id: number
          manager_id: number
          supplier_id: number
        }
        Insert: {
          branch_id: number
          manager_id: number
          supplier_id: number
        }
        Update: {
          branch_id?: number
          manager_id?: number
          supplier_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "branch_supplier_manager_link_branch_id_fkey"
            columns: ["branch_id"]
            isOneToOne: false
            referencedRelation: "branchs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "branch_supplier_manager_link_manager_id_fkey"
            columns: ["manager_id"]
            isOneToOne: false
            referencedRelation: "supplier_manager"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "branch_supplier_manager_link_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
        ]
      }
      branchs: {
        Row: {
          department_code: string
          id: number
          name: string
        }
        Insert: {
          department_code?: string
          id?: number
          name: string
        }
        Update: {
          department_code?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      medicine_inventory_transaction: {
        Row: {
          branch_id: number | null
          created_at: string | null
          id: number
          medicine_id: number | null
          quantity: number
          supplier_id: number | null
          transaction_date: string
          transaction_type: string
          updated_at: string | null
          updated_by: number | null
          user_id: number | null
        }
        Insert: {
          branch_id?: number | null
          created_at?: string | null
          id?: number
          medicine_id?: number | null
          quantity: number
          supplier_id?: number | null
          transaction_date: string
          transaction_type: string
          updated_at?: string | null
          updated_by?: number | null
          user_id?: number | null
        }
        Update: {
          branch_id?: number | null
          created_at?: string | null
          id?: number
          medicine_id?: number | null
          quantity?: number
          supplier_id?: number | null
          transaction_date?: string
          transaction_type?: string
          updated_at?: string | null
          updated_by?: number | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "medicine_inventory_transaction_branch_id_fkey"
            columns: ["branch_id"]
            isOneToOne: false
            referencedRelation: "branchs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "medicine_inventory_transaction_medicine_id_fkey"
            columns: ["medicine_id"]
            isOneToOne: false
            referencedRelation: "medicines"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "medicine_inventory_transaction_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "medicine_inventory_transaction_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "medicine_inventory_transaction_updated_by_fkey1"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "medicine_inventory_transaction_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      medicines: {
        Row: {
          category: string[] | null
          description: string | null
          hira_type: string[] | null
          id: number
          name: string
          packaging_unit: string | null
          quantity_per: number | null
        }
        Insert: {
          category?: string[] | null
          description?: string | null
          hira_type?: string[] | null
          id?: number
          name: string
          packaging_unit?: string | null
          quantity_per?: number | null
        }
        Update: {
          category?: string[] | null
          description?: string | null
          hira_type?: string[] | null
          id?: number
          name?: string
          packaging_unit?: string | null
          quantity_per?: number | null
        }
        Relationships: []
      }
      supplier_manager: {
        Row: {
          id: number
          name: string
          position: string
          supplier_id: number
          tel: string
        }
        Insert: {
          id?: number
          name: string
          position?: string
          supplier_id: number
          tel: string
        }
        Update: {
          id?: number
          name?: string
          position?: string
          supplier_id?: number
          tel?: string
        }
        Relationships: [
          {
            foreignKeyName: "supplier_manager_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
        ]
      }
      supplier_medicine_link: {
        Row: {
          employee_price: number | null
          medicine_id: number
          purchase_price: number
          quantity: number | null
          sale_price: number | null
          supplier_id: number
        }
        Insert: {
          employee_price?: number | null
          medicine_id: number
          purchase_price?: number
          quantity?: number | null
          sale_price?: number | null
          supplier_id: number
        }
        Update: {
          employee_price?: number | null
          medicine_id?: number
          purchase_price?: number
          quantity?: number | null
          sale_price?: number | null
          supplier_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "supplier_medicine_link2_medicine_id_fkey"
            columns: ["medicine_id"]
            isOneToOne: false
            referencedRelation: "medicines"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "supplier_medicine_link2_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
        ]
      }
      suppliers: {
        Row: {
          id: number
          name: string
          tel: string | null
        }
        Insert: {
          id?: number
          name: string
          tel?: string | null
        }
        Update: {
          id?: number
          name?: string
          tel?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          birth: string | null
          branchs_id: number | null
          id: number
          name: string
          position: string | null
          role: string[] | null
          tel: string | null
        }
        Insert: {
          birth?: string | null
          branchs_id?: number | null
          id?: number
          name: string
          position?: string | null
          role?: string[] | null
          tel?: string | null
        }
        Update: {
          birth?: string | null
          branchs_id?: number | null
          id?: number
          name?: string
          position?: string | null
          role?: string[] | null
          tel?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_branchs_id_fkey"
            columns: ["branchs_id"]
            isOneToOne: false
            referencedRelation: "branchs"
            referencedColumns: ["id"]
          },
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
      hospital_branch: "광명" | "건대" | "임학" | "마곡" | "송도" | "송도OS"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
