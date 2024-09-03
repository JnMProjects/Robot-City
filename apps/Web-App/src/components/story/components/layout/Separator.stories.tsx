import { Meta, StoryObj } from "@storybook/react";
import { Separator } from "@layout/Separator";
import { DefaultText } from "@/components/presets/className";

const meta: Meta = {
    title: "Components/Layout/Separator",
    component: Separator,
    tags: ['autodocs'],
   
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default = () => {
    return (
        <main>
            <p className={DefaultText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <Separator />
            <p className={DefaultText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </main>
    )
};