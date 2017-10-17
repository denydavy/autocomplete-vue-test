<template>
  <div class="wrapper">
      <input id="autocompleter"
             placeholder="Enter search text"
             v-model="message"
             @input="onInput($event.target.value)"
             @keyup.esc="isOpen = false"
             @blur="isOpen = false"
             @focus="showAll"
             @keydown.down="moveDown"
             @keydown.up="moveUp"
             @keydown.enter="select"/>
      <ul class="opts" v-show="isOpen">
        <li v-for="(option, index) in filterOpts"
            :class="{
          'highlighted' : index === highlightedPosition}"
            @mouseenter="highlightedPosition = index"
            @mousedown="select">
          <slot name="item"
                :first_name="option.first_name"
                :last_name="option.last_name"></slot>
        </li>
      </ul>
  </div>

</template>

<script>
  export default {
    name: 'AutoComplete',
    props: {
      options: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        isOpen: true,
        highlightedPosition: 0,
        message: ''
      }
    },
    computed: {
      filterOpts () {
        return this.message !== '' ? parseInt(this.message) ? this.options.filter(o => o.id == parseInt(this.message)) : this.options.filter(o => o.first_name.toLowerCase().match(this.message.toLowerCase())) : this.options;
      }
    },
    methods: {
      onInput (value) {
        this.highlightedPosition = 0;
      },
      moveDown () {
        if (!this.isOpen) {
          return
        }
        this.highlightedPosition =
          this.highlightedPosition + 1 >  this.filterOpts.length
          ? 0 : this.highlightedPosition + 1;
      },
      moveUp () {
        if (!this.isOpen) {
          return
        }
        this.highlightedPosition = this.highlightedPosition - 1 < 0
          ? this.filterOpts.length - 1
          : this.highlightedPosition - 1
      },
      select () {
        const selectedOption = this.filterOpts[this.highlightedPosition]
        this.message = selectedOption.id;
        this.isOpen = false;
        this.$emit('select', selectedOption)
      },
      showAll() {
        this.isOpen = true;
        return this.filterOpts;
      }
    }
  }
</script>

<style scoped>
.wrapper input {
  width: calc(100% - 40px);
  font-size: 25px;
  height: 50px;
  margin: 0 auto;
  line-height: 22px;
  color: #333;
  border:none;
  border-bottom: 1px solid darkgrey;
}

ul{
  width: calc(100% - 40px);
  margin: 0 auto 0 auto;
  padding:0;
  list-style-type: none;
  border: 1px solid #cecece;
  box-shadow: 0px 2px 2px rgba(0,0,0,.3);
  max-height: 200px;
  min-height: 40px;
  overflow-y: scroll;
  overflow-x: hidden;
}
ul li {
  width: 100%;
  text-align: left;
  line-height: 16px;
  height: 40px;
  color: #666;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  cursor: pointer;
  transition: background .3s;
}

.highlighted {
  background: gainsboro;
}


</style>
