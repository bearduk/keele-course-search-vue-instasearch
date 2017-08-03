<template>
  <ais-index
    app-id="HT7VYJG3KU"
    api-key="d37bbf3291b226676c9f3f1937e865d3"
    index-name="dev_COURSES"
           :query-parameters="{
             attributesToSnippet: [
             'snippet:26'],
             'snippetEllipsisText': '...'
           }"
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
<div class="refinement_needs_bem">
    <ais-refinement-list attribute-name="courseLevel" :sort-by="['count:desc']"> <!-- using count here as this means we'll have UG first, PGT second then PGR due to the amount of courses we have -->
    <!-- <p slot="header">Header if we need to hide the entire block at some point i.e. no results, hide header as well</p> -->
    <p slot="header">Level of Study</p>
    </ais-refinement-list>

    <ais-clear :clears-query="false">
      <span class="ais-clear__label">Clear filter</span>
      <!-- cb try and hide if nothing selected? v-show or just use css class for display none -->
    </ais-clear>

  </div>


    <ais-stats></ais-stats>

    Results per page: <ais-results-per-page-selector :options="[5, 10, 20, 50, 100]"></ais-results-per-page-selector>

    <ais-results :results-per-page="20"> <!-- cb setting manually for now, just remove this for default -->
      <template scope="{ result }">
        <!-- <header><hr /></header> --> <!-- cb slot if needed -->
        <p>
          <a :href="result.urlPath">
            <ais-highlight :result="result" attribute-name="courseTitle"></ais-highlight>
          </a> <span class="result_divide_needs_bem">|</span> 
          <span>{{result.courseLevel}}</span>
          <!-- <p>{{result.urlPath}}</p> -->
        </p>        
        <!-- <footer><hr /></footer> --> <!-- cb slot if needed -->
        <ais-snippet :result="result" attribute-name="snippet"></ais-snippet>
        <!-- note that attribute-name snippet is the json 'snippet' -->
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
body {
  background: #FFFFFF;
}
.ais-clear--disabled {
  display: none; /* cb hides the clear button if no course level is selected */
}

.result_divide_needs_bem {
  color: maroon;
  font-weight: bold;
}

/* refinement block */
.refinement_needs_bem {
  background-color: #e0e0e0;
  width: 20%;
  padding: 5px 20px 20px 20px;
  border-radius: 5px;
}


/* refinement list */

.ais-refinement-list__item {
  margin-bottom: 5px;
}

label {
    cursor: pointer;
}

.ais-refinement-list__item label {
  display: flex;
  align-items: center;
  width: 200px;
}

.ais-refinement-list__item input {
  margin-right: 12px;
}

.ais-refinement-list__value {
  color: #808A96;
  text-transform: uppercase;
  flex-grow: 1;
}
.ais-refinement-list__count {
    margin-left: auto;
    background-color: black;
    color: #fff;
    align-items: center;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-weight: bold;
    font-size: 12px;
    height: 24px;
    justify-content: center;
    line-height: 16px;
    padding-left: 10px;
    padding-right: 10px;
    white-space: nowrap;
    border-radius: 20%;
    vertical-align: top;
}
</style>