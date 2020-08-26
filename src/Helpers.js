
export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getPokemonNumber(string) {

  let num = string.match(/[0-9]{1,3}/g)[1]
  return num
}