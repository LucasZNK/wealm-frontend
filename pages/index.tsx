import type { GetServerSideProps, NextPage } from 'next';
import { dehydrate, useQuery } from 'react-query';
import { queryClient, getInvestment } from '../src/api';

export const getServerSideProps: GetServerSideProps = async () => {
  await queryClient.prefetchQuery('investment', () => getInvestment());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Home: NextPage = () => {
  const { data } = useQuery(['investment'], () => getInvestment());
  return <div>{JSON.stringify(data)}</div>;
};

export default Home;
