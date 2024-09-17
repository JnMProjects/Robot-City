import { Meta, StoryObj } from "@storybook/react";
import * as Popups from "@layout/Popup";
const meta: Meta = {
    title: "Components/Layout/Popup",
    component: Popups.Preset,
    tags: ['autodocs'],
    argTypes: {
        trigger: {
            name: "Trigger",
            defaultValue: "Open Popup",
            description: "The trigger for the popup",
            control: {
                type: "text",
            },
        },
        triggervariant: {
            name: "Trigger Variant",
            defaultValue: "tertiary",
            description: "The variant of the trigger",
            control: {
                type: "select",
                options: ["primary", "secondary", "tertiary", "soft", "text"],
            },
        },
        prefix: {
            name: "Prefix",
            defaultValue: "Code",
            description: "The prefix for the trigger",
            control: {
                type: "text",
            },
        },
        align: {
            name: "Align",
            defaultValue: "center",
            description: "The alignment of the popup",
            control: {
                type: "select",
                options: ["center", "start", "end"],
            },
        },
        sideOffset: {
            name: "Side Offset",
            defaultValue: 4,
            description: "The side offset of the popup",
            control: {
                type: "number",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Popups.Preset>;

export const Preset: Story = {
    args: {
        trigger: "Open Popup",
        triggervariant: "tertiary",
        prefix: "Code",
        align: "center",
        sideOffset: 4,
        children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    },
};

export const Custom = () => {
    return (
        <Popups.Wrapper>
            <Popups.Trigger prefix="Code">
                Open Popup
            </Popups.Trigger>
            <Popups.Content align="center" sideOffset={4}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </Popups.Content>
        </Popups.Wrapper>
    );
}