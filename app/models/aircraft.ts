export const AIRCRAFT_TYPES: string[] = ['passenger', 'cargo'];
export const AIRCRAFT_SIZES: string[] = ['large', 'small'];

export class Aircraft {
  private _createdAt: Date;
  private _size: string;
  private _type: string;
  private _lastModified: Date;

  constructor(type, size) {
    if (!~AIRCRAFT_TYPES.indexOf(type)) {
      new TypeError('Available Aircraft types are ' + AIRCRAFT_TYPES.join(', ') + '.');
    }

    if (!~AIRCRAFT_SIZES.indexOf(size)) {
      new TypeError('Available Aircraft sizes are ' + AIRCRAFT_SIZES.join(', ') + '.');
    }

    this._createdAt = new Date();
    this._size = size;
    this._type = type;
    this._lastModified = this._createdAt;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get lastModified(): Date {
    return this._lastModified;
  }

  get queueId(): string {
    return this._type + '::' + this.size;
  }

  get size(): string {
    return this._size;
  }

  public touch(): void {
    this._lastModified = new Date;
  }

  get type(): string {
    return this._type;
  }
}
