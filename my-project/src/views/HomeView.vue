<template lang="">
  <div>
      <br>
      <br>
      
<div class="relative overflow-hidden bg-white">
  <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
    <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
      <div class="sm:max-w-lg">
        <h1 class="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Summer styles are finally here</h1>
        <p class="mt-4 text-xl text-gray-500">This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.</p>
      </div>
      <div>
        <div class="mt-10">
          <!-- Decorative image grid -->
          <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
            <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
              <div class="flex items-center space-x-6 lg:space-x-8">
                <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                    <img src="https://salesianspectatororg.files.wordpress.com/2022/02/world-cup.jpeg?w=1920" alt="" class="h-full w-full object-cover object-center" />
                  </div>
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://digitalhub.fifa.com/m/3821fe54d69cdf26/original/j5imrrf3rwgbmcgo2nny-jpg.jpg" alt="" class="h-full w-full object-cover object-center" />
                  </div>
                </div>
                <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://i.guim.co.uk/img/media/8a298a9afad5f5189a446f52dfecd582978b1dd0/0_128_6000_3600/master/6000.jpg?width=1200&quality=85&auto=format&fit=max&s=72dfde6922ab1d79a9ca7d373d207f2f" alt="" class="h-full w-full object-cover object-center" />
                  </div>
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://s.abcnews.com/images/Sports/AP_world_cup_fans_columbia_jt_140614_23x15_1600.jpg" alt="" class="h-full w-full object-cover object-center" />
                  </div>
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://img.fcbayern.com/image/upload/t_cms-6x9-seo/v1648824264/cms/public/images/fcbayern-com/homepage/saison-21-22/Profis/Nationalmannschaft/220401_Auslosung_16x9.jpg" alt="" class="h-full w-full object-cover object-center" />
                  </div>
                </div>
                <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://cdn.vox-cdn.com/thumbor/A18fn1Oq8vwZZfQwClh81XCGmis=/0x0:5472x3648/1200x800/filters:focal(2228x1899:3102x2773)/cdn.vox-cdn.com/uploads/chorus_image/image/71733716/GettyImages_1245480500.0.jpeg" alt="" class="h-full w-full object-cover object-center" />
                  </div>
                  <div class="h-64 w-44 overflow-hidden rounded-lg">
                    <img src="https://netstorage-sportsbrief.akamaized.net/images/27f9d04413844324.jpg" alt="" class="h-full w-full object-cover object-center" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      <br>
      <br>

      <div class="overflow-hidden bg-white py-24 sm:py-32">
   <div class="mx-auto max-w-7xl px-4 lg:px-0">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-1 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div class="lg:pr-8 lg:pt-4">
        <div class="lg:max-w-lg">
          <h2 class="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-1900 sm:text-4xl">A better workflow</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis rationeLorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione Lorem ipsum, dolor sit amt .</p>
          <dl class="mt-10 max-w-xl space-y-8 text-base leading- text-gray-600 lg:max-w-none">
            <div v-for="feature in features" :key="feature.name" class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <component :is="feature.icon" class="absolute top-1 left-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                {{ feature.name }}
              </dt>
              {{ ' ' }}
              <dd class="inline">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>
      </div>
      <img src="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1109%2Fsoc_fans%2Dguide%2Dwc_16x9.jpg" alt="Product screenshot" class="w-[47rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[49rem] md:-ml-8 lg:-ml-12" width="2432" height="1442" />
    </div>
  </div>
</div>


<div class="bg-white py-0 sm:py-0">
  <div class="mx-auto max-w-5xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h2 class="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to deploy your app</p>
      <p class="mt-6 text-lg leading-8 text-gray-600">Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.Suspendisse eget egestas a elementum pulvinar et feugiat blandit at Suspendisse eget egestas a elementum pulvinar et feugiat blandit at</p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-14 lg:max-w-4xl">
      <dl class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div v-for="feature in features" :key="feature.name" class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
              <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            {{ feature.name }}
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
        </div>
      </dl>
    </div>
    <div class="relative mt-80 h-80 lg:mt-0">
        <img class="absolute top-0 left-32 w-[45rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/80" src="https://i.guim.co.uk/img/media/07997ef4b4a8988f55789ef616d56117f24ac5d8/0_0_6745_4047/master/6745.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1e789d6e0fb3ed8dc16a48a24b3b5ae5" alt="App screenshot" width="2824" height="1080" />
    </div>
  </div>
</div>

<br><br><br><br><br><br><br><br><br><br><br><br><br>
<br><br><br><br>




      
<div class="bg-white">
  <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-6">
    <div class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
      <svg viewBox="0 0 1024 1024" class="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">GRUPET WORLD CUP 2022</h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <a href="#" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get started</a>
          <a href="#" class="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div class="relative mt-15 h-80 lg:mt-4">
        <img class="absolute top-0 left-16 w-[27rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/80" src="https://pbs.twimg.com/media/FPRlvHeWUBokL7S?format=png&name=4096x4096" alt="App screenshot" width="1824" height="1080" />
      </div>
    </div>
  </div>
</div>




  


      


  </div>
</template>


<script>
// import TeamList from '../components/TeamList.vue'

export default {
  components: {
    // TeamList,
  },
}
</script>
<style lang="">
  
</style>