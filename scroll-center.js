document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    // FIXED: Changed '.content-search' to '.search-toggle' to match your HTML
    const searchToggle = document.querySelector('.search-toggle');
    const menuToggle = document.querySelector('.menu-toggle');
    const searchDrawer = document.getElementById('search-drawer');
    const mainNav = document.querySelector('.main-nav');
    const searchInput = document.getElementById('site-filter');
    const filterStatus = document.getElementById('filter-status');
    const filterItems = document.querySelectorAll('.filterable > *');
    const allItemsStatus = filterStatus?.dataset.statusAll || 'Menampilkan semua item.';
    const resultsStatusTemplate = filterStatus?.dataset.statusResults || 'Menampilkan {count} hasil untuk "{query}".';

    const closeDrawer = (button, drawer) => {
        button?.setAttribute('aria-expanded', 'false');
        drawer?.classList.remove('is-open');
    };

    const toggleDrawer = (button, drawer, otherButton, otherDrawer) => {
        if (!button || !drawer) return;

        const willOpen = button.getAttribute('aria-expanded') !== 'true';
        closeDrawer(otherButton, otherDrawer);
        button.setAttribute('aria-expanded', String(willOpen));
        drawer.classList.toggle('is-open', willOpen);
    };

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

            closeDrawer(menuToggle, mainNav);
        });
    });

    searchToggle?.addEventListener('click', () => {
        toggleDrawer(searchToggle, searchDrawer, menuToggle, mainNav);

        if (searchToggle.getAttribute('aria-expanded') === 'true') {
            searchInput?.focus();
        }
    });

    menuToggle?.addEventListener('click', () => {
        toggleDrawer(menuToggle, mainNav, searchToggle, searchDrawer);
    });

    document.addEventListener('keydown', event => {
        if (event.key !== 'Escape') return;

        closeDrawer(searchToggle, searchDrawer);
        closeDrawer(menuToggle, mainNav);
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
            filterStatus.textContent = allItemsStatus;
        } else {
            filterStatus.textContent = resultsStatusTemplate
                .replace('{count}', String(visibleCount))
                .replace('{query}', query);
        }
    });
});
