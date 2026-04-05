import { randomUUID } from "expo-crypto";

if (typeof globalThis.crypto === "undefined") {
  globalThis.crypto = {};
}
if (!globalThis.crypto.randomUUID) {
  globalThis.crypto.randomUUID = randomUUID;
}
