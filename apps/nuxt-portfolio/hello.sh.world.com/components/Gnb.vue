<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="#home">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="#about">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="#work">Experience</NuxtLink>
      </li>
      <li>
        <NuxtLink to="#projects">Projects</NuxtLink>
      </li>
      <li>
        <NuxtLink to="#contact">Contact</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {};
</script>
<style lang="scss">
nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;

  ul {
    padding: 0 5rem;
    display: flex;
    gap: 3rem;

    li {
      a {
        color: #fff;
        font-size: 2rem;
      }
    }
  }
}
</style>
