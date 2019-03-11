<template>
  <div id="list">
    <span>{{name}}</span>
  </div>
</template>

<script>
export default {
  name: "list",
  props: {
    name
  }
};
</script>

<style>
#list {
  display: flex;
  flex-direction: column;
  border: 1px solid lemonchiffon;
}
</style>
