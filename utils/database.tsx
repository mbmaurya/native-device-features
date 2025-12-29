import * as SQLite from "expo-sqlite";
import { Place } from "../models/Place";

let database: any;

export async function initDatabase() {
  database = await SQLite.openDatabaseAsync("places");
  database.withTransactionAsync(async () => {
    await database.execAsync(
      `CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);`
    );
  });
}

export async function insertPlace(place: Place) {
  const result = await database.runAsync(
    `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
    [
      place.title,
      place.imageUri,
      place.address,
      place.location?.lat,
      place.location?.lng,
    ]
  );

  return result;
}

export async function fetchPlaces() {
  const rows = await database.getAllAsync("SELECT * FROM places");
  return rows;
}

export async function fetchPlaceDetails(id: string) {
  try {
    const result = await database.getFirstAsync(
      "SELECT * FROM places WHERE id = ?",
      [id]
    );
    const place = new Place(
      result.title,
      result.imageUri,
      { lat: result.lat, lng: result.lng, address: result.address },
      result.id
    );
    return place;
  } catch (error) {
    console.log(error);
  }
}
