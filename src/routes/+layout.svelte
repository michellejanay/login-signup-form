<script>
  import "../app.css";
</script>

<main class="app-container font-style">
  <div class="welcome-container">
    <div>
      <div class="fancy-text">
        <h1 class="welcome-text cyan">Welcome</h1>

        <h1 class="welcome-text magenta">Welcome</h1>
        <h1 class="welcome-text">Welcome</h1>
      </div>
      <div class="slot-container">
        <slot />
      </div>
    </div>
  </div>
</main>

<style>
  .welcome-container {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 100vw;
  }
</style>
