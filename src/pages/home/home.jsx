import Pic1 from './../../supports/assets/pic1.webp'
import Pic2 from './../../supports/assets/pic2.webp'
import Pic3 from './../../supports/assets/pic3.webp'
import Pic4 from './../../supports/assets//iced_drink.webp'
import Pic5 from './../../supports/assets//hot_drink.webp'
import Pic6 from './../../supports/assets//Starbuckimage.webp'
import Pic7 from './../../supports/assets//img.jpg'

export default function Home() {
    return (
        <div className="flex">
            <div className="basis-2/5">
                <div className="sticky h-screen bottom-0 flex justify-center items-center navbar ">
                    <div>
                        <h1 className="my-fs-30 font-bold">
                            Holiday your way 🧣
                        </h1>
                    </div>
                </div>
            </div>
            <div className="basis-3/5">
                {/* Kanan: Section1 */}
                <div className="pl-12 pt-8 mb-6">
                    <h1 className='font-bold'>PURWADHIKA® REWARDS</h1>
                    <div className="pl-2 pt-4 font-semibold text-xl flex">
                        <div className='flex flex-col items-center w-6/12'>
                            <img src={Pic1} alt='Carousel-1' className='w-11/12 rounded-xl' />
                            <p className='pl-3 pt-4'>
                                Let us treat you—earn and redeem Stars for free drinks, food and more.
                            </p>
                        </div>
                        <div className='flex flex-col items-center w-6/12'>
                            <img src={Pic2} alt='Carousel-2' className='w-11/12 rounded-xl' />
                            <p className='pl-3 pt-4'>
                                Customize your order in the app and pick it up when it’s ready.
                            </p>
                        </div>
                        <div className='flex flex-col items-center w-6/12'>
                            <img src={Pic3} alt='Carousel-3' className='w-11/12 rounded-xl' />
                            <p className='pl-3 pt-4'>
                                Stop in on your birthday for a special treat on the house.
                            </p>
                        </div>
                    </div>
                    <button className='my-bg-dark my-light rounded-full px-3 py-1 mt-4 ml-3 font-semibold h-10'>
                        Join now
                    </button>
                    <button className='my-dark rounded-full px-3 py-1 ml-3 font-bold h-10' style={{ border: '1px solid black' }} >
                        Learn more
                    </button>
                </div>
                {/* KANAN: Section2 */}
                <div className='py-10 my-bg-light flex justify-center'>
                    {/* Section2: Card1 */}
                    <div>
                        <div className="block max-w-lg p-3 ml-28 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Answer a few questions to find something new</h5>
                            <div className='border-b my-3' />
                            <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">What type of drink are you looking for?</p>
                            <div className='flex items-center justify-between my-bg-green p-3 rounded-lg'>
                                <div>
                                    <h1 className='my-fs-20 my-secondary font-bold'>
                                        Iced
                                    </h1>
                                    <p className='my-secondary font-semibold'>
                                        Cool off and uplift
                                    </p>
                                </div>
                                <div >
                                    <img src={Pic4} width='60px' height='60px' />
                                </div>
                            </div>
                            <div>
                                <div className='flex  items-center justify-between my-bg-green p-3 rounded-lg mt-3'>
                                    <div>
                                        <h1 className='my-fs-20 my-secondary font-bold '>
                                            Hot
                                        </h1>
                                        <p className='my-secondary font-semibold'>
                                            Warm up and get going
                                        </p>
                                    </div>
                                    <div>
                                        <img src={Pic5} width='50px' height='60px' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 rounded-lg ml-28 block max-w-lg bg-white border border-gray-200 rounded-b-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <img src={Pic6} className=' max-w-screen rounded-t-lg ' />
                            </h5>
                            <div className='p-3'>
                                <p className="font-bold mt-1 my-fs-20 text-gray-700 dark:text-gray-400">Play for your chance to win</p>
                                <p className="font-semibold mt-2 text-gray-700 dark:text-gray-400 "> Starbucks for Life is here. Join Starbucks® Rewards to play for gift cards, drinks and more.</p>
                                <div className='flex flex-col items-center ml-auto'>
                                    <button className='flex my-bg-main my-light rounded-full px-3 py-1 mt-4 ml-3 font-semibold h-10 mr-10 self-end'>
                                        Join now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 rounded-lg ml-28 block max-w-lg bg-white border border-gray-200 rounded-b-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <img src={Pic7} className=' max-w-screen rounded-t-lg ' />
                            </h5>
                            <div className='p-3'>
                                <p className="font-bold mt-1 my-fs-20 text-gray-700 dark:text-gray-400">Play for your chance to win</p>
                                <p className="font-semibold mt-2 text-gray-700 dark:text-gray-400 "> Starbucks for Life is here. Join Starbucks® Rewards to play for gift cards, drinks and more.</p>
                                <div className='flex flex-col items-center ml-auto'>
                                    <button className='my-bg-main my-light rounded-full px-3 py-1 mt-4 ml-3 font-semibold h-10 mr-10 self-end'>
                                        Singin Up + link
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}