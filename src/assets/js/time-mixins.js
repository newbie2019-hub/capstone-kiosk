export default {
 data(){
  return {
   time: '',
  }
 },
 mounted() {
   this.setTime()
   setInterval(() => {
    this.setTime()
   }, 5000)
 },
 methods: {
   setTime(){
     const d = new Date()
     var hours = d.getHours();
     var minutes = d.getMinutes();
     var ampm = hours >= 12 ? 'PM' : 'AM';
     hours = hours % 12;
     hours = hours ? hours : 12;
     minutes = minutes < 10 ? '0'+minutes : minutes;
     var strTime = hours + ':' + minutes + ' ' + ampm;
     this.time = strTime;
   }
 }
}