<template>
  <div class="options_container">
    <div class="options">
      <p>Categorias:</p>
      <select v-model="categoriaSelecionadaId" @change="atualizarCategoria">
        <option v-for="categoria in categorias" :value="categoria.id" :key="categoria.id">
          {{ categoria.titulo }}
        </option>
      </select>
    </div>
    <div class="Questions">
      <div class="Questions_header">
        <div class="title">
          <p>{{ categoriaSelecionadaTitulo }}</p>
        </div>
        <div class="border"></div>
      </div>
      <div v-for="pergunta in perguntas" :key="pergunta.id">
        <CardsQuestions :pergunta="pergunta.question" :idQuestion="pergunta.idQuestion" :categoriaSelecionadaId="categoriaSelecionadaId" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CardsQuestions from './CardsQuestions.vue';

export default {
  name: 'Options',
  components: { CardsQuestions },
  data() {
    return {
      categorias: [],
      perguntas: [],
      categoriaSelecionadaId: null,
      categoriaSelecionadaTitulo: null,
      respostas: [] 
    };
  },
  mounted() {
    this.fetchCategorias();
  },
  methods: {
    fetchCategorias() {
      axios.get('https://www.lefisc.com.br/api/administrador/dirpf')
        .then(response => {
          this.categorias = response.data.map(categoria => ({
            id: categoria.idCategoria,
            titulo: categoria.Categoria
          }));

          if (this.categorias.length > 0) {
            this.categoriaSelecionadaId = this.categorias[0].id; 
            this.atualizarCategoria();
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    atualizarCategoria() {
      const categoriaSelecionada = this.categorias.find(categoria => categoria.id === this.categoriaSelecionadaId);
      this.categoriaSelecionadaTitulo = categoriaSelecionada?.titulo || null;
      this.$emit('atualizar-categoria', this.categoriaSelecionadaTitulo);
      this.elementoSelecionado();
    },
    elementoSelecionado() {
      if (this.categoriaSelecionadaId) {
        const url = `https://www.lefisc.com.br/api/administrador/dirpf/${this.categoriaSelecionadaId}`;

        axios.get(url)
          .then(response => {
            console.log(response.data);
            this.perguntas = response.data.map(pergunta => ({
              question: pergunta.Pergunta,
              idQuestion: pergunta.idPergunta,
              log: pergunta.log
            }));
            this.respostas = response.data.map(pergunta => pergunta.Pergunta);
            console.log(this.respostas);
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  },
};
</script>

<style scoped>
.options {
  display: flex;
  align-items: center;
  background-color: #af3437;
  padding: 1.5rem;
  padding-left: 2rem;
}

.options p {
  margin: 0;
  margin-right: 3rem;
  color: #fff;
  font-size: 22px;
}

.options select {
  height: 2rem;
  width: 80%;
  border-radius: 5px;
  font-size: 18px;
}

.Questions {
  padding-bottom: 1rem;
  max-width: 90vw;
  margin: auto;
}

.Questions_header {
  display: flex;
  justify-content: center;
}

.Questions_header p {
  margin: 0;
}

.Questions_header .title {
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 2rem;
  font-size: 32px;
  font-weight: 600;
  font-style: italic;
  color: #565656;
}

.Questions_header .border {
  border-bottom: 1px solid #c93c62;
  flex-grow: 1;
  margin: 25px 10px 0 10px;
}

</style>