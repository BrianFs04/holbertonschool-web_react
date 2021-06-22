export interface MajorCredits {
    credits: number,
    _brand: 'major',
}

export interface MinorCredits {
    credits: number,
    _brand: 'minor',
}

export const sumMajorCredits = (subject1: MajorCredits, subject2: MinorCredits) => {
    return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

export const sumMinorCredits = (subject1: MinorCredits, subject2: MajorCredits) => {
    return { credits: subject1.credits + subject2.credits } as MinorCredits;
}
