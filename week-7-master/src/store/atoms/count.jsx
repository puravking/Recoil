import { atom } from "recoil";

export const countAtom = atom({
    key:"countAtom",
    default:0
});
export const evenSelector = atom({
    key:"evenSelector",
    default:true
})