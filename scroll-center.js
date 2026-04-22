document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const searchInput = document.getElementById('site-filter');
    const filterStatus = document.getElementById('filter-status');
    const filterItems = document.querySelectorAll('.filterable > *');

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            if (mainNav && mainNav.classList.contains('is-open')) {
                mainNav.classList.remove('is-open');
                menuToggle?.setAttribute('aria-expanded', 'false');
            }
        });
    });

    menuToggle?.addEventListener('click', () => {
        if (!mainNav) return;
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', String(!expanded));
        mainNav.classList.toggle('is-open');
    });

    searchInput?.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();
        let visibleCount = 0;

        filterItems.forEach(item => {
            const searchableText = `${item.textContent || ''} ${item.getAttribute('data-keywords') || ''}`.toLowerCase();
            const isMatch = query === '' || searchableText.includes(query);
            item.classList.toggle('is-hidden', !isMatch);
            if (isMatch) visibleCount += 1;
        });

        if (!filterStatus) return;

        if (query === '') {
            filterStatus.textContent = 'Menampilkan semua item.';
        } else {
            filterStatus.textContent = `Menampilkan ${visibleCount} hasil untuk "${query}".`;
        }
    });
});
