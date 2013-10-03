function get_menu_definition() {
	return [
	{ title: "Documentation", children: [
	 	{ code: "contrib", title: "Contributing", closed: true, url: "documentation/contributing/index.html", children: [
		 	{ title: "Hack", url: "documentation/contributing/code.html" },
			{ code: "docs", title: "Document", closed: true, children: [
				{ title: "Setting up Jekyll on Windows", url: "documentation/contributing/windows.html" },
				{ title: "Setting up Jekyll on Linux", url: "documentation/contributing/linux.html" }
			]},
		]},
		{ code: "install", title: "Installing", closed: true, children: [
			{ title: "Windows", url: "documentation/installing/windows.html" },
			{ title: "MacOSX", url: "documentation/installing/macosx.html" }
		]},
	]},
	{ title: "About", url: "documentation/about.html" }
	];
}
