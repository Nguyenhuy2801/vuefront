import VfMMenu from "./menu.vue.mjs";
import "./menu.scss.mjs";
import { getMenuLink } from "../../../utils/fakeData.mjs"; // More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
  title: "molecule/menu",
  component: VfMMenu,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {}
}; // More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args

const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VfMMenu
  },

  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args
    };
  },

  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<vf-m-menu v-bind="args"/>'
});

export const Default = Template.bind({}); // More on args: https://storybook.js.org/docs/vue/writing-stories/args

Default.args = {
  items: [getMenuLink(), getMenuLink(), getMenuLink(), getMenuLink(), getMenuLink(), getMenuLink()]
};
//# sourceMappingURL=menu.stories.mjs.map