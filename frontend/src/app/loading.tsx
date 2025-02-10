import { GetStaticProps } from 'next';

interface LoadingProps {
  isLoading: boolean;
}

const LoadingPage = ({ isLoading }: LoadingProps) => {
  return (
    <div>
      {isLoading ? (
        <div>
          <h1>Loading...</h1>
          <p>Please wait while we load the content.</p>
        </div>
      ) : (
        <div>
          <h1>Content Loaded</h1>
          <p>The content has been successfully loaded.</p>
        </div>
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const isLoading = true;

  return {
    props: {
      isLoading,
    },
  };
};

export default LoadingPage;
