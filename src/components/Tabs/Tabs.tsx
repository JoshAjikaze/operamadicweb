import { useState } from 'react'
import { Tab } from '@headlessui/react'
import manufacturing from 'assets/icons/manufacturing.png'
import lifecycle from 'assets/icons/lifecycle.png'
import scl from 'assets/icons/scl.png'
import scp from 'assets/icons/scp.png'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Tabs() {

    const [categories] = useState([

        {
            name: 'Supply Chain Planning',
            id: 1,
            title: '1 Does drinking coffee make you smarter?',
            date: '5h ago',
            commentCount: 5,
            shareCount: 2,
            icon: scp,
        },
        {
            name: 'Supply Chain Logistics',
            id: 1,
            title: '2 Does drinking coffee make you smarter?',
            date: '5h ago',
            commentCount: 5,
            shareCount: 2,
            icon: scl,
        },
        {
            name: 'Manufacturing',
            id: 1,
            title: '3 Does drinking coffee make you smarter?',
            date: '5h ago',
            commentCount: 5,
            shareCount: 2,
            icon: manufacturing,
        },
        {
            name: 'Product Lifecycle Mgt',
            id: 1,
            title: '4 Does drinking coffee make you smarter?',
            date: '5h ago',
            commentCount: 5,
            shareCount: 2,
            icon: lifecycle,
        },
    ])

    return (
        <div className="w-full py-16">
            <Tab.Group>

                <div className="flex items-center justify-between gap-2 mx-auto">

                    <Tab.List className="basis-1/3 flex flex-col gap-3">
                        {categories.map((category, index) => (
                            <Tab
                                key={index}
                                className={({ selected }) =>
                                    classNames(
                                        'flex items-center gap-3 w-2/3 text-left bg-white p-2 rounded-md',
                                        'outline-none',
                                        selected
                                            ? 'bg-relianceRed/30 text-white'
                                            : 'text-black hover:bg-relianceRed/10 hover:text-white'
                                    )
                                }
                            >
                                <img src={category.icon} alt="" className='max-w-[30px]' />
                                <span>{category.name}</span>
                            </Tab>
                        ))}
                    </Tab.List>

                    <Tab.Panels className="basis-2/3 h-[50vh] flex items-center justify-center bg-white">
                        {categories.map((posts, idx) => (
                            <Tab.Panel
                                key={idx}
                                className={classNames(
                                    'rounded-xl bg-white p-3',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                )}
                            >
                                {posts.title}

                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </div>

            </Tab.Group>
        </div>
    )
}
