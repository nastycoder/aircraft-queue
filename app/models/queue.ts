export class Queue extends Array {
  constructor(private _id: string, private _prioity: number){
    super();
  }

  get id(): string {
    return this._id;
  }

  get prioity(): number {
    return this._prioity;
  }
}
