import { Restaurant } from "../model/entities";

/*

oya
wanted café
petite louise
les rupins
pizza grill istanbul
bouy bouy
libertino
jungle palace
osè
taverne de zhao
gros bao
madame shawn
ippudo
le bec fin
plomb du cantal
korean season
café A


pedzouille
ibrik
bistrot du croissant


*/

export const restaurants: Restaurant[] = [
  {
    name: "Oya",
    address: "22 rue de Lancry, 75010 Paris",
    location: { lat: 48.87017265647225, lng: 2.3610680651529834 },
    size: "normal",
    cuisineTypeId: "chinese",
    dishesSize: "big",
    mealPrices: "normal",
    needReservation: false,
    workDistrict: "fsm",
  },
];
