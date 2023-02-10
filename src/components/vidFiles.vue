<template>
    <div class="flex flex-col md:flex-row items-center mb-12">

        <div class="flex text-left md:mx-auto md:w-1/2 xl:w-1/2 px-3 lg:px-16 xl:px-12 ">
            <div class="w-full h-100">
                <h1 class="non-opt text-3xl md:text-5xl font-semibold">{{ mode }} Let's create that fancy, and unique UI Design</h1>
                <p class="text-gray-400 text-md font-thin leading-tight py-4">Capture leads, get reports and insights, automate your business,and more from desktop or on the go from your phone. Lets help you create that UI Design with seamless management experience.</p>
                <button class="bg-[#2af352] non-opt animate-bounce mt-6 text-sm uppercase text-[#000000] mb-6 font-semibold px-4 py-2">Get started</button>
            </div>
        </div>
        <div class="md:max-w-md lg:max-w-full mx-2 md:mx-0 md:w-1/2 xl:w-1/2">
            <video ref="videoRef" src=""></video>
        </div>


    </div>
</template>

<script>
export default {
    props: ['mode'],
    name: "vidFiles" ,
    mounted: function () {
        this.$refs.videoRef.src = require("../assets/VID-20221223-WA0026.mp4");
        this.$refs.videoRef.muted = !this.$refs.videoRef.muted;
        this.$refs.videoRef.play();
    }

}
</script>

<style scoped>
* {
    /* border: 1px solid red; */
}
.opt-font {
    font-family: 'JetBrains Mono', monospace;
}

.non-opt {
    font-family: 'Raleway', sans-serif;
}
</style>