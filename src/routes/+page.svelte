<script>
  import Button from "../lib/Button/+page.svelte";
</script>

<main class="flex-container">
  <Button
    buttonText="Login"
    buttonLink="/login"
    classname="btn btn-primary active"
  />
  <Button
    buttonText="Create an account"
    buttonLink="create-account"
    classname="btn btn-secondary active"
  />
</main>
