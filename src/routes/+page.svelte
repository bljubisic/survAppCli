<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<script>
  
// // @ts-nocheck

  import SurveyNode from "../components/SurveyNode.svelte";
//   import { createFunction } from "../components/expressions";

//   import md from '../md.js';

// 		const text = "How old are you?\n ? age_group\n - 0-18\n - 19-35\n - 36-55\n - 56 or older";
   
// 		let survey;
//     const pageIndex = 0;
    export const pageIndex = 0;
    /** @type {import('./$types').PageData} */
    export let data;

    const chars =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    function uid() {
      let id = "";
      let size = 16;
      while (size--) id += chars[(Math.random() * 62) | 0];
      return id;
    }

    function next() {

    }

    let context = {
      uid: uid(),
      started_at: new Date()
        .toISOString()
        .substring(0, 19)
        .replace("T", " ")
    };


</script>

<h1>{data.post.title}</h1>

<div class="viewport typo">
  {#each data.post.content as page, i}
    {#if i === pageIndex}
      <div
        class="view">
        <div class="view-body">
          {#each page.children as node}
            <SurveyNode {node} bind:context {next} />
          {/each}
        </div>
      </div>
    {/if}
  {/each}
</div>
