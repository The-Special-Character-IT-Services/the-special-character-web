// import React, { useEffect, useState } from 'react';
// import unified from 'unified';
// import parse from 'remark-parse';
// import remark2react from 'remark-react';

// const useMarkdown = markdown => {
//   const [html, setHtml] = useState('');

//   useEffect(() => {
//     const content = unified()
//       .use(parse)
//       .use(remark2react)
//       .processSync(markdown).result;
//     console.log(content);
//   }, [markdown]);

//   return html;
// };

// export default useMarkdown;
import { useState, useEffect } from 'react';
import remark from 'remark';
import html from 'remark-html';

const useMarkdown = markdown => {
  const [HTML, setHTML] = useState('');
  useEffect(() => {
    const markdownToHtml = async () => {
      const result = await remark().use(html).processSync(markdown);
      setHTML(result.toString());
    };
    if (markdown) {
      markdownToHtml();
    }
  }, [markdown]);
  return { HTML };
};

export default useMarkdown;
