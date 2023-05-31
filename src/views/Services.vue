<script setup>
</script>
<template>
    <div>
        <h2>РЕСНИЦЫ</h2>
	    <article>
            <section>
                <p>Татуаж - 30p</p>
                <span>
                    Перманентный макияж век - это стандартный способ введения пигмента в верхние слои кожи. Он плотно вводится в виде стрелки черного цвета. Черный цвет пигмента считается традиционным, так как он лучше заметен и дольше держится эффект.
                </span>
            </section>
            <section>
                <p>Ламинация - 25p</p>
                <span>
                    Метод заключается в накладывании и выдерживании на волосках в течение определенного времени специального состава. Он окрашивает, создает эффект наращивания и облегчает укладку, придающую бровям и ресницам необходимый изгиб.
                </span>
            </section>
            <section>
                <p>Покраска - 12p</p>
                <span>
                    Процедуру окрашивания можно проходить девушкам, не страдающим аллергическими реакциями на краску, а также не имеющим заболеваний глаз или век. Процедура окрашивания ресниц стойкой краской довольно простая и длиться всего примерно 15-20 минут. 
                </span>
            </section>
            <section>
                <p>Коррекция - 10p</p>
                <span>
                    Под коррекцией понимается восстановление изначального внешнего вида. На место старых волосков прикрепляют новые. Подобная процедура дает возможность долго носить ненатуральные реснички.
                </span>
            </section>
            <section>
                <img src="../img/img21.jpg" alt="lashmaker">
            </section>
            <section>
                <p>Наращивание - 40p</p>
                <span>
                    Наращивание ресниц — процесс удлинения и увеличения объема натуральных ресниц при помощи искусственных ресниц. Различают два вида наращивания ресниц: поресничное наращивание и пучковое наращивание.
                </span>
            </section>  
        </article>
        <form method="get" action="/cabinet">
            <input id="button" type="submit" value="ЗАПИСАТЬСЯ НА РЕСНИЦЫ" name="button1">
        </form>
        <h2>МАНИКЮР</h2>
        <article>
            <section>
                <p>Гель-лак - 35p</p>
                <span>
                    Гель-лак – это гибрид обычного лака и геля для наращивания, поэтому он и имеет такое название. Материал собрал в себе лучшие качества: цвет и стойкость до 2-3 недель.
                </span>
            </section>
            <section>
                <img src="../img/pp2.jpg" alt="lashmaker">
            </section>
            <section>
                <p>Наращивание - 55p</p>
                <span>
                    Сначала выполняется маникюр, затем наращивание, то есть удлинение ногтевого ложа, после чего на искусственные ногти наносится гель-лаковое покрытие. 
                </span>
            </section> 
            <section>
                <p>Педикюр - 45p</p>
                <span>
                    Педикюр — специальный уход за пальцами ног или покрытие ногтей лаком. По сути, он представляет собой аналог маникюра для ног. 
                </span>
            </section>
            <section>
                <img src="../img/pp3.jpg" alt="lashmaker">
            </section>
            <section>
                <p>Маникюр - 15p</p>
                <span>
                    Маникюр — косметическая процедура по обработке ногтей на пальцах рук и самих кистей рук, а то и всей руки. 
                </span>
            </section>    
        </article>
        <form method="get" action="/cabinet">
            <input id="button" type="submit" value="ЗАПИСАТЬСЯ НА МАНИКЮР" name="button1">
        </form>
        <h2>БРОВИ</h2>
        <article>
            <section>
                <p>Татуаж - 30p</p>
                <span>
                    Татуаж бровей представляет собой внесение пигмента в верхний слой кожи. Краситель задерживается в эпидермисе на долгое время, придавая бровям нужные очертания.
                </span>
            </section>
            <section>
                <img src="../img/img22.jpg" alt="lashmaker">
            </section>
            <section>
                <p>Покраска - 20p</p>
                <span>
                    Окрашивание бровей краской – это процесс придания волоскам нужного оттенка с использованием специального красителя на основе натуральных компонентов. 
                </span>
            </section> 
            <section>
                <p>Коррекция - 10p</p>
                <span>
                    Коррекция бровей – это процедура, которая подразумевает придание бровям нужной формы путем удаления нежелательных волосков и дальнейшего окрашивания красителями или органической хной.
                </span>
            </section>
            <section>
                <p>Ламинация - 25p</p>
                <span>
                    Ламинирование бровей – это косметологическая процедура, которая помогает упорядочить обширные волосы, скорректировать их форму, закрепить волосы.
                </span>
            </section>
            <section>
                <p>Наращивание - 40p</p>
                <span>
                    Наращивание бровей – процедура, направленная на создание их идеальной формы путем точечного крепления гипоаллергенных синтетических волосков в местах, где бровь перестала расти.                
                </span>
            </section>    
        </article>
        <form method="get" action="/cabinet">
            <input id="button" type="submit" value="ЗАПИСАТЬСЯ НА БРОВИ" name="button1">
        </form>
    </div>
</template>
<style scoped lang="sass">
*
  font-family: 'Montserrat Alternates'
  margin: 0px
  padding: 0px 
article 
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: space-evenly 
    width: 90%
    max-width: 1000px
    align-items: center
section  
    padding: 2em 0em 0em
    width: 33.33% 
    display: flex
    flex-direction: column
    align-items: center
@media(max-width: 950px)
    section
        width: 50% 
@media(max-width: 600px)
    section
        width: 100%
div
    background: #ffffff
    display: flex
    align-items: center
    flex-direction: column
img
    width: 90%
    max-width: 350px
h2,p,span
    line-height: 1em
    color: #8400b0
h2
    font-size: 30px
    text-align: center
    padding: 2em 0em 0em 
p
    text-align: center
    font-size: 23px 
span
    text-align: justify
    padding: 1em
    font-size: 18px
form
    padding: 2em
#button
    background-color: #7e00bd
    border: none
    color: white
    padding: 1em 2em
    text-align: center
    text-decoration: none
    display: inline-block
    font-size: 18px
    border-radius: 0.6em
    &:hover
        background-color: #7000a8
</style>