export type TCharacter = {
  uuid: string;
  email?: string;
  username?: string;
  image?: { url?: string; alt: string };
  name?: { first?: string; last?: string };
};

export const CHARACTER_DATA: TCharacter[] = [
  {
    uuid: 'zeknkhxfdb',
    name: { first: 'Peter', last: 'Griffin' },
    image: { url: 'peter_image_url', alt: 'peter_image_url' },
    username: 'peter_griffin',
    email: 'peter@family-guy.com',
  },
  {
    uuid: 'ihzanzvggg',
    name: { first: 'Lois', last: 'Griffin' },
    image: { url: 'lois_image_url', alt: 'lois_image_url' },
    username: 'lois_griffin',
    email: 'lois@family-guy.com',
  },
  {
    uuid: 'yt25cfgfkh',
    name: { first: 'Stewie', last: 'Griffin' },
    image: { url: 'stewie_image_url', alt: 'stewie_image_url' },
    username: 'stewie_griffin',
    email: 'stewie@family-guy.com',
  },
  {
    uuid: '96lkvz4qg3',
    name: { first: 'Philip', last: 'Fry' },
    image: { url: 'fry_image_url', alt: 'fry_image_url' },
    username: 'philip_fry',
    email: 'fry@futurama.com',
  },
  {
    uuid: 'bznmxxfk74',
    name: { first: 'Bender', last: 'Rodriguez' },
    image: { url: 'bender_image_url', alt: 'bender_image_url' },
    username: 'bender_rodriguez',
    email: 'bender@futurama.com',
  },
  {
    uuid: 'w4uyei44w9',
    name: { first: 'Turanga', last: 'Leela' },
    image: { url: 'leela_image_url', alt: 'leela_image_url' },
    username: 'leela_turanga',
    email: 'leela@futurama.com',
  },
  {
    uuid: 'hk7tounf1d',
    name: { first: 'Hank', last: 'Hill' },
    image: { url: 'hank_hill_image_url', alt: 'hank_hill_image_url' },
    username: 'hank_hill',
    email: 'hank@koth.com',
  },
  {
    uuid: 'zxu74ebfkx',
    name: { first: 'Peggy', last: 'Hill' },
    image: { url: 'peggy_hill_image_url', alt: 'peggy_hill_image_url' },
    username: 'peggy_hill',
    email: 'peggy@koth.com',
  },
  {
    uuid: 'wqd2gpe18w',
    name: { first: 'Bobby', last: 'Hill' },
    image: { url: 'bobby_hill_image_url', alt: 'bobby_hill_image_url' },
    username: 'bobby_hill',
    email: 'bobby@koth.com',
  },
];

export function formatCharacterData<T extends TCharacter>(
  data: T[]
): Record<string, Omit<T, 'uuid'>> {
  return data.reduce((acc, item) => {
    const { uuid, ...rest } = item;
    const payload = { [uuid]: { ...rest } };
    return { ...acc, ...payload };
  }, {});
}
