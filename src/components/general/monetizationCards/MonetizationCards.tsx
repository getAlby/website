import { VerticalContentCards } from "../../banners";

import { staticData } from "../../../utils/staticData";
const { monetizationCards: COMPONENT_DATA } = staticData.components;

const MonetizationCards = () => {
  return (
    <VerticalContentCards
      data={COMPONENT_DATA}
      containerStyles={{
        paddingTop: "0rem",
      }}
    />
  );
};

export default MonetizationCards;
