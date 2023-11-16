<script>
  export let buttonText = "";
  export let buttonLink = "";
  export let classname = "";
</script>

<a href={buttonLink} class={classname}>{buttonText}</a>

{#if classname === "submit"}
  <button type="submit" class={`btn btn-primary font-style ${classname}`}
    >{buttonText}</button
  >
{/if}

<style>
  .btn {
    display: flex;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    background-color: white;
    text-decoration: none;
    color: var(--bg-900);
    width: 100%;
  }
  .btn-primary {
    background-color: var(--teal);
  }
  .btn-primary:hover {
    background-color: var(--teal-hover);
  }
  .btn-secondary {
    border: solid 4px var(--teal);
  }
  .btn-secondary:hover {
    border: solid 4px var(--teal-hover);
  }
  .submit {
    border: none;
  }
</style>
