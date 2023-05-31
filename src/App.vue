<script setup>
  import { useRouter } from 'vue-router'
  const routes = useRouter().getRoutes().filter(route => route.meta.showInNav === true)
</script>
<template>
  <header>
    <nav>
      <router-link v-for="(route, index) in routes"
        :key="index"
        :to="route.path"> {{ route.meta.title }}</router-link>
    </nav>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <section>
      <h5>Контакты</h5>
      <span>Адрес: г.Барановичи, ул.Советская д.165А</span>
      <span>Время работы: пн-пт: 8.00-20.00 сб-вс: 9.00-21.00</span>
    </section>
    <section>
      <h5>Телефоны</h5>
      <span>+375 29 645 55 84</span>
      <span>+375 33 458 45 46</span>
    </section>
    <section>
      <h5>Социальные сети</h5>
      <span>
        <a href="https://www.instagram.com/akcent_studio_borovki/"><img src="../src/img/instagram.png"></a>
        <a href="viber://chat?number=%2B375296455584"><img src="../src/img/viber.png"></a>
      </span>
    </section>
  </footer>
</template>
<style lang="sass">
@font-face 
  font-family: 'Montserrat Alternates'
  src: url(assets/fonts/montserrat-alternates-regular.woff2)
*
  font-family: 'Montserrat Alternates'
  margin: 0px
  padding: 0px
body
  display: grid
  background: #c372fc
  grid-template-columns: 50px auto
  grid-template-rows: 50px auto 150px
  grid-template-areas: "header header header" "main main main" "footer footer footer"
header
  grid-area: header
  display: grid
  align-items: stretch
  nav
    display: flex
    flex-wrap: no-wrap
    justify-content: space-evenly
    align-items: center
    a
      text-transform: uppercase
      color: #310054
      text-decoration: none
      font-size: 20px
      &:hover, &:focus
        color: #9300fc
footer
  grid-area: footer
main
  grid-area: main
footer, section
  color: #310054
  line-height: 1rem
  display: flex
  min-width: 100px
  padding: 1em
  flex-wrap: wrap
  flex-direction: row
  justify-content: space-evenly
  section
    flex-direction: column
    h5
      font-size: 18px
      text-transform: uppercase
    img
      height: 50px
@media(max-width: 600px)
  footer
    justify-content: flex-start
</style>