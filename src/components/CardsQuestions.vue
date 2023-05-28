<template>
  <div class="card_container">
    <div class="card_question">
      {{ pergunta }}
    </div>
    <RouterLink class="button" :to="`/question/${idQuestion}`"> <!-- Alterado para rota dinâmica -->
      <button class="open">abrir</button>
    </RouterLink>
  </div>
</template>


<script>
export default {
  name: 'CardsQuestions',
  props: {
    pergunta: {
      type: String,
      required: true
    },
    idQuestion: {
      type: Number,
      required: true
    },
    categoriaSelecionadaId: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
    .card_container{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: .5rem;
        padding-bottom: .5rem;
        background-color: #eee;
        max-width: 95vw;
       
        margin-top: 2rem;
        margin-bottom: 2rem;
        border-radius: 1rem;
    }
    .card_container .card_question{
        width: 80vw;
        margin-right: 2rem;
        margin-left: 1rem;
    }
    .button .open{
        background-color: #c93c62;
        color: #fff;
        padding: 10px 20px;
        border: none;
        margin: 10px 0px;
        border-radius: .3rem;
        cursor: pointer;
        margin-right: 1rem;
        transition: .3 ease;
    }
    .button .open:hover{
        background-color: #d9547f;
        
    }
    @media (max-width: 600px){
        .card_container{
            flex-direction: column;
        }
    }
</style>