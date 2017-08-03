<template>
  <ais-index
    app-id="HT7VYJG3KU"
    api-key="d37bbf3291b226676c9f3f1937e865d3"
    index-name="dev_COURSES"
  >
  <ais-input placeholder="inline placeholder"></ais-input>

    <ais-search-box placeholder="no bind on placeholder text" :autofocus="true">
    </ais-search-box>

    <!-- cb overriding default content for no results found -->
    <ais-no-results>
      <template scope="props">
      No courses found for <i>{{ props.query }}</i>.
      </template>
    </ais-no-results>

    <ais-refinement-list attribute-name="courseLevel">
    <!-- <p slot="header">Header if we need to hide the entire block at some point i.e. no results, hide header as well</p> -->
    </ais-refinement-list>


    <ais-results :results-per-page="5"> <!-- cb setting manually for now, just remove this for default -->
      <template scope="{ result }">
        <!-- <header><hr /></header> --> <!-- cb slot if needed -->
        <p>
          <a :href="result.urlPath">
            <ais-highlight :result="result" attribute-name="courseTitle"></ais-highlight>
          </a>
          <span>{{result.courseLevel}}</span>
        </p>        
        <!-- <footer><hr /></footer> --> <!-- cb slot if needed -->
      </template>

    </ais-results>
    <ais-pagination></ais-pagination>
  </ais-index>
</template>


<script>
export default {
  name: 'app'
  // data() {
  //   return {
  //     sbplaceholder: 'chris bind placeholder',
  //     somethingelse: ''
  //   }
  // }
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
