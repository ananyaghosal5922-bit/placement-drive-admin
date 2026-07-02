import { create } from "zustand";

const useDriveStore = create((set) => ({
  drives: [],

  addDrive: (drive) =>
    set((state) => ({
      drives: [...state.drives, drive],
    })),
}));

export default useDriveStore;