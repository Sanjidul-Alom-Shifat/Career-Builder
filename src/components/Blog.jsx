import React from 'react';

const Blog = () => {
    return (
        <div className='mt-12 mb-12'>

            <h2 className='text-2xl font-bold mb-5 px-6 md:px-12 max-w-2xl mx-auto lg:px-16'>Assignment Question :</h2>

            <div className="max-w-2xl mx-auto bg-white px-6 md:px-12 lg:px-16 rounded">

                <div tabIndex={0} className="collapse mb-4 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                    When should you use context API?
                    </div>
                    <div className="collapse-content">
                        <p> Context API is a feature of React that allows me to share data between components without having to pass it down through props manually. I should use Context API when i have data or state that needs to be accessed by multiple components at different levels in the component tree. Context API can help simplify my code and make it more maintainable by reducing the amount of prop drilling required.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse mb-4 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                    What is a custom hook?
                    </div>
                    <div className="collapse-content">
                        <p>A custom hook is a JavaScript function that allows you to reuse logic across different components. It's a way to extract stateful logic from a component into a reusable function. Custom hooks can simplify code and improve readability and maintainability.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse mb-4 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                    What is useRef?
                    </div>
                    <div className="collapse-content">
                        <p>useRef is a hook in React that creates a mutable reference object. It can be used to store and access a value that persists between renders without causing a re-render. It is commonly used to target and manipulate DOM elements, as well as store previous state or props values.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse mb-4 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                    What is useMemo?
                    </div>
                    <div className="collapse-content">
                        <p>useMemo is a hook in React that allows you to memoize a value so that it is only recomputed when its dependencies change. This can be useful for expensive calculations that are performed frequently, such as filtering or sorting large arrays.</p>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Blog;