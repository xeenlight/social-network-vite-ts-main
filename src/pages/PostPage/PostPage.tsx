import { useParams } from "react-router-dom";
import { PostContainer } from "../../components/UI/PostContainer/PostContainer";
import { PostUserElem } from "../../components/UI/PostUserElem/PostUserElem";
import { Post } from "../../components/UI/Post/Post";
import { Content } from "../../components/UI/ContentPost/ContentPost";
import { PostControls } from "../../components/UI/PostControls/PostControls";
import { Text } from "../../components/Typography/Text";
import { CommentBlock } from "../../components/UI/CommentBlock/CommentBlock";
import { More } from "../../components/UI/More/More";
import { useLazyGetPostListByIdQuery } from "../../Store/Api/postApi";
import { useEffect } from "react";
import { Container } from "../../components/UI/Container/Contaainer.style";

export const PostPage = () => {
const { postId} = useParams()
const [fetchTrigger, {data}] = useLazyGetPostListByIdQuery()
useEffect(() => {
    if(postId){
        fetchTrigger(postId)
    }
},[postId])
return(
    <Container>
    <PostContainer>
    <PostUserElem
      imgSrc="./img/users/aleksandr-maykov.jpeg"
      alt={data?.message.user_fk.name}
      href="#"
      hrefText={data?.message.user_fk.name}
      time={data?.message.reg_date}
    />

    <Text headingText={data?.message.main_text} />

    <Post>
      <Content src="./img/post/nature-1.png" alt="Post Item" />
      <Content src="./img/post/nature-1.png" alt="Post Item" />
      <Content src="./img/post/nature-1.png" alt="Post Item" />
      <Content src="./img/post/nature-1.png" alt="Post Item" />
      <Content src="./img/post/nature-1.png" alt="Post Item" />
      <Content src="./img/post/nature-1.png" alt="Post Item" />
    </Post>

    <PostControls
      likesCount={10}
      commentsCount={5}
      isLiked
      isMarked={false}
    />

    <CommentBlock
      userImage="./img/users/aleksandr-maykov.jpeg"
      userName="Карина Савина"
      commentText="000"
      replyLink="#"
      href="#"
      date="0 марта"
    />

    <More />
  </PostContainer>
  </Container>
)
}