import {skillModel} from './skillmodel';
export interface profileModel{
    id: string;
    employee_Id: number;
    name: string;
    department: string;
    date_Joined: Date;
    salary: number;
    skills: skillModel[];
    


} 