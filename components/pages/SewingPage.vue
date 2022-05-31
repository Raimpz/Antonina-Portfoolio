<template>
  <the-header class="header"></the-header>
  <main>
    <div class="scroll-buttons-container">
      <div class="scroll-buttons">
        <the-scroll-btns pageType="sewingPage"></the-scroll-btns>
      </div>
    </div>

    <section id="mantel" class="section-wh">
      <div class="container">
        <div class="swiper-box">
          <the-swiper :slides="mantel"></the-swiper>
        </div>
        <div class="content-box">
          <div>
            <h3>Mantel</h3>
            <p>
              Mantel on voodriga ja pihaosas liibuva siluetiga. Mantli ülemine
              esiosa on printsesslõikeline ja mantli alumine osa on
              poolratasklošš lõikelise seelikuga. Mantel on õla- ja
              vööjoonesissevõtetega ning küljeõmblustesse töödeldud taskutega.
              Kinnis on eest suletav kahe nööbiga, mantel on pikkade
              kaheosaliste varrukateda. Mantel on sallkraega ning avara
              kapuutsiga. Mantel ulatub põlvejoonest alla.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="korsett" class="section-gr">
      <div class="container">
        <div class="swiper-box">
          <the-swiper :slides="korsett"></the-swiper>
        </div>
        <div class="content-box">
          <div>
            <h3>Korsett</h3>
            <p>
              Korsett on liibuva siluetiga ja voodriga. Korseti esiosa alumine
              osa koosneb kolmest detailist ning ühendusõmblustesse on töödeldud
              kaks korsetiluud. Korseti esiosa ülemine osa on eraldi töödeldud
              rinnakorviga. Korseti seljaosa koosneb neljast detailist ning
              ühendusõmblustesse on töödeldud kaks korsetiluud. Korsett on
              õlapaeltega ning tagant suletav paelaga.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="lilleline-trikotaažkleit" class="section-wh">
      <div class="container">
        <div class="swiper-box">
          <the-swiper :slides="lillelineKleit"></the-swiper>
        </div>
        <div class="content-box">
          <div>
            <h3>Lilleline trikotaažkleit</h3>
            <p>
              Kleit on poolliibuva siluetiga ja pikkade varrukatega. Varrukate
              alläär on töödeldud samast kangast mansetiga ning kaelakaar on
              töödeldud samast kangast kandiga. Trikotaažkleit on
              seljasissevõtetega ning küljeõmblustesse töödeldud taskutega.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="türkiissinine-trikotaažkleit" class="section-gr">
      <div class="container">
        <div class="swiper-box">
          <the-swiper :slides="rohelineKleit"></the-swiper>
        </div>
        <div class="content-box">
          <div>
            <h3>Türkiissinine trikotaažkleit</h3>
            <p>
              Trikotaažkleit on poolliibuva siluetiga ning vasakult küljelt
              lõhikuga. Kleit on eest vööjoonel läbilõikega ja puusajoonel
              diagonaalse läbilõikega ning tagant vööjoonel läbilõikega. Kleidi
              seljaosa ülemised osad on omavahel vaheliti.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="kleit" class="section-wh">
      <div class="container">
        <div class="swiper-box">
          <the-swiper :slides="mustKleit"></the-swiper>
        </div>
        <div class="content-box">
          <div>
            <h3>Kleit</h3>
            <p>
              Kleit on liibuvate kolmveerand varrukatega, trapets-seelikuga,
              V-kaelusega, selja- ja vööjoonesissevõtetega. Kleit on pihaosas
              liibuv, fikseeritav vööga, vööaasadega, tagant suletatav
              peitlukuga, kaunistatud tikanditega ja pitsiga. Kleit ulatub
              põlvejoonest kõrgemale.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="punane-seelik" class="section-gr">
      <div class="container">
        <div class="swiper-box">
          <the-swiper :slides="punaneSeelik"></the-swiper>
        </div>
        <div class="content-box">
          <div>
            <h3>Punane Seelik</h3>
            <p>
              Seelik on nelja paaniga ning vööjoon on töödeldud kummipaelaga.
              Seelik on kaunistatud maalingutega.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="sinine-seelik" class="section-wh">
      <div class="container">
        <div class="swiper-box">
          <the-swiper :slides="sinineSeelik"></the-swiper>
        </div>
        <div class="content-box">
          <div>
            <h3>Sinine Seelik</h3>
            <p>
              Poolrataskloššlõikeline seelik on sirge värvliga ja
              küljeõmblustesse töödeldud taskutega. Maksiseelik on vasakult
              küljelt suletav peitlukuga ja nööbiga.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="pluus" class="section-gr">
      <div class="container">
        <div class="swiper-box">
          <the-swiper :slides="triikSärk"></the-swiper>
        </div>
        <div class="content-box">
          <div>
            <h3>Pluus</h3>
            <p>
              Pluus on avara siluetiga. Pluus on avarate pikkade varrukatega,
              mansettidega, üleni suletava nööpkinnisega, rinnasissevõtetega ja
              pööratud kraega. Pluus ulatub alumise puusajooneni.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="punane-vest" class="section-wh">
      <div class="container">
        <div class="swiper-box">
          <the-swiper :slides="punaneVest"></the-swiper>
        </div>
        <div class="content-box">
          <div>
            <h3>Punane Vest</h3>
            <p>
              Vest on poolliibuva siluetiga. Vest on rinna-, õla- ja
              seljasissevõtetega ning küljeõmblustesse töödeldud taskutega.
              Kinnis on eest suletav nööbiga ning vest on sallkraega. Vest
              ulatub põlvedeni ning vesti õmblusvarud, alläär ja käeaugukaar on
              töödeldud diagonaalkandiga.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="kunstkarusnahast-vest" class="section-gr">
      <div class="container">
        <div class="swiper-box">
          <the-swiper :slides="sinineVest"></the-swiper>
        </div>
        <div class="content-box">
          <div>
            <h3>Kunstkarusnahast vest</h3>
            <p>
              Vest on voodriga, sirge siluetiga ning horisontaalsete
              läbilõigetega. Vest on ümara kaelusega, õla- ja rinnasissevõtetega
              ning kinnis on eest suletav haagiga. Vest on küljeõmblustesse
              töödeldud taskutega ning ulatub alumise puusajooneni.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="roheline-sall" class="section-wh">
      <div class="container">
        <div class="swiper-box">
          <the-swiper :slides="rohelineSall"></the-swiper>
        </div>
        <div class="content-box">
          <div>
            <h3>Roheline Sall</h3>
            <p>
              Sall on puuvillast ning disainitud sidumistehnikas siidivärvidega.
              Servad on töödeldud kahekordse palistusega.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="roosa-sall" class="section-gr">
      <div class="container">
        <div class="swiper-box">
          <the-swiper :slides="roosaSall"></the-swiper>
        </div>
        <div class="content-box">
          <div>
            <h3>Roosa Sall</h3>
            <p>
              Sall on siidist ning disainitud siidivärvidega ja gutaga. Servad
              on töödeldud kahekordse palistusega.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="püksid" class="section-wh">
      <div class="container">
        <div class="swiper-box">
          <the-swiper
            :slides="ruudulisedPüksid"
            class="ruudulised-püksid"
          ></the-swiper>
        </div>
        <div class="content-box">
          <div>
            <h3>Püksid</h3>
            <p>
              Pliiatspüksid on poolliibuvad. Püksid on allääres lühendatud
              püksisäärega ning mansettidega. Püksid on töödeldud
              Chino-taskutega. Pükste vööjoonel on värvel ja vööaasad ning
              püksid on eest kahe pehme voldiga ja tagant kahe sissevõttega.
              Püksid on eest suletavad nööbiga ja tõmblukuga.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="jakk" class="section-gr">
      <div class="container">
        <div class="swiper-box">
          <the-swiper :slides="jakk"></the-swiper>
        </div>
        <div class="content-box">
          <div>
            <h3>Jakk</h3>
            <p>
              Jakk on liibuva siluetiga. Jakk on rinna- ja seljasissevõtetega
              ning küljeõmblustesse töödeldud taskutega. Jakk on eest üleni
              suletava nööpkinnisega. Jaki alläärel on värvel, varrukad on
              sirged, pikad ja mansettidega. Jakk on sallkraega ning ulatub
              puusadeni.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="rahvarõiva-meestepüksid" class="section-wh">
      <div class="container">
        <div class="swiper-box">
          <the-swiper :slides="rahvariie"></the-swiper>
        </div>
        <div class="content-box">
          <div>
            <h3>Rahvarõiva/rahvarõivaste meestepüksid</h3>
            <p>
              Rahvarõiva meeste püksid on avarad. Püksid on diagonaalsete
              taskutega. Pükste vööjoonel on esiosal lõikekohane kant ning
              tagaosal on värvel. Püksid on eest suletatavad nööpidega ja tagant
              nööpaukudest läbiva paelaga. Püksid on eest kahe sissevõttega ja
              tagant nelja pehme voldiga, alläärel on igal säärel neli pehmet
              volti. Pükste allääres on mansetid ning nööpaugud paelte
              läbimiseks, küljeõmbluste alumises osas on ilunööbid.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="lilleline-kleit" class="section-gr">
      <div class="container">
        <div class="swiper-box">
          <the-swiper :slides="kleitÕpetajale"></the-swiper>
        </div>
        <div class="content-box">
          <div>
            <h3>Lilleline kleit</h3>
            <p>
              Kleit on voodriga, pihaosas liibuva siluetiga, seljaõmblusega ja
              poolratasklošš lõikelise seelikuga. Kleit on rinna- ja
              seljasissevõtetega ning kinnis on vasakult küljelt suletav
              peitlukuga. Käeaugukaar ja kaelakaar on töödeldud
              diagonaalkandiga. Kleit on vöökohal fikseeritav vööga ning ulatub
              maani.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="lilleline-kleit-2" class="section-wh">
      <div class="container">
        <div class="swiper-box">
          <the-swiper :slides="kleitÕpetajale2"></the-swiper>
        </div>
        <div class="content-box">
          <div>
            <h3>Lilleline trikotaažkleit volangidega</h3>
            <p>
              Kleit on liibuva siluetiga. Kleit on selja-, õla-, rinna- ja
              vööjoonesissevõtetega. Kleit on lühikeste varrukatega ning
              volangidega. Kleit on küljeõmblustesse töödeldud taskutega ning
              V-kaelusega. Kaelakaar on töödeldud soonikust kandiga. Kleit
              ulatub põlvejooneni.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="ruuduline-seelik" class="section-gr">
      <div class="container">
        <div class="swiper-box">
          <the-swiper :slides="ruudulineSeelik"></the-swiper>
        </div>
        <div class="content-box">
          <div>
            <h3>Ruuduline seelik</h3>
            <p>
              Seelik on voodriga ja sirge siluetiga. Seelik on selja- ja
              vööjoonesissevõtetega. Seeliku alläärel on kaunistusriba ja
              vöökohal on lõikekohane kant. Seelik on tagant suletav peitlukuga.
              Seelik ulatub põlvejooneni.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="lasteriie" class="section-wh">
      <div class="container">
        <div class="swiper-box">
          <the-swiper :slides="lasteriie"></the-swiper>
        </div>
        <div class="content-box">
          <div>
            <h3>Trikotaažist lastekomplekt</h3>
            <p>
              Dressipluus on avar. Varrukad on pikad. Varrukate alläär, pluusi
              alläär ja kaelakaar on töödeldud soonikuga. Dressipüksid on
              avarad. Vöökohal on kumm ning pükste alläär on töödeldud
              soonikuga.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="ujumispüksid" class="section-gr">
      <div class="container">
        <div class="swiper-box">
          <the-swiper :slides="ujumispüksid"></the-swiper>
        </div>
        <div class="content-box">
          <div>
            <h3>Bikiinid</h3>
            <p>
              Bikiinide ülemine osa koosneb kahest kolmnurkrinnakorvist.
              Rinnahoidja ülemised servad on töödeldud kummipaelaga ning alumine
              serv on töödeldud katteõmblusega. Ülemise osa kinniseks on
              katteõmbluse tunnelist läbiv pael. Bikiinide alumise osa servad on
              töödeldud kummipaelaga ning vöökoht on töödeldud katteõmblusega.
              Bikiinide paelad on töödeldud katteõmblusega.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <the-footer></the-footer>
