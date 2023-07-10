import arrow from 'assets/icons/downarow.png'
import rightarrow from 'assets/icons/rightarrow.png'
import security from 'assets/images/Security.png'
import analysis from 'assets/images/analysis.png'
import cloud from 'assets/images/cloud.png'

const additionalSolutions = [
    {
        image: security,
        title: 'Security',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat. Donec ac odio tempor orci dapibus ultrices in.',
        link: ''
    },
    {
        image: analysis,
        title: 'Analyst Report',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat. Donec ac odio tempor orci dapibus ultrices in.',
        link: ''
    },
    {
        image: cloud,
        title: 'Cloud Base ',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat. Donec ac odio tempor orci dapibus ultrices in.',
        link: ''
    },
]

const ourModules = ['Inventory', 'HCM', 'CRM', 'Administration', 'Finance', 'Warehouse', 'Fund'];

const Solutions = () => {
    return (
        <main className='container mx-auto min-h-[50vh] p-10'>
            {/* Solutions Section */}
            <section className='space-y-20 py-5'>
                <div className='border-l-2 border-l-relianceRed p-3 text-relianceRed text-2xl font-semibold'>Additional Solutions that support your success</div>
                <div className='flex items-center justify-between gap-10'>
                    {
                        additionalSolutions.map((solution, idx) => {
                            return (
                                <div key={idx} className='pb-5 basis-1/3 border rounded-t-xl border-b-8 border-b-relianceRed bg-white'>
                                    <img src={solution.image} alt="" />
                                    <div className='flex items-center flex-col gap-3 p-3'>
                                        <p className='text-3xl text-[#505050]'>{solution.title}</p>
                                        <p className='text-justify font-medium'>
                                            {solution.content}
                                        </p>
                                        <a href="#" className='flex items-center gap-3 text-xl font-medium'>Get Started With Operamadic <img src={rightarrow} alt="" className='w-[15px] mt-1' /> </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            {/* who are we ? */}
            <section className='space-y-20 my-10 py-10 bg-white px-[5vw] shadow-md shadow-black'>
                <div className='border-l-2 border-l-relianceRed p-3 text-relianceRed text-2xl font-semibold'>Who are we?</div>
                <div className='w-2/5 flex flex-col items-center gap-5'>
                    <h2 className='text-relianceRed text-2xl font-semibold'> Solution For Your Company </h2>
                    <div className='text-justify font-medium'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat. Donec ac odio tempor orci dapibus ultrices in.
                    </div>
                    <div className='text-justify font-medium'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat. Donec ac odio tempor orci dapibus ultrices in.
                    </div>
                    <button className='bg-relianceRed/70 w-3/4 p-2 rounded-md text-white font-light '>Read More</button>
                </div>
            </section>

            {/* A Complete enterprise cloud designed to modernize your business */}
            <section className='border space-y-5 my-10 py-10 px-[5vw]'>
                <div className='border-l-2 border-l-relianceRed p-3 text-relianceRed text-2xl font-semibold'>A Complete enterprise cloud designed to modernize your business</div>
                <div className='border p-1'>
                    <div className='border flex items-center text-xl font-light justify-between p-1'>
                        {
                            ourModules.map((module, idx) => {
                                return (
                                    <p key={idx} className='border flex items-center gap-5 bg-white rounded-lg p-2'>
                                        <span>{module}</span>
                                        <img src={arrow} alt="" />
                                    </p>
                                )
                            })
                        }
                    </div>
                    <div className='p-5 text-justify font-medium bg-white mt-5 rounded-lg space-y-2'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat. Donec ac odio tempor orci dapibus ultrices in. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat. Donec ac odio tempor orci dapibus ultrices in.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat. Donec ac odio tempor orci dapibus ultrices in. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat. Donec ac odio tempor orci dapibus ultrices in.
                        </p>

                    </div>

                </div>
            </section>
        </main>
    )
}

export default Solutions