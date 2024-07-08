import { Meta, StoryObj } from "@storybook/react";
import * as Collapse from "@layout/Collapse";

const meta: Meta<typeof Collapse> = {
    title: "Components/Layout/Collapse"
};

export default meta;

export const SingleCollapse = () => {
    return (
        <Collapse.Group>
            <Collapse.Object title="Title" trigger="Trigger">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Collapse.Object>
        </Collapse.Group>
    );
}

export const MultipleCollapses = () => {
    return (
        <Collapse.Group>
            <Collapse.Object title="Title 1" trigger="Trigger 1">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Collapse.Object>
            <Collapse.Object title="Title 2" trigger="Trigger 2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Collapse.Object>
            <Collapse.Object title="Title 3" trigger="Im Default Expanded" defaultExpanded >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Collapse.Object>
        </Collapse.Group>
    );
}