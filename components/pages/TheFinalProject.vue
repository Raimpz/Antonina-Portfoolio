<template>
  <the-header class="header"></the-header>
  <main>
    <div class="scroll-buttons-container">
      <div class="scroll-buttons">
        <the-scroll-btns pageType="finalProjectPage"></the-scroll-btns>
      </div>
    </div>

    <section id="inspiratsioonikollaž" class="section-wh">
      <div class="heading">
        <h2>1. Inspiratsioonikollaaž</h2>
      </div>
      <div class="gallery">
        <img :src="require('@/assets/kollaaž/pilt1.jpg')" alt="" />
        <img :src="require('@/assets/kollaaž/pilt2.jpg')" alt="" />
        <img :src="require('@/assets/kollaaž/pilt3.jpg')" alt="" />
        <img :src="require('@/assets/kollaaž/pilt4.jpeg')" alt="" />
      </div>
    </section>

    <section id="moejoonis" class="section-gr">
      <div class="heading">
        <h2>2. Moejoonis</h2>
      </div>
      <div class="moejoonis">
        <div class="img-container">
          <img
            :src="require('@/assets/moejoonis/moejoonis.jpg')"
            alt="Moejoonis"
            class="moejoonis-img"
          />
        </div>
        <div class="kangad">
          <div class="img-container">
            <img
              :src="require('@/assets/moejoonis/kangad.jpg')"
              alt="Kangad"
              class="moejoonis-img"
            />
          </div>
        </div>
        <div class="-">
          <p>
            Esimene kanganäidis on liimiriie. Teine kanganäidis on polüester
            kangas, mida kasutasin nii põhikangana kui ka voodrina. Õmblemisel
            kasutasin niiti number 120. Furnituuriks kasutasin peitlukku.
          </p>
        </div>
      </div>
    </section>

    <section id="moekirjeldus" class="section-wh">
      <div class="heading">
        <h2>3. Moekirjeldus</h2>
      </div>
      <div class="moekirjeldus">
        <p>
          Kleit on pihaosas poolliibuva siluetiga ja kroogitud
          rataskloššlõikelise seelikuga. Kleidi vööjoonel on tugevdatud
          vahedetail ning sissevõtete asemele on tekitatud krooked. Kinnis on
          vasakult küljelt suletav peitlukuga. Kleit on trompetvarrukatega ja
          V-kaelusega. Kleit ulatub põlvejoonest veidi kõrgemale.
        </p>
      </div>
    </section>

    <section id="mõõdud" class="section-gr">
      <div class="heading">
        <h2>4. Mõõdud</h2>
      </div>
      <div class="table-container">
        <table>
          <tr>
            <th>Mõõdu nimetus</th>
            <th>Mõõdu tähis</th>
            <th>Mõõt cm-tes</th>
            <th>Lisa</th>
            <th>Mõõt koos lisaga</th>
            <th>1/2</th>
          </tr>
          <tr>
            <td>Kaela ümbermõõt</td>
            <td>Kü</td>
            <td>39</td>
            <td>-0,1</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Rinna ümbermõõt</td>
            <td>Rü</td>
            <td>96</td>
            <td>6</td>
            <td>102</td>
            <td>51</td>
          </tr>
          <tr>
            <td>Vöö ümbermõõt</td>
            <td>Vü</td>
            <td>76</td>
            <td>3</td>
            <td>79</td>
            <td>39,5</td>
          </tr>
          <tr>
            <td>Puusa ümbermõõt</td>
            <td>Pü</td>
            <td>109</td>
            <td>3</td>
            <td>112</td>
            <td>56</td>
          </tr>
          <tr>
            <td>Puusa kõrgus</td>
            <td>Pk</td>
            <td>20</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Selja kõrgus</td>
            <td>Sk</td>
            <td>22</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Selja pikkus</td>
            <td>Sp</td>
            <td>43</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Üldpikkus</td>
            <td>Üp</td>
            <td>90</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Selja laius</td>
            <td>Sl</td>
            <td>38</td>
            <td>1</td>
            <td>39</td>
            <td>19,5</td>
          </tr>
          <tr>
            <td>Rinna kõrgus</td>
            <td>Rk</td>
            <td>31</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Esiosa pikkus</td>
            <td>Ep</td>
            <td>48</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Rinna laius</td>
            <td>Rl</td>
            <td>31</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Rinna kõrgemate punktide vahe</td>
            <td>Rkpv</td>
            <td>18</td>
            <td>-</td>
            <td>-</td>
            <td>9</td>
          </tr>
          <tr>
            <td>Tasakaalumõõt</td>
            <td>TM</td>
            <td>48/79/95</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Õla pikkus</td>
            <td>Õp</td>
            <td>13</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Varruka pikkus</td>
            <td>Vp</td>
            <td>69</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Käsivarre ümbermõõt</td>
            <td>Kvü</td>
            <td>31</td>
            <td>6</td>
            <td>37</td>
            <td>18,5</td>
          </tr>
          <tr>
            <td>Randme ümbermõõt</td>
            <td>Rndü</td>
            <td>15,5</td>
            <td>6</td>
            <td>21,5</td>
            <td>10,75</td>
          </tr>
          <tr>
            <td>Rinna sissevõte</td>
            <td>Rsv</td>
            <td>8,1</td>
            <td>-0,1</td>
            <td>8</td>
            <td>-</td>
          </tr>
        </table>
      </div>
      <p class="first-table-remark">Kehamõõdud ja lisad [Autori koostatud]</p>
      <div class="table-container">
        <table>
          <tr>
            <th>Mõõdu nimetus</th>
            <th>Mõõdu tähis</th>
            <th>Valem</th>
            <th>Mõõt cm-tes</th>
          </tr>
          <tr>
            <td>Selja/esiosa kaelakaare laius</td>
            <td>Skkl/Ekkl</td>
            <td>Kü/5-1</td>
            <td>6,8</td>
          </tr>
          <tr>
            <td>Esiosa kaelakaare sügavus</td>
            <td>Ekks</td>
            <td>Kü/5+0,5</td>
            <td>8,3</td>
          </tr>
          <tr>
            <td>Käeaugukaare laius</td>
            <td>Käekl</td>
            <td>1/2Rül/4-1,75</td>
            <td>11</td>
          </tr>
          <tr>
            <td>Varrukakaare kõrgus</td>
            <td>Vkk</td>
            <td>Käekl/3</td>
            <td>14,5</td>
          </tr>
          <tr>
            <td>Seelikuosa vöö ümbermõõt</td>
            <td>-</td>
            <td>(Vü+lisa)*0,32</td>
            <td>15,5</td>
          </tr>
          <tr>
            <td>½ Rinna laius</td>
            <td>1/2Rl</td>
            <td>1/2Rül-1/2Sll-Käekl</td>
            <td>20,5</td>
          </tr>
          <tr>
            <td>Käeaugukaare pikkus (põhikonstruktsioonilt mõõdetud)</td>
            <td>Käekp</td>
            <td>-</td>
            <td>43,5</td>
          </tr>
        </table>
      </div>
      <p>Arvutuslikud mõõdud [Autori koostatud]</p>
    </section>

    <section id="tehnilineJoonis" class="section-wh">
      <div class="heading">
        <h2>5. Tehniline Joonis</h2>
      </div>
      <div class="gallery">
        <img
          :src="require('@/assets/tehniline-joonis/pilt.jpg')"
          alt="Tehniline joonis"
        />
      </div>
    </section>

    <section id="läbilõikeskeemid" class="section-gr">
      <div class="heading">
        <h2>6. Läbilõikeskeemid</h2>
      </div>
      <div class="gallery">
        <img
          :src="require('@/assets/läbilõike-joonised/pilt.jpg')"
          alt="Läbilõikeskeemid"
        />
      </div>
    </section>

    <section id="konstrueerimine" class="section-wh">
      <div class="heading">
        <h2 class="heading-ft-sub">7. Konstrueerimine</h2>
        <p>Konstrueerimisel on kasutatud Põhjamaade süsteemi</p>
      </div>
      <div class="special-gallery">
        <img
          :src="require('@/assets/konstrueerimine/pilt1.jpg')"
          alt="Konstrueermine"
          class="white-img"
        />
        <img
          :src="require('@/assets/konstrueerimine/pilt2.jpg')"
          alt="Konstrueermine"
          class="white-img rotate-img"
        />
        <img
          :src="require('@/assets/konstrueerimine/pilt3.jpg')"
          alt="Konstrueermine"
          class="white-img"
        />
      </div>
    </section>

    <section id="modelleerimine" class="section-gr">
      <div class="heading">
        <h2>8. Modelleerimine</h2>
      </div>
      <div class="gallery">
        <img
          :src="require('@/assets/modelleerimine/pilt1.jpg')"
          alt="Modelleerimine"
        />
        <img
          :src="require('@/assets/modelleerimine/pilt2.jpg')"
          alt="Modelleerimine"
        />
      </div>
    </section>

    <section id="tehnoloogilineJärjestus" class="section-wh">
      <div class="heading">
        <h2>9. Tehnoloogiline Järjestus</h2>
      </div>
      <div class="list">
        <div class="sub-heading">
          <h3>9.1 Ettevalmistused esimeseks prooviks</h3>
        </div>
        <ol>
          <li>Kanga dekateerimine</li>
          <li>Põhilõike konstrueerimine</li>
          <li>Lõigete modelleerimine</li>
          <li>Lõigete paigutamine kangale</li>
          <li>Õmblusvarude lisamine</li>
          <li>Detailide välja lõikamine</li>
          <li>Vööjoone vahedetailide paigutamine liimiriidele</li>
          <li>Liimiriidest detailide välja lõikamine</li>
          <li>Vööjoone vahedetailide dubleerimine</li>
          <li>
            Esi- ja seljadetailide alumiste servade, seeliku vööjoone ning
            varruka varrukakaare krookimine
          </li>
          <li>Detailide kokku traageldamine</li>
        </ol>
      </div>

      <div class="list">
        <div class="sub-heading">
          <h3>9.2 Esimene proov ja prooviparandused</h3>
        </div>
        <ol>
          <li>Tasakaalu kontrollimine</li>
          <li>Kaeluse kuju märkimine</li>
          <li>Varruka kinnitamine nõeltega käeaugukaarele</li>
          <li>Varruka pikkuse märkimine</li>
          <li>Käeaugukaare õmblusjoone märkimine</li>
        </ol>
      </div>
      <div class="gallery">
        <img
          :src="require('@/assets/esimene-proov/pilt1.jpeg')"
          alt="Esimene Proov"
        />
        <img
          :src="require('@/assets/esimene-proov/pilt2.jpeg')"
          alt="Esimene Proov"
        />
        <img
          :src="require('@/assets/esimene-proov/pilt3.jpeg')"
          alt="Esimene Proov"
        />
      </div>

      <div class="list">
        <div class="sub-heading">
          <h3>9.3 Ettevalmistused teiseks prooviks</h3>
        </div>
        <ol>
          <li>Varrukale ja käeaugukaarele vastasmärkide märkimine</li>
          <li>Vastasmärkide kopeerimine teisele varrukale ja käeaugukaarele</li>
          <li>Õmblusvarude parajaks mõõtmine ja lõikamine</li>
          <li>Varrukate lühemaks lõikamine</li>
          <li>Voodrist vööjoone vahedetaili paigutamine liimiriidele</li>
          <li>Detailide välja lõikamine</li>
          <li>Voodrist vööjoone vahedetailide dubleerimine</li>
          <li>
            Vahedetailide ühendamine esidetailiga, seljadetailiga ja
            seelikudetailidega
          </li>
          <li>Pressimine</li>
          <li>Voodrist vahedetailide ühendamine tootega</li>
          <li>Pressimine</li>
          <li>
            Vasaku küljeõmbluse servale liimiriide dubleerimine peitluku kohale
          </li>
          <li>
            Küljeõmbluste, õlaõmbluste ja varrukate küljeõmbluste äärestamine
          </li>
          <li>Pressimine</li>
          <li>
            Parema küljeõmbluse, õlaõmbluse, varrukate ühendusõmbluste õmblemine
          </li>
          <li>Lahku pressimine</li>
          <li>Kaelakaare tugevdamine liimipaelaga</li>
          <li>Lõikekohase kandi väljalõikamine täpsustatud kaelakaare järgi</li>
          <li>Liimiriidele kandi paigutamine ja välja lõikamine</li>
          <li>Kandi dubleerimine</li>
          <li>Kaelakaare töötlemine lõikekohase kandiga</li>
          <li>Vasaku küljeõmbluse õmblemine</li>
          <li>Peitluku kinnitamine</li>
          <li>Pressimine</li>
          <li>Varrukate traageldamine käeaugukaarele</li>
        </ol>
      </div>

      <div class="list">
        <div class="sub-heading">
          <h3>9.4 Teine proov ja prooviparandused</h3>
        </div>
        <ol>
          <li>Käeaugukaare süvenduse märkimine</li>
          <li>Kaelakaare kuju muutmine</li>
          <li>Allääre märkimine</li>
        </ol>
      </div>
      <div class="gallery">
        <img
          :src="require('@/assets/teine-proov/pilt1.jpeg')"
          alt="Teine Proov"
        />
        <img
          :src="require('@/assets/teine-proov/pilt2.jpeg')"
          alt="Teine Proov"
        />
        <img
          :src="require('@/assets/teine-proov/pilt3.jpeg')"
          alt="Teine Proov"
        />
        <img
          :src="require('@/assets/teine-proov/pilt4.jpeg')"
          alt="Teine Proov"
        />
      </div>

      <div class="list">
        <div class="sub-heading">
          <h3>9.5 Ettevalmistused kolmandaks prooviks</h3>
        </div>
        <ol>
          <li>Kaelakaare prooviparanduste sisse viimine</li>
          <li>Käeaugukaarte süvendamine</li>
          <li>Varrukate traageldamine käeaugukaartele</li>
          <li>Varrukate õmblemine käeaugukaartele</li>
          <li>Õmblusvarude tasandamine</li>
          <li>Äärestamine</li>
          <li>Pressimine</li>
          <li>Prantsuse õmblusega varrukate alläärte töötlemine</li>
          <li>Kleidi allääre töötlemine</li>
          <li>Toote niitidest puhastamine</li>
          <li>Lõpppressimine</li>
          <li>Toote kontrollimine</li>
          <li>Tellijale toote üleandmine</li>
        </ol>
      </div>
    </section>

    <section id="õmblusseadmeteTutvustus" class="section-gr">
      <div class="heading">
        <h2>10. Õmblusseadmete tutvustus</h2>
      </div>
      <div class="table-container">
        <table>
          <tr>
            <th>Seadme nimetus</th>
            <th>Seadme mark</th>
            <th>Nõela mark ja number</th>
          </tr>
          <tr>
            <td>Õmblusmasin</td>
            <td>Brother DB2-B755-5A</td>
            <td>
              DP x 5 <br />
              number 80
            </td>
          </tr>
          <tr>
            <td>Äärestusmasin</td>
            <td>Brother MA4-N31</td>
            <td>
              DC x 27 <br />
              number 80
            </td>
          </tr>
        </table>
      </div>
    </section>

    <section id="lõigeteSpetsifiktsioon" class="section-wh">
      <div class="heading">
        <h2>11. Lõigetest spetsifiktsioonid</h2>
      </div>
      <div class="table-container">
        <table>
          <tr>
            <th>Detaili nimetus</th>
            <th>Lõigete arv</th>
            <th>Põhikangas</th>
            <th>Liimiriie</th>
          </tr>
          <tr>
            <td>Ülemine esiosa</td>
            <td>1</td>
            <td>1</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Ülemine seljaosa</td>
            <td>1</td>
            <td>1</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Seeliku esiosa</td>
            <td>1</td>
            <td>1</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Seeliku seljaosa</td>
            <td>1</td>
            <td>1</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Varrukas</td>
            <td>1</td>
            <td>2</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Esiosa vahetükk</td>
            <td>1</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Seljaosa vahetükk</td>
            <td>1</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Esiosa kaelakaare lõikekohane kant</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Seljaosa kaelakaare lõikekohane kant</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </table>
      </div>
    </section>

    <section id="paigutusKangale" class="section-gr">
      <div class="heading">
        <h2>12. Paigutus kangale</h2>
      </div>
      <div class="gallery">
        <img
          :src="require('@/assets/paigutus-kangale/pilt1.jpeg')"
          alt="Paigutus kangale"
        />
        <img
          :src="require('@/assets/paigutus-kangale/pilt2.jpeg')"
          alt="Paigutus kangale"
        />
        <img
          :src="require('@/assets/paigutus-kangale/pilt3.jpeg')"
          alt="Paigutus kangale"
        />
      </div>
      <p>Põhikangas: kanga kulu 255cm x 150cm</p>
      <div class="gallery">
        <img
          :src="require('@/assets/paigutus-kangale/pilt4.jpeg')"
          alt="Paigutus kangale"
        />
        <img
          :src="require('@/assets/paigutus-kangale/pilt5.jpeg')"
          alt="Paigutus kangale"
        />
        <img
          :src="require('@/assets/paigutus-kangale/pilt6.jpeg')"
          alt="Paigutus kangale"
        />
      </div>
      <p>Liimiriie: kanga kulu 70cm x 95cm</p>
    </section>

    <section id="kalkulatsioon" class="section-wh">
      <div class="heading">
        <h2>13. Kalkulatsioon</h2>
      </div>
      <div class="kalk-text tellija">
        <p>Tellija: Kersti Kask</p>
        <p>Tel. +372 5789 8998</p>
        <p class="tel-nimetus">Tellimuse nimetus: Kleit</p>
      </div>
      <div class="table-container no-shadow">
        <table>
          <tr>
            <th>Materjal/õmblusteenus</th>
            <th>Kogus</th>
            <th>Ühiku hind</th>
            <th>Kokku(€)</th>
          </tr>
          <tr>
            <td>Põhimaterjal</td>
            <td>2,55 m</td>
            <td>11,90 €/m</td>
            <td>30,35</td>
          </tr>
          <tr>
            <td>Peitlukk</td>
            <td>1</td>
            <td>1,20 €</td>
            <td>1,20</td>
          </tr>
          <tr>
            <td>Liimiriie</td>
            <td>0,70 m</td>
            <td>5 €/m</td>
            <td>3,50</td>
          </tr>
          <tr>
            <td>Õmblusteenus</td>
            <td>1</td>
            <td>20,00 €</td>
            <td>20,00</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Kokku:</td>
            <td>50,05</td>
          </tr>
        </table>
        <div class="maksu-text">
          <p>Ei ole käibemaksukohuslane</p>
        </div>
      </div>
      <div class="kalk-text allkiri-text">
        <p>Tellimuse valmimise tähtaeg: 31.05.2022</p>
        <p>Tellimuse valmistaja: Antonina Niinepuu</p>
        <p>Tellija allkiri vormistamisel: Kersti Kask</p>
        <p>Tellija allkiri tellimustöö kätte saamisel: Kersti Kask</p>
      </div>
    </section>

    <section id="eneseanalüüs" class="section-gr">
      <div class="heading">
        <h2>14. Eneseanalüüs</h2>
      </div>
      <div>
        <p>
          Olen valmis tootega enam kui rahul. Kleit on stiilne ja näeb naiselik
          välja. Töökäigus sain kõigi raskustega hakkama. Õppisin prantsuse
          õmblust ning enda aja planeerimist. Minu tugev oskus on täpsus ning
          just see aitas saavutada sellist tulemust. Äärestamine ja kroogete
          paigutus oli kõige nauditavam, kuna see oli rahustav, kuid see nõudis
          palju keskendumist. Tulevikus on täpsus ja sihikindlus minu portfelli
          kaalukaim osa.
        </p>
      </div>
    </section>

    <section id="valmistoode" class="section-wh">
      <div class="heading">
        <h2>15. Valmistoode</h2>
      </div>
      <div class="gallery">
        <img
          :src="require('@/assets/lõpupildid/eest.jpg')"
          alt="Paigutus kangale"
        />
        <img
          :src="require('@/assets/lõpupildid/küljelt.jpg')"
          alt="Paigutus kangale"
        />
        <img
          :src="require('@/assets/lõpupildid/varrukas.jpg')"
          alt="Paigutus kangale"
        />
        <img
          :src="require('@/assets/lõpupildid/tagant.jpg')"
          alt="Paigutus kangale"
        />
      </div>
    </section>
  </main>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "../layouts/TheHeader.vue";
