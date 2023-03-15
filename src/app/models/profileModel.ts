import {skillModel} from './skillmodel';
export interface profileModel{
    id: string;
    employeeId: string;
    name: string;
    department: string;
    dateJoined: Date;
    salary: number;
    skills: skillModel[];
    


} 