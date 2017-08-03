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

    <ais-refinement-list attribute-name="courseLevel" :sort-by="['count:desc']"> <!-- using count here as this means we'll have UG first, PGT second then PGR due to the amount of courses we have -->
    <!-- <p slot="header">Header if we need to hide the entire block at some point i.e. no results, hide header as well</p> -->
    </ais-refinement-list>

    <ais-clear :clears-query="false">
      <span class="ais-clear__label">Clear filter</span>
      <!-- cb try and hide if nothing selected? v-show or just use css class for display none -->
    </ais-clear>

    <ais-stats></ais-stats>

    Results per page: <ais-results-per-page-selector :options="[5, 10, 20, 50, 100]"></ais-results-per-page-selector>

    <ais-results :results-per-page="20"> <!-- cb setting manually for now, just remove this for default -->
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
    <ais-pagination :padding="5">
<!--     <span slot="previous">previous</span>
    <span slot="next">next</span> -->
    </ais-pagination>
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

<style lang="scss">
.ais-clear--disabled {
  display: none; /* cb hides the clear button if no course level is selected */
}
</style>