document.addEventListener('DOMContentLoaded', () => {
	const root = document.documentElement;
	const btn = document.getElementById('theme-switch');

	// Default: dark mode
	if (!localStorage.theme) {
		localStorage.theme = 'dark';
	}

	// Apply saved preference
	if (localStorage.theme === 'dark') {
		root.classList.add('dark');
	} else {
		root.classList.remove('dark');
	}

	// Toggle on click
	btn.addEventListener('click', () => {
		if (root.classList.contains('dark')) {
			root.classList.remove('dark');
			localStorage.theme = 'light';
		} else {
			root.classList.add('dark');
			localStorage.theme = 'dark';
		}
	});
});