</template>

<script>
import TheHeader from "../layouts/TheHeader.vue";
import TheSwiper from "../layouts/TheSwiper.vue";
import TheFooter from "../layouts/TheFooter.vue";
import TheScrollBtns from "../layouts/TheScrollBtns.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    TheSwiper,
    TheScrollBtns,
  },
  data() {
    return {
      mantel: [
        require("@/assets/mantel/eest.jpg"),
        require("@/assets/mantel/küljelt.jpg"),
        require("@/assets/mantel/tagant-kapuutsiga.jpg"),
        require("@/assets/mantel/tagant.jpg"),
      ],
      korsett: [
        require("@/assets/korsett/eest.jpg"),
        require("@/assets/korsett/küljelt.jpg"),
        require("@/assets/korsett/tagant.jpg"),
      ],
      lillelineKleit: [
        require("@/assets/lilleline-kleit/eest.jpg"),
        require("@/assets/lilleline-kleit/küljelt.jpg"),
        require("@/assets/lilleline-kleit/tagant.jpg"),
      ],
      rohelineKleit: [
        require("@/assets/roheline-kleit/eest.jpg"),
        require("@/assets/roheline-kleit/küljelt.jpg"),
        require("@/assets/roheline-kleit/tagant.jpg"),
      ],
      mustKleit: [
        require("@/assets/must-kleit/eest.jpg"),
        require("@/assets/must-kleit/küljelt.jpg"),
        require("@/assets/must-kleit/tagant.jpg"),
      ],
      punaneSeelik: [
        require("@/assets/punane-seelik/eest.jpg"),
        require("@/assets/punane-seelik/küljelt.jpg"),
        require("@/assets/punane-seelik/tagant.jpg"),
      ],
      sinineSeelik: [
        require("@/assets/sinine-seelik/eest.jpg"),
        require("@/assets/sinine-seelik/küljelt.jpg"),
        require("@/assets/sinine-seelik/tagant.jpg"),
      ],
      triikSärk: [
        require("@/assets/triiksärk/eest.jpg"),
        require("@/assets/triiksärk/küljelt.jpg"),
        require("@/assets/triiksärk/tagant.jpg"),
      ],
      punaneVest: [
        require("@/assets/punane-vest/eest.jpg"),
        require("@/assets/punane-vest/küljelt.jpg"),
        require("@/assets/punane-vest/tagant.jpg"),
      ],
      sinineVest: [
        require("@/assets/sinine-vest/eest.jpg"),
        require("@/assets/sinine-vest/küljelt.jpg"),
        require("@/assets/sinine-vest/tagant.jpg"),
      ],
      rohelineSall: [
        require("@/assets/roheline-sall/kinnine.jpg"),
        require("@/assets/roheline-sall/lahtine.jpg"),
      ],
      roosaSall: [
        require("@/assets/roosa-sall/kinnine.jpg"),
        require("@/assets/roosa-sall/lahtine.jpg"),
      ],
      ruudulisedPüksid: [require("@/assets/ruudulised-püksid/eest.jpg")],
      jakk: [
        require("@/assets/jakk/eest.jpg"),
        require("@/assets/jakk/tasku.jpg"),
        require("@/assets/jakk/tagant.jpg"),
      ],
      rahvariie: [
        require("@/assets/rahvariie/eest.jpg"),
        require("@/assets/rahvariie/küljelt.jpg"),
        require("@/assets/rahvariie/säär.jpg"),
      ],
      kleitÕpetajale: [
        require("@/assets/kleit-õpetajale/eest.jpg"),
        require("@/assets/kleit-õpetajale/tagant.jpg"),
      ],
      kleitÕpetajale2: [
        require("@/assets/kleit-õpetajale-2/eest.jpg"),
        require("@/assets/kleit-õpetajale-2/õlg.jpg"),
        require("@/assets/kleit-õpetajale-2/tasku.jpg"),
      ],
      lasteriie: [
        require("@/assets/lasteriie/pluus.jpg"),
        require("@/assets/lasteriie/püksid.jpg"),
      ],
      ruudulineSeelik: [
        require("@/assets/ruuduline-seelik/eest.jpg"),
        require("@/assets/ruuduline-seelik/küljelt.jpg"),
        require("@/assets/ruuduline-seelik/tagant.jpg"),
      ],
      ujumispüksid: [
        require("@/assets/ujukad/eest.jpg"),
        require("@/assets/ujukad/küljelt.jpg"),
        require("@/assets/ujukad/tagant.jpg"),
      ],
    };
  },
};
</script>

