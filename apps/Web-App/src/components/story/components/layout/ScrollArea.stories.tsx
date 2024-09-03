import { Meta, StoryObj } from "@storybook/react";
import { ScrollArea, ScrollBar } from "@layout/ScrollArea";

const meta: Meta = {
    title: "Components/Layout/ScrollArea",
    component: ScrollArea,
    tags: ['autodocs'],
    args: {
        orientation: {
            name: "Orientation",
            defaultValue: "vertical",
            description: "The Scroll Orientation",
            control: {
                type: "string",
                options: ["vertical", "horizontal"],
            }
        }
    }
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Vertical = () => {
    return (
        <ScrollArea>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
            <ScrollBar orientation="vertical" />
        </ScrollArea>
    )
}

export const Horizontal = () => {
    return (
        <ScrollArea>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}