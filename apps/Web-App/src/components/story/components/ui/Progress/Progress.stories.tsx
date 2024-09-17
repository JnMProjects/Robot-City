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

const ProgressiveColorProgressbarPre = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setValue((prevValue) => {
                if (prevValue === 100) {
                    return -20;
                } else {
                    return prevValue + 1;
                }
            });
        }, 30);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Progress
            value={value}
            color={{ 0: "bg-slate-500", 25: "bg-green-400", 50: "bg-amber-500", 75: "bg-red-700" }}
            bg="bg-l-prim dark:bg-d-prim"
        />
    );
};

export const ProgressiveColorProgressbar = () => <ProgressiveColorProgressbarPre />;