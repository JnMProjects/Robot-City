import { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@ui/Progress";

const meta: Meta = {
    title: "Components/UI/Progress",
    component: Progress,
    args: {
        value: {
            type: "number",
            defaultValue: 50,
        }
    }
}

export default meta;

type Story = StoryObj<typeof Progress>;
export const Default: Story = {
    args: {
        value: 50,
    },
};

import React, { useState, useEffect } from "react";

export const ProgressiveColorProgressbar = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setValue((prevValue) => {
                if (prevValue === 100) {
                    return 0;
                } else {
                    return prevValue + 1;
                }
            });
        }, 500);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Progress
            value={value}
            color={{ 25: "bg-green-400", 75: "bg-amber-500", 100: "bg-red-700" }}
            bg="bg-l-prim dark:bg-d-prim"
        />
    );
};