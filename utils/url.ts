export const createQueryString = (
  name: string,
  value: string,
  searchParams: string
) => {
  const params = new URLSearchParams(searchParams);
  params.set(name, value);

  return params.toString();
};
