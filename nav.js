import { supabase, getCurrentUserProfile } from './supabase.js';

async function initNavbar() {
    const profile = await getCurrentUserProfile();
    const navContainer = document.querySelector('.forum-nav');

    if (!navContainer) return;

    if (profile) {
        // Enregistrer en mémoire locale pour accès rapide
        localStorage.setItem('forumUsername', profile.username);
        localStorage.setItem('forumUserRole', profile.role || 'user');

        // Badge selon le rôle
        let roleBadge = '';
        if (profile.role === 'admin') roleBadge = ' 🔴 [Admin]';
        else if (profile.role === 'moderator') roleBadge = ' 🟢 [Modo]';
        else if (profile.role === 'vip') roleBadge = ' ⭐ [VIP]';

        navContainer.innerHTML = `
            <a href="index.html" class="nav-link">Index</a>
            <a href="community.html" class="nav-link">Fiches & Critiques</a>
            <a href="contest-view.html" class="nav-link">Concours Dessin</a>
            <a href="profile.html?user=${encodeURIComponent(profile.username)}" class="nav-link">Mon Profil (${profile.username}${roleBadge})</a>
            <a href="#" id="btn-logout" class="nav-link" style="color: #d9534f;">Déconnexion</a>
            <a href="#" class="nav-link">FAQ</a>
        `;

        document.getElementById('btn-logout').addEventListener('click', async (e) => {
            e.preventDefault();
            await supabase.auth.signOut();
            localStorage.removeItem('forumUsername');
            localStorage.removeItem('forumUserRole');
            alert("Vous êtes déconnecté.");
            window.location.href = "index.html";
        });
    } else {
        localStorage.removeItem('forumUsername');
        localStorage.removeItem('forumUserRole');

        navContainer.innerHTML = `
            <a href="index.html" class="nav-link">Index</a>
            <a href="community.html" class="nav-link">Fiches & Critiques</a>
            <a href="contest-view.html" class="nav-link">Concours Dessin</a>
            <a href="register.html" class="nav-link highlight">S'enregistrer / Connexion</a>
            <a href="#" class="nav-link">FAQ</a>
        `;
    }
}

document.addEventListener('DOMContentLoaded', initNavbar);
