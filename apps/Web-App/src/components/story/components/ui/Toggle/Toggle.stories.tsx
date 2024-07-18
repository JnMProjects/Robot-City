import React from "react";
import { Meta } from "@storybook/react";
import * as Toggle from "@ui/Toggle";

export default {
    title: "Components/UI/Toggle",
    component: Toggle.Single,
    controls: { hideNoControlsWarning: true },
} as Meta;

export const Default = () => (
    <Toggle.Single variant="default" size="default" >Bold</Toggle.Single>
);

export const Outline = () => (
    <Toggle.Single variant="outline" size="default" >Italic</Toggle.Single>
);

export const Small = () => (
    <Toggle.Single variant="default" size="sm" >Underlined</Toggle.Single>
);

export const Large = () => (
    <Toggle.Single variant="default" size="lg" >Strikethrough</Toggle.Single>
);

export const MultiSelectGroup = () => (
        <Toggle.Group type="multiple">
            <Toggle.Item value="One">One</Toggle.Item>
            <Toggle.Item value="Two">Two</Toggle.Item>
            <Toggle.Item value="Three">Three</Toggle.Item>
        </Toggle.Group>
)

export const SingleSelectGroup = () => (
        <Toggle.Group type="single">
            <Toggle.Item value="One">One</Toggle.Item>
            <Toggle.Item value="Two">Two</Toggle.Item>
            <Toggle.Item value="Three">Three</Toggle.Item>
        </Toggle.Group>
)