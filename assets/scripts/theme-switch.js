document.addEventListener('DOMContentLoaded', () => {
	const root = document.documentElement;
	const btn = document.getElementById('theme-switch');

	// Default: dark mode
	if (!localStorage.theme) {
		localStorage.theme = 'dark';
	}

	// Apply saved preference
	if (localStorage.theme === 'dark') {
		root.classList.remove('light');
	} else {
		root.classList.add('light');
	}

	// Toggle on click
	btn.addEventListener('click', () => {
		if (root.classList.contains('light')) {
			root.classList.remove('light');
			localStorage.theme = 'dark';
		} else {
			root.classList.add('light');
			localStorage.theme = 'light';
		}
	});
});
