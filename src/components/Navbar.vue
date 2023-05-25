<template>
  <div id="navbar">
    <nav>
      <RouterLink to="/" id="logo">
          <img src="../assets/images/logo.png" alt="" />
      </RouterLink>

      <div id="title
        ">
        <p> DIRPF - Perguntas e Respostas</p>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
<style scooped>
a{
  margin: 0;
  padding: 0;
}
#navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0;
  margin: 0;
  width: 100%;
}

nav {
  display: flex;
}

#logo {
  align-self: center;
}

#logo img {
  margin-left: 1rem;
  width: 115px;
  height: 2rem;
}

#navbar p {
  position: relative;
  margin-left: 24px;
  display: flex;
  justify-content: space-between;
  color: #383838;
  font-size: 19px !important;
  font-weight: 600 !important;
  padding-left: 1.5rem;
  border-left: 1px solid #525252;
}
</style>