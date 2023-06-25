import { Container,TaskPriority,TaskAvatarWrapper,TaskTitle,Wrapper,} from './TaskColumnCard.styled';
  import { TASK_PRIORITY } from '../../../constants/Priority';
  
  export const TaskColumnCard = ({
    title = 'Lorem ipsum dolor sit amet consectetur ',
    priority = TASK_PRIORITY.low,
  }) => {
    return (
      <Container>
        <TaskTitle>{title}</TaskTitle>
        <Wrapper>
          <Wrapper>
            <TaskPriority priority={priority}>{priority}</TaskPriority>
          </Wrapper>
        </Wrapper>
      </Container>
    );
  };