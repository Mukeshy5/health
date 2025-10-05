import React from 'react'

const Slider = () => {

    const slider = document.getElementById("slider");
    const slides = slider ? slider.children.length : 0;
    let index = 0;

    function showSlide() {
      slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      index = (index + 1) % slides;
      showSlide();
    }

    function prevSlide() {
      index = (index - 1 + slides) % slides;
      showSlide();
    }

    // Auto Slide (Optional)
    setInterval(nextSlide, 4000);
  

  return (
    <>
        <div class="relative w-full max-w-8xl overflow-hidden rounded-lg h-80 shadow-lg">

    {/* <!-- Slides --> */}
    <div id="slider" class="flex transition-transform duration-700">
      <img src="https://picsum.photos/id/1018/800/400" class="w-full flex-shrink-0" alt="Slide 1" />
      <img src="https://picsum.photos/id/1015/800/400" class="w-full flex-shrink-0" alt="Slide 2" />
      <img src="https://picsum.photos/id/1019/800/400" class="w-full flex-shrink-0" alt="Slide 3" />
    </div>

    {/* <!-- Navigation Buttons --> */}
    <button onclick="prevSlide()" class="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full">
      &#10094;
    </button>
    <button onclick="nextSlide()" class="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full">
      &#10095;
    </button>
  </div>
    </>
  )
}

export default Slider