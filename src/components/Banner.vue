<script>
export default {
    name: "Banner",
}
</script>
<template>
    <div class="img_bg">
        <div class="overlay">
            <div class="text">
                <p class="title">DIRFP</p>
                <p class="sub">Perguntas e Respostas</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.img_bg {
    margin-top: 3.5rem;
    background: url(../assets/images/back2.png);

    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    height: 27vw;
}

.img_bg .overlay {
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(175, 52, 55, 0.6), rgba(168, 111, 112, 0.6)), rgba(175, 52, 55, 0.6);;
    display: flex;
    align-items: center;
    justify-content: center;
}

.text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 500;
    font-style: italic;
}

.text p {
    margin: 0;
}

.text .title {
    font-size: 7rem;
    font-weight: 600;
}

.text .sub {
    font-size: 1.8rem;
}
@media (min-width: 500px) and (max-width: 760px){
    .text{
        margin-top: 30px;
    }
    .text .title {
    font-size: 4rem;
}
.text .sub {
    font-size: 1rem;
}
}
@media (max-width: 500px){
    .text{
        margin-top: 30px;
    }
    .text .title {
    font-size: 2rem;
}
.text .sub {
    font-size: .7rem;
}
}
</style>