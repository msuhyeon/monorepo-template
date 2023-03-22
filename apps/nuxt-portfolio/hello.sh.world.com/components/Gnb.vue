<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/#home" @click="$emit('clickGnb', false)">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/#about" @click="$emit('clickGnb', false)"
          >About</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/#work" @click="$emit('clickGnb', false)"
          >Experience</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/#projects" @click="$emit('clickGnb', false)"
          >Projects</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/#contact" @click="$emit('clickGnb', false)"
          >Contact</NuxtLink
        >
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
  justify-content: end;
  height: 100%;

  ul {
    padding: 0 5rem;
    display: flex;
    gap: 3rem;

    li {
      a {
        color: #fff;
        font-size: 1.2rem;
      }
    }
  }
}
</style>
