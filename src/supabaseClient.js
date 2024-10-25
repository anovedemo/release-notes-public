import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

console.log('Supabase URL:', supabaseUrl); // Log URL
console.log('Supabase Key:', supabaseKey); // Log Key

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL and anon key must be defined');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
