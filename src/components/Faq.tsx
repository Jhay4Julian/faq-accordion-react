import { useState } from "react";
import starIcon from "../assets/images/icon-star.svg";
import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";


export default function Faq() {
    const [active, setActive] = useState<number | null>(null);

    const toggle = (index: number) => {
        setActive(active === index ? null : index)
    };

    return (
        <section className="mx-6">
            <div className="container max-w-md mx-auto p-6 shadow-md bg-white rounded-lg hover:shadow-lg transition duration-300 ease-in-out">
                <span className="flex justify-inside mb-3">
                    <img src={starIcon} alt="" className="mr-4 w-5 h-11" />
                    <h2 className="text-4xl font-bold mb-4">FAQ<span>s</span></h2>
                </span>
                <div className="container bg-white">
                    {[
                        {
                            question: "What is our product?",
                            answer: "Our product is an all-in-one solution to manage your team, tasks, and projects efficiently.",
                        },
                        {
                            question: "How do I get started?",
                            answer: "You can get started by signing up for one of our plans, and you'll have access to our platform immediately.",
                        },
                        {
                            question: "What are the pricing plans?",
                            answer: "We offer three pricing plans: Basic, Pro, and Premium. You can choose the one that fits your needs best.",
                        },
                    ].map((item, index) => (
                        <div className="mb-2 bg-gray shadow-sm hover:shadow-md ">
                            <button
                                onClick={() => toggle(index)}
                                className="w-full text-left px-4 py-3 font-semibold text-gray-900 hover:text-purple-500"
                            >
                                <span className="flex justify-between">
                                    <p className={active === index ? '' : 'truncate'}>{item.question}</p>
                                    <img src={active === index ? minusIcon : plusIcon} alt="" className="ml-8"/>
                                </span>
                            </button>
                            <div className={`overflow-hidden text-left text-gray-600 transition-all duration-400 ease-in-out ${active === index ? 'max-h-40 opacity-100': 'max-h-0 opacity-0'}`}>
                                <p className="px-4 mb-2">
                                    {item.answer}
                                </p>
                            </div>

                        </div>
                    ))
                    }
                </div>
            </div>
        </section>
    );
}