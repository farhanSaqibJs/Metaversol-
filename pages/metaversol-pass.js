/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className='metaversol-pass-page'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <section className='xl:pt-40 lg:pt-32 md:pt-24 pt-8'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='lg:mb-24 mb-8'>
            <h2 className='xl:text-5xl lg:text-4xl text-3xl font-bold text-white text-center'>
              METAVERSOL PASS
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:gap-12 gap-4 items-center">
            <div>
              <div className='max-w-5xl w-full mx-auto text-center'>
                <p className='text-white lg:text-2xl md:text-xl text-md lg:mb-10 mb-6'>
                  The Expanse is intended to be a free-to-use platform, and no purchases will be required to log in and play with your friends.
                </p>
                <p className='text-white lg:text-2xl md:text-xl text-md lg:mb-10 mb-6'>
                  There will be a paid option in the form of a Metaversol Pass, this pass is not required, but does provide a number of benefits (none of which are designed to make a holder more powerful than a free-to-play player).
                </p>
                <p className='text-white lg:text-2xl md:text-xl text-md lg:mb-10 mb-6'>
                  The Pass will be available January, 2022 and the price is undetermined.
                </p>

                <div className='flex justify-center'>
                  <div className='btn-alpha-wrap relative'>
                    <div className='btn-alpha-blur'>

                    </div>
                    <button className="font-medium btn-alpha">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='xl:pt-40 lg:pt-32 md:pt-24 pt-12'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='lg:mb-24 mb-8'>
            <h2 className='xl:text-5xl lg:text-4xl text-3xl font-bold text-white text-center mb-2'>
              PHASE 1
            </h2>
            <h4 className='max-w-2xl mx-auto xl:text-2xl text-xl text-center  text-purple font-bold te mb-10'>
              First World & Tools
            </h4>
          </div>

          <div className="flex justify-around items-center lg:flex-nowrap flex-wrap lg:flex-row flex-col-reverse  mb-16 lg:gap-12 gap-8">
            <div>
              <div className='max-w-xl text-left w-full '>
                <h4 className='xl:text-2xl text-xl  text-purple font-bold mb-6'>
                  PassCard Transparent Bronze
                </h4>
                <ul className='list-disc ml-4'>
                  <li className='text-white xl:text-xl lg:text-xl md:text-xl text-md lg:mb-2 mb-2'>
                    Shuttles between buildings and worlds.
                  </li>
                  <li className='text-white xl:text-xl lg:text-xl md:text-xl text-md lg:mb-2 mb-2'>
                    Walk the surface of the Expanse and visit different cities.
                  </li>
                  <li className='text-white xl:text-xl lg:text-xl md:text-xl text-md lg:mb-2 mb-2'>
                    In-world, in-theme teleportation devices.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img className='lg:max-w-xl md:max-w-md w-full' src='/assets/images/PassCard_Transparent_Bronze.png' alt='worldBanner' />
            </div>
          </div>

          <div className="flex justify-around items-center lg:flex-nowrap flex-wrap lg:gap-12 gap-4">
            <div>
              <img className='lg:max-w-xl md:max-w-md w-full' src='/assets/images/PassCard_Transparent_Silver.png' alt='NFTImage' />
            </div>
            <div>
              <div className='max-w-xl text-left w-full '>
                <h4 className='xl:text-2xl text-xl  text-purple font-bold mb-6'>
                  PassCard Transparent Silver
                </h4>
                <ul className='list-disc ml-4'>
                  <li className='text-white xl:text-xl lg:text-xl md:text-xl text-md lg:mb-2 mb-2'>
                    Place posters, 3D models, etc., in your personal space!
                  </li>
                  <li className='text-white xl:text-xl lg:text-xl md:text-xl text-md lg:mb-2 mb-2'>
                    Remote viewing tool - show your NFTs off anywhere you go.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-around items-center lg:flex-nowrap flex-wrap lg:flex-row flex-col-reverse  mb-16 lg:gap-12 gap-8">
            <div>
              <div className='max-w-xl text-left w-full '>
                <h4 className='xl:text-2xl text-xl text-purple font-bold mb-6'>
                PassCard_Transparent_Gold
                </h4>
                <ul className='list-disc ml-4'>
                  <li className='text-white xl:text-xl lg:text-xl md:text-xl text-md lg:mb-2 mb-2'>
                    Content Creation Tool — Add assets to and edit your world in whatever way you see fit.
                  </li>
                  <li className='text-white xl:text-xl lg:text-xl md:text-xl text-md lg:mb-2 mb-2'>
                    Character Creation Lab — Upload your custom characters and ensure your animations are compatible with The Expanse!
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img className='lg:max-w-xl md:max-w-md w-full' src='/assets/images/PassCard_Transparent_Gold.png' alt='worldBanner' />
            </div>
          </div>

          <div className="flex justify-around items-center lg:flex-nowrap flex-wrap lg:gap-12 gap-4">
            <div>
              <img className='lg:max-w-xl md:max-w-md w-full' src='/assets/images/PassCard_Transparent_Platinum.png' alt='NFTImage' />
            </div>
            <div>
              <div className='max-w-xl text-left w-full '>
                <h4 className='xl:text-2xl text-xl  text-purple font-bold mb-6'>
                  PassCard_Transparent_Platinum
                </h4>
                <ul className='list-disc ml-4'>
                  <li className='text-white xl:text-xl lg:text-xl md:text-xl text-md lg:mb-2 mb-2'>
                    Place posters, 3D models, etc., in your personal space!
                  </li>
                  <li className='text-white xl:text-xl lg:text-xl md:text-xl text-md lg:mb-2 mb-2'>
                    Remote viewing tool - show your NFTs off anywhere you go.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
