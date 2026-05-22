type NamedPerson = {
  name: string;
};

type BadgeLike = {
  type: number;
  year: number | string;
};

type AlumniLike = NamedPerson & {
  badges?: BadgeLike[];
};

type TeamMemberLike = {
  imageSrc?: string;
};

export function getLastName(name: string): string {
  return name.split(' ').pop()?.toLowerCase() ?? '';
}

export function sortByLastName<T extends NamedPerson>(people: T[]): T[] {
  return [...people].sort((a, b) => getLastName(a.name).localeCompare(getLastName(b.name)));
}

export function sortAlumni<T extends AlumniLike>(alumni: T[], inductedBadgeType: number): T[] {
  return [...alumni].sort((a, b) => {
    const aInductedBadge = a.badges?.find((badge) => badge.type === inductedBadgeType);
    const bInductedBadge = b.badges?.find((badge) => badge.type === inductedBadgeType);

    const aYear = Number(aInductedBadge?.year ?? 0);
    const bYear = Number(bInductedBadge?.year ?? 0);

    if (aYear !== bYear) {
      return bYear - aYear;
    }

    return getLastName(a.name).localeCompare(getLastName(b.name));
  });
}

export function sortBadgesByType<T extends BadgeLike>(badges: T[]): T[] {
  return [...badges].sort((a, b) => a.type - b.type);
}

export function splitTeamMembers<T extends TeamMemberLike>(members: T[], numPeople: number) {
  const membersWithPictures = members.filter((member) => member.imageSrc !== undefined);
  const membersWithoutPictures = members.filter((member) => member.imageSrc === undefined);
  const sortedMembers = [...membersWithPictures, ...membersWithoutPictures];

  let firstRow: T[] = [];
  let secondRow: T[] = [];

  if (members.length <= numPeople) {
    firstRow = sortedMembers;
  } else if (members.length <= numPeople * 2) {
    firstRow = sortedMembers.slice(0, numPeople);
    secondRow = sortedMembers.slice(numPeople);
  } else {
    const halfLength = Math.ceil(sortedMembers.length / 2);

    if (membersWithPictures.length > numPeople * 2) {
      firstRow = membersWithPictures.slice(0, Math.ceil(membersWithPictures.length / 2));
      secondRow = membersWithPictures.slice(Math.ceil(membersWithPictures.length / 2));
      const firstPictureCount = firstRow.length;
      firstRow = [...firstRow, ...membersWithoutPictures.slice(0, halfLength - firstPictureCount)];
      secondRow = [...secondRow, ...membersWithoutPictures.slice(halfLength - firstPictureCount)];
    } else {
      firstRow = membersWithPictures.slice(0, numPeople);
      secondRow = membersWithPictures.slice(numPeople);
      const firstPictureCount = firstRow.length;
      firstRow = [...firstRow, ...membersWithoutPictures.slice(0, halfLength - firstPictureCount)];
      secondRow = [...secondRow, ...membersWithoutPictures.slice(halfLength - firstPictureCount)];
    }
  }

  return {
    firstRow,
    secondRow,
    numPages: Math.ceil(firstRow.length / numPeople),
  };
}

export function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}
