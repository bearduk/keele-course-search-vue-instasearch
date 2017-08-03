<template>
  <ais-index
    app-id="HT7VYJG3KU"
    api-key="d37bbf3291b226676c9f3f1937e865d3"
    index-name="dev_COURSES"
  >
    <ais-search-box></ais-search-box>
    <ais-results>
      <template scope="{ result }">
        <h2>
          <ais-highlight :result="result" attribute-name="courseTitle"></ais-highlight>
        </h2>
      </template>
    </ais-results>
  </ais-index>
</template>


<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }

// h1, h2 {
//   font-weight: normal;
// }

// ul {
//   list-style-type: none;
//   padding: 0;
// }

// li {
//   display: inline-block;
//   margin: 0 10px;
// }

// a {
//   color: #42b983;
// }
</style>
