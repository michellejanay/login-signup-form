<script>
  export let linkHref = "";
  export let linkText = "";
</script>

{#if linkText === "Back"}
  <a href={linkHref}>{`←${linkText}`}</a>
{:else}<a href={linkHref}>{linkText}</a>{/if}

<style>
  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 1.2em;
  }
</style>
