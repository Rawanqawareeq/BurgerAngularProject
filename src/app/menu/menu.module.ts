import { types } from "../burger-item/burger.model";
export interface Menu{
  "id":number;
  "name": string;
  "ingredients":types[];
  "price":number;
  "path":string;
}
