import { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarGroup } from "./Avatar";

const meta: Meta = {
    title: "UI/Avatar",
    component: Avatar,
    argTypes: {
        size: {
            name: "Size",
            description: "Size of the avatar in pixels",
            defaultValue: 100,
            control: {
                type: "number",
            },
        },
        username: {
            name: "Username",
            description: "Username // Github",
            defaultValue: "github",
            control: {
                type: "text",
            },
        },
        placeholder: {
            name: "Placeholder",
            defaultValue: false,
            description: "Show placeholder instead of fetching Avatar",
            control: {
                type: "boolean",
            },
        },
    },
}

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    args: {
        size: 120,
        username: "github",
        placeholder: false,
    },
};

export const Placeholder: Story = {
    args: {
        ...Default.args,
        placeholder: true,
        username: "",
    }
}

export const Group = () => {
    return (
        <AvatarGroup users={["github", "octocat", "derjacklive", "mutebefehl"]} />
    )
}

export const GroupLimited = () => {
    return (
        <AvatarGroup users={["github", "octocat", "derjacklive", "mutebefehl"]} limit={3} />
    )
}