import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://lbmpkftnkwsgevsbkbxu.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_-Wx6ublE6921OvFX8MCvwQ_Szhf5kvC'; // Remplace par ta vraie clé anon

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Fonction globale pour récupérer le profil courant
export async function getCurrentUserProfile() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

    return profile;
}
