const config = {
	BASE_URL: import.meta.env.VITE_PUBLIC_BASE_URL ?? window.location.origin,

	PROD_ENV: import.meta.env.PROD,

	APP_NAME: "GPF",

	//Auth0
	AUTH0_CLIENT_ID: import.meta.env.VITE_PUBLIC_AUTH0_CLIENT_ID,
	AUTH0_CLIENT_SECRET: import.meta.env.VITE_PUBLIC_AUTH0_CLIENT_SECRET,
	AUTH0_DOMAIN: import.meta.env.VITE_PUBLIC_AUTH0_DOMAIN,
};

export default config;
