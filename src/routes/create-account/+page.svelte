<script lang="ts">
  import type { ActionData } from "./$types";
  import FormInput from "$lib/FormInput/+page.svelte";
  import Button from "$lib/Button/+page.svelte";
  import Link from "$lib/Link/+page.svelte";

  export let form: ActionData;
</script>

<Link linkHref="../" linkText="Back" /><br /><br />
<form action="?/createAccount" method="POST">
  <fieldset>
    <legend>Create an account</legend>
    <FormInput
      type="text"
      title="name"
      inputName="usersName"
      placeholder="Luke Skywalker"
    />
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
  <!-- <FormInput
    type="password"
    title="re-password"
    name="re-password"
    placeholder="****"
  /> -->
  <div>
    <Button buttonText="Create an account" classname="submit" />
  </div>
</form>

{#if form?.email}
  <p>That email already exists, <a href="/login"> Go to Login</a></p>
{/if}

<style>
  div {
    display: grid;
    margin-top: 2em;
  }
</style>
