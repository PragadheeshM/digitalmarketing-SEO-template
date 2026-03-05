document.addEventListener('DOMContentLoaded', () => {
    // Select all RTL toggle buttons (by class or the old ID)
    const rtlToggleBtns = document.querySelectorAll('#rtl-toggle, .rtl-toggle');
    const htmlElement = document.documentElement;

    // Restore saved direction from localStorage
    const savedDir = localStorage.getItem('nexus-dir') || 'ltr';
    htmlElement.setAttribute('dir', savedDir);

    const globeSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>`;

    function updateBtnContent(dir) {
        if (!rtlToggleBtns.length) return;
        const nextLabel = dir === 'rtl' ? 'LTR' : 'RTL';

        rtlToggleBtns.forEach(btn => {
            btn.title = `Switch to ${nextLabel}`;
            btn.innerHTML = globeSVG;
        });
    }

    // Set initial icon state
    updateBtnContent(savedDir);

    rtlToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentDir = htmlElement.getAttribute('dir') || 'ltr';
            const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
            htmlElement.setAttribute('dir', newDir);
            localStorage.setItem('nexus-dir', newDir);
            updateBtnContent(newDir);
        });
    });
});
