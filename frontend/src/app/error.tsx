'use client';
import { GetStaticProps } from 'next';

interface ErrorProps {
  errorCode: number;
  message: string;
}

const ErrorPage = ({ errorCode, message }: ErrorProps) => {
  return (
    <div>
      <h1>Error {errorCode}</h1>
      <p>{message}</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const errorCode = 404;
  const message = 'The page you are looking for does not exist.';

  return {
    props: {
      errorCode,
      message,
    },
  };
};

export default ErrorPage;
