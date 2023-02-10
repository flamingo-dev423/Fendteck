<template>
    <div v-if="loaded" class="pb-12">
     <section class="text-3xl flex justify-center content-center flex-col mx-auto text-center">
     <h5 v-if="!expired" class="text-[#2af352] font-semibold animate-pulse text-4xl md:text-5xl non-opt mb-4">20% Discounted Rate</h5>    
     <h5 v-else class="text-white font-semibold">Offer is off the chart</h5>    
     </section>
         <section class="flex text-4xl sm:text-5xl md:text-6xl mt-3 justify-center content-center">
             <div class="days rounded-md border-2 non-opt px-2 py-3 mr-2 relative">{{ mode }}
                 {{ displayDays }}
                 <div class="label text-sm absolute -bottom-5 non-opt capitalize">days</div>
             </div>
             <span class="leading-none text-white">:</span>
             <div class="hours rounded-md border-2 non-opt px-2 py-3 mx-2 relative">{{ mode }}
                 {{ displayHours }}
                 <div class="label text-sm absolute -bottom-5 non-opt capitalize">hours</div>
             </div>
 
             <span class="leading-none text-white">:</span>
             <div class="minutes rounded-md border-2 non-opt  px-2 py-3 mx-2 relative">{{ mode }}
                 {{ displayMinutes }}
                 <div class="label text-sm absolute -bottom-5 non-opt capitalize">minutes</div>
                 </div>
 
                 <span class="leading-none text-white">:</span>
                 <div class="seconds rounded-md non-opt  border-2 px-2 py-3 ml-2 relative">{{ mode }}
                     <div>{{ displaySeconds }}</div>
                     <div class="label text-sm absolute non-opt -bottom-5 capitalize">seconds</div>
                 </div>
     </section>
     <button class="bg-[#2af352] text-md font-semibold non-opt animate-bounce flex justify-center flex-col mx-auto mt-24 px-4 py-2 content-center text-center">Connect Now</button>
    </div>
 </template>
 
 <script>
     export default {
        name: "vidFiles",
         props: ['year', 'month', 'date', 'hour', 'minute', 'second', 'millisecond', 'mode'],
         data: () => ({
             displayDays: 0,
             displayHours: 0,
             displayMinutes: 0,
             displaySeconds: 0,
             loaded: false,
             expired: false
         }),
         computed: {
             _seconds: () => 1000,
             _minutes(){
                 return this._seconds * 60;
             },
             _hours() {
                 return this._minutes * 60;
             },
             _days() {
                 return this._hours * 24;
             },
             end() {
                 return new Date(
                     this.year,
                     this.month,
                     this.date,
                     this.hour,
                     this.minute,
                     this.second,
                     this.millisecond
                 );
             }
         },
         mounted() {
             this.showRemainingTime();
         },
         methods: {
             formatNum: num => (num < 10 ? '0' + num : num),
 
             showRemainingTime(){
                 const timer = setInterval(() => {
                     const now = new Date();
                     // const end = new Date(2023, 1, 2, 20, 1, 1, 1);
                     const distance = this.end.getTime() - now.getTime();
 
                     if (distance < 0 ) {
                         clearInterval(timer);
                         this.expired = true;
                         this.loaded = true;
                         return
                     }
 
                     const days = Math.floor((distance / this._days));
                     const hours = Math.floor((distance % this._days) / this._hours);
                     const minutes = Math.floor((distance % this._hours) / this._minutes);
                     const seconds = Math.floor((distance % this._minutes) / this._seconds)
                 this.displayMinutes = this.formatNum(minutes);
                 this.displaySeconds = this.formatNum(seconds);
                 this.displayHours = this.formatNum(hours);
                 this.displayDays = this.formatNum(days);
                 this.loaded = true;
                 }, 1000);
             }
         }
 
         
     };
 </script>
 
 <style scoped>
 .opt-font {
     font-family: 'JetBrains Mono', monospace;
 }
 
 .non-opt {
     font-family: 'Raleway', sans-serif;
 }
 
 /* .seconds {
     max-width: 60px;
 } */
 </style>
 