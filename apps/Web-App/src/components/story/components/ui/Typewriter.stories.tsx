import { Meta } from "@storybook/react";
import { Typewriter } from "@/components/ui/Typewriter";

const meta: Meta = {
  title: "Components/UI/Typewriter",
  tags: ["autodocs"],
  component: Typewriter,
};

export default meta;

export const Default = () => {
  return (
    <Typewriter
      delay={0.5}
      baseText="Base: "
      texts={[
        "quiz page with questions and answers",
        "blog Article Details Page Layout",
        "ecommerce dashboard with a sidebar",
        "ui like platform.openai.com....",
        "buttttton",
        "aop that tracks non-standard split sleep cycles",
        "transparent card to showcase achievements of a user",
      ]}
    />
  );
};