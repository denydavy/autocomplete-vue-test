<template>
  <div class="wrapper">

    <section>
      <h1>Lorem Ipsum</h1>

      <article>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis gravida purus, a faucibus nisl maximus quis. Aenean sem risus, efficitur non lectus eu, rutrum mattis nunc. Donec laoreet dui eget consectetur eleifend. Proin vel nulla purus. Curabitur dapibus purus in velit egestas, quis sollicitudin metus euismod. Etiam sagittis pulvinar dolor in fermentum. Integer id erat viverra, finibus nisi malesuada, consectetur dolor. Fusce interdum finibus ligula vehicula rutrum. Fusce vitae eros sed mauris malesuada aliquet ut eu odio. Nam vitae sapien libero. Ut nulla ante, faucibus ut lectus non, dapibus eleifend diam. In dictum ante eu tellus efficitur dapibus. Fusce consectetur nisl eros. Cras fringilla iaculis mi nec pellentesque. Aliquam sit amet mi diam. Integer id commodo leo, vel ultrices tortor.
      </article>

      <autocomplete :options="options" @select="onOptionSelect" v-model="message">
        <template slot="item" slot-scope="option">
          <div class="media">
              {{ option.first_name }} {{ option.last_name }}
          </div>
        </template>
      </autocomplete>

      <article class="card" v-show="message != ''">
        <span class="close" @click="closeCard">x</span>
        <h1>Selected user: </h1>
        <p>
          Name : {{ fullName }}
        </p>
        <p>
          E-mail: <a :href="'mailto:'+message.email" >{{message.email}}</a>
        </p>

      </article>
    </section>

  </div>

</template>

<script>

  import AutocompleteComponent from '@/components/AutocompleteComponent';

  export default {
    name: 'AutoComplete',
    data () {
      return {
        loading: false,
        message: '',
        options: [],
        searchItem: null,
        isOpen: false
      }
    },
    created() {
      this.fetchData();
    },
    watch: {
      '$route' : 'fetchData',
    },
    computed: {
      fullName (){
        return this.message.first_name + " "+this.message.last_name;
      }
    },
    methods: {
      fetchData() {
        this.loading = true;
        fetch('static/MOCK_DATA.json')
          .then(function (response) {
            return response.json();
          }).then( (json) => {
          this.options = json;
          this.loading = false;
        });
      },
      onOptionSelect (option) {
        this.message = option;
      },
      closeCard() {
        this.message = '';
      }
    },
    components: {
      autocomplete: AutocompleteComponent
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  padding: 30px 0;
}
.card {
  margin-left: 20px;
  width: 300px;
  heigth: 500px;
  box-shadow: 0px 2px 8px rgba(0,0,0,.3);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  position: relative;
}

.card p {
  display: block;
  text-align: left;
}
.card a {
  color: cornflowerblue;
  margin:0;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  cursor: pointer;
}


</style>
