import JSONAPIAdapter from "@ember-data/adapter/json-api";

export default JSONAPIAdapter.extend({
  headers: {
    "Content-Type": "application/hal+json",
  },
});
