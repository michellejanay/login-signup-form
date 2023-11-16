<script>
  export let type = "";
  export let title = "";
  export let placeholder = "";
  export let classname = "";
  export let error = "";
  export let inputName = "";

  const titleUppercase = title[0].toUpperCase() + title.slice(1, title.length);
</script>

<section>
  <label for={title}>{titleUppercase}</label>
  <input
    {type}
    {placeholder}
    id={title}
    name={inputName}
    class={`${classname} active`}
    required
  />
  <p>{error}</p>
</section>

<style>
  section {
    display: grid;
  }
  input {
    padding: 1em 0.8em;
  }
</style>
