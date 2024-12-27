export const formatItemName = (name: string): string => {
  return name.replace(/_/g, " ").trim();
};
