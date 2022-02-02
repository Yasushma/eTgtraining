export class Task{
    taskId :number | undefined  ;
    ownerId :number | undefined ;
    name:string | undefined;
    description:string | undefined;
    status: string | undefined 
    priority:number | undefined;
    notes:string | undefined;
    isBookmarked:string | undefined;
    creatorId:number | undefined;
    createdOn:Date | undefined;
    modifiedOn:Date | undefined;
    }