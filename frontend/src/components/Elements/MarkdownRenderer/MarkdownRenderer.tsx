import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Prism from 'react-syntax-highlighter/dist/cjs/prism';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type MarkdownRendererProps = {
  children: string;
};

const CodeBlock = ({ node, inline, className, children, ...props }: any) => {
  const match = /language-(\w+)/.exec(className || '');

  return !inline && match ? (
    <Prism
      style={darcula}
      className="!m-0 !p-3 sm:!p-8 text-xs sm:text-base lg:text-xl"
      PreTag="div"
      language={match[1]}
      {...props}
    >
      {String(children).replace(/\n$/, '')}
    </Prism>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  children: markdown,
}) => {
  return (
    <Markdown
      className="prose prose-base sm:prose-2xl dark:prose-invert"
      remarkPlugins={[remarkGfm]}
      components={{
        code: CodeBlock,
      }}
    >
      {markdown}
    </Markdown>
  );
};

export default MarkdownRenderer;
