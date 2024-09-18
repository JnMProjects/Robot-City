import { Meta } from "@storybook/react";
import * as Radio from "@components/ui/RadioGroup";

const meta: Meta = {
    title: "Components/UI/RadioGroup",
    component: Radio.Item,
};

export default meta;

export const Default = () => (
    <Radio.Group>
        <Radio.Item value="1">One</Radio.Item>
        <Radio.Item value="2">Two</Radio.Item>
        <Radio.Item value="3">Three</Radio.Item>
    </Radio.Group>
);