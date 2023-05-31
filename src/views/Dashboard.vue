<script setup>
</script>
<template> 
    <article>
        <section id="section-logo-photo">
           <img src="../img/header.jpg" alt="salon" id="img-header"> 
        </section>
        <section id="section-logo-text">
            <img src="../img/logotip.png" alt="logo" id="img-logotip">
            <h2>Простой путь к гармонии <br> души и тела</h2>
            <form method="LINK" action="http://localhost/pract/login.php">
                <input id="button" type="submit" value="ЗАПИСАТЬСЯ" name="button">
            </form>
        </section>
        <section id="section-sale">
            <img src="../img/img7.jpg" alt="lashmaker" id="image-sale">
            <h5>
                Скидка 20% <br> на первое посещение
            </h5>
        </section>
        <h4>Наши специалисты</h4>
        <section class="section-photo">
            <img src="../img/img4.jpg" alt="lashmaker" class="image">
        </section>
        <section class="section-text">
            <h5>ЛЭШМЕЙКЕР</h5>
            <span>
                Через её руки прошло много
                самых красивых девушек,
                и все они получили
                ресницы своей мечты.
                Работает в этой сфере
                больше 2 лет, имеет
                более 10 сертификатов и
                дипломов по наращиванию.
            </span>
        </section>
        <section class="section-photo">
            <img src="../img/img5.jpg" alt="lashmaker" class="image">
        </section>
        <section class="section-text">
            <h5>МАСТЕР-МАНИКЮРА</h5>
            <span>
                Ухоженные и аккуратные руки - руки с маникюром и идеальной кутиколой. Не знаешь, что выбрать, она подскажет и расскажет о самых современных дизайнах и трендах.
            </span>
        </section>
        <section class="section-photo">
            <img src="../img/img6.jpg" alt="lashmaker" class="image">
        </section>
        <section class="section-text">
            <h5>БРОВИСТ</h5>
            <span>
                Брови - отражение души, через одну только форму бровей можно определить характер человека. Участвовала в международных конкурсах по ламинированию и наращиванию.
            </span>
        </section>
        
    </article>
</template>
<style scoped lang="sass">
*
  font-family: 'Montserrat Alternates'
  margin: 0px
  padding: 0px    
article 
    display: flex
    background: #ffffff
    flex-direction: row
    flex-wrap: wrap
    align-items: center
    justify-content: space-evenly 

section  
    width: 50% 
    display: flex
    flex-direction: column
    align-items: center
    padding: 1em 0em 5em
#section-logo-photo  
    align-content: flex-end  
#section-logo-text
    align-content: flex-start

.section-photo
    width: 40%   
    align-content: flex-end  
.section-text
    width: 60%  
    align-items: flex-start 
#section-sale
    width: 100%
    background-color: #e6baff
    padding: 3em 0em 1em
@media(max-width: 900px)
    section, .section-photo, .section-text
        width: 100% 
    #section-logo-photo
        display: none
        padding: 0em
    #section-logo-text  
        align-content: center 
    .section-photo
        padding: 0em
        align-content: center 
    .section-text
        align-items: center 

#img-logotip
    width: 90%
    max-width: 350px
#img-header
    width: 90%
    max-width: 600px
.image
    width: 90%
    max-width: 300px
#image-sale
    width: 90%
    max-width: 400px
h2,h4,h5
    text-transform: uppercase
    line-height: 1em
    color: #8400b0
    
h2
    font-size: 30px
    text-align: center
    padding: 1em 3em
h4  
    width: 100%
    font-size: 30px
    margin: 4em 0em 1em
    text-align: center
h5  
    text-align: center
    font-size: 25px
    margin: 1em 
span
    width: 90%
    max-width: 600px
    color: #8400b0
    line-height: 1em
    font-size: 20px
    padding: 1em 
    text-align: justify
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