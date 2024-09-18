import { Meta } from "@storybook/react";
import { Checkbox } from "@ui/Checkbox";
import { Button } from "@ui/Button";
import React from "react";

const meta: Meta = {
    title: "Components/UI/Checkbox",
    component: Checkbox,
    argTypes: {
        checked: {
            name: "Checked",
            description: "Whether the checkbox is checked",
            control: "boolean",
        },
        disabled: {
            name: "Disabled",
            description: "Whether the checkbox is disabled",
            control: "boolean",
        },
    },
};

export default meta;

export const Default = () => {
    return (
        <>
            <Checkbox>Default Checkbox with Text</Checkbox>
        </>
    );
}

const UncheckedPre = () => {
    const [checked, setChecked] = React.useState(false);
    return (
        <Checkbox checked={checked} onCheckedChange={() => setChecked(!checked)}>
            {checked ? "Checked Checkbox with Text" : "Unchecked Checkbox with Text"}
        </Checkbox>
    );
}
export const Unchecked = () => {return <UncheckedPre />}

const IntermediatePre = () => {
    const [checked, setChecked] = React.useState<"true" | "intermediate" | "false">("intermediate");
    let hardCheck = checked !== "false";
    return (
        <>
            <Checkbox
                checked={hardCheck}
                intermediate={checked === "intermediate"}
                onCheckedChange={() => {
                    if (checked === "true") {
                        setChecked("false");
                    } else if (checked === "false") {
                        setChecked("true");
                    } else if (checked === "intermediate") {
                        setChecked("false");
                    }
                }}
            >Intermediate</Checkbox>
            <Button onClick={() => setChecked("intermediate")} variant="ghost">Reset Intermediate</Button>
        </>
    );
}

export const Intermediate = () => {return <IntermediatePre />}

const CheckedPre = () => {
    const [checked, setChecked] = React.useState(true);
    return (
        <Checkbox checked={checked} onCheckedChange={() => setChecked(!checked)}>
            {checked ? "Checked Checkbox with Text" : "Unchecked Checkbox with Text"}
        </Checkbox>
    );
}

export const Checked = () => {return <CheckedPre />}

const DisabledPre = () => {
    const [checked, setChecked] = React.useState<"true" | "intermediate" | "false">("true");
    let hardCheck = checked !== "false";
    return (
        <>
            <Checkbox
                checked={hardCheck}
                disabled
                intermediate={checked === "intermediate"}
                onCheckedChange={() => {
                    if (checked === "true") {
                        setChecked("false");
                    } else if (checked === "false") {
                        setChecked("true");
                    } else if (checked === "intermediate") {
                        setChecked("false");
                    }
                }}
            >
                {checked === "true" && "Checked Checkbox with Text"}
                {checked === "intermediate" && "Intermediate Checkbox with Text"}
                {checked === "false" && "Unchecked Checkbox with Text"}
            </Checkbox>
            <Button onClick={() => setChecked("true")} variant="ghost">Set to True</Button>
            <Button onClick={() => setChecked("intermediate")} variant="ghost">Set to Intermediate</Button>
            <Button onClick={() => setChecked("false")} variant="ghost">Set to False</Button>
        </>
    );
}

export const Disabled = () => {return <DisabledPre />}

const PlayAroundPre = () => {
    const [checked, setChecked] = React.useState<"true" | "intermediate" | "false">("true");
    let hardCheck = checked !== "false";
    return (
        <>
            <Checkbox
                checked={hardCheck}
                intermediate={checked === "intermediate"}
                onCheckedChange={() => {
                    if (checked === "true") {
                        setChecked("false");
                    } else if (checked === "false") {
                        setChecked("true");
                    } else if (checked === "intermediate") {
                        setChecked("false");
                    }
                }}
            >
                {checked === "true" && "Checked Checkbox with Text"}
                {checked === "intermediate" && "Intermediate Checkbox with Text"}
                {checked === "false" && "Unchecked Checkbox with Text"}
            </Checkbox>
            <Button onClick={() => setChecked("true")} variant="ghost">Set to True</Button>
            <Button onClick={() => setChecked("intermediate")} variant="ghost">Set to Intermediate</Button>
            <Button onClick={() => setChecked("false")} variant="ghost">Set to False</Button>
        </>
    );
}

export const PlayAround = () => {return <PlayAroundPre />}