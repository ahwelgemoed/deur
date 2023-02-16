
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export interface PrismaPromise<A> extends Promise<A> {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Country
 * 
 */
export type Country = {
  id: string
  name: string
  code: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model User
 * 
 */
export type User = {
  id: string
  birthDay: Date
  name: string | null
  locationId: string
  cardNumber: string
  isAllowed: boolean
  memberShipType: number
  email: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model VisitsToLocation
 * 
 */
export type VisitsToLocation = {
  id: string
  userId: string
  locationId: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Location
 * 
 */
export type Location = {
  id: string
  name: string
  lat: string
  long: string
  countryId: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Devices
 * 
 */
export type Devices = {
  id: string
  name: string
  deviceId: string
  locationId: string
  deviceTypeId: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model DeviceTypes
 * 
 */
export type DeviceTypes = {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Countries
 * const countries = await prisma.country.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Countries
   * const countries = await prisma.country.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.visitsToLocation`: Exposes CRUD operations for the **VisitsToLocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VisitsToLocations
    * const visitsToLocations = await prisma.visitsToLocation.findMany()
    * ```
    */
  get visitsToLocation(): Prisma.VisitsToLocationDelegate<GlobalReject>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<GlobalReject>;

  /**
   * `prisma.devices`: Exposes CRUD operations for the **Devices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.devices.findMany()
    * ```
    */
  get devices(): Prisma.DevicesDelegate<GlobalReject>;

  /**
   * `prisma.deviceTypes`: Exposes CRUD operations for the **DeviceTypes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceTypes
    * const deviceTypes = await prisma.deviceTypes.findMany()
    * ```
    */
  get deviceTypes(): Prisma.DeviceTypesDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.9.0
   * Query Engine version: ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Country: 'Country',
    User: 'User',
    VisitsToLocation: 'VisitsToLocation',
    Location: 'Location',
    Devices: 'Devices',
    DeviceTypes: 'DeviceTypes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CountryCountOutputType
   */


  export type CountryCountOutputType = {
    locations: number
  }

  export type CountryCountOutputTypeSelect = {
    locations?: boolean
  }

  export type CountryCountOutputTypeGetPayload<S extends boolean | null | undefined | CountryCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CountryCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CountryCountOutputTypeArgs)
    ? CountryCountOutputType 
    : S extends { select: any } & (CountryCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CountryCountOutputType ? CountryCountOutputType[P] : never
  } 
      : CountryCountOutputType




  // Custom InputTypes

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    visits: number
  }

  export type UserCountOutputTypeSelect = {
    visits?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type LocationCountOutputType
   */


  export type LocationCountOutputType = {
    users: number
    devices: number
    visits: number
  }

  export type LocationCountOutputTypeSelect = {
    users?: boolean
    devices?: boolean
    visits?: boolean
  }

  export type LocationCountOutputTypeGetPayload<S extends boolean | null | undefined | LocationCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? LocationCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (LocationCountOutputTypeArgs)
    ? LocationCountOutputType 
    : S extends { select: any } & (LocationCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof LocationCountOutputType ? LocationCountOutputType[P] : never
  } 
      : LocationCountOutputType




  // Custom InputTypes

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect | null
  }



  /**
   * Count Type DeviceTypesCountOutputType
   */


  export type DeviceTypesCountOutputType = {
    devices: number
  }

  export type DeviceTypesCountOutputTypeSelect = {
    devices?: boolean
  }

  export type DeviceTypesCountOutputTypeGetPayload<S extends boolean | null | undefined | DeviceTypesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DeviceTypesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (DeviceTypesCountOutputTypeArgs)
    ? DeviceTypesCountOutputType 
    : S extends { select: any } & (DeviceTypesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof DeviceTypesCountOutputType ? DeviceTypesCountOutputType[P] : never
  } 
      : DeviceTypesCountOutputType




  // Custom InputTypes

  /**
   * DeviceTypesCountOutputType without action
   */
  export type DeviceTypesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DeviceTypesCountOutputType
     */
    select?: DeviceTypesCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Country
   */


  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CountryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    name: number
    code: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CountryMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CountryAggregateArgs = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: Enumerable<CountryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs = {
    where?: CountryWhereInput
    orderBy?: Enumerable<CountryOrderByWithAggregationInput>
    by: CountryScalarFieldEnum[]
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }


  export type CountryGroupByOutputType = {
    id: string
    name: string
    code: string
    createdAt: Date
    updatedAt: Date
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect = {
    id?: boolean
    name?: boolean
    code?: boolean
    locations?: boolean | Country$locationsArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | CountryCountOutputTypeArgs
  }


  export type CountryInclude = {
    locations?: boolean | Country$locationsArgs
    _count?: boolean | CountryCountOutputTypeArgs
  }

  export type CountryGetPayload<S extends boolean | null | undefined | CountryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Country :
    S extends undefined ? never :
    S extends { include: any } & (CountryArgs | CountryFindManyArgs)
    ? Country  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'locations' ? Array < LocationGetPayload<S['include'][P]>>  :
        P extends '_count' ? CountryCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CountryArgs | CountryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'locations' ? Array < LocationGetPayload<S['select'][P]>>  :
        P extends '_count' ? CountryCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Country ? Country[P] : never
  } 
      : Country


  type CountryCountArgs = 
    Omit<CountryFindManyArgs, 'select' | 'include'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CountryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CountryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Country'> extends True ? Prisma__CountryClient<CountryGetPayload<T>> : Prisma__CountryClient<CountryGetPayload<T> | null, null>

    /**
     * Find one Country that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CountryFindUniqueOrThrowArgs>
    ): Prisma__CountryClient<CountryGetPayload<T>>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CountryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CountryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Country'> extends True ? Prisma__CountryClient<CountryGetPayload<T>> : Prisma__CountryClient<CountryGetPayload<T> | null, null>

    /**
     * Find the first Country that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CountryFindFirstOrThrowArgs>
    ): Prisma__CountryClient<CountryGetPayload<T>>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CountryFindManyArgs>(
      args?: SelectSubset<T, CountryFindManyArgs>
    ): PrismaPromise<Array<CountryGetPayload<T>>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
    **/
    create<T extends CountryCreateArgs>(
      args: SelectSubset<T, CountryCreateArgs>
    ): Prisma__CountryClient<CountryGetPayload<T>>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
    **/
    delete<T extends CountryDeleteArgs>(
      args: SelectSubset<T, CountryDeleteArgs>
    ): Prisma__CountryClient<CountryGetPayload<T>>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CountryUpdateArgs>(
      args: SelectSubset<T, CountryUpdateArgs>
    ): Prisma__CountryClient<CountryGetPayload<T>>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CountryDeleteManyArgs>(
      args?: SelectSubset<T, CountryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CountryUpdateManyArgs>(
      args: SelectSubset<T, CountryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
    **/
    upsert<T extends CountryUpsertArgs>(
      args: SelectSubset<T, CountryUpsertArgs>
    ): Prisma__CountryClient<CountryGetPayload<T>>

    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CountryClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    locations<T extends Country$locationsArgs= {}>(args?: Subset<T, Country$locationsArgs>): PrismaPromise<Array<LocationGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Country base type for findUnique actions
   */
  export type CountryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUnique
   */
  export interface CountryFindUniqueArgs extends CountryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }


  /**
   * Country base type for findFirst actions
   */
  export type CountryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: Enumerable<CountryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: Enumerable<CountryScalarFieldEnum>
  }

  /**
   * Country findFirst
   */
  export interface CountryFindFirstArgs extends CountryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: Enumerable<CountryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: Enumerable<CountryScalarFieldEnum>
  }


  /**
   * Country findMany
   */
  export type CountryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: Enumerable<CountryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: Enumerable<CountryScalarFieldEnum>
  }


  /**
   * Country create
   */
  export type CountryCreateArgs = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }


  /**
   * Country update
   */
  export type CountryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }


  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
  }


  /**
   * Country upsert
   */
  export type CountryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }


  /**
   * Country delete
   */
  export type CountryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }


  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
  }


  /**
   * Country.locations
   */
  export type Country$locationsArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    where?: LocationWhereInput
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<LocationScalarFieldEnum>
  }


  /**
   * Country without action
   */
  export type CountryArgs = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    memberShipType: number | null
  }

  export type UserSumAggregateOutputType = {
    memberShipType: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    birthDay: Date | null
    name: string | null
    locationId: string | null
    cardNumber: string | null
    isAllowed: boolean | null
    memberShipType: number | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    birthDay: Date | null
    name: string | null
    locationId: string | null
    cardNumber: string | null
    isAllowed: boolean | null
    memberShipType: number | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    birthDay: number
    name: number
    locationId: number
    cardNumber: number
    isAllowed: number
    memberShipType: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    memberShipType?: true
  }

  export type UserSumAggregateInputType = {
    memberShipType?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    birthDay?: true
    name?: true
    locationId?: true
    cardNumber?: true
    isAllowed?: true
    memberShipType?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    birthDay?: true
    name?: true
    locationId?: true
    cardNumber?: true
    isAllowed?: true
    memberShipType?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    birthDay?: true
    name?: true
    locationId?: true
    cardNumber?: true
    isAllowed?: true
    memberShipType?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    birthDay: Date
    name: string | null
    locationId: string
    cardNumber: string
    isAllowed: boolean
    memberShipType: number
    email: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    birthDay?: boolean
    name?: boolean
    locationId?: boolean
    cardNumber?: boolean
    isAllowed?: boolean
    memberShipType?: boolean
    email?: boolean
    location?: boolean | LocationArgs
    visits?: boolean | User$visitsArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    location?: boolean | LocationArgs
    visits?: boolean | User$visitsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'location' ? LocationGetPayload<S['include'][P]> :
        P extends 'visits' ? Array < VisitsToLocationGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'location' ? LocationGetPayload<S['select'][P]> :
        P extends 'visits' ? Array < VisitsToLocationGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    location<T extends LocationArgs= {}>(args?: Subset<T, LocationArgs>): Prisma__LocationClient<LocationGetPayload<T> | Null>;

    visits<T extends User$visitsArgs= {}>(args?: Subset<T, User$visitsArgs>): PrismaPromise<Array<VisitsToLocationGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.visits
   */
  export type User$visitsArgs = {
    /**
     * Select specific fields to fetch from the VisitsToLocation
     */
    select?: VisitsToLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitsToLocationInclude | null
    where?: VisitsToLocationWhereInput
    orderBy?: Enumerable<VisitsToLocationOrderByWithRelationInput>
    cursor?: VisitsToLocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<VisitsToLocationScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model VisitsToLocation
   */


  export type AggregateVisitsToLocation = {
    _count: VisitsToLocationCountAggregateOutputType | null
    _min: VisitsToLocationMinAggregateOutputType | null
    _max: VisitsToLocationMaxAggregateOutputType | null
  }

  export type VisitsToLocationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    locationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisitsToLocationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    locationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisitsToLocationCountAggregateOutputType = {
    id: number
    userId: number
    locationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VisitsToLocationMinAggregateInputType = {
    id?: true
    userId?: true
    locationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisitsToLocationMaxAggregateInputType = {
    id?: true
    userId?: true
    locationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisitsToLocationCountAggregateInputType = {
    id?: true
    userId?: true
    locationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VisitsToLocationAggregateArgs = {
    /**
     * Filter which VisitsToLocation to aggregate.
     */
    where?: VisitsToLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitsToLocations to fetch.
     */
    orderBy?: Enumerable<VisitsToLocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitsToLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitsToLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitsToLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VisitsToLocations
    **/
    _count?: true | VisitsToLocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitsToLocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitsToLocationMaxAggregateInputType
  }

  export type GetVisitsToLocationAggregateType<T extends VisitsToLocationAggregateArgs> = {
        [P in keyof T & keyof AggregateVisitsToLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisitsToLocation[P]>
      : GetScalarType<T[P], AggregateVisitsToLocation[P]>
  }




  export type VisitsToLocationGroupByArgs = {
    where?: VisitsToLocationWhereInput
    orderBy?: Enumerable<VisitsToLocationOrderByWithAggregationInput>
    by: VisitsToLocationScalarFieldEnum[]
    having?: VisitsToLocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitsToLocationCountAggregateInputType | true
    _min?: VisitsToLocationMinAggregateInputType
    _max?: VisitsToLocationMaxAggregateInputType
  }


  export type VisitsToLocationGroupByOutputType = {
    id: string
    userId: string
    locationId: string
    createdAt: Date
    updatedAt: Date
    _count: VisitsToLocationCountAggregateOutputType | null
    _min: VisitsToLocationMinAggregateOutputType | null
    _max: VisitsToLocationMaxAggregateOutputType | null
  }

  type GetVisitsToLocationGroupByPayload<T extends VisitsToLocationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<VisitsToLocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitsToLocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitsToLocationGroupByOutputType[P]>
            : GetScalarType<T[P], VisitsToLocationGroupByOutputType[P]>
        }
      >
    >


  export type VisitsToLocationSelect = {
    id?: boolean
    userId?: boolean
    user?: boolean | UserArgs
    locationId?: boolean
    location?: boolean | LocationArgs
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type VisitsToLocationInclude = {
    user?: boolean | UserArgs
    location?: boolean | LocationArgs
  }

  export type VisitsToLocationGetPayload<S extends boolean | null | undefined | VisitsToLocationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VisitsToLocation :
    S extends undefined ? never :
    S extends { include: any } & (VisitsToLocationArgs | VisitsToLocationFindManyArgs)
    ? VisitsToLocation  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'location' ? LocationGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (VisitsToLocationArgs | VisitsToLocationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'location' ? LocationGetPayload<S['select'][P]> :  P extends keyof VisitsToLocation ? VisitsToLocation[P] : never
  } 
      : VisitsToLocation


  type VisitsToLocationCountArgs = 
    Omit<VisitsToLocationFindManyArgs, 'select' | 'include'> & {
      select?: VisitsToLocationCountAggregateInputType | true
    }

  export interface VisitsToLocationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one VisitsToLocation that matches the filter.
     * @param {VisitsToLocationFindUniqueArgs} args - Arguments to find a VisitsToLocation
     * @example
     * // Get one VisitsToLocation
     * const visitsToLocation = await prisma.visitsToLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VisitsToLocationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VisitsToLocationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'VisitsToLocation'> extends True ? Prisma__VisitsToLocationClient<VisitsToLocationGetPayload<T>> : Prisma__VisitsToLocationClient<VisitsToLocationGetPayload<T> | null, null>

    /**
     * Find one VisitsToLocation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VisitsToLocationFindUniqueOrThrowArgs} args - Arguments to find a VisitsToLocation
     * @example
     * // Get one VisitsToLocation
     * const visitsToLocation = await prisma.visitsToLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VisitsToLocationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VisitsToLocationFindUniqueOrThrowArgs>
    ): Prisma__VisitsToLocationClient<VisitsToLocationGetPayload<T>>

    /**
     * Find the first VisitsToLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitsToLocationFindFirstArgs} args - Arguments to find a VisitsToLocation
     * @example
     * // Get one VisitsToLocation
     * const visitsToLocation = await prisma.visitsToLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VisitsToLocationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VisitsToLocationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'VisitsToLocation'> extends True ? Prisma__VisitsToLocationClient<VisitsToLocationGetPayload<T>> : Prisma__VisitsToLocationClient<VisitsToLocationGetPayload<T> | null, null>

    /**
     * Find the first VisitsToLocation that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitsToLocationFindFirstOrThrowArgs} args - Arguments to find a VisitsToLocation
     * @example
     * // Get one VisitsToLocation
     * const visitsToLocation = await prisma.visitsToLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VisitsToLocationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VisitsToLocationFindFirstOrThrowArgs>
    ): Prisma__VisitsToLocationClient<VisitsToLocationGetPayload<T>>

    /**
     * Find zero or more VisitsToLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitsToLocationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VisitsToLocations
     * const visitsToLocations = await prisma.visitsToLocation.findMany()
     * 
     * // Get first 10 VisitsToLocations
     * const visitsToLocations = await prisma.visitsToLocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitsToLocationWithIdOnly = await prisma.visitsToLocation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VisitsToLocationFindManyArgs>(
      args?: SelectSubset<T, VisitsToLocationFindManyArgs>
    ): PrismaPromise<Array<VisitsToLocationGetPayload<T>>>

    /**
     * Create a VisitsToLocation.
     * @param {VisitsToLocationCreateArgs} args - Arguments to create a VisitsToLocation.
     * @example
     * // Create one VisitsToLocation
     * const VisitsToLocation = await prisma.visitsToLocation.create({
     *   data: {
     *     // ... data to create a VisitsToLocation
     *   }
     * })
     * 
    **/
    create<T extends VisitsToLocationCreateArgs>(
      args: SelectSubset<T, VisitsToLocationCreateArgs>
    ): Prisma__VisitsToLocationClient<VisitsToLocationGetPayload<T>>

    /**
     * Delete a VisitsToLocation.
     * @param {VisitsToLocationDeleteArgs} args - Arguments to delete one VisitsToLocation.
     * @example
     * // Delete one VisitsToLocation
     * const VisitsToLocation = await prisma.visitsToLocation.delete({
     *   where: {
     *     // ... filter to delete one VisitsToLocation
     *   }
     * })
     * 
    **/
    delete<T extends VisitsToLocationDeleteArgs>(
      args: SelectSubset<T, VisitsToLocationDeleteArgs>
    ): Prisma__VisitsToLocationClient<VisitsToLocationGetPayload<T>>

    /**
     * Update one VisitsToLocation.
     * @param {VisitsToLocationUpdateArgs} args - Arguments to update one VisitsToLocation.
     * @example
     * // Update one VisitsToLocation
     * const visitsToLocation = await prisma.visitsToLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VisitsToLocationUpdateArgs>(
      args: SelectSubset<T, VisitsToLocationUpdateArgs>
    ): Prisma__VisitsToLocationClient<VisitsToLocationGetPayload<T>>

    /**
     * Delete zero or more VisitsToLocations.
     * @param {VisitsToLocationDeleteManyArgs} args - Arguments to filter VisitsToLocations to delete.
     * @example
     * // Delete a few VisitsToLocations
     * const { count } = await prisma.visitsToLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VisitsToLocationDeleteManyArgs>(
      args?: SelectSubset<T, VisitsToLocationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisitsToLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitsToLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VisitsToLocations
     * const visitsToLocation = await prisma.visitsToLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VisitsToLocationUpdateManyArgs>(
      args: SelectSubset<T, VisitsToLocationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one VisitsToLocation.
     * @param {VisitsToLocationUpsertArgs} args - Arguments to update or create a VisitsToLocation.
     * @example
     * // Update or create a VisitsToLocation
     * const visitsToLocation = await prisma.visitsToLocation.upsert({
     *   create: {
     *     // ... data to create a VisitsToLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VisitsToLocation we want to update
     *   }
     * })
    **/
    upsert<T extends VisitsToLocationUpsertArgs>(
      args: SelectSubset<T, VisitsToLocationUpsertArgs>
    ): Prisma__VisitsToLocationClient<VisitsToLocationGetPayload<T>>

    /**
     * Count the number of VisitsToLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitsToLocationCountArgs} args - Arguments to filter VisitsToLocations to count.
     * @example
     * // Count the number of VisitsToLocations
     * const count = await prisma.visitsToLocation.count({
     *   where: {
     *     // ... the filter for the VisitsToLocations we want to count
     *   }
     * })
    **/
    count<T extends VisitsToLocationCountArgs>(
      args?: Subset<T, VisitsToLocationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitsToLocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VisitsToLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitsToLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VisitsToLocationAggregateArgs>(args: Subset<T, VisitsToLocationAggregateArgs>): PrismaPromise<GetVisitsToLocationAggregateType<T>>

    /**
     * Group by VisitsToLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitsToLocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VisitsToLocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitsToLocationGroupByArgs['orderBy'] }
        : { orderBy?: VisitsToLocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VisitsToLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitsToLocationGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for VisitsToLocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VisitsToLocationClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    location<T extends LocationArgs= {}>(args?: Subset<T, LocationArgs>): Prisma__LocationClient<LocationGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * VisitsToLocation base type for findUnique actions
   */
  export type VisitsToLocationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the VisitsToLocation
     */
    select?: VisitsToLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitsToLocationInclude | null
    /**
     * Filter, which VisitsToLocation to fetch.
     */
    where: VisitsToLocationWhereUniqueInput
  }

  /**
   * VisitsToLocation findUnique
   */
  export interface VisitsToLocationFindUniqueArgs extends VisitsToLocationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VisitsToLocation findUniqueOrThrow
   */
  export type VisitsToLocationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VisitsToLocation
     */
    select?: VisitsToLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitsToLocationInclude | null
    /**
     * Filter, which VisitsToLocation to fetch.
     */
    where: VisitsToLocationWhereUniqueInput
  }


  /**
   * VisitsToLocation base type for findFirst actions
   */
  export type VisitsToLocationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the VisitsToLocation
     */
    select?: VisitsToLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitsToLocationInclude | null
    /**
     * Filter, which VisitsToLocation to fetch.
     */
    where?: VisitsToLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitsToLocations to fetch.
     */
    orderBy?: Enumerable<VisitsToLocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisitsToLocations.
     */
    cursor?: VisitsToLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitsToLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitsToLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisitsToLocations.
     */
    distinct?: Enumerable<VisitsToLocationScalarFieldEnum>
  }

  /**
   * VisitsToLocation findFirst
   */
  export interface VisitsToLocationFindFirstArgs extends VisitsToLocationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VisitsToLocation findFirstOrThrow
   */
  export type VisitsToLocationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VisitsToLocation
     */
    select?: VisitsToLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitsToLocationInclude | null
    /**
     * Filter, which VisitsToLocation to fetch.
     */
    where?: VisitsToLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitsToLocations to fetch.
     */
    orderBy?: Enumerable<VisitsToLocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisitsToLocations.
     */
    cursor?: VisitsToLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitsToLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitsToLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisitsToLocations.
     */
    distinct?: Enumerable<VisitsToLocationScalarFieldEnum>
  }


  /**
   * VisitsToLocation findMany
   */
  export type VisitsToLocationFindManyArgs = {
    /**
     * Select specific fields to fetch from the VisitsToLocation
     */
    select?: VisitsToLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitsToLocationInclude | null
    /**
     * Filter, which VisitsToLocations to fetch.
     */
    where?: VisitsToLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitsToLocations to fetch.
     */
    orderBy?: Enumerable<VisitsToLocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VisitsToLocations.
     */
    cursor?: VisitsToLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitsToLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitsToLocations.
     */
    skip?: number
    distinct?: Enumerable<VisitsToLocationScalarFieldEnum>
  }


  /**
   * VisitsToLocation create
   */
  export type VisitsToLocationCreateArgs = {
    /**
     * Select specific fields to fetch from the VisitsToLocation
     */
    select?: VisitsToLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitsToLocationInclude | null
    /**
     * The data needed to create a VisitsToLocation.
     */
    data: XOR<VisitsToLocationCreateInput, VisitsToLocationUncheckedCreateInput>
  }


  /**
   * VisitsToLocation update
   */
  export type VisitsToLocationUpdateArgs = {
    /**
     * Select specific fields to fetch from the VisitsToLocation
     */
    select?: VisitsToLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitsToLocationInclude | null
    /**
     * The data needed to update a VisitsToLocation.
     */
    data: XOR<VisitsToLocationUpdateInput, VisitsToLocationUncheckedUpdateInput>
    /**
     * Choose, which VisitsToLocation to update.
     */
    where: VisitsToLocationWhereUniqueInput
  }


  /**
   * VisitsToLocation updateMany
   */
  export type VisitsToLocationUpdateManyArgs = {
    /**
     * The data used to update VisitsToLocations.
     */
    data: XOR<VisitsToLocationUpdateManyMutationInput, VisitsToLocationUncheckedUpdateManyInput>
    /**
     * Filter which VisitsToLocations to update
     */
    where?: VisitsToLocationWhereInput
  }


  /**
   * VisitsToLocation upsert
   */
  export type VisitsToLocationUpsertArgs = {
    /**
     * Select specific fields to fetch from the VisitsToLocation
     */
    select?: VisitsToLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitsToLocationInclude | null
    /**
     * The filter to search for the VisitsToLocation to update in case it exists.
     */
    where: VisitsToLocationWhereUniqueInput
    /**
     * In case the VisitsToLocation found by the `where` argument doesn't exist, create a new VisitsToLocation with this data.
     */
    create: XOR<VisitsToLocationCreateInput, VisitsToLocationUncheckedCreateInput>
    /**
     * In case the VisitsToLocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitsToLocationUpdateInput, VisitsToLocationUncheckedUpdateInput>
  }


  /**
   * VisitsToLocation delete
   */
  export type VisitsToLocationDeleteArgs = {
    /**
     * Select specific fields to fetch from the VisitsToLocation
     */
    select?: VisitsToLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitsToLocationInclude | null
    /**
     * Filter which VisitsToLocation to delete.
     */
    where: VisitsToLocationWhereUniqueInput
  }


  /**
   * VisitsToLocation deleteMany
   */
  export type VisitsToLocationDeleteManyArgs = {
    /**
     * Filter which VisitsToLocations to delete
     */
    where?: VisitsToLocationWhereInput
  }


  /**
   * VisitsToLocation without action
   */
  export type VisitsToLocationArgs = {
    /**
     * Select specific fields to fetch from the VisitsToLocation
     */
    select?: VisitsToLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitsToLocationInclude | null
  }



  /**
   * Model Location
   */


  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    name: string | null
    lat: string | null
    long: string | null
    countryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    lat: string | null
    long: string | null
    countryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    name: number
    lat: number
    long: number
    countryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LocationMinAggregateInputType = {
    id?: true
    name?: true
    lat?: true
    long?: true
    countryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    name?: true
    lat?: true
    long?: true
    countryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    name?: true
    lat?: true
    long?: true
    countryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LocationAggregateArgs = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs = {
    where?: LocationWhereInput
    orderBy?: Enumerable<LocationOrderByWithAggregationInput>
    by: LocationScalarFieldEnum[]
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }


  export type LocationGroupByOutputType = {
    id: string
    name: string
    lat: string
    long: string
    countryId: string
    createdAt: Date
    updatedAt: Date
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = PrismaPromise<
    Array<
      PickArray<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect = {
    id?: boolean
    name?: boolean
    users?: boolean | Location$usersArgs
    devices?: boolean | Location$devicesArgs
    lat?: boolean
    long?: boolean
    countryId?: boolean
    country?: boolean | CountryArgs
    visits?: boolean | Location$visitsArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | LocationCountOutputTypeArgs
  }


  export type LocationInclude = {
    users?: boolean | Location$usersArgs
    devices?: boolean | Location$devicesArgs
    country?: boolean | CountryArgs
    visits?: boolean | Location$visitsArgs
    _count?: boolean | LocationCountOutputTypeArgs
  }

  export type LocationGetPayload<S extends boolean | null | undefined | LocationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Location :
    S extends undefined ? never :
    S extends { include: any } & (LocationArgs | LocationFindManyArgs)
    ? Location  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'users' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'devices' ? Array < DevicesGetPayload<S['include'][P]>>  :
        P extends 'country' ? CountryGetPayload<S['include'][P]> :
        P extends 'visits' ? Array < VisitsToLocationGetPayload<S['include'][P]>>  :
        P extends '_count' ? LocationCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (LocationArgs | LocationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'users' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'devices' ? Array < DevicesGetPayload<S['select'][P]>>  :
        P extends 'country' ? CountryGetPayload<S['select'][P]> :
        P extends 'visits' ? Array < VisitsToLocationGetPayload<S['select'][P]>>  :
        P extends '_count' ? LocationCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Location ? Location[P] : never
  } 
      : Location


  type LocationCountArgs = 
    Omit<LocationFindManyArgs, 'select' | 'include'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LocationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LocationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Location'> extends True ? Prisma__LocationClient<LocationGetPayload<T>> : Prisma__LocationClient<LocationGetPayload<T> | null, null>

    /**
     * Find one Location that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LocationFindUniqueOrThrowArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LocationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LocationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Location'> extends True ? Prisma__LocationClient<LocationGetPayload<T>> : Prisma__LocationClient<LocationGetPayload<T> | null, null>

    /**
     * Find the first Location that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LocationFindFirstOrThrowArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LocationFindManyArgs>(
      args?: SelectSubset<T, LocationFindManyArgs>
    ): PrismaPromise<Array<LocationGetPayload<T>>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
    **/
    create<T extends LocationCreateArgs>(
      args: SelectSubset<T, LocationCreateArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
    **/
    delete<T extends LocationDeleteArgs>(
      args: SelectSubset<T, LocationDeleteArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LocationUpdateArgs>(
      args: SelectSubset<T, LocationUpdateArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LocationDeleteManyArgs>(
      args?: SelectSubset<T, LocationDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LocationUpdateManyArgs>(
      args: SelectSubset<T, LocationUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
    **/
    upsert<T extends LocationUpsertArgs>(
      args: SelectSubset<T, LocationUpsertArgs>
    ): Prisma__LocationClient<LocationGetPayload<T>>

    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LocationClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    users<T extends Location$usersArgs= {}>(args?: Subset<T, Location$usersArgs>): PrismaPromise<Array<UserGetPayload<T>>| Null>;

    devices<T extends Location$devicesArgs= {}>(args?: Subset<T, Location$devicesArgs>): PrismaPromise<Array<DevicesGetPayload<T>>| Null>;

    country<T extends CountryArgs= {}>(args?: Subset<T, CountryArgs>): Prisma__CountryClient<CountryGetPayload<T> | Null>;

    visits<T extends Location$visitsArgs= {}>(args?: Subset<T, Location$visitsArgs>): PrismaPromise<Array<VisitsToLocationGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Location base type for findUnique actions
   */
  export type LocationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUnique
   */
  export interface LocationFindUniqueArgs extends LocationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }


  /**
   * Location base type for findFirst actions
   */
  export type LocationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: Enumerable<LocationScalarFieldEnum>
  }

  /**
   * Location findFirst
   */
  export interface LocationFindFirstArgs extends LocationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: Enumerable<LocationScalarFieldEnum>
  }


  /**
   * Location findMany
   */
  export type LocationFindManyArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: Enumerable<LocationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: Enumerable<LocationScalarFieldEnum>
  }


  /**
   * Location create
   */
  export type LocationCreateArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }


  /**
   * Location update
   */
  export type LocationUpdateArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }


  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
  }


  /**
   * Location upsert
   */
  export type LocationUpsertArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }


  /**
   * Location delete
   */
  export type LocationDeleteArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }


  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
  }


  /**
   * Location.users
   */
  export type Location$usersArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * Location.devices
   */
  export type Location$devicesArgs = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DevicesInclude | null
    where?: DevicesWhereInput
    orderBy?: Enumerable<DevicesOrderByWithRelationInput>
    cursor?: DevicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DevicesScalarFieldEnum>
  }


  /**
   * Location.visits
   */
  export type Location$visitsArgs = {
    /**
     * Select specific fields to fetch from the VisitsToLocation
     */
    select?: VisitsToLocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisitsToLocationInclude | null
    where?: VisitsToLocationWhereInput
    orderBy?: Enumerable<VisitsToLocationOrderByWithRelationInput>
    cursor?: VisitsToLocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<VisitsToLocationScalarFieldEnum>
  }


  /**
   * Location without action
   */
  export type LocationArgs = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LocationInclude | null
  }



  /**
   * Model Devices
   */


  export type AggregateDevices = {
    _count: DevicesCountAggregateOutputType | null
    _min: DevicesMinAggregateOutputType | null
    _max: DevicesMaxAggregateOutputType | null
  }

  export type DevicesMinAggregateOutputType = {
    id: string | null
    name: string | null
    deviceId: string | null
    locationId: string | null
    deviceTypeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DevicesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    deviceId: string | null
    locationId: string | null
    deviceTypeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DevicesCountAggregateOutputType = {
    id: number
    name: number
    deviceId: number
    locationId: number
    deviceTypeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DevicesMinAggregateInputType = {
    id?: true
    name?: true
    deviceId?: true
    locationId?: true
    deviceTypeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DevicesMaxAggregateInputType = {
    id?: true
    name?: true
    deviceId?: true
    locationId?: true
    deviceTypeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DevicesCountAggregateInputType = {
    id?: true
    name?: true
    deviceId?: true
    locationId?: true
    deviceTypeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DevicesAggregateArgs = {
    /**
     * Filter which Devices to aggregate.
     */
    where?: DevicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: Enumerable<DevicesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DevicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DevicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DevicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DevicesMaxAggregateInputType
  }

  export type GetDevicesAggregateType<T extends DevicesAggregateArgs> = {
        [P in keyof T & keyof AggregateDevices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevices[P]>
      : GetScalarType<T[P], AggregateDevices[P]>
  }




  export type DevicesGroupByArgs = {
    where?: DevicesWhereInput
    orderBy?: Enumerable<DevicesOrderByWithAggregationInput>
    by: DevicesScalarFieldEnum[]
    having?: DevicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DevicesCountAggregateInputType | true
    _min?: DevicesMinAggregateInputType
    _max?: DevicesMaxAggregateInputType
  }


  export type DevicesGroupByOutputType = {
    id: string
    name: string
    deviceId: string
    locationId: string
    deviceTypeId: string
    createdAt: Date
    updatedAt: Date
    _count: DevicesCountAggregateOutputType | null
    _min: DevicesMinAggregateOutputType | null
    _max: DevicesMaxAggregateOutputType | null
  }

  type GetDevicesGroupByPayload<T extends DevicesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DevicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DevicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DevicesGroupByOutputType[P]>
            : GetScalarType<T[P], DevicesGroupByOutputType[P]>
        }
      >
    >


  export type DevicesSelect = {
    id?: boolean
    name?: boolean
    deviceId?: boolean
    locationId?: boolean
    location?: boolean | LocationArgs
    deviceType?: boolean | DeviceTypesArgs
    deviceTypeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type DevicesInclude = {
    location?: boolean | LocationArgs
    deviceType?: boolean | DeviceTypesArgs
  }

  export type DevicesGetPayload<S extends boolean | null | undefined | DevicesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Devices :
    S extends undefined ? never :
    S extends { include: any } & (DevicesArgs | DevicesFindManyArgs)
    ? Devices  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'location' ? LocationGetPayload<S['include'][P]> :
        P extends 'deviceType' ? DeviceTypesGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DevicesArgs | DevicesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'location' ? LocationGetPayload<S['select'][P]> :
        P extends 'deviceType' ? DeviceTypesGetPayload<S['select'][P]> :  P extends keyof Devices ? Devices[P] : never
  } 
      : Devices


  type DevicesCountArgs = 
    Omit<DevicesFindManyArgs, 'select' | 'include'> & {
      select?: DevicesCountAggregateInputType | true
    }

  export interface DevicesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Devices that matches the filter.
     * @param {DevicesFindUniqueArgs} args - Arguments to find a Devices
     * @example
     * // Get one Devices
     * const devices = await prisma.devices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DevicesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DevicesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Devices'> extends True ? Prisma__DevicesClient<DevicesGetPayload<T>> : Prisma__DevicesClient<DevicesGetPayload<T> | null, null>

    /**
     * Find one Devices that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DevicesFindUniqueOrThrowArgs} args - Arguments to find a Devices
     * @example
     * // Get one Devices
     * const devices = await prisma.devices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DevicesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DevicesFindUniqueOrThrowArgs>
    ): Prisma__DevicesClient<DevicesGetPayload<T>>

    /**
     * Find the first Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesFindFirstArgs} args - Arguments to find a Devices
     * @example
     * // Get one Devices
     * const devices = await prisma.devices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DevicesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DevicesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Devices'> extends True ? Prisma__DevicesClient<DevicesGetPayload<T>> : Prisma__DevicesClient<DevicesGetPayload<T> | null, null>

    /**
     * Find the first Devices that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesFindFirstOrThrowArgs} args - Arguments to find a Devices
     * @example
     * // Get one Devices
     * const devices = await prisma.devices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DevicesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DevicesFindFirstOrThrowArgs>
    ): Prisma__DevicesClient<DevicesGetPayload<T>>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.devices.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.devices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const devicesWithIdOnly = await prisma.devices.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DevicesFindManyArgs>(
      args?: SelectSubset<T, DevicesFindManyArgs>
    ): PrismaPromise<Array<DevicesGetPayload<T>>>

    /**
     * Create a Devices.
     * @param {DevicesCreateArgs} args - Arguments to create a Devices.
     * @example
     * // Create one Devices
     * const Devices = await prisma.devices.create({
     *   data: {
     *     // ... data to create a Devices
     *   }
     * })
     * 
    **/
    create<T extends DevicesCreateArgs>(
      args: SelectSubset<T, DevicesCreateArgs>
    ): Prisma__DevicesClient<DevicesGetPayload<T>>

    /**
     * Delete a Devices.
     * @param {DevicesDeleteArgs} args - Arguments to delete one Devices.
     * @example
     * // Delete one Devices
     * const Devices = await prisma.devices.delete({
     *   where: {
     *     // ... filter to delete one Devices
     *   }
     * })
     * 
    **/
    delete<T extends DevicesDeleteArgs>(
      args: SelectSubset<T, DevicesDeleteArgs>
    ): Prisma__DevicesClient<DevicesGetPayload<T>>

    /**
     * Update one Devices.
     * @param {DevicesUpdateArgs} args - Arguments to update one Devices.
     * @example
     * // Update one Devices
     * const devices = await prisma.devices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DevicesUpdateArgs>(
      args: SelectSubset<T, DevicesUpdateArgs>
    ): Prisma__DevicesClient<DevicesGetPayload<T>>

    /**
     * Delete zero or more Devices.
     * @param {DevicesDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.devices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DevicesDeleteManyArgs>(
      args?: SelectSubset<T, DevicesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const devices = await prisma.devices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DevicesUpdateManyArgs>(
      args: SelectSubset<T, DevicesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Devices.
     * @param {DevicesUpsertArgs} args - Arguments to update or create a Devices.
     * @example
     * // Update or create a Devices
     * const devices = await prisma.devices.upsert({
     *   create: {
     *     // ... data to create a Devices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Devices we want to update
     *   }
     * })
    **/
    upsert<T extends DevicesUpsertArgs>(
      args: SelectSubset<T, DevicesUpsertArgs>
    ): Prisma__DevicesClient<DevicesGetPayload<T>>

    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.devices.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DevicesCountArgs>(
      args?: Subset<T, DevicesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DevicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DevicesAggregateArgs>(args: Subset<T, DevicesAggregateArgs>): PrismaPromise<GetDevicesAggregateType<T>>

    /**
     * Group by Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevicesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DevicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DevicesGroupByArgs['orderBy'] }
        : { orderBy?: DevicesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DevicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDevicesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Devices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DevicesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    location<T extends LocationArgs= {}>(args?: Subset<T, LocationArgs>): Prisma__LocationClient<LocationGetPayload<T> | Null>;

    deviceType<T extends DeviceTypesArgs= {}>(args?: Subset<T, DeviceTypesArgs>): Prisma__DeviceTypesClient<DeviceTypesGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Devices base type for findUnique actions
   */
  export type DevicesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DevicesInclude | null
    /**
     * Filter, which Devices to fetch.
     */
    where: DevicesWhereUniqueInput
  }

  /**
   * Devices findUnique
   */
  export interface DevicesFindUniqueArgs extends DevicesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Devices findUniqueOrThrow
   */
  export type DevicesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DevicesInclude | null
    /**
     * Filter, which Devices to fetch.
     */
    where: DevicesWhereUniqueInput
  }


  /**
   * Devices base type for findFirst actions
   */
  export type DevicesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DevicesInclude | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DevicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: Enumerable<DevicesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DevicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: Enumerable<DevicesScalarFieldEnum>
  }

  /**
   * Devices findFirst
   */
  export interface DevicesFindFirstArgs extends DevicesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Devices findFirstOrThrow
   */
  export type DevicesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DevicesInclude | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DevicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: Enumerable<DevicesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DevicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: Enumerable<DevicesScalarFieldEnum>
  }


  /**
   * Devices findMany
   */
  export type DevicesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DevicesInclude | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DevicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: Enumerable<DevicesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DevicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: Enumerable<DevicesScalarFieldEnum>
  }


  /**
   * Devices create
   */
  export type DevicesCreateArgs = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DevicesInclude | null
    /**
     * The data needed to create a Devices.
     */
    data: XOR<DevicesCreateInput, DevicesUncheckedCreateInput>
  }


  /**
   * Devices update
   */
  export type DevicesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DevicesInclude | null
    /**
     * The data needed to update a Devices.
     */
    data: XOR<DevicesUpdateInput, DevicesUncheckedUpdateInput>
    /**
     * Choose, which Devices to update.
     */
    where: DevicesWhereUniqueInput
  }


  /**
   * Devices updateMany
   */
  export type DevicesUpdateManyArgs = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DevicesUpdateManyMutationInput, DevicesUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DevicesWhereInput
  }


  /**
   * Devices upsert
   */
  export type DevicesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DevicesInclude | null
    /**
     * The filter to search for the Devices to update in case it exists.
     */
    where: DevicesWhereUniqueInput
    /**
     * In case the Devices found by the `where` argument doesn't exist, create a new Devices with this data.
     */
    create: XOR<DevicesCreateInput, DevicesUncheckedCreateInput>
    /**
     * In case the Devices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DevicesUpdateInput, DevicesUncheckedUpdateInput>
  }


  /**
   * Devices delete
   */
  export type DevicesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DevicesInclude | null
    /**
     * Filter which Devices to delete.
     */
    where: DevicesWhereUniqueInput
  }


  /**
   * Devices deleteMany
   */
  export type DevicesDeleteManyArgs = {
    /**
     * Filter which Devices to delete
     */
    where?: DevicesWhereInput
  }


  /**
   * Devices without action
   */
  export type DevicesArgs = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DevicesInclude | null
  }



  /**
   * Model DeviceTypes
   */


  export type AggregateDeviceTypes = {
    _count: DeviceTypesCountAggregateOutputType | null
    _min: DeviceTypesMinAggregateOutputType | null
    _max: DeviceTypesMaxAggregateOutputType | null
  }

  export type DeviceTypesMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceTypesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceTypesCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeviceTypesMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceTypesMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceTypesCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeviceTypesAggregateArgs = {
    /**
     * Filter which DeviceTypes to aggregate.
     */
    where?: DeviceTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTypes to fetch.
     */
    orderBy?: Enumerable<DeviceTypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceTypes
    **/
    _count?: true | DeviceTypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceTypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceTypesMaxAggregateInputType
  }

  export type GetDeviceTypesAggregateType<T extends DeviceTypesAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceTypes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceTypes[P]>
      : GetScalarType<T[P], AggregateDeviceTypes[P]>
  }




  export type DeviceTypesGroupByArgs = {
    where?: DeviceTypesWhereInput
    orderBy?: Enumerable<DeviceTypesOrderByWithAggregationInput>
    by: DeviceTypesScalarFieldEnum[]
    having?: DeviceTypesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceTypesCountAggregateInputType | true
    _min?: DeviceTypesMinAggregateInputType
    _max?: DeviceTypesMaxAggregateInputType
  }


  export type DeviceTypesGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: DeviceTypesCountAggregateOutputType | null
    _min: DeviceTypesMinAggregateOutputType | null
    _max: DeviceTypesMaxAggregateOutputType | null
  }

  type GetDeviceTypesGroupByPayload<T extends DeviceTypesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DeviceTypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceTypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceTypesGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceTypesGroupByOutputType[P]>
        }
      >
    >


  export type DeviceTypesSelect = {
    id?: boolean
    name?: boolean
    devices?: boolean | DeviceTypes$devicesArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | DeviceTypesCountOutputTypeArgs
  }


  export type DeviceTypesInclude = {
    devices?: boolean | DeviceTypes$devicesArgs
    _count?: boolean | DeviceTypesCountOutputTypeArgs
  }

  export type DeviceTypesGetPayload<S extends boolean | null | undefined | DeviceTypesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DeviceTypes :
    S extends undefined ? never :
    S extends { include: any } & (DeviceTypesArgs | DeviceTypesFindManyArgs)
    ? DeviceTypes  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'devices' ? Array < DevicesGetPayload<S['include'][P]>>  :
        P extends '_count' ? DeviceTypesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DeviceTypesArgs | DeviceTypesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'devices' ? Array < DevicesGetPayload<S['select'][P]>>  :
        P extends '_count' ? DeviceTypesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof DeviceTypes ? DeviceTypes[P] : never
  } 
      : DeviceTypes


  type DeviceTypesCountArgs = 
    Omit<DeviceTypesFindManyArgs, 'select' | 'include'> & {
      select?: DeviceTypesCountAggregateInputType | true
    }

  export interface DeviceTypesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DeviceTypes that matches the filter.
     * @param {DeviceTypesFindUniqueArgs} args - Arguments to find a DeviceTypes
     * @example
     * // Get one DeviceTypes
     * const deviceTypes = await prisma.deviceTypes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DeviceTypesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DeviceTypesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DeviceTypes'> extends True ? Prisma__DeviceTypesClient<DeviceTypesGetPayload<T>> : Prisma__DeviceTypesClient<DeviceTypesGetPayload<T> | null, null>

    /**
     * Find one DeviceTypes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DeviceTypesFindUniqueOrThrowArgs} args - Arguments to find a DeviceTypes
     * @example
     * // Get one DeviceTypes
     * const deviceTypes = await prisma.deviceTypes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DeviceTypesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DeviceTypesFindUniqueOrThrowArgs>
    ): Prisma__DeviceTypesClient<DeviceTypesGetPayload<T>>

    /**
     * Find the first DeviceTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTypesFindFirstArgs} args - Arguments to find a DeviceTypes
     * @example
     * // Get one DeviceTypes
     * const deviceTypes = await prisma.deviceTypes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DeviceTypesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DeviceTypesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DeviceTypes'> extends True ? Prisma__DeviceTypesClient<DeviceTypesGetPayload<T>> : Prisma__DeviceTypesClient<DeviceTypesGetPayload<T> | null, null>

    /**
     * Find the first DeviceTypes that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTypesFindFirstOrThrowArgs} args - Arguments to find a DeviceTypes
     * @example
     * // Get one DeviceTypes
     * const deviceTypes = await prisma.deviceTypes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DeviceTypesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DeviceTypesFindFirstOrThrowArgs>
    ): Prisma__DeviceTypesClient<DeviceTypesGetPayload<T>>

    /**
     * Find zero or more DeviceTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTypesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceTypes
     * const deviceTypes = await prisma.deviceTypes.findMany()
     * 
     * // Get first 10 DeviceTypes
     * const deviceTypes = await prisma.deviceTypes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceTypesWithIdOnly = await prisma.deviceTypes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DeviceTypesFindManyArgs>(
      args?: SelectSubset<T, DeviceTypesFindManyArgs>
    ): PrismaPromise<Array<DeviceTypesGetPayload<T>>>

    /**
     * Create a DeviceTypes.
     * @param {DeviceTypesCreateArgs} args - Arguments to create a DeviceTypes.
     * @example
     * // Create one DeviceTypes
     * const DeviceTypes = await prisma.deviceTypes.create({
     *   data: {
     *     // ... data to create a DeviceTypes
     *   }
     * })
     * 
    **/
    create<T extends DeviceTypesCreateArgs>(
      args: SelectSubset<T, DeviceTypesCreateArgs>
    ): Prisma__DeviceTypesClient<DeviceTypesGetPayload<T>>

    /**
     * Delete a DeviceTypes.
     * @param {DeviceTypesDeleteArgs} args - Arguments to delete one DeviceTypes.
     * @example
     * // Delete one DeviceTypes
     * const DeviceTypes = await prisma.deviceTypes.delete({
     *   where: {
     *     // ... filter to delete one DeviceTypes
     *   }
     * })
     * 
    **/
    delete<T extends DeviceTypesDeleteArgs>(
      args: SelectSubset<T, DeviceTypesDeleteArgs>
    ): Prisma__DeviceTypesClient<DeviceTypesGetPayload<T>>

    /**
     * Update one DeviceTypes.
     * @param {DeviceTypesUpdateArgs} args - Arguments to update one DeviceTypes.
     * @example
     * // Update one DeviceTypes
     * const deviceTypes = await prisma.deviceTypes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DeviceTypesUpdateArgs>(
      args: SelectSubset<T, DeviceTypesUpdateArgs>
    ): Prisma__DeviceTypesClient<DeviceTypesGetPayload<T>>

    /**
     * Delete zero or more DeviceTypes.
     * @param {DeviceTypesDeleteManyArgs} args - Arguments to filter DeviceTypes to delete.
     * @example
     * // Delete a few DeviceTypes
     * const { count } = await prisma.deviceTypes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DeviceTypesDeleteManyArgs>(
      args?: SelectSubset<T, DeviceTypesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTypesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceTypes
     * const deviceTypes = await prisma.deviceTypes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DeviceTypesUpdateManyArgs>(
      args: SelectSubset<T, DeviceTypesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one DeviceTypes.
     * @param {DeviceTypesUpsertArgs} args - Arguments to update or create a DeviceTypes.
     * @example
     * // Update or create a DeviceTypes
     * const deviceTypes = await prisma.deviceTypes.upsert({
     *   create: {
     *     // ... data to create a DeviceTypes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceTypes we want to update
     *   }
     * })
    **/
    upsert<T extends DeviceTypesUpsertArgs>(
      args: SelectSubset<T, DeviceTypesUpsertArgs>
    ): Prisma__DeviceTypesClient<DeviceTypesGetPayload<T>>

    /**
     * Count the number of DeviceTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTypesCountArgs} args - Arguments to filter DeviceTypes to count.
     * @example
     * // Count the number of DeviceTypes
     * const count = await prisma.deviceTypes.count({
     *   where: {
     *     // ... the filter for the DeviceTypes we want to count
     *   }
     * })
    **/
    count<T extends DeviceTypesCountArgs>(
      args?: Subset<T, DeviceTypesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceTypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceTypesAggregateArgs>(args: Subset<T, DeviceTypesAggregateArgs>): PrismaPromise<GetDeviceTypesAggregateType<T>>

    /**
     * Group by DeviceTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceTypesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeviceTypesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceTypesGroupByArgs['orderBy'] }
        : { orderBy?: DeviceTypesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeviceTypesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceTypesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceTypes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DeviceTypesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    devices<T extends DeviceTypes$devicesArgs= {}>(args?: Subset<T, DeviceTypes$devicesArgs>): PrismaPromise<Array<DevicesGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * DeviceTypes base type for findUnique actions
   */
  export type DeviceTypesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the DeviceTypes
     */
    select?: DeviceTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeviceTypesInclude | null
    /**
     * Filter, which DeviceTypes to fetch.
     */
    where: DeviceTypesWhereUniqueInput
  }

  /**
   * DeviceTypes findUnique
   */
  export interface DeviceTypesFindUniqueArgs extends DeviceTypesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DeviceTypes findUniqueOrThrow
   */
  export type DeviceTypesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DeviceTypes
     */
    select?: DeviceTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeviceTypesInclude | null
    /**
     * Filter, which DeviceTypes to fetch.
     */
    where: DeviceTypesWhereUniqueInput
  }


  /**
   * DeviceTypes base type for findFirst actions
   */
  export type DeviceTypesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the DeviceTypes
     */
    select?: DeviceTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeviceTypesInclude | null
    /**
     * Filter, which DeviceTypes to fetch.
     */
    where?: DeviceTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTypes to fetch.
     */
    orderBy?: Enumerable<DeviceTypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceTypes.
     */
    cursor?: DeviceTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceTypes.
     */
    distinct?: Enumerable<DeviceTypesScalarFieldEnum>
  }

  /**
   * DeviceTypes findFirst
   */
  export interface DeviceTypesFindFirstArgs extends DeviceTypesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DeviceTypes findFirstOrThrow
   */
  export type DeviceTypesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DeviceTypes
     */
    select?: DeviceTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeviceTypesInclude | null
    /**
     * Filter, which DeviceTypes to fetch.
     */
    where?: DeviceTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTypes to fetch.
     */
    orderBy?: Enumerable<DeviceTypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceTypes.
     */
    cursor?: DeviceTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceTypes.
     */
    distinct?: Enumerable<DeviceTypesScalarFieldEnum>
  }


  /**
   * DeviceTypes findMany
   */
  export type DeviceTypesFindManyArgs = {
    /**
     * Select specific fields to fetch from the DeviceTypes
     */
    select?: DeviceTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeviceTypesInclude | null
    /**
     * Filter, which DeviceTypes to fetch.
     */
    where?: DeviceTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceTypes to fetch.
     */
    orderBy?: Enumerable<DeviceTypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceTypes.
     */
    cursor?: DeviceTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceTypes.
     */
    skip?: number
    distinct?: Enumerable<DeviceTypesScalarFieldEnum>
  }


  /**
   * DeviceTypes create
   */
  export type DeviceTypesCreateArgs = {
    /**
     * Select specific fields to fetch from the DeviceTypes
     */
    select?: DeviceTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeviceTypesInclude | null
    /**
     * The data needed to create a DeviceTypes.
     */
    data: XOR<DeviceTypesCreateInput, DeviceTypesUncheckedCreateInput>
  }


  /**
   * DeviceTypes update
   */
  export type DeviceTypesUpdateArgs = {
    /**
     * Select specific fields to fetch from the DeviceTypes
     */
    select?: DeviceTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeviceTypesInclude | null
    /**
     * The data needed to update a DeviceTypes.
     */
    data: XOR<DeviceTypesUpdateInput, DeviceTypesUncheckedUpdateInput>
    /**
     * Choose, which DeviceTypes to update.
     */
    where: DeviceTypesWhereUniqueInput
  }


  /**
   * DeviceTypes updateMany
   */
  export type DeviceTypesUpdateManyArgs = {
    /**
     * The data used to update DeviceTypes.
     */
    data: XOR<DeviceTypesUpdateManyMutationInput, DeviceTypesUncheckedUpdateManyInput>
    /**
     * Filter which DeviceTypes to update
     */
    where?: DeviceTypesWhereInput
  }


  /**
   * DeviceTypes upsert
   */
  export type DeviceTypesUpsertArgs = {
    /**
     * Select specific fields to fetch from the DeviceTypes
     */
    select?: DeviceTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeviceTypesInclude | null
    /**
     * The filter to search for the DeviceTypes to update in case it exists.
     */
    where: DeviceTypesWhereUniqueInput
    /**
     * In case the DeviceTypes found by the `where` argument doesn't exist, create a new DeviceTypes with this data.
     */
    create: XOR<DeviceTypesCreateInput, DeviceTypesUncheckedCreateInput>
    /**
     * In case the DeviceTypes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceTypesUpdateInput, DeviceTypesUncheckedUpdateInput>
  }


  /**
   * DeviceTypes delete
   */
  export type DeviceTypesDeleteArgs = {
    /**
     * Select specific fields to fetch from the DeviceTypes
     */
    select?: DeviceTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeviceTypesInclude | null
    /**
     * Filter which DeviceTypes to delete.
     */
    where: DeviceTypesWhereUniqueInput
  }


  /**
   * DeviceTypes deleteMany
   */
  export type DeviceTypesDeleteManyArgs = {
    /**
     * Filter which DeviceTypes to delete
     */
    where?: DeviceTypesWhereInput
  }


  /**
   * DeviceTypes.devices
   */
  export type DeviceTypes$devicesArgs = {
    /**
     * Select specific fields to fetch from the Devices
     */
    select?: DevicesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DevicesInclude | null
    where?: DevicesWhereInput
    orderBy?: Enumerable<DevicesOrderByWithRelationInput>
    cursor?: DevicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DevicesScalarFieldEnum>
  }


  /**
   * DeviceTypes without action
   */
  export type DeviceTypesArgs = {
    /**
     * Select specific fields to fetch from the DeviceTypes
     */
    select?: DeviceTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeviceTypesInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CountryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const DeviceTypesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeviceTypesScalarFieldEnum = (typeof DeviceTypesScalarFieldEnum)[keyof typeof DeviceTypesScalarFieldEnum]


  export const DevicesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    deviceId: 'deviceId',
    locationId: 'locationId',
    deviceTypeId: 'deviceTypeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DevicesScalarFieldEnum = (typeof DevicesScalarFieldEnum)[keyof typeof DevicesScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lat: 'lat',
    long: 'long',
    countryId: 'countryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    birthDay: 'birthDay',
    name: 'name',
    locationId: 'locationId',
    cardNumber: 'cardNumber',
    isAllowed: 'isAllowed',
    memberShipType: 'memberShipType',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VisitsToLocationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    locationId: 'locationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VisitsToLocationScalarFieldEnum = (typeof VisitsToLocationScalarFieldEnum)[keyof typeof VisitsToLocationScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type CountryWhereInput = {
    AND?: Enumerable<CountryWhereInput>
    OR?: Enumerable<CountryWhereInput>
    NOT?: Enumerable<CountryWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    code?: StringFilter | string
    locations?: LocationListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    locations?: LocationOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CountryWhereUniqueInput = {
    id?: string
  }

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CountryCountOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CountryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CountryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CountryScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    code?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    birthDay?: DateTimeFilter | Date | string
    name?: StringNullableFilter | string | null
    locationId?: StringFilter | string
    cardNumber?: StringFilter | string
    isAllowed?: BoolFilter | boolean
    memberShipType?: IntFilter | number
    email?: StringFilter | string
    location?: XOR<LocationRelationFilter, LocationWhereInput>
    visits?: VisitsToLocationListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    birthDay?: SortOrder
    name?: SortOrder
    locationId?: SortOrder
    cardNumber?: SortOrder
    isAllowed?: SortOrder
    memberShipType?: SortOrder
    email?: SortOrder
    location?: LocationOrderByWithRelationInput
    visits?: VisitsToLocationOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: string
    cardNumber?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    birthDay?: SortOrder
    name?: SortOrder
    locationId?: SortOrder
    cardNumber?: SortOrder
    isAllowed?: SortOrder
    memberShipType?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    birthDay?: DateTimeWithAggregatesFilter | Date | string
    name?: StringNullableWithAggregatesFilter | string | null
    locationId?: StringWithAggregatesFilter | string
    cardNumber?: StringWithAggregatesFilter | string
    isAllowed?: BoolWithAggregatesFilter | boolean
    memberShipType?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type VisitsToLocationWhereInput = {
    AND?: Enumerable<VisitsToLocationWhereInput>
    OR?: Enumerable<VisitsToLocationWhereInput>
    NOT?: Enumerable<VisitsToLocationWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    locationId?: StringFilter | string
    location?: XOR<LocationRelationFilter, LocationWhereInput>
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type VisitsToLocationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    locationId?: SortOrder
    location?: LocationOrderByWithRelationInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisitsToLocationWhereUniqueInput = {
    id?: string
  }

  export type VisitsToLocationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    locationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VisitsToLocationCountOrderByAggregateInput
    _max?: VisitsToLocationMaxOrderByAggregateInput
    _min?: VisitsToLocationMinOrderByAggregateInput
  }

  export type VisitsToLocationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VisitsToLocationScalarWhereWithAggregatesInput>
    OR?: Enumerable<VisitsToLocationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VisitsToLocationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    locationId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type LocationWhereInput = {
    AND?: Enumerable<LocationWhereInput>
    OR?: Enumerable<LocationWhereInput>
    NOT?: Enumerable<LocationWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    users?: UserListRelationFilter
    devices?: DevicesListRelationFilter
    lat?: StringFilter | string
    long?: StringFilter | string
    countryId?: StringFilter | string
    country?: XOR<CountryRelationFilter, CountryWhereInput>
    visits?: VisitsToLocationListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
    devices?: DevicesOrderByRelationAggregateInput
    lat?: SortOrder
    long?: SortOrder
    countryId?: SortOrder
    country?: CountryOrderByWithRelationInput
    visits?: VisitsToLocationOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationWhereUniqueInput = {
    id?: string
  }

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    lat?: SortOrder
    long?: SortOrder
    countryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LocationScalarWhereWithAggregatesInput>
    OR?: Enumerable<LocationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LocationScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    lat?: StringWithAggregatesFilter | string
    long?: StringWithAggregatesFilter | string
    countryId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DevicesWhereInput = {
    AND?: Enumerable<DevicesWhereInput>
    OR?: Enumerable<DevicesWhereInput>
    NOT?: Enumerable<DevicesWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    deviceId?: StringFilter | string
    locationId?: StringFilter | string
    location?: XOR<LocationRelationFilter, LocationWhereInput>
    deviceType?: XOR<DeviceTypesRelationFilter, DeviceTypesWhereInput>
    deviceTypeId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type DevicesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    deviceId?: SortOrder
    locationId?: SortOrder
    location?: LocationOrderByWithRelationInput
    deviceType?: DeviceTypesOrderByWithRelationInput
    deviceTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DevicesWhereUniqueInput = {
    id?: string
  }

  export type DevicesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    deviceId?: SortOrder
    locationId?: SortOrder
    deviceTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DevicesCountOrderByAggregateInput
    _max?: DevicesMaxOrderByAggregateInput
    _min?: DevicesMinOrderByAggregateInput
  }

  export type DevicesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DevicesScalarWhereWithAggregatesInput>
    OR?: Enumerable<DevicesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DevicesScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    deviceId?: StringWithAggregatesFilter | string
    locationId?: StringWithAggregatesFilter | string
    deviceTypeId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DeviceTypesWhereInput = {
    AND?: Enumerable<DeviceTypesWhereInput>
    OR?: Enumerable<DeviceTypesWhereInput>
    NOT?: Enumerable<DeviceTypesWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    devices?: DevicesListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type DeviceTypesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    devices?: DevicesOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceTypesWhereUniqueInput = {
    id?: string
  }

  export type DeviceTypesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeviceTypesCountOrderByAggregateInput
    _max?: DeviceTypesMaxOrderByAggregateInput
    _min?: DeviceTypesMinOrderByAggregateInput
  }

  export type DeviceTypesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DeviceTypesScalarWhereWithAggregatesInput>
    OR?: Enumerable<DeviceTypesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DeviceTypesScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CountryCreateInput = {
    id?: string
    name: string
    code: string
    locations?: LocationCreateNestedManyWithoutCountryInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CountryUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    locations?: LocationUncheckedCreateNestedManyWithoutCountryInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CountryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    locations?: LocationUpdateManyWithoutCountryNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    locations?: LocationUncheckedUpdateManyWithoutCountryNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    birthDay: Date | string
    name?: string | null
    cardNumber: string
    isAllowed?: boolean
    memberShipType: number
    email: string
    location: LocationCreateNestedOneWithoutUsersInput
    visits?: VisitsToLocationCreateNestedManyWithoutUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    birthDay: Date | string
    name?: string | null
    locationId: string
    cardNumber: string
    isAllowed?: boolean
    memberShipType: number
    email: string
    visits?: VisitsToLocationUncheckedCreateNestedManyWithoutUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    birthDay?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cardNumber?: StringFieldUpdateOperationsInput | string
    isAllowed?: BoolFieldUpdateOperationsInput | boolean
    memberShipType?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    location?: LocationUpdateOneRequiredWithoutUsersNestedInput
    visits?: VisitsToLocationUpdateManyWithoutUserNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    birthDay?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    isAllowed?: BoolFieldUpdateOperationsInput | boolean
    memberShipType?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    visits?: VisitsToLocationUncheckedUpdateManyWithoutUserNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    birthDay?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cardNumber?: StringFieldUpdateOperationsInput | string
    isAllowed?: BoolFieldUpdateOperationsInput | boolean
    memberShipType?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    birthDay?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    isAllowed?: BoolFieldUpdateOperationsInput | boolean
    memberShipType?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitsToLocationCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutVisitsInput
    location: LocationCreateNestedOneWithoutVisitsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitsToLocationUncheckedCreateInput = {
    id?: string
    userId: string
    locationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitsToLocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutVisitsNestedInput
    location?: LocationUpdateOneRequiredWithoutVisitsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitsToLocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitsToLocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitsToLocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateInput = {
    id?: string
    name: string
    users?: UserCreateNestedManyWithoutLocationInput
    devices?: DevicesCreateNestedManyWithoutLocationInput
    lat: string
    long: string
    country: CountryCreateNestedOneWithoutLocationsInput
    visits?: VisitsToLocationCreateNestedManyWithoutLocationInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUncheckedCreateInput = {
    id?: string
    name: string
    users?: UserUncheckedCreateNestedManyWithoutLocationInput
    devices?: DevicesUncheckedCreateNestedManyWithoutLocationInput
    lat: string
    long: string
    countryId: string
    visits?: VisitsToLocationUncheckedCreateNestedManyWithoutLocationInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutLocationNestedInput
    devices?: DevicesUpdateManyWithoutLocationNestedInput
    lat?: StringFieldUpdateOperationsInput | string
    long?: StringFieldUpdateOperationsInput | string
    country?: CountryUpdateOneRequiredWithoutLocationsNestedInput
    visits?: VisitsToLocationUpdateManyWithoutLocationNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutLocationNestedInput
    devices?: DevicesUncheckedUpdateManyWithoutLocationNestedInput
    lat?: StringFieldUpdateOperationsInput | string
    long?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    visits?: VisitsToLocationUncheckedUpdateManyWithoutLocationNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lat?: StringFieldUpdateOperationsInput | string
    long?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lat?: StringFieldUpdateOperationsInput | string
    long?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevicesCreateInput = {
    id?: string
    name: string
    deviceId: string
    location: LocationCreateNestedOneWithoutDevicesInput
    deviceType: DeviceTypesCreateNestedOneWithoutDevicesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DevicesUncheckedCreateInput = {
    id?: string
    name: string
    deviceId: string
    locationId: string
    deviceTypeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DevicesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    location?: LocationUpdateOneRequiredWithoutDevicesNestedInput
    deviceType?: DeviceTypesUpdateOneRequiredWithoutDevicesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevicesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    deviceTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevicesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevicesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    deviceTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceTypesCreateInput = {
    id?: string
    name: string
    devices?: DevicesCreateNestedManyWithoutDeviceTypeInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceTypesUncheckedCreateInput = {
    id?: string
    name: string
    devices?: DevicesUncheckedCreateNestedManyWithoutDeviceTypeInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceTypesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    devices?: DevicesUpdateManyWithoutDeviceTypeNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceTypesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    devices?: DevicesUncheckedUpdateManyWithoutDeviceTypeNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceTypesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceTypesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type LocationListRelationFilter = {
    every?: LocationWhereInput
    some?: LocationWhereInput
    none?: LocationWhereInput
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type LocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type LocationRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type VisitsToLocationListRelationFilter = {
    every?: VisitsToLocationWhereInput
    some?: VisitsToLocationWhereInput
    none?: VisitsToLocationWhereInput
  }

  export type VisitsToLocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    birthDay?: SortOrder
    name?: SortOrder
    locationId?: SortOrder
    cardNumber?: SortOrder
    isAllowed?: SortOrder
    memberShipType?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    memberShipType?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    birthDay?: SortOrder
    name?: SortOrder
    locationId?: SortOrder
    cardNumber?: SortOrder
    isAllowed?: SortOrder
    memberShipType?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    birthDay?: SortOrder
    name?: SortOrder
    locationId?: SortOrder
    cardNumber?: SortOrder
    isAllowed?: SortOrder
    memberShipType?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    memberShipType?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VisitsToLocationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    locationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisitsToLocationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    locationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisitsToLocationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    locationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type DevicesListRelationFilter = {
    every?: DevicesWhereInput
    some?: DevicesWhereInput
    none?: DevicesWhereInput
  }

  export type CountryRelationFilter = {
    is?: CountryWhereInput
    isNot?: CountryWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DevicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lat?: SortOrder
    long?: SortOrder
    countryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lat?: SortOrder
    long?: SortOrder
    countryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lat?: SortOrder
    long?: SortOrder
    countryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceTypesRelationFilter = {
    is?: DeviceTypesWhereInput
    isNot?: DeviceTypesWhereInput
  }

  export type DevicesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deviceId?: SortOrder
    locationId?: SortOrder
    deviceTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DevicesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deviceId?: SortOrder
    locationId?: SortOrder
    deviceTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DevicesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deviceId?: SortOrder
    locationId?: SortOrder
    deviceTypeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceTypesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceTypesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceTypesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationCreateNestedManyWithoutCountryInput = {
    create?: XOR<Enumerable<LocationCreateWithoutCountryInput>, Enumerable<LocationUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<LocationCreateOrConnectWithoutCountryInput>
    connect?: Enumerable<LocationWhereUniqueInput>
  }

  export type LocationUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<Enumerable<LocationCreateWithoutCountryInput>, Enumerable<LocationUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<LocationCreateOrConnectWithoutCountryInput>
    connect?: Enumerable<LocationWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type LocationUpdateManyWithoutCountryNestedInput = {
    create?: XOR<Enumerable<LocationCreateWithoutCountryInput>, Enumerable<LocationUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<LocationCreateOrConnectWithoutCountryInput>
    upsert?: Enumerable<LocationUpsertWithWhereUniqueWithoutCountryInput>
    set?: Enumerable<LocationWhereUniqueInput>
    disconnect?: Enumerable<LocationWhereUniqueInput>
    delete?: Enumerable<LocationWhereUniqueInput>
    connect?: Enumerable<LocationWhereUniqueInput>
    update?: Enumerable<LocationUpdateWithWhereUniqueWithoutCountryInput>
    updateMany?: Enumerable<LocationUpdateManyWithWhereWithoutCountryInput>
    deleteMany?: Enumerable<LocationScalarWhereInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LocationUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<Enumerable<LocationCreateWithoutCountryInput>, Enumerable<LocationUncheckedCreateWithoutCountryInput>>
    connectOrCreate?: Enumerable<LocationCreateOrConnectWithoutCountryInput>
    upsert?: Enumerable<LocationUpsertWithWhereUniqueWithoutCountryInput>
    set?: Enumerable<LocationWhereUniqueInput>
    disconnect?: Enumerable<LocationWhereUniqueInput>
    delete?: Enumerable<LocationWhereUniqueInput>
    connect?: Enumerable<LocationWhereUniqueInput>
    update?: Enumerable<LocationUpdateWithWhereUniqueWithoutCountryInput>
    updateMany?: Enumerable<LocationUpdateManyWithWhereWithoutCountryInput>
    deleteMany?: Enumerable<LocationScalarWhereInput>
  }

  export type LocationCreateNestedOneWithoutUsersInput = {
    create?: XOR<LocationCreateWithoutUsersInput, LocationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: LocationCreateOrConnectWithoutUsersInput
    connect?: LocationWhereUniqueInput
  }

  export type VisitsToLocationCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<VisitsToLocationCreateWithoutUserInput>, Enumerable<VisitsToLocationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<VisitsToLocationCreateOrConnectWithoutUserInput>
    connect?: Enumerable<VisitsToLocationWhereUniqueInput>
  }

  export type VisitsToLocationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<VisitsToLocationCreateWithoutUserInput>, Enumerable<VisitsToLocationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<VisitsToLocationCreateOrConnectWithoutUserInput>
    connect?: Enumerable<VisitsToLocationWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LocationUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<LocationCreateWithoutUsersInput, LocationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: LocationCreateOrConnectWithoutUsersInput
    upsert?: LocationUpsertWithoutUsersInput
    connect?: LocationWhereUniqueInput
    update?: XOR<LocationUpdateWithoutUsersInput, LocationUncheckedUpdateWithoutUsersInput>
  }

  export type VisitsToLocationUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<VisitsToLocationCreateWithoutUserInput>, Enumerable<VisitsToLocationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<VisitsToLocationCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<VisitsToLocationUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<VisitsToLocationWhereUniqueInput>
    disconnect?: Enumerable<VisitsToLocationWhereUniqueInput>
    delete?: Enumerable<VisitsToLocationWhereUniqueInput>
    connect?: Enumerable<VisitsToLocationWhereUniqueInput>
    update?: Enumerable<VisitsToLocationUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<VisitsToLocationUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<VisitsToLocationScalarWhereInput>
  }

  export type VisitsToLocationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<VisitsToLocationCreateWithoutUserInput>, Enumerable<VisitsToLocationUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<VisitsToLocationCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<VisitsToLocationUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<VisitsToLocationWhereUniqueInput>
    disconnect?: Enumerable<VisitsToLocationWhereUniqueInput>
    delete?: Enumerable<VisitsToLocationWhereUniqueInput>
    connect?: Enumerable<VisitsToLocationWhereUniqueInput>
    update?: Enumerable<VisitsToLocationUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<VisitsToLocationUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<VisitsToLocationScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutVisitsInput = {
    create?: XOR<UserCreateWithoutVisitsInput, UserUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVisitsInput
    connect?: UserWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutVisitsInput = {
    create?: XOR<LocationCreateWithoutVisitsInput, LocationUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutVisitsInput
    connect?: LocationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutVisitsNestedInput = {
    create?: XOR<UserCreateWithoutVisitsInput, UserUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVisitsInput
    upsert?: UserUpsertWithoutVisitsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutVisitsInput, UserUncheckedUpdateWithoutVisitsInput>
  }

  export type LocationUpdateOneRequiredWithoutVisitsNestedInput = {
    create?: XOR<LocationCreateWithoutVisitsInput, LocationUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutVisitsInput
    upsert?: LocationUpsertWithoutVisitsInput
    connect?: LocationWhereUniqueInput
    update?: XOR<LocationUpdateWithoutVisitsInput, LocationUncheckedUpdateWithoutVisitsInput>
  }

  export type UserCreateNestedManyWithoutLocationInput = {
    create?: XOR<Enumerable<UserCreateWithoutLocationInput>, Enumerable<UserUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutLocationInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type DevicesCreateNestedManyWithoutLocationInput = {
    create?: XOR<Enumerable<DevicesCreateWithoutLocationInput>, Enumerable<DevicesUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<DevicesCreateOrConnectWithoutLocationInput>
    connect?: Enumerable<DevicesWhereUniqueInput>
  }

  export type CountryCreateNestedOneWithoutLocationsInput = {
    create?: XOR<CountryCreateWithoutLocationsInput, CountryUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: CountryCreateOrConnectWithoutLocationsInput
    connect?: CountryWhereUniqueInput
  }

  export type VisitsToLocationCreateNestedManyWithoutLocationInput = {
    create?: XOR<Enumerable<VisitsToLocationCreateWithoutLocationInput>, Enumerable<VisitsToLocationUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<VisitsToLocationCreateOrConnectWithoutLocationInput>
    connect?: Enumerable<VisitsToLocationWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<Enumerable<UserCreateWithoutLocationInput>, Enumerable<UserUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutLocationInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type DevicesUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<Enumerable<DevicesCreateWithoutLocationInput>, Enumerable<DevicesUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<DevicesCreateOrConnectWithoutLocationInput>
    connect?: Enumerable<DevicesWhereUniqueInput>
  }

  export type VisitsToLocationUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<Enumerable<VisitsToLocationCreateWithoutLocationInput>, Enumerable<VisitsToLocationUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<VisitsToLocationCreateOrConnectWithoutLocationInput>
    connect?: Enumerable<VisitsToLocationWhereUniqueInput>
  }

  export type UserUpdateManyWithoutLocationNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutLocationInput>, Enumerable<UserUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutLocationInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutLocationInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutLocationInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutLocationInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type DevicesUpdateManyWithoutLocationNestedInput = {
    create?: XOR<Enumerable<DevicesCreateWithoutLocationInput>, Enumerable<DevicesUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<DevicesCreateOrConnectWithoutLocationInput>
    upsert?: Enumerable<DevicesUpsertWithWhereUniqueWithoutLocationInput>
    set?: Enumerable<DevicesWhereUniqueInput>
    disconnect?: Enumerable<DevicesWhereUniqueInput>
    delete?: Enumerable<DevicesWhereUniqueInput>
    connect?: Enumerable<DevicesWhereUniqueInput>
    update?: Enumerable<DevicesUpdateWithWhereUniqueWithoutLocationInput>
    updateMany?: Enumerable<DevicesUpdateManyWithWhereWithoutLocationInput>
    deleteMany?: Enumerable<DevicesScalarWhereInput>
  }

  export type CountryUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<CountryCreateWithoutLocationsInput, CountryUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: CountryCreateOrConnectWithoutLocationsInput
    upsert?: CountryUpsertWithoutLocationsInput
    connect?: CountryWhereUniqueInput
    update?: XOR<CountryUpdateWithoutLocationsInput, CountryUncheckedUpdateWithoutLocationsInput>
  }

  export type VisitsToLocationUpdateManyWithoutLocationNestedInput = {
    create?: XOR<Enumerable<VisitsToLocationCreateWithoutLocationInput>, Enumerable<VisitsToLocationUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<VisitsToLocationCreateOrConnectWithoutLocationInput>
    upsert?: Enumerable<VisitsToLocationUpsertWithWhereUniqueWithoutLocationInput>
    set?: Enumerable<VisitsToLocationWhereUniqueInput>
    disconnect?: Enumerable<VisitsToLocationWhereUniqueInput>
    delete?: Enumerable<VisitsToLocationWhereUniqueInput>
    connect?: Enumerable<VisitsToLocationWhereUniqueInput>
    update?: Enumerable<VisitsToLocationUpdateWithWhereUniqueWithoutLocationInput>
    updateMany?: Enumerable<VisitsToLocationUpdateManyWithWhereWithoutLocationInput>
    deleteMany?: Enumerable<VisitsToLocationScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutLocationInput>, Enumerable<UserUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutLocationInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutLocationInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutLocationInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutLocationInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type DevicesUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<Enumerable<DevicesCreateWithoutLocationInput>, Enumerable<DevicesUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<DevicesCreateOrConnectWithoutLocationInput>
    upsert?: Enumerable<DevicesUpsertWithWhereUniqueWithoutLocationInput>
    set?: Enumerable<DevicesWhereUniqueInput>
    disconnect?: Enumerable<DevicesWhereUniqueInput>
    delete?: Enumerable<DevicesWhereUniqueInput>
    connect?: Enumerable<DevicesWhereUniqueInput>
    update?: Enumerable<DevicesUpdateWithWhereUniqueWithoutLocationInput>
    updateMany?: Enumerable<DevicesUpdateManyWithWhereWithoutLocationInput>
    deleteMany?: Enumerable<DevicesScalarWhereInput>
  }

  export type VisitsToLocationUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<Enumerable<VisitsToLocationCreateWithoutLocationInput>, Enumerable<VisitsToLocationUncheckedCreateWithoutLocationInput>>
    connectOrCreate?: Enumerable<VisitsToLocationCreateOrConnectWithoutLocationInput>
    upsert?: Enumerable<VisitsToLocationUpsertWithWhereUniqueWithoutLocationInput>
    set?: Enumerable<VisitsToLocationWhereUniqueInput>
    disconnect?: Enumerable<VisitsToLocationWhereUniqueInput>
    delete?: Enumerable<VisitsToLocationWhereUniqueInput>
    connect?: Enumerable<VisitsToLocationWhereUniqueInput>
    update?: Enumerable<VisitsToLocationUpdateWithWhereUniqueWithoutLocationInput>
    updateMany?: Enumerable<VisitsToLocationUpdateManyWithWhereWithoutLocationInput>
    deleteMany?: Enumerable<VisitsToLocationScalarWhereInput>
  }

  export type LocationCreateNestedOneWithoutDevicesInput = {
    create?: XOR<LocationCreateWithoutDevicesInput, LocationUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutDevicesInput
    connect?: LocationWhereUniqueInput
  }

  export type DeviceTypesCreateNestedOneWithoutDevicesInput = {
    create?: XOR<DeviceTypesCreateWithoutDevicesInput, DeviceTypesUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: DeviceTypesCreateOrConnectWithoutDevicesInput
    connect?: DeviceTypesWhereUniqueInput
  }

  export type LocationUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<LocationCreateWithoutDevicesInput, LocationUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutDevicesInput
    upsert?: LocationUpsertWithoutDevicesInput
    connect?: LocationWhereUniqueInput
    update?: XOR<LocationUpdateWithoutDevicesInput, LocationUncheckedUpdateWithoutDevicesInput>
  }

  export type DeviceTypesUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<DeviceTypesCreateWithoutDevicesInput, DeviceTypesUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: DeviceTypesCreateOrConnectWithoutDevicesInput
    upsert?: DeviceTypesUpsertWithoutDevicesInput
    connect?: DeviceTypesWhereUniqueInput
    update?: XOR<DeviceTypesUpdateWithoutDevicesInput, DeviceTypesUncheckedUpdateWithoutDevicesInput>
  }

  export type DevicesCreateNestedManyWithoutDeviceTypeInput = {
    create?: XOR<Enumerable<DevicesCreateWithoutDeviceTypeInput>, Enumerable<DevicesUncheckedCreateWithoutDeviceTypeInput>>
    connectOrCreate?: Enumerable<DevicesCreateOrConnectWithoutDeviceTypeInput>
    connect?: Enumerable<DevicesWhereUniqueInput>
  }

  export type DevicesUncheckedCreateNestedManyWithoutDeviceTypeInput = {
    create?: XOR<Enumerable<DevicesCreateWithoutDeviceTypeInput>, Enumerable<DevicesUncheckedCreateWithoutDeviceTypeInput>>
    connectOrCreate?: Enumerable<DevicesCreateOrConnectWithoutDeviceTypeInput>
    connect?: Enumerable<DevicesWhereUniqueInput>
  }

  export type DevicesUpdateManyWithoutDeviceTypeNestedInput = {
    create?: XOR<Enumerable<DevicesCreateWithoutDeviceTypeInput>, Enumerable<DevicesUncheckedCreateWithoutDeviceTypeInput>>
    connectOrCreate?: Enumerable<DevicesCreateOrConnectWithoutDeviceTypeInput>
    upsert?: Enumerable<DevicesUpsertWithWhereUniqueWithoutDeviceTypeInput>
    set?: Enumerable<DevicesWhereUniqueInput>
    disconnect?: Enumerable<DevicesWhereUniqueInput>
    delete?: Enumerable<DevicesWhereUniqueInput>
    connect?: Enumerable<DevicesWhereUniqueInput>
    update?: Enumerable<DevicesUpdateWithWhereUniqueWithoutDeviceTypeInput>
    updateMany?: Enumerable<DevicesUpdateManyWithWhereWithoutDeviceTypeInput>
    deleteMany?: Enumerable<DevicesScalarWhereInput>
  }

  export type DevicesUncheckedUpdateManyWithoutDeviceTypeNestedInput = {
    create?: XOR<Enumerable<DevicesCreateWithoutDeviceTypeInput>, Enumerable<DevicesUncheckedCreateWithoutDeviceTypeInput>>
    connectOrCreate?: Enumerable<DevicesCreateOrConnectWithoutDeviceTypeInput>
    upsert?: Enumerable<DevicesUpsertWithWhereUniqueWithoutDeviceTypeInput>
    set?: Enumerable<DevicesWhereUniqueInput>
    disconnect?: Enumerable<DevicesWhereUniqueInput>
    delete?: Enumerable<DevicesWhereUniqueInput>
    connect?: Enumerable<DevicesWhereUniqueInput>
    update?: Enumerable<DevicesUpdateWithWhereUniqueWithoutDeviceTypeInput>
    updateMany?: Enumerable<DevicesUpdateManyWithWhereWithoutDeviceTypeInput>
    deleteMany?: Enumerable<DevicesScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type LocationCreateWithoutCountryInput = {
    id?: string
    name: string
    users?: UserCreateNestedManyWithoutLocationInput
    devices?: DevicesCreateNestedManyWithoutLocationInput
    lat: string
    long: string
    visits?: VisitsToLocationCreateNestedManyWithoutLocationInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUncheckedCreateWithoutCountryInput = {
    id?: string
    name: string
    users?: UserUncheckedCreateNestedManyWithoutLocationInput
    devices?: DevicesUncheckedCreateNestedManyWithoutLocationInput
    lat: string
    long: string
    visits?: VisitsToLocationUncheckedCreateNestedManyWithoutLocationInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationCreateOrConnectWithoutCountryInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutCountryInput, LocationUncheckedCreateWithoutCountryInput>
  }

  export type LocationUpsertWithWhereUniqueWithoutCountryInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutCountryInput, LocationUncheckedUpdateWithoutCountryInput>
    create: XOR<LocationCreateWithoutCountryInput, LocationUncheckedCreateWithoutCountryInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutCountryInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutCountryInput, LocationUncheckedUpdateWithoutCountryInput>
  }

  export type LocationUpdateManyWithWhereWithoutCountryInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutLocationsInput>
  }

  export type LocationScalarWhereInput = {
    AND?: Enumerable<LocationScalarWhereInput>
    OR?: Enumerable<LocationScalarWhereInput>
    NOT?: Enumerable<LocationScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    lat?: StringFilter | string
    long?: StringFilter | string
    countryId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type LocationCreateWithoutUsersInput = {
    id?: string
    name: string
    devices?: DevicesCreateNestedManyWithoutLocationInput
    lat: string
    long: string
    country: CountryCreateNestedOneWithoutLocationsInput
    visits?: VisitsToLocationCreateNestedManyWithoutLocationInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    devices?: DevicesUncheckedCreateNestedManyWithoutLocationInput
    lat: string
    long: string
    countryId: string
    visits?: VisitsToLocationUncheckedCreateNestedManyWithoutLocationInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationCreateOrConnectWithoutUsersInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutUsersInput, LocationUncheckedCreateWithoutUsersInput>
  }

  export type VisitsToLocationCreateWithoutUserInput = {
    id?: string
    location: LocationCreateNestedOneWithoutVisitsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitsToLocationUncheckedCreateWithoutUserInput = {
    id?: string
    locationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitsToLocationCreateOrConnectWithoutUserInput = {
    where: VisitsToLocationWhereUniqueInput
    create: XOR<VisitsToLocationCreateWithoutUserInput, VisitsToLocationUncheckedCreateWithoutUserInput>
  }

  export type LocationUpsertWithoutUsersInput = {
    update: XOR<LocationUpdateWithoutUsersInput, LocationUncheckedUpdateWithoutUsersInput>
    create: XOR<LocationCreateWithoutUsersInput, LocationUncheckedCreateWithoutUsersInput>
  }

  export type LocationUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    devices?: DevicesUpdateManyWithoutLocationNestedInput
    lat?: StringFieldUpdateOperationsInput | string
    long?: StringFieldUpdateOperationsInput | string
    country?: CountryUpdateOneRequiredWithoutLocationsNestedInput
    visits?: VisitsToLocationUpdateManyWithoutLocationNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    devices?: DevicesUncheckedUpdateManyWithoutLocationNestedInput
    lat?: StringFieldUpdateOperationsInput | string
    long?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    visits?: VisitsToLocationUncheckedUpdateManyWithoutLocationNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitsToLocationUpsertWithWhereUniqueWithoutUserInput = {
    where: VisitsToLocationWhereUniqueInput
    update: XOR<VisitsToLocationUpdateWithoutUserInput, VisitsToLocationUncheckedUpdateWithoutUserInput>
    create: XOR<VisitsToLocationCreateWithoutUserInput, VisitsToLocationUncheckedCreateWithoutUserInput>
  }

  export type VisitsToLocationUpdateWithWhereUniqueWithoutUserInput = {
    where: VisitsToLocationWhereUniqueInput
    data: XOR<VisitsToLocationUpdateWithoutUserInput, VisitsToLocationUncheckedUpdateWithoutUserInput>
  }

  export type VisitsToLocationUpdateManyWithWhereWithoutUserInput = {
    where: VisitsToLocationScalarWhereInput
    data: XOR<VisitsToLocationUpdateManyMutationInput, VisitsToLocationUncheckedUpdateManyWithoutVisitsInput>
  }

  export type VisitsToLocationScalarWhereInput = {
    AND?: Enumerable<VisitsToLocationScalarWhereInput>
    OR?: Enumerable<VisitsToLocationScalarWhereInput>
    NOT?: Enumerable<VisitsToLocationScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    locationId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserCreateWithoutVisitsInput = {
    id?: string
    birthDay: Date | string
    name?: string | null
    cardNumber: string
    isAllowed?: boolean
    memberShipType: number
    email: string
    location: LocationCreateNestedOneWithoutUsersInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutVisitsInput = {
    id?: string
    birthDay: Date | string
    name?: string | null
    locationId: string
    cardNumber: string
    isAllowed?: boolean
    memberShipType: number
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutVisitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVisitsInput, UserUncheckedCreateWithoutVisitsInput>
  }

  export type LocationCreateWithoutVisitsInput = {
    id?: string
    name: string
    users?: UserCreateNestedManyWithoutLocationInput
    devices?: DevicesCreateNestedManyWithoutLocationInput
    lat: string
    long: string
    country: CountryCreateNestedOneWithoutLocationsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUncheckedCreateWithoutVisitsInput = {
    id?: string
    name: string
    users?: UserUncheckedCreateNestedManyWithoutLocationInput
    devices?: DevicesUncheckedCreateNestedManyWithoutLocationInput
    lat: string
    long: string
    countryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationCreateOrConnectWithoutVisitsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutVisitsInput, LocationUncheckedCreateWithoutVisitsInput>
  }

  export type UserUpsertWithoutVisitsInput = {
    update: XOR<UserUpdateWithoutVisitsInput, UserUncheckedUpdateWithoutVisitsInput>
    create: XOR<UserCreateWithoutVisitsInput, UserUncheckedCreateWithoutVisitsInput>
  }

  export type UserUpdateWithoutVisitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    birthDay?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cardNumber?: StringFieldUpdateOperationsInput | string
    isAllowed?: BoolFieldUpdateOperationsInput | boolean
    memberShipType?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    location?: LocationUpdateOneRequiredWithoutUsersNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutVisitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    birthDay?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    isAllowed?: BoolFieldUpdateOperationsInput | boolean
    memberShipType?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUpsertWithoutVisitsInput = {
    update: XOR<LocationUpdateWithoutVisitsInput, LocationUncheckedUpdateWithoutVisitsInput>
    create: XOR<LocationCreateWithoutVisitsInput, LocationUncheckedCreateWithoutVisitsInput>
  }

  export type LocationUpdateWithoutVisitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutLocationNestedInput
    devices?: DevicesUpdateManyWithoutLocationNestedInput
    lat?: StringFieldUpdateOperationsInput | string
    long?: StringFieldUpdateOperationsInput | string
    country?: CountryUpdateOneRequiredWithoutLocationsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateWithoutVisitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutLocationNestedInput
    devices?: DevicesUncheckedUpdateManyWithoutLocationNestedInput
    lat?: StringFieldUpdateOperationsInput | string
    long?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutLocationInput = {
    id?: string
    birthDay: Date | string
    name?: string | null
    cardNumber: string
    isAllowed?: boolean
    memberShipType: number
    email: string
    visits?: VisitsToLocationCreateNestedManyWithoutUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutLocationInput = {
    id?: string
    birthDay: Date | string
    name?: string | null
    cardNumber: string
    isAllowed?: boolean
    memberShipType: number
    email: string
    visits?: VisitsToLocationUncheckedCreateNestedManyWithoutUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutLocationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLocationInput, UserUncheckedCreateWithoutLocationInput>
  }

  export type DevicesCreateWithoutLocationInput = {
    id?: string
    name: string
    deviceId: string
    deviceType: DeviceTypesCreateNestedOneWithoutDevicesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DevicesUncheckedCreateWithoutLocationInput = {
    id?: string
    name: string
    deviceId: string
    deviceTypeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DevicesCreateOrConnectWithoutLocationInput = {
    where: DevicesWhereUniqueInput
    create: XOR<DevicesCreateWithoutLocationInput, DevicesUncheckedCreateWithoutLocationInput>
  }

  export type CountryCreateWithoutLocationsInput = {
    id?: string
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CountryUncheckedCreateWithoutLocationsInput = {
    id?: string
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CountryCreateOrConnectWithoutLocationsInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutLocationsInput, CountryUncheckedCreateWithoutLocationsInput>
  }

  export type VisitsToLocationCreateWithoutLocationInput = {
    id?: string
    user: UserCreateNestedOneWithoutVisitsInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitsToLocationUncheckedCreateWithoutLocationInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitsToLocationCreateOrConnectWithoutLocationInput = {
    where: VisitsToLocationWhereUniqueInput
    create: XOR<VisitsToLocationCreateWithoutLocationInput, VisitsToLocationUncheckedCreateWithoutLocationInput>
  }

  export type UserUpsertWithWhereUniqueWithoutLocationInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutLocationInput, UserUncheckedUpdateWithoutLocationInput>
    create: XOR<UserCreateWithoutLocationInput, UserUncheckedCreateWithoutLocationInput>
  }

  export type UserUpdateWithWhereUniqueWithoutLocationInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutLocationInput, UserUncheckedUpdateWithoutLocationInput>
  }

  export type UserUpdateManyWithWhereWithoutLocationInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: StringFilter | string
    birthDay?: DateTimeFilter | Date | string
    name?: StringNullableFilter | string | null
    locationId?: StringFilter | string
    cardNumber?: StringFilter | string
    isAllowed?: BoolFilter | boolean
    memberShipType?: IntFilter | number
    email?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type DevicesUpsertWithWhereUniqueWithoutLocationInput = {
    where: DevicesWhereUniqueInput
    update: XOR<DevicesUpdateWithoutLocationInput, DevicesUncheckedUpdateWithoutLocationInput>
    create: XOR<DevicesCreateWithoutLocationInput, DevicesUncheckedCreateWithoutLocationInput>
  }

  export type DevicesUpdateWithWhereUniqueWithoutLocationInput = {
    where: DevicesWhereUniqueInput
    data: XOR<DevicesUpdateWithoutLocationInput, DevicesUncheckedUpdateWithoutLocationInput>
  }

  export type DevicesUpdateManyWithWhereWithoutLocationInput = {
    where: DevicesScalarWhereInput
    data: XOR<DevicesUpdateManyMutationInput, DevicesUncheckedUpdateManyWithoutDevicesInput>
  }

  export type DevicesScalarWhereInput = {
    AND?: Enumerable<DevicesScalarWhereInput>
    OR?: Enumerable<DevicesScalarWhereInput>
    NOT?: Enumerable<DevicesScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    deviceId?: StringFilter | string
    locationId?: StringFilter | string
    deviceTypeId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type CountryUpsertWithoutLocationsInput = {
    update: XOR<CountryUpdateWithoutLocationsInput, CountryUncheckedUpdateWithoutLocationsInput>
    create: XOR<CountryCreateWithoutLocationsInput, CountryUncheckedCreateWithoutLocationsInput>
  }

  export type CountryUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryUncheckedUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitsToLocationUpsertWithWhereUniqueWithoutLocationInput = {
    where: VisitsToLocationWhereUniqueInput
    update: XOR<VisitsToLocationUpdateWithoutLocationInput, VisitsToLocationUncheckedUpdateWithoutLocationInput>
    create: XOR<VisitsToLocationCreateWithoutLocationInput, VisitsToLocationUncheckedCreateWithoutLocationInput>
  }

  export type VisitsToLocationUpdateWithWhereUniqueWithoutLocationInput = {
    where: VisitsToLocationWhereUniqueInput
    data: XOR<VisitsToLocationUpdateWithoutLocationInput, VisitsToLocationUncheckedUpdateWithoutLocationInput>
  }

  export type VisitsToLocationUpdateManyWithWhereWithoutLocationInput = {
    where: VisitsToLocationScalarWhereInput
    data: XOR<VisitsToLocationUpdateManyMutationInput, VisitsToLocationUncheckedUpdateManyWithoutVisitsInput>
  }

  export type LocationCreateWithoutDevicesInput = {
    id?: string
    name: string
    users?: UserCreateNestedManyWithoutLocationInput
    lat: string
    long: string
    country: CountryCreateNestedOneWithoutLocationsInput
    visits?: VisitsToLocationCreateNestedManyWithoutLocationInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUncheckedCreateWithoutDevicesInput = {
    id?: string
    name: string
    users?: UserUncheckedCreateNestedManyWithoutLocationInput
    lat: string
    long: string
    countryId: string
    visits?: VisitsToLocationUncheckedCreateNestedManyWithoutLocationInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationCreateOrConnectWithoutDevicesInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutDevicesInput, LocationUncheckedCreateWithoutDevicesInput>
  }

  export type DeviceTypesCreateWithoutDevicesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceTypesUncheckedCreateWithoutDevicesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceTypesCreateOrConnectWithoutDevicesInput = {
    where: DeviceTypesWhereUniqueInput
    create: XOR<DeviceTypesCreateWithoutDevicesInput, DeviceTypesUncheckedCreateWithoutDevicesInput>
  }

  export type LocationUpsertWithoutDevicesInput = {
    update: XOR<LocationUpdateWithoutDevicesInput, LocationUncheckedUpdateWithoutDevicesInput>
    create: XOR<LocationCreateWithoutDevicesInput, LocationUncheckedCreateWithoutDevicesInput>
  }

  export type LocationUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutLocationNestedInput
    lat?: StringFieldUpdateOperationsInput | string
    long?: StringFieldUpdateOperationsInput | string
    country?: CountryUpdateOneRequiredWithoutLocationsNestedInput
    visits?: VisitsToLocationUpdateManyWithoutLocationNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutLocationNestedInput
    lat?: StringFieldUpdateOperationsInput | string
    long?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    visits?: VisitsToLocationUncheckedUpdateManyWithoutLocationNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceTypesUpsertWithoutDevicesInput = {
    update: XOR<DeviceTypesUpdateWithoutDevicesInput, DeviceTypesUncheckedUpdateWithoutDevicesInput>
    create: XOR<DeviceTypesCreateWithoutDevicesInput, DeviceTypesUncheckedCreateWithoutDevicesInput>
  }

  export type DeviceTypesUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceTypesUncheckedUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevicesCreateWithoutDeviceTypeInput = {
    id?: string
    name: string
    deviceId: string
    location: LocationCreateNestedOneWithoutDevicesInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DevicesUncheckedCreateWithoutDeviceTypeInput = {
    id?: string
    name: string
    deviceId: string
    locationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DevicesCreateOrConnectWithoutDeviceTypeInput = {
    where: DevicesWhereUniqueInput
    create: XOR<DevicesCreateWithoutDeviceTypeInput, DevicesUncheckedCreateWithoutDeviceTypeInput>
  }

  export type DevicesUpsertWithWhereUniqueWithoutDeviceTypeInput = {
    where: DevicesWhereUniqueInput
    update: XOR<DevicesUpdateWithoutDeviceTypeInput, DevicesUncheckedUpdateWithoutDeviceTypeInput>
    create: XOR<DevicesCreateWithoutDeviceTypeInput, DevicesUncheckedCreateWithoutDeviceTypeInput>
  }

  export type DevicesUpdateWithWhereUniqueWithoutDeviceTypeInput = {
    where: DevicesWhereUniqueInput
    data: XOR<DevicesUpdateWithoutDeviceTypeInput, DevicesUncheckedUpdateWithoutDeviceTypeInput>
  }

  export type DevicesUpdateManyWithWhereWithoutDeviceTypeInput = {
    where: DevicesScalarWhereInput
    data: XOR<DevicesUpdateManyMutationInput, DevicesUncheckedUpdateManyWithoutDevicesInput>
  }

  export type LocationUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutLocationNestedInput
    devices?: DevicesUpdateManyWithoutLocationNestedInput
    lat?: StringFieldUpdateOperationsInput | string
    long?: StringFieldUpdateOperationsInput | string
    visits?: VisitsToLocationUpdateManyWithoutLocationNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutLocationNestedInput
    devices?: DevicesUncheckedUpdateManyWithoutLocationNestedInput
    lat?: StringFieldUpdateOperationsInput | string
    long?: StringFieldUpdateOperationsInput | string
    visits?: VisitsToLocationUncheckedUpdateManyWithoutLocationNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lat?: StringFieldUpdateOperationsInput | string
    long?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitsToLocationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: LocationUpdateOneRequiredWithoutVisitsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitsToLocationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitsToLocationUncheckedUpdateManyWithoutVisitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    birthDay?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cardNumber?: StringFieldUpdateOperationsInput | string
    isAllowed?: BoolFieldUpdateOperationsInput | boolean
    memberShipType?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    visits?: VisitsToLocationUpdateManyWithoutUserNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    birthDay?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cardNumber?: StringFieldUpdateOperationsInput | string
    isAllowed?: BoolFieldUpdateOperationsInput | boolean
    memberShipType?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    visits?: VisitsToLocationUncheckedUpdateManyWithoutUserNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    birthDay?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    cardNumber?: StringFieldUpdateOperationsInput | string
    isAllowed?: BoolFieldUpdateOperationsInput | boolean
    memberShipType?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevicesUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    deviceType?: DeviceTypesUpdateOneRequiredWithoutDevicesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevicesUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    deviceTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevicesUncheckedUpdateManyWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    deviceTypeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitsToLocationUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutVisitsNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitsToLocationUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevicesUpdateWithoutDeviceTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    location?: LocationUpdateOneRequiredWithoutDevicesNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DevicesUncheckedUpdateWithoutDeviceTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}