import TheFooter from "../layouts/TheFooter.vue";
import TheScrollBtns from "../layouts/TheScrollBtns.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    TheScrollBtns,
  },
};
</script>

<style scoped>
section {
  width: 100%;
  height: max-content;
  display: flex;
  place-content: center;
  padding: 35px 25px;
}

p {
  font-size: 18px;
}

img {
  object-fit: cover;
}

.white-img {
  box-shadow: 0 0 1px 0 black;
}

.rotate-img {
  transform: rotate(90deg);
}

.heading {
  text-align: center;
  margin-bottom: 15px;
}

.heading-ft-sub {
  margin-bottom: 5px;
}

.sub-heading {
  margin-bottom: 10px;
}

.gallery {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.special-gallery {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 75px;
}

.gallery img,
.special-gallery img {
  width: 330px;
}

.scroll-buttons-container {
  display: none;
}

/* Moejoonis */
.moejoonis {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.moejoonis-img {
  object-fit: cover;
  width: 330px;
}

.kangad .img-container {
  margin-bottom: 10px;
}

.kirjeldus {
  width: 100%;
  text-align: center;
}

/* Moekirjeldus */
.moekirjeldus {
  text-align: center;
}

/* Table */
.table-container {
  width: 100%;
  overflow: auto;
  box-shadow: 0 0 2px 0 black;
  margin-bottom: 10px;
}

table {
  border-collapse: collapse;
  text-align: center;
}

.first-table-remark {
  margin-bottom: 50px;
}

table,
td,
th {
  border: 1px solid black;
}

th,
td {
  padding: 6px 20px;
}

#õmblusseadmeteTutvustus th,
#õmblusseadmeteTutvustus td {
  padding: 6px 35px;
}

/* Tehnoloogiline järjestus */
li {
  margin-bottom: 10px;
  margin-left: 10px;
}

.list {
  margin-bottom: 10px;
  width: 100%;
}

#tehnoloogilineJärjestus .gallery {
  margin-bottom: 20px;
}

