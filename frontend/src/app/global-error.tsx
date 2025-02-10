'use server';
import { GetStaticProps } from 'next';

interface GlobalErrorProps {
  errorCode: number;
  message: string;
}

const GlobalErrorPage = ({ errorCode, message }: GlobalErrorProps) => {
  return (
    <div>
      <h1>Error {errorCode}</h1>
      <p>{message}</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const errorCode = 500;
  const message = 'An unexpected error has occurred. Please try again later.';

  return {
    props: {
      errorCode,
      message,
    },
  };
};

export default GlobalErrorPage;
