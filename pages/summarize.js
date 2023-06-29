import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head'

export default function Summarizer() {
  const [text, setText] = useState('');
	const [response, setResponse] = useState(null);
	/**
	 * This function gets the response from the API.
	 **/
	const getResponse = async () => {
		try {
			setResponse(`Generating summarized result...`);
			const res = await axios.post('api/summarizer/', {
				text
			});
			setResponse(res.data.summary);
		} catch (error) {
			setResponse(`Couldn't generate summarized content.`);
      console.log(err);
		}
	};

  function resetPage() {
    setResponse("");
    setText("");
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen bg-gray-200">
      <Head>
        <title>Summarizer</title>
        <meta name='Summarizer' content='Summarizer' />
      </Head>
      <div className="flex justify-center  w-5/6 h-96 mt-8">
          <textarea
            id="inputparaphrase"
            type="text"
            className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
            placeholder="Enter or paste your text here and press 'Summarize'"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <textarea
            type="text"
            className="block p-2 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300"
            placeholder="Summarized content"
            value={response}
          />
      </div>
      <div className="flex justify-start w-5/6 ">
          <button
            className="font-bold font-raleway rounded-lg px-6 my-2 rounded bg-secondary text-primary transition duration-300 hover:bg-bc hover:text-black md:h-10"
            onClick={getResponse}
          >
            Summarize
          </button>
          <button
            className="font-bold font-raleway rounded-lg px-6 mx-2 my-2 rounded bg-primary text-secondary transition duration-300 hover:bg-bc hover:text-black md:h-10 "
            onClick={resetPage}
          >
            Clear Text
          </button>
        </div>
    </div>
  )
  }