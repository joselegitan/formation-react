import * as React from 'react';
import styled from '@emotion/styled';
import axios from "axios";
import Head from "next/head";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 30px;
`;

export function Index({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <StyledPage>
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
      </StyledPage>
    </>

  );
}

export async function getServerSideProps({ query }) {
  const { id } = query

  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

  return {
    props: {
      post: response.data
    }
  }
}

export default Index;
