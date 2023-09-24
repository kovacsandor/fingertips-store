import { Root, Trigger, Content, Close } from "@radix-ui/react-popover";

export const Popover = ({ content, trigger }) => {
  return (
    <Root>
      <Trigger>{trigger}</Trigger>
      <Content>
        {content}
        <Close>Close</Close>
      </Content>
    </Root>
  );
};
