import { supabase } from "./supabase";

export const getProduct = async () => {
const { data } = await supabase.from("products").select();
console.log(data)
}

