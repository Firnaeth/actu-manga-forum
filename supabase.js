import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Configuration Supabase
const SUPABASE_URL = 'https://lbmpkftnkwsgevsbkbxu.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_-Wx6ublE6921OvFX8MCvwQ_Szhf5kvC'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
