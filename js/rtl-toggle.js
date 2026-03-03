document.addEventListener('DOMContentLoaded', () => {
    const rtlToggleBtn = document.getElementById('rtl-toggle');
    const htmlElement = document.documentElement;

    // Check local storage for saved direction
    const savedDir = localStorage.getItem('dir') || 'ltr';
    htmlElement.setAttribute('dir', savedDir);

    if (rtlToggleBtn) {
        rtlToggleBtn.addEventListener('click', () => {
            const currentDir = htmlElement.getAttribute('dir');
            const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';

            htmlElement.setAttribute('dir', newDir);
            localStorage.setItem('dir', newDir);

            // Update button icon/text
            updateBtnContent(rtlToggleBtn, newDir);
        });

        // Initial button text
        updateBtnContent(rtlToggleBtn, savedDir);
    }

    function updateBtnContent(btn, dir) {
        if (dir === 'rtl') {
            btn.innerHTML = `<span class="flex items-center gap-1 text-sm font-medium"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12H3"></path><path d="m14 5 7 7-7 7"></path></svg> EN</span>`;
        } else {
            btn.innerHTML = `<span class="flex items-center gap-1 text-sm font-medium">AR <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18"></path><path d="m10 19-7-7 7-7"></path></svg></span>`;
        }
    }
});
