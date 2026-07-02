import { create } from "zustand";
import { persist } from "zustand/middleware";

const useDriveStore = create(
  persist(
    (set) => ({
      drives: [],

      addDrive: (drive) =>
        set((state) => ({
          drives: [...state.drives, drive],
        })),

      deleteDrive: (index) =>
        set((state) => ({
          drives: state.drives.filter((_, i) => i !== index),
        })),
    }),
    {
      name: "placement-drives",
    }
  )
);

export default useDriveStore;