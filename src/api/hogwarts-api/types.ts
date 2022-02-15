export interface CharacterWand {
  wood: string;
  core: string;
  length: string;
}

export interface Character {
  actor: string;
  alive: boolean;
  alternate_actors: string[];
  alternate_names: string[];
  ancestry: string;
  dateOfBirth: string;
  eyeColour: string;
  gender: string;
  hairColour: string;
  hogwartsStaff: boolean;
  hogwartsStudent: boolean;
  house: string;
  image: string;
  name: string;
  patronus: string;
  species: string;
  wand: CharacterWand;
  wizard: boolean;
  yearOfBirth: number;
}
