import { ChildAsFC } from "./Child";

const Parent = () => {
  <ChildAsFC color="yellow" onClick={() => console.log("Clicked")}>
    Hello World
  </ChildAsFC>;
};

export default Parent;
