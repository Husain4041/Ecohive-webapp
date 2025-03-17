import { Dweller } from "../types/dweller";
import { Device } from "../types/device";

export interface Home {
  id: string;
  name: string;
  address: string;
  image: string;
  dwellers: Dweller[];
  devices: Device[];
}