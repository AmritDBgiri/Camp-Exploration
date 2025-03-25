import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      {/* Left Content */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image 
          src="/camp.svg"
          alt="Camping Icon"
          width={50}
          height={50}
          priority
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Embark on breathtaking adventures with us! Discover nature’s untouched beauty and explore the world effortlessly with our all-in-one travel app.
        </p>

        {/* Rating Section */}
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="Star rating"
                width={24}
                height={24}
                loading="lazy"
              />
            ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Download App" 
            variant="btn_green" 
            aria-label="Download the Hilink app"
          />
          <Button 
            type="button" 
            title="How we work?" 
            icon="/play.svg"
            variant="btn_white_text" 
            aria-label="Learn how the app works"
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          {/* Location */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="Close button" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          {/* Distance & Elevation */}
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi (278.77 km)</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2,040 m (6,693 ft)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
