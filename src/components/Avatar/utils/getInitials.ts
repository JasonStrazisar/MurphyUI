function getInitials(name?: string, fallback: string = "?") {
  if (!name) return fallback;
  return name
    .replace(/\s+/, " ")
    .split(" ")
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join("");
}

export default getInitials;
