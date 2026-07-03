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

       updateDrive: (updatedDrive) =>
        set((state) => ({
         drives: state.drives.map((drive) =>
      drive.id === updatedDrive.id ? updatedDrive : drive
       ),
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