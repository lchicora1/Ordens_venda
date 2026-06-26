
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model TransportType
 * 
 */
export type TransportType = $Result.DefaultSelection<Prisma.$TransportTypePayload>
/**
 * Model CustomerTransport
 * 
 */
export type CustomerTransport = $Result.DefaultSelection<Prisma.$CustomerTransportPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model SalesOrder
 * 
 */
export type SalesOrder = $Result.DefaultSelection<Prisma.$SalesOrderPayload>
/**
 * Model SalesOrderItem
 * 
 */
export type SalesOrderItem = $Result.DefaultSelection<Prisma.$SalesOrderItemPayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OrderStatus: {
  CRIADA: 'CRIADA',
  PLANEJADA: 'PLANEJADA',
  AGENDADA: 'AGENDADA',
  EM_TRANSPORTE: 'EM_TRANSPORTE',
  ENTREGUE: 'ENTREGUE'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const AuditAction: {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  STATUS_CHANGE: 'STATUS_CHANGE',
  TRANSPORT_CHANGE: 'TRANSPORT_CHANGE',
  SCHEDULE_CHANGE: 'SCHEDULE_CHANGE'
};

export type AuditAction = (typeof AuditAction)[keyof typeof AuditAction]

}

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type AuditAction = $Enums.AuditAction

