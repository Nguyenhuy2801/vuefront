import VfALink from "./link.vue.mjs"; // More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
  title: "atom/link",
  component: VfALink,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {}
}; // More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args

const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VfALink
  },

  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args
    };
  },

  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<vf-a-link v-bind="args">Link</vf-a-link>`
});

export const Default = Template.bind({}); // More on args: https://storybook.js.org/docs/vue/writing-stories/args

Default.args = {
  to: "/home"
};
//# sourceMappingURL=link.stories.mjs.map