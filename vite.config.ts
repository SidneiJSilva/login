import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		federation({
			name: "loginApp",
			filename: "remoteEntry.js",
			exposes: {
				"./App": "./src/App.tsx",
			},
			shared: ["react", "react-dom", "react-router-dom"],
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	build: {
		target: "esnext",
		minify: false,
		cssCodeSplit: false,
	},
	preview: {
		port: 4173,
		strictPort: true,
	},
});
