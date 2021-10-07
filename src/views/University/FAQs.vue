<template>
 <div>
   <div class="container">
    <h3 class="text-white text-center mt-3">Frequently Asked Questions</h3>
    <p class="text-white text-center mb-5">Click on the question to show the answer</p>
    <div class="row justify-content-center">
      <div class="col-6">
        <div v-for="(faq, i) in faqs" :key="i">
          <button class="accordion">{{faq.question}}</button>
          <div class="panel">
            <p>{{faq.answer}}</p>
          </div>
        </div>
      </div>
    </div>
   </div>
 </div>
</template>
<script>

import { mapState } from 'vuex'
export default {
  mounted() {
    document.title = 'Touchless Information Kiosk - FAQs'
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  },
  computed: {
    ...mapState('info', ['faqs'])
  }
}
</script>