<template>
  <div :class="keyboardClass" ></div>
</template>

<script>
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";

export default {
  name: "SimpleKeyboard",
  props: {
    keyboardClass: {
      default: "simple-keyboard",
      type: String
    },
    input: {
      type: String
    }
  },
  data: () => ({
    keyboard: null
  }),
  mounted() {
    this.keyboard = new Keyboard(this.keyboardClass, {
      onChange: this.onChange,
      onKeyPress: this.onKeyPress,
      theme: 'hg-theme-default dark-mode-theme',
      layout: {
        'default': [
          '▼ q w e r t y u i o p {bksp}',
          'Cancel a s d f g h j k l ',
          '{shift} z x c v b n m Submit',
          '{space}'
        ],
        'shift': [
          '▼ Q W E R T Y U I O P {bksp}',
          'Cancel A S D F G H J K L ',
          '{shift} Z X C V B N M Submit',
          '{space}'
        ]
      },
      maxLength: 80,
      physicalKeyboardHighlight: true,
      useMouseEvents: true,
      display: {
        '{enter}': 'Enter',
        '{shift}': 'Shift',
        '{bksp}': 'Backspace',
        '{space}': 'Spacebar'
      }
    });
  },
  methods: {
    onChange(input) {
      this.$emit("onChange", input);
    },
    onKeyPress(button) {
      this.$emit("onKeyPress", button);
      if (button === "{shift}" || button === "{lock}") this.handleShift();
    },
    handleShift() {
      let currentLayout = this.keyboard.options.layoutName;
      let shiftToggle = currentLayout === "default" ? "shift" : "default";

      this.keyboard.setOptions({
        layoutName: shiftToggle
      });
    }
  },
  watch: {
    input(input) {
      this.keyboard.setInput(input);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