<style scoped>
.ruudulised-püksid {
  height: 525px;
}

header {
  width: 100vw;
  background: var(--color-black);
  height: 50px;
}

header div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.scroll-buttons-container {
  display: none;
}

section {
  width: 100%;
  height: max-content;
  display: flex;
  place-content: center;
  padding: 35px 25px;
}

.content-box div {
  width: 100%;
  text-align: center;
}

.content-box div h3 {
  margin-bottom: 5px;
  font-size: 24px;
}

.content-box div p {
  font-weight: 200;
  line-height: 22px;
  font-size: 18px;
}

@media screen and (min-width: 768px) {
  .content-box {
    max-width: 500px;
  }

  .content-box div h3 {
    margin-bottom: 10px;
    font-size: 30px;
  }

  .content-box div p {
    line-height: 28px;
    font-size: 18px;
  }

  .header {
    position: fixed;
  }

  section {
    padding: 100px 45px;
  }

  .container {
    max-width: 1280px;
  }

  .section-gr .container {
    flex-direction: row;
  }

  .section-wh .container {
    flex-direction: row-reverse;
  }

  .single-image {
    height: 500px;
  }
}

@media screen and (min-width: 1080px) {
  .header {
    position: unset;
  }

  .container {
    gap: 150px;
  }

  .single-image {
    height: 600px;
  }

  .scroll-buttons-container {
    display: block;
    background: var(--color-lightGray);
    backdrop-filter: blur(4px);
    max-width: 90%;
    margin: 0 auto;
    position: sticky;
    top: 0;
    z-index: 99999;
    padding: 10px 0;
    border-radius: 16px;
  }

  .scroll-buttons {
    margin: 0 auto;
    text-align: center;
  }
}
</style>
