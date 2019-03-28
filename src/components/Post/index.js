import React from "react";
import { PostContainer, PostHeader, PostDetail, Wrapper } from "./styles";

const Post = props => (
  <Wrapper>
    <PostContainer>
      <PostHeader>
        <img src={props.profile.profile} alt="Logo" />
        {props.nome}
      </PostHeader>
      {console.log(props.profile.profile)}
      <PostDetail>
        Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as
        pessoas mais interessantis. Paisis, filhis, espiritis santis. Admodum
        accumsan disputationi eu sit. Vide electram sadipscing et per. Tá
        deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
      </PostDetail>
    </PostContainer>
  </Wrapper>
);

export default Post;
