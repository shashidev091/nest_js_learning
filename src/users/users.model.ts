export interface User {
    id: number;
    name: string;
    mobile: string;
    gender: Gender
}

enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    OTHER = 'OTHER'
}