export const AuditAction: typeof $Enums.AuditAction

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transportType`: Exposes CRUD operations for the **TransportType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransportTypes
    * const transportTypes = await prisma.transportType.findMany()
    * ```
    */
  get transportType(): Prisma.TransportTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customerTransport`: Exposes CRUD operations for the **CustomerTransport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerTransports
    * const customerTransports = await prisma.customerTransport.findMany()
    * ```
    */
  get customerTransport(): Prisma.CustomerTransportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salesOrder`: Exposes CRUD operations for the **SalesOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesOrders
    * const salesOrders = await prisma.salesOrder.findMany()
    * ```
    */
  get salesOrder(): Prisma.SalesOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salesOrderItem`: Exposes CRUD operations for the **SalesOrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesOrderItems
    * const salesOrderItems = await prisma.salesOrderItem.findMany()
    * ```
    */
  get salesOrderItem(): Prisma.SalesOrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Customer: 'Customer',
    TransportType: 'TransportType',
    CustomerTransport: 'CustomerTransport',
    Item: 'Item',
    SalesOrder: 'SalesOrder',
    SalesOrderItem: 'SalesOrderItem',
    Schedule: 'Schedule',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "customer" | "transportType" | "customerTransport" | "item" | "salesOrder" | "salesOrderItem" | "schedule" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      TransportType: {
        payload: Prisma.$TransportTypePayload<ExtArgs>
        fields: Prisma.TransportTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransportTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransportTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportTypePayload>
          }
          findFirst: {
            args: Prisma.TransportTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransportTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportTypePayload>
          }
          findMany: {
            args: Prisma.TransportTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportTypePayload>[]
          }
          create: {
            args: Prisma.TransportTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportTypePayload>
          }
          createMany: {
            args: Prisma.TransportTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransportTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportTypePayload>[]
          }
          delete: {
            args: Prisma.TransportTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportTypePayload>
          }
          update: {
            args: Prisma.TransportTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportTypePayload>
          }
          deleteMany: {
            args: Prisma.TransportTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransportTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransportTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportTypePayload>[]
          }
          upsert: {
            args: Prisma.TransportTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportTypePayload>
          }
          aggregate: {
            args: Prisma.TransportTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransportType>
          }
          groupBy: {
            args: Prisma.TransportTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransportTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransportTypeCountArgs<ExtArgs>
            result: $Utils.Optional<TransportTypeCountAggregateOutputType> | number
          }
        }
      }
      CustomerTransport: {
        payload: Prisma.$CustomerTransportPayload<ExtArgs>
        fields: Prisma.CustomerTransportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerTransportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTransportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerTransportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTransportPayload>
          }
          findFirst: {
            args: Prisma.CustomerTransportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTransportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerTransportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTransportPayload>
          }
          findMany: {
            args: Prisma.CustomerTransportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTransportPayload>[]
          }
          create: {
            args: Prisma.CustomerTransportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTransportPayload>
          }
          createMany: {
            args: Prisma.CustomerTransportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerTransportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTransportPayload>[]
          }
          delete: {
            args: Prisma.CustomerTransportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTransportPayload>
          }
          update: {
            args: Prisma.CustomerTransportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTransportPayload>
          }
          deleteMany: {
            args: Prisma.CustomerTransportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerTransportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerTransportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTransportPayload>[]
          }
          upsert: {
            args: Prisma.CustomerTransportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerTransportPayload>
          }
          aggregate: {
            args: Prisma.CustomerTransportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerTransport>
          }
          groupBy: {
            args: Prisma.CustomerTransportGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerTransportGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerTransportCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerTransportCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      SalesOrder: {
        payload: Prisma.$SalesOrderPayload<ExtArgs>
        fields: Prisma.SalesOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload>
          }
          findFirst: {
            args: Prisma.SalesOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload>
          }
          findMany: {
            args: Prisma.SalesOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload>[]
          }
          create: {
            args: Prisma.SalesOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload>
          }
          createMany: {
            args: Prisma.SalesOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload>[]
          }
          delete: {
            args: Prisma.SalesOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload>
          }
          update: {
            args: Prisma.SalesOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload>
          }
          deleteMany: {
            args: Prisma.SalesOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalesOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload>[]
          }
          upsert: {
            args: Prisma.SalesOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderPayload>
          }
          aggregate: {
            args: Prisma.SalesOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalesOrder>
          }
          groupBy: {
            args: Prisma.SalesOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesOrderCountArgs<ExtArgs>
            result: $Utils.Optional<SalesOrderCountAggregateOutputType> | number
          }
        }
      }
      SalesOrderItem: {
        payload: Prisma.$SalesOrderItemPayload<ExtArgs>
        fields: Prisma.SalesOrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesOrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesOrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderItemPayload>
          }
          findFirst: {
            args: Prisma.SalesOrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesOrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderItemPayload>
          }
          findMany: {
            args: Prisma.SalesOrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderItemPayload>[]
          }
          create: {
            args: Prisma.SalesOrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderItemPayload>
          }
          createMany: {
            args: Prisma.SalesOrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesOrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderItemPayload>[]
          }
          delete: {
            args: Prisma.SalesOrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderItemPayload>
          }
          update: {
            args: Prisma.SalesOrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderItemPayload>
          }
          deleteMany: {
            args: Prisma.SalesOrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesOrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalesOrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderItemPayload>[]
          }
          upsert: {
            args: Prisma.SalesOrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesOrderItemPayload>
          }
          aggregate: {
            args: Prisma.SalesOrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalesOrderItem>
          }
          groupBy: {
            args: Prisma.SalesOrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesOrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesOrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<SalesOrderItemCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    customer?: CustomerOmit
    transportType?: TransportTypeOmit
    customerTransport?: CustomerTransportOmit
    item?: ItemOmit
    salesOrder?: SalesOrderOmit
    salesOrderItem?: SalesOrderItemOmit
    schedule?: ScheduleOmit
    auditLog?: AuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    orders: number
    transports: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | CustomerCountOutputTypeCountOrdersArgs
    transports?: boolean | CustomerCountOutputTypeCountTransportsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesOrderWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountTransportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerTransportWhereInput
  }


  /**
   * Count Type TransportTypeCountOutputType
   */

  export type TransportTypeCountOutputType = {
    customers: number
    orders: number
  }

  export type TransportTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | TransportTypeCountOutputTypeCountCustomersArgs
    orders?: boolean | TransportTypeCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * TransportTypeCountOutputType without action
   */
  export type TransportTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportTypeCountOutputType
     */
    select?: TransportTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransportTypeCountOutputType without action
   */
  export type TransportTypeCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerTransportWhereInput
  }

  /**
   * TransportTypeCountOutputType without action
   */
  export type TransportTypeCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesOrderWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    orderItems: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | ItemCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesOrderItemWhereInput
  }


  /**
   * Count Type SalesOrderCountOutputType
   */

  export type SalesOrderCountOutputType = {
    items: number
    auditEvents: number
  }

  export type SalesOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | SalesOrderCountOutputTypeCountItemsArgs
    auditEvents?: boolean | SalesOrderCountOutputTypeCountAuditEventsArgs
  }

  // Custom InputTypes
  /**
   * SalesOrderCountOutputType without action
   */
  export type SalesOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderCountOutputType
     */
    select?: SalesOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SalesOrderCountOutputType without action
   */
  export type SalesOrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesOrderItemWhereInput
  }

  /**
   * SalesOrderCountOutputType without action
   */
  export type SalesOrderCountOutputTypeCountAuditEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    document: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    document: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    document: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    document?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    document?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    document?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string
    document: string
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    document?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | Customer$ordersArgs<ExtArgs>
    transports?: boolean | Customer$transportsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    document?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    document?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    document?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "document" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Customer$ordersArgs<ExtArgs>
    transports?: boolean | Customer$transportsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      orders: Prisma.$SalesOrderPayload<ExtArgs>[]
      transports: Prisma.$CustomerTransportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      document: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Customer$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transports<T extends Customer$transportsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$transportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerTransportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly document: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.orders
   */
  export type Customer$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    where?: SalesOrderWhereInput
    orderBy?: SalesOrderOrderByWithRelationInput | SalesOrderOrderByWithRelationInput[]
    cursor?: SalesOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesOrderScalarFieldEnum | SalesOrderScalarFieldEnum[]
  }

  /**
   * Customer.transports
   */
  export type Customer$transportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTransport
     */
    select?: CustomerTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTransport
     */
    omit?: CustomerTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTransportInclude<ExtArgs> | null
    where?: CustomerTransportWhereInput
    orderBy?: CustomerTransportOrderByWithRelationInput | CustomerTransportOrderByWithRelationInput[]
    cursor?: CustomerTransportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerTransportScalarFieldEnum | CustomerTransportScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model TransportType
   */

  export type AggregateTransportType = {
    _count: TransportTypeCountAggregateOutputType | null
    _min: TransportTypeMinAggregateOutputType | null
    _max: TransportTypeMaxAggregateOutputType | null
  }

  export type TransportTypeMinAggregateOutputType = {
    id: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransportTypeMaxAggregateOutputType = {
    id: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransportTypeCountAggregateOutputType = {
    id: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransportTypeMinAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransportTypeMaxAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransportTypeCountAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransportTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransportType to aggregate.
     */
    where?: TransportTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransportTypes to fetch.
     */
    orderBy?: TransportTypeOrderByWithRelationInput | TransportTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransportTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransportTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransportTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransportTypes
    **/
    _count?: true | TransportTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransportTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransportTypeMaxAggregateInputType
  }

  export type GetTransportTypeAggregateType<T extends TransportTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateTransportType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransportType[P]>
      : GetScalarType<T[P], AggregateTransportType[P]>
  }




  export type TransportTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransportTypeWhereInput
    orderBy?: TransportTypeOrderByWithAggregationInput | TransportTypeOrderByWithAggregationInput[]
    by: TransportTypeScalarFieldEnum[] | TransportTypeScalarFieldEnum
    having?: TransportTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransportTypeCountAggregateInputType | true
    _min?: TransportTypeMinAggregateInputType
    _max?: TransportTypeMaxAggregateInputType
  }

  export type TransportTypeGroupByOutputType = {
    id: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: TransportTypeCountAggregateOutputType | null
    _min: TransportTypeMinAggregateOutputType | null
    _max: TransportTypeMaxAggregateOutputType | null
  }

  type GetTransportTypeGroupByPayload<T extends TransportTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransportTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransportTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransportTypeGroupByOutputType[P]>
            : GetScalarType<T[P], TransportTypeGroupByOutputType[P]>
        }
      >
    >


  export type TransportTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customers?: boolean | TransportType$customersArgs<ExtArgs>
    orders?: boolean | TransportType$ordersArgs<ExtArgs>
    _count?: boolean | TransportTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transportType"]>

  export type TransportTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["transportType"]>

  export type TransportTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["transportType"]>

  export type TransportTypeSelectScalar = {
    id?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransportTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["transportType"]>
  export type TransportTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | TransportType$customersArgs<ExtArgs>
    orders?: boolean | TransportType$ordersArgs<ExtArgs>
    _count?: boolean | TransportTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransportTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TransportTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TransportTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransportType"
    objects: {
      customers: Prisma.$CustomerTransportPayload<ExtArgs>[]
      orders: Prisma.$SalesOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transportType"]>
    composites: {}
  }

  type TransportTypeGetPayload<S extends boolean | null | undefined | TransportTypeDefaultArgs> = $Result.GetResult<Prisma.$TransportTypePayload, S>

  type TransportTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransportTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransportTypeCountAggregateInputType | true
    }

  export interface TransportTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransportType'], meta: { name: 'TransportType' } }
    /**
     * Find zero or one TransportType that matches the filter.
     * @param {TransportTypeFindUniqueArgs} args - Arguments to find a TransportType
     * @example
     * // Get one TransportType
     * const transportType = await prisma.transportType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransportTypeFindUniqueArgs>(args: SelectSubset<T, TransportTypeFindUniqueArgs<ExtArgs>>): Prisma__TransportTypeClient<$Result.GetResult<Prisma.$TransportTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransportType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransportTypeFindUniqueOrThrowArgs} args - Arguments to find a TransportType
     * @example
     * // Get one TransportType
     * const transportType = await prisma.transportType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransportTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TransportTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransportTypeClient<$Result.GetResult<Prisma.$TransportTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransportType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportTypeFindFirstArgs} args - Arguments to find a TransportType
     * @example
     * // Get one TransportType
     * const transportType = await prisma.transportType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransportTypeFindFirstArgs>(args?: SelectSubset<T, TransportTypeFindFirstArgs<ExtArgs>>): Prisma__TransportTypeClient<$Result.GetResult<Prisma.$TransportTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransportType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportTypeFindFirstOrThrowArgs} args - Arguments to find a TransportType
     * @example
     * // Get one TransportType
     * const transportType = await prisma.transportType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransportTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TransportTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransportTypeClient<$Result.GetResult<Prisma.$TransportTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransportTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransportTypes
     * const transportTypes = await prisma.transportType.findMany()
     * 
     * // Get first 10 TransportTypes
     * const transportTypes = await prisma.transportType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transportTypeWithIdOnly = await prisma.transportType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransportTypeFindManyArgs>(args?: SelectSubset<T, TransportTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransportType.
     * @param {TransportTypeCreateArgs} args - Arguments to create a TransportType.
     * @example
     * // Create one TransportType
     * const TransportType = await prisma.transportType.create({
     *   data: {
     *     // ... data to create a TransportType
     *   }
     * })
     * 
     */
    create<T extends TransportTypeCreateArgs>(args: SelectSubset<T, TransportTypeCreateArgs<ExtArgs>>): Prisma__TransportTypeClient<$Result.GetResult<Prisma.$TransportTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransportTypes.
     * @param {TransportTypeCreateManyArgs} args - Arguments to create many TransportTypes.
     * @example
     * // Create many TransportTypes
     * const transportType = await prisma.transportType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransportTypeCreateManyArgs>(args?: SelectSubset<T, TransportTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransportTypes and returns the data saved in the database.
     * @param {TransportTypeCreateManyAndReturnArgs} args - Arguments to create many TransportTypes.
     * @example
     * // Create many TransportTypes
     * const transportType = await prisma.transportType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransportTypes and only return the `id`
     * const transportTypeWithIdOnly = await prisma.transportType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransportTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, TransportTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransportType.
     * @param {TransportTypeDeleteArgs} args - Arguments to delete one TransportType.
     * @example
     * // Delete one TransportType
     * const TransportType = await prisma.transportType.delete({
     *   where: {
     *     // ... filter to delete one TransportType
     *   }
     * })
     * 
     */
    delete<T extends TransportTypeDeleteArgs>(args: SelectSubset<T, TransportTypeDeleteArgs<ExtArgs>>): Prisma__TransportTypeClient<$Result.GetResult<Prisma.$TransportTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransportType.
     * @param {TransportTypeUpdateArgs} args - Arguments to update one TransportType.
     * @example
     * // Update one TransportType
     * const transportType = await prisma.transportType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransportTypeUpdateArgs>(args: SelectSubset<T, TransportTypeUpdateArgs<ExtArgs>>): Prisma__TransportTypeClient<$Result.GetResult<Prisma.$TransportTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransportTypes.
     * @param {TransportTypeDeleteManyArgs} args - Arguments to filter TransportTypes to delete.
     * @example
     * // Delete a few TransportTypes
     * const { count } = await prisma.transportType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransportTypeDeleteManyArgs>(args?: SelectSubset<T, TransportTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransportTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransportTypes
     * const transportType = await prisma.transportType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransportTypeUpdateManyArgs>(args: SelectSubset<T, TransportTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransportTypes and returns the data updated in the database.
     * @param {TransportTypeUpdateManyAndReturnArgs} args - Arguments to update many TransportTypes.
     * @example
     * // Update many TransportTypes
     * const transportType = await prisma.transportType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransportTypes and only return the `id`
     * const transportTypeWithIdOnly = await prisma.transportType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransportTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, TransportTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransportType.
     * @param {TransportTypeUpsertArgs} args - Arguments to update or create a TransportType.
     * @example
     * // Update or create a TransportType
     * const transportType = await prisma.transportType.upsert({
     *   create: {
     *     // ... data to create a TransportType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransportType we want to update
     *   }
     * })
     */
    upsert<T extends TransportTypeUpsertArgs>(args: SelectSubset<T, TransportTypeUpsertArgs<ExtArgs>>): Prisma__TransportTypeClient<$Result.GetResult<Prisma.$TransportTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransportTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportTypeCountArgs} args - Arguments to filter TransportTypes to count.
     * @example
     * // Count the number of TransportTypes
     * const count = await prisma.transportType.count({
     *   where: {
     *     // ... the filter for the TransportTypes we want to count
     *   }
     * })
    **/
    count<T extends TransportTypeCountArgs>(
      args?: Subset<T, TransportTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransportTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransportType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransportTypeAggregateArgs>(args: Subset<T, TransportTypeAggregateArgs>): Prisma.PrismaPromise<GetTransportTypeAggregateType<T>>

    /**
     * Group by TransportType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportTypeGroupByArgs} args - Group by arguments.
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
      T extends TransportTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransportTypeGroupByArgs['orderBy'] }
        : { orderBy?: TransportTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TransportTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransportTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransportType model
   */
  readonly fields: TransportTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransportType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransportTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customers<T extends TransportType$customersArgs<ExtArgs> = {}>(args?: Subset<T, TransportType$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerTransportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends TransportType$ordersArgs<ExtArgs> = {}>(args?: Subset<T, TransportType$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TransportType model
   */
  interface TransportTypeFieldRefs {
    readonly id: FieldRef<"TransportType", 'String'>
    readonly description: FieldRef<"TransportType", 'String'>
    readonly createdAt: FieldRef<"TransportType", 'DateTime'>
    readonly updatedAt: FieldRef<"TransportType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TransportType findUnique
   */
  export type TransportTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportType
     */
    select?: TransportTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportType
     */
    omit?: TransportTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportTypeInclude<ExtArgs> | null
    /**
     * Filter, which TransportType to fetch.
     */
    where: TransportTypeWhereUniqueInput
  }

  /**
   * TransportType findUniqueOrThrow
   */
  export type TransportTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportType
     */
    select?: TransportTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportType
     */
    omit?: TransportTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportTypeInclude<ExtArgs> | null
    /**
     * Filter, which TransportType to fetch.
     */
    where: TransportTypeWhereUniqueInput
  }

  /**
   * TransportType findFirst
   */
  export type TransportTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportType
     */
    select?: TransportTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportType
     */
    omit?: TransportTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportTypeInclude<ExtArgs> | null
    /**
     * Filter, which TransportType to fetch.
     */
    where?: TransportTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransportTypes to fetch.
     */
    orderBy?: TransportTypeOrderByWithRelationInput | TransportTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransportTypes.
     */
    cursor?: TransportTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransportTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransportTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransportTypes.
     */
    distinct?: TransportTypeScalarFieldEnum | TransportTypeScalarFieldEnum[]
  }

  /**
   * TransportType findFirstOrThrow
   */
  export type TransportTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportType
     */
    select?: TransportTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportType
     */
    omit?: TransportTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportTypeInclude<ExtArgs> | null
    /**
     * Filter, which TransportType to fetch.
     */
    where?: TransportTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransportTypes to fetch.
     */
    orderBy?: TransportTypeOrderByWithRelationInput | TransportTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransportTypes.
     */
    cursor?: TransportTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransportTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransportTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransportTypes.
     */
    distinct?: TransportTypeScalarFieldEnum | TransportTypeScalarFieldEnum[]
  }

  /**
   * TransportType findMany
   */
  export type TransportTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportType
     */
    select?: TransportTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportType
     */
    omit?: TransportTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportTypeInclude<ExtArgs> | null
    /**
     * Filter, which TransportTypes to fetch.
     */
    where?: TransportTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransportTypes to fetch.
     */
    orderBy?: TransportTypeOrderByWithRelationInput | TransportTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransportTypes.
     */
    cursor?: TransportTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransportTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransportTypes.
     */
    skip?: number
    distinct?: TransportTypeScalarFieldEnum | TransportTypeScalarFieldEnum[]
  }

  /**
   * TransportType create
   */
  export type TransportTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportType
     */
    select?: TransportTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportType
     */
    omit?: TransportTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a TransportType.
     */
    data: XOR<TransportTypeCreateInput, TransportTypeUncheckedCreateInput>
  }

  /**
   * TransportType createMany
   */
  export type TransportTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransportTypes.
     */
    data: TransportTypeCreateManyInput | TransportTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransportType createManyAndReturn
   */
  export type TransportTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportType
     */
    select?: TransportTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransportType
     */
    omit?: TransportTypeOmit<ExtArgs> | null
    /**
     * The data used to create many TransportTypes.
     */
    data: TransportTypeCreateManyInput | TransportTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransportType update
   */
  export type TransportTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportType
     */
    select?: TransportTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportType
     */
    omit?: TransportTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a TransportType.
     */
    data: XOR<TransportTypeUpdateInput, TransportTypeUncheckedUpdateInput>
    /**
     * Choose, which TransportType to update.
     */
    where: TransportTypeWhereUniqueInput
  }

  /**
   * TransportType updateMany
   */
  export type TransportTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransportTypes.
     */
    data: XOR<TransportTypeUpdateManyMutationInput, TransportTypeUncheckedUpdateManyInput>
    /**
     * Filter which TransportTypes to update
     */
    where?: TransportTypeWhereInput
    /**
     * Limit how many TransportTypes to update.
     */
    limit?: number
  }

  /**
   * TransportType updateManyAndReturn
   */
  export type TransportTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportType
     */
    select?: TransportTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransportType
     */
    omit?: TransportTypeOmit<ExtArgs> | null
    /**
     * The data used to update TransportTypes.
     */
    data: XOR<TransportTypeUpdateManyMutationInput, TransportTypeUncheckedUpdateManyInput>
    /**
     * Filter which TransportTypes to update
     */
    where?: TransportTypeWhereInput
    /**
     * Limit how many TransportTypes to update.
     */
    limit?: number
  }

  /**
   * TransportType upsert
   */
  export type TransportTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportType
     */
    select?: TransportTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportType
     */
    omit?: TransportTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the TransportType to update in case it exists.
     */
    where: TransportTypeWhereUniqueInput
    /**
     * In case the TransportType found by the `where` argument doesn't exist, create a new TransportType with this data.
     */
    create: XOR<TransportTypeCreateInput, TransportTypeUncheckedCreateInput>
    /**
     * In case the TransportType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransportTypeUpdateInput, TransportTypeUncheckedUpdateInput>
  }

  /**
   * TransportType delete
   */
  export type TransportTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportType
     */
    select?: TransportTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportType
     */
    omit?: TransportTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportTypeInclude<ExtArgs> | null
    /**
     * Filter which TransportType to delete.
     */
    where: TransportTypeWhereUniqueInput
  }

  /**
   * TransportType deleteMany
   */
  export type TransportTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransportTypes to delete
     */
    where?: TransportTypeWhereInput
    /**
     * Limit how many TransportTypes to delete.
     */
    limit?: number
  }

  /**
   * TransportType.customers
   */
  export type TransportType$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTransport
     */
    select?: CustomerTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTransport
     */
    omit?: CustomerTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTransportInclude<ExtArgs> | null
    where?: CustomerTransportWhereInput
    orderBy?: CustomerTransportOrderByWithRelationInput | CustomerTransportOrderByWithRelationInput[]
    cursor?: CustomerTransportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerTransportScalarFieldEnum | CustomerTransportScalarFieldEnum[]
  }

  /**
   * TransportType.orders
   */
  export type TransportType$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    where?: SalesOrderWhereInput
    orderBy?: SalesOrderOrderByWithRelationInput | SalesOrderOrderByWithRelationInput[]
    cursor?: SalesOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesOrderScalarFieldEnum | SalesOrderScalarFieldEnum[]
  }

  /**
   * TransportType without action
   */
  export type TransportTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportType
     */
    select?: TransportTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportType
     */
    omit?: TransportTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportTypeInclude<ExtArgs> | null
  }


  /**
   * Model CustomerTransport
   */

  export type AggregateCustomerTransport = {
    _count: CustomerTransportCountAggregateOutputType | null
    _min: CustomerTransportMinAggregateOutputType | null
    _max: CustomerTransportMaxAggregateOutputType | null
  }

  export type CustomerTransportMinAggregateOutputType = {
    customerId: string | null
    transportId: string | null
  }

  export type CustomerTransportMaxAggregateOutputType = {
    customerId: string | null
    transportId: string | null
  }

  export type CustomerTransportCountAggregateOutputType = {
    customerId: number
    transportId: number
    _all: number
  }


  export type CustomerTransportMinAggregateInputType = {
    customerId?: true
    transportId?: true
  }

  export type CustomerTransportMaxAggregateInputType = {
    customerId?: true
    transportId?: true
  }

  export type CustomerTransportCountAggregateInputType = {
    customerId?: true
    transportId?: true
    _all?: true
  }

  export type CustomerTransportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerTransport to aggregate.
     */
    where?: CustomerTransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerTransports to fetch.
     */
    orderBy?: CustomerTransportOrderByWithRelationInput | CustomerTransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerTransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerTransports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerTransports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerTransports
    **/
    _count?: true | CustomerTransportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerTransportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerTransportMaxAggregateInputType
  }

  export type GetCustomerTransportAggregateType<T extends CustomerTransportAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerTransport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerTransport[P]>
      : GetScalarType<T[P], AggregateCustomerTransport[P]>
  }




  export type CustomerTransportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerTransportWhereInput
    orderBy?: CustomerTransportOrderByWithAggregationInput | CustomerTransportOrderByWithAggregationInput[]
    by: CustomerTransportScalarFieldEnum[] | CustomerTransportScalarFieldEnum
    having?: CustomerTransportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerTransportCountAggregateInputType | true
    _min?: CustomerTransportMinAggregateInputType
    _max?: CustomerTransportMaxAggregateInputType
  }

  export type CustomerTransportGroupByOutputType = {
    customerId: string
    transportId: string
    _count: CustomerTransportCountAggregateOutputType | null
    _min: CustomerTransportMinAggregateOutputType | null
    _max: CustomerTransportMaxAggregateOutputType | null
  }

  type GetCustomerTransportGroupByPayload<T extends CustomerTransportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerTransportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerTransportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerTransportGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerTransportGroupByOutputType[P]>
        }
      >
    >


  export type CustomerTransportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerId?: boolean
    transportId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    transport?: boolean | TransportTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerTransport"]>

  export type CustomerTransportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerId?: boolean
    transportId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    transport?: boolean | TransportTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerTransport"]>

  export type CustomerTransportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customerId?: boolean
    transportId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    transport?: boolean | TransportTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerTransport"]>

  export type CustomerTransportSelectScalar = {
    customerId?: boolean
    transportId?: boolean
  }

  export type CustomerTransportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"customerId" | "transportId", ExtArgs["result"]["customerTransport"]>
  export type CustomerTransportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    transport?: boolean | TransportTypeDefaultArgs<ExtArgs>
  }
  export type CustomerTransportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    transport?: boolean | TransportTypeDefaultArgs<ExtArgs>
  }
  export type CustomerTransportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    transport?: boolean | TransportTypeDefaultArgs<ExtArgs>
  }

  export type $CustomerTransportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerTransport"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      transport: Prisma.$TransportTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      customerId: string
      transportId: string
    }, ExtArgs["result"]["customerTransport"]>
    composites: {}
  }

  type CustomerTransportGetPayload<S extends boolean | null | undefined | CustomerTransportDefaultArgs> = $Result.GetResult<Prisma.$CustomerTransportPayload, S>

  type CustomerTransportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerTransportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerTransportCountAggregateInputType | true
    }

  export interface CustomerTransportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerTransport'], meta: { name: 'CustomerTransport' } }
    /**
     * Find zero or one CustomerTransport that matches the filter.
     * @param {CustomerTransportFindUniqueArgs} args - Arguments to find a CustomerTransport
     * @example
     * // Get one CustomerTransport
     * const customerTransport = await prisma.customerTransport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerTransportFindUniqueArgs>(args: SelectSubset<T, CustomerTransportFindUniqueArgs<ExtArgs>>): Prisma__CustomerTransportClient<$Result.GetResult<Prisma.$CustomerTransportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomerTransport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerTransportFindUniqueOrThrowArgs} args - Arguments to find a CustomerTransport
     * @example
     * // Get one CustomerTransport
     * const customerTransport = await prisma.customerTransport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerTransportFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerTransportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerTransportClient<$Result.GetResult<Prisma.$CustomerTransportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerTransport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerTransportFindFirstArgs} args - Arguments to find a CustomerTransport
     * @example
     * // Get one CustomerTransport
     * const customerTransport = await prisma.customerTransport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerTransportFindFirstArgs>(args?: SelectSubset<T, CustomerTransportFindFirstArgs<ExtArgs>>): Prisma__CustomerTransportClient<$Result.GetResult<Prisma.$CustomerTransportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerTransport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerTransportFindFirstOrThrowArgs} args - Arguments to find a CustomerTransport
     * @example
     * // Get one CustomerTransport
     * const customerTransport = await prisma.customerTransport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerTransportFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerTransportFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerTransportClient<$Result.GetResult<Prisma.$CustomerTransportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomerTransports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerTransportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerTransports
     * const customerTransports = await prisma.customerTransport.findMany()
     * 
     * // Get first 10 CustomerTransports
     * const customerTransports = await prisma.customerTransport.findMany({ take: 10 })
     * 
     * // Only select the `customerId`
     * const customerTransportWithCustomerIdOnly = await prisma.customerTransport.findMany({ select: { customerId: true } })
     * 
     */
    findMany<T extends CustomerTransportFindManyArgs>(args?: SelectSubset<T, CustomerTransportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerTransportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomerTransport.
     * @param {CustomerTransportCreateArgs} args - Arguments to create a CustomerTransport.
     * @example
     * // Create one CustomerTransport
     * const CustomerTransport = await prisma.customerTransport.create({
     *   data: {
     *     // ... data to create a CustomerTransport
     *   }
     * })
     * 
     */
    create<T extends CustomerTransportCreateArgs>(args: SelectSubset<T, CustomerTransportCreateArgs<ExtArgs>>): Prisma__CustomerTransportClient<$Result.GetResult<Prisma.$CustomerTransportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomerTransports.
     * @param {CustomerTransportCreateManyArgs} args - Arguments to create many CustomerTransports.
     * @example
     * // Create many CustomerTransports
     * const customerTransport = await prisma.customerTransport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerTransportCreateManyArgs>(args?: SelectSubset<T, CustomerTransportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomerTransports and returns the data saved in the database.
     * @param {CustomerTransportCreateManyAndReturnArgs} args - Arguments to create many CustomerTransports.
     * @example
     * // Create many CustomerTransports
     * const customerTransport = await prisma.customerTransport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomerTransports and only return the `customerId`
     * const customerTransportWithCustomerIdOnly = await prisma.customerTransport.createManyAndReturn({
     *   select: { customerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerTransportCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerTransportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerTransportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomerTransport.
     * @param {CustomerTransportDeleteArgs} args - Arguments to delete one CustomerTransport.
     * @example
     * // Delete one CustomerTransport
     * const CustomerTransport = await prisma.customerTransport.delete({
     *   where: {
     *     // ... filter to delete one CustomerTransport
     *   }
     * })
     * 
     */
    delete<T extends CustomerTransportDeleteArgs>(args: SelectSubset<T, CustomerTransportDeleteArgs<ExtArgs>>): Prisma__CustomerTransportClient<$Result.GetResult<Prisma.$CustomerTransportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomerTransport.
     * @param {CustomerTransportUpdateArgs} args - Arguments to update one CustomerTransport.
     * @example
     * // Update one CustomerTransport
     * const customerTransport = await prisma.customerTransport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerTransportUpdateArgs>(args: SelectSubset<T, CustomerTransportUpdateArgs<ExtArgs>>): Prisma__CustomerTransportClient<$Result.GetResult<Prisma.$CustomerTransportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomerTransports.
     * @param {CustomerTransportDeleteManyArgs} args - Arguments to filter CustomerTransports to delete.
     * @example
     * // Delete a few CustomerTransports
     * const { count } = await prisma.customerTransport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerTransportDeleteManyArgs>(args?: SelectSubset<T, CustomerTransportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerTransports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerTransportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerTransports
     * const customerTransport = await prisma.customerTransport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerTransportUpdateManyArgs>(args: SelectSubset<T, CustomerTransportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerTransports and returns the data updated in the database.
     * @param {CustomerTransportUpdateManyAndReturnArgs} args - Arguments to update many CustomerTransports.
     * @example
     * // Update many CustomerTransports
     * const customerTransport = await prisma.customerTransport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomerTransports and only return the `customerId`
     * const customerTransportWithCustomerIdOnly = await prisma.customerTransport.updateManyAndReturn({
     *   select: { customerId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerTransportUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerTransportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerTransportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomerTransport.
     * @param {CustomerTransportUpsertArgs} args - Arguments to update or create a CustomerTransport.
     * @example
     * // Update or create a CustomerTransport
     * const customerTransport = await prisma.customerTransport.upsert({
     *   create: {
     *     // ... data to create a CustomerTransport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerTransport we want to update
     *   }
     * })
     */
    upsert<T extends CustomerTransportUpsertArgs>(args: SelectSubset<T, CustomerTransportUpsertArgs<ExtArgs>>): Prisma__CustomerTransportClient<$Result.GetResult<Prisma.$CustomerTransportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomerTransports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerTransportCountArgs} args - Arguments to filter CustomerTransports to count.
     * @example
     * // Count the number of CustomerTransports
     * const count = await prisma.customerTransport.count({
     *   where: {
     *     // ... the filter for the CustomerTransports we want to count
     *   }
     * })
    **/
    count<T extends CustomerTransportCountArgs>(
      args?: Subset<T, CustomerTransportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerTransportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerTransport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerTransportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerTransportAggregateArgs>(args: Subset<T, CustomerTransportAggregateArgs>): Prisma.PrismaPromise<GetCustomerTransportAggregateType<T>>

    /**
     * Group by CustomerTransport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerTransportGroupByArgs} args - Group by arguments.
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
      T extends CustomerTransportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerTransportGroupByArgs['orderBy'] }
        : { orderBy?: CustomerTransportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CustomerTransportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerTransportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerTransport model
   */
  readonly fields: CustomerTransportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerTransport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerTransportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transport<T extends TransportTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransportTypeDefaultArgs<ExtArgs>>): Prisma__TransportTypeClient<$Result.GetResult<Prisma.$TransportTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomerTransport model
   */
  interface CustomerTransportFieldRefs {
    readonly customerId: FieldRef<"CustomerTransport", 'String'>
    readonly transportId: FieldRef<"CustomerTransport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CustomerTransport findUnique
   */
  export type CustomerTransportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTransport
     */
    select?: CustomerTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTransport
     */
    omit?: CustomerTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTransportInclude<ExtArgs> | null
    /**
     * Filter, which CustomerTransport to fetch.
     */
    where: CustomerTransportWhereUniqueInput
  }

  /**
   * CustomerTransport findUniqueOrThrow
   */
  export type CustomerTransportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTransport
     */
    select?: CustomerTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTransport
     */
    omit?: CustomerTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTransportInclude<ExtArgs> | null
    /**
     * Filter, which CustomerTransport to fetch.
     */
    where: CustomerTransportWhereUniqueInput
  }

  /**
   * CustomerTransport findFirst
   */
  export type CustomerTransportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTransport
     */
    select?: CustomerTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTransport
     */
    omit?: CustomerTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTransportInclude<ExtArgs> | null
    /**
     * Filter, which CustomerTransport to fetch.
     */
    where?: CustomerTransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerTransports to fetch.
     */
    orderBy?: CustomerTransportOrderByWithRelationInput | CustomerTransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerTransports.
     */
    cursor?: CustomerTransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerTransports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerTransports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerTransports.
     */
    distinct?: CustomerTransportScalarFieldEnum | CustomerTransportScalarFieldEnum[]
  }

  /**
   * CustomerTransport findFirstOrThrow
   */
  export type CustomerTransportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTransport
     */
    select?: CustomerTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTransport
     */
    omit?: CustomerTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTransportInclude<ExtArgs> | null
    /**
     * Filter, which CustomerTransport to fetch.
     */
    where?: CustomerTransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerTransports to fetch.
     */
    orderBy?: CustomerTransportOrderByWithRelationInput | CustomerTransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerTransports.
     */
    cursor?: CustomerTransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerTransports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerTransports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerTransports.
     */
    distinct?: CustomerTransportScalarFieldEnum | CustomerTransportScalarFieldEnum[]
  }

  /**
   * CustomerTransport findMany
   */
  export type CustomerTransportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTransport
     */
    select?: CustomerTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTransport
     */
    omit?: CustomerTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTransportInclude<ExtArgs> | null
    /**
     * Filter, which CustomerTransports to fetch.
     */
    where?: CustomerTransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerTransports to fetch.
     */
    orderBy?: CustomerTransportOrderByWithRelationInput | CustomerTransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerTransports.
     */
    cursor?: CustomerTransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerTransports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerTransports.
     */
    skip?: number
    distinct?: CustomerTransportScalarFieldEnum | CustomerTransportScalarFieldEnum[]
  }

  /**
   * CustomerTransport create
   */
  export type CustomerTransportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTransport
     */
    select?: CustomerTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTransport
     */
    omit?: CustomerTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTransportInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerTransport.
     */
    data: XOR<CustomerTransportCreateInput, CustomerTransportUncheckedCreateInput>
  }

  /**
   * CustomerTransport createMany
   */
  export type CustomerTransportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerTransports.
     */
    data: CustomerTransportCreateManyInput | CustomerTransportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerTransport createManyAndReturn
   */
  export type CustomerTransportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTransport
     */
    select?: CustomerTransportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTransport
     */
    omit?: CustomerTransportOmit<ExtArgs> | null
    /**
     * The data used to create many CustomerTransports.
     */
    data: CustomerTransportCreateManyInput | CustomerTransportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTransportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerTransport update
   */
  export type CustomerTransportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTransport
     */
    select?: CustomerTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTransport
     */
    omit?: CustomerTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTransportInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerTransport.
     */
    data: XOR<CustomerTransportUpdateInput, CustomerTransportUncheckedUpdateInput>
    /**
     * Choose, which CustomerTransport to update.
     */
    where: CustomerTransportWhereUniqueInput
  }

  /**
   * CustomerTransport updateMany
   */
  export type CustomerTransportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerTransports.
     */
    data: XOR<CustomerTransportUpdateManyMutationInput, CustomerTransportUncheckedUpdateManyInput>
    /**
     * Filter which CustomerTransports to update
     */
    where?: CustomerTransportWhereInput
    /**
     * Limit how many CustomerTransports to update.
     */
    limit?: number
  }

  /**
   * CustomerTransport updateManyAndReturn
   */
  export type CustomerTransportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTransport
     */
    select?: CustomerTransportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTransport
     */
    omit?: CustomerTransportOmit<ExtArgs> | null
    /**
     * The data used to update CustomerTransports.
     */
    data: XOR<CustomerTransportUpdateManyMutationInput, CustomerTransportUncheckedUpdateManyInput>
    /**
     * Filter which CustomerTransports to update
     */
    where?: CustomerTransportWhereInput
    /**
     * Limit how many CustomerTransports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTransportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerTransport upsert
   */
  export type CustomerTransportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTransport
     */
    select?: CustomerTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTransport
     */
    omit?: CustomerTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTransportInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerTransport to update in case it exists.
     */
    where: CustomerTransportWhereUniqueInput
    /**
     * In case the CustomerTransport found by the `where` argument doesn't exist, create a new CustomerTransport with this data.
     */
    create: XOR<CustomerTransportCreateInput, CustomerTransportUncheckedCreateInput>
    /**
     * In case the CustomerTransport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerTransportUpdateInput, CustomerTransportUncheckedUpdateInput>
  }

  /**
   * CustomerTransport delete
   */
  export type CustomerTransportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTransport
     */
    select?: CustomerTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTransport
     */
    omit?: CustomerTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTransportInclude<ExtArgs> | null
    /**
     * Filter which CustomerTransport to delete.
     */
    where: CustomerTransportWhereUniqueInput
  }

  /**
   * CustomerTransport deleteMany
   */
  export type CustomerTransportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerTransports to delete
     */
    where?: CustomerTransportWhereInput
    /**
     * Limit how many CustomerTransports to delete.
     */
    limit?: number
  }

  /**
   * CustomerTransport without action
   */
  export type CustomerTransportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerTransport
     */
    select?: CustomerTransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerTransport
     */
    omit?: CustomerTransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerTransportInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemMinAggregateOutputType = {
    id: string | null
    sku: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemMaxAggregateOutputType = {
    id: string | null
    sku: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    sku: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemMinAggregateInputType = {
    id?: true
    sku?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    sku?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    sku?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: string
    sku: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: ItemCountAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderItems?: boolean | Item$orderItemsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    sku?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sku" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | Item$orderItemsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      orderItems: Prisma.$SalesOrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sku: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
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
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderItems<T extends Item$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Item$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'String'>
    readonly sku: FieldRef<"Item", 'String'>
    readonly description: FieldRef<"Item", 'String'>
    readonly createdAt: FieldRef<"Item", 'DateTime'>
    readonly updatedAt: FieldRef<"Item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item.orderItems
   */
  export type Item$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemInclude<ExtArgs> | null
    where?: SalesOrderItemWhereInput
    orderBy?: SalesOrderItemOrderByWithRelationInput | SalesOrderItemOrderByWithRelationInput[]
    cursor?: SalesOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesOrderItemScalarFieldEnum | SalesOrderItemScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model SalesOrder
   */

  export type AggregateSalesOrder = {
    _count: SalesOrderCountAggregateOutputType | null
    _min: SalesOrderMinAggregateOutputType | null
    _max: SalesOrderMaxAggregateOutputType | null
  }

  export type SalesOrderMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    transportId: string | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalesOrderMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    transportId: string | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalesOrderCountAggregateOutputType = {
    id: number
    customerId: number
    transportId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SalesOrderMinAggregateInputType = {
    id?: true
    customerId?: true
    transportId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalesOrderMaxAggregateInputType = {
    id?: true
    customerId?: true
    transportId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalesOrderCountAggregateInputType = {
    id?: true
    customerId?: true
    transportId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SalesOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesOrder to aggregate.
     */
    where?: SalesOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrders to fetch.
     */
    orderBy?: SalesOrderOrderByWithRelationInput | SalesOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesOrders
    **/
    _count?: true | SalesOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesOrderMaxAggregateInputType
  }

  export type GetSalesOrderAggregateType<T extends SalesOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesOrder[P]>
      : GetScalarType<T[P], AggregateSalesOrder[P]>
  }




  export type SalesOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesOrderWhereInput
    orderBy?: SalesOrderOrderByWithAggregationInput | SalesOrderOrderByWithAggregationInput[]
    by: SalesOrderScalarFieldEnum[] | SalesOrderScalarFieldEnum
    having?: SalesOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesOrderCountAggregateInputType | true
    _min?: SalesOrderMinAggregateInputType
    _max?: SalesOrderMaxAggregateInputType
  }

  export type SalesOrderGroupByOutputType = {
    id: string
    customerId: string
    transportId: string
    status: $Enums.OrderStatus
    createdAt: Date
    updatedAt: Date
    _count: SalesOrderCountAggregateOutputType | null
    _min: SalesOrderMinAggregateOutputType | null
    _max: SalesOrderMaxAggregateOutputType | null
  }

  type GetSalesOrderGroupByPayload<T extends SalesOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesOrderGroupByOutputType[P]>
            : GetScalarType<T[P], SalesOrderGroupByOutputType[P]>
        }
      >
    >


  export type SalesOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    transportId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    transport?: boolean | TransportTypeDefaultArgs<ExtArgs>
    items?: boolean | SalesOrder$itemsArgs<ExtArgs>
    schedule?: boolean | SalesOrder$scheduleArgs<ExtArgs>
    auditEvents?: boolean | SalesOrder$auditEventsArgs<ExtArgs>
    _count?: boolean | SalesOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salesOrder"]>

  export type SalesOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    transportId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    transport?: boolean | TransportTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salesOrder"]>

  export type SalesOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    transportId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    transport?: boolean | TransportTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salesOrder"]>

  export type SalesOrderSelectScalar = {
    id?: boolean
    customerId?: boolean
    transportId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SalesOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "transportId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["salesOrder"]>
  export type SalesOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    transport?: boolean | TransportTypeDefaultArgs<ExtArgs>
    items?: boolean | SalesOrder$itemsArgs<ExtArgs>
    schedule?: boolean | SalesOrder$scheduleArgs<ExtArgs>
    auditEvents?: boolean | SalesOrder$auditEventsArgs<ExtArgs>
    _count?: boolean | SalesOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SalesOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    transport?: boolean | TransportTypeDefaultArgs<ExtArgs>
  }
  export type SalesOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    transport?: boolean | TransportTypeDefaultArgs<ExtArgs>
  }

  export type $SalesOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalesOrder"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      transport: Prisma.$TransportTypePayload<ExtArgs>
      items: Prisma.$SalesOrderItemPayload<ExtArgs>[]
      schedule: Prisma.$SchedulePayload<ExtArgs> | null
      auditEvents: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      transportId: string
      status: $Enums.OrderStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["salesOrder"]>
    composites: {}
  }

  type SalesOrderGetPayload<S extends boolean | null | undefined | SalesOrderDefaultArgs> = $Result.GetResult<Prisma.$SalesOrderPayload, S>

  type SalesOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalesOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesOrderCountAggregateInputType | true
    }

  export interface SalesOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesOrder'], meta: { name: 'SalesOrder' } }
    /**
     * Find zero or one SalesOrder that matches the filter.
     * @param {SalesOrderFindUniqueArgs} args - Arguments to find a SalesOrder
     * @example
     * // Get one SalesOrder
     * const salesOrder = await prisma.salesOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesOrderFindUniqueArgs>(args: SelectSubset<T, SalesOrderFindUniqueArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SalesOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalesOrderFindUniqueOrThrowArgs} args - Arguments to find a SalesOrder
     * @example
     * // Get one SalesOrder
     * const salesOrder = await prisma.salesOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalesOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderFindFirstArgs} args - Arguments to find a SalesOrder
     * @example
     * // Get one SalesOrder
     * const salesOrder = await prisma.salesOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesOrderFindFirstArgs>(args?: SelectSubset<T, SalesOrderFindFirstArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalesOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderFindFirstOrThrowArgs} args - Arguments to find a SalesOrder
     * @example
     * // Get one SalesOrder
     * const salesOrder = await prisma.salesOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalesOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesOrders
     * const salesOrders = await prisma.salesOrder.findMany()
     * 
     * // Get first 10 SalesOrders
     * const salesOrders = await prisma.salesOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesOrderWithIdOnly = await prisma.salesOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesOrderFindManyArgs>(args?: SelectSubset<T, SalesOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SalesOrder.
     * @param {SalesOrderCreateArgs} args - Arguments to create a SalesOrder.
     * @example
     * // Create one SalesOrder
     * const SalesOrder = await prisma.salesOrder.create({
     *   data: {
     *     // ... data to create a SalesOrder
     *   }
     * })
     * 
     */
    create<T extends SalesOrderCreateArgs>(args: SelectSubset<T, SalesOrderCreateArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SalesOrders.
     * @param {SalesOrderCreateManyArgs} args - Arguments to create many SalesOrders.
     * @example
     * // Create many SalesOrders
     * const salesOrder = await prisma.salesOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesOrderCreateManyArgs>(args?: SelectSubset<T, SalesOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalesOrders and returns the data saved in the database.
     * @param {SalesOrderCreateManyAndReturnArgs} args - Arguments to create many SalesOrders.
     * @example
     * // Create many SalesOrders
     * const salesOrder = await prisma.salesOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalesOrders and only return the `id`
     * const salesOrderWithIdOnly = await prisma.salesOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SalesOrder.
     * @param {SalesOrderDeleteArgs} args - Arguments to delete one SalesOrder.
     * @example
     * // Delete one SalesOrder
     * const SalesOrder = await prisma.salesOrder.delete({
     *   where: {
     *     // ... filter to delete one SalesOrder
     *   }
     * })
     * 
     */
    delete<T extends SalesOrderDeleteArgs>(args: SelectSubset<T, SalesOrderDeleteArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SalesOrder.
     * @param {SalesOrderUpdateArgs} args - Arguments to update one SalesOrder.
     * @example
     * // Update one SalesOrder
     * const salesOrder = await prisma.salesOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesOrderUpdateArgs>(args: SelectSubset<T, SalesOrderUpdateArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SalesOrders.
     * @param {SalesOrderDeleteManyArgs} args - Arguments to filter SalesOrders to delete.
     * @example
     * // Delete a few SalesOrders
     * const { count } = await prisma.salesOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesOrderDeleteManyArgs>(args?: SelectSubset<T, SalesOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesOrders
     * const salesOrder = await prisma.salesOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesOrderUpdateManyArgs>(args: SelectSubset<T, SalesOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesOrders and returns the data updated in the database.
     * @param {SalesOrderUpdateManyAndReturnArgs} args - Arguments to update many SalesOrders.
     * @example
     * // Update many SalesOrders
     * const salesOrder = await prisma.salesOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SalesOrders and only return the `id`
     * const salesOrderWithIdOnly = await prisma.salesOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SalesOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, SalesOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SalesOrder.
     * @param {SalesOrderUpsertArgs} args - Arguments to update or create a SalesOrder.
     * @example
     * // Update or create a SalesOrder
     * const salesOrder = await prisma.salesOrder.upsert({
     *   create: {
     *     // ... data to create a SalesOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesOrder we want to update
     *   }
     * })
     */
    upsert<T extends SalesOrderUpsertArgs>(args: SelectSubset<T, SalesOrderUpsertArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SalesOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderCountArgs} args - Arguments to filter SalesOrders to count.
     * @example
     * // Count the number of SalesOrders
     * const count = await prisma.salesOrder.count({
     *   where: {
     *     // ... the filter for the SalesOrders we want to count
     *   }
     * })
    **/
    count<T extends SalesOrderCountArgs>(
      args?: Subset<T, SalesOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalesOrderAggregateArgs>(args: Subset<T, SalesOrderAggregateArgs>): Prisma.PrismaPromise<GetSalesOrderAggregateType<T>>

    /**
     * Group by SalesOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderGroupByArgs} args - Group by arguments.
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
      T extends SalesOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesOrderGroupByArgs['orderBy'] }
        : { orderBy?: SalesOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SalesOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalesOrder model
   */
  readonly fields: SalesOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transport<T extends TransportTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransportTypeDefaultArgs<ExtArgs>>): Prisma__TransportTypeClient<$Result.GetResult<Prisma.$TransportTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends SalesOrder$itemsArgs<ExtArgs> = {}>(args?: Subset<T, SalesOrder$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedule<T extends SalesOrder$scheduleArgs<ExtArgs> = {}>(args?: Subset<T, SalesOrder$scheduleArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    auditEvents<T extends SalesOrder$auditEventsArgs<ExtArgs> = {}>(args?: Subset<T, SalesOrder$auditEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SalesOrder model
   */
  interface SalesOrderFieldRefs {
    readonly id: FieldRef<"SalesOrder", 'String'>
    readonly customerId: FieldRef<"SalesOrder", 'String'>
    readonly transportId: FieldRef<"SalesOrder", 'String'>
    readonly status: FieldRef<"SalesOrder", 'OrderStatus'>
    readonly createdAt: FieldRef<"SalesOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"SalesOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalesOrder findUnique
   */
  export type SalesOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrder to fetch.
     */
    where: SalesOrderWhereUniqueInput
  }

  /**
   * SalesOrder findUniqueOrThrow
   */
  export type SalesOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrder to fetch.
     */
    where: SalesOrderWhereUniqueInput
  }

  /**
   * SalesOrder findFirst
   */
  export type SalesOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrder to fetch.
     */
    where?: SalesOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrders to fetch.
     */
    orderBy?: SalesOrderOrderByWithRelationInput | SalesOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesOrders.
     */
    cursor?: SalesOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesOrders.
     */
    distinct?: SalesOrderScalarFieldEnum | SalesOrderScalarFieldEnum[]
  }

  /**
   * SalesOrder findFirstOrThrow
   */
  export type SalesOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrder to fetch.
     */
    where?: SalesOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrders to fetch.
     */
    orderBy?: SalesOrderOrderByWithRelationInput | SalesOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesOrders.
     */
    cursor?: SalesOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesOrders.
     */
    distinct?: SalesOrderScalarFieldEnum | SalesOrderScalarFieldEnum[]
  }

  /**
   * SalesOrder findMany
   */
  export type SalesOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrders to fetch.
     */
    where?: SalesOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrders to fetch.
     */
    orderBy?: SalesOrderOrderByWithRelationInput | SalesOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesOrders.
     */
    cursor?: SalesOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrders.
     */
    skip?: number
    distinct?: SalesOrderScalarFieldEnum | SalesOrderScalarFieldEnum[]
  }

  /**
   * SalesOrder create
   */
  export type SalesOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a SalesOrder.
     */
    data: XOR<SalesOrderCreateInput, SalesOrderUncheckedCreateInput>
  }

  /**
   * SalesOrder createMany
   */
  export type SalesOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesOrders.
     */
    data: SalesOrderCreateManyInput | SalesOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesOrder createManyAndReturn
   */
  export type SalesOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * The data used to create many SalesOrders.
     */
    data: SalesOrderCreateManyInput | SalesOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalesOrder update
   */
  export type SalesOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a SalesOrder.
     */
    data: XOR<SalesOrderUpdateInput, SalesOrderUncheckedUpdateInput>
    /**
     * Choose, which SalesOrder to update.
     */
    where: SalesOrderWhereUniqueInput
  }

  /**
   * SalesOrder updateMany
   */
  export type SalesOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesOrders.
     */
    data: XOR<SalesOrderUpdateManyMutationInput, SalesOrderUncheckedUpdateManyInput>
    /**
     * Filter which SalesOrders to update
     */
    where?: SalesOrderWhereInput
    /**
     * Limit how many SalesOrders to update.
     */
    limit?: number
  }

  /**
   * SalesOrder updateManyAndReturn
   */
  export type SalesOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * The data used to update SalesOrders.
     */
    data: XOR<SalesOrderUpdateManyMutationInput, SalesOrderUncheckedUpdateManyInput>
    /**
     * Filter which SalesOrders to update
     */
    where?: SalesOrderWhereInput
    /**
     * Limit how many SalesOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalesOrder upsert
   */
  export type SalesOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the SalesOrder to update in case it exists.
     */
    where: SalesOrderWhereUniqueInput
    /**
     * In case the SalesOrder found by the `where` argument doesn't exist, create a new SalesOrder with this data.
     */
    create: XOR<SalesOrderCreateInput, SalesOrderUncheckedCreateInput>
    /**
     * In case the SalesOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesOrderUpdateInput, SalesOrderUncheckedUpdateInput>
  }

  /**
   * SalesOrder delete
   */
  export type SalesOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    /**
     * Filter which SalesOrder to delete.
     */
    where: SalesOrderWhereUniqueInput
  }

  /**
   * SalesOrder deleteMany
   */
  export type SalesOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesOrders to delete
     */
    where?: SalesOrderWhereInput
    /**
     * Limit how many SalesOrders to delete.
     */
    limit?: number
  }

  /**
   * SalesOrder.items
   */
  export type SalesOrder$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemInclude<ExtArgs> | null
    where?: SalesOrderItemWhereInput
    orderBy?: SalesOrderItemOrderByWithRelationInput | SalesOrderItemOrderByWithRelationInput[]
    cursor?: SalesOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesOrderItemScalarFieldEnum | SalesOrderItemScalarFieldEnum[]
  }

  /**
   * SalesOrder.schedule
   */
  export type SalesOrder$scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
  }

  /**
   * SalesOrder.auditEvents
   */
  export type SalesOrder$auditEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * SalesOrder without action
   */
  export type SalesOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
  }


  /**
   * Model SalesOrderItem
   */

  export type AggregateSalesOrderItem = {
    _count: SalesOrderItemCountAggregateOutputType | null
    _avg: SalesOrderItemAvgAggregateOutputType | null
    _sum: SalesOrderItemSumAggregateOutputType | null
    _min: SalesOrderItemMinAggregateOutputType | null
    _max: SalesOrderItemMaxAggregateOutputType | null
  }

  export type SalesOrderItemAvgAggregateOutputType = {
    quantity: number | null
  }

  export type SalesOrderItemSumAggregateOutputType = {
    quantity: number | null
  }

  export type SalesOrderItemMinAggregateOutputType = {
    orderId: string | null
    itemId: string | null
    quantity: number | null
  }

  export type SalesOrderItemMaxAggregateOutputType = {
    orderId: string | null
    itemId: string | null
    quantity: number | null
  }

  export type SalesOrderItemCountAggregateOutputType = {
    orderId: number
    itemId: number
    quantity: number
    _all: number
  }


  export type SalesOrderItemAvgAggregateInputType = {
    quantity?: true
  }

  export type SalesOrderItemSumAggregateInputType = {
    quantity?: true
  }

  export type SalesOrderItemMinAggregateInputType = {
    orderId?: true
    itemId?: true
    quantity?: true
  }

  export type SalesOrderItemMaxAggregateInputType = {
    orderId?: true
    itemId?: true
    quantity?: true
  }

  export type SalesOrderItemCountAggregateInputType = {
    orderId?: true
    itemId?: true
    quantity?: true
    _all?: true
  }

  export type SalesOrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesOrderItem to aggregate.
     */
    where?: SalesOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrderItems to fetch.
     */
    orderBy?: SalesOrderItemOrderByWithRelationInput | SalesOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesOrderItems
    **/
    _count?: true | SalesOrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesOrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesOrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesOrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesOrderItemMaxAggregateInputType
  }

  export type GetSalesOrderItemAggregateType<T extends SalesOrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesOrderItem[P]>
      : GetScalarType<T[P], AggregateSalesOrderItem[P]>
  }




  export type SalesOrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesOrderItemWhereInput
    orderBy?: SalesOrderItemOrderByWithAggregationInput | SalesOrderItemOrderByWithAggregationInput[]
    by: SalesOrderItemScalarFieldEnum[] | SalesOrderItemScalarFieldEnum
    having?: SalesOrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesOrderItemCountAggregateInputType | true
    _avg?: SalesOrderItemAvgAggregateInputType
    _sum?: SalesOrderItemSumAggregateInputType
    _min?: SalesOrderItemMinAggregateInputType
    _max?: SalesOrderItemMaxAggregateInputType
  }

  export type SalesOrderItemGroupByOutputType = {
    orderId: string
    itemId: string
    quantity: number
    _count: SalesOrderItemCountAggregateOutputType | null
    _avg: SalesOrderItemAvgAggregateOutputType | null
    _sum: SalesOrderItemSumAggregateOutputType | null
    _min: SalesOrderItemMinAggregateOutputType | null
    _max: SalesOrderItemMaxAggregateOutputType | null
  }

  type GetSalesOrderItemGroupByPayload<T extends SalesOrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesOrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesOrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesOrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], SalesOrderItemGroupByOutputType[P]>
        }
      >
    >


  export type SalesOrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    itemId?: boolean
    quantity?: boolean
    order?: boolean | SalesOrderDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salesOrderItem"]>

  export type SalesOrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    itemId?: boolean
    quantity?: boolean
    order?: boolean | SalesOrderDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salesOrderItem"]>

  export type SalesOrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    itemId?: boolean
    quantity?: boolean
    order?: boolean | SalesOrderDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salesOrderItem"]>

  export type SalesOrderItemSelectScalar = {
    orderId?: boolean
    itemId?: boolean
    quantity?: boolean
  }

  export type SalesOrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"orderId" | "itemId" | "quantity", ExtArgs["result"]["salesOrderItem"]>
  export type SalesOrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | SalesOrderDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type SalesOrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | SalesOrderDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type SalesOrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | SalesOrderDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $SalesOrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalesOrderItem"
    objects: {
      order: Prisma.$SalesOrderPayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      orderId: string
      itemId: string
      quantity: number
    }, ExtArgs["result"]["salesOrderItem"]>
    composites: {}
  }

  type SalesOrderItemGetPayload<S extends boolean | null | undefined | SalesOrderItemDefaultArgs> = $Result.GetResult<Prisma.$SalesOrderItemPayload, S>

  type SalesOrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalesOrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesOrderItemCountAggregateInputType | true
    }

  export interface SalesOrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesOrderItem'], meta: { name: 'SalesOrderItem' } }
    /**
     * Find zero or one SalesOrderItem that matches the filter.
     * @param {SalesOrderItemFindUniqueArgs} args - Arguments to find a SalesOrderItem
     * @example
     * // Get one SalesOrderItem
     * const salesOrderItem = await prisma.salesOrderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesOrderItemFindUniqueArgs>(args: SelectSubset<T, SalesOrderItemFindUniqueArgs<ExtArgs>>): Prisma__SalesOrderItemClient<$Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SalesOrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalesOrderItemFindUniqueOrThrowArgs} args - Arguments to find a SalesOrderItem
     * @example
     * // Get one SalesOrderItem
     * const salesOrderItem = await prisma.salesOrderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesOrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesOrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesOrderItemClient<$Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalesOrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderItemFindFirstArgs} args - Arguments to find a SalesOrderItem
     * @example
     * // Get one SalesOrderItem
     * const salesOrderItem = await prisma.salesOrderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesOrderItemFindFirstArgs>(args?: SelectSubset<T, SalesOrderItemFindFirstArgs<ExtArgs>>): Prisma__SalesOrderItemClient<$Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalesOrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderItemFindFirstOrThrowArgs} args - Arguments to find a SalesOrderItem
     * @example
     * // Get one SalesOrderItem
     * const salesOrderItem = await prisma.salesOrderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesOrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesOrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesOrderItemClient<$Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalesOrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesOrderItems
     * const salesOrderItems = await prisma.salesOrderItem.findMany()
     * 
     * // Get first 10 SalesOrderItems
     * const salesOrderItems = await prisma.salesOrderItem.findMany({ take: 10 })
     * 
     * // Only select the `orderId`
     * const salesOrderItemWithOrderIdOnly = await prisma.salesOrderItem.findMany({ select: { orderId: true } })
     * 
     */
    findMany<T extends SalesOrderItemFindManyArgs>(args?: SelectSubset<T, SalesOrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SalesOrderItem.
     * @param {SalesOrderItemCreateArgs} args - Arguments to create a SalesOrderItem.
     * @example
     * // Create one SalesOrderItem
     * const SalesOrderItem = await prisma.salesOrderItem.create({
     *   data: {
     *     // ... data to create a SalesOrderItem
     *   }
     * })
     * 
     */
    create<T extends SalesOrderItemCreateArgs>(args: SelectSubset<T, SalesOrderItemCreateArgs<ExtArgs>>): Prisma__SalesOrderItemClient<$Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SalesOrderItems.
     * @param {SalesOrderItemCreateManyArgs} args - Arguments to create many SalesOrderItems.
     * @example
     * // Create many SalesOrderItems
     * const salesOrderItem = await prisma.salesOrderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesOrderItemCreateManyArgs>(args?: SelectSubset<T, SalesOrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalesOrderItems and returns the data saved in the database.
     * @param {SalesOrderItemCreateManyAndReturnArgs} args - Arguments to create many SalesOrderItems.
     * @example
     * // Create many SalesOrderItems
     * const salesOrderItem = await prisma.salesOrderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalesOrderItems and only return the `orderId`
     * const salesOrderItemWithOrderIdOnly = await prisma.salesOrderItem.createManyAndReturn({
     *   select: { orderId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesOrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesOrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SalesOrderItem.
     * @param {SalesOrderItemDeleteArgs} args - Arguments to delete one SalesOrderItem.
     * @example
     * // Delete one SalesOrderItem
     * const SalesOrderItem = await prisma.salesOrderItem.delete({
     *   where: {
     *     // ... filter to delete one SalesOrderItem
     *   }
     * })
     * 
     */
    delete<T extends SalesOrderItemDeleteArgs>(args: SelectSubset<T, SalesOrderItemDeleteArgs<ExtArgs>>): Prisma__SalesOrderItemClient<$Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SalesOrderItem.
     * @param {SalesOrderItemUpdateArgs} args - Arguments to update one SalesOrderItem.
     * @example
     * // Update one SalesOrderItem
     * const salesOrderItem = await prisma.salesOrderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesOrderItemUpdateArgs>(args: SelectSubset<T, SalesOrderItemUpdateArgs<ExtArgs>>): Prisma__SalesOrderItemClient<$Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SalesOrderItems.
     * @param {SalesOrderItemDeleteManyArgs} args - Arguments to filter SalesOrderItems to delete.
     * @example
     * // Delete a few SalesOrderItems
     * const { count } = await prisma.salesOrderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesOrderItemDeleteManyArgs>(args?: SelectSubset<T, SalesOrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesOrderItems
     * const salesOrderItem = await prisma.salesOrderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesOrderItemUpdateManyArgs>(args: SelectSubset<T, SalesOrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesOrderItems and returns the data updated in the database.
     * @param {SalesOrderItemUpdateManyAndReturnArgs} args - Arguments to update many SalesOrderItems.
     * @example
     * // Update many SalesOrderItems
     * const salesOrderItem = await prisma.salesOrderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SalesOrderItems and only return the `orderId`
     * const salesOrderItemWithOrderIdOnly = await prisma.salesOrderItem.updateManyAndReturn({
     *   select: { orderId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SalesOrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, SalesOrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SalesOrderItem.
     * @param {SalesOrderItemUpsertArgs} args - Arguments to update or create a SalesOrderItem.
     * @example
     * // Update or create a SalesOrderItem
     * const salesOrderItem = await prisma.salesOrderItem.upsert({
     *   create: {
     *     // ... data to create a SalesOrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesOrderItem we want to update
     *   }
     * })
     */
    upsert<T extends SalesOrderItemUpsertArgs>(args: SelectSubset<T, SalesOrderItemUpsertArgs<ExtArgs>>): Prisma__SalesOrderItemClient<$Result.GetResult<Prisma.$SalesOrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SalesOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderItemCountArgs} args - Arguments to filter SalesOrderItems to count.
     * @example
     * // Count the number of SalesOrderItems
     * const count = await prisma.salesOrderItem.count({
     *   where: {
     *     // ... the filter for the SalesOrderItems we want to count
     *   }
     * })
    **/
    count<T extends SalesOrderItemCountArgs>(
      args?: Subset<T, SalesOrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesOrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalesOrderItemAggregateArgs>(args: Subset<T, SalesOrderItemAggregateArgs>): Prisma.PrismaPromise<GetSalesOrderItemAggregateType<T>>

    /**
     * Group by SalesOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesOrderItemGroupByArgs} args - Group by arguments.
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
      T extends SalesOrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesOrderItemGroupByArgs['orderBy'] }
        : { orderBy?: SalesOrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SalesOrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalesOrderItem model
   */
  readonly fields: SalesOrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesOrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesOrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends SalesOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalesOrderDefaultArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SalesOrderItem model
   */
  interface SalesOrderItemFieldRefs {
    readonly orderId: FieldRef<"SalesOrderItem", 'String'>
    readonly itemId: FieldRef<"SalesOrderItem", 'String'>
    readonly quantity: FieldRef<"SalesOrderItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SalesOrderItem findUnique
   */
  export type SalesOrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrderItem to fetch.
     */
    where: SalesOrderItemWhereUniqueInput
  }

  /**
   * SalesOrderItem findUniqueOrThrow
   */
  export type SalesOrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrderItem to fetch.
     */
    where: SalesOrderItemWhereUniqueInput
  }

  /**
   * SalesOrderItem findFirst
   */
  export type SalesOrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrderItem to fetch.
     */
    where?: SalesOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrderItems to fetch.
     */
    orderBy?: SalesOrderItemOrderByWithRelationInput | SalesOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesOrderItems.
     */
    cursor?: SalesOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesOrderItems.
     */
    distinct?: SalesOrderItemScalarFieldEnum | SalesOrderItemScalarFieldEnum[]
  }

  /**
   * SalesOrderItem findFirstOrThrow
   */
  export type SalesOrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrderItem to fetch.
     */
    where?: SalesOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrderItems to fetch.
     */
    orderBy?: SalesOrderItemOrderByWithRelationInput | SalesOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesOrderItems.
     */
    cursor?: SalesOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesOrderItems.
     */
    distinct?: SalesOrderItemScalarFieldEnum | SalesOrderItemScalarFieldEnum[]
  }

  /**
   * SalesOrderItem findMany
   */
  export type SalesOrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which SalesOrderItems to fetch.
     */
    where?: SalesOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesOrderItems to fetch.
     */
    orderBy?: SalesOrderItemOrderByWithRelationInput | SalesOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesOrderItems.
     */
    cursor?: SalesOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesOrderItems.
     */
    skip?: number
    distinct?: SalesOrderItemScalarFieldEnum | SalesOrderItemScalarFieldEnum[]
  }

  /**
   * SalesOrderItem create
   */
  export type SalesOrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a SalesOrderItem.
     */
    data: XOR<SalesOrderItemCreateInput, SalesOrderItemUncheckedCreateInput>
  }

  /**
   * SalesOrderItem createMany
   */
  export type SalesOrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesOrderItems.
     */
    data: SalesOrderItemCreateManyInput | SalesOrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesOrderItem createManyAndReturn
   */
  export type SalesOrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many SalesOrderItems.
     */
    data: SalesOrderItemCreateManyInput | SalesOrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalesOrderItem update
   */
  export type SalesOrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a SalesOrderItem.
     */
    data: XOR<SalesOrderItemUpdateInput, SalesOrderItemUncheckedUpdateInput>
    /**
     * Choose, which SalesOrderItem to update.
     */
    where: SalesOrderItemWhereUniqueInput
  }

  /**
   * SalesOrderItem updateMany
   */
  export type SalesOrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesOrderItems.
     */
    data: XOR<SalesOrderItemUpdateManyMutationInput, SalesOrderItemUncheckedUpdateManyInput>
    /**
     * Filter which SalesOrderItems to update
     */
    where?: SalesOrderItemWhereInput
    /**
     * Limit how many SalesOrderItems to update.
     */
    limit?: number
  }

  /**
   * SalesOrderItem updateManyAndReturn
   */
  export type SalesOrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * The data used to update SalesOrderItems.
     */
    data: XOR<SalesOrderItemUpdateManyMutationInput, SalesOrderItemUncheckedUpdateManyInput>
    /**
     * Filter which SalesOrderItems to update
     */
    where?: SalesOrderItemWhereInput
    /**
     * Limit how many SalesOrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalesOrderItem upsert
   */
  export type SalesOrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the SalesOrderItem to update in case it exists.
     */
    where: SalesOrderItemWhereUniqueInput
    /**
     * In case the SalesOrderItem found by the `where` argument doesn't exist, create a new SalesOrderItem with this data.
     */
    create: XOR<SalesOrderItemCreateInput, SalesOrderItemUncheckedCreateInput>
    /**
     * In case the SalesOrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesOrderItemUpdateInput, SalesOrderItemUncheckedUpdateInput>
  }

  /**
   * SalesOrderItem delete
   */
  export type SalesOrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemInclude<ExtArgs> | null
    /**
     * Filter which SalesOrderItem to delete.
     */
    where: SalesOrderItemWhereUniqueInput
  }

  /**
   * SalesOrderItem deleteMany
   */
  export type SalesOrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesOrderItems to delete
     */
    where?: SalesOrderItemWhereInput
    /**
     * Limit how many SalesOrderItems to delete.
     */
    limit?: number
  }

  /**
   * SalesOrderItem without action
   */
  export type SalesOrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrderItem
     */
    select?: SalesOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrderItem
     */
    omit?: SalesOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderItemInclude<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    deliveryDate: Date | null
    windowStart: string | null
    windowEnd: string | null
    confirmed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    deliveryDate: Date | null
    windowStart: string | null
    windowEnd: string | null
    confirmed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    orderId: number
    deliveryDate: number
    windowStart: number
    windowEnd: number
    confirmed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScheduleMinAggregateInputType = {
    id?: true
    orderId?: true
    deliveryDate?: true
    windowStart?: true
    windowEnd?: true
    confirmed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    orderId?: true
    deliveryDate?: true
    windowStart?: true
    windowEnd?: true
    confirmed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    orderId?: true
    deliveryDate?: true
    windowStart?: true
    windowEnd?: true
    confirmed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: string
    orderId: string
    deliveryDate: Date
    windowStart: string
    windowEnd: string
    confirmed: boolean
    createdAt: Date
    updatedAt: Date
    _count: ScheduleCountAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    deliveryDate?: boolean
    windowStart?: boolean
    windowEnd?: boolean
    confirmed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | SalesOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    deliveryDate?: boolean
    windowStart?: boolean
    windowEnd?: boolean
    confirmed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | SalesOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    deliveryDate?: boolean
    windowStart?: boolean
    windowEnd?: boolean
    confirmed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | SalesOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectScalar = {
    id?: boolean
    orderId?: boolean
    deliveryDate?: boolean
    windowStart?: boolean
    windowEnd?: boolean
    confirmed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "deliveryDate" | "windowStart" | "windowEnd" | "confirmed" | "createdAt" | "updatedAt", ExtArgs["result"]["schedule"]>
  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | SalesOrderDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | SalesOrderDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | SalesOrderDefaultArgs<ExtArgs>
  }

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      order: Prisma.$SalesOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      deliveryDate: Date
      windowStart: string
      windowEnd: string
      confirmed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {ScheduleCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules and returns the data updated in the database.
     * @param {ScheduleUpdateManyAndReturnArgs} args - Arguments to update many Schedules.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
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
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends SalesOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalesOrderDefaultArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'String'>
    readonly orderId: FieldRef<"Schedule", 'String'>
    readonly deliveryDate: FieldRef<"Schedule", 'DateTime'>
    readonly windowStart: FieldRef<"Schedule", 'String'>
    readonly windowEnd: FieldRef<"Schedule", 'String'>
    readonly confirmed: FieldRef<"Schedule", 'Boolean'>
    readonly createdAt: FieldRef<"Schedule", 'DateTime'>
    readonly updatedAt: FieldRef<"Schedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule createManyAndReturn
   */
  export type ScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule updateManyAndReturn
   */
  export type ScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    action: $Enums.AuditAction | null
    entityName: string | null
    oldValue: string | null
    newValue: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    action: $Enums.AuditAction | null
    entityName: string | null
    oldValue: string | null
    newValue: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    orderId: number
    action: number
    entityName: number
    oldValue: number
    newValue: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    orderId?: true
    action?: true
    entityName?: true
    oldValue?: true
    newValue?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    orderId?: true
    action?: true
    entityName?: true
    oldValue?: true
    newValue?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    orderId?: true
    action?: true
    entityName?: true
    oldValue?: true
    newValue?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    orderId: string | null
    action: $Enums.AuditAction
    entityName: string
    oldValue: string | null
    newValue: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    action?: boolean
    entityName?: boolean
    oldValue?: boolean
    newValue?: boolean
    createdAt?: boolean
    order?: boolean | AuditLog$orderArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    action?: boolean
    entityName?: boolean
    oldValue?: boolean
    newValue?: boolean
    createdAt?: boolean
    order?: boolean | AuditLog$orderArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    action?: boolean
    entityName?: boolean
    oldValue?: boolean
    newValue?: boolean
    createdAt?: boolean
    order?: boolean | AuditLog$orderArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    orderId?: boolean
    action?: boolean
    entityName?: boolean
    oldValue?: boolean
    newValue?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "action" | "entityName" | "oldValue" | "newValue" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | AuditLog$orderArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | AuditLog$orderArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | AuditLog$orderArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      order: Prisma.$SalesOrderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string | null
      action: $Enums.AuditAction
      entityName: string
      oldValue: string | null
      newValue: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends AuditLog$orderArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$orderArgs<ExtArgs>>): Prisma__SalesOrderClient<$Result.GetResult<Prisma.$SalesOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly orderId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'AuditAction'>
    readonly entityName: FieldRef<"AuditLog", 'String'>
    readonly oldValue: FieldRef<"AuditLog", 'String'>
    readonly newValue: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog.order
   */
  export type AuditLog$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesOrder
     */
    select?: SalesOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalesOrder
     */
    omit?: SalesOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesOrderInclude<ExtArgs> | null
    where?: SalesOrderWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    document: 'document',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const TransportTypeScalarFieldEnum: {
    id: 'id',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransportTypeScalarFieldEnum = (typeof TransportTypeScalarFieldEnum)[keyof typeof TransportTypeScalarFieldEnum]


  export const CustomerTransportScalarFieldEnum: {
    customerId: 'customerId',
    transportId: 'transportId'
  };

  export type CustomerTransportScalarFieldEnum = (typeof CustomerTransportScalarFieldEnum)[keyof typeof CustomerTransportScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    sku: 'sku',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const SalesOrderScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    transportId: 'transportId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SalesOrderScalarFieldEnum = (typeof SalesOrderScalarFieldEnum)[keyof typeof SalesOrderScalarFieldEnum]


  export const SalesOrderItemScalarFieldEnum: {
    orderId: 'orderId',
    itemId: 'itemId',
    quantity: 'quantity'
  };

  export type SalesOrderItemScalarFieldEnum = (typeof SalesOrderItemScalarFieldEnum)[keyof typeof SalesOrderItemScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    deliveryDate: 'deliveryDate',
    windowStart: 'windowStart',
    windowEnd: 'windowEnd',
    confirmed: 'confirmed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    action: 'action',
    entityName: 'entityName',
    oldValue: 'oldValue',
    newValue: 'newValue',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AuditAction'
   */
  export type EnumAuditActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditAction'>
    


  /**
   * Reference to a field of type 'AuditAction[]'
   */
  export type ListEnumAuditActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditAction[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    document?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    orders?: SalesOrderListRelationFilter
    transports?: CustomerTransportListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    document?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: SalesOrderOrderByRelationAggregateInput
    transports?: CustomerTransportOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    document?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    orders?: SalesOrderListRelationFilter
    transports?: CustomerTransportListRelationFilter
  }, "id" | "document">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    document?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    document?: StringWithAggregatesFilter<"Customer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type TransportTypeWhereInput = {
    AND?: TransportTypeWhereInput | TransportTypeWhereInput[]
    OR?: TransportTypeWhereInput[]
    NOT?: TransportTypeWhereInput | TransportTypeWhereInput[]
    id?: StringFilter<"TransportType"> | string
    description?: StringFilter<"TransportType"> | string
    createdAt?: DateTimeFilter<"TransportType"> | Date | string
    updatedAt?: DateTimeFilter<"TransportType"> | Date | string
    customers?: CustomerTransportListRelationFilter
    orders?: SalesOrderListRelationFilter
  }

  export type TransportTypeOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customers?: CustomerTransportOrderByRelationAggregateInput
    orders?: SalesOrderOrderByRelationAggregateInput
  }

  export type TransportTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransportTypeWhereInput | TransportTypeWhereInput[]
    OR?: TransportTypeWhereInput[]
    NOT?: TransportTypeWhereInput | TransportTypeWhereInput[]
    description?: StringFilter<"TransportType"> | string
    createdAt?: DateTimeFilter<"TransportType"> | Date | string
    updatedAt?: DateTimeFilter<"TransportType"> | Date | string
    customers?: CustomerTransportListRelationFilter
    orders?: SalesOrderListRelationFilter
  }, "id">

  export type TransportTypeOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransportTypeCountOrderByAggregateInput
    _max?: TransportTypeMaxOrderByAggregateInput
    _min?: TransportTypeMinOrderByAggregateInput
  }

  export type TransportTypeScalarWhereWithAggregatesInput = {
    AND?: TransportTypeScalarWhereWithAggregatesInput | TransportTypeScalarWhereWithAggregatesInput[]
    OR?: TransportTypeScalarWhereWithAggregatesInput[]
    NOT?: TransportTypeScalarWhereWithAggregatesInput | TransportTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TransportType"> | string
    description?: StringWithAggregatesFilter<"TransportType"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TransportType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TransportType"> | Date | string
  }

  export type CustomerTransportWhereInput = {
    AND?: CustomerTransportWhereInput | CustomerTransportWhereInput[]
    OR?: CustomerTransportWhereInput[]
    NOT?: CustomerTransportWhereInput | CustomerTransportWhereInput[]
    customerId?: StringFilter<"CustomerTransport"> | string
    transportId?: StringFilter<"CustomerTransport"> | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    transport?: XOR<TransportTypeScalarRelationFilter, TransportTypeWhereInput>
  }

  export type CustomerTransportOrderByWithRelationInput = {
    customerId?: SortOrder
    transportId?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    transport?: TransportTypeOrderByWithRelationInput
  }

  export type CustomerTransportWhereUniqueInput = Prisma.AtLeast<{
    customerId_transportId?: CustomerTransportCustomerIdTransportIdCompoundUniqueInput
    AND?: CustomerTransportWhereInput | CustomerTransportWhereInput[]
    OR?: CustomerTransportWhereInput[]
    NOT?: CustomerTransportWhereInput | CustomerTransportWhereInput[]
    customerId?: StringFilter<"CustomerTransport"> | string
    transportId?: StringFilter<"CustomerTransport"> | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    transport?: XOR<TransportTypeScalarRelationFilter, TransportTypeWhereInput>
  }, "customerId_transportId">

  export type CustomerTransportOrderByWithAggregationInput = {
    customerId?: SortOrder
    transportId?: SortOrder
    _count?: CustomerTransportCountOrderByAggregateInput
    _max?: CustomerTransportMaxOrderByAggregateInput
    _min?: CustomerTransportMinOrderByAggregateInput
  }

  export type CustomerTransportScalarWhereWithAggregatesInput = {
    AND?: CustomerTransportScalarWhereWithAggregatesInput | CustomerTransportScalarWhereWithAggregatesInput[]
    OR?: CustomerTransportScalarWhereWithAggregatesInput[]
    NOT?: CustomerTransportScalarWhereWithAggregatesInput | CustomerTransportScalarWhereWithAggregatesInput[]
    customerId?: StringWithAggregatesFilter<"CustomerTransport"> | string
    transportId?: StringWithAggregatesFilter<"CustomerTransport"> | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: StringFilter<"Item"> | string
    sku?: StringFilter<"Item"> | string
    description?: StringFilter<"Item"> | string
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    orderItems?: SalesOrderItemListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    sku?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderItems?: SalesOrderItemOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sku?: string
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    description?: StringFilter<"Item"> | string
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    orderItems?: SalesOrderItemListRelationFilter
  }, "id" | "sku">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    sku?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Item"> | string
    sku?: StringWithAggregatesFilter<"Item"> | string
    description?: StringWithAggregatesFilter<"Item"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
  }

  export type SalesOrderWhereInput = {
    AND?: SalesOrderWhereInput | SalesOrderWhereInput[]
    OR?: SalesOrderWhereInput[]
    NOT?: SalesOrderWhereInput | SalesOrderWhereInput[]
    id?: StringFilter<"SalesOrder"> | string
    customerId?: StringFilter<"SalesOrder"> | string
    transportId?: StringFilter<"SalesOrder"> | string
    status?: EnumOrderStatusFilter<"SalesOrder"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"SalesOrder"> | Date | string
    updatedAt?: DateTimeFilter<"SalesOrder"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    transport?: XOR<TransportTypeScalarRelationFilter, TransportTypeWhereInput>
    items?: SalesOrderItemListRelationFilter
    schedule?: XOR<ScheduleNullableScalarRelationFilter, ScheduleWhereInput> | null
    auditEvents?: AuditLogListRelationFilter
  }

  export type SalesOrderOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    transportId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    transport?: TransportTypeOrderByWithRelationInput
    items?: SalesOrderItemOrderByRelationAggregateInput
    schedule?: ScheduleOrderByWithRelationInput
    auditEvents?: AuditLogOrderByRelationAggregateInput
  }

  export type SalesOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SalesOrderWhereInput | SalesOrderWhereInput[]
    OR?: SalesOrderWhereInput[]
    NOT?: SalesOrderWhereInput | SalesOrderWhereInput[]
    customerId?: StringFilter<"SalesOrder"> | string
    transportId?: StringFilter<"SalesOrder"> | string
    status?: EnumOrderStatusFilter<"SalesOrder"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"SalesOrder"> | Date | string
    updatedAt?: DateTimeFilter<"SalesOrder"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    transport?: XOR<TransportTypeScalarRelationFilter, TransportTypeWhereInput>
    items?: SalesOrderItemListRelationFilter
    schedule?: XOR<ScheduleNullableScalarRelationFilter, ScheduleWhereInput> | null
    auditEvents?: AuditLogListRelationFilter
  }, "id">

  export type SalesOrderOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    transportId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SalesOrderCountOrderByAggregateInput
    _max?: SalesOrderMaxOrderByAggregateInput
    _min?: SalesOrderMinOrderByAggregateInput
  }

  export type SalesOrderScalarWhereWithAggregatesInput = {
    AND?: SalesOrderScalarWhereWithAggregatesInput | SalesOrderScalarWhereWithAggregatesInput[]
    OR?: SalesOrderScalarWhereWithAggregatesInput[]
    NOT?: SalesOrderScalarWhereWithAggregatesInput | SalesOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SalesOrder"> | string
    customerId?: StringWithAggregatesFilter<"SalesOrder"> | string
    transportId?: StringWithAggregatesFilter<"SalesOrder"> | string
    status?: EnumOrderStatusWithAggregatesFilter<"SalesOrder"> | $Enums.OrderStatus
    createdAt?: DateTimeWithAggregatesFilter<"SalesOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SalesOrder"> | Date | string
  }

  export type SalesOrderItemWhereInput = {
    AND?: SalesOrderItemWhereInput | SalesOrderItemWhereInput[]
    OR?: SalesOrderItemWhereInput[]
    NOT?: SalesOrderItemWhereInput | SalesOrderItemWhereInput[]
    orderId?: StringFilter<"SalesOrderItem"> | string
    itemId?: StringFilter<"SalesOrderItem"> | string
    quantity?: IntFilter<"SalesOrderItem"> | number
    order?: XOR<SalesOrderScalarRelationFilter, SalesOrderWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type SalesOrderItemOrderByWithRelationInput = {
    orderId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    order?: SalesOrderOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type SalesOrderItemWhereUniqueInput = Prisma.AtLeast<{
    orderId_itemId?: SalesOrderItemOrderIdItemIdCompoundUniqueInput
    AND?: SalesOrderItemWhereInput | SalesOrderItemWhereInput[]
    OR?: SalesOrderItemWhereInput[]
    NOT?: SalesOrderItemWhereInput | SalesOrderItemWhereInput[]
    orderId?: StringFilter<"SalesOrderItem"> | string
    itemId?: StringFilter<"SalesOrderItem"> | string
    quantity?: IntFilter<"SalesOrderItem"> | number
    order?: XOR<SalesOrderScalarRelationFilter, SalesOrderWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "orderId_itemId">

  export type SalesOrderItemOrderByWithAggregationInput = {
    orderId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    _count?: SalesOrderItemCountOrderByAggregateInput
    _avg?: SalesOrderItemAvgOrderByAggregateInput
    _max?: SalesOrderItemMaxOrderByAggregateInput
    _min?: SalesOrderItemMinOrderByAggregateInput
    _sum?: SalesOrderItemSumOrderByAggregateInput
  }

  export type SalesOrderItemScalarWhereWithAggregatesInput = {
    AND?: SalesOrderItemScalarWhereWithAggregatesInput | SalesOrderItemScalarWhereWithAggregatesInput[]
    OR?: SalesOrderItemScalarWhereWithAggregatesInput[]
    NOT?: SalesOrderItemScalarWhereWithAggregatesInput | SalesOrderItemScalarWhereWithAggregatesInput[]
    orderId?: StringWithAggregatesFilter<"SalesOrderItem"> | string
    itemId?: StringWithAggregatesFilter<"SalesOrderItem"> | string
    quantity?: IntWithAggregatesFilter<"SalesOrderItem"> | number
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: StringFilter<"Schedule"> | string
    orderId?: StringFilter<"Schedule"> | string
    deliveryDate?: DateTimeFilter<"Schedule"> | Date | string
    windowStart?: StringFilter<"Schedule"> | string
    windowEnd?: StringFilter<"Schedule"> | string
    confirmed?: BoolFilter<"Schedule"> | boolean
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    order?: XOR<SalesOrderScalarRelationFilter, SalesOrderWhereInput>
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    deliveryDate?: SortOrder
    windowStart?: SortOrder
    windowEnd?: SortOrder
    confirmed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: SalesOrderOrderByWithRelationInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderId?: string
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    deliveryDate?: DateTimeFilter<"Schedule"> | Date | string
    windowStart?: StringFilter<"Schedule"> | string
    windowEnd?: StringFilter<"Schedule"> | string
    confirmed?: BoolFilter<"Schedule"> | boolean
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    order?: XOR<SalesOrderScalarRelationFilter, SalesOrderWhereInput>
  }, "id" | "orderId">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    deliveryDate?: SortOrder
    windowStart?: SortOrder
    windowEnd?: SortOrder
    confirmed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Schedule"> | string
    orderId?: StringWithAggregatesFilter<"Schedule"> | string
    deliveryDate?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    windowStart?: StringWithAggregatesFilter<"Schedule"> | string
    windowEnd?: StringWithAggregatesFilter<"Schedule"> | string
    confirmed?: BoolWithAggregatesFilter<"Schedule"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    orderId?: StringNullableFilter<"AuditLog"> | string | null
    action?: EnumAuditActionFilter<"AuditLog"> | $Enums.AuditAction
    entityName?: StringFilter<"AuditLog"> | string
    oldValue?: StringNullableFilter<"AuditLog"> | string | null
    newValue?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    order?: XOR<SalesOrderNullableScalarRelationFilter, SalesOrderWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrderInput | SortOrder
    action?: SortOrder
    entityName?: SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    order?: SalesOrderOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    orderId?: StringNullableFilter<"AuditLog"> | string | null
    action?: EnumAuditActionFilter<"AuditLog"> | $Enums.AuditAction
    entityName?: StringFilter<"AuditLog"> | string
    oldValue?: StringNullableFilter<"AuditLog"> | string | null
    newValue?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    order?: XOR<SalesOrderNullableScalarRelationFilter, SalesOrderWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrderInput | SortOrder
    action?: SortOrder
    entityName?: SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    orderId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: EnumAuditActionWithAggregatesFilter<"AuditLog"> | $Enums.AuditAction
    entityName?: StringWithAggregatesFilter<"AuditLog"> | string
    oldValue?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    newValue?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    name: string
    document: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: SalesOrderCreateNestedManyWithoutCustomerInput
    transports?: CustomerTransportCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    name: string
    document: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: SalesOrderUncheckedCreateNestedManyWithoutCustomerInput
    transports?: CustomerTransportUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: SalesOrderUpdateManyWithoutCustomerNestedInput
    transports?: CustomerTransportUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: SalesOrderUncheckedUpdateManyWithoutCustomerNestedInput
    transports?: CustomerTransportUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    name: string
    document: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransportTypeCreateInput = {
    id?: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customers?: CustomerTransportCreateNestedManyWithoutTransportInput
    orders?: SalesOrderCreateNestedManyWithoutTransportInput
  }

  export type TransportTypeUncheckedCreateInput = {
    id?: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customers?: CustomerTransportUncheckedCreateNestedManyWithoutTransportInput
    orders?: SalesOrderUncheckedCreateNestedManyWithoutTransportInput
  }

  export type TransportTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerTransportUpdateManyWithoutTransportNestedInput
    orders?: SalesOrderUpdateManyWithoutTransportNestedInput
  }

  export type TransportTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerTransportUncheckedUpdateManyWithoutTransportNestedInput
    orders?: SalesOrderUncheckedUpdateManyWithoutTransportNestedInput
  }

  export type TransportTypeCreateManyInput = {
    id?: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransportTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransportTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerTransportCreateInput = {
    customer: CustomerCreateNestedOneWithoutTransportsInput
    transport: TransportTypeCreateNestedOneWithoutCustomersInput
  }

  export type CustomerTransportUncheckedCreateInput = {
    customerId: string
    transportId: string
  }

  export type CustomerTransportUpdateInput = {
    customer?: CustomerUpdateOneRequiredWithoutTransportsNestedInput
    transport?: TransportTypeUpdateOneRequiredWithoutCustomersNestedInput
  }

  export type CustomerTransportUncheckedUpdateInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    transportId?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerTransportCreateManyInput = {
    customerId: string
    transportId: string
  }

  export type CustomerTransportUpdateManyMutationInput = {

  }

  export type CustomerTransportUncheckedUpdateManyInput = {
    customerId?: StringFieldUpdateOperationsInput | string
    transportId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemCreateInput = {
    id?: string
    sku: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: SalesOrderItemCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: string
    sku: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: SalesOrderItemUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: SalesOrderItemUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: SalesOrderItemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: string
    sku: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOrderCreateInput = {
    id?: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutOrdersInput
    transport: TransportTypeCreateNestedOneWithoutOrdersInput
    items?: SalesOrderItemCreateNestedManyWithoutOrderInput
    schedule?: ScheduleCreateNestedOneWithoutOrderInput
    auditEvents?: AuditLogCreateNestedManyWithoutOrderInput
  }

  export type SalesOrderUncheckedCreateInput = {
    id?: string
    customerId: string
    transportId: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SalesOrderItemUncheckedCreateNestedManyWithoutOrderInput
    schedule?: ScheduleUncheckedCreateNestedOneWithoutOrderInput
    auditEvents?: AuditLogUncheckedCreateNestedManyWithoutOrderInput
  }

  export type SalesOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    transport?: TransportTypeUpdateOneRequiredWithoutOrdersNestedInput
    items?: SalesOrderItemUpdateManyWithoutOrderNestedInput
    schedule?: ScheduleUpdateOneWithoutOrderNestedInput
    auditEvents?: AuditLogUpdateManyWithoutOrderNestedInput
  }

  export type SalesOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    transportId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SalesOrderItemUncheckedUpdateManyWithoutOrderNestedInput
    schedule?: ScheduleUncheckedUpdateOneWithoutOrderNestedInput
    auditEvents?: AuditLogUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type SalesOrderCreateManyInput = {
    id?: string
    customerId: string
    transportId: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    transportId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOrderItemCreateInput = {
    quantity: number
    order: SalesOrderCreateNestedOneWithoutItemsInput
    item: ItemCreateNestedOneWithoutOrderItemsInput
  }

  export type SalesOrderItemUncheckedCreateInput = {
    orderId: string
    itemId: string
    quantity: number
  }

  export type SalesOrderItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    order?: SalesOrderUpdateOneRequiredWithoutItemsNestedInput
    item?: ItemUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type SalesOrderItemUncheckedUpdateInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type SalesOrderItemCreateManyInput = {
    orderId: string
    itemId: string
    quantity: number
  }

  export type SalesOrderItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type SalesOrderItemUncheckedUpdateManyInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleCreateInput = {
    id?: string
    deliveryDate: Date | string
    windowStart: string
    windowEnd: string
    confirmed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    order: SalesOrderCreateNestedOneWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: string
    orderId: string
    deliveryDate: Date | string
    windowStart: string
    windowEnd: string
    confirmed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    windowStart?: StringFieldUpdateOperationsInput | string
    windowEnd?: StringFieldUpdateOperationsInput | string
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: SalesOrderUpdateOneRequiredWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    windowStart?: StringFieldUpdateOperationsInput | string
    windowEnd?: StringFieldUpdateOperationsInput | string
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleCreateManyInput = {
    id?: string
    orderId: string
    deliveryDate: Date | string
    windowStart: string
    windowEnd: string
    confirmed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    windowStart?: StringFieldUpdateOperationsInput | string
    windowEnd?: StringFieldUpdateOperationsInput | string
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    windowStart?: StringFieldUpdateOperationsInput | string
    windowEnd?: StringFieldUpdateOperationsInput | string
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: $Enums.AuditAction
    entityName: string
    oldValue?: string | null
    newValue?: string | null
    createdAt?: Date | string
    order?: SalesOrderCreateNestedOneWithoutAuditEventsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    orderId?: string | null
    action: $Enums.AuditAction
    entityName: string
    oldValue?: string | null
    newValue?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    entityName?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: SalesOrderUpdateOneWithoutAuditEventsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    entityName?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    orderId?: string | null
    action: $Enums.AuditAction
    entityName: string
    oldValue?: string | null
    newValue?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    entityName?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    entityName?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SalesOrderListRelationFilter = {
    every?: SalesOrderWhereInput
    some?: SalesOrderWhereInput
    none?: SalesOrderWhereInput
  }

  export type CustomerTransportListRelationFilter = {
    every?: CustomerTransportWhereInput
    some?: CustomerTransportWhereInput
    none?: CustomerTransportWhereInput
  }

  export type SalesOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerTransportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    document?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    document?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    document?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TransportTypeCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransportTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransportTypeMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type TransportTypeScalarRelationFilter = {
    is?: TransportTypeWhereInput
    isNot?: TransportTypeWhereInput
  }

  export type CustomerTransportCustomerIdTransportIdCompoundUniqueInput = {
    customerId: string
    transportId: string
  }

  export type CustomerTransportCountOrderByAggregateInput = {
    customerId?: SortOrder
    transportId?: SortOrder
  }

  export type CustomerTransportMaxOrderByAggregateInput = {
    customerId?: SortOrder
    transportId?: SortOrder
  }

  export type CustomerTransportMinOrderByAggregateInput = {
    customerId?: SortOrder
    transportId?: SortOrder
  }

  export type SalesOrderItemListRelationFilter = {
    every?: SalesOrderItemWhereInput
    some?: SalesOrderItemWhereInput
    none?: SalesOrderItemWhereInput
  }

  export type SalesOrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type ScheduleNullableScalarRelationFilter = {
    is?: ScheduleWhereInput | null
    isNot?: ScheduleWhereInput | null
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SalesOrderCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    transportId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalesOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    transportId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalesOrderMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    transportId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SalesOrderScalarRelationFilter = {
    is?: SalesOrderWhereInput
    isNot?: SalesOrderWhereInput
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type SalesOrderItemOrderIdItemIdCompoundUniqueInput = {
    orderId: string
    itemId: string
  }

  export type SalesOrderItemCountOrderByAggregateInput = {
    orderId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type SalesOrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type SalesOrderItemMaxOrderByAggregateInput = {
    orderId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type SalesOrderItemMinOrderByAggregateInput = {
    orderId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type SalesOrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    deliveryDate?: SortOrder
    windowStart?: SortOrder
    windowEnd?: SortOrder
    confirmed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    deliveryDate?: SortOrder
    windowStart?: SortOrder
    windowEnd?: SortOrder
    confirmed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    deliveryDate?: SortOrder
    windowStart?: SortOrder
    windowEnd?: SortOrder
    confirmed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumAuditActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditActionFilter<$PrismaModel> | $Enums.AuditAction
  }

  export type SalesOrderNullableScalarRelationFilter = {
    is?: SalesOrderWhereInput | null
    isNot?: SalesOrderWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    action?: SortOrder
    entityName?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    action?: SortOrder
    entityName?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    action?: SortOrder
    entityName?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumAuditActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditActionWithAggregatesFilter<$PrismaModel> | $Enums.AuditAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditActionFilter<$PrismaModel>
    _max?: NestedEnumAuditActionFilter<$PrismaModel>
  }

  export type SalesOrderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SalesOrderCreateWithoutCustomerInput, SalesOrderUncheckedCreateWithoutCustomerInput> | SalesOrderCreateWithoutCustomerInput[] | SalesOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SalesOrderCreateOrConnectWithoutCustomerInput | SalesOrderCreateOrConnectWithoutCustomerInput[]
    createMany?: SalesOrderCreateManyCustomerInputEnvelope
    connect?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
  }

  export type CustomerTransportCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerTransportCreateWithoutCustomerInput, CustomerTransportUncheckedCreateWithoutCustomerInput> | CustomerTransportCreateWithoutCustomerInput[] | CustomerTransportUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerTransportCreateOrConnectWithoutCustomerInput | CustomerTransportCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerTransportCreateManyCustomerInputEnvelope
    connect?: CustomerTransportWhereUniqueInput | CustomerTransportWhereUniqueInput[]
  }

  export type SalesOrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SalesOrderCreateWithoutCustomerInput, SalesOrderUncheckedCreateWithoutCustomerInput> | SalesOrderCreateWithoutCustomerInput[] | SalesOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SalesOrderCreateOrConnectWithoutCustomerInput | SalesOrderCreateOrConnectWithoutCustomerInput[]
    createMany?: SalesOrderCreateManyCustomerInputEnvelope
    connect?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
  }

  export type CustomerTransportUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerTransportCreateWithoutCustomerInput, CustomerTransportUncheckedCreateWithoutCustomerInput> | CustomerTransportCreateWithoutCustomerInput[] | CustomerTransportUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerTransportCreateOrConnectWithoutCustomerInput | CustomerTransportCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerTransportCreateManyCustomerInputEnvelope
    connect?: CustomerTransportWhereUniqueInput | CustomerTransportWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SalesOrderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SalesOrderCreateWithoutCustomerInput, SalesOrderUncheckedCreateWithoutCustomerInput> | SalesOrderCreateWithoutCustomerInput[] | SalesOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SalesOrderCreateOrConnectWithoutCustomerInput | SalesOrderCreateOrConnectWithoutCustomerInput[]
    upsert?: SalesOrderUpsertWithWhereUniqueWithoutCustomerInput | SalesOrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SalesOrderCreateManyCustomerInputEnvelope
    set?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
    disconnect?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
    delete?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
    connect?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
    update?: SalesOrderUpdateWithWhereUniqueWithoutCustomerInput | SalesOrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SalesOrderUpdateManyWithWhereWithoutCustomerInput | SalesOrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SalesOrderScalarWhereInput | SalesOrderScalarWhereInput[]
  }

  export type CustomerTransportUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerTransportCreateWithoutCustomerInput, CustomerTransportUncheckedCreateWithoutCustomerInput> | CustomerTransportCreateWithoutCustomerInput[] | CustomerTransportUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerTransportCreateOrConnectWithoutCustomerInput | CustomerTransportCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerTransportUpsertWithWhereUniqueWithoutCustomerInput | CustomerTransportUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerTransportCreateManyCustomerInputEnvelope
    set?: CustomerTransportWhereUniqueInput | CustomerTransportWhereUniqueInput[]
    disconnect?: CustomerTransportWhereUniqueInput | CustomerTransportWhereUniqueInput[]
    delete?: CustomerTransportWhereUniqueInput | CustomerTransportWhereUniqueInput[]
    connect?: CustomerTransportWhereUniqueInput | CustomerTransportWhereUniqueInput[]
    update?: CustomerTransportUpdateWithWhereUniqueWithoutCustomerInput | CustomerTransportUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerTransportUpdateManyWithWhereWithoutCustomerInput | CustomerTransportUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerTransportScalarWhereInput | CustomerTransportScalarWhereInput[]
  }

  export type SalesOrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SalesOrderCreateWithoutCustomerInput, SalesOrderUncheckedCreateWithoutCustomerInput> | SalesOrderCreateWithoutCustomerInput[] | SalesOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SalesOrderCreateOrConnectWithoutCustomerInput | SalesOrderCreateOrConnectWithoutCustomerInput[]
    upsert?: SalesOrderUpsertWithWhereUniqueWithoutCustomerInput | SalesOrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SalesOrderCreateManyCustomerInputEnvelope
    set?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
    disconnect?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
    delete?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
    connect?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
    update?: SalesOrderUpdateWithWhereUniqueWithoutCustomerInput | SalesOrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SalesOrderUpdateManyWithWhereWithoutCustomerInput | SalesOrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SalesOrderScalarWhereInput | SalesOrderScalarWhereInput[]
  }

  export type CustomerTransportUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerTransportCreateWithoutCustomerInput, CustomerTransportUncheckedCreateWithoutCustomerInput> | CustomerTransportCreateWithoutCustomerInput[] | CustomerTransportUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerTransportCreateOrConnectWithoutCustomerInput | CustomerTransportCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerTransportUpsertWithWhereUniqueWithoutCustomerInput | CustomerTransportUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerTransportCreateManyCustomerInputEnvelope
    set?: CustomerTransportWhereUniqueInput | CustomerTransportWhereUniqueInput[]
    disconnect?: CustomerTransportWhereUniqueInput | CustomerTransportWhereUniqueInput[]
    delete?: CustomerTransportWhereUniqueInput | CustomerTransportWhereUniqueInput[]
    connect?: CustomerTransportWhereUniqueInput | CustomerTransportWhereUniqueInput[]
    update?: CustomerTransportUpdateWithWhereUniqueWithoutCustomerInput | CustomerTransportUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerTransportUpdateManyWithWhereWithoutCustomerInput | CustomerTransportUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerTransportScalarWhereInput | CustomerTransportScalarWhereInput[]
  }

  export type CustomerTransportCreateNestedManyWithoutTransportInput = {
    create?: XOR<CustomerTransportCreateWithoutTransportInput, CustomerTransportUncheckedCreateWithoutTransportInput> | CustomerTransportCreateWithoutTransportInput[] | CustomerTransportUncheckedCreateWithoutTransportInput[]
    connectOrCreate?: CustomerTransportCreateOrConnectWithoutTransportInput | CustomerTransportCreateOrConnectWithoutTransportInput[]
    createMany?: CustomerTransportCreateManyTransportInputEnvelope
    connect?: CustomerTransportWhereUniqueInput | CustomerTransportWhereUniqueInput[]
  }

  export type SalesOrderCreateNestedManyWithoutTransportInput = {
    create?: XOR<SalesOrderCreateWithoutTransportInput, SalesOrderUncheckedCreateWithoutTransportInput> | SalesOrderCreateWithoutTransportInput[] | SalesOrderUncheckedCreateWithoutTransportInput[]
    connectOrCreate?: SalesOrderCreateOrConnectWithoutTransportInput | SalesOrderCreateOrConnectWithoutTransportInput[]
    createMany?: SalesOrderCreateManyTransportInputEnvelope
    connect?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
  }

  export type CustomerTransportUncheckedCreateNestedManyWithoutTransportInput = {
    create?: XOR<CustomerTransportCreateWithoutTransportInput, CustomerTransportUncheckedCreateWithoutTransportInput> | CustomerTransportCreateWithoutTransportInput[] | CustomerTransportUncheckedCreateWithoutTransportInput[]
    connectOrCreate?: CustomerTransportCreateOrConnectWithoutTransportInput | CustomerTransportCreateOrConnectWithoutTransportInput[]
    createMany?: CustomerTransportCreateManyTransportInputEnvelope
    connect?: CustomerTransportWhereUniqueInput | CustomerTransportWhereUniqueInput[]
  }

  export type SalesOrderUncheckedCreateNestedManyWithoutTransportInput = {
    create?: XOR<SalesOrderCreateWithoutTransportInput, SalesOrderUncheckedCreateWithoutTransportInput> | SalesOrderCreateWithoutTransportInput[] | SalesOrderUncheckedCreateWithoutTransportInput[]
    connectOrCreate?: SalesOrderCreateOrConnectWithoutTransportInput | SalesOrderCreateOrConnectWithoutTransportInput[]
    createMany?: SalesOrderCreateManyTransportInputEnvelope
    connect?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
  }

  export type CustomerTransportUpdateManyWithoutTransportNestedInput = {
    create?: XOR<CustomerTransportCreateWithoutTransportInput, CustomerTransportUncheckedCreateWithoutTransportInput> | CustomerTransportCreateWithoutTransportInput[] | CustomerTransportUncheckedCreateWithoutTransportInput[]
    connectOrCreate?: CustomerTransportCreateOrConnectWithoutTransportInput | CustomerTransportCreateOrConnectWithoutTransportInput[]
    upsert?: CustomerTransportUpsertWithWhereUniqueWithoutTransportInput | CustomerTransportUpsertWithWhereUniqueWithoutTransportInput[]
    createMany?: CustomerTransportCreateManyTransportInputEnvelope
    set?: CustomerTransportWhereUniqueInput | CustomerTransportWhereUniqueInput[]
    disconnect?: CustomerTransportWhereUniqueInput | CustomerTransportWhereUniqueInput[]
    delete?: CustomerTransportWhereUniqueInput | CustomerTransportWhereUniqueInput[]
    connect?: CustomerTransportWhereUniqueInput | CustomerTransportWhereUniqueInput[]
    update?: CustomerTransportUpdateWithWhereUniqueWithoutTransportInput | CustomerTransportUpdateWithWhereUniqueWithoutTransportInput[]
    updateMany?: CustomerTransportUpdateManyWithWhereWithoutTransportInput | CustomerTransportUpdateManyWithWhereWithoutTransportInput[]
    deleteMany?: CustomerTransportScalarWhereInput | CustomerTransportScalarWhereInput[]
  }

  export type SalesOrderUpdateManyWithoutTransportNestedInput = {
    create?: XOR<SalesOrderCreateWithoutTransportInput, SalesOrderUncheckedCreateWithoutTransportInput> | SalesOrderCreateWithoutTransportInput[] | SalesOrderUncheckedCreateWithoutTransportInput[]
    connectOrCreate?: SalesOrderCreateOrConnectWithoutTransportInput | SalesOrderCreateOrConnectWithoutTransportInput[]
    upsert?: SalesOrderUpsertWithWhereUniqueWithoutTransportInput | SalesOrderUpsertWithWhereUniqueWithoutTransportInput[]
    createMany?: SalesOrderCreateManyTransportInputEnvelope
    set?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
    disconnect?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
    delete?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
    connect?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
    update?: SalesOrderUpdateWithWhereUniqueWithoutTransportInput | SalesOrderUpdateWithWhereUniqueWithoutTransportInput[]
    updateMany?: SalesOrderUpdateManyWithWhereWithoutTransportInput | SalesOrderUpdateManyWithWhereWithoutTransportInput[]
    deleteMany?: SalesOrderScalarWhereInput | SalesOrderScalarWhereInput[]
  }

  export type CustomerTransportUncheckedUpdateManyWithoutTransportNestedInput = {
    create?: XOR<CustomerTransportCreateWithoutTransportInput, CustomerTransportUncheckedCreateWithoutTransportInput> | CustomerTransportCreateWithoutTransportInput[] | CustomerTransportUncheckedCreateWithoutTransportInput[]
    connectOrCreate?: CustomerTransportCreateOrConnectWithoutTransportInput | CustomerTransportCreateOrConnectWithoutTransportInput[]
    upsert?: CustomerTransportUpsertWithWhereUniqueWithoutTransportInput | CustomerTransportUpsertWithWhereUniqueWithoutTransportInput[]
    createMany?: CustomerTransportCreateManyTransportInputEnvelope
    set?: CustomerTransportWhereUniqueInput | CustomerTransportWhereUniqueInput[]
    disconnect?: CustomerTransportWhereUniqueInput | CustomerTransportWhereUniqueInput[]
    delete?: CustomerTransportWhereUniqueInput | CustomerTransportWhereUniqueInput[]
    connect?: CustomerTransportWhereUniqueInput | CustomerTransportWhereUniqueInput[]
    update?: CustomerTransportUpdateWithWhereUniqueWithoutTransportInput | CustomerTransportUpdateWithWhereUniqueWithoutTransportInput[]
    updateMany?: CustomerTransportUpdateManyWithWhereWithoutTransportInput | CustomerTransportUpdateManyWithWhereWithoutTransportInput[]
    deleteMany?: CustomerTransportScalarWhereInput | CustomerTransportScalarWhereInput[]
  }

  export type SalesOrderUncheckedUpdateManyWithoutTransportNestedInput = {
    create?: XOR<SalesOrderCreateWithoutTransportInput, SalesOrderUncheckedCreateWithoutTransportInput> | SalesOrderCreateWithoutTransportInput[] | SalesOrderUncheckedCreateWithoutTransportInput[]
    connectOrCreate?: SalesOrderCreateOrConnectWithoutTransportInput | SalesOrderCreateOrConnectWithoutTransportInput[]
    upsert?: SalesOrderUpsertWithWhereUniqueWithoutTransportInput | SalesOrderUpsertWithWhereUniqueWithoutTransportInput[]
    createMany?: SalesOrderCreateManyTransportInputEnvelope
    set?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
    disconnect?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
    delete?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
    connect?: SalesOrderWhereUniqueInput | SalesOrderWhereUniqueInput[]
    update?: SalesOrderUpdateWithWhereUniqueWithoutTransportInput | SalesOrderUpdateWithWhereUniqueWithoutTransportInput[]
    updateMany?: SalesOrderUpdateManyWithWhereWithoutTransportInput | SalesOrderUpdateManyWithWhereWithoutTransportInput[]
    deleteMany?: SalesOrderScalarWhereInput | SalesOrderScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutTransportsInput = {
    create?: XOR<CustomerCreateWithoutTransportsInput, CustomerUncheckedCreateWithoutTransportsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTransportsInput
    connect?: CustomerWhereUniqueInput
  }

  export type TransportTypeCreateNestedOneWithoutCustomersInput = {
    create?: XOR<TransportTypeCreateWithoutCustomersInput, TransportTypeUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: TransportTypeCreateOrConnectWithoutCustomersInput
    connect?: TransportTypeWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutTransportsNestedInput = {
    create?: XOR<CustomerCreateWithoutTransportsInput, CustomerUncheckedCreateWithoutTransportsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTransportsInput
    upsert?: CustomerUpsertWithoutTransportsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutTransportsInput, CustomerUpdateWithoutTransportsInput>, CustomerUncheckedUpdateWithoutTransportsInput>
  }

  export type TransportTypeUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: XOR<TransportTypeCreateWithoutCustomersInput, TransportTypeUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: TransportTypeCreateOrConnectWithoutCustomersInput
    upsert?: TransportTypeUpsertWithoutCustomersInput
    connect?: TransportTypeWhereUniqueInput
    update?: XOR<XOR<TransportTypeUpdateToOneWithWhereWithoutCustomersInput, TransportTypeUpdateWithoutCustomersInput>, TransportTypeUncheckedUpdateWithoutCustomersInput>
  }

  export type SalesOrderItemCreateNestedManyWithoutItemInput = {
    create?: XOR<SalesOrderItemCreateWithoutItemInput, SalesOrderItemUncheckedCreateWithoutItemInput> | SalesOrderItemCreateWithoutItemInput[] | SalesOrderItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: SalesOrderItemCreateOrConnectWithoutItemInput | SalesOrderItemCreateOrConnectWithoutItemInput[]
    createMany?: SalesOrderItemCreateManyItemInputEnvelope
    connect?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
  }

  export type SalesOrderItemUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<SalesOrderItemCreateWithoutItemInput, SalesOrderItemUncheckedCreateWithoutItemInput> | SalesOrderItemCreateWithoutItemInput[] | SalesOrderItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: SalesOrderItemCreateOrConnectWithoutItemInput | SalesOrderItemCreateOrConnectWithoutItemInput[]
    createMany?: SalesOrderItemCreateManyItemInputEnvelope
    connect?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
  }

  export type SalesOrderItemUpdateManyWithoutItemNestedInput = {
    create?: XOR<SalesOrderItemCreateWithoutItemInput, SalesOrderItemUncheckedCreateWithoutItemInput> | SalesOrderItemCreateWithoutItemInput[] | SalesOrderItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: SalesOrderItemCreateOrConnectWithoutItemInput | SalesOrderItemCreateOrConnectWithoutItemInput[]
    upsert?: SalesOrderItemUpsertWithWhereUniqueWithoutItemInput | SalesOrderItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: SalesOrderItemCreateManyItemInputEnvelope
    set?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    disconnect?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    delete?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    connect?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    update?: SalesOrderItemUpdateWithWhereUniqueWithoutItemInput | SalesOrderItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: SalesOrderItemUpdateManyWithWhereWithoutItemInput | SalesOrderItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: SalesOrderItemScalarWhereInput | SalesOrderItemScalarWhereInput[]
  }

  export type SalesOrderItemUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<SalesOrderItemCreateWithoutItemInput, SalesOrderItemUncheckedCreateWithoutItemInput> | SalesOrderItemCreateWithoutItemInput[] | SalesOrderItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: SalesOrderItemCreateOrConnectWithoutItemInput | SalesOrderItemCreateOrConnectWithoutItemInput[]
    upsert?: SalesOrderItemUpsertWithWhereUniqueWithoutItemInput | SalesOrderItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: SalesOrderItemCreateManyItemInputEnvelope
    set?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    disconnect?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    delete?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    connect?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    update?: SalesOrderItemUpdateWithWhereUniqueWithoutItemInput | SalesOrderItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: SalesOrderItemUpdateManyWithWhereWithoutItemInput | SalesOrderItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: SalesOrderItemScalarWhereInput | SalesOrderItemScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutOrdersInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
  }

  export type TransportTypeCreateNestedOneWithoutOrdersInput = {
    create?: XOR<TransportTypeCreateWithoutOrdersInput, TransportTypeUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: TransportTypeCreateOrConnectWithoutOrdersInput
    connect?: TransportTypeWhereUniqueInput
  }

  export type SalesOrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<SalesOrderItemCreateWithoutOrderInput, SalesOrderItemUncheckedCreateWithoutOrderInput> | SalesOrderItemCreateWithoutOrderInput[] | SalesOrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: SalesOrderItemCreateOrConnectWithoutOrderInput | SalesOrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: SalesOrderItemCreateManyOrderInputEnvelope
    connect?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
  }

  export type ScheduleCreateNestedOneWithoutOrderInput = {
    create?: XOR<ScheduleCreateWithoutOrderInput, ScheduleUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutOrderInput
    connect?: ScheduleWhereUniqueInput
  }

  export type AuditLogCreateNestedManyWithoutOrderInput = {
    create?: XOR<AuditLogCreateWithoutOrderInput, AuditLogUncheckedCreateWithoutOrderInput> | AuditLogCreateWithoutOrderInput[] | AuditLogUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutOrderInput | AuditLogCreateOrConnectWithoutOrderInput[]
    createMany?: AuditLogCreateManyOrderInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type SalesOrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<SalesOrderItemCreateWithoutOrderInput, SalesOrderItemUncheckedCreateWithoutOrderInput> | SalesOrderItemCreateWithoutOrderInput[] | SalesOrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: SalesOrderItemCreateOrConnectWithoutOrderInput | SalesOrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: SalesOrderItemCreateManyOrderInputEnvelope
    connect?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<ScheduleCreateWithoutOrderInput, ScheduleUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutOrderInput
    connect?: ScheduleWhereUniqueInput
  }

  export type AuditLogUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<AuditLogCreateWithoutOrderInput, AuditLogUncheckedCreateWithoutOrderInput> | AuditLogCreateWithoutOrderInput[] | AuditLogUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutOrderInput | AuditLogCreateOrConnectWithoutOrderInput[]
    createMany?: AuditLogCreateManyOrderInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type CustomerUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    upsert?: CustomerUpsertWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutOrdersInput, CustomerUpdateWithoutOrdersInput>, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type TransportTypeUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<TransportTypeCreateWithoutOrdersInput, TransportTypeUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: TransportTypeCreateOrConnectWithoutOrdersInput
    upsert?: TransportTypeUpsertWithoutOrdersInput
    connect?: TransportTypeWhereUniqueInput
    update?: XOR<XOR<TransportTypeUpdateToOneWithWhereWithoutOrdersInput, TransportTypeUpdateWithoutOrdersInput>, TransportTypeUncheckedUpdateWithoutOrdersInput>
  }

  export type SalesOrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<SalesOrderItemCreateWithoutOrderInput, SalesOrderItemUncheckedCreateWithoutOrderInput> | SalesOrderItemCreateWithoutOrderInput[] | SalesOrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: SalesOrderItemCreateOrConnectWithoutOrderInput | SalesOrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: SalesOrderItemUpsertWithWhereUniqueWithoutOrderInput | SalesOrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: SalesOrderItemCreateManyOrderInputEnvelope
    set?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    disconnect?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    delete?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    connect?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    update?: SalesOrderItemUpdateWithWhereUniqueWithoutOrderInput | SalesOrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: SalesOrderItemUpdateManyWithWhereWithoutOrderInput | SalesOrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: SalesOrderItemScalarWhereInput | SalesOrderItemScalarWhereInput[]
  }

  export type ScheduleUpdateOneWithoutOrderNestedInput = {
    create?: XOR<ScheduleCreateWithoutOrderInput, ScheduleUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutOrderInput
    upsert?: ScheduleUpsertWithoutOrderInput
    disconnect?: ScheduleWhereInput | boolean
    delete?: ScheduleWhereInput | boolean
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutOrderInput, ScheduleUpdateWithoutOrderInput>, ScheduleUncheckedUpdateWithoutOrderInput>
  }

  export type AuditLogUpdateManyWithoutOrderNestedInput = {
    create?: XOR<AuditLogCreateWithoutOrderInput, AuditLogUncheckedCreateWithoutOrderInput> | AuditLogCreateWithoutOrderInput[] | AuditLogUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutOrderInput | AuditLogCreateOrConnectWithoutOrderInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutOrderInput | AuditLogUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: AuditLogCreateManyOrderInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutOrderInput | AuditLogUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutOrderInput | AuditLogUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type SalesOrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<SalesOrderItemCreateWithoutOrderInput, SalesOrderItemUncheckedCreateWithoutOrderInput> | SalesOrderItemCreateWithoutOrderInput[] | SalesOrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: SalesOrderItemCreateOrConnectWithoutOrderInput | SalesOrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: SalesOrderItemUpsertWithWhereUniqueWithoutOrderInput | SalesOrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: SalesOrderItemCreateManyOrderInputEnvelope
    set?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    disconnect?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    delete?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    connect?: SalesOrderItemWhereUniqueInput | SalesOrderItemWhereUniqueInput[]
    update?: SalesOrderItemUpdateWithWhereUniqueWithoutOrderInput | SalesOrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: SalesOrderItemUpdateManyWithWhereWithoutOrderInput | SalesOrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: SalesOrderItemScalarWhereInput | SalesOrderItemScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<ScheduleCreateWithoutOrderInput, ScheduleUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutOrderInput
    upsert?: ScheduleUpsertWithoutOrderInput
    disconnect?: ScheduleWhereInput | boolean
    delete?: ScheduleWhereInput | boolean
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutOrderInput, ScheduleUpdateWithoutOrderInput>, ScheduleUncheckedUpdateWithoutOrderInput>
  }

  export type AuditLogUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<AuditLogCreateWithoutOrderInput, AuditLogUncheckedCreateWithoutOrderInput> | AuditLogCreateWithoutOrderInput[] | AuditLogUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutOrderInput | AuditLogCreateOrConnectWithoutOrderInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutOrderInput | AuditLogUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: AuditLogCreateManyOrderInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutOrderInput | AuditLogUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutOrderInput | AuditLogUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type SalesOrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<SalesOrderCreateWithoutItemsInput, SalesOrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SalesOrderCreateOrConnectWithoutItemsInput
    connect?: SalesOrderWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<ItemCreateWithoutOrderItemsInput, ItemUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutOrderItemsInput
    connect?: ItemWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SalesOrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<SalesOrderCreateWithoutItemsInput, SalesOrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SalesOrderCreateOrConnectWithoutItemsInput
    upsert?: SalesOrderUpsertWithoutItemsInput
    connect?: SalesOrderWhereUniqueInput
    update?: XOR<XOR<SalesOrderUpdateToOneWithWhereWithoutItemsInput, SalesOrderUpdateWithoutItemsInput>, SalesOrderUncheckedUpdateWithoutItemsInput>
  }

  export type ItemUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<ItemCreateWithoutOrderItemsInput, ItemUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutOrderItemsInput
    upsert?: ItemUpsertWithoutOrderItemsInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutOrderItemsInput, ItemUpdateWithoutOrderItemsInput>, ItemUncheckedUpdateWithoutOrderItemsInput>
  }

  export type SalesOrderCreateNestedOneWithoutScheduleInput = {
    create?: XOR<SalesOrderCreateWithoutScheduleInput, SalesOrderUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: SalesOrderCreateOrConnectWithoutScheduleInput
    connect?: SalesOrderWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SalesOrderUpdateOneRequiredWithoutScheduleNestedInput = {
    create?: XOR<SalesOrderCreateWithoutScheduleInput, SalesOrderUncheckedCreateWithoutScheduleInput>
    connectOrCreate?: SalesOrderCreateOrConnectWithoutScheduleInput
    upsert?: SalesOrderUpsertWithoutScheduleInput
    connect?: SalesOrderWhereUniqueInput
    update?: XOR<XOR<SalesOrderUpdateToOneWithWhereWithoutScheduleInput, SalesOrderUpdateWithoutScheduleInput>, SalesOrderUncheckedUpdateWithoutScheduleInput>
  }

  export type SalesOrderCreateNestedOneWithoutAuditEventsInput = {
    create?: XOR<SalesOrderCreateWithoutAuditEventsInput, SalesOrderUncheckedCreateWithoutAuditEventsInput>
    connectOrCreate?: SalesOrderCreateOrConnectWithoutAuditEventsInput
    connect?: SalesOrderWhereUniqueInput
  }

  export type EnumAuditActionFieldUpdateOperationsInput = {
    set?: $Enums.AuditAction
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SalesOrderUpdateOneWithoutAuditEventsNestedInput = {
    create?: XOR<SalesOrderCreateWithoutAuditEventsInput, SalesOrderUncheckedCreateWithoutAuditEventsInput>
    connectOrCreate?: SalesOrderCreateOrConnectWithoutAuditEventsInput
    upsert?: SalesOrderUpsertWithoutAuditEventsInput
    disconnect?: SalesOrderWhereInput | boolean
    delete?: SalesOrderWhereInput | boolean
    connect?: SalesOrderWhereUniqueInput
    update?: XOR<XOR<SalesOrderUpdateToOneWithWhereWithoutAuditEventsInput, SalesOrderUpdateWithoutAuditEventsInput>, SalesOrderUncheckedUpdateWithoutAuditEventsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumAuditActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditActionFilter<$PrismaModel> | $Enums.AuditAction
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAuditActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuditAction[] | ListEnumAuditActionFieldRefInput<$PrismaModel>
    not?: NestedEnumAuditActionWithAggregatesFilter<$PrismaModel> | $Enums.AuditAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditActionFilter<$PrismaModel>
    _max?: NestedEnumAuditActionFilter<$PrismaModel>
  }

  export type SalesOrderCreateWithoutCustomerInput = {
    id?: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    transport: TransportTypeCreateNestedOneWithoutOrdersInput
    items?: SalesOrderItemCreateNestedManyWithoutOrderInput
    schedule?: ScheduleCreateNestedOneWithoutOrderInput
    auditEvents?: AuditLogCreateNestedManyWithoutOrderInput
  }

  export type SalesOrderUncheckedCreateWithoutCustomerInput = {
    id?: string
    transportId: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SalesOrderItemUncheckedCreateNestedManyWithoutOrderInput
    schedule?: ScheduleUncheckedCreateNestedOneWithoutOrderInput
    auditEvents?: AuditLogUncheckedCreateNestedManyWithoutOrderInput
  }

  export type SalesOrderCreateOrConnectWithoutCustomerInput = {
    where: SalesOrderWhereUniqueInput
    create: XOR<SalesOrderCreateWithoutCustomerInput, SalesOrderUncheckedCreateWithoutCustomerInput>
  }

  export type SalesOrderCreateManyCustomerInputEnvelope = {
    data: SalesOrderCreateManyCustomerInput | SalesOrderCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type CustomerTransportCreateWithoutCustomerInput = {
    transport: TransportTypeCreateNestedOneWithoutCustomersInput
  }

  export type CustomerTransportUncheckedCreateWithoutCustomerInput = {
    transportId: string
  }

  export type CustomerTransportCreateOrConnectWithoutCustomerInput = {
    where: CustomerTransportWhereUniqueInput
    create: XOR<CustomerTransportCreateWithoutCustomerInput, CustomerTransportUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerTransportCreateManyCustomerInputEnvelope = {
    data: CustomerTransportCreateManyCustomerInput | CustomerTransportCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type SalesOrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: SalesOrderWhereUniqueInput
    update: XOR<SalesOrderUpdateWithoutCustomerInput, SalesOrderUncheckedUpdateWithoutCustomerInput>
    create: XOR<SalesOrderCreateWithoutCustomerInput, SalesOrderUncheckedCreateWithoutCustomerInput>
  }

  export type SalesOrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: SalesOrderWhereUniqueInput
    data: XOR<SalesOrderUpdateWithoutCustomerInput, SalesOrderUncheckedUpdateWithoutCustomerInput>
  }

  export type SalesOrderUpdateManyWithWhereWithoutCustomerInput = {
    where: SalesOrderScalarWhereInput
    data: XOR<SalesOrderUpdateManyMutationInput, SalesOrderUncheckedUpdateManyWithoutCustomerInput>
  }

  export type SalesOrderScalarWhereInput = {
    AND?: SalesOrderScalarWhereInput | SalesOrderScalarWhereInput[]
    OR?: SalesOrderScalarWhereInput[]
    NOT?: SalesOrderScalarWhereInput | SalesOrderScalarWhereInput[]
    id?: StringFilter<"SalesOrder"> | string
    customerId?: StringFilter<"SalesOrder"> | string
    transportId?: StringFilter<"SalesOrder"> | string
    status?: EnumOrderStatusFilter<"SalesOrder"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"SalesOrder"> | Date | string
    updatedAt?: DateTimeFilter<"SalesOrder"> | Date | string
  }

  export type CustomerTransportUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CustomerTransportWhereUniqueInput
    update: XOR<CustomerTransportUpdateWithoutCustomerInput, CustomerTransportUncheckedUpdateWithoutCustomerInput>
    create: XOR<CustomerTransportCreateWithoutCustomerInput, CustomerTransportUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerTransportUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CustomerTransportWhereUniqueInput
    data: XOR<CustomerTransportUpdateWithoutCustomerInput, CustomerTransportUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerTransportUpdateManyWithWhereWithoutCustomerInput = {
    where: CustomerTransportScalarWhereInput
    data: XOR<CustomerTransportUpdateManyMutationInput, CustomerTransportUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerTransportScalarWhereInput = {
    AND?: CustomerTransportScalarWhereInput | CustomerTransportScalarWhereInput[]
    OR?: CustomerTransportScalarWhereInput[]
    NOT?: CustomerTransportScalarWhereInput | CustomerTransportScalarWhereInput[]
    customerId?: StringFilter<"CustomerTransport"> | string
    transportId?: StringFilter<"CustomerTransport"> | string
  }

  export type CustomerTransportCreateWithoutTransportInput = {
    customer: CustomerCreateNestedOneWithoutTransportsInput
  }

  export type CustomerTransportUncheckedCreateWithoutTransportInput = {
    customerId: string
  }

  export type CustomerTransportCreateOrConnectWithoutTransportInput = {
    where: CustomerTransportWhereUniqueInput
    create: XOR<CustomerTransportCreateWithoutTransportInput, CustomerTransportUncheckedCreateWithoutTransportInput>
  }

  export type CustomerTransportCreateManyTransportInputEnvelope = {
    data: CustomerTransportCreateManyTransportInput | CustomerTransportCreateManyTransportInput[]
    skipDuplicates?: boolean
  }

  export type SalesOrderCreateWithoutTransportInput = {
    id?: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutOrdersInput
    items?: SalesOrderItemCreateNestedManyWithoutOrderInput
    schedule?: ScheduleCreateNestedOneWithoutOrderInput
    auditEvents?: AuditLogCreateNestedManyWithoutOrderInput
  }

  export type SalesOrderUncheckedCreateWithoutTransportInput = {
    id?: string
    customerId: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SalesOrderItemUncheckedCreateNestedManyWithoutOrderInput
    schedule?: ScheduleUncheckedCreateNestedOneWithoutOrderInput
    auditEvents?: AuditLogUncheckedCreateNestedManyWithoutOrderInput
  }

  export type SalesOrderCreateOrConnectWithoutTransportInput = {
    where: SalesOrderWhereUniqueInput
    create: XOR<SalesOrderCreateWithoutTransportInput, SalesOrderUncheckedCreateWithoutTransportInput>
  }

  export type SalesOrderCreateManyTransportInputEnvelope = {
    data: SalesOrderCreateManyTransportInput | SalesOrderCreateManyTransportInput[]
    skipDuplicates?: boolean
  }

  export type CustomerTransportUpsertWithWhereUniqueWithoutTransportInput = {
    where: CustomerTransportWhereUniqueInput
    update: XOR<CustomerTransportUpdateWithoutTransportInput, CustomerTransportUncheckedUpdateWithoutTransportInput>
    create: XOR<CustomerTransportCreateWithoutTransportInput, CustomerTransportUncheckedCreateWithoutTransportInput>
  }

  export type CustomerTransportUpdateWithWhereUniqueWithoutTransportInput = {
    where: CustomerTransportWhereUniqueInput
    data: XOR<CustomerTransportUpdateWithoutTransportInput, CustomerTransportUncheckedUpdateWithoutTransportInput>
  }

  export type CustomerTransportUpdateManyWithWhereWithoutTransportInput = {
    where: CustomerTransportScalarWhereInput
    data: XOR<CustomerTransportUpdateManyMutationInput, CustomerTransportUncheckedUpdateManyWithoutTransportInput>
  }

  export type SalesOrderUpsertWithWhereUniqueWithoutTransportInput = {
    where: SalesOrderWhereUniqueInput
    update: XOR<SalesOrderUpdateWithoutTransportInput, SalesOrderUncheckedUpdateWithoutTransportInput>
    create: XOR<SalesOrderCreateWithoutTransportInput, SalesOrderUncheckedCreateWithoutTransportInput>
  }

  export type SalesOrderUpdateWithWhereUniqueWithoutTransportInput = {
    where: SalesOrderWhereUniqueInput
    data: XOR<SalesOrderUpdateWithoutTransportInput, SalesOrderUncheckedUpdateWithoutTransportInput>
  }

  export type SalesOrderUpdateManyWithWhereWithoutTransportInput = {
    where: SalesOrderScalarWhereInput
    data: XOR<SalesOrderUpdateManyMutationInput, SalesOrderUncheckedUpdateManyWithoutTransportInput>
  }

  export type CustomerCreateWithoutTransportsInput = {
    id?: string
    name: string
    document: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: SalesOrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutTransportsInput = {
    id?: string
    name: string
    document: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: SalesOrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutTransportsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutTransportsInput, CustomerUncheckedCreateWithoutTransportsInput>
  }

  export type TransportTypeCreateWithoutCustomersInput = {
    id?: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: SalesOrderCreateNestedManyWithoutTransportInput
  }

  export type TransportTypeUncheckedCreateWithoutCustomersInput = {
    id?: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: SalesOrderUncheckedCreateNestedManyWithoutTransportInput
  }

  export type TransportTypeCreateOrConnectWithoutCustomersInput = {
    where: TransportTypeWhereUniqueInput
    create: XOR<TransportTypeCreateWithoutCustomersInput, TransportTypeUncheckedCreateWithoutCustomersInput>
  }

  export type CustomerUpsertWithoutTransportsInput = {
    update: XOR<CustomerUpdateWithoutTransportsInput, CustomerUncheckedUpdateWithoutTransportsInput>
    create: XOR<CustomerCreateWithoutTransportsInput, CustomerUncheckedCreateWithoutTransportsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutTransportsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutTransportsInput, CustomerUncheckedUpdateWithoutTransportsInput>
  }

  export type CustomerUpdateWithoutTransportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: SalesOrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutTransportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: SalesOrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type TransportTypeUpsertWithoutCustomersInput = {
    update: XOR<TransportTypeUpdateWithoutCustomersInput, TransportTypeUncheckedUpdateWithoutCustomersInput>
    create: XOR<TransportTypeCreateWithoutCustomersInput, TransportTypeUncheckedCreateWithoutCustomersInput>
    where?: TransportTypeWhereInput
  }

  export type TransportTypeUpdateToOneWithWhereWithoutCustomersInput = {
    where?: TransportTypeWhereInput
    data: XOR<TransportTypeUpdateWithoutCustomersInput, TransportTypeUncheckedUpdateWithoutCustomersInput>
  }

  export type TransportTypeUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: SalesOrderUpdateManyWithoutTransportNestedInput
  }

  export type TransportTypeUncheckedUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: SalesOrderUncheckedUpdateManyWithoutTransportNestedInput
  }

  export type SalesOrderItemCreateWithoutItemInput = {
    quantity: number
    order: SalesOrderCreateNestedOneWithoutItemsInput
  }

  export type SalesOrderItemUncheckedCreateWithoutItemInput = {
    orderId: string
    quantity: number
  }

  export type SalesOrderItemCreateOrConnectWithoutItemInput = {
    where: SalesOrderItemWhereUniqueInput
    create: XOR<SalesOrderItemCreateWithoutItemInput, SalesOrderItemUncheckedCreateWithoutItemInput>
  }

  export type SalesOrderItemCreateManyItemInputEnvelope = {
    data: SalesOrderItemCreateManyItemInput | SalesOrderItemCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type SalesOrderItemUpsertWithWhereUniqueWithoutItemInput = {
    where: SalesOrderItemWhereUniqueInput
    update: XOR<SalesOrderItemUpdateWithoutItemInput, SalesOrderItemUncheckedUpdateWithoutItemInput>
    create: XOR<SalesOrderItemCreateWithoutItemInput, SalesOrderItemUncheckedCreateWithoutItemInput>
  }

  export type SalesOrderItemUpdateWithWhereUniqueWithoutItemInput = {
    where: SalesOrderItemWhereUniqueInput
    data: XOR<SalesOrderItemUpdateWithoutItemInput, SalesOrderItemUncheckedUpdateWithoutItemInput>
  }

  export type SalesOrderItemUpdateManyWithWhereWithoutItemInput = {
    where: SalesOrderItemScalarWhereInput
    data: XOR<SalesOrderItemUpdateManyMutationInput, SalesOrderItemUncheckedUpdateManyWithoutItemInput>
  }

  export type SalesOrderItemScalarWhereInput = {
    AND?: SalesOrderItemScalarWhereInput | SalesOrderItemScalarWhereInput[]
    OR?: SalesOrderItemScalarWhereInput[]
    NOT?: SalesOrderItemScalarWhereInput | SalesOrderItemScalarWhereInput[]
    orderId?: StringFilter<"SalesOrderItem"> | string
    itemId?: StringFilter<"SalesOrderItem"> | string
    quantity?: IntFilter<"SalesOrderItem"> | number
  }

  export type CustomerCreateWithoutOrdersInput = {
    id?: string
    name: string
    document: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transports?: CustomerTransportCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    document: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transports?: CustomerTransportUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutOrdersInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
  }

  export type TransportTypeCreateWithoutOrdersInput = {
    id?: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customers?: CustomerTransportCreateNestedManyWithoutTransportInput
  }

  export type TransportTypeUncheckedCreateWithoutOrdersInput = {
    id?: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customers?: CustomerTransportUncheckedCreateNestedManyWithoutTransportInput
  }

  export type TransportTypeCreateOrConnectWithoutOrdersInput = {
    where: TransportTypeWhereUniqueInput
    create: XOR<TransportTypeCreateWithoutOrdersInput, TransportTypeUncheckedCreateWithoutOrdersInput>
  }

  export type SalesOrderItemCreateWithoutOrderInput = {
    quantity: number
    item: ItemCreateNestedOneWithoutOrderItemsInput
  }

  export type SalesOrderItemUncheckedCreateWithoutOrderInput = {
    itemId: string
    quantity: number
  }

  export type SalesOrderItemCreateOrConnectWithoutOrderInput = {
    where: SalesOrderItemWhereUniqueInput
    create: XOR<SalesOrderItemCreateWithoutOrderInput, SalesOrderItemUncheckedCreateWithoutOrderInput>
  }

  export type SalesOrderItemCreateManyOrderInputEnvelope = {
    data: SalesOrderItemCreateManyOrderInput | SalesOrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleCreateWithoutOrderInput = {
    id?: string
    deliveryDate: Date | string
    windowStart: string
    windowEnd: string
    confirmed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUncheckedCreateWithoutOrderInput = {
    id?: string
    deliveryDate: Date | string
    windowStart: string
    windowEnd: string
    confirmed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleCreateOrConnectWithoutOrderInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutOrderInput, ScheduleUncheckedCreateWithoutOrderInput>
  }

  export type AuditLogCreateWithoutOrderInput = {
    id?: string
    action: $Enums.AuditAction
    entityName: string
    oldValue?: string | null
    newValue?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutOrderInput = {
    id?: string
    action: $Enums.AuditAction
    entityName: string
    oldValue?: string | null
    newValue?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutOrderInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutOrderInput, AuditLogUncheckedCreateWithoutOrderInput>
  }

  export type AuditLogCreateManyOrderInputEnvelope = {
    data: AuditLogCreateManyOrderInput | AuditLogCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutOrdersInput = {
    update: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutOrdersInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type CustomerUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transports?: CustomerTransportUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transports?: CustomerTransportUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type TransportTypeUpsertWithoutOrdersInput = {
    update: XOR<TransportTypeUpdateWithoutOrdersInput, TransportTypeUncheckedUpdateWithoutOrdersInput>
    create: XOR<TransportTypeCreateWithoutOrdersInput, TransportTypeUncheckedCreateWithoutOrdersInput>
    where?: TransportTypeWhereInput
  }

  export type TransportTypeUpdateToOneWithWhereWithoutOrdersInput = {
    where?: TransportTypeWhereInput
    data: XOR<TransportTypeUpdateWithoutOrdersInput, TransportTypeUncheckedUpdateWithoutOrdersInput>
  }

  export type TransportTypeUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerTransportUpdateManyWithoutTransportNestedInput
  }

  export type TransportTypeUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerTransportUncheckedUpdateManyWithoutTransportNestedInput
  }

  export type SalesOrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: SalesOrderItemWhereUniqueInput
    update: XOR<SalesOrderItemUpdateWithoutOrderInput, SalesOrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<SalesOrderItemCreateWithoutOrderInput, SalesOrderItemUncheckedCreateWithoutOrderInput>
  }

  export type SalesOrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: SalesOrderItemWhereUniqueInput
    data: XOR<SalesOrderItemUpdateWithoutOrderInput, SalesOrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type SalesOrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: SalesOrderItemScalarWhereInput
    data: XOR<SalesOrderItemUpdateManyMutationInput, SalesOrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type ScheduleUpsertWithoutOrderInput = {
    update: XOR<ScheduleUpdateWithoutOrderInput, ScheduleUncheckedUpdateWithoutOrderInput>
    create: XOR<ScheduleCreateWithoutOrderInput, ScheduleUncheckedCreateWithoutOrderInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutOrderInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutOrderInput, ScheduleUncheckedUpdateWithoutOrderInput>
  }

  export type ScheduleUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    windowStart?: StringFieldUpdateOperationsInput | string
    windowEnd?: StringFieldUpdateOperationsInput | string
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    deliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    windowStart?: StringFieldUpdateOperationsInput | string
    windowEnd?: StringFieldUpdateOperationsInput | string
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutOrderInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutOrderInput, AuditLogUncheckedUpdateWithoutOrderInput>
    create: XOR<AuditLogCreateWithoutOrderInput, AuditLogUncheckedCreateWithoutOrderInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutOrderInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutOrderInput, AuditLogUncheckedUpdateWithoutOrderInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutOrderInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutOrderInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    orderId?: StringNullableFilter<"AuditLog"> | string | null
    action?: EnumAuditActionFilter<"AuditLog"> | $Enums.AuditAction
    entityName?: StringFilter<"AuditLog"> | string
    oldValue?: StringNullableFilter<"AuditLog"> | string | null
    newValue?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type SalesOrderCreateWithoutItemsInput = {
    id?: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutOrdersInput
    transport: TransportTypeCreateNestedOneWithoutOrdersInput
    schedule?: ScheduleCreateNestedOneWithoutOrderInput
    auditEvents?: AuditLogCreateNestedManyWithoutOrderInput
  }

  export type SalesOrderUncheckedCreateWithoutItemsInput = {
    id?: string
    customerId: string
    transportId: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    schedule?: ScheduleUncheckedCreateNestedOneWithoutOrderInput
    auditEvents?: AuditLogUncheckedCreateNestedManyWithoutOrderInput
  }

  export type SalesOrderCreateOrConnectWithoutItemsInput = {
    where: SalesOrderWhereUniqueInput
    create: XOR<SalesOrderCreateWithoutItemsInput, SalesOrderUncheckedCreateWithoutItemsInput>
  }

  export type ItemCreateWithoutOrderItemsInput = {
    id?: string
    sku: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    sku: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemCreateOrConnectWithoutOrderItemsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutOrderItemsInput, ItemUncheckedCreateWithoutOrderItemsInput>
  }

  export type SalesOrderUpsertWithoutItemsInput = {
    update: XOR<SalesOrderUpdateWithoutItemsInput, SalesOrderUncheckedUpdateWithoutItemsInput>
    create: XOR<SalesOrderCreateWithoutItemsInput, SalesOrderUncheckedCreateWithoutItemsInput>
    where?: SalesOrderWhereInput
  }

  export type SalesOrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: SalesOrderWhereInput
    data: XOR<SalesOrderUpdateWithoutItemsInput, SalesOrderUncheckedUpdateWithoutItemsInput>
  }

  export type SalesOrderUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    transport?: TransportTypeUpdateOneRequiredWithoutOrdersNestedInput
    schedule?: ScheduleUpdateOneWithoutOrderNestedInput
    auditEvents?: AuditLogUpdateManyWithoutOrderNestedInput
  }

  export type SalesOrderUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    transportId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: ScheduleUncheckedUpdateOneWithoutOrderNestedInput
    auditEvents?: AuditLogUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type ItemUpsertWithoutOrderItemsInput = {
    update: XOR<ItemUpdateWithoutOrderItemsInput, ItemUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<ItemCreateWithoutOrderItemsInput, ItemUncheckedCreateWithoutOrderItemsInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutOrderItemsInput, ItemUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ItemUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOrderCreateWithoutScheduleInput = {
    id?: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutOrdersInput
    transport: TransportTypeCreateNestedOneWithoutOrdersInput
    items?: SalesOrderItemCreateNestedManyWithoutOrderInput
    auditEvents?: AuditLogCreateNestedManyWithoutOrderInput
  }

  export type SalesOrderUncheckedCreateWithoutScheduleInput = {
    id?: string
    customerId: string
    transportId: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SalesOrderItemUncheckedCreateNestedManyWithoutOrderInput
    auditEvents?: AuditLogUncheckedCreateNestedManyWithoutOrderInput
  }

  export type SalesOrderCreateOrConnectWithoutScheduleInput = {
    where: SalesOrderWhereUniqueInput
    create: XOR<SalesOrderCreateWithoutScheduleInput, SalesOrderUncheckedCreateWithoutScheduleInput>
  }

  export type SalesOrderUpsertWithoutScheduleInput = {
    update: XOR<SalesOrderUpdateWithoutScheduleInput, SalesOrderUncheckedUpdateWithoutScheduleInput>
    create: XOR<SalesOrderCreateWithoutScheduleInput, SalesOrderUncheckedCreateWithoutScheduleInput>
    where?: SalesOrderWhereInput
  }

  export type SalesOrderUpdateToOneWithWhereWithoutScheduleInput = {
    where?: SalesOrderWhereInput
    data: XOR<SalesOrderUpdateWithoutScheduleInput, SalesOrderUncheckedUpdateWithoutScheduleInput>
  }

  export type SalesOrderUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    transport?: TransportTypeUpdateOneRequiredWithoutOrdersNestedInput
    items?: SalesOrderItemUpdateManyWithoutOrderNestedInput
    auditEvents?: AuditLogUpdateManyWithoutOrderNestedInput
  }

  export type SalesOrderUncheckedUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    transportId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SalesOrderItemUncheckedUpdateManyWithoutOrderNestedInput
    auditEvents?: AuditLogUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type SalesOrderCreateWithoutAuditEventsInput = {
    id?: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutOrdersInput
    transport: TransportTypeCreateNestedOneWithoutOrdersInput
    items?: SalesOrderItemCreateNestedManyWithoutOrderInput
    schedule?: ScheduleCreateNestedOneWithoutOrderInput
  }

  export type SalesOrderUncheckedCreateWithoutAuditEventsInput = {
    id?: string
    customerId: string
    transportId: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: SalesOrderItemUncheckedCreateNestedManyWithoutOrderInput
    schedule?: ScheduleUncheckedCreateNestedOneWithoutOrderInput
  }

  export type SalesOrderCreateOrConnectWithoutAuditEventsInput = {
    where: SalesOrderWhereUniqueInput
    create: XOR<SalesOrderCreateWithoutAuditEventsInput, SalesOrderUncheckedCreateWithoutAuditEventsInput>
  }

  export type SalesOrderUpsertWithoutAuditEventsInput = {
    update: XOR<SalesOrderUpdateWithoutAuditEventsInput, SalesOrderUncheckedUpdateWithoutAuditEventsInput>
    create: XOR<SalesOrderCreateWithoutAuditEventsInput, SalesOrderUncheckedCreateWithoutAuditEventsInput>
    where?: SalesOrderWhereInput
  }

  export type SalesOrderUpdateToOneWithWhereWithoutAuditEventsInput = {
    where?: SalesOrderWhereInput
    data: XOR<SalesOrderUpdateWithoutAuditEventsInput, SalesOrderUncheckedUpdateWithoutAuditEventsInput>
  }

  export type SalesOrderUpdateWithoutAuditEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    transport?: TransportTypeUpdateOneRequiredWithoutOrdersNestedInput
    items?: SalesOrderItemUpdateManyWithoutOrderNestedInput
    schedule?: ScheduleUpdateOneWithoutOrderNestedInput
  }

  export type SalesOrderUncheckedUpdateWithoutAuditEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    transportId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SalesOrderItemUncheckedUpdateManyWithoutOrderNestedInput
    schedule?: ScheduleUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type SalesOrderCreateManyCustomerInput = {
    id?: string
    transportId: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerTransportCreateManyCustomerInput = {
    transportId: string
  }

  export type SalesOrderUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transport?: TransportTypeUpdateOneRequiredWithoutOrdersNestedInput
    items?: SalesOrderItemUpdateManyWithoutOrderNestedInput
    schedule?: ScheduleUpdateOneWithoutOrderNestedInput
    auditEvents?: AuditLogUpdateManyWithoutOrderNestedInput
  }

  export type SalesOrderUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    transportId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SalesOrderItemUncheckedUpdateManyWithoutOrderNestedInput
    schedule?: ScheduleUncheckedUpdateOneWithoutOrderNestedInput
    auditEvents?: AuditLogUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type SalesOrderUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    transportId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerTransportUpdateWithoutCustomerInput = {
    transport?: TransportTypeUpdateOneRequiredWithoutCustomersNestedInput
  }

  export type CustomerTransportUncheckedUpdateWithoutCustomerInput = {
    transportId?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerTransportUncheckedUpdateManyWithoutCustomerInput = {
    transportId?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerTransportCreateManyTransportInput = {
    customerId: string
  }

  export type SalesOrderCreateManyTransportInput = {
    id?: string
    customerId: string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerTransportUpdateWithoutTransportInput = {
    customer?: CustomerUpdateOneRequiredWithoutTransportsNestedInput
  }

  export type CustomerTransportUncheckedUpdateWithoutTransportInput = {
    customerId?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerTransportUncheckedUpdateManyWithoutTransportInput = {
    customerId?: StringFieldUpdateOperationsInput | string
  }

  export type SalesOrderUpdateWithoutTransportInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    items?: SalesOrderItemUpdateManyWithoutOrderNestedInput
    schedule?: ScheduleUpdateOneWithoutOrderNestedInput
    auditEvents?: AuditLogUpdateManyWithoutOrderNestedInput
  }

  export type SalesOrderUncheckedUpdateWithoutTransportInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SalesOrderItemUncheckedUpdateManyWithoutOrderNestedInput
    schedule?: ScheduleUncheckedUpdateOneWithoutOrderNestedInput
    auditEvents?: AuditLogUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type SalesOrderUncheckedUpdateManyWithoutTransportInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesOrderItemCreateManyItemInput = {
    orderId: string
    quantity: number
  }

  export type SalesOrderItemUpdateWithoutItemInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    order?: SalesOrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type SalesOrderItemUncheckedUpdateWithoutItemInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type SalesOrderItemUncheckedUpdateManyWithoutItemInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type SalesOrderItemCreateManyOrderInput = {
    itemId: string
    quantity: number
  }

  export type AuditLogCreateManyOrderInput = {
    id?: string
    action: $Enums.AuditAction
    entityName: string
    oldValue?: string | null
    newValue?: string | null
    createdAt?: Date | string
  }

  export type SalesOrderItemUpdateWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    item?: ItemUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type SalesOrderItemUncheckedUpdateWithoutOrderInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type SalesOrderItemUncheckedUpdateManyWithoutOrderInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type AuditLogUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    entityName?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    entityName?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    entityName?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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