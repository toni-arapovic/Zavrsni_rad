<template>
  <footer class="text-white text-center text-lg-start bg-dark">
    <div class="container p-4">
      <div class="row mt-4">
        <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4">About</h5>
          <ul>
            <li class="mb-3">
              88000 Mostar
            </li>
            <li class="mb-3">
              info@zavrsnirad.xyz
            </li>
            <li class="mb-3">
              +387 63 123 456
            </li>
            <li>
              <router-link class="text-white" to="/kontakt">Postavite nam pitanje</router-link>
            </li>
          </ul> 
        </div>
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          
        </div>
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-4">Radno vrijeme</h5>
          <table class="table text-center text-white">
            <tbody class="fw-normal">
              <tr>
                <td>Ponedjelak - Petak:</td>
                <td>8:00 - 16:00</td>
              </tr>
              <tr>
                <td>Subota:</td>
                <td>8:00 - 12:00</td>
              </tr>
              <tr>
                <td>Nedjelja</td>
                <td>Neradni</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
ul {
list-style-type: none;
}
</style>