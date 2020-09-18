// module.exports =
// {
//     apps:
//     [
//         {
//             name: "cryptos",
//             script: "node_modules/nuxt-start/bin/nuxt-start.js",
//             cwd: "/.nuxt",
//             args: "start -p 3001 -H 0.0.0.0"
//         }
//     ]
// }

module.exports = {
	apps: [
		{
			name: "nuxt-app",
			script: "npm",
			args: "start",
			port: 3000,
			instances: "max",
			exec_mode: "cluster",
			env: {
				NODE_ENV: "development"
			},
			env_production: {
				NODE_ENV: "production"
			}
		}
	]
};
