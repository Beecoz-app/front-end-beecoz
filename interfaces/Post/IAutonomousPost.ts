export interface IAutonomousPost {
    id: number;
    title: string;
    description: string;
    region: string;
    createDate: Date;
    serviceTypeId: number;
    interest: [
        {
            autonomousId: number,
        }
    ]
}