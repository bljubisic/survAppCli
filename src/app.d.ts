// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import md from 'md.js';
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		const text = "How old are you?\n? age_group\n - 0-18\n - 19-35\n - 36-55\n - 56 or older";
		const body = md(text);
		console.log(body);
	}
}

export {};
