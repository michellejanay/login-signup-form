<script lang="ts">
  import type { ActionData } from "./$types";
  import Link from "$lib/Link/+page.svelte";
  import FormInput from "$lib/FormInput/+page.svelte";
  import Button from "$lib/Button/+page.svelte";
  export let form: ActionData;
</script>

<Link linkHref="../" linkText="Back" />
<br /><br />
<form action="?/login" method="POST">
  <fieldset>
    <legend>Login</legend>
    <FormInput
      type="email"
      title="email"
      inputName="email"
      placeholder="hello@helloworld.com"
    />
    <FormInput
      type="password"
      title="password"
      inputName="password"
      placeholder="****"
    />
  </fieldset>
  <Button buttonText="Login" classname="submit" />
</form>
{#if form?.invalid}
  <p>Username and password required</p>
  <a href="/create-account">Create account</a>
{/if}

{#if form?.credentials}
  <p>Wrong credentials</p>
  <a href="/create-account">Create account</a>
{/if}
<br /><br />
<Link linkHref="#" linkText="Forgot Password?" />
