import { useState } from 'react';

const faqs = [
  { question: 'What is Next.js?', answer: 'Next.js is a React framework for building web applications.' },
  { question: 'How does Tailwind CSS work?', answer: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.' },
  { question: 'What is the purpose of getStaticProps?', answer: 'getStaticProps is used to fetch data at build time in Next.js.' },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expanded, setExpanded] = useState(null);

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
      <input
        type="text"
        placeholder="Search questions..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      {filteredFaqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleExpand(index)}
            className="w-full text-left p-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            {faq.question}
          </button>
          {expanded === index && (
            <div className="p-2 bg-white border border-gray-200 rounded">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
