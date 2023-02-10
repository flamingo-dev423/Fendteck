
<template>

<!-- eslint-disable -->  

    <div class="w-full h-full text-[#222] bg-[#f7f7f7] " :class="(mode === 'dark') ? 'dark' : 'light'">
        <nav class="
         container
         px-6
         pt-3 pb-0 md:py-8
         mx-auto
         md:flex md:justify-between md:items-center
       ">
            <div class="flex items-center justify-between">
                <router-link to="/">
                    <img src="../assets/20221212_150303_0001.png" class="h-10">
                </router-link>

                <!-- Mobile menu button -->
                <div @click="toggleNav" class="flex md:hidden">
                    <button type="button" class="
               text-[#2af352]
               hover:text-[#13882b]
               focus:outline-none focus:text-gray-400
             ">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <ul :class="showMenu ? 'flex' : 'hidden'" class="
           flex-col
           mt-8
           space-y-4
           md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
         ">
                <li class="text-[#7bbb5e] opt-font hover:text-[#13882b] hover:cursor-pointer">Home</li>
                <a href="#aboutUs">
                    <li class="text-[#7bbb5e] opt-font hover:text-[#13882b] hover:cursor-pointer">About</li>
                </a>
                <a href="#services">
                    <li class="text-[#7bbb5e] opt-font hover:text-[#13882b] hover:cursor-pointer">Services</li>
                </a>
                 <a href="#contactUs">
                     <li class="text-[#7bbb5e] opt-font hover:text-[#13882b] hover:cursor-pointer">Contact Us</li>
                </a>
                <!-- <button @change=""><svg width="18" height="20" viewBox="0 0 24 26" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.3036 25.4767C17.1592 25.4767 20.6805 23.7226 23.0135 20.8482C23.3586 20.423 22.9823 19.8018 22.4489 19.9034C16.3843 21.0584 10.815 16.4085 10.815 10.2865C10.815 6.76004 12.7028 3.51722 15.771 1.77118C16.2439 1.50203 16.125 0.784994 15.5876 0.685726C14.8342 0.546807 14.0697 0.476856 13.3036 0.476742C6.40379 0.476742 0.803642 6.0681 0.803642 12.9767C0.803642 19.8766 6.395 25.4767 13.3036 25.4767Z"
                                fill="white" />
                        </svg>
                    </button> -->
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" @click="toggle" class="sr-only peer">
                    <div
                        class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-[#7bbb5e] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#7bbb5e]">
                    </div>
                </label>
            </ul>
        </nav>

        <!-- header section -->
        <div class=" mx-4 md:mx-24 pt-0 md:pt-8 grid grid-cols-1 md:grid-cols-2 gap-2">
            <div class="flex flex-col mb-12 md:mb-0">
                <h1 class="non-opt text-3xl md:text-5xl mt-20 text-[#7bbb5e] first-line:leading-snug font-semibold">
                    Manage your websites. Simple
                    and better experience.</h1>
                <h1 class="mt-5 non-opt text-xs font-normal text-gray-400">Let's get you a work friendly, re-designed to
                    taste, and a Utility class websites <br> for both your firm and personal use</h1>
                <span class="hidden md:block animate-bounce mt-12 bg-[#2AF352] rounded-full w-fit p-2 ">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.3885 6.2809L14.1004 6.97263C14.4018 7.26553 14.4018 7.73914 14.1004 8.02892L7.86993 14.0862C7.56851 14.3791 7.08111 14.3791 6.7829 14.0862L0.552481 8.03204C0.251061 7.73914 0.251061 7.26552 0.552481 6.97575L1.26435 6.28402C1.56897 5.988 2.06599 5.99424 2.36421 6.29648L6.04217 10.048L6.04217 1.09292C6.04217 0.678505 6.38528 0.345105 6.81176 0.345105L7.83787 0.345105C8.26435 0.345105 8.60745 0.678505 8.60745 1.09292L8.60745 10.048L12.2886 6.29336C12.5868 5.98801 13.0839 5.98177 13.3885 6.2809Z"
                            fill="white" />
                    </svg>
                </span>
            </div>
            <div class="flex flex-col">
                <img src="../assets/hanna.png" alt="">
            </div>
        </div>

        <!-- sub-section -->
        <Cards />

        <!-- content section -->
        <div class="px-6 md:px-16 -mt-24 md:my-12" id="services">
            <h1 class=" non-opt text-3xl md:text-5xl my-12 font-semibold animate-[wiggle_1s_ease-in-out_infinite] ">One
                platform, <br> infinite possibilities <span
                    class="animate-ping relative inline-flex h-3 w-3 rounded-full bg-[#2AF352] opacity-75"></span> </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div v-for="content in contents" :key="content" class="">
                    <div class="flex flex-col">
                        <img :src="content.image" alt="">

                        <h1 class=" text-xl font-semibold non-opt my-4">{{ content.heading }}</h1>
                        <p class="text-gray-400 text-md font-thin leading-tight">{{ content.contains }}</p>
                    </div>
                </div>
            </div>
        </div>


        <!-- about section -->
        <div class="mx-2 md:mx-12 py-24">
            <h1 class="non-opt font-semibold text-3xl md:text-5xl">A Team Made of Experts <span
                    class="animate-ping relative inline-flex h-3 w-3 rounded-full bg-[#2AF352] opacity-75"></span></h1>
            <p class="text-gray-400 text-md font-thin leading-tight py-4">Fentend is an established IT solution firm
                offering unparalleled level of expertise to build you the best IT solutions on the market.</p>

            <div class="mt-8 md:mt-12 flex items-center">
                <div class="flex-none">
                    <img src="../assets/banner-2.jpg" class="md:h-96 md:w-96 h-44 w-44 rounded-md md:mx-0 pr-1">
                </div>
                <div class="grow">
                    <img src="../assets/image-banner.jpg" class="rounded-md">
                </div>
            </div>
        </div>

        <!-- Countdown section -->

        <div>
            <h3 class="text-xl text-center tracking-normal font-light">Take an early discount</h3>
            <Countdown :year="2023" :month="3" :date="2" :hour="29" :minute="34" :second="1" :millisecond="1" />
        </div>

        <!-- Sub-UI section -->
        <div class="mt-6 md:mt-24">
            <vidFiles />
        </div>

        <div class="bg-[#0f0904] px-4 py-12 md:py-24 md:px-12 " id="aboutUs">
            <h1 class="non-opt font-semibold mb-12 text-white text-3xl md:text-5xl">IT Firm, <br> engineered for growth
            </h1>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-24">
                <div class="flex flex-col">
                    <h1 class="text-white non-opt font-semibold text-xl mb-2">Unlimited Creation</h1>
                    <p class="text-gray-100 text-md font-thin leading-tight py-1 md:py-2">Create your websites with a
                        complete suite of advanced functionalities and bring your vision to life.</p>
                </div>
                <div class="flex flex-col">
                    <h1 class="text-white non-opt font-semibold text-xl mb-2">Powerful Infrastructure</h1>
                    <p class="text-gray-100 text-md font-thin leading-tight py-1 md:py-2">Get an enterprise-grade
                        foundation, engineered for your limitless scalability and peace of mind.</p>
                </div>
                <div class="flex flex-col">
                    <h1 class="text-white non-opt font-semibold text-xl mb-2">The place for growth</h1>
                    <p class="text-gray-100 text-md font-thin leading-tight py-1 md:py-2">Convert and scale seamlessly
                        with built-in marketing and business solutions.</p>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 px-4 md:px-12 py-24">
            <div class="flex flex-col col-span-1">
                <h1 class="text-3xl md:text-5xl mb-2 md:mb-0 font-semibold non-opt">Why <span class="text-[#2af352]">
                        Fentend IT Solution </span> is the best choice for you</h1>
            </div>
            <div class="flex flex-col col-span-2">
                <p class="text-gray-400 text-md font-thin leading-tight">
                    When we create a website for you, everything is there to build that unique websites that would grow
                    your business the way you want.
                    <br> <br>
                    Bring more people to your site and convert visitors with a wide range of built-in eCommerce and
                    business solutions like SEO and marketing tools. Plus, you'll always have the support you need with
                    24/7 customer care
                    <br> <br>
                    To keep up with the demand for technical solutions and infrastructure, <span
                        class="text-[#2af352] font-semibold">FENTEND</span> IT solutions has emerged as a practice
                    dominated by vendors that specialize in technology.
                    <br> <br>
                    One of the key reason of using Fendtend IT solution services is the ability to save money, because
                    at Fentend we reduce IT costs by as much as 40 percent.
                </p>
            </div>
        </div>

        <div class="md:px-12 px-4 py-24 bg-[#0f0904]">
            <h1 class="text-white text-3xl md:text-5xl font-semibold non-opt">We're here for you</h1>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-24 mt-12">
                <div class="flex flex-col">
                    <h1 class="text-white text-md font-semibold non-opt">Get Connected</h1>
                    <p class="text-gray-100 text-xs font-thin leading-tight">Let's get connected through our social
                        platforms</p>

                </div>
                <div class="flex flex-col">
                    <h1 class="text-white text-md font-semibold non-opt">Contact us</h1>
                    <p class="text-gray-100 text-xs font-thin leading-tight">Get support by chat or schedule a call with
                        a Customer Care Expert </p>
                </div>
                <div class="flex flex-col">
                    <h1 class="text-white text-md font-semibold non-opt">Hire a pro</h1>
                    <p class="text-gray-100 text-xs font-thin leading-tight">Get help from us from crreation of websites
                        to creation of apps, etc</p>
                </div>
            </div>
        </div>

        <!-- section build -->

        <div class="flex flex-col md:flex-row items-center mt-24 md:mt-0 pb-12">
            <div class="flex text-left md:mx-auto md:w-1/2 xl:w-1/3 px-3 lg:px-16 xl:px-12">
                <div class="w-full h-100">
                    <h1 class="non-opt text-3xl md:text-5xl font-semibold"> Build more than a website</h1>
                    <p class="text-gray-400 text-md font-thin leading-tight py-4">
                        <span class="text-[#2af352] font-semibold pr-2">&dotsquare;</span> 1000's of advanced design
                        capabilities. <br> <br>
                        <span class="text-[#2af352] font-semibold pr-2">&dotsquare;</span> Custom domain, Logo and more
                        brand tools. <br> <br>
                        <span class="text-[#2af352] font-semibold pr-2">&dotsquare;</span> Full-stack web development
                        for custom functionalities and lots more. <br> <br>
                    </p>
                </div>
            </div>

            <div class="md:max-w-md lg:max-w-full mx-2 md:mx-0 md:w-1/2 xl:w-2/3">
                <img src="../assets/webUI.jpg" alt="">
            </div>
        </div>

        <!-- team section -->
        <div class="text-center py-24">
            <h1 class="font-semibold text-4xl md:text-5xl non-opt mb-1">Here are our heroes <span
                    class="animate-ping relative inline-flex h-3 w-3 rounded-full bg-[#2AF352] opacity-75"></span></h1>
            <p class="text-gray-400 text-md font-thin md:mx-80 leading-tight py-4">According to the Stakeholders and our
                respective clients at Fentend, <span class="font-semibold">Raphael, Obafemi, Flamingo community</span> ,
                puts their potentially records maximum. </p>
            <div
                class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 mt-24 lg:grid-cols-4 gap-4 md:gap-24 mx-4 md:mx-24">
                <div v-for="team in teams" :key="team" class="">
                    <div class="flex flex-col justify-content items-center content-center">
                        <img :src="team.teamPicture" alt=""
                            class="hover:animate-bounce rounded-full w-20 h-20 object-cover">
                        <h1 class=" text-xl font-semibold non-opt mt-4">{{ team.teamName }}</h1>
                        <p class="text-gray-400 text-md font-thin leading-tight">{{ team.teamSpecial }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- contact us Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-12 md:py-24" id="contactUs">
            <div class="flex flex-col text-center md:text-left md:ml-48 mt-4">
                <h1 class="text-[#2af352] font-thin non-opt uppercase ">contact us</h1>
                <h2 class="text-3xl tracking-tight non-opt font-semibold">How can i help you ?</h2>
                <p class="font-thin text-md">Fill in the form or drop an email</p>
            </div>
            <div
                class="flex flex-col mt-4 md:mt-0 mx-4 md:mx-0 md:w-4/5 md:relative md:right-24 bg-[#ffffff7e] p-4 non-opt rounded-md shadow ">
                <input type="text" name="name" placeholder="Name"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-md border border-gray-300 focus:ring-[#2af352] focus:border-[#2af352] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#2af352] outline-none dark:focus:border-[#2af352]"
                    autofocus required> <br>
                <input type="email" name="email" placeholder="Email"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-md border border-gray-300 focus:ring-[#2af352] focus:border-[#2af352] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#2af352] outline-none dark:focus:border-[#2af352]"
                    autofocus required><br>
                <input type="text" placeholder="Subject"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-md border border-gray-300 focus:ring-[#2af352] focus:border-[#2af352] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#2af352] outline-none dark:focus:border-[#2af352]"
                    autofocus required><br>
                <textarea name="message" id="message" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 rounded-md border border-gray-300 focus:ring-[#2af352] focus:border-[#2af352] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#2af352] outline-none dark:focus:border-[#2af352]"
                    placeholder="Tell us a bit about the project..."></textarea> <br>
                <button type="submit"
                    class="items-center py-2.5 px-4 text-sm uppercase font-semibold text-center text-white bg-[#2af352] rounded-sm focus:ring-blue-200 dark:focus:blue-900 hover:cursor-pointer">Submit</button>
            </div>
        </div>

        <!-- footer -->
        <div class="mt-10 pb-10 px-6 md:px-0 md:grid md:grid-cols-3 md:gap-3 bg-zinc-800">
            <!-- <p class="text-gray-400 md:pl-16 md:w-96 pt-6 font-thin text-xs md:flex md:flex-col md:col-span-1 md:text-sm lg:text-base tracking-wider leading-tight">Welcome to your one stop IT Solution platform where we make your millenials get to your doorstep. We would love to hear from you.</p> -->
            <h1 class="flex justify-center items-center text-white non-opt font-semibold ">Fentend Market Tech <span>
                    <img src="../assets/20221212_150303_0001.png" alt="" class="h-12 w-12">
                </span></h1>
            <div class="md:flex md:flex-col md:col-span-1 ">
                <h1 class="font-semibold text-md text-white non-opt mt-6">Contact Information</h1>
                <p class="text-xs md:text-sm font-thin text-gray-400 non-opt tracking-wider mt-3">chat with us on
                    Whatsapp : <span class="text-blue-700">+234 (0) 708 136 8874</span></p>
                <p class="text-xs md:text-sm font-thin text-gray-400 non-opt tracking-wider mt-3">Speak to an agent :
                    <span class="text-blue-700">+234 (0) 708 136 8874</span></p>
                <p class="text-xs md:text-sm font-thin text-gray-400 non-opt tracking-wider mt-3">Need our support :
                    <span class="text-blue-700">+234 (0) 708 136 8874</span></p>
            </div>
            <div class="md:flex md:flex-col md:col-span-1 ">
                <h1 class="font-semibold text-md non-opt text-white mt-6">Useful Links</h1>
                <div class="flex flex-col py-3">
                    <a href="/about"
                        class="text-xs md:text-sm font-thin text-gray-400 tracking-wider non-opt mb-3">About Us</a>
                    <a href="/virtual"
                        class="text-xs md:text-sm font-thin text-gray-400 tracking-wider non-opt">Services</a>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import { ref } from 'vue';
import Countdown from '@/components/Countdown.vue'
import Cards from '@/components/CardName.vue'
import vidFiles from '@/components/vidFiles.vue'
// import { useDark, useToggle } from '@vueuse/core';


// const isDark = useDark();
// const toggleDark = useToggle(isDark);

export default {
    name: "homeview",
    components: {
        Countdown,
        Cards,
        vidFiles,
    },
    setup() {
        let showMenu = ref(false);
        const toggleNav = () => (showMenu.value = !showMenu.value);
        return { showMenu, toggleNav };
    },
    data: function () {
        return {
            mode: 'dark',
            contents: [
                {
                    id: "1",
                    image: require("../assets/e-commerce.png"),
                    heading: "eCommerce",
                    contains: "Sell online and manage your business with powerful eCommerce solutions.",
                },
                {
                    id: "2",
                    image: require("../assets/Blog.png"),
                    heading: "Blog",
                    contains: "Create your blog, grow your loyal audience and monetize your content.",
                },
                {
                    id: "3",
                    image: require("../assets/Scheduling.png"),
                    heading: "Scheduling Software",
                    contains: "Offers your services and delivers a seamless booking experience for your clients.",
                },
                {
                    id: "4",
                    image: require("../assets/Portfolio.png"),
                    heading: "Portfolio",
                    contains: "Increase your visibility and attract new clients with your work.",
                },
                {
                    id: "5",
                    image: require("../assets/Domain.png"),
                    heading: "Domain and Hosting",
                    contains: "Get scalable free web hosting when you create your website with us and connect a professional domain name.",
                },
                {
                    id: "6",
                    image: require("../assets/Branding.png"),
                    heading: "Branding Tools",
                    contains: "Establish strong brand identity with a customizable logo, color and text themes, and more at FENTEND.",
                },
            ],

            teams: [
                {
                    teamPicture: require("../assets/icon-header.png"),
                    teamName: "Flamingo Dev.",
                    teamSpecial: "Vue Js Developer | UI Designer",
                },
                {
                    teamPicture: require("../assets/img-2.jpg"),
                    teamName: "Obafemi Oloruntoba",
                    teamSpecial: "Strategist",
                },
                {
                    teamPicture: require("../assets/img-1.jpg"),
                    teamName: "Raphael Douglas",
                    teamSpecial: "Content Creator",
                },
                {
                    teamPicture: require("../assets/Rectangle.png"),
                    teamName: "Raphaella Lynn",
                    teamSpecial: "UI|UX Designer",
                },
            ]
        }
    },
    methods: {
        toggle() {
            if (this.mode === "dark") {
                this.mode = "light"
            } else {
                this.mode = "dark"
            }
        }
    },
};
</script>

<style scoped>
.opt-font {
    font-family: 'JetBrains Mono', monospace;
}

.non-opt {
    font-family: 'Raleway', sans-serif;
}

.dark {
    background: #222;
    color: #f3f3f3;
}

/* .toggle {
    width: 60px;
    height: 34px;
}
.toggler {
    position: absolute;
    cursor: pointer;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #152020;
    -webkit-transition: 0.4s;
    transition: 0.4s;
} */
</style>


<!--
  



-->