<template>
  <div id="container">
    <div v-if="pergunta" class="answer_container">
      <div class="question_head">
        <router-link to="/" class="back_button">
          <button>Voltar</button>
        </router-link>
        <div class="question">
          <p>{{ pergunta }}</p>
        </div>
      </div>
      <div class="answer">
        <p v-html="resposta"></p>
      </div>
    </div>

    <div class="anotherQuestions_container">
      <div class="title">Outras Perguntas sobre {{ categoria }}</div>
      <div class="anotherQuestions">
        <div v-for="pergunta in perguntas" :key="pergunta.id">
        <CardsQuestions :pergunta="pergunta.question" :idQuestion="pergunta.idQuestion" :categoriaSelecionadaId="categoriaSelecionadaId" />
      </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
import CardsQuestions from "./CardsQuestions.vue";

export default {
  data() {
    return {
      pergunta: "",
      resposta: "",
      categoria: "",
      categoriaSelecionadaId: null,
      idQuestion: null,
      perguntas: [],
    };
  },
  methods: {
    fetchQuestionData() {
      const idQuestion = this.$route.params.id;
      const url = `https://www.lefisc.com.br/api/administrador/dirpf/pergunta/${idQuestion}`;

      axios
        .get(url)
        .then((response) => {
          const data = response.data[0];
          this.pergunta = data.Pergunta;
          this.resposta = data.Resposta;
          this.categoria = data.Categoria;
          this.categoriaSelecionadaId = data.idCategoria;
          this.idQuestion = data.idPergunta;
          this.fetchQuestions();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    fetchQuestions() {
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
    },
  },
  mounted() {
    this.fetchQuestionData();
    
    
  },
  components: {
    CardsQuestions,
  },
  name: "Answer",
};
</script>
  
<style scoped>
#container {
  padding-bottom: 1rem;
}
.answer_container {
  margin-top: 3rem;
  padding: 2rem;
}
.question_head {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #a09e9e;
}
.question_head .question,
.anotherQuestions_container .title {
  font-size: 22px;
  font-weight: 700;
  color: #525252;
}
.back_button {
  align-self: flex-end;
  border: 2px solid #c93c62;
  background-color: #fff;
  border-radius: 5%;
  cursor: pointer;
}
.back_button button {
  background-color: #fff;
  cursor: pointer;
  margin: auto;
  border: none;
  font-style: italic;
  font-weight: 600;
  align-self: center;
  padding: 0.6rem 1.5rem;
  font-size: 18px;
  transition: 0.3s ease;
}
.back_button button:hover {
  background-color: #c93c62;
  color: #fff;
}
.anotherQuestions_container {
  display: flex;
  border: 1px solid #000;
  border-radius: 0.5rem;
  flex-direction: column;
  padding: 2rem;
  margin: 2rem;
}
.anotherQuestions_container .title {
  margin: auto;
  margin-bottom: 1rem;
}
</style>
  