// create todo dto
export class ICreateTodoDto {
    description: string;
    user: { _id: string, username: string };
}