import * as Drawer from "@layout/Drawer";
  
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Drawer> = {
    title: "Components/Layout/Drawer",
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default = () => {
    return (
        <Drawer.Wrapper>
            <Drawer.Trigger>Open</Drawer.Trigger>
            <Drawer.Content>
                <Drawer.Header>
                    <Drawer.Title>This is a Drawer</Drawer.Title>
                    <Drawer.Description>Well Obviously.</Drawer.Description>
                </Drawer.Header>
                <Drawer.Footer>
                <div>Footer</div>
                <Drawer.Close>
                    Close
                </Drawer.Close>
                </Drawer.Footer>
            </Drawer.Content>
        </Drawer.Wrapper>

    )
}