import React, { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import prism from 'prismjs'

const CodeBox = () => {

    useEffect(() => {
        prism.highlightAll();
    });

    
  return (
    <div>
        <main className='flex flex-row w-screen h-screen bg-gray-600'>
            {/* <div className="left h-100  rounded-lg bg-slate-100 position-relative">
                hello
                <div className="code"> hello</div>
                <div className="review ">hello</div>
            </div>

            <div className="right h-100 flex w-full bg-black-200"></div> */}
            <div className="left h-100%  w-200  bg-slate-700 m-3 rounded-md relative">
                left
                <div className="code h-100% w-100% ">

                    <pre className="language-javascript h-100% w-100%">
                        <code className="language-javascripth-100% w-100%">
                            {`function helloWorld() {
                            sjffdsfdfjdsf 
                            dfkdsjhfksldf kshfds
fdfdsfkjsdjfds
fjdsklfjdsf
flkdsjfdskf
kjsdhfsdjf
fkjsdfkjsfhdsf
                            sojdfhdshf
  console.log("Hello, world!");
}

helloWorld();`}
                        </code>
                    </pre>
                </div>
                <div className="review absolute  right-4 bottom-4 color-black bg-indigo-400 pl-3 pr-3 rounded-lg font-semibold select-none text-sm">Review</div>
            </div>
            <div className="right h-100% w-200 bg-gray-500 m-3 rounded-md">
                right
            </div>
           
        </main>
    </div>
  )
}

export default CodeBox