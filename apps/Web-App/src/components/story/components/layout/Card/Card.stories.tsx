import * as Card from "@layout/Card";
import * as Inputs from "@ui/Inputs";
import Loader from "@ui/loaders/Loader";
  
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
    title: "Components/Layout/Card",
    
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default = () => {
    return (
        <Card.Wrapper>
            <Card.Header>
                <Card.Title>Title</Card.Title>
                <Card.Description>Pretty Long Description</Card.Description>
                <div className="px-3">
                    <Loader
                    bgOpacity={0}
                    color="#CDAE23"
                    size={60}
                    speed={2}
                    stroke={5}
                    strokeLength={0}
                    type="cardio"
                    />
                </div>
                <Card.Divider />
            </Card.Header>
            <Card.Content><Inputs.Default placeholder="Input Placeholder" /></Card.Content>
            <Card.Footer>Footer</Card.Footer>
    </Card.Wrapper>
    )
}

export const UsingPreset = () => {
    return (
        <Card.Preset 
            Title="Title" 
            Description="Pretty Long Description" 
            Header={
                <Loader
                    bgOpacity={0}
                    color="#CDAE23"
                    size={60}
                    speed={2}
                    stroke={5}
                    strokeLength={0}
                    type="cardio"
                />
            } 
            Footer="Footer"
            >
            <Inputs.Default placeholder="Input Placeholder" />
        </Card.Preset>
    )
}