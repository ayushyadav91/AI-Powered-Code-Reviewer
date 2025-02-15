import React, { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from 'react-simple-code-editor'
import Markdown from 'markdown-to-jsx'
import rehypeHighlight from 'rehype-highlight'

import prism from 'prismjs'
import axios from 'axios'




const CodeBox = () => {
     
    const [code, setCode] = useState(`//Write Your Code Here`)
    
const [review, setReview] = useState("")

    useEffect(() => {
        prism.highlightAll();
    });

    async function reviewCode() {
      
        try{
      const response =await axios.post('http://localhost:3000/api/ai/get-review', {code})
    
      setReview(response.data);
        }
        catch(error){
            console.log(error)
        }
        

    }



    
  return (
    <div>
        <main className='flex flex-row w-screen h-screen bg-gray-600  outline-none overflow-x-scroll overflow-hidden overflow-y-hidden overflow-x-scroll overflow-x-hidden border-none'>
         
            <div className="left   w-200 bg-gray-600 m-3  mb-6 rounded-md  outline-none  relative ">
            
                <div className="code  h-full w-full m-0 border-none outline-none">

                    <pre className="language-javascript  h-full w-full m-0 rounded-md bg-gray-600 p-3  outline-none overflow-hidden ">
                    <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
             
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                outline: "none" ,
                height: "100%",
                width: "100%",
                margin: 0,
                padding: 0,
                backgroundColor: "transparent",
               
                overflow: "auto",

              }}
            />
                    </pre>
                </div>
                <div onClick={reviewCode}
                 className="review absolute  right-10 bottom-4 color-black bg-indigo-400 pl-3 pr-3 p-1 rounded-lg font-semibold select-none text-sm">Review</div>
            </div>
            <div className="right h-100% w-200 bg-zinc-700  text-white m-4 mt-5.5 rounded-md p-3 overflow-auto">
                <div>
           <Markdown rehypePlugins={[rehypeHighlight]}>
            
            {review}
            </Markdown>
            </div>
            </div>
        </main>


        {/* <main className='flex flex-row w-screen h-screen p-6 gap-4'>
          
            <div className="flex flex-col w-1/2 bg-black rounded-lg relative">
            
                <div className="h-full w-full m-0">
                    <pre className="language-javascript h-full w-full m-0 rounded-md bg-gray-900 p-3 overflow-x-scroll">
                        <code className="language-javascript">
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
                <div className="absolute bottom-4 right-4 bg-indigo-400 text-black font-semibold text-sm px-4 py-2 rounded-lg cursor-pointer select-none">
                    Review
                </div>
            </div>

           
            <div className="flex flex-col w-1/2 bg-gray-600 p-4 rounded-lg">
                Right
            </div>


        </main> */}
    </div>
  )
}

export default CodeBox