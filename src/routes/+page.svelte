<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<script>
  import md from '../md.js';

		const text = "How old are you?\n ? age_group\n - 0-18\n - 19-35\n - 36-55\n - 56 or older";
		const body = md(text);
		console.log(body);
</script>
