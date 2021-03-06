import React from 'react';
import Highlight from 'prism-react-renderer';
import Prism from 'prism-react-renderer/prism';
import theme from 'prism-react-renderer/themes/nightOwl';

export default function CodeBlock({ children, className = '' }) {
  const language = className.replace(/language-/, '');

  if (!Prism.languages[language] && className !== '') {
    console.warn(`'${language}' syntax highlighting is not available.`);
  }

  return (
    <Highlight Prism={Prism} theme={theme} code={children.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
