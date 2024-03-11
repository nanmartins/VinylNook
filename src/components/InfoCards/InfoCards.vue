<template>
  <div class="info-cards">

    <div class="infocards-container">
      <div>
        <p class="infocards-content-welcome">Welcome to Vinyl Nook, your haven for exploring the rich world of vinyl albums. At Vinyl Nook, we're passionate about preserving the timeless allure of vinyl records and providing enthusiasts with a platform to delve into the magic of analog sound.</p>
      </div>

      <div class="infocards-content-cards-container">

        <div class="infocards-content-card">
          <div>
            <MissionSvg />
            <h4>Our Mission</h4>
          </div>

          <p>Vinyl Nook was born out of a love for music and a desire to create a space where users can uncover, discover, and rediscover their favorite albums in the purest form. Our mission is simple: to connect music lovers with exceptional vinyl records and foster a community where the joy of vinyl collecting and listening is celebrated.</p>
        </div>

        <div class="infocards-content-card">
          <div>
            <ExploreSvg />
            <h4>Explore, Discover, and Rediscover</h4>
          </div>

          <p>Whether you're a seasoned collector or a newcomer to the vinyl scene, Vinyl Nook is your go-to destination for all things vinyl. Dive into our extensive database of albums pning genres, eras, and artists. From classic rock to jazz, hip-hop to indie, our curated collection offers something for every musical palate.</p>
        </div>

        <div class="infocards-content-card">
          <div>
            <DiscoverSvg />
            <h4>Discover New Gems</h4>
          </div>

          <p>Seeking recommendations for your next vinyl purchase or looking to expand your musical horizons? Let Vinyl Nook be your guide. Our recommendation feature analyzes your listening preferences and suggests handpicked vinyl albums that we believe you'll love. Say goodbye to endless scrolling and hello to your new favorite record.</p>
        </div>

        <div class="infocards-content-card">
          <div>
            <JourneySvg />
            <h4>Start Your Vinyl Journey Today</h4>
          </div>

          <p>Ready to embark on a journey through the enchanting world of vinyl? Join us at Vinyl Nook and immerse yourself in a universe where music comes to life in its purest form. Whether you're seeking to build your collection, explore new genres, or simply bask in the warm, crackling embrace of analog sound, Vinyl Nook is here to accompany you every step of the way.</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import MissionSvg from '@/assets/SVG/MissionSvg.vue'
import ExploreSvg from '@/assets/SVG/ExploreSvg.vue'
import DiscoverSvg from '@/assets/SVG/DiscoverSvg.vue'
import JourneySvg from '@/assets/SVG/JourneySvg.vue'
</script>


<style scoped>

.info-cards {
  width: 100%;
  padding: 0 20px;
}

.infocards-container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background: white;
  width: 100%;
  max-width: 1400px;
  margin: 20px auto;
  margin-top: 30vh;
  padding: 40px 20px;
  z-index: 100;
  border-radius: 2px;
}

.infocards-content-welcome {
  margin: 0 auto;
  font-size: 26px;
  letter-spacing: 1px;
  font-weight: 300;
  padding: 0 30px;
  padding-bottom: 50px;
  font-style: italic;
}

.infocards-content-cards-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.infocards-content-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
  padding: 30px 30px 40px 30px;
  border: 0.5px solid black;
  border-radius: 4px;
}

.infocards-content-card p {
  font-size: 15px;
  letter-spacing: 1.2px;
  font-weight: 300;
}

.infocards-content-card h4 {
  font-size: 22px;
  font-weight: 800;
  padding: 0 10px 10px 10px;
  text-align: center;
}


@media only screen and (max-width: 1100px) {

  .infocards-content-cards-container {
    /* display: grid; */
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 20px;
  }
}


@media only screen and (max-width: 800px) {

  .infocards-content-card h4 {
    font-size: 26px;
  }

  .about {
    padding: 0 12px;
  }

  .infocards-content-welcome {
    font-size: 22px;
  }


  .infocards-container {
    padding: 40px 20px;
    gap: 40px;
  }

  .infocards-content-card {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px 20px 30px 20px;
    background: #ffffff;
    border-radius: 2px;
  }

}


@media only screen and (max-width: 600px) {

  .info-cards {
    width: 100%;
    padding: 0 10px;
  }

  .infocards-container {
    padding: 0 10px 40px 10px;
    margin-top: 20vh;
  }

  .infocards-content-welcome {
    /* margin: 0 auto;
    font-size: 26px;
    letter-spacing: 1px;
    font-weight: 300; */
    padding: 0;
    /* padding-bottom: 50px;
    font-style: italic; */
  }

  .infocards-content-cards-container {
    /* display: grid; */
    grid-template-columns: repeat(1, 1fr);
    margin: 0 20px;
    /* gap: 20px 30px; */
  }
}


@media only screen and (max-width: 300px) {

  .infocards-container {
    margin: 12px auto;
  }

}
</style>
