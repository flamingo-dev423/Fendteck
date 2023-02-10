<template>
    <div class=" my-24 grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 md:mx-12">
     <div class=" sm:hidden md:block hidden flex-col hover:animate-bounce shadow rounded-md p-4 max-w-sm w-full">{{ mode }}
         <div class=" flex animate-pulse space-x-4">
             <div class="rounded-full h-10 w-10">
                 <img src="../assets/icon-header.png" alt="">
             </div>
             <div class="flex-1 space-y-6 py-1">
                 <h1 class="h-2 bg-slate-700 rounded-md"></h1>
             
             <div class="space-y-3">
                 <div class="grid grid-cols-3 gap-4">
                     <h1 class="h-2 bg-slate-700 rounded-md col-span-2"></h1>
                     <h1 class="h-2 bg-slate-700 rounded-md col-span-1"></h1>
                 </div>
                 <p class="h-2 bg-slate-700 rounded-md text-xs font-normal "></p>
             </div>
         </div>
         </div>
     </div>

     <div class="sm:hidden md:block hidden flex-col hover:animate-bounce shadow rounded-md p-4 max-w-sm w-full"> {{ mode }}
         <div class="flex animate-pulse space-x-4">
             <div class="rounded-full h-10 w-10">
                 <img src="../assets/icon-header.png" alt="">
             </div>
             <div class="flex-1 space-y-6 py-1">
                 <h1 class="h-2 bg-slate-700 rounded-md"></h1>
             <div class="space-y-3">
                 <div class="grid grid-cols-3 gap-4">
                     <h1 class="h-2 bg-slate-700 rounded-md col-span-2"></h1>
                     <h1 class="h-2 bg-slate-700 rounded-md col-span-1"></h1>
                 </div>
                 <p class="h-2 bg-slate-700 rounded-md text-xs font-normal "></p>
             </div>
         </div>
         </div>
     </div>
     <div class="sm:hidden md:block hidden flex-col hover:animate-bounce shadow rounded-md p-4 max-w-sm w-full">{{ mode }}
         <div class="flex animate-pulse space-x-4">
             <div class="rounded-full h-10 w-10">
                 <img src="../assets/icon-header.png" alt="">
             </div>
             <div class="flex-1 space-y-6 py-1">
                 <h1 class="h-2 bg-slate-700 rounded-md"></h1>                
             <div class="space-y-3">
                 <div class="grid grid-cols-3 gap-4">
                     <h1 class="h-2 bg-slate-700 rounded-md col-span-2"></h1>
                     <h1 class="h-2 bg-slate-700 rounded-md col-span-1"></h1>
                 </div>
                 <p class="h-2 bg-slate-700 rounded-md text-xs font-normal "></p>
             </div>
         </div>
         </div>
     </div>

 </div>
</template>

<script>

export default {
    name: "CardName",

}
</script>

<style  scoped>
* {
/* border: 1px solid red; */
}
</style>