import { createContext } from "react";
import { Pet } from "./ApiResponsesTypes";

const AdoptedPetContext = createContext<
  [Pet | null, (adoptedPet: Pet) => void]
>([
  {
    id: 1337,
    name: "Fido",
    animal: "dog",
    description: "Lorem Ipsun",
    breed: "Beagle",
    images: [],
    city: "Tesanj",
    state: "ZD",
  },
  () => {},
]);

export default AdoptedPetContext;
