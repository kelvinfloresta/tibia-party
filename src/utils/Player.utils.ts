export function canParty(playerLevel: number, anotherPlayerLevel: number) {
  if (playerLevel === anotherPlayerLevel) {
    return true;
  }

  if (playerLevel > anotherPlayerLevel) {
    const minimum = playerLevel * (2 / 3);
    return anotherPlayerLevel >= minimum;
  }

  const minimum = anotherPlayerLevel * (2 / 3);
  return playerLevel >= minimum;
}
