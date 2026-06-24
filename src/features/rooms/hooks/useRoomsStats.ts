import { rooms } from "../../rooms/data/rooms";

export function useRoomStats() {
  const totalRooms = rooms.length;

  const occupiedRooms = rooms.filter(
    (room) => room.status === "occupied",
  ).length;

  const vacantRooms = rooms.filter((room) => room.status === "vacant").length;

  const occupancyRate = Math.round((occupiedRooms / totalRooms) * 100);

  return {
    totalRooms,
    occupiedRooms,
    vacantRooms,
    occupancyRate,
  };
}
