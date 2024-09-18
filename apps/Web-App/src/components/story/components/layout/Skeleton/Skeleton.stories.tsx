import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "@layout/Skeleton";
import { Button } from "@ui/Button";


const meta: Meta<typeof Skeleton> = {
    title: "Components/Layout/Skeleton",
    component: Skeleton,
    argTypes: {
        className: {
            name: "Class Name",
            defaultValue: "w-20 h-20",
            description: "The class name of the skeleton",
        },
        // Maybe add variants?
    }
}

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default = () => (
    <div>
        <Skeleton>
            <div>Test</div>
        </Skeleton>
    </div>
);

export const WrapsSmth = () => (
    <div>
        <Skeleton>
            <Button>Click me</Button>
        </Skeleton>
    </div>
);