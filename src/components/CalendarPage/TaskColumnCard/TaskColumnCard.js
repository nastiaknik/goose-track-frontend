import { Container,TaskPriority,TaskTitle,Wrapper,TaskAvatarWrapper} from './TaskColumnCard.styled';
  import { TASK_PRIORITY } from '../../../constants/Priority';
  import {RxAvatar} from "react-icons/rx";
 
 
  export const TaskColumnCard = ({
    title = 'Lorem ipsum dolor sit amet consectetur ',
    priority = TASK_PRIORITY.low,
  }) => {
    return (
      <Container>
        <TaskTitle>{title}</TaskTitle>
        <Wrapper>
          <Wrapper>
          <TaskAvatarWrapper>
            <RxAvatar />
          </TaskAvatarWrapper>
            <TaskPriority priority={priority}>{priority}</TaskPriority>
          </Wrapper>
        </Wrapper>
      </Container>
    );
  };