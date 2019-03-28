import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  background: #fff;
  width: 600px;
  box-shadow: 0px 4px 15px -10px rgba(0,0,0,0.75);
  border-radius: 5px;
  padding 10px;
  border0 solid 0.8px;
`;

export const PostHeader = styled.div`
  display: flex;
  img {
    width: 64px;
    margin: 5px 5px 5px 5px;
  }
  border-bottom: solid 1px;
  align-items: center;
`;

export const PostDetail = styled.div`
  margin-top 10px;

`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;
