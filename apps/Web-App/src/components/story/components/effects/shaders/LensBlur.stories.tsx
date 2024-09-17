import { Meta } from "@storybook/react";
import { ShaderLensBlur } from "@fx/shaders/LensBlur";

const meta: Meta = {
  title: "Components/Effects/Shaders/LensBlur",
  component: ShaderLensBlur,
} 

export default meta;

export const Default = () => {
    return (
        <ShaderLensBlur
        >
        </ShaderLensBlur>
    )
}