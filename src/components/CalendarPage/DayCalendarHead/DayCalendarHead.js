import { List, Item } from "./DayCalendarHead.styled";
import { v4 as uuidv4 } from "uuid";

export const DayCalendarHead = ({ days }) => {
  return (
    <>
      <List>
        {days.map((items) => (
          <Item key={uuidv4()}>{items}</Item>
        ))}
      </List>
    </>
  );
};
