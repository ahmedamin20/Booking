export default function About() {
  return (
    <section class="flex items-center flex-col bg-stone-100  font-poppins dark:bg-gray-800 ">
      <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div class="flex flex-wrap ">
          <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
            <h2 class="mb-4 text-4xl font-semibold text-blue-500 ">
              {" "}
              منطقة عسير
            </h2>
            <p class="mb-10 text-bold leading-7 text-gray-500 ">
              تقع في جنوب غرب المملكة العربية السعودية وتشتهر بجبالها الخلابة
              ومواقعها الأثرية. يمكنك زيارة مدينة أبها والاستمتاع بجوها المعتدل
              والتجول في سوق عسير التقليدي وزيارة قصر الملكة الراحلة فهد بنت
              عبدالعزيز. كما يمكنك استكشاف متنزهات الحبلة ومنتزهات السودة
              والمنطقة الجبلية في ظهران الجنوب.
            </p>
          </div>
          <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <img
              src="/image1.jpg"
              alt=""
              class="relative z-40 object-cover w-full h-96 rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div class="flex flex-wrap ">
          <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <img
              src="/image2.jpg"
              alt=""
              class="relative z-40 object-cover w-full h-96 rounded-3xl"
            />
          </div>
          <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
            <h2 class="mb-4 text-4xl font-semibold text-blue-500 dark:text-gray-300">
              منطقة نجران
            </h2>
            <p class="mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
              تقع في جنوب غرب المملكة وتشتهر بجمال الصحراء والمواقع التاريخية.
              يمكنك زيارة مدينة نجران واستكشاف القلاع والأسوار التاريخية ومتحف
              نجران الإقليمي. كما يمكنك قضاء وقت ممتع في رحلات السفاري في
              الصحراء والتمتع بالمناظر الطبيعية الخلابة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
