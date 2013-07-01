function get_menu_definition() {
	return [
	{ title: "Documentation", children: [
	 	{ title: "Contributing", url: "documentation/contributing/index.html", children: [
		 	{ title: "Hack", url: "documentation/contributing/code.html" },
			{ title: "Document", children: [
				{ title: "Setting up Jekyll on Windows", url: "documentation/contributing/windows.html" },
				{ title: "Setting up Jekyll on Linux", url: "documentation/contributing/linux.html" },
				{ title: "Setting up Jekyll on Mac OS X", url: "documentation/contributing/macosx.html" }
			]},
		]},
		{ title: "Installing", children: [
			{ title: "Windows", url: "documentation/installing/windows.html" },
			{ title: "MacOSX", url: "documentation/installing/macosx.html" }
		]},
	]},
	{ title: "About", url: "documentation/about.html" }
	];
}
