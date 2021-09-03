import React, { useEffect, useState } from 'react';
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';

const useMarkdown = markdown => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    const content = unified()
      .use(parse)
      .use(remark2react)
      .processSync(markdown).result;
    console.log(content);
  }, [markdown]);

  return html;
};

export default useMarkdown;
