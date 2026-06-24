export type RoomStatus = "occupied" | "vacant";

export type Room = {
  id: number;
  number: string;
  price: number;
  status: RoomStatus;
  tenant: string | null;
};

export const rooms: Room[] = [
  {
    id: 1,
    number: "A-01",
    price: 850000,
    status: "occupied",
    tenant: "Budi",
  },
  { id: 2, number: "A-02", price: 850000, status: "occupied", tenant: "Andi" },
  { id: 3, number: "A-03", price: 850000, status: "occupied", tenant: "Rina" },
  { id: 4, number: "A-04", price: 850000, status: "occupied", tenant: "Siti" },
  { id: 5, number: "A-05", price: 850000, status: "occupied", tenant: "Dewi" },
  { id: 6, number: "A-06", price: 850000, status: "occupied", tenant: "Yoga" },

  { id: 7, number: "B-01", price: 900000, status: "occupied", tenant: "Rizki" },
  { id: 8, number: "B-02", price: 900000, status: "occupied", tenant: "Fajar" },
  { id: 9, number: "B-03", price: 900000, status: "occupied", tenant: "Dian" },
  {
    id: 10,
    number: "B-04",
    price: 900000,
    status: "occupied",
    tenant: "Nanda",
  },
  {
    id: 11,
    number: "B-05",
    price: 900000,
    status: "occupied",
    tenant: "Putri",
  },
  { id: 12, number: "B-06", price: 900000, status: "occupied", tenant: "Bayu" },

  {
    id: 13,
    number: "C-01",
    price: 1000000,
    status: "occupied",
    tenant: "Arif",
  },
  {
    id: 14,
    number: "C-02",
    price: 1000000,
    status: "occupied",
    tenant: "Dimas",
  },
  {
    id: 15,
    number: "C-03",
    price: 1000000,
    status: "occupied",
    tenant: "Wahyu",
  },
  { id: 16, number: "C-04", price: 1000000, status: "occupied", tenant: "Ayu" },
  {
    id: 17,
    number: "C-05",
    price: 1000000,
    status: "occupied",
    tenant: "Lina",
  },
  {
    id: 18,
    number: "C-06",
    price: 1000000,
    status: "occupied",
    tenant: "Nabila",
  },

  {
    id: 19,
    number: "D-01",
    price: 1200000,
    status: "occupied",
    tenant: "Rahmat",
  },

  { id: 20, number: "D-02", price: 1200000, status: "vacant", tenant: null },
  { id: 21, number: "D-03", price: 1200000, status: "vacant", tenant: null },
  { id: 22, number: "D-04", price: 1200000, status: "vacant", tenant: null },
  { id: 23, number: "D-05", price: 1200000, status: "vacant", tenant: null },
  { id: 24, number: "D-06", price: 1200000, status: "vacant", tenant: null },
];
