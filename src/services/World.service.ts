import RequestService from "./Request.service";

export async function getWorlds() {
  const { data } = await RequestService.get("/worlds");
  return data;
}

export async function getPlayersOnlineByWorld(worldName: string = "Serdebra") {
  const { data } = await RequestService.get("/worlds/" + worldName);
  return data.players_online;
}
