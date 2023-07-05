<template>
    <div>
      <div class="spinner">
        <div class="bounce1" :style="bubbleCSS"></div>
        <div class="bounce2" :style="bubbleCSS"></div>
        <div class="bounce3" :style="bubbleCSS"></div>
      </div>
      <p class="text" v-if="text">Loading</p>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'loading',
    props: {
      color: {
        type: String,
        default: '#fff',
      },
      text: {
        type: Boolean,
        default: false,
      },
      size: {
        type: Number,
        default: 18,
      },
      padding: {
        type: Number,
        default: 2,
      },
    },
    computed: {
      bubbleSize(): string {
        if (this.size !== 18) {
          const height = `height: ${this.size}px;`;
          const width = `width: ${this.size}px;`;
          return height + width;
        }
        return '';
      },
      bubblePadding(): string {
        if (this.padding !== 2) {
          return `margin: ${this.padding}px;`;
        }
        return '';
      },
      bubbleColor(): string {
        if (this.color !== '#fff') {
          return `background-color: ${this.color};`;
        }
        return '';
      },
      bubbleCSS(): string {
        // var vue = this;
        return this.bubbleColor + this.bubbleSize + this.bubblePadding;
      },
    },
  };
  </script>
  
  <style scoped>
 
  .spinner {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-content: center;
  
    > div {
      width: 18px;
      height: 18px;
      background-color: #0075EB;
      margin: 2px;
      flex-shrink: 0;
  
      border-radius: 100%;
      display: inline-block;
      -webkit-animation: sk-bouncedelay 1.2s infinite ease-in-out both;
      animation: sk-bouncedelay 1.2s infinite ease-in-out both;
    }
    > .bounce1 {
      -webkit-animation-delay: -0.32s;
      animation-delay: -0.32s;
    }
    > .bounce2 {
      -webkit-animation-delay: -0.16s;
      animation-delay: -0.16s;
    }
  }
  
  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0.5);
    }
    40% {
      -webkit-transform: scale(0.8);
    }
  }
  
  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    40% {
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
    }
  }
  
  .text {
    text-align: center;
    padding-bottom: 0;
    margin: 14px auto 0;
  }
  </style>
  