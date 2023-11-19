// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import md from "../md.js";

/** @type {import('./$types').PageLoad} */
export async function load({params}) {
  const text = "## Hi! Please pick a number.\n  (We shuffle them *every time*)\n\n?mynumber shuffle\n- 1337\n- [42](https://www.google.com/search?q=42)\n- 7±2";
  const survey = await md(text);
  console.log(survey);
	return {
		post: {
			title: `Title goes here`,
			content: survey,
		}
	};
}