import { Meta, StoryObj } from "@storybook/react";
import * as Calender from "@ui/Calender";
import * as React from "react";

export default {
  title: "Components/UI/Calender",
  component: Calender.Base,
} as Meta;

export const Base = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return <Calender.Base />; // yes its missaligned a f
}

export const Popup = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <Calender.asPopup /> // WICHTIG ICH MUSS NOCH DIE GANZEN PROPS HINZUFÜGEN
    )

}