<template>
  <div>
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <h3 class="text-center text-white mt-3">ENTERTAINMENT</h3>
        <p class="text-center mb-3 text-white">
          Have fun and learn other possibilities with touchless
        </p>

        <div v-once class="col-md-6 col-lg-4 mt-5">
          <router-link v-once to="/tictactoe" class="text-decoration-none">
            <div v-once class="card">
              <div class="card-small">
                <img v-once src="@/assets/images/entertainment-1.jpg" alt="" />
                <div v-once class="card-content">
                  <h5 v-once>Tic Tac Toe</h5>
                  <p v-once>
                    A simple tic-tac-toe game using HTML, CSS, and JavaScript.
                  </p>
                </div>
              </div>
              <div v-once class="card-border card-border-feedback "></div>
            </div>
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
