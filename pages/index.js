import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head'

export default function Home() {
  const [content, setContent] = useState(null);
  const [paraphrased, setParaphrased] = useState('');

  const fetchParaPhrasedText = async () => {
    try {
      setParaphrased(`Generating paraphrased article...`);
      const res = await axios.get(`/api/paraphraser`, {
        params: { content },
      });
      const { data } = res;
      setParaphrased(data.rewrite);
    } catch (err) {
      setParaphrased(`Couldn't generate paraphrased content.`);
      console.log(err);
    }
  };

  function resetPage() {
    setParaphrased("");
    setContent("");
  };

  return (
    <div className="flex flex-col items-center relative min-h-screen bg-gray-200">
      <Head>
        <title>Paraphraser</title>
        <meta name='paraphraser' content='paraphraser' />
      </Head>
      <div className="flex justify-center  w-5/6 h-96 mt-8">
          <textarea
            id="inputparaphrase"
            type="text"
            className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
            placeholder="Enter or paste your text here and press 'Paraphrase'"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
          <textarea
            type="text"
            className="block p-2 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300"
            placeholder="Paraphrased content"
            value={paraphrased}
          />
      </div>
      <div className="flex justify-start w-5/6 ">
          <button
            className="font-bold font-raleway rounded-lg px-6 my-2 rounded bg-secondary text-primary transition duration-300 hover:bg-bc hover:text-black md:h-10"
            onClick={fetchParaPhrasedText}
          >
            Paraphrase
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