/* Paigutus Kangale */
#paigutusKangale p {
  margin: 10px 0 20px 0;
  text-align: center;
}

/* Kalkulatsioon */
.no-shadow {
  box-shadow: none;
  width: auto;
  margin-bottom: 30px;
}

.maksu-text {
  text-align: right;
}

.kalk-text {
  text-align: left;
  width: 100%;
}

.tellija p:nth-child(odd) {
  margin-bottom: 10px;
}

.tellija p:nth-child(2) {
  margin-bottom: 40px;
}

.allkiri-text p:nth-child(odd) {
  margin-bottom: 10px;
}

.allkiri-text p:nth-child(2) {
  margin-bottom: 40px;
}

/* Eneseanalüüs */
#eneseanalüüs div p {
  text-align: center;
}

@media screen and (min-width: 689px) {
  .table-container {
    overflow: unset;
    box-shadow: none;
  }

  table {
    margin: auto;
  }

  .kalk-text {
    width: 516px;
  }
}

@media screen and (min-width: 768px) {
  h3 {
    font-size: 20px;
  }

  p {
    max-width: 600px;
  }

  .paragraph {
    max-width: 650px;
  }

  .moejoonis-img {
    height: 500px;
  }

  .kirjeldus p {
    margin: 0 auto;
  }

  .gallery {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .special-gallery {
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }

  .rotate-img {
    height: 100%;
    width: 100%;
  }

  .list {
    max-width: 600px;
  }

  .header {
    position: fixed;
  }

  section {
    padding: 100px 45px;
  }
}

@media screen and (min-width: 1080px) {
  .header {
    position: unset;
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

  .kirjeldus {
    max-width: 500px;
  }
}
</style>
