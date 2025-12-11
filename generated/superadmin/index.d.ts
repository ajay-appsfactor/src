
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
 * Model company
 * 
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Material
 * 
 */
export type Material = $Result.DefaultSelection<Prisma.$MaterialPayload>
/**
 * Model Finish
 * 
 */
export type Finish = $Result.DefaultSelection<Prisma.$FinishPayload>
/**
 * Model currency
 * 
 */
export type currency = $Result.DefaultSelection<Prisma.$currencyPayload>
/**
 * Model payment_terms
 * 
 */
export type payment_terms = $Result.DefaultSelection<Prisma.$payment_termsPayload>
/**
 * Model PaymentStatus
 * 
 */
export type PaymentStatus = $Result.DefaultSelection<Prisma.$PaymentStatusPayload>
/**
 * Model QuoteStatus
 * 
 */
export type QuoteStatus = $Result.DefaultSelection<Prisma.$QuoteStatusPayload>
/**
 * Model OrderStatus
 * 
 */
export type OrderStatus = $Result.DefaultSelection<Prisma.$OrderStatusPayload>
/**
 * Model LogisticsStatus
 * 
 */
export type LogisticsStatus = $Result.DefaultSelection<Prisma.$LogisticsStatusPayload>
/**
 * Model FinanceStatus
 * 
 */
export type FinanceStatus = $Result.DefaultSelection<Prisma.$FinanceStatusPayload>
/**
 * Model vendor_capabilities
 * 
 */
export type vendor_capabilities = $Result.DefaultSelection<Prisma.$vendor_capabilitiesPayload>
/**
 * Model vendor_capability_sub_categories
 * 
 */
export type vendor_capability_sub_categories = $Result.DefaultSelection<Prisma.$vendor_capability_sub_categoriesPayload>
/**
 * Model vendor_certifications
 * 
 */
export type vendor_certifications = $Result.DefaultSelection<Prisma.$vendor_certificationsPayload>
/**
 * Model vendor_flags
 * 
 */
export type vendor_flags = $Result.DefaultSelection<Prisma.$vendor_flagsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
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
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
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
   * `prisma.company`: Exposes CRUD operations for the **company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.companyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.material`: Exposes CRUD operations for the **Material** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.material.findMany()
    * ```
    */
  get material(): Prisma.MaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.finish`: Exposes CRUD operations for the **Finish** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Finishes
    * const finishes = await prisma.finish.findMany()
    * ```
    */
  get finish(): Prisma.FinishDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.currency`: Exposes CRUD operations for the **currency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Currencies
    * const currencies = await prisma.currency.findMany()
    * ```
    */
  get currency(): Prisma.currencyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment_terms`: Exposes CRUD operations for the **payment_terms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payment_terms
    * const payment_terms = await prisma.payment_terms.findMany()
    * ```
    */
  get payment_terms(): Prisma.payment_termsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentStatus`: Exposes CRUD operations for the **PaymentStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentStatuses
    * const paymentStatuses = await prisma.paymentStatus.findMany()
    * ```
    */
  get paymentStatus(): Prisma.PaymentStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quoteStatus`: Exposes CRUD operations for the **QuoteStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuoteStatuses
    * const quoteStatuses = await prisma.quoteStatus.findMany()
    * ```
    */
  get quoteStatus(): Prisma.QuoteStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderStatus`: Exposes CRUD operations for the **OrderStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderStatuses
    * const orderStatuses = await prisma.orderStatus.findMany()
    * ```
    */
  get orderStatus(): Prisma.OrderStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logisticsStatus`: Exposes CRUD operations for the **LogisticsStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogisticsStatuses
    * const logisticsStatuses = await prisma.logisticsStatus.findMany()
    * ```
    */
  get logisticsStatus(): Prisma.LogisticsStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.financeStatus`: Exposes CRUD operations for the **FinanceStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinanceStatuses
    * const financeStatuses = await prisma.financeStatus.findMany()
    * ```
    */
  get financeStatus(): Prisma.FinanceStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendor_capabilities`: Exposes CRUD operations for the **vendor_capabilities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendor_capabilities
    * const vendor_capabilities = await prisma.vendor_capabilities.findMany()
    * ```
    */
  get vendor_capabilities(): Prisma.vendor_capabilitiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendor_capability_sub_categories`: Exposes CRUD operations for the **vendor_capability_sub_categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendor_capability_sub_categories
    * const vendor_capability_sub_categories = await prisma.vendor_capability_sub_categories.findMany()
    * ```
    */
  get vendor_capability_sub_categories(): Prisma.vendor_capability_sub_categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendor_certifications`: Exposes CRUD operations for the **vendor_certifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendor_certifications
    * const vendor_certifications = await prisma.vendor_certifications.findMany()
    * ```
    */
  get vendor_certifications(): Prisma.vendor_certificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendor_flags`: Exposes CRUD operations for the **vendor_flags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendor_flags
    * const vendor_flags = await prisma.vendor_flags.findMany()
    * ```
    */
  get vendor_flags(): Prisma.vendor_flagsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    company: 'company',
    Service: 'Service',
    Material: 'Material',
    Finish: 'Finish',
    currency: 'currency',
    payment_terms: 'payment_terms',
    PaymentStatus: 'PaymentStatus',
    QuoteStatus: 'QuoteStatus',
    OrderStatus: 'OrderStatus',
    LogisticsStatus: 'LogisticsStatus',
    FinanceStatus: 'FinanceStatus',
    vendor_capabilities: 'vendor_capabilities',
    vendor_capability_sub_categories: 'vendor_capability_sub_categories',
    vendor_certifications: 'vendor_certifications',
    vendor_flags: 'vendor_flags'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    superadminClient?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "company" | "service" | "material" | "finish" | "currency" | "payment_terms" | "paymentStatus" | "quoteStatus" | "orderStatus" | "logisticsStatus" | "financeStatus" | "vendor_capabilities" | "vendor_capability_sub_categories" | "vendor_certifications" | "vendor_flags"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      company: {
        payload: Prisma.$companyPayload<ExtArgs>
        fields: Prisma.companyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.companyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.companyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.companyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Material: {
        payload: Prisma.$MaterialPayload<ExtArgs>
        fields: Prisma.MaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findFirst: {
            args: Prisma.MaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findMany: {
            args: Prisma.MaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          create: {
            args: Prisma.MaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          createMany: {
            args: Prisma.MaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          delete: {
            args: Prisma.MaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          update: {
            args: Prisma.MaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          deleteMany: {
            args: Prisma.MaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaterialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          upsert: {
            args: Prisma.MaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          aggregate: {
            args: Prisma.MaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterial>
          }
          groupBy: {
            args: Prisma.MaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialCountAggregateOutputType> | number
          }
        }
      }
      Finish: {
        payload: Prisma.$FinishPayload<ExtArgs>
        fields: Prisma.FinishFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinishFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinishFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishPayload>
          }
          findFirst: {
            args: Prisma.FinishFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinishFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishPayload>
          }
          findMany: {
            args: Prisma.FinishFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishPayload>[]
          }
          create: {
            args: Prisma.FinishCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishPayload>
          }
          createMany: {
            args: Prisma.FinishCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinishCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishPayload>[]
          }
          delete: {
            args: Prisma.FinishDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishPayload>
          }
          update: {
            args: Prisma.FinishUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishPayload>
          }
          deleteMany: {
            args: Prisma.FinishDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinishUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinishUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishPayload>[]
          }
          upsert: {
            args: Prisma.FinishUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishPayload>
          }
          aggregate: {
            args: Prisma.FinishAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinish>
          }
          groupBy: {
            args: Prisma.FinishGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinishGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinishCountArgs<ExtArgs>
            result: $Utils.Optional<FinishCountAggregateOutputType> | number
          }
        }
      }
      currency: {
        payload: Prisma.$currencyPayload<ExtArgs>
        fields: Prisma.currencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.currencyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.currencyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currencyPayload>
          }
          findFirst: {
            args: Prisma.currencyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.currencyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currencyPayload>
          }
          findMany: {
            args: Prisma.currencyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currencyPayload>[]
          }
          create: {
            args: Prisma.currencyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currencyPayload>
          }
          createMany: {
            args: Prisma.currencyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.currencyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currencyPayload>[]
          }
          delete: {
            args: Prisma.currencyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currencyPayload>
          }
          update: {
            args: Prisma.currencyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currencyPayload>
          }
          deleteMany: {
            args: Prisma.currencyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.currencyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.currencyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currencyPayload>[]
          }
          upsert: {
            args: Prisma.currencyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currencyPayload>
          }
          aggregate: {
            args: Prisma.CurrencyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurrency>
          }
          groupBy: {
            args: Prisma.currencyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurrencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.currencyCountArgs<ExtArgs>
            result: $Utils.Optional<CurrencyCountAggregateOutputType> | number
          }
        }
      }
      payment_terms: {
        payload: Prisma.$payment_termsPayload<ExtArgs>
        fields: Prisma.payment_termsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.payment_termsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_termsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.payment_termsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_termsPayload>
          }
          findFirst: {
            args: Prisma.payment_termsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_termsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.payment_termsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_termsPayload>
          }
          findMany: {
            args: Prisma.payment_termsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_termsPayload>[]
          }
          create: {
            args: Prisma.payment_termsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_termsPayload>
          }
          createMany: {
            args: Prisma.payment_termsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.payment_termsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_termsPayload>[]
          }
          delete: {
            args: Prisma.payment_termsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_termsPayload>
          }
          update: {
            args: Prisma.payment_termsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_termsPayload>
          }
          deleteMany: {
            args: Prisma.payment_termsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.payment_termsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.payment_termsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_termsPayload>[]
          }
          upsert: {
            args: Prisma.payment_termsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_termsPayload>
          }
          aggregate: {
            args: Prisma.Payment_termsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment_terms>
          }
          groupBy: {
            args: Prisma.payment_termsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Payment_termsGroupByOutputType>[]
          }
          count: {
            args: Prisma.payment_termsCountArgs<ExtArgs>
            result: $Utils.Optional<Payment_termsCountAggregateOutputType> | number
          }
        }
      }
      PaymentStatus: {
        payload: Prisma.$PaymentStatusPayload<ExtArgs>
        fields: Prisma.PaymentStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentStatusPayload>
          }
          findFirst: {
            args: Prisma.PaymentStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentStatusPayload>
          }
          findMany: {
            args: Prisma.PaymentStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentStatusPayload>[]
          }
          create: {
            args: Prisma.PaymentStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentStatusPayload>
          }
          createMany: {
            args: Prisma.PaymentStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentStatusPayload>[]
          }
          delete: {
            args: Prisma.PaymentStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentStatusPayload>
          }
          update: {
            args: Prisma.PaymentStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentStatusPayload>
          }
          deleteMany: {
            args: Prisma.PaymentStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentStatusPayload>[]
          }
          upsert: {
            args: Prisma.PaymentStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentStatusPayload>
          }
          aggregate: {
            args: Prisma.PaymentStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentStatus>
          }
          groupBy: {
            args: Prisma.PaymentStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentStatusCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentStatusCountAggregateOutputType> | number
          }
        }
      }
      QuoteStatus: {
        payload: Prisma.$QuoteStatusPayload<ExtArgs>
        fields: Prisma.QuoteStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuoteStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuoteStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteStatusPayload>
          }
          findFirst: {
            args: Prisma.QuoteStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuoteStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteStatusPayload>
          }
          findMany: {
            args: Prisma.QuoteStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteStatusPayload>[]
          }
          create: {
            args: Prisma.QuoteStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteStatusPayload>
          }
          createMany: {
            args: Prisma.QuoteStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuoteStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteStatusPayload>[]
          }
          delete: {
            args: Prisma.QuoteStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteStatusPayload>
          }
          update: {
            args: Prisma.QuoteStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteStatusPayload>
          }
          deleteMany: {
            args: Prisma.QuoteStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuoteStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuoteStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteStatusPayload>[]
          }
          upsert: {
            args: Prisma.QuoteStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteStatusPayload>
          }
          aggregate: {
            args: Prisma.QuoteStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuoteStatus>
          }
          groupBy: {
            args: Prisma.QuoteStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuoteStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuoteStatusCountArgs<ExtArgs>
            result: $Utils.Optional<QuoteStatusCountAggregateOutputType> | number
          }
        }
      }
      OrderStatus: {
        payload: Prisma.$OrderStatusPayload<ExtArgs>
        fields: Prisma.OrderStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload>
          }
          findFirst: {
            args: Prisma.OrderStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload>
          }
          findMany: {
            args: Prisma.OrderStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload>[]
          }
          create: {
            args: Prisma.OrderStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload>
          }
          createMany: {
            args: Prisma.OrderStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload>[]
          }
          delete: {
            args: Prisma.OrderStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload>
          }
          update: {
            args: Prisma.OrderStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload>
          }
          deleteMany: {
            args: Prisma.OrderStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload>[]
          }
          upsert: {
            args: Prisma.OrderStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStatusPayload>
          }
          aggregate: {
            args: Prisma.OrderStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderStatus>
          }
          groupBy: {
            args: Prisma.OrderStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderStatusCountArgs<ExtArgs>
            result: $Utils.Optional<OrderStatusCountAggregateOutputType> | number
          }
        }
      }
      LogisticsStatus: {
        payload: Prisma.$LogisticsStatusPayload<ExtArgs>
        fields: Prisma.LogisticsStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogisticsStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogisticsStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsStatusPayload>
          }
          findFirst: {
            args: Prisma.LogisticsStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogisticsStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsStatusPayload>
          }
          findMany: {
            args: Prisma.LogisticsStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsStatusPayload>[]
          }
          create: {
            args: Prisma.LogisticsStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsStatusPayload>
          }
          createMany: {
            args: Prisma.LogisticsStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogisticsStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsStatusPayload>[]
          }
          delete: {
            args: Prisma.LogisticsStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsStatusPayload>
          }
          update: {
            args: Prisma.LogisticsStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsStatusPayload>
          }
          deleteMany: {
            args: Prisma.LogisticsStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogisticsStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogisticsStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsStatusPayload>[]
          }
          upsert: {
            args: Prisma.LogisticsStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogisticsStatusPayload>
          }
          aggregate: {
            args: Prisma.LogisticsStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogisticsStatus>
          }
          groupBy: {
            args: Prisma.LogisticsStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogisticsStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogisticsStatusCountArgs<ExtArgs>
            result: $Utils.Optional<LogisticsStatusCountAggregateOutputType> | number
          }
        }
      }
      FinanceStatus: {
        payload: Prisma.$FinanceStatusPayload<ExtArgs>
        fields: Prisma.FinanceStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinanceStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinanceStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceStatusPayload>
          }
          findFirst: {
            args: Prisma.FinanceStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinanceStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceStatusPayload>
          }
          findMany: {
            args: Prisma.FinanceStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceStatusPayload>[]
          }
          create: {
            args: Prisma.FinanceStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceStatusPayload>
          }
          createMany: {
            args: Prisma.FinanceStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinanceStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceStatusPayload>[]
          }
          delete: {
            args: Prisma.FinanceStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceStatusPayload>
          }
          update: {
            args: Prisma.FinanceStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceStatusPayload>
          }
          deleteMany: {
            args: Prisma.FinanceStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinanceStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinanceStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceStatusPayload>[]
          }
          upsert: {
            args: Prisma.FinanceStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinanceStatusPayload>
          }
          aggregate: {
            args: Prisma.FinanceStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinanceStatus>
          }
          groupBy: {
            args: Prisma.FinanceStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinanceStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinanceStatusCountArgs<ExtArgs>
            result: $Utils.Optional<FinanceStatusCountAggregateOutputType> | number
          }
        }
      }
      vendor_capabilities: {
        payload: Prisma.$vendor_capabilitiesPayload<ExtArgs>
        fields: Prisma.vendor_capabilitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vendor_capabilitiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_capabilitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vendor_capabilitiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_capabilitiesPayload>
          }
          findFirst: {
            args: Prisma.vendor_capabilitiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_capabilitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vendor_capabilitiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_capabilitiesPayload>
          }
          findMany: {
            args: Prisma.vendor_capabilitiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_capabilitiesPayload>[]
          }
          create: {
            args: Prisma.vendor_capabilitiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_capabilitiesPayload>
          }
          createMany: {
            args: Prisma.vendor_capabilitiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.vendor_capabilitiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_capabilitiesPayload>[]
          }
          delete: {
            args: Prisma.vendor_capabilitiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_capabilitiesPayload>
          }
          update: {
            args: Prisma.vendor_capabilitiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_capabilitiesPayload>
          }
          deleteMany: {
            args: Prisma.vendor_capabilitiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vendor_capabilitiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.vendor_capabilitiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_capabilitiesPayload>[]
          }
          upsert: {
            args: Prisma.vendor_capabilitiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_capabilitiesPayload>
          }
          aggregate: {
            args: Prisma.Vendor_capabilitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendor_capabilities>
          }
          groupBy: {
            args: Prisma.vendor_capabilitiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Vendor_capabilitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.vendor_capabilitiesCountArgs<ExtArgs>
            result: $Utils.Optional<Vendor_capabilitiesCountAggregateOutputType> | number
          }
        }
      }
      vendor_capability_sub_categories: {
        payload: Prisma.$vendor_capability_sub_categoriesPayload<ExtArgs>
        fields: Prisma.vendor_capability_sub_categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vendor_capability_sub_categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_capability_sub_categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vendor_capability_sub_categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_capability_sub_categoriesPayload>
          }
          findFirst: {
            args: Prisma.vendor_capability_sub_categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_capability_sub_categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vendor_capability_sub_categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_capability_sub_categoriesPayload>
          }
          findMany: {
            args: Prisma.vendor_capability_sub_categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_capability_sub_categoriesPayload>[]
          }
          create: {
            args: Prisma.vendor_capability_sub_categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_capability_sub_categoriesPayload>
          }
          createMany: {
            args: Prisma.vendor_capability_sub_categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.vendor_capability_sub_categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_capability_sub_categoriesPayload>[]
          }
          delete: {
            args: Prisma.vendor_capability_sub_categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_capability_sub_categoriesPayload>
          }
          update: {
            args: Prisma.vendor_capability_sub_categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_capability_sub_categoriesPayload>
          }
          deleteMany: {
            args: Prisma.vendor_capability_sub_categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vendor_capability_sub_categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.vendor_capability_sub_categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_capability_sub_categoriesPayload>[]
          }
          upsert: {
            args: Prisma.vendor_capability_sub_categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_capability_sub_categoriesPayload>
          }
          aggregate: {
            args: Prisma.Vendor_capability_sub_categoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendor_capability_sub_categories>
          }
          groupBy: {
            args: Prisma.vendor_capability_sub_categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Vendor_capability_sub_categoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.vendor_capability_sub_categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<Vendor_capability_sub_categoriesCountAggregateOutputType> | number
          }
        }
      }
      vendor_certifications: {
        payload: Prisma.$vendor_certificationsPayload<ExtArgs>
        fields: Prisma.vendor_certificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vendor_certificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_certificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vendor_certificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_certificationsPayload>
          }
          findFirst: {
            args: Prisma.vendor_certificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_certificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vendor_certificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_certificationsPayload>
          }
          findMany: {
            args: Prisma.vendor_certificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_certificationsPayload>[]
          }
          create: {
            args: Prisma.vendor_certificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_certificationsPayload>
          }
          createMany: {
            args: Prisma.vendor_certificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.vendor_certificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_certificationsPayload>[]
          }
          delete: {
            args: Prisma.vendor_certificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_certificationsPayload>
          }
          update: {
            args: Prisma.vendor_certificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_certificationsPayload>
          }
          deleteMany: {
            args: Prisma.vendor_certificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vendor_certificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.vendor_certificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_certificationsPayload>[]
          }
          upsert: {
            args: Prisma.vendor_certificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_certificationsPayload>
          }
          aggregate: {
            args: Prisma.Vendor_certificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendor_certifications>
          }
          groupBy: {
            args: Prisma.vendor_certificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Vendor_certificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.vendor_certificationsCountArgs<ExtArgs>
            result: $Utils.Optional<Vendor_certificationsCountAggregateOutputType> | number
          }
        }
      }
      vendor_flags: {
        payload: Prisma.$vendor_flagsPayload<ExtArgs>
        fields: Prisma.vendor_flagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vendor_flagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_flagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vendor_flagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_flagsPayload>
          }
          findFirst: {
            args: Prisma.vendor_flagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_flagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vendor_flagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_flagsPayload>
          }
          findMany: {
            args: Prisma.vendor_flagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_flagsPayload>[]
          }
          create: {
            args: Prisma.vendor_flagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_flagsPayload>
          }
          createMany: {
            args: Prisma.vendor_flagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.vendor_flagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_flagsPayload>[]
          }
          delete: {
            args: Prisma.vendor_flagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_flagsPayload>
          }
          update: {
            args: Prisma.vendor_flagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_flagsPayload>
          }
          deleteMany: {
            args: Prisma.vendor_flagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vendor_flagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.vendor_flagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_flagsPayload>[]
          }
          upsert: {
            args: Prisma.vendor_flagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendor_flagsPayload>
          }
          aggregate: {
            args: Prisma.Vendor_flagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendor_flags>
          }
          groupBy: {
            args: Prisma.vendor_flagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Vendor_flagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.vendor_flagsCountArgs<ExtArgs>
            result: $Utils.Optional<Vendor_flagsCountAggregateOutputType> | number
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
    company?: companyOmit
    service?: ServiceOmit
    material?: MaterialOmit
    finish?: FinishOmit
    currency?: currencyOmit
    payment_terms?: payment_termsOmit
    paymentStatus?: PaymentStatusOmit
    quoteStatus?: QuoteStatusOmit
    orderStatus?: OrderStatusOmit
    logisticsStatus?: LogisticsStatusOmit
    financeStatus?: FinanceStatusOmit
    vendor_capabilities?: vendor_capabilitiesOmit
    vendor_capability_sub_categories?: vendor_capability_sub_categoriesOmit
    vendor_certifications?: vendor_certificationsOmit
    vendor_flags?: vendor_flagsOmit
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
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    materials: number
    finishes: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | ServiceCountOutputTypeCountMaterialsArgs
    finishes?: boolean | ServiceCountOutputTypeCountFinishesArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountFinishesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinishWhereInput
  }


  /**
   * Count Type Vendor_capabilitiesCountOutputType
   */

  export type Vendor_capabilitiesCountOutputType = {
    subCategories: number
  }

  export type Vendor_capabilitiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategories?: boolean | Vendor_capabilitiesCountOutputTypeCountSubCategoriesArgs
  }

  // Custom InputTypes
  /**
   * Vendor_capabilitiesCountOutputType without action
   */
  export type Vendor_capabilitiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor_capabilitiesCountOutputType
     */
    select?: Vendor_capabilitiesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Vendor_capabilitiesCountOutputType without action
   */
  export type Vendor_capabilitiesCountOutputTypeCountSubCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vendor_capability_sub_categoriesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    company_id: number | null
    logo_size: number | null
  }

  export type CompanySumAggregateOutputType = {
    company_id: number | null
    logo_size: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    company_id: number | null
    company_name: string | null
    sub_domain: string | null
    currency_code: string | null
    currency_symbol: string | null
    timezone: string | null
    first_name: string | null
    last_name: string | null
    phone: string | null
    email: string | null
    password: string | null
    db_url: string | null
    is_active: boolean | null
    company_logo: string | null
    logo_name: string | null
    logo_size: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    company_id: number | null
    company_name: string | null
    sub_domain: string | null
    currency_code: string | null
    currency_symbol: string | null
    timezone: string | null
    first_name: string | null
    last_name: string | null
    phone: string | null
    email: string | null
    password: string | null
    db_url: string | null
    is_active: boolean | null
    company_logo: string | null
    logo_name: string | null
    logo_size: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    company_id: number
    company_name: number
    sub_domain: number
    currency_code: number
    currency_symbol: number
    timezone: number
    first_name: number
    last_name: number
    phone: number
    email: number
    password: number
    db_url: number
    is_active: number
    company_logo: number
    logo_name: number
    logo_size: number
    roles: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    company_id?: true
    logo_size?: true
  }

  export type CompanySumAggregateInputType = {
    company_id?: true
    logo_size?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    company_id?: true
    company_name?: true
    sub_domain?: true
    currency_code?: true
    currency_symbol?: true
    timezone?: true
    first_name?: true
    last_name?: true
    phone?: true
    email?: true
    password?: true
    db_url?: true
    is_active?: true
    company_logo?: true
    logo_name?: true
    logo_size?: true
    created_at?: true
    updated_at?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    company_id?: true
    company_name?: true
    sub_domain?: true
    currency_code?: true
    currency_symbol?: true
    timezone?: true
    first_name?: true
    last_name?: true
    phone?: true
    email?: true
    password?: true
    db_url?: true
    is_active?: true
    company_logo?: true
    logo_name?: true
    logo_size?: true
    created_at?: true
    updated_at?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    company_id?: true
    company_name?: true
    sub_domain?: true
    currency_code?: true
    currency_symbol?: true
    timezone?: true
    first_name?: true
    last_name?: true
    phone?: true
    email?: true
    password?: true
    db_url?: true
    is_active?: true
    company_logo?: true
    logo_name?: true
    logo_size?: true
    roles?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: companyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    company_id: number
    company_name: string
    sub_domain: string
    currency_code: string
    currency_symbol: string
    timezone: string
    first_name: string | null
    last_name: string | null
    phone: string | null
    email: string | null
    password: string | null
    db_url: string
    is_active: boolean
    company_logo: string | null
    logo_name: string | null
    logo_size: number | null
    roles: JsonValue
    created_at: Date
    updated_at: Date
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    company_name?: boolean
    sub_domain?: boolean
    currency_code?: boolean
    currency_symbol?: boolean
    timezone?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    db_url?: boolean
    is_active?: boolean
    company_logo?: boolean
    logo_name?: boolean
    logo_size?: boolean
    roles?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["company"]>

  export type companySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    company_name?: boolean
    sub_domain?: boolean
    currency_code?: boolean
    currency_symbol?: boolean
    timezone?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    db_url?: boolean
    is_active?: boolean
    company_logo?: boolean
    logo_name?: boolean
    logo_size?: boolean
    roles?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["company"]>

  export type companySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    company_name?: boolean
    sub_domain?: boolean
    currency_code?: boolean
    currency_symbol?: boolean
    timezone?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    db_url?: boolean
    is_active?: boolean
    company_logo?: boolean
    logo_name?: boolean
    logo_size?: boolean
    roles?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["company"]>

  export type companySelectScalar = {
    id?: boolean
    company_id?: boolean
    company_name?: boolean
    sub_domain?: boolean
    currency_code?: boolean
    currency_symbol?: boolean
    timezone?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    db_url?: boolean
    is_active?: boolean
    company_logo?: boolean
    logo_name?: boolean
    logo_size?: boolean
    roles?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type companyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_id" | "company_name" | "sub_domain" | "currency_code" | "currency_symbol" | "timezone" | "first_name" | "last_name" | "phone" | "email" | "password" | "db_url" | "is_active" | "company_logo" | "logo_name" | "logo_size" | "roles" | "created_at" | "updated_at", ExtArgs["result"]["company"]>

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "company"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company_id: number
      company_name: string
      sub_domain: string
      currency_code: string
      currency_symbol: string
      timezone: string
      first_name: string | null
      last_name: string | null
      phone: string | null
      email: string | null
      password: string | null
      db_url: string
      is_active: boolean
      company_logo: string | null
      logo_name: string | null
      logo_size: number | null
      roles: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<Prisma.$companyPayload, S>

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<companyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company'], meta: { name: 'company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends companyFindUniqueArgs>(args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs>(args: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends companyFindFirstArgs>(args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs>(args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends companyFindManyArgs>(args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends companyCreateArgs>(args: SelectSubset<T, companyCreateArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {companyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends companyCreateManyArgs>(args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {companyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends companyCreateManyAndReturnArgs>(args?: SelectSubset<T, companyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends companyDeleteArgs>(args: SelectSubset<T, companyDeleteArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends companyUpdateArgs>(args: SelectSubset<T, companyUpdateArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends companyDeleteManyArgs>(args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends companyUpdateManyArgs>(args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {companyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
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
    updateManyAndReturn<T extends companyUpdateManyAndReturnArgs>(args: SelectSubset<T, companyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends companyUpsertArgs>(args: SelectSubset<T, companyUpsertArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
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
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the company model
   */
  readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<"company", 'String'>
    readonly company_id: FieldRef<"company", 'Int'>
    readonly company_name: FieldRef<"company", 'String'>
    readonly sub_domain: FieldRef<"company", 'String'>
    readonly currency_code: FieldRef<"company", 'String'>
    readonly currency_symbol: FieldRef<"company", 'String'>
    readonly timezone: FieldRef<"company", 'String'>
    readonly first_name: FieldRef<"company", 'String'>
    readonly last_name: FieldRef<"company", 'String'>
    readonly phone: FieldRef<"company", 'String'>
    readonly email: FieldRef<"company", 'String'>
    readonly password: FieldRef<"company", 'String'>
    readonly db_url: FieldRef<"company", 'String'>
    readonly is_active: FieldRef<"company", 'Boolean'>
    readonly company_logo: FieldRef<"company", 'String'>
    readonly logo_name: FieldRef<"company", 'String'>
    readonly logo_size: FieldRef<"company", 'Int'>
    readonly roles: FieldRef<"company", 'Json'>
    readonly created_at: FieldRef<"company", 'DateTime'>
    readonly updated_at: FieldRef<"company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>
  }

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * company createManyAndReturn
   */
  export type companyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * company updateManyAndReturn
   */
  export type companyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>
  }

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to delete.
     */
    limit?: number
  }

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    exclude_inspection: boolean | null
    invoice50: boolean | null
    fob_china: boolean | null
    require_deposit_invoice: boolean | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    exclude_inspection: boolean | null
    invoice50: boolean | null
    fob_china: boolean | null
    require_deposit_invoice: boolean | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    exclude_inspection: number
    invoice50: number
    fob_china: number
    require_deposit_invoice: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ServiceMinAggregateInputType = {
    id?: true
    exclude_inspection?: true
    invoice50?: true
    fob_china?: true
    require_deposit_invoice?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    exclude_inspection?: true
    invoice50?: true
    fob_china?: true
    require_deposit_invoice?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    exclude_inspection?: true
    invoice50?: true
    fob_china?: true
    require_deposit_invoice?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    exclude_inspection: boolean
    invoice50: boolean
    fob_china: boolean
    require_deposit_invoice: boolean
    name: string
    created_at: Date
    updated_at: Date
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exclude_inspection?: boolean
    invoice50?: boolean
    fob_china?: boolean
    require_deposit_invoice?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    materials?: boolean | Service$materialsArgs<ExtArgs>
    finishes?: boolean | Service$finishesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exclude_inspection?: boolean
    invoice50?: boolean
    fob_china?: boolean
    require_deposit_invoice?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exclude_inspection?: boolean
    invoice50?: boolean
    fob_china?: boolean
    require_deposit_invoice?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    exclude_inspection?: boolean
    invoice50?: boolean
    fob_china?: boolean
    require_deposit_invoice?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "exclude_inspection" | "invoice50" | "fob_china" | "require_deposit_invoice" | "name" | "created_at" | "updated_at", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materials?: boolean | Service$materialsArgs<ExtArgs>
    finishes?: boolean | Service$finishesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      materials: Prisma.$MaterialPayload<ExtArgs>[]
      finishes: Prisma.$FinishPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      exclude_inspection: boolean
      invoice50: boolean
      fob_china: boolean
      require_deposit_invoice: boolean
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materials<T extends Service$materialsArgs<ExtArgs> = {}>(args?: Subset<T, Service$materialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    finishes<T extends Service$finishesArgs<ExtArgs> = {}>(args?: Subset<T, Service$finishesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinishPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly exclude_inspection: FieldRef<"Service", 'Boolean'>
    readonly invoice50: FieldRef<"Service", 'Boolean'>
    readonly fob_china: FieldRef<"Service", 'Boolean'>
    readonly require_deposit_invoice: FieldRef<"Service", 'Boolean'>
    readonly name: FieldRef<"Service", 'String'>
    readonly created_at: FieldRef<"Service", 'DateTime'>
    readonly updated_at: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.materials
   */
  export type Service$materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    cursor?: MaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Service.finishes
   */
  export type Service$finishesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finish
     */
    select?: FinishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finish
     */
    omit?: FinishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinishInclude<ExtArgs> | null
    where?: FinishWhereInput
    orderBy?: FinishOrderByWithRelationInput | FinishOrderByWithRelationInput[]
    cursor?: FinishWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinishScalarFieldEnum | FinishScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model Material
   */

  export type AggregateMaterial = {
    _count: MaterialCountAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  export type MaterialMinAggregateOutputType = {
    id: string | null
    service_id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MaterialMaxAggregateOutputType = {
    id: string | null
    service_id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MaterialCountAggregateOutputType = {
    id: number
    service_id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type MaterialMinAggregateInputType = {
    id?: true
    service_id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type MaterialMaxAggregateInputType = {
    id?: true
    service_id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type MaterialCountAggregateInputType = {
    id?: true
    service_id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type MaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Material to aggregate.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materials
    **/
    _count?: true | MaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialMaxAggregateInputType
  }

  export type GetMaterialAggregateType<T extends MaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterial[P]>
      : GetScalarType<T[P], AggregateMaterial[P]>
  }




  export type MaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithAggregationInput | MaterialOrderByWithAggregationInput[]
    by: MaterialScalarFieldEnum[] | MaterialScalarFieldEnum
    having?: MaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialCountAggregateInputType | true
    _min?: MaterialMinAggregateInputType
    _max?: MaterialMaxAggregateInputType
  }

  export type MaterialGroupByOutputType = {
    id: string
    service_id: string
    name: string | null
    created_at: Date
    updated_at: Date
    _count: MaterialCountAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  type GetMaterialGroupByPayload<T extends MaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialGroupByOutputType[P]>
        }
      >
    >


  export type MaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectScalar = {
    id?: boolean
    service_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type MaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "service_id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["material"]>
  export type MaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type MaterialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type MaterialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $MaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Material"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      service_id: string
      name: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["material"]>
    composites: {}
  }

  type MaterialGetPayload<S extends boolean | null | undefined | MaterialDefaultArgs> = $Result.GetResult<Prisma.$MaterialPayload, S>

  type MaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialCountAggregateInputType | true
    }

  export interface MaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Material'], meta: { name: 'Material' } }
    /**
     * Find zero or one Material that matches the filter.
     * @param {MaterialFindUniqueArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialFindUniqueArgs>(args: SelectSubset<T, MaterialFindUniqueArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Material that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialFindUniqueOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialFindFirstArgs>(args?: SelectSubset<T, MaterialFindFirstArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.material.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.material.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialWithIdOnly = await prisma.material.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialFindManyArgs>(args?: SelectSubset<T, MaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Material.
     * @param {MaterialCreateArgs} args - Arguments to create a Material.
     * @example
     * // Create one Material
     * const Material = await prisma.material.create({
     *   data: {
     *     // ... data to create a Material
     *   }
     * })
     * 
     */
    create<T extends MaterialCreateArgs>(args: SelectSubset<T, MaterialCreateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materials.
     * @param {MaterialCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialCreateManyArgs>(args?: SelectSubset<T, MaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materials and returns the data saved in the database.
     * @param {MaterialCreateManyAndReturnArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Material.
     * @param {MaterialDeleteArgs} args - Arguments to delete one Material.
     * @example
     * // Delete one Material
     * const Material = await prisma.material.delete({
     *   where: {
     *     // ... filter to delete one Material
     *   }
     * })
     * 
     */
    delete<T extends MaterialDeleteArgs>(args: SelectSubset<T, MaterialDeleteArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Material.
     * @param {MaterialUpdateArgs} args - Arguments to update one Material.
     * @example
     * // Update one Material
     * const material = await prisma.material.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialUpdateArgs>(args: SelectSubset<T, MaterialUpdateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materials.
     * @param {MaterialDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.material.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialDeleteManyArgs>(args?: SelectSubset<T, MaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialUpdateManyArgs>(args: SelectSubset<T, MaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials and returns the data updated in the database.
     * @param {MaterialUpdateManyAndReturnArgs} args - Arguments to update many Materials.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.updateManyAndReturn({
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
    updateManyAndReturn<T extends MaterialUpdateManyAndReturnArgs>(args: SelectSubset<T, MaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Material.
     * @param {MaterialUpsertArgs} args - Arguments to update or create a Material.
     * @example
     * // Update or create a Material
     * const material = await prisma.material.upsert({
     *   create: {
     *     // ... data to create a Material
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material we want to update
     *   }
     * })
     */
    upsert<T extends MaterialUpsertArgs>(args: SelectSubset<T, MaterialUpsertArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.material.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends MaterialCountArgs>(
      args?: Subset<T, MaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialAggregateArgs>(args: Subset<T, MaterialAggregateArgs>): Prisma.PrismaPromise<GetMaterialAggregateType<T>>

    /**
     * Group by Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialGroupByArgs} args - Group by arguments.
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
      T extends MaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialGroupByArgs['orderBy'] }
        : { orderBy?: MaterialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Material model
   */
  readonly fields: MaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Material.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Material model
   */
  interface MaterialFieldRefs {
    readonly id: FieldRef<"Material", 'String'>
    readonly service_id: FieldRef<"Material", 'String'>
    readonly name: FieldRef<"Material", 'String'>
    readonly created_at: FieldRef<"Material", 'DateTime'>
    readonly updated_at: FieldRef<"Material", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Material findUnique
   */
  export type MaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findUniqueOrThrow
   */
  export type MaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findFirst
   */
  export type MaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findFirstOrThrow
   */
  export type MaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findMany
   */
  export type MaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material create
   */
  export type MaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a Material.
     */
    data: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
  }

  /**
   * Material createMany
   */
  export type MaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Material createManyAndReturn
   */
  export type MaterialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Material update
   */
  export type MaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a Material.
     */
    data: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
    /**
     * Choose, which Material to update.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material updateMany
   */
  export type MaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
  }

  /**
   * Material updateManyAndReturn
   */
  export type MaterialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Material upsert
   */
  export type MaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the Material to update in case it exists.
     */
    where: MaterialWhereUniqueInput
    /**
     * In case the Material found by the `where` argument doesn't exist, create a new Material with this data.
     */
    create: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
    /**
     * In case the Material was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
  }

  /**
   * Material delete
   */
  export type MaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter which Material to delete.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material deleteMany
   */
  export type MaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to delete
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to delete.
     */
    limit?: number
  }

  /**
   * Material without action
   */
  export type MaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
  }


  /**
   * Model Finish
   */

  export type AggregateFinish = {
    _count: FinishCountAggregateOutputType | null
    _min: FinishMinAggregateOutputType | null
    _max: FinishMaxAggregateOutputType | null
  }

  export type FinishMinAggregateOutputType = {
    id: string | null
    service_id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FinishMaxAggregateOutputType = {
    id: string | null
    service_id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FinishCountAggregateOutputType = {
    id: number
    service_id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FinishMinAggregateInputType = {
    id?: true
    service_id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type FinishMaxAggregateInputType = {
    id?: true
    service_id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type FinishCountAggregateInputType = {
    id?: true
    service_id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FinishAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Finish to aggregate.
     */
    where?: FinishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finishes to fetch.
     */
    orderBy?: FinishOrderByWithRelationInput | FinishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Finishes
    **/
    _count?: true | FinishCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinishMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinishMaxAggregateInputType
  }

  export type GetFinishAggregateType<T extends FinishAggregateArgs> = {
        [P in keyof T & keyof AggregateFinish]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinish[P]>
      : GetScalarType<T[P], AggregateFinish[P]>
  }




  export type FinishGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinishWhereInput
    orderBy?: FinishOrderByWithAggregationInput | FinishOrderByWithAggregationInput[]
    by: FinishScalarFieldEnum[] | FinishScalarFieldEnum
    having?: FinishScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinishCountAggregateInputType | true
    _min?: FinishMinAggregateInputType
    _max?: FinishMaxAggregateInputType
  }

  export type FinishGroupByOutputType = {
    id: string
    service_id: string
    name: string | null
    created_at: Date
    updated_at: Date
    _count: FinishCountAggregateOutputType | null
    _min: FinishMinAggregateOutputType | null
    _max: FinishMaxAggregateOutputType | null
  }

  type GetFinishGroupByPayload<T extends FinishGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinishGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinishGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinishGroupByOutputType[P]>
            : GetScalarType<T[P], FinishGroupByOutputType[P]>
        }
      >
    >


  export type FinishSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["finish"]>

  export type FinishSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["finish"]>

  export type FinishSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["finish"]>

  export type FinishSelectScalar = {
    id?: boolean
    service_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type FinishOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "service_id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["finish"]>
  export type FinishInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type FinishIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type FinishIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $FinishPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Finish"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      service_id: string
      name: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["finish"]>
    composites: {}
  }

  type FinishGetPayload<S extends boolean | null | undefined | FinishDefaultArgs> = $Result.GetResult<Prisma.$FinishPayload, S>

  type FinishCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinishFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinishCountAggregateInputType | true
    }

  export interface FinishDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Finish'], meta: { name: 'Finish' } }
    /**
     * Find zero or one Finish that matches the filter.
     * @param {FinishFindUniqueArgs} args - Arguments to find a Finish
     * @example
     * // Get one Finish
     * const finish = await prisma.finish.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinishFindUniqueArgs>(args: SelectSubset<T, FinishFindUniqueArgs<ExtArgs>>): Prisma__FinishClient<$Result.GetResult<Prisma.$FinishPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Finish that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinishFindUniqueOrThrowArgs} args - Arguments to find a Finish
     * @example
     * // Get one Finish
     * const finish = await prisma.finish.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinishFindUniqueOrThrowArgs>(args: SelectSubset<T, FinishFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinishClient<$Result.GetResult<Prisma.$FinishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Finish that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishFindFirstArgs} args - Arguments to find a Finish
     * @example
     * // Get one Finish
     * const finish = await prisma.finish.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinishFindFirstArgs>(args?: SelectSubset<T, FinishFindFirstArgs<ExtArgs>>): Prisma__FinishClient<$Result.GetResult<Prisma.$FinishPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Finish that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishFindFirstOrThrowArgs} args - Arguments to find a Finish
     * @example
     * // Get one Finish
     * const finish = await prisma.finish.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinishFindFirstOrThrowArgs>(args?: SelectSubset<T, FinishFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinishClient<$Result.GetResult<Prisma.$FinishPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Finishes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Finishes
     * const finishes = await prisma.finish.findMany()
     * 
     * // Get first 10 Finishes
     * const finishes = await prisma.finish.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const finishWithIdOnly = await prisma.finish.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinishFindManyArgs>(args?: SelectSubset<T, FinishFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinishPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Finish.
     * @param {FinishCreateArgs} args - Arguments to create a Finish.
     * @example
     * // Create one Finish
     * const Finish = await prisma.finish.create({
     *   data: {
     *     // ... data to create a Finish
     *   }
     * })
     * 
     */
    create<T extends FinishCreateArgs>(args: SelectSubset<T, FinishCreateArgs<ExtArgs>>): Prisma__FinishClient<$Result.GetResult<Prisma.$FinishPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Finishes.
     * @param {FinishCreateManyArgs} args - Arguments to create many Finishes.
     * @example
     * // Create many Finishes
     * const finish = await prisma.finish.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinishCreateManyArgs>(args?: SelectSubset<T, FinishCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Finishes and returns the data saved in the database.
     * @param {FinishCreateManyAndReturnArgs} args - Arguments to create many Finishes.
     * @example
     * // Create many Finishes
     * const finish = await prisma.finish.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Finishes and only return the `id`
     * const finishWithIdOnly = await prisma.finish.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinishCreateManyAndReturnArgs>(args?: SelectSubset<T, FinishCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinishPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Finish.
     * @param {FinishDeleteArgs} args - Arguments to delete one Finish.
     * @example
     * // Delete one Finish
     * const Finish = await prisma.finish.delete({
     *   where: {
     *     // ... filter to delete one Finish
     *   }
     * })
     * 
     */
    delete<T extends FinishDeleteArgs>(args: SelectSubset<T, FinishDeleteArgs<ExtArgs>>): Prisma__FinishClient<$Result.GetResult<Prisma.$FinishPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Finish.
     * @param {FinishUpdateArgs} args - Arguments to update one Finish.
     * @example
     * // Update one Finish
     * const finish = await prisma.finish.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinishUpdateArgs>(args: SelectSubset<T, FinishUpdateArgs<ExtArgs>>): Prisma__FinishClient<$Result.GetResult<Prisma.$FinishPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Finishes.
     * @param {FinishDeleteManyArgs} args - Arguments to filter Finishes to delete.
     * @example
     * // Delete a few Finishes
     * const { count } = await prisma.finish.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinishDeleteManyArgs>(args?: SelectSubset<T, FinishDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Finishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Finishes
     * const finish = await prisma.finish.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinishUpdateManyArgs>(args: SelectSubset<T, FinishUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Finishes and returns the data updated in the database.
     * @param {FinishUpdateManyAndReturnArgs} args - Arguments to update many Finishes.
     * @example
     * // Update many Finishes
     * const finish = await prisma.finish.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Finishes and only return the `id`
     * const finishWithIdOnly = await prisma.finish.updateManyAndReturn({
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
    updateManyAndReturn<T extends FinishUpdateManyAndReturnArgs>(args: SelectSubset<T, FinishUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinishPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Finish.
     * @param {FinishUpsertArgs} args - Arguments to update or create a Finish.
     * @example
     * // Update or create a Finish
     * const finish = await prisma.finish.upsert({
     *   create: {
     *     // ... data to create a Finish
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Finish we want to update
     *   }
     * })
     */
    upsert<T extends FinishUpsertArgs>(args: SelectSubset<T, FinishUpsertArgs<ExtArgs>>): Prisma__FinishClient<$Result.GetResult<Prisma.$FinishPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Finishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishCountArgs} args - Arguments to filter Finishes to count.
     * @example
     * // Count the number of Finishes
     * const count = await prisma.finish.count({
     *   where: {
     *     // ... the filter for the Finishes we want to count
     *   }
     * })
    **/
    count<T extends FinishCountArgs>(
      args?: Subset<T, FinishCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinishCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Finish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinishAggregateArgs>(args: Subset<T, FinishAggregateArgs>): Prisma.PrismaPromise<GetFinishAggregateType<T>>

    /**
     * Group by Finish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishGroupByArgs} args - Group by arguments.
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
      T extends FinishGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinishGroupByArgs['orderBy'] }
        : { orderBy?: FinishGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FinishGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinishGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Finish model
   */
  readonly fields: FinishFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Finish.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinishClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Finish model
   */
  interface FinishFieldRefs {
    readonly id: FieldRef<"Finish", 'String'>
    readonly service_id: FieldRef<"Finish", 'String'>
    readonly name: FieldRef<"Finish", 'String'>
    readonly created_at: FieldRef<"Finish", 'DateTime'>
    readonly updated_at: FieldRef<"Finish", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Finish findUnique
   */
  export type FinishFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finish
     */
    select?: FinishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finish
     */
    omit?: FinishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinishInclude<ExtArgs> | null
    /**
     * Filter, which Finish to fetch.
     */
    where: FinishWhereUniqueInput
  }

  /**
   * Finish findUniqueOrThrow
   */
  export type FinishFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finish
     */
    select?: FinishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finish
     */
    omit?: FinishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinishInclude<ExtArgs> | null
    /**
     * Filter, which Finish to fetch.
     */
    where: FinishWhereUniqueInput
  }

  /**
   * Finish findFirst
   */
  export type FinishFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finish
     */
    select?: FinishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finish
     */
    omit?: FinishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinishInclude<ExtArgs> | null
    /**
     * Filter, which Finish to fetch.
     */
    where?: FinishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finishes to fetch.
     */
    orderBy?: FinishOrderByWithRelationInput | FinishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Finishes.
     */
    cursor?: FinishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Finishes.
     */
    distinct?: FinishScalarFieldEnum | FinishScalarFieldEnum[]
  }

  /**
   * Finish findFirstOrThrow
   */
  export type FinishFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finish
     */
    select?: FinishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finish
     */
    omit?: FinishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinishInclude<ExtArgs> | null
    /**
     * Filter, which Finish to fetch.
     */
    where?: FinishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finishes to fetch.
     */
    orderBy?: FinishOrderByWithRelationInput | FinishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Finishes.
     */
    cursor?: FinishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Finishes.
     */
    distinct?: FinishScalarFieldEnum | FinishScalarFieldEnum[]
  }

  /**
   * Finish findMany
   */
  export type FinishFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finish
     */
    select?: FinishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finish
     */
    omit?: FinishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinishInclude<ExtArgs> | null
    /**
     * Filter, which Finishes to fetch.
     */
    where?: FinishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Finishes to fetch.
     */
    orderBy?: FinishOrderByWithRelationInput | FinishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Finishes.
     */
    cursor?: FinishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Finishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Finishes.
     */
    skip?: number
    distinct?: FinishScalarFieldEnum | FinishScalarFieldEnum[]
  }

  /**
   * Finish create
   */
  export type FinishCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finish
     */
    select?: FinishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finish
     */
    omit?: FinishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinishInclude<ExtArgs> | null
    /**
     * The data needed to create a Finish.
     */
    data: XOR<FinishCreateInput, FinishUncheckedCreateInput>
  }

  /**
   * Finish createMany
   */
  export type FinishCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Finishes.
     */
    data: FinishCreateManyInput | FinishCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Finish createManyAndReturn
   */
  export type FinishCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finish
     */
    select?: FinishSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Finish
     */
    omit?: FinishOmit<ExtArgs> | null
    /**
     * The data used to create many Finishes.
     */
    data: FinishCreateManyInput | FinishCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinishIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Finish update
   */
  export type FinishUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finish
     */
    select?: FinishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finish
     */
    omit?: FinishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinishInclude<ExtArgs> | null
    /**
     * The data needed to update a Finish.
     */
    data: XOR<FinishUpdateInput, FinishUncheckedUpdateInput>
    /**
     * Choose, which Finish to update.
     */
    where: FinishWhereUniqueInput
  }

  /**
   * Finish updateMany
   */
  export type FinishUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Finishes.
     */
    data: XOR<FinishUpdateManyMutationInput, FinishUncheckedUpdateManyInput>
    /**
     * Filter which Finishes to update
     */
    where?: FinishWhereInput
    /**
     * Limit how many Finishes to update.
     */
    limit?: number
  }

  /**
   * Finish updateManyAndReturn
   */
  export type FinishUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finish
     */
    select?: FinishSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Finish
     */
    omit?: FinishOmit<ExtArgs> | null
    /**
     * The data used to update Finishes.
     */
    data: XOR<FinishUpdateManyMutationInput, FinishUncheckedUpdateManyInput>
    /**
     * Filter which Finishes to update
     */
    where?: FinishWhereInput
    /**
     * Limit how many Finishes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinishIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Finish upsert
   */
  export type FinishUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finish
     */
    select?: FinishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finish
     */
    omit?: FinishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinishInclude<ExtArgs> | null
    /**
     * The filter to search for the Finish to update in case it exists.
     */
    where: FinishWhereUniqueInput
    /**
     * In case the Finish found by the `where` argument doesn't exist, create a new Finish with this data.
     */
    create: XOR<FinishCreateInput, FinishUncheckedCreateInput>
    /**
     * In case the Finish was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinishUpdateInput, FinishUncheckedUpdateInput>
  }

  /**
   * Finish delete
   */
  export type FinishDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finish
     */
    select?: FinishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finish
     */
    omit?: FinishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinishInclude<ExtArgs> | null
    /**
     * Filter which Finish to delete.
     */
    where: FinishWhereUniqueInput
  }

  /**
   * Finish deleteMany
   */
  export type FinishDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Finishes to delete
     */
    where?: FinishWhereInput
    /**
     * Limit how many Finishes to delete.
     */
    limit?: number
  }

  /**
   * Finish without action
   */
  export type FinishDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finish
     */
    select?: FinishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Finish
     */
    omit?: FinishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinishInclude<ExtArgs> | null
  }


  /**
   * Model currency
   */

  export type AggregateCurrency = {
    _count: CurrencyCountAggregateOutputType | null
    _avg: CurrencyAvgAggregateOutputType | null
    _sum: CurrencySumAggregateOutputType | null
    _min: CurrencyMinAggregateOutputType | null
    _max: CurrencyMaxAggregateOutputType | null
  }

  export type CurrencyAvgAggregateOutputType = {
    currency_id: number | null
  }

  export type CurrencySumAggregateOutputType = {
    currency_id: number | null
  }

  export type CurrencyMinAggregateOutputType = {
    id: string | null
    currency_id: number | null
    code: string | null
    name: string | null
    symbol: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CurrencyMaxAggregateOutputType = {
    id: string | null
    currency_id: number | null
    code: string | null
    name: string | null
    symbol: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CurrencyCountAggregateOutputType = {
    id: number
    currency_id: number
    code: number
    name: number
    symbol: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CurrencyAvgAggregateInputType = {
    currency_id?: true
  }

  export type CurrencySumAggregateInputType = {
    currency_id?: true
  }

  export type CurrencyMinAggregateInputType = {
    id?: true
    currency_id?: true
    code?: true
    name?: true
    symbol?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type CurrencyMaxAggregateInputType = {
    id?: true
    currency_id?: true
    code?: true
    name?: true
    symbol?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type CurrencyCountAggregateInputType = {
    id?: true
    currency_id?: true
    code?: true
    name?: true
    symbol?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CurrencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which currency to aggregate.
     */
    where?: currencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of currencies to fetch.
     */
    orderBy?: currencyOrderByWithRelationInput | currencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: currencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned currencies
    **/
    _count?: true | CurrencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurrencyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurrencySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurrencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurrencyMaxAggregateInputType
  }

  export type GetCurrencyAggregateType<T extends CurrencyAggregateArgs> = {
        [P in keyof T & keyof AggregateCurrency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurrency[P]>
      : GetScalarType<T[P], AggregateCurrency[P]>
  }




  export type currencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: currencyWhereInput
    orderBy?: currencyOrderByWithAggregationInput | currencyOrderByWithAggregationInput[]
    by: CurrencyScalarFieldEnum[] | CurrencyScalarFieldEnum
    having?: currencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurrencyCountAggregateInputType | true
    _avg?: CurrencyAvgAggregateInputType
    _sum?: CurrencySumAggregateInputType
    _min?: CurrencyMinAggregateInputType
    _max?: CurrencyMaxAggregateInputType
  }

  export type CurrencyGroupByOutputType = {
    id: string
    currency_id: number
    code: string
    name: string
    symbol: string
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: CurrencyCountAggregateOutputType | null
    _avg: CurrencyAvgAggregateOutputType | null
    _sum: CurrencySumAggregateOutputType | null
    _min: CurrencyMinAggregateOutputType | null
    _max: CurrencyMaxAggregateOutputType | null
  }

  type GetCurrencyGroupByPayload<T extends currencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurrencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurrencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurrencyGroupByOutputType[P]>
            : GetScalarType<T[P], CurrencyGroupByOutputType[P]>
        }
      >
    >


  export type currencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    currency_id?: boolean
    code?: boolean
    name?: boolean
    symbol?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["currency"]>

  export type currencySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    currency_id?: boolean
    code?: boolean
    name?: boolean
    symbol?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["currency"]>

  export type currencySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    currency_id?: boolean
    code?: boolean
    name?: boolean
    symbol?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["currency"]>

  export type currencySelectScalar = {
    id?: boolean
    currency_id?: boolean
    code?: boolean
    name?: boolean
    symbol?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type currencyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "currency_id" | "code" | "name" | "symbol" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["currency"]>

  export type $currencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "currency"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      currency_id: number
      code: string
      name: string
      symbol: string
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["currency"]>
    composites: {}
  }

  type currencyGetPayload<S extends boolean | null | undefined | currencyDefaultArgs> = $Result.GetResult<Prisma.$currencyPayload, S>

  type currencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<currencyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CurrencyCountAggregateInputType | true
    }

  export interface currencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['currency'], meta: { name: 'currency' } }
    /**
     * Find zero or one Currency that matches the filter.
     * @param {currencyFindUniqueArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends currencyFindUniqueArgs>(args: SelectSubset<T, currencyFindUniqueArgs<ExtArgs>>): Prisma__currencyClient<$Result.GetResult<Prisma.$currencyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Currency that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {currencyFindUniqueOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends currencyFindUniqueOrThrowArgs>(args: SelectSubset<T, currencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__currencyClient<$Result.GetResult<Prisma.$currencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Currency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currencyFindFirstArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends currencyFindFirstArgs>(args?: SelectSubset<T, currencyFindFirstArgs<ExtArgs>>): Prisma__currencyClient<$Result.GetResult<Prisma.$currencyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Currency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currencyFindFirstOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends currencyFindFirstOrThrowArgs>(args?: SelectSubset<T, currencyFindFirstOrThrowArgs<ExtArgs>>): Prisma__currencyClient<$Result.GetResult<Prisma.$currencyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Currencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Currencies
     * const currencies = await prisma.currency.findMany()
     * 
     * // Get first 10 Currencies
     * const currencies = await prisma.currency.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const currencyWithIdOnly = await prisma.currency.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends currencyFindManyArgs>(args?: SelectSubset<T, currencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$currencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Currency.
     * @param {currencyCreateArgs} args - Arguments to create a Currency.
     * @example
     * // Create one Currency
     * const Currency = await prisma.currency.create({
     *   data: {
     *     // ... data to create a Currency
     *   }
     * })
     * 
     */
    create<T extends currencyCreateArgs>(args: SelectSubset<T, currencyCreateArgs<ExtArgs>>): Prisma__currencyClient<$Result.GetResult<Prisma.$currencyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Currencies.
     * @param {currencyCreateManyArgs} args - Arguments to create many Currencies.
     * @example
     * // Create many Currencies
     * const currency = await prisma.currency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends currencyCreateManyArgs>(args?: SelectSubset<T, currencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Currencies and returns the data saved in the database.
     * @param {currencyCreateManyAndReturnArgs} args - Arguments to create many Currencies.
     * @example
     * // Create many Currencies
     * const currency = await prisma.currency.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Currencies and only return the `id`
     * const currencyWithIdOnly = await prisma.currency.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends currencyCreateManyAndReturnArgs>(args?: SelectSubset<T, currencyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$currencyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Currency.
     * @param {currencyDeleteArgs} args - Arguments to delete one Currency.
     * @example
     * // Delete one Currency
     * const Currency = await prisma.currency.delete({
     *   where: {
     *     // ... filter to delete one Currency
     *   }
     * })
     * 
     */
    delete<T extends currencyDeleteArgs>(args: SelectSubset<T, currencyDeleteArgs<ExtArgs>>): Prisma__currencyClient<$Result.GetResult<Prisma.$currencyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Currency.
     * @param {currencyUpdateArgs} args - Arguments to update one Currency.
     * @example
     * // Update one Currency
     * const currency = await prisma.currency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends currencyUpdateArgs>(args: SelectSubset<T, currencyUpdateArgs<ExtArgs>>): Prisma__currencyClient<$Result.GetResult<Prisma.$currencyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Currencies.
     * @param {currencyDeleteManyArgs} args - Arguments to filter Currencies to delete.
     * @example
     * // Delete a few Currencies
     * const { count } = await prisma.currency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends currencyDeleteManyArgs>(args?: SelectSubset<T, currencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Currencies
     * const currency = await prisma.currency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends currencyUpdateManyArgs>(args: SelectSubset<T, currencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Currencies and returns the data updated in the database.
     * @param {currencyUpdateManyAndReturnArgs} args - Arguments to update many Currencies.
     * @example
     * // Update many Currencies
     * const currency = await prisma.currency.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Currencies and only return the `id`
     * const currencyWithIdOnly = await prisma.currency.updateManyAndReturn({
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
    updateManyAndReturn<T extends currencyUpdateManyAndReturnArgs>(args: SelectSubset<T, currencyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$currencyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Currency.
     * @param {currencyUpsertArgs} args - Arguments to update or create a Currency.
     * @example
     * // Update or create a Currency
     * const currency = await prisma.currency.upsert({
     *   create: {
     *     // ... data to create a Currency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Currency we want to update
     *   }
     * })
     */
    upsert<T extends currencyUpsertArgs>(args: SelectSubset<T, currencyUpsertArgs<ExtArgs>>): Prisma__currencyClient<$Result.GetResult<Prisma.$currencyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currencyCountArgs} args - Arguments to filter Currencies to count.
     * @example
     * // Count the number of Currencies
     * const count = await prisma.currency.count({
     *   where: {
     *     // ... the filter for the Currencies we want to count
     *   }
     * })
    **/
    count<T extends currencyCountArgs>(
      args?: Subset<T, currencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurrencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CurrencyAggregateArgs>(args: Subset<T, CurrencyAggregateArgs>): Prisma.PrismaPromise<GetCurrencyAggregateType<T>>

    /**
     * Group by Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currencyGroupByArgs} args - Group by arguments.
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
      T extends currencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: currencyGroupByArgs['orderBy'] }
        : { orderBy?: currencyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, currencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurrencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the currency model
   */
  readonly fields: currencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for currency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__currencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the currency model
   */
  interface currencyFieldRefs {
    readonly id: FieldRef<"currency", 'String'>
    readonly currency_id: FieldRef<"currency", 'Int'>
    readonly code: FieldRef<"currency", 'String'>
    readonly name: FieldRef<"currency", 'String'>
    readonly symbol: FieldRef<"currency", 'String'>
    readonly is_active: FieldRef<"currency", 'Boolean'>
    readonly created_at: FieldRef<"currency", 'DateTime'>
    readonly updated_at: FieldRef<"currency", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * currency findUnique
   */
  export type currencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the currency
     */
    omit?: currencyOmit<ExtArgs> | null
    /**
     * Filter, which currency to fetch.
     */
    where: currencyWhereUniqueInput
  }

  /**
   * currency findUniqueOrThrow
   */
  export type currencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the currency
     */
    omit?: currencyOmit<ExtArgs> | null
    /**
     * Filter, which currency to fetch.
     */
    where: currencyWhereUniqueInput
  }

  /**
   * currency findFirst
   */
  export type currencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the currency
     */
    omit?: currencyOmit<ExtArgs> | null
    /**
     * Filter, which currency to fetch.
     */
    where?: currencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of currencies to fetch.
     */
    orderBy?: currencyOrderByWithRelationInput | currencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for currencies.
     */
    cursor?: currencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of currencies.
     */
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }

  /**
   * currency findFirstOrThrow
   */
  export type currencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the currency
     */
    omit?: currencyOmit<ExtArgs> | null
    /**
     * Filter, which currency to fetch.
     */
    where?: currencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of currencies to fetch.
     */
    orderBy?: currencyOrderByWithRelationInput | currencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for currencies.
     */
    cursor?: currencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of currencies.
     */
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }

  /**
   * currency findMany
   */
  export type currencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the currency
     */
    omit?: currencyOmit<ExtArgs> | null
    /**
     * Filter, which currencies to fetch.
     */
    where?: currencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of currencies to fetch.
     */
    orderBy?: currencyOrderByWithRelationInput | currencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing currencies.
     */
    cursor?: currencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` currencies.
     */
    skip?: number
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }

  /**
   * currency create
   */
  export type currencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the currency
     */
    omit?: currencyOmit<ExtArgs> | null
    /**
     * The data needed to create a currency.
     */
    data: XOR<currencyCreateInput, currencyUncheckedCreateInput>
  }

  /**
   * currency createMany
   */
  export type currencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many currencies.
     */
    data: currencyCreateManyInput | currencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * currency createManyAndReturn
   */
  export type currencyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the currency
     */
    omit?: currencyOmit<ExtArgs> | null
    /**
     * The data used to create many currencies.
     */
    data: currencyCreateManyInput | currencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * currency update
   */
  export type currencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the currency
     */
    omit?: currencyOmit<ExtArgs> | null
    /**
     * The data needed to update a currency.
     */
    data: XOR<currencyUpdateInput, currencyUncheckedUpdateInput>
    /**
     * Choose, which currency to update.
     */
    where: currencyWhereUniqueInput
  }

  /**
   * currency updateMany
   */
  export type currencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update currencies.
     */
    data: XOR<currencyUpdateManyMutationInput, currencyUncheckedUpdateManyInput>
    /**
     * Filter which currencies to update
     */
    where?: currencyWhereInput
    /**
     * Limit how many currencies to update.
     */
    limit?: number
  }

  /**
   * currency updateManyAndReturn
   */
  export type currencyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the currency
     */
    omit?: currencyOmit<ExtArgs> | null
    /**
     * The data used to update currencies.
     */
    data: XOR<currencyUpdateManyMutationInput, currencyUncheckedUpdateManyInput>
    /**
     * Filter which currencies to update
     */
    where?: currencyWhereInput
    /**
     * Limit how many currencies to update.
     */
    limit?: number
  }

  /**
   * currency upsert
   */
  export type currencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the currency
     */
    omit?: currencyOmit<ExtArgs> | null
    /**
     * The filter to search for the currency to update in case it exists.
     */
    where: currencyWhereUniqueInput
    /**
     * In case the currency found by the `where` argument doesn't exist, create a new currency with this data.
     */
    create: XOR<currencyCreateInput, currencyUncheckedCreateInput>
    /**
     * In case the currency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<currencyUpdateInput, currencyUncheckedUpdateInput>
  }

  /**
   * currency delete
   */
  export type currencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the currency
     */
    omit?: currencyOmit<ExtArgs> | null
    /**
     * Filter which currency to delete.
     */
    where: currencyWhereUniqueInput
  }

  /**
   * currency deleteMany
   */
  export type currencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which currencies to delete
     */
    where?: currencyWhereInput
    /**
     * Limit how many currencies to delete.
     */
    limit?: number
  }

  /**
   * currency without action
   */
  export type currencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the currency
     */
    omit?: currencyOmit<ExtArgs> | null
  }


  /**
   * Model payment_terms
   */

  export type AggregatePayment_terms = {
    _count: Payment_termsCountAggregateOutputType | null
    _avg: Payment_termsAvgAggregateOutputType | null
    _sum: Payment_termsSumAggregateOutputType | null
    _min: Payment_termsMinAggregateOutputType | null
    _max: Payment_termsMaxAggregateOutputType | null
  }

  export type Payment_termsAvgAggregateOutputType = {
    payment_terms_id: number | null
    due_days: number | null
    discount_days: number | null
    discount_percent: Decimal | null
  }

  export type Payment_termsSumAggregateOutputType = {
    payment_terms_id: number | null
    due_days: number | null
    discount_days: number | null
    discount_percent: Decimal | null
  }

  export type Payment_termsMinAggregateOutputType = {
    id: string | null
    payment_terms_id: number | null
    name: string | null
    description: string | null
    due_days: number | null
    discount_days: number | null
    discount_percent: Decimal | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Payment_termsMaxAggregateOutputType = {
    id: string | null
    payment_terms_id: number | null
    name: string | null
    description: string | null
    due_days: number | null
    discount_days: number | null
    discount_percent: Decimal | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Payment_termsCountAggregateOutputType = {
    id: number
    payment_terms_id: number
    name: number
    description: number
    due_days: number
    discount_days: number
    discount_percent: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Payment_termsAvgAggregateInputType = {
    payment_terms_id?: true
    due_days?: true
    discount_days?: true
    discount_percent?: true
  }

  export type Payment_termsSumAggregateInputType = {
    payment_terms_id?: true
    due_days?: true
    discount_days?: true
    discount_percent?: true
  }

  export type Payment_termsMinAggregateInputType = {
    id?: true
    payment_terms_id?: true
    name?: true
    description?: true
    due_days?: true
    discount_days?: true
    discount_percent?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Payment_termsMaxAggregateInputType = {
    id?: true
    payment_terms_id?: true
    name?: true
    description?: true
    due_days?: true
    discount_days?: true
    discount_percent?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Payment_termsCountAggregateInputType = {
    id?: true
    payment_terms_id?: true
    name?: true
    description?: true
    due_days?: true
    discount_days?: true
    discount_percent?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Payment_termsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_terms to aggregate.
     */
    where?: payment_termsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_terms to fetch.
     */
    orderBy?: payment_termsOrderByWithRelationInput | payment_termsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: payment_termsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_terms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payment_terms
    **/
    _count?: true | Payment_termsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Payment_termsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Payment_termsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Payment_termsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Payment_termsMaxAggregateInputType
  }

  export type GetPayment_termsAggregateType<T extends Payment_termsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment_terms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment_terms[P]>
      : GetScalarType<T[P], AggregatePayment_terms[P]>
  }




  export type payment_termsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: payment_termsWhereInput
    orderBy?: payment_termsOrderByWithAggregationInput | payment_termsOrderByWithAggregationInput[]
    by: Payment_termsScalarFieldEnum[] | Payment_termsScalarFieldEnum
    having?: payment_termsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Payment_termsCountAggregateInputType | true
    _avg?: Payment_termsAvgAggregateInputType
    _sum?: Payment_termsSumAggregateInputType
    _min?: Payment_termsMinAggregateInputType
    _max?: Payment_termsMaxAggregateInputType
  }

  export type Payment_termsGroupByOutputType = {
    id: string
    payment_terms_id: number
    name: string
    description: string | null
    due_days: number
    discount_days: number
    discount_percent: Decimal
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: Payment_termsCountAggregateOutputType | null
    _avg: Payment_termsAvgAggregateOutputType | null
    _sum: Payment_termsSumAggregateOutputType | null
    _min: Payment_termsMinAggregateOutputType | null
    _max: Payment_termsMaxAggregateOutputType | null
  }

  type GetPayment_termsGroupByPayload<T extends payment_termsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Payment_termsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Payment_termsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Payment_termsGroupByOutputType[P]>
            : GetScalarType<T[P], Payment_termsGroupByOutputType[P]>
        }
      >
    >


  export type payment_termsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payment_terms_id?: boolean
    name?: boolean
    description?: boolean
    due_days?: boolean
    discount_days?: boolean
    discount_percent?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["payment_terms"]>

  export type payment_termsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payment_terms_id?: boolean
    name?: boolean
    description?: boolean
    due_days?: boolean
    discount_days?: boolean
    discount_percent?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["payment_terms"]>

  export type payment_termsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payment_terms_id?: boolean
    name?: boolean
    description?: boolean
    due_days?: boolean
    discount_days?: boolean
    discount_percent?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["payment_terms"]>

  export type payment_termsSelectScalar = {
    id?: boolean
    payment_terms_id?: boolean
    name?: boolean
    description?: boolean
    due_days?: boolean
    discount_days?: boolean
    discount_percent?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type payment_termsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "payment_terms_id" | "name" | "description" | "due_days" | "discount_days" | "discount_percent" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["payment_terms"]>

  export type $payment_termsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payment_terms"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      payment_terms_id: number
      name: string
      description: string | null
      due_days: number
      discount_days: number
      discount_percent: Prisma.Decimal
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["payment_terms"]>
    composites: {}
  }

  type payment_termsGetPayload<S extends boolean | null | undefined | payment_termsDefaultArgs> = $Result.GetResult<Prisma.$payment_termsPayload, S>

  type payment_termsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<payment_termsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Payment_termsCountAggregateInputType | true
    }

  export interface payment_termsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment_terms'], meta: { name: 'payment_terms' } }
    /**
     * Find zero or one Payment_terms that matches the filter.
     * @param {payment_termsFindUniqueArgs} args - Arguments to find a Payment_terms
     * @example
     * // Get one Payment_terms
     * const payment_terms = await prisma.payment_terms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends payment_termsFindUniqueArgs>(args: SelectSubset<T, payment_termsFindUniqueArgs<ExtArgs>>): Prisma__payment_termsClient<$Result.GetResult<Prisma.$payment_termsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment_terms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {payment_termsFindUniqueOrThrowArgs} args - Arguments to find a Payment_terms
     * @example
     * // Get one Payment_terms
     * const payment_terms = await prisma.payment_terms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends payment_termsFindUniqueOrThrowArgs>(args: SelectSubset<T, payment_termsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__payment_termsClient<$Result.GetResult<Prisma.$payment_termsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment_terms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_termsFindFirstArgs} args - Arguments to find a Payment_terms
     * @example
     * // Get one Payment_terms
     * const payment_terms = await prisma.payment_terms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends payment_termsFindFirstArgs>(args?: SelectSubset<T, payment_termsFindFirstArgs<ExtArgs>>): Prisma__payment_termsClient<$Result.GetResult<Prisma.$payment_termsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment_terms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_termsFindFirstOrThrowArgs} args - Arguments to find a Payment_terms
     * @example
     * // Get one Payment_terms
     * const payment_terms = await prisma.payment_terms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends payment_termsFindFirstOrThrowArgs>(args?: SelectSubset<T, payment_termsFindFirstOrThrowArgs<ExtArgs>>): Prisma__payment_termsClient<$Result.GetResult<Prisma.$payment_termsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payment_terms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_termsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payment_terms
     * const payment_terms = await prisma.payment_terms.findMany()
     * 
     * // Get first 10 Payment_terms
     * const payment_terms = await prisma.payment_terms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payment_termsWithIdOnly = await prisma.payment_terms.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends payment_termsFindManyArgs>(args?: SelectSubset<T, payment_termsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_termsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment_terms.
     * @param {payment_termsCreateArgs} args - Arguments to create a Payment_terms.
     * @example
     * // Create one Payment_terms
     * const Payment_terms = await prisma.payment_terms.create({
     *   data: {
     *     // ... data to create a Payment_terms
     *   }
     * })
     * 
     */
    create<T extends payment_termsCreateArgs>(args: SelectSubset<T, payment_termsCreateArgs<ExtArgs>>): Prisma__payment_termsClient<$Result.GetResult<Prisma.$payment_termsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payment_terms.
     * @param {payment_termsCreateManyArgs} args - Arguments to create many Payment_terms.
     * @example
     * // Create many Payment_terms
     * const payment_terms = await prisma.payment_terms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends payment_termsCreateManyArgs>(args?: SelectSubset<T, payment_termsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payment_terms and returns the data saved in the database.
     * @param {payment_termsCreateManyAndReturnArgs} args - Arguments to create many Payment_terms.
     * @example
     * // Create many Payment_terms
     * const payment_terms = await prisma.payment_terms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payment_terms and only return the `id`
     * const payment_termsWithIdOnly = await prisma.payment_terms.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends payment_termsCreateManyAndReturnArgs>(args?: SelectSubset<T, payment_termsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_termsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment_terms.
     * @param {payment_termsDeleteArgs} args - Arguments to delete one Payment_terms.
     * @example
     * // Delete one Payment_terms
     * const Payment_terms = await prisma.payment_terms.delete({
     *   where: {
     *     // ... filter to delete one Payment_terms
     *   }
     * })
     * 
     */
    delete<T extends payment_termsDeleteArgs>(args: SelectSubset<T, payment_termsDeleteArgs<ExtArgs>>): Prisma__payment_termsClient<$Result.GetResult<Prisma.$payment_termsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment_terms.
     * @param {payment_termsUpdateArgs} args - Arguments to update one Payment_terms.
     * @example
     * // Update one Payment_terms
     * const payment_terms = await prisma.payment_terms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends payment_termsUpdateArgs>(args: SelectSubset<T, payment_termsUpdateArgs<ExtArgs>>): Prisma__payment_termsClient<$Result.GetResult<Prisma.$payment_termsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payment_terms.
     * @param {payment_termsDeleteManyArgs} args - Arguments to filter Payment_terms to delete.
     * @example
     * // Delete a few Payment_terms
     * const { count } = await prisma.payment_terms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends payment_termsDeleteManyArgs>(args?: SelectSubset<T, payment_termsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payment_terms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_termsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payment_terms
     * const payment_terms = await prisma.payment_terms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends payment_termsUpdateManyArgs>(args: SelectSubset<T, payment_termsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payment_terms and returns the data updated in the database.
     * @param {payment_termsUpdateManyAndReturnArgs} args - Arguments to update many Payment_terms.
     * @example
     * // Update many Payment_terms
     * const payment_terms = await prisma.payment_terms.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payment_terms and only return the `id`
     * const payment_termsWithIdOnly = await prisma.payment_terms.updateManyAndReturn({
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
    updateManyAndReturn<T extends payment_termsUpdateManyAndReturnArgs>(args: SelectSubset<T, payment_termsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_termsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment_terms.
     * @param {payment_termsUpsertArgs} args - Arguments to update or create a Payment_terms.
     * @example
     * // Update or create a Payment_terms
     * const payment_terms = await prisma.payment_terms.upsert({
     *   create: {
     *     // ... data to create a Payment_terms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment_terms we want to update
     *   }
     * })
     */
    upsert<T extends payment_termsUpsertArgs>(args: SelectSubset<T, payment_termsUpsertArgs<ExtArgs>>): Prisma__payment_termsClient<$Result.GetResult<Prisma.$payment_termsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payment_terms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_termsCountArgs} args - Arguments to filter Payment_terms to count.
     * @example
     * // Count the number of Payment_terms
     * const count = await prisma.payment_terms.count({
     *   where: {
     *     // ... the filter for the Payment_terms we want to count
     *   }
     * })
    **/
    count<T extends payment_termsCountArgs>(
      args?: Subset<T, payment_termsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Payment_termsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment_terms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_termsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Payment_termsAggregateArgs>(args: Subset<T, Payment_termsAggregateArgs>): Prisma.PrismaPromise<GetPayment_termsAggregateType<T>>

    /**
     * Group by Payment_terms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_termsGroupByArgs} args - Group by arguments.
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
      T extends payment_termsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: payment_termsGroupByArgs['orderBy'] }
        : { orderBy?: payment_termsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, payment_termsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayment_termsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payment_terms model
   */
  readonly fields: payment_termsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment_terms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__payment_termsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the payment_terms model
   */
  interface payment_termsFieldRefs {
    readonly id: FieldRef<"payment_terms", 'String'>
    readonly payment_terms_id: FieldRef<"payment_terms", 'Int'>
    readonly name: FieldRef<"payment_terms", 'String'>
    readonly description: FieldRef<"payment_terms", 'String'>
    readonly due_days: FieldRef<"payment_terms", 'Int'>
    readonly discount_days: FieldRef<"payment_terms", 'Int'>
    readonly discount_percent: FieldRef<"payment_terms", 'Decimal'>
    readonly is_active: FieldRef<"payment_terms", 'Boolean'>
    readonly created_at: FieldRef<"payment_terms", 'DateTime'>
    readonly updated_at: FieldRef<"payment_terms", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payment_terms findUnique
   */
  export type payment_termsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_terms
     */
    select?: payment_termsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_terms
     */
    omit?: payment_termsOmit<ExtArgs> | null
    /**
     * Filter, which payment_terms to fetch.
     */
    where: payment_termsWhereUniqueInput
  }

  /**
   * payment_terms findUniqueOrThrow
   */
  export type payment_termsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_terms
     */
    select?: payment_termsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_terms
     */
    omit?: payment_termsOmit<ExtArgs> | null
    /**
     * Filter, which payment_terms to fetch.
     */
    where: payment_termsWhereUniqueInput
  }

  /**
   * payment_terms findFirst
   */
  export type payment_termsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_terms
     */
    select?: payment_termsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_terms
     */
    omit?: payment_termsOmit<ExtArgs> | null
    /**
     * Filter, which payment_terms to fetch.
     */
    where?: payment_termsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_terms to fetch.
     */
    orderBy?: payment_termsOrderByWithRelationInput | payment_termsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payment_terms.
     */
    cursor?: payment_termsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_terms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_terms.
     */
    distinct?: Payment_termsScalarFieldEnum | Payment_termsScalarFieldEnum[]
  }

  /**
   * payment_terms findFirstOrThrow
   */
  export type payment_termsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_terms
     */
    select?: payment_termsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_terms
     */
    omit?: payment_termsOmit<ExtArgs> | null
    /**
     * Filter, which payment_terms to fetch.
     */
    where?: payment_termsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_terms to fetch.
     */
    orderBy?: payment_termsOrderByWithRelationInput | payment_termsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payment_terms.
     */
    cursor?: payment_termsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_terms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_terms.
     */
    distinct?: Payment_termsScalarFieldEnum | Payment_termsScalarFieldEnum[]
  }

  /**
   * payment_terms findMany
   */
  export type payment_termsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_terms
     */
    select?: payment_termsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_terms
     */
    omit?: payment_termsOmit<ExtArgs> | null
    /**
     * Filter, which payment_terms to fetch.
     */
    where?: payment_termsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_terms to fetch.
     */
    orderBy?: payment_termsOrderByWithRelationInput | payment_termsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payment_terms.
     */
    cursor?: payment_termsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_terms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_terms.
     */
    skip?: number
    distinct?: Payment_termsScalarFieldEnum | Payment_termsScalarFieldEnum[]
  }

  /**
   * payment_terms create
   */
  export type payment_termsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_terms
     */
    select?: payment_termsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_terms
     */
    omit?: payment_termsOmit<ExtArgs> | null
    /**
     * The data needed to create a payment_terms.
     */
    data: XOR<payment_termsCreateInput, payment_termsUncheckedCreateInput>
  }

  /**
   * payment_terms createMany
   */
  export type payment_termsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payment_terms.
     */
    data: payment_termsCreateManyInput | payment_termsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payment_terms createManyAndReturn
   */
  export type payment_termsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_terms
     */
    select?: payment_termsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment_terms
     */
    omit?: payment_termsOmit<ExtArgs> | null
    /**
     * The data used to create many payment_terms.
     */
    data: payment_termsCreateManyInput | payment_termsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payment_terms update
   */
  export type payment_termsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_terms
     */
    select?: payment_termsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_terms
     */
    omit?: payment_termsOmit<ExtArgs> | null
    /**
     * The data needed to update a payment_terms.
     */
    data: XOR<payment_termsUpdateInput, payment_termsUncheckedUpdateInput>
    /**
     * Choose, which payment_terms to update.
     */
    where: payment_termsWhereUniqueInput
  }

  /**
   * payment_terms updateMany
   */
  export type payment_termsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payment_terms.
     */
    data: XOR<payment_termsUpdateManyMutationInput, payment_termsUncheckedUpdateManyInput>
    /**
     * Filter which payment_terms to update
     */
    where?: payment_termsWhereInput
    /**
     * Limit how many payment_terms to update.
     */
    limit?: number
  }

  /**
   * payment_terms updateManyAndReturn
   */
  export type payment_termsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_terms
     */
    select?: payment_termsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment_terms
     */
    omit?: payment_termsOmit<ExtArgs> | null
    /**
     * The data used to update payment_terms.
     */
    data: XOR<payment_termsUpdateManyMutationInput, payment_termsUncheckedUpdateManyInput>
    /**
     * Filter which payment_terms to update
     */
    where?: payment_termsWhereInput
    /**
     * Limit how many payment_terms to update.
     */
    limit?: number
  }

  /**
   * payment_terms upsert
   */
  export type payment_termsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_terms
     */
    select?: payment_termsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_terms
     */
    omit?: payment_termsOmit<ExtArgs> | null
    /**
     * The filter to search for the payment_terms to update in case it exists.
     */
    where: payment_termsWhereUniqueInput
    /**
     * In case the payment_terms found by the `where` argument doesn't exist, create a new payment_terms with this data.
     */
    create: XOR<payment_termsCreateInput, payment_termsUncheckedCreateInput>
    /**
     * In case the payment_terms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<payment_termsUpdateInput, payment_termsUncheckedUpdateInput>
  }

  /**
   * payment_terms delete
   */
  export type payment_termsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_terms
     */
    select?: payment_termsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_terms
     */
    omit?: payment_termsOmit<ExtArgs> | null
    /**
     * Filter which payment_terms to delete.
     */
    where: payment_termsWhereUniqueInput
  }

  /**
   * payment_terms deleteMany
   */
  export type payment_termsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_terms to delete
     */
    where?: payment_termsWhereInput
    /**
     * Limit how many payment_terms to delete.
     */
    limit?: number
  }

  /**
   * payment_terms without action
   */
  export type payment_termsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_terms
     */
    select?: payment_termsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_terms
     */
    omit?: payment_termsOmit<ExtArgs> | null
  }


  /**
   * Model PaymentStatus
   */

  export type AggregatePaymentStatus = {
    _count: PaymentStatusCountAggregateOutputType | null
    _min: PaymentStatusMinAggregateOutputType | null
    _max: PaymentStatusMaxAggregateOutputType | null
  }

  export type PaymentStatusMinAggregateOutputType = {
    id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentStatusMaxAggregateOutputType = {
    id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentStatusCountAggregateOutputType = {
    id: number
    name: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PaymentStatusMinAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentStatusMaxAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentStatusCountAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PaymentStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentStatus to aggregate.
     */
    where?: PaymentStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentStatuses to fetch.
     */
    orderBy?: PaymentStatusOrderByWithRelationInput | PaymentStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentStatuses
    **/
    _count?: true | PaymentStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentStatusMaxAggregateInputType
  }

  export type GetPaymentStatusAggregateType<T extends PaymentStatusAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentStatus[P]>
      : GetScalarType<T[P], AggregatePaymentStatus[P]>
  }




  export type PaymentStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentStatusWhereInput
    orderBy?: PaymentStatusOrderByWithAggregationInput | PaymentStatusOrderByWithAggregationInput[]
    by: PaymentStatusScalarFieldEnum[] | PaymentStatusScalarFieldEnum
    having?: PaymentStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentStatusCountAggregateInputType | true
    _min?: PaymentStatusMinAggregateInputType
    _max?: PaymentStatusMaxAggregateInputType
  }

  export type PaymentStatusGroupByOutputType = {
    id: string
    name: string
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: PaymentStatusCountAggregateOutputType | null
    _min: PaymentStatusMinAggregateOutputType | null
    _max: PaymentStatusMaxAggregateOutputType | null
  }

  type GetPaymentStatusGroupByPayload<T extends PaymentStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentStatusGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentStatusGroupByOutputType[P]>
        }
      >
    >


  export type PaymentStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["paymentStatus"]>

  export type PaymentStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["paymentStatus"]>

  export type PaymentStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["paymentStatus"]>

  export type PaymentStatusSelectScalar = {
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PaymentStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["paymentStatus"]>

  export type $PaymentStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentStatus"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["paymentStatus"]>
    composites: {}
  }

  type PaymentStatusGetPayload<S extends boolean | null | undefined | PaymentStatusDefaultArgs> = $Result.GetResult<Prisma.$PaymentStatusPayload, S>

  type PaymentStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentStatusCountAggregateInputType | true
    }

  export interface PaymentStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentStatus'], meta: { name: 'PaymentStatus' } }
    /**
     * Find zero or one PaymentStatus that matches the filter.
     * @param {PaymentStatusFindUniqueArgs} args - Arguments to find a PaymentStatus
     * @example
     * // Get one PaymentStatus
     * const paymentStatus = await prisma.paymentStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentStatusFindUniqueArgs>(args: SelectSubset<T, PaymentStatusFindUniqueArgs<ExtArgs>>): Prisma__PaymentStatusClient<$Result.GetResult<Prisma.$PaymentStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentStatusFindUniqueOrThrowArgs} args - Arguments to find a PaymentStatus
     * @example
     * // Get one PaymentStatus
     * const paymentStatus = await prisma.paymentStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentStatusClient<$Result.GetResult<Prisma.$PaymentStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentStatusFindFirstArgs} args - Arguments to find a PaymentStatus
     * @example
     * // Get one PaymentStatus
     * const paymentStatus = await prisma.paymentStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentStatusFindFirstArgs>(args?: SelectSubset<T, PaymentStatusFindFirstArgs<ExtArgs>>): Prisma__PaymentStatusClient<$Result.GetResult<Prisma.$PaymentStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentStatusFindFirstOrThrowArgs} args - Arguments to find a PaymentStatus
     * @example
     * // Get one PaymentStatus
     * const paymentStatus = await prisma.paymentStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentStatusClient<$Result.GetResult<Prisma.$PaymentStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentStatuses
     * const paymentStatuses = await prisma.paymentStatus.findMany()
     * 
     * // Get first 10 PaymentStatuses
     * const paymentStatuses = await prisma.paymentStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentStatusWithIdOnly = await prisma.paymentStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentStatusFindManyArgs>(args?: SelectSubset<T, PaymentStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentStatus.
     * @param {PaymentStatusCreateArgs} args - Arguments to create a PaymentStatus.
     * @example
     * // Create one PaymentStatus
     * const PaymentStatus = await prisma.paymentStatus.create({
     *   data: {
     *     // ... data to create a PaymentStatus
     *   }
     * })
     * 
     */
    create<T extends PaymentStatusCreateArgs>(args: SelectSubset<T, PaymentStatusCreateArgs<ExtArgs>>): Prisma__PaymentStatusClient<$Result.GetResult<Prisma.$PaymentStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentStatuses.
     * @param {PaymentStatusCreateManyArgs} args - Arguments to create many PaymentStatuses.
     * @example
     * // Create many PaymentStatuses
     * const paymentStatus = await prisma.paymentStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentStatusCreateManyArgs>(args?: SelectSubset<T, PaymentStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentStatuses and returns the data saved in the database.
     * @param {PaymentStatusCreateManyAndReturnArgs} args - Arguments to create many PaymentStatuses.
     * @example
     * // Create many PaymentStatuses
     * const paymentStatus = await prisma.paymentStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentStatuses and only return the `id`
     * const paymentStatusWithIdOnly = await prisma.paymentStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentStatus.
     * @param {PaymentStatusDeleteArgs} args - Arguments to delete one PaymentStatus.
     * @example
     * // Delete one PaymentStatus
     * const PaymentStatus = await prisma.paymentStatus.delete({
     *   where: {
     *     // ... filter to delete one PaymentStatus
     *   }
     * })
     * 
     */
    delete<T extends PaymentStatusDeleteArgs>(args: SelectSubset<T, PaymentStatusDeleteArgs<ExtArgs>>): Prisma__PaymentStatusClient<$Result.GetResult<Prisma.$PaymentStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentStatus.
     * @param {PaymentStatusUpdateArgs} args - Arguments to update one PaymentStatus.
     * @example
     * // Update one PaymentStatus
     * const paymentStatus = await prisma.paymentStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentStatusUpdateArgs>(args: SelectSubset<T, PaymentStatusUpdateArgs<ExtArgs>>): Prisma__PaymentStatusClient<$Result.GetResult<Prisma.$PaymentStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentStatuses.
     * @param {PaymentStatusDeleteManyArgs} args - Arguments to filter PaymentStatuses to delete.
     * @example
     * // Delete a few PaymentStatuses
     * const { count } = await prisma.paymentStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentStatusDeleteManyArgs>(args?: SelectSubset<T, PaymentStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentStatuses
     * const paymentStatus = await prisma.paymentStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentStatusUpdateManyArgs>(args: SelectSubset<T, PaymentStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentStatuses and returns the data updated in the database.
     * @param {PaymentStatusUpdateManyAndReturnArgs} args - Arguments to update many PaymentStatuses.
     * @example
     * // Update many PaymentStatuses
     * const paymentStatus = await prisma.paymentStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentStatuses and only return the `id`
     * const paymentStatusWithIdOnly = await prisma.paymentStatus.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentStatus.
     * @param {PaymentStatusUpsertArgs} args - Arguments to update or create a PaymentStatus.
     * @example
     * // Update or create a PaymentStatus
     * const paymentStatus = await prisma.paymentStatus.upsert({
     *   create: {
     *     // ... data to create a PaymentStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentStatus we want to update
     *   }
     * })
     */
    upsert<T extends PaymentStatusUpsertArgs>(args: SelectSubset<T, PaymentStatusUpsertArgs<ExtArgs>>): Prisma__PaymentStatusClient<$Result.GetResult<Prisma.$PaymentStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentStatusCountArgs} args - Arguments to filter PaymentStatuses to count.
     * @example
     * // Count the number of PaymentStatuses
     * const count = await prisma.paymentStatus.count({
     *   where: {
     *     // ... the filter for the PaymentStatuses we want to count
     *   }
     * })
    **/
    count<T extends PaymentStatusCountArgs>(
      args?: Subset<T, PaymentStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentStatusAggregateArgs>(args: Subset<T, PaymentStatusAggregateArgs>): Prisma.PrismaPromise<GetPaymentStatusAggregateType<T>>

    /**
     * Group by PaymentStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentStatusGroupByArgs} args - Group by arguments.
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
      T extends PaymentStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentStatusGroupByArgs['orderBy'] }
        : { orderBy?: PaymentStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentStatus model
   */
  readonly fields: PaymentStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the PaymentStatus model
   */
  interface PaymentStatusFieldRefs {
    readonly id: FieldRef<"PaymentStatus", 'String'>
    readonly name: FieldRef<"PaymentStatus", 'String'>
    readonly is_active: FieldRef<"PaymentStatus", 'Boolean'>
    readonly created_at: FieldRef<"PaymentStatus", 'DateTime'>
    readonly updated_at: FieldRef<"PaymentStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentStatus findUnique
   */
  export type PaymentStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentStatus
     */
    select?: PaymentStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentStatus
     */
    omit?: PaymentStatusOmit<ExtArgs> | null
    /**
     * Filter, which PaymentStatus to fetch.
     */
    where: PaymentStatusWhereUniqueInput
  }

  /**
   * PaymentStatus findUniqueOrThrow
   */
  export type PaymentStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentStatus
     */
    select?: PaymentStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentStatus
     */
    omit?: PaymentStatusOmit<ExtArgs> | null
    /**
     * Filter, which PaymentStatus to fetch.
     */
    where: PaymentStatusWhereUniqueInput
  }

  /**
   * PaymentStatus findFirst
   */
  export type PaymentStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentStatus
     */
    select?: PaymentStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentStatus
     */
    omit?: PaymentStatusOmit<ExtArgs> | null
    /**
     * Filter, which PaymentStatus to fetch.
     */
    where?: PaymentStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentStatuses to fetch.
     */
    orderBy?: PaymentStatusOrderByWithRelationInput | PaymentStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentStatuses.
     */
    cursor?: PaymentStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentStatuses.
     */
    distinct?: PaymentStatusScalarFieldEnum | PaymentStatusScalarFieldEnum[]
  }

  /**
   * PaymentStatus findFirstOrThrow
   */
  export type PaymentStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentStatus
     */
    select?: PaymentStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentStatus
     */
    omit?: PaymentStatusOmit<ExtArgs> | null
    /**
     * Filter, which PaymentStatus to fetch.
     */
    where?: PaymentStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentStatuses to fetch.
     */
    orderBy?: PaymentStatusOrderByWithRelationInput | PaymentStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentStatuses.
     */
    cursor?: PaymentStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentStatuses.
     */
    distinct?: PaymentStatusScalarFieldEnum | PaymentStatusScalarFieldEnum[]
  }

  /**
   * PaymentStatus findMany
   */
  export type PaymentStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentStatus
     */
    select?: PaymentStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentStatus
     */
    omit?: PaymentStatusOmit<ExtArgs> | null
    /**
     * Filter, which PaymentStatuses to fetch.
     */
    where?: PaymentStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentStatuses to fetch.
     */
    orderBy?: PaymentStatusOrderByWithRelationInput | PaymentStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentStatuses.
     */
    cursor?: PaymentStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentStatuses.
     */
    skip?: number
    distinct?: PaymentStatusScalarFieldEnum | PaymentStatusScalarFieldEnum[]
  }

  /**
   * PaymentStatus create
   */
  export type PaymentStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentStatus
     */
    select?: PaymentStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentStatus
     */
    omit?: PaymentStatusOmit<ExtArgs> | null
    /**
     * The data needed to create a PaymentStatus.
     */
    data: XOR<PaymentStatusCreateInput, PaymentStatusUncheckedCreateInput>
  }

  /**
   * PaymentStatus createMany
   */
  export type PaymentStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentStatuses.
     */
    data: PaymentStatusCreateManyInput | PaymentStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentStatus createManyAndReturn
   */
  export type PaymentStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentStatus
     */
    select?: PaymentStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentStatus
     */
    omit?: PaymentStatusOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentStatuses.
     */
    data: PaymentStatusCreateManyInput | PaymentStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentStatus update
   */
  export type PaymentStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentStatus
     */
    select?: PaymentStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentStatus
     */
    omit?: PaymentStatusOmit<ExtArgs> | null
    /**
     * The data needed to update a PaymentStatus.
     */
    data: XOR<PaymentStatusUpdateInput, PaymentStatusUncheckedUpdateInput>
    /**
     * Choose, which PaymentStatus to update.
     */
    where: PaymentStatusWhereUniqueInput
  }

  /**
   * PaymentStatus updateMany
   */
  export type PaymentStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentStatuses.
     */
    data: XOR<PaymentStatusUpdateManyMutationInput, PaymentStatusUncheckedUpdateManyInput>
    /**
     * Filter which PaymentStatuses to update
     */
    where?: PaymentStatusWhereInput
    /**
     * Limit how many PaymentStatuses to update.
     */
    limit?: number
  }

  /**
   * PaymentStatus updateManyAndReturn
   */
  export type PaymentStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentStatus
     */
    select?: PaymentStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentStatus
     */
    omit?: PaymentStatusOmit<ExtArgs> | null
    /**
     * The data used to update PaymentStatuses.
     */
    data: XOR<PaymentStatusUpdateManyMutationInput, PaymentStatusUncheckedUpdateManyInput>
    /**
     * Filter which PaymentStatuses to update
     */
    where?: PaymentStatusWhereInput
    /**
     * Limit how many PaymentStatuses to update.
     */
    limit?: number
  }

  /**
   * PaymentStatus upsert
   */
  export type PaymentStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentStatus
     */
    select?: PaymentStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentStatus
     */
    omit?: PaymentStatusOmit<ExtArgs> | null
    /**
     * The filter to search for the PaymentStatus to update in case it exists.
     */
    where: PaymentStatusWhereUniqueInput
    /**
     * In case the PaymentStatus found by the `where` argument doesn't exist, create a new PaymentStatus with this data.
     */
    create: XOR<PaymentStatusCreateInput, PaymentStatusUncheckedCreateInput>
    /**
     * In case the PaymentStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentStatusUpdateInput, PaymentStatusUncheckedUpdateInput>
  }

  /**
   * PaymentStatus delete
   */
  export type PaymentStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentStatus
     */
    select?: PaymentStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentStatus
     */
    omit?: PaymentStatusOmit<ExtArgs> | null
    /**
     * Filter which PaymentStatus to delete.
     */
    where: PaymentStatusWhereUniqueInput
  }

  /**
   * PaymentStatus deleteMany
   */
  export type PaymentStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentStatuses to delete
     */
    where?: PaymentStatusWhereInput
    /**
     * Limit how many PaymentStatuses to delete.
     */
    limit?: number
  }

  /**
   * PaymentStatus without action
   */
  export type PaymentStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentStatus
     */
    select?: PaymentStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentStatus
     */
    omit?: PaymentStatusOmit<ExtArgs> | null
  }


  /**
   * Model QuoteStatus
   */

  export type AggregateQuoteStatus = {
    _count: QuoteStatusCountAggregateOutputType | null
    _min: QuoteStatusMinAggregateOutputType | null
    _max: QuoteStatusMaxAggregateOutputType | null
  }

  export type QuoteStatusMinAggregateOutputType = {
    id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type QuoteStatusMaxAggregateOutputType = {
    id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type QuoteStatusCountAggregateOutputType = {
    id: number
    name: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type QuoteStatusMinAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type QuoteStatusMaxAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type QuoteStatusCountAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type QuoteStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuoteStatus to aggregate.
     */
    where?: QuoteStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteStatuses to fetch.
     */
    orderBy?: QuoteStatusOrderByWithRelationInput | QuoteStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuoteStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuoteStatuses
    **/
    _count?: true | QuoteStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuoteStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuoteStatusMaxAggregateInputType
  }

  export type GetQuoteStatusAggregateType<T extends QuoteStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateQuoteStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuoteStatus[P]>
      : GetScalarType<T[P], AggregateQuoteStatus[P]>
  }




  export type QuoteStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteStatusWhereInput
    orderBy?: QuoteStatusOrderByWithAggregationInput | QuoteStatusOrderByWithAggregationInput[]
    by: QuoteStatusScalarFieldEnum[] | QuoteStatusScalarFieldEnum
    having?: QuoteStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuoteStatusCountAggregateInputType | true
    _min?: QuoteStatusMinAggregateInputType
    _max?: QuoteStatusMaxAggregateInputType
  }

  export type QuoteStatusGroupByOutputType = {
    id: string
    name: string
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: QuoteStatusCountAggregateOutputType | null
    _min: QuoteStatusMinAggregateOutputType | null
    _max: QuoteStatusMaxAggregateOutputType | null
  }

  type GetQuoteStatusGroupByPayload<T extends QuoteStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuoteStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuoteStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuoteStatusGroupByOutputType[P]>
            : GetScalarType<T[P], QuoteStatusGroupByOutputType[P]>
        }
      >
    >


  export type QuoteStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["quoteStatus"]>

  export type QuoteStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["quoteStatus"]>

  export type QuoteStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["quoteStatus"]>

  export type QuoteStatusSelectScalar = {
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type QuoteStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["quoteStatus"]>

  export type $QuoteStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuoteStatus"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["quoteStatus"]>
    composites: {}
  }

  type QuoteStatusGetPayload<S extends boolean | null | undefined | QuoteStatusDefaultArgs> = $Result.GetResult<Prisma.$QuoteStatusPayload, S>

  type QuoteStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuoteStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuoteStatusCountAggregateInputType | true
    }

  export interface QuoteStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuoteStatus'], meta: { name: 'QuoteStatus' } }
    /**
     * Find zero or one QuoteStatus that matches the filter.
     * @param {QuoteStatusFindUniqueArgs} args - Arguments to find a QuoteStatus
     * @example
     * // Get one QuoteStatus
     * const quoteStatus = await prisma.quoteStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuoteStatusFindUniqueArgs>(args: SelectSubset<T, QuoteStatusFindUniqueArgs<ExtArgs>>): Prisma__QuoteStatusClient<$Result.GetResult<Prisma.$QuoteStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuoteStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuoteStatusFindUniqueOrThrowArgs} args - Arguments to find a QuoteStatus
     * @example
     * // Get one QuoteStatus
     * const quoteStatus = await prisma.quoteStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuoteStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, QuoteStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuoteStatusClient<$Result.GetResult<Prisma.$QuoteStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuoteStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteStatusFindFirstArgs} args - Arguments to find a QuoteStatus
     * @example
     * // Get one QuoteStatus
     * const quoteStatus = await prisma.quoteStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuoteStatusFindFirstArgs>(args?: SelectSubset<T, QuoteStatusFindFirstArgs<ExtArgs>>): Prisma__QuoteStatusClient<$Result.GetResult<Prisma.$QuoteStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuoteStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteStatusFindFirstOrThrowArgs} args - Arguments to find a QuoteStatus
     * @example
     * // Get one QuoteStatus
     * const quoteStatus = await prisma.quoteStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuoteStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, QuoteStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuoteStatusClient<$Result.GetResult<Prisma.$QuoteStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuoteStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuoteStatuses
     * const quoteStatuses = await prisma.quoteStatus.findMany()
     * 
     * // Get first 10 QuoteStatuses
     * const quoteStatuses = await prisma.quoteStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quoteStatusWithIdOnly = await prisma.quoteStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuoteStatusFindManyArgs>(args?: SelectSubset<T, QuoteStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuoteStatus.
     * @param {QuoteStatusCreateArgs} args - Arguments to create a QuoteStatus.
     * @example
     * // Create one QuoteStatus
     * const QuoteStatus = await prisma.quoteStatus.create({
     *   data: {
     *     // ... data to create a QuoteStatus
     *   }
     * })
     * 
     */
    create<T extends QuoteStatusCreateArgs>(args: SelectSubset<T, QuoteStatusCreateArgs<ExtArgs>>): Prisma__QuoteStatusClient<$Result.GetResult<Prisma.$QuoteStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuoteStatuses.
     * @param {QuoteStatusCreateManyArgs} args - Arguments to create many QuoteStatuses.
     * @example
     * // Create many QuoteStatuses
     * const quoteStatus = await prisma.quoteStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuoteStatusCreateManyArgs>(args?: SelectSubset<T, QuoteStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuoteStatuses and returns the data saved in the database.
     * @param {QuoteStatusCreateManyAndReturnArgs} args - Arguments to create many QuoteStatuses.
     * @example
     * // Create many QuoteStatuses
     * const quoteStatus = await prisma.quoteStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuoteStatuses and only return the `id`
     * const quoteStatusWithIdOnly = await prisma.quoteStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuoteStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, QuoteStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuoteStatus.
     * @param {QuoteStatusDeleteArgs} args - Arguments to delete one QuoteStatus.
     * @example
     * // Delete one QuoteStatus
     * const QuoteStatus = await prisma.quoteStatus.delete({
     *   where: {
     *     // ... filter to delete one QuoteStatus
     *   }
     * })
     * 
     */
    delete<T extends QuoteStatusDeleteArgs>(args: SelectSubset<T, QuoteStatusDeleteArgs<ExtArgs>>): Prisma__QuoteStatusClient<$Result.GetResult<Prisma.$QuoteStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuoteStatus.
     * @param {QuoteStatusUpdateArgs} args - Arguments to update one QuoteStatus.
     * @example
     * // Update one QuoteStatus
     * const quoteStatus = await prisma.quoteStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuoteStatusUpdateArgs>(args: SelectSubset<T, QuoteStatusUpdateArgs<ExtArgs>>): Prisma__QuoteStatusClient<$Result.GetResult<Prisma.$QuoteStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuoteStatuses.
     * @param {QuoteStatusDeleteManyArgs} args - Arguments to filter QuoteStatuses to delete.
     * @example
     * // Delete a few QuoteStatuses
     * const { count } = await prisma.quoteStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuoteStatusDeleteManyArgs>(args?: SelectSubset<T, QuoteStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuoteStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuoteStatuses
     * const quoteStatus = await prisma.quoteStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuoteStatusUpdateManyArgs>(args: SelectSubset<T, QuoteStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuoteStatuses and returns the data updated in the database.
     * @param {QuoteStatusUpdateManyAndReturnArgs} args - Arguments to update many QuoteStatuses.
     * @example
     * // Update many QuoteStatuses
     * const quoteStatus = await prisma.quoteStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuoteStatuses and only return the `id`
     * const quoteStatusWithIdOnly = await prisma.quoteStatus.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuoteStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, QuoteStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuoteStatus.
     * @param {QuoteStatusUpsertArgs} args - Arguments to update or create a QuoteStatus.
     * @example
     * // Update or create a QuoteStatus
     * const quoteStatus = await prisma.quoteStatus.upsert({
     *   create: {
     *     // ... data to create a QuoteStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuoteStatus we want to update
     *   }
     * })
     */
    upsert<T extends QuoteStatusUpsertArgs>(args: SelectSubset<T, QuoteStatusUpsertArgs<ExtArgs>>): Prisma__QuoteStatusClient<$Result.GetResult<Prisma.$QuoteStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuoteStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteStatusCountArgs} args - Arguments to filter QuoteStatuses to count.
     * @example
     * // Count the number of QuoteStatuses
     * const count = await prisma.quoteStatus.count({
     *   where: {
     *     // ... the filter for the QuoteStatuses we want to count
     *   }
     * })
    **/
    count<T extends QuoteStatusCountArgs>(
      args?: Subset<T, QuoteStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuoteStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuoteStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuoteStatusAggregateArgs>(args: Subset<T, QuoteStatusAggregateArgs>): Prisma.PrismaPromise<GetQuoteStatusAggregateType<T>>

    /**
     * Group by QuoteStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteStatusGroupByArgs} args - Group by arguments.
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
      T extends QuoteStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuoteStatusGroupByArgs['orderBy'] }
        : { orderBy?: QuoteStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuoteStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuoteStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuoteStatus model
   */
  readonly fields: QuoteStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuoteStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuoteStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the QuoteStatus model
   */
  interface QuoteStatusFieldRefs {
    readonly id: FieldRef<"QuoteStatus", 'String'>
    readonly name: FieldRef<"QuoteStatus", 'String'>
    readonly is_active: FieldRef<"QuoteStatus", 'Boolean'>
    readonly created_at: FieldRef<"QuoteStatus", 'DateTime'>
    readonly updated_at: FieldRef<"QuoteStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuoteStatus findUnique
   */
  export type QuoteStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteStatus
     */
    select?: QuoteStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteStatus
     */
    omit?: QuoteStatusOmit<ExtArgs> | null
    /**
     * Filter, which QuoteStatus to fetch.
     */
    where: QuoteStatusWhereUniqueInput
  }

  /**
   * QuoteStatus findUniqueOrThrow
   */
  export type QuoteStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteStatus
     */
    select?: QuoteStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteStatus
     */
    omit?: QuoteStatusOmit<ExtArgs> | null
    /**
     * Filter, which QuoteStatus to fetch.
     */
    where: QuoteStatusWhereUniqueInput
  }

  /**
   * QuoteStatus findFirst
   */
  export type QuoteStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteStatus
     */
    select?: QuoteStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteStatus
     */
    omit?: QuoteStatusOmit<ExtArgs> | null
    /**
     * Filter, which QuoteStatus to fetch.
     */
    where?: QuoteStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteStatuses to fetch.
     */
    orderBy?: QuoteStatusOrderByWithRelationInput | QuoteStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuoteStatuses.
     */
    cursor?: QuoteStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuoteStatuses.
     */
    distinct?: QuoteStatusScalarFieldEnum | QuoteStatusScalarFieldEnum[]
  }

  /**
   * QuoteStatus findFirstOrThrow
   */
  export type QuoteStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteStatus
     */
    select?: QuoteStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteStatus
     */
    omit?: QuoteStatusOmit<ExtArgs> | null
    /**
     * Filter, which QuoteStatus to fetch.
     */
    where?: QuoteStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteStatuses to fetch.
     */
    orderBy?: QuoteStatusOrderByWithRelationInput | QuoteStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuoteStatuses.
     */
    cursor?: QuoteStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuoteStatuses.
     */
    distinct?: QuoteStatusScalarFieldEnum | QuoteStatusScalarFieldEnum[]
  }

  /**
   * QuoteStatus findMany
   */
  export type QuoteStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteStatus
     */
    select?: QuoteStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteStatus
     */
    omit?: QuoteStatusOmit<ExtArgs> | null
    /**
     * Filter, which QuoteStatuses to fetch.
     */
    where?: QuoteStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteStatuses to fetch.
     */
    orderBy?: QuoteStatusOrderByWithRelationInput | QuoteStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuoteStatuses.
     */
    cursor?: QuoteStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteStatuses.
     */
    skip?: number
    distinct?: QuoteStatusScalarFieldEnum | QuoteStatusScalarFieldEnum[]
  }

  /**
   * QuoteStatus create
   */
  export type QuoteStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteStatus
     */
    select?: QuoteStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteStatus
     */
    omit?: QuoteStatusOmit<ExtArgs> | null
    /**
     * The data needed to create a QuoteStatus.
     */
    data: XOR<QuoteStatusCreateInput, QuoteStatusUncheckedCreateInput>
  }

  /**
   * QuoteStatus createMany
   */
  export type QuoteStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuoteStatuses.
     */
    data: QuoteStatusCreateManyInput | QuoteStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuoteStatus createManyAndReturn
   */
  export type QuoteStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteStatus
     */
    select?: QuoteStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteStatus
     */
    omit?: QuoteStatusOmit<ExtArgs> | null
    /**
     * The data used to create many QuoteStatuses.
     */
    data: QuoteStatusCreateManyInput | QuoteStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuoteStatus update
   */
  export type QuoteStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteStatus
     */
    select?: QuoteStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteStatus
     */
    omit?: QuoteStatusOmit<ExtArgs> | null
    /**
     * The data needed to update a QuoteStatus.
     */
    data: XOR<QuoteStatusUpdateInput, QuoteStatusUncheckedUpdateInput>
    /**
     * Choose, which QuoteStatus to update.
     */
    where: QuoteStatusWhereUniqueInput
  }

  /**
   * QuoteStatus updateMany
   */
  export type QuoteStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuoteStatuses.
     */
    data: XOR<QuoteStatusUpdateManyMutationInput, QuoteStatusUncheckedUpdateManyInput>
    /**
     * Filter which QuoteStatuses to update
     */
    where?: QuoteStatusWhereInput
    /**
     * Limit how many QuoteStatuses to update.
     */
    limit?: number
  }

  /**
   * QuoteStatus updateManyAndReturn
   */
  export type QuoteStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteStatus
     */
    select?: QuoteStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteStatus
     */
    omit?: QuoteStatusOmit<ExtArgs> | null
    /**
     * The data used to update QuoteStatuses.
     */
    data: XOR<QuoteStatusUpdateManyMutationInput, QuoteStatusUncheckedUpdateManyInput>
    /**
     * Filter which QuoteStatuses to update
     */
    where?: QuoteStatusWhereInput
    /**
     * Limit how many QuoteStatuses to update.
     */
    limit?: number
  }

  /**
   * QuoteStatus upsert
   */
  export type QuoteStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteStatus
     */
    select?: QuoteStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteStatus
     */
    omit?: QuoteStatusOmit<ExtArgs> | null
    /**
     * The filter to search for the QuoteStatus to update in case it exists.
     */
    where: QuoteStatusWhereUniqueInput
    /**
     * In case the QuoteStatus found by the `where` argument doesn't exist, create a new QuoteStatus with this data.
     */
    create: XOR<QuoteStatusCreateInput, QuoteStatusUncheckedCreateInput>
    /**
     * In case the QuoteStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuoteStatusUpdateInput, QuoteStatusUncheckedUpdateInput>
  }

  /**
   * QuoteStatus delete
   */
  export type QuoteStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteStatus
     */
    select?: QuoteStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteStatus
     */
    omit?: QuoteStatusOmit<ExtArgs> | null
    /**
     * Filter which QuoteStatus to delete.
     */
    where: QuoteStatusWhereUniqueInput
  }

  /**
   * QuoteStatus deleteMany
   */
  export type QuoteStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuoteStatuses to delete
     */
    where?: QuoteStatusWhereInput
    /**
     * Limit how many QuoteStatuses to delete.
     */
    limit?: number
  }

  /**
   * QuoteStatus without action
   */
  export type QuoteStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteStatus
     */
    select?: QuoteStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteStatus
     */
    omit?: QuoteStatusOmit<ExtArgs> | null
  }


  /**
   * Model OrderStatus
   */

  export type AggregateOrderStatus = {
    _count: OrderStatusCountAggregateOutputType | null
    _min: OrderStatusMinAggregateOutputType | null
    _max: OrderStatusMaxAggregateOutputType | null
  }

  export type OrderStatusMinAggregateOutputType = {
    id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderStatusMaxAggregateOutputType = {
    id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderStatusCountAggregateOutputType = {
    id: number
    name: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OrderStatusMinAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderStatusMaxAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderStatusCountAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OrderStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderStatus to aggregate.
     */
    where?: OrderStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStatuses to fetch.
     */
    orderBy?: OrderStatusOrderByWithRelationInput | OrderStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderStatuses
    **/
    _count?: true | OrderStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderStatusMaxAggregateInputType
  }

  export type GetOrderStatusAggregateType<T extends OrderStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderStatus[P]>
      : GetScalarType<T[P], AggregateOrderStatus[P]>
  }




  export type OrderStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderStatusWhereInput
    orderBy?: OrderStatusOrderByWithAggregationInput | OrderStatusOrderByWithAggregationInput[]
    by: OrderStatusScalarFieldEnum[] | OrderStatusScalarFieldEnum
    having?: OrderStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderStatusCountAggregateInputType | true
    _min?: OrderStatusMinAggregateInputType
    _max?: OrderStatusMaxAggregateInputType
  }

  export type OrderStatusGroupByOutputType = {
    id: string
    name: string
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: OrderStatusCountAggregateOutputType | null
    _min: OrderStatusMinAggregateOutputType | null
    _max: OrderStatusMaxAggregateOutputType | null
  }

  type GetOrderStatusGroupByPayload<T extends OrderStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderStatusGroupByOutputType[P]>
            : GetScalarType<T[P], OrderStatusGroupByOutputType[P]>
        }
      >
    >


  export type OrderStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["orderStatus"]>

  export type OrderStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["orderStatus"]>

  export type OrderStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["orderStatus"]>

  export type OrderStatusSelectScalar = {
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type OrderStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["orderStatus"]>

  export type $OrderStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderStatus"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["orderStatus"]>
    composites: {}
  }

  type OrderStatusGetPayload<S extends boolean | null | undefined | OrderStatusDefaultArgs> = $Result.GetResult<Prisma.$OrderStatusPayload, S>

  type OrderStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderStatusCountAggregateInputType | true
    }

  export interface OrderStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderStatus'], meta: { name: 'OrderStatus' } }
    /**
     * Find zero or one OrderStatus that matches the filter.
     * @param {OrderStatusFindUniqueArgs} args - Arguments to find a OrderStatus
     * @example
     * // Get one OrderStatus
     * const orderStatus = await prisma.orderStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderStatusFindUniqueArgs>(args: SelectSubset<T, OrderStatusFindUniqueArgs<ExtArgs>>): Prisma__OrderStatusClient<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderStatusFindUniqueOrThrowArgs} args - Arguments to find a OrderStatus
     * @example
     * // Get one OrderStatus
     * const orderStatus = await prisma.orderStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderStatusClient<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusFindFirstArgs} args - Arguments to find a OrderStatus
     * @example
     * // Get one OrderStatus
     * const orderStatus = await prisma.orderStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderStatusFindFirstArgs>(args?: SelectSubset<T, OrderStatusFindFirstArgs<ExtArgs>>): Prisma__OrderStatusClient<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusFindFirstOrThrowArgs} args - Arguments to find a OrderStatus
     * @example
     * // Get one OrderStatus
     * const orderStatus = await prisma.orderStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderStatusClient<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderStatuses
     * const orderStatuses = await prisma.orderStatus.findMany()
     * 
     * // Get first 10 OrderStatuses
     * const orderStatuses = await prisma.orderStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderStatusWithIdOnly = await prisma.orderStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderStatusFindManyArgs>(args?: SelectSubset<T, OrderStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderStatus.
     * @param {OrderStatusCreateArgs} args - Arguments to create a OrderStatus.
     * @example
     * // Create one OrderStatus
     * const OrderStatus = await prisma.orderStatus.create({
     *   data: {
     *     // ... data to create a OrderStatus
     *   }
     * })
     * 
     */
    create<T extends OrderStatusCreateArgs>(args: SelectSubset<T, OrderStatusCreateArgs<ExtArgs>>): Prisma__OrderStatusClient<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderStatuses.
     * @param {OrderStatusCreateManyArgs} args - Arguments to create many OrderStatuses.
     * @example
     * // Create many OrderStatuses
     * const orderStatus = await prisma.orderStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderStatusCreateManyArgs>(args?: SelectSubset<T, OrderStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderStatuses and returns the data saved in the database.
     * @param {OrderStatusCreateManyAndReturnArgs} args - Arguments to create many OrderStatuses.
     * @example
     * // Create many OrderStatuses
     * const orderStatus = await prisma.orderStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderStatuses and only return the `id`
     * const orderStatusWithIdOnly = await prisma.orderStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderStatus.
     * @param {OrderStatusDeleteArgs} args - Arguments to delete one OrderStatus.
     * @example
     * // Delete one OrderStatus
     * const OrderStatus = await prisma.orderStatus.delete({
     *   where: {
     *     // ... filter to delete one OrderStatus
     *   }
     * })
     * 
     */
    delete<T extends OrderStatusDeleteArgs>(args: SelectSubset<T, OrderStatusDeleteArgs<ExtArgs>>): Prisma__OrderStatusClient<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderStatus.
     * @param {OrderStatusUpdateArgs} args - Arguments to update one OrderStatus.
     * @example
     * // Update one OrderStatus
     * const orderStatus = await prisma.orderStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderStatusUpdateArgs>(args: SelectSubset<T, OrderStatusUpdateArgs<ExtArgs>>): Prisma__OrderStatusClient<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderStatuses.
     * @param {OrderStatusDeleteManyArgs} args - Arguments to filter OrderStatuses to delete.
     * @example
     * // Delete a few OrderStatuses
     * const { count } = await prisma.orderStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderStatusDeleteManyArgs>(args?: SelectSubset<T, OrderStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderStatuses
     * const orderStatus = await prisma.orderStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderStatusUpdateManyArgs>(args: SelectSubset<T, OrderStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderStatuses and returns the data updated in the database.
     * @param {OrderStatusUpdateManyAndReturnArgs} args - Arguments to update many OrderStatuses.
     * @example
     * // Update many OrderStatuses
     * const orderStatus = await prisma.orderStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderStatuses and only return the `id`
     * const orderStatusWithIdOnly = await prisma.orderStatus.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderStatus.
     * @param {OrderStatusUpsertArgs} args - Arguments to update or create a OrderStatus.
     * @example
     * // Update or create a OrderStatus
     * const orderStatus = await prisma.orderStatus.upsert({
     *   create: {
     *     // ... data to create a OrderStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderStatus we want to update
     *   }
     * })
     */
    upsert<T extends OrderStatusUpsertArgs>(args: SelectSubset<T, OrderStatusUpsertArgs<ExtArgs>>): Prisma__OrderStatusClient<$Result.GetResult<Prisma.$OrderStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusCountArgs} args - Arguments to filter OrderStatuses to count.
     * @example
     * // Count the number of OrderStatuses
     * const count = await prisma.orderStatus.count({
     *   where: {
     *     // ... the filter for the OrderStatuses we want to count
     *   }
     * })
    **/
    count<T extends OrderStatusCountArgs>(
      args?: Subset<T, OrderStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderStatusAggregateArgs>(args: Subset<T, OrderStatusAggregateArgs>): Prisma.PrismaPromise<GetOrderStatusAggregateType<T>>

    /**
     * Group by OrderStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStatusGroupByArgs} args - Group by arguments.
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
      T extends OrderStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderStatusGroupByArgs['orderBy'] }
        : { orderBy?: OrderStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderStatus model
   */
  readonly fields: OrderStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the OrderStatus model
   */
  interface OrderStatusFieldRefs {
    readonly id: FieldRef<"OrderStatus", 'String'>
    readonly name: FieldRef<"OrderStatus", 'String'>
    readonly is_active: FieldRef<"OrderStatus", 'Boolean'>
    readonly created_at: FieldRef<"OrderStatus", 'DateTime'>
    readonly updated_at: FieldRef<"OrderStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderStatus findUnique
   */
  export type OrderStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * Filter, which OrderStatus to fetch.
     */
    where: OrderStatusWhereUniqueInput
  }

  /**
   * OrderStatus findUniqueOrThrow
   */
  export type OrderStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * Filter, which OrderStatus to fetch.
     */
    where: OrderStatusWhereUniqueInput
  }

  /**
   * OrderStatus findFirst
   */
  export type OrderStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * Filter, which OrderStatus to fetch.
     */
    where?: OrderStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStatuses to fetch.
     */
    orderBy?: OrderStatusOrderByWithRelationInput | OrderStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderStatuses.
     */
    cursor?: OrderStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderStatuses.
     */
    distinct?: OrderStatusScalarFieldEnum | OrderStatusScalarFieldEnum[]
  }

  /**
   * OrderStatus findFirstOrThrow
   */
  export type OrderStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * Filter, which OrderStatus to fetch.
     */
    where?: OrderStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStatuses to fetch.
     */
    orderBy?: OrderStatusOrderByWithRelationInput | OrderStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderStatuses.
     */
    cursor?: OrderStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderStatuses.
     */
    distinct?: OrderStatusScalarFieldEnum | OrderStatusScalarFieldEnum[]
  }

  /**
   * OrderStatus findMany
   */
  export type OrderStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * Filter, which OrderStatuses to fetch.
     */
    where?: OrderStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStatuses to fetch.
     */
    orderBy?: OrderStatusOrderByWithRelationInput | OrderStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderStatuses.
     */
    cursor?: OrderStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStatuses.
     */
    skip?: number
    distinct?: OrderStatusScalarFieldEnum | OrderStatusScalarFieldEnum[]
  }

  /**
   * OrderStatus create
   */
  export type OrderStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * The data needed to create a OrderStatus.
     */
    data: XOR<OrderStatusCreateInput, OrderStatusUncheckedCreateInput>
  }

  /**
   * OrderStatus createMany
   */
  export type OrderStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderStatuses.
     */
    data: OrderStatusCreateManyInput | OrderStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderStatus createManyAndReturn
   */
  export type OrderStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * The data used to create many OrderStatuses.
     */
    data: OrderStatusCreateManyInput | OrderStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderStatus update
   */
  export type OrderStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * The data needed to update a OrderStatus.
     */
    data: XOR<OrderStatusUpdateInput, OrderStatusUncheckedUpdateInput>
    /**
     * Choose, which OrderStatus to update.
     */
    where: OrderStatusWhereUniqueInput
  }

  /**
   * OrderStatus updateMany
   */
  export type OrderStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderStatuses.
     */
    data: XOR<OrderStatusUpdateManyMutationInput, OrderStatusUncheckedUpdateManyInput>
    /**
     * Filter which OrderStatuses to update
     */
    where?: OrderStatusWhereInput
    /**
     * Limit how many OrderStatuses to update.
     */
    limit?: number
  }

  /**
   * OrderStatus updateManyAndReturn
   */
  export type OrderStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * The data used to update OrderStatuses.
     */
    data: XOR<OrderStatusUpdateManyMutationInput, OrderStatusUncheckedUpdateManyInput>
    /**
     * Filter which OrderStatuses to update
     */
    where?: OrderStatusWhereInput
    /**
     * Limit how many OrderStatuses to update.
     */
    limit?: number
  }

  /**
   * OrderStatus upsert
   */
  export type OrderStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * The filter to search for the OrderStatus to update in case it exists.
     */
    where: OrderStatusWhereUniqueInput
    /**
     * In case the OrderStatus found by the `where` argument doesn't exist, create a new OrderStatus with this data.
     */
    create: XOR<OrderStatusCreateInput, OrderStatusUncheckedCreateInput>
    /**
     * In case the OrderStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderStatusUpdateInput, OrderStatusUncheckedUpdateInput>
  }

  /**
   * OrderStatus delete
   */
  export type OrderStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
    /**
     * Filter which OrderStatus to delete.
     */
    where: OrderStatusWhereUniqueInput
  }

  /**
   * OrderStatus deleteMany
   */
  export type OrderStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderStatuses to delete
     */
    where?: OrderStatusWhereInput
    /**
     * Limit how many OrderStatuses to delete.
     */
    limit?: number
  }

  /**
   * OrderStatus without action
   */
  export type OrderStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStatus
     */
    select?: OrderStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStatus
     */
    omit?: OrderStatusOmit<ExtArgs> | null
  }


  /**
   * Model LogisticsStatus
   */

  export type AggregateLogisticsStatus = {
    _count: LogisticsStatusCountAggregateOutputType | null
    _min: LogisticsStatusMinAggregateOutputType | null
    _max: LogisticsStatusMaxAggregateOutputType | null
  }

  export type LogisticsStatusMinAggregateOutputType = {
    id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LogisticsStatusMaxAggregateOutputType = {
    id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LogisticsStatusCountAggregateOutputType = {
    id: number
    name: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type LogisticsStatusMinAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type LogisticsStatusMaxAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type LogisticsStatusCountAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type LogisticsStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogisticsStatus to aggregate.
     */
    where?: LogisticsStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogisticsStatuses to fetch.
     */
    orderBy?: LogisticsStatusOrderByWithRelationInput | LogisticsStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogisticsStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogisticsStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogisticsStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogisticsStatuses
    **/
    _count?: true | LogisticsStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogisticsStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogisticsStatusMaxAggregateInputType
  }

  export type GetLogisticsStatusAggregateType<T extends LogisticsStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateLogisticsStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogisticsStatus[P]>
      : GetScalarType<T[P], AggregateLogisticsStatus[P]>
  }




  export type LogisticsStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogisticsStatusWhereInput
    orderBy?: LogisticsStatusOrderByWithAggregationInput | LogisticsStatusOrderByWithAggregationInput[]
    by: LogisticsStatusScalarFieldEnum[] | LogisticsStatusScalarFieldEnum
    having?: LogisticsStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogisticsStatusCountAggregateInputType | true
    _min?: LogisticsStatusMinAggregateInputType
    _max?: LogisticsStatusMaxAggregateInputType
  }

  export type LogisticsStatusGroupByOutputType = {
    id: string
    name: string
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: LogisticsStatusCountAggregateOutputType | null
    _min: LogisticsStatusMinAggregateOutputType | null
    _max: LogisticsStatusMaxAggregateOutputType | null
  }

  type GetLogisticsStatusGroupByPayload<T extends LogisticsStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogisticsStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogisticsStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogisticsStatusGroupByOutputType[P]>
            : GetScalarType<T[P], LogisticsStatusGroupByOutputType[P]>
        }
      >
    >


  export type LogisticsStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["logisticsStatus"]>

  export type LogisticsStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["logisticsStatus"]>

  export type LogisticsStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["logisticsStatus"]>

  export type LogisticsStatusSelectScalar = {
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type LogisticsStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["logisticsStatus"]>

  export type $LogisticsStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogisticsStatus"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["logisticsStatus"]>
    composites: {}
  }

  type LogisticsStatusGetPayload<S extends boolean | null | undefined | LogisticsStatusDefaultArgs> = $Result.GetResult<Prisma.$LogisticsStatusPayload, S>

  type LogisticsStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogisticsStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogisticsStatusCountAggregateInputType | true
    }

  export interface LogisticsStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogisticsStatus'], meta: { name: 'LogisticsStatus' } }
    /**
     * Find zero or one LogisticsStatus that matches the filter.
     * @param {LogisticsStatusFindUniqueArgs} args - Arguments to find a LogisticsStatus
     * @example
     * // Get one LogisticsStatus
     * const logisticsStatus = await prisma.logisticsStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogisticsStatusFindUniqueArgs>(args: SelectSubset<T, LogisticsStatusFindUniqueArgs<ExtArgs>>): Prisma__LogisticsStatusClient<$Result.GetResult<Prisma.$LogisticsStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogisticsStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogisticsStatusFindUniqueOrThrowArgs} args - Arguments to find a LogisticsStatus
     * @example
     * // Get one LogisticsStatus
     * const logisticsStatus = await prisma.logisticsStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogisticsStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, LogisticsStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogisticsStatusClient<$Result.GetResult<Prisma.$LogisticsStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogisticsStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsStatusFindFirstArgs} args - Arguments to find a LogisticsStatus
     * @example
     * // Get one LogisticsStatus
     * const logisticsStatus = await prisma.logisticsStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogisticsStatusFindFirstArgs>(args?: SelectSubset<T, LogisticsStatusFindFirstArgs<ExtArgs>>): Prisma__LogisticsStatusClient<$Result.GetResult<Prisma.$LogisticsStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogisticsStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsStatusFindFirstOrThrowArgs} args - Arguments to find a LogisticsStatus
     * @example
     * // Get one LogisticsStatus
     * const logisticsStatus = await prisma.logisticsStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogisticsStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, LogisticsStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogisticsStatusClient<$Result.GetResult<Prisma.$LogisticsStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogisticsStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogisticsStatuses
     * const logisticsStatuses = await prisma.logisticsStatus.findMany()
     * 
     * // Get first 10 LogisticsStatuses
     * const logisticsStatuses = await prisma.logisticsStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logisticsStatusWithIdOnly = await prisma.logisticsStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogisticsStatusFindManyArgs>(args?: SelectSubset<T, LogisticsStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogisticsStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogisticsStatus.
     * @param {LogisticsStatusCreateArgs} args - Arguments to create a LogisticsStatus.
     * @example
     * // Create one LogisticsStatus
     * const LogisticsStatus = await prisma.logisticsStatus.create({
     *   data: {
     *     // ... data to create a LogisticsStatus
     *   }
     * })
     * 
     */
    create<T extends LogisticsStatusCreateArgs>(args: SelectSubset<T, LogisticsStatusCreateArgs<ExtArgs>>): Prisma__LogisticsStatusClient<$Result.GetResult<Prisma.$LogisticsStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogisticsStatuses.
     * @param {LogisticsStatusCreateManyArgs} args - Arguments to create many LogisticsStatuses.
     * @example
     * // Create many LogisticsStatuses
     * const logisticsStatus = await prisma.logisticsStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogisticsStatusCreateManyArgs>(args?: SelectSubset<T, LogisticsStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LogisticsStatuses and returns the data saved in the database.
     * @param {LogisticsStatusCreateManyAndReturnArgs} args - Arguments to create many LogisticsStatuses.
     * @example
     * // Create many LogisticsStatuses
     * const logisticsStatus = await prisma.logisticsStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LogisticsStatuses and only return the `id`
     * const logisticsStatusWithIdOnly = await prisma.logisticsStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogisticsStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, LogisticsStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogisticsStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LogisticsStatus.
     * @param {LogisticsStatusDeleteArgs} args - Arguments to delete one LogisticsStatus.
     * @example
     * // Delete one LogisticsStatus
     * const LogisticsStatus = await prisma.logisticsStatus.delete({
     *   where: {
     *     // ... filter to delete one LogisticsStatus
     *   }
     * })
     * 
     */
    delete<T extends LogisticsStatusDeleteArgs>(args: SelectSubset<T, LogisticsStatusDeleteArgs<ExtArgs>>): Prisma__LogisticsStatusClient<$Result.GetResult<Prisma.$LogisticsStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogisticsStatus.
     * @param {LogisticsStatusUpdateArgs} args - Arguments to update one LogisticsStatus.
     * @example
     * // Update one LogisticsStatus
     * const logisticsStatus = await prisma.logisticsStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogisticsStatusUpdateArgs>(args: SelectSubset<T, LogisticsStatusUpdateArgs<ExtArgs>>): Prisma__LogisticsStatusClient<$Result.GetResult<Prisma.$LogisticsStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogisticsStatuses.
     * @param {LogisticsStatusDeleteManyArgs} args - Arguments to filter LogisticsStatuses to delete.
     * @example
     * // Delete a few LogisticsStatuses
     * const { count } = await prisma.logisticsStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogisticsStatusDeleteManyArgs>(args?: SelectSubset<T, LogisticsStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogisticsStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogisticsStatuses
     * const logisticsStatus = await prisma.logisticsStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogisticsStatusUpdateManyArgs>(args: SelectSubset<T, LogisticsStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogisticsStatuses and returns the data updated in the database.
     * @param {LogisticsStatusUpdateManyAndReturnArgs} args - Arguments to update many LogisticsStatuses.
     * @example
     * // Update many LogisticsStatuses
     * const logisticsStatus = await prisma.logisticsStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LogisticsStatuses and only return the `id`
     * const logisticsStatusWithIdOnly = await prisma.logisticsStatus.updateManyAndReturn({
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
    updateManyAndReturn<T extends LogisticsStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, LogisticsStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogisticsStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LogisticsStatus.
     * @param {LogisticsStatusUpsertArgs} args - Arguments to update or create a LogisticsStatus.
     * @example
     * // Update or create a LogisticsStatus
     * const logisticsStatus = await prisma.logisticsStatus.upsert({
     *   create: {
     *     // ... data to create a LogisticsStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogisticsStatus we want to update
     *   }
     * })
     */
    upsert<T extends LogisticsStatusUpsertArgs>(args: SelectSubset<T, LogisticsStatusUpsertArgs<ExtArgs>>): Prisma__LogisticsStatusClient<$Result.GetResult<Prisma.$LogisticsStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LogisticsStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsStatusCountArgs} args - Arguments to filter LogisticsStatuses to count.
     * @example
     * // Count the number of LogisticsStatuses
     * const count = await prisma.logisticsStatus.count({
     *   where: {
     *     // ... the filter for the LogisticsStatuses we want to count
     *   }
     * })
    **/
    count<T extends LogisticsStatusCountArgs>(
      args?: Subset<T, LogisticsStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogisticsStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogisticsStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogisticsStatusAggregateArgs>(args: Subset<T, LogisticsStatusAggregateArgs>): Prisma.PrismaPromise<GetLogisticsStatusAggregateType<T>>

    /**
     * Group by LogisticsStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogisticsStatusGroupByArgs} args - Group by arguments.
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
      T extends LogisticsStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogisticsStatusGroupByArgs['orderBy'] }
        : { orderBy?: LogisticsStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogisticsStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogisticsStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogisticsStatus model
   */
  readonly fields: LogisticsStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogisticsStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogisticsStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the LogisticsStatus model
   */
  interface LogisticsStatusFieldRefs {
    readonly id: FieldRef<"LogisticsStatus", 'String'>
    readonly name: FieldRef<"LogisticsStatus", 'String'>
    readonly is_active: FieldRef<"LogisticsStatus", 'Boolean'>
    readonly created_at: FieldRef<"LogisticsStatus", 'DateTime'>
    readonly updated_at: FieldRef<"LogisticsStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LogisticsStatus findUnique
   */
  export type LogisticsStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsStatus
     */
    select?: LogisticsStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsStatus
     */
    omit?: LogisticsStatusOmit<ExtArgs> | null
    /**
     * Filter, which LogisticsStatus to fetch.
     */
    where: LogisticsStatusWhereUniqueInput
  }

  /**
   * LogisticsStatus findUniqueOrThrow
   */
  export type LogisticsStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsStatus
     */
    select?: LogisticsStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsStatus
     */
    omit?: LogisticsStatusOmit<ExtArgs> | null
    /**
     * Filter, which LogisticsStatus to fetch.
     */
    where: LogisticsStatusWhereUniqueInput
  }

  /**
   * LogisticsStatus findFirst
   */
  export type LogisticsStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsStatus
     */
    select?: LogisticsStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsStatus
     */
    omit?: LogisticsStatusOmit<ExtArgs> | null
    /**
     * Filter, which LogisticsStatus to fetch.
     */
    where?: LogisticsStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogisticsStatuses to fetch.
     */
    orderBy?: LogisticsStatusOrderByWithRelationInput | LogisticsStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogisticsStatuses.
     */
    cursor?: LogisticsStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogisticsStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogisticsStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogisticsStatuses.
     */
    distinct?: LogisticsStatusScalarFieldEnum | LogisticsStatusScalarFieldEnum[]
  }

  /**
   * LogisticsStatus findFirstOrThrow
   */
  export type LogisticsStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsStatus
     */
    select?: LogisticsStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsStatus
     */
    omit?: LogisticsStatusOmit<ExtArgs> | null
    /**
     * Filter, which LogisticsStatus to fetch.
     */
    where?: LogisticsStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogisticsStatuses to fetch.
     */
    orderBy?: LogisticsStatusOrderByWithRelationInput | LogisticsStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogisticsStatuses.
     */
    cursor?: LogisticsStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogisticsStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogisticsStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogisticsStatuses.
     */
    distinct?: LogisticsStatusScalarFieldEnum | LogisticsStatusScalarFieldEnum[]
  }

  /**
   * LogisticsStatus findMany
   */
  export type LogisticsStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsStatus
     */
    select?: LogisticsStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsStatus
     */
    omit?: LogisticsStatusOmit<ExtArgs> | null
    /**
     * Filter, which LogisticsStatuses to fetch.
     */
    where?: LogisticsStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogisticsStatuses to fetch.
     */
    orderBy?: LogisticsStatusOrderByWithRelationInput | LogisticsStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogisticsStatuses.
     */
    cursor?: LogisticsStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogisticsStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogisticsStatuses.
     */
    skip?: number
    distinct?: LogisticsStatusScalarFieldEnum | LogisticsStatusScalarFieldEnum[]
  }

  /**
   * LogisticsStatus create
   */
  export type LogisticsStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsStatus
     */
    select?: LogisticsStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsStatus
     */
    omit?: LogisticsStatusOmit<ExtArgs> | null
    /**
     * The data needed to create a LogisticsStatus.
     */
    data: XOR<LogisticsStatusCreateInput, LogisticsStatusUncheckedCreateInput>
  }

  /**
   * LogisticsStatus createMany
   */
  export type LogisticsStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogisticsStatuses.
     */
    data: LogisticsStatusCreateManyInput | LogisticsStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogisticsStatus createManyAndReturn
   */
  export type LogisticsStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsStatus
     */
    select?: LogisticsStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsStatus
     */
    omit?: LogisticsStatusOmit<ExtArgs> | null
    /**
     * The data used to create many LogisticsStatuses.
     */
    data: LogisticsStatusCreateManyInput | LogisticsStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogisticsStatus update
   */
  export type LogisticsStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsStatus
     */
    select?: LogisticsStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsStatus
     */
    omit?: LogisticsStatusOmit<ExtArgs> | null
    /**
     * The data needed to update a LogisticsStatus.
     */
    data: XOR<LogisticsStatusUpdateInput, LogisticsStatusUncheckedUpdateInput>
    /**
     * Choose, which LogisticsStatus to update.
     */
    where: LogisticsStatusWhereUniqueInput
  }

  /**
   * LogisticsStatus updateMany
   */
  export type LogisticsStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogisticsStatuses.
     */
    data: XOR<LogisticsStatusUpdateManyMutationInput, LogisticsStatusUncheckedUpdateManyInput>
    /**
     * Filter which LogisticsStatuses to update
     */
    where?: LogisticsStatusWhereInput
    /**
     * Limit how many LogisticsStatuses to update.
     */
    limit?: number
  }

  /**
   * LogisticsStatus updateManyAndReturn
   */
  export type LogisticsStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsStatus
     */
    select?: LogisticsStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsStatus
     */
    omit?: LogisticsStatusOmit<ExtArgs> | null
    /**
     * The data used to update LogisticsStatuses.
     */
    data: XOR<LogisticsStatusUpdateManyMutationInput, LogisticsStatusUncheckedUpdateManyInput>
    /**
     * Filter which LogisticsStatuses to update
     */
    where?: LogisticsStatusWhereInput
    /**
     * Limit how many LogisticsStatuses to update.
     */
    limit?: number
  }

  /**
   * LogisticsStatus upsert
   */
  export type LogisticsStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsStatus
     */
    select?: LogisticsStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsStatus
     */
    omit?: LogisticsStatusOmit<ExtArgs> | null
    /**
     * The filter to search for the LogisticsStatus to update in case it exists.
     */
    where: LogisticsStatusWhereUniqueInput
    /**
     * In case the LogisticsStatus found by the `where` argument doesn't exist, create a new LogisticsStatus with this data.
     */
    create: XOR<LogisticsStatusCreateInput, LogisticsStatusUncheckedCreateInput>
    /**
     * In case the LogisticsStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogisticsStatusUpdateInput, LogisticsStatusUncheckedUpdateInput>
  }

  /**
   * LogisticsStatus delete
   */
  export type LogisticsStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsStatus
     */
    select?: LogisticsStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsStatus
     */
    omit?: LogisticsStatusOmit<ExtArgs> | null
    /**
     * Filter which LogisticsStatus to delete.
     */
    where: LogisticsStatusWhereUniqueInput
  }

  /**
   * LogisticsStatus deleteMany
   */
  export type LogisticsStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogisticsStatuses to delete
     */
    where?: LogisticsStatusWhereInput
    /**
     * Limit how many LogisticsStatuses to delete.
     */
    limit?: number
  }

  /**
   * LogisticsStatus without action
   */
  export type LogisticsStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogisticsStatus
     */
    select?: LogisticsStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogisticsStatus
     */
    omit?: LogisticsStatusOmit<ExtArgs> | null
  }


  /**
   * Model FinanceStatus
   */

  export type AggregateFinanceStatus = {
    _count: FinanceStatusCountAggregateOutputType | null
    _min: FinanceStatusMinAggregateOutputType | null
    _max: FinanceStatusMaxAggregateOutputType | null
  }

  export type FinanceStatusMinAggregateOutputType = {
    id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FinanceStatusMaxAggregateOutputType = {
    id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FinanceStatusCountAggregateOutputType = {
    id: number
    name: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FinanceStatusMinAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type FinanceStatusMaxAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type FinanceStatusCountAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FinanceStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinanceStatus to aggregate.
     */
    where?: FinanceStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceStatuses to fetch.
     */
    orderBy?: FinanceStatusOrderByWithRelationInput | FinanceStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinanceStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinanceStatuses
    **/
    _count?: true | FinanceStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinanceStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinanceStatusMaxAggregateInputType
  }

  export type GetFinanceStatusAggregateType<T extends FinanceStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateFinanceStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinanceStatus[P]>
      : GetScalarType<T[P], AggregateFinanceStatus[P]>
  }




  export type FinanceStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinanceStatusWhereInput
    orderBy?: FinanceStatusOrderByWithAggregationInput | FinanceStatusOrderByWithAggregationInput[]
    by: FinanceStatusScalarFieldEnum[] | FinanceStatusScalarFieldEnum
    having?: FinanceStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinanceStatusCountAggregateInputType | true
    _min?: FinanceStatusMinAggregateInputType
    _max?: FinanceStatusMaxAggregateInputType
  }

  export type FinanceStatusGroupByOutputType = {
    id: string
    name: string
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: FinanceStatusCountAggregateOutputType | null
    _min: FinanceStatusMinAggregateOutputType | null
    _max: FinanceStatusMaxAggregateOutputType | null
  }

  type GetFinanceStatusGroupByPayload<T extends FinanceStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinanceStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinanceStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinanceStatusGroupByOutputType[P]>
            : GetScalarType<T[P], FinanceStatusGroupByOutputType[P]>
        }
      >
    >


  export type FinanceStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["financeStatus"]>

  export type FinanceStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["financeStatus"]>

  export type FinanceStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["financeStatus"]>

  export type FinanceStatusSelectScalar = {
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type FinanceStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["financeStatus"]>

  export type $FinanceStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinanceStatus"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["financeStatus"]>
    composites: {}
  }

  type FinanceStatusGetPayload<S extends boolean | null | undefined | FinanceStatusDefaultArgs> = $Result.GetResult<Prisma.$FinanceStatusPayload, S>

  type FinanceStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinanceStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinanceStatusCountAggregateInputType | true
    }

  export interface FinanceStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinanceStatus'], meta: { name: 'FinanceStatus' } }
    /**
     * Find zero or one FinanceStatus that matches the filter.
     * @param {FinanceStatusFindUniqueArgs} args - Arguments to find a FinanceStatus
     * @example
     * // Get one FinanceStatus
     * const financeStatus = await prisma.financeStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinanceStatusFindUniqueArgs>(args: SelectSubset<T, FinanceStatusFindUniqueArgs<ExtArgs>>): Prisma__FinanceStatusClient<$Result.GetResult<Prisma.$FinanceStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FinanceStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinanceStatusFindUniqueOrThrowArgs} args - Arguments to find a FinanceStatus
     * @example
     * // Get one FinanceStatus
     * const financeStatus = await prisma.financeStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinanceStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, FinanceStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinanceStatusClient<$Result.GetResult<Prisma.$FinanceStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinanceStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceStatusFindFirstArgs} args - Arguments to find a FinanceStatus
     * @example
     * // Get one FinanceStatus
     * const financeStatus = await prisma.financeStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinanceStatusFindFirstArgs>(args?: SelectSubset<T, FinanceStatusFindFirstArgs<ExtArgs>>): Prisma__FinanceStatusClient<$Result.GetResult<Prisma.$FinanceStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinanceStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceStatusFindFirstOrThrowArgs} args - Arguments to find a FinanceStatus
     * @example
     * // Get one FinanceStatus
     * const financeStatus = await prisma.financeStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinanceStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, FinanceStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinanceStatusClient<$Result.GetResult<Prisma.$FinanceStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FinanceStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinanceStatuses
     * const financeStatuses = await prisma.financeStatus.findMany()
     * 
     * // Get first 10 FinanceStatuses
     * const financeStatuses = await prisma.financeStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financeStatusWithIdOnly = await prisma.financeStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinanceStatusFindManyArgs>(args?: SelectSubset<T, FinanceStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FinanceStatus.
     * @param {FinanceStatusCreateArgs} args - Arguments to create a FinanceStatus.
     * @example
     * // Create one FinanceStatus
     * const FinanceStatus = await prisma.financeStatus.create({
     *   data: {
     *     // ... data to create a FinanceStatus
     *   }
     * })
     * 
     */
    create<T extends FinanceStatusCreateArgs>(args: SelectSubset<T, FinanceStatusCreateArgs<ExtArgs>>): Prisma__FinanceStatusClient<$Result.GetResult<Prisma.$FinanceStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FinanceStatuses.
     * @param {FinanceStatusCreateManyArgs} args - Arguments to create many FinanceStatuses.
     * @example
     * // Create many FinanceStatuses
     * const financeStatus = await prisma.financeStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinanceStatusCreateManyArgs>(args?: SelectSubset<T, FinanceStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinanceStatuses and returns the data saved in the database.
     * @param {FinanceStatusCreateManyAndReturnArgs} args - Arguments to create many FinanceStatuses.
     * @example
     * // Create many FinanceStatuses
     * const financeStatus = await prisma.financeStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinanceStatuses and only return the `id`
     * const financeStatusWithIdOnly = await prisma.financeStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinanceStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, FinanceStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FinanceStatus.
     * @param {FinanceStatusDeleteArgs} args - Arguments to delete one FinanceStatus.
     * @example
     * // Delete one FinanceStatus
     * const FinanceStatus = await prisma.financeStatus.delete({
     *   where: {
     *     // ... filter to delete one FinanceStatus
     *   }
     * })
     * 
     */
    delete<T extends FinanceStatusDeleteArgs>(args: SelectSubset<T, FinanceStatusDeleteArgs<ExtArgs>>): Prisma__FinanceStatusClient<$Result.GetResult<Prisma.$FinanceStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FinanceStatus.
     * @param {FinanceStatusUpdateArgs} args - Arguments to update one FinanceStatus.
     * @example
     * // Update one FinanceStatus
     * const financeStatus = await prisma.financeStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinanceStatusUpdateArgs>(args: SelectSubset<T, FinanceStatusUpdateArgs<ExtArgs>>): Prisma__FinanceStatusClient<$Result.GetResult<Prisma.$FinanceStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FinanceStatuses.
     * @param {FinanceStatusDeleteManyArgs} args - Arguments to filter FinanceStatuses to delete.
     * @example
     * // Delete a few FinanceStatuses
     * const { count } = await prisma.financeStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinanceStatusDeleteManyArgs>(args?: SelectSubset<T, FinanceStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinanceStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinanceStatuses
     * const financeStatus = await prisma.financeStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinanceStatusUpdateManyArgs>(args: SelectSubset<T, FinanceStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinanceStatuses and returns the data updated in the database.
     * @param {FinanceStatusUpdateManyAndReturnArgs} args - Arguments to update many FinanceStatuses.
     * @example
     * // Update many FinanceStatuses
     * const financeStatus = await prisma.financeStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FinanceStatuses and only return the `id`
     * const financeStatusWithIdOnly = await prisma.financeStatus.updateManyAndReturn({
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
    updateManyAndReturn<T extends FinanceStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, FinanceStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinanceStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FinanceStatus.
     * @param {FinanceStatusUpsertArgs} args - Arguments to update or create a FinanceStatus.
     * @example
     * // Update or create a FinanceStatus
     * const financeStatus = await prisma.financeStatus.upsert({
     *   create: {
     *     // ... data to create a FinanceStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinanceStatus we want to update
     *   }
     * })
     */
    upsert<T extends FinanceStatusUpsertArgs>(args: SelectSubset<T, FinanceStatusUpsertArgs<ExtArgs>>): Prisma__FinanceStatusClient<$Result.GetResult<Prisma.$FinanceStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FinanceStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceStatusCountArgs} args - Arguments to filter FinanceStatuses to count.
     * @example
     * // Count the number of FinanceStatuses
     * const count = await prisma.financeStatus.count({
     *   where: {
     *     // ... the filter for the FinanceStatuses we want to count
     *   }
     * })
    **/
    count<T extends FinanceStatusCountArgs>(
      args?: Subset<T, FinanceStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinanceStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinanceStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FinanceStatusAggregateArgs>(args: Subset<T, FinanceStatusAggregateArgs>): Prisma.PrismaPromise<GetFinanceStatusAggregateType<T>>

    /**
     * Group by FinanceStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinanceStatusGroupByArgs} args - Group by arguments.
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
      T extends FinanceStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinanceStatusGroupByArgs['orderBy'] }
        : { orderBy?: FinanceStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FinanceStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinanceStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinanceStatus model
   */
  readonly fields: FinanceStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinanceStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinanceStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the FinanceStatus model
   */
  interface FinanceStatusFieldRefs {
    readonly id: FieldRef<"FinanceStatus", 'String'>
    readonly name: FieldRef<"FinanceStatus", 'String'>
    readonly is_active: FieldRef<"FinanceStatus", 'Boolean'>
    readonly created_at: FieldRef<"FinanceStatus", 'DateTime'>
    readonly updated_at: FieldRef<"FinanceStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FinanceStatus findUnique
   */
  export type FinanceStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceStatus
     */
    select?: FinanceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceStatus
     */
    omit?: FinanceStatusOmit<ExtArgs> | null
    /**
     * Filter, which FinanceStatus to fetch.
     */
    where: FinanceStatusWhereUniqueInput
  }

  /**
   * FinanceStatus findUniqueOrThrow
   */
  export type FinanceStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceStatus
     */
    select?: FinanceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceStatus
     */
    omit?: FinanceStatusOmit<ExtArgs> | null
    /**
     * Filter, which FinanceStatus to fetch.
     */
    where: FinanceStatusWhereUniqueInput
  }

  /**
   * FinanceStatus findFirst
   */
  export type FinanceStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceStatus
     */
    select?: FinanceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceStatus
     */
    omit?: FinanceStatusOmit<ExtArgs> | null
    /**
     * Filter, which FinanceStatus to fetch.
     */
    where?: FinanceStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceStatuses to fetch.
     */
    orderBy?: FinanceStatusOrderByWithRelationInput | FinanceStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinanceStatuses.
     */
    cursor?: FinanceStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinanceStatuses.
     */
    distinct?: FinanceStatusScalarFieldEnum | FinanceStatusScalarFieldEnum[]
  }

  /**
   * FinanceStatus findFirstOrThrow
   */
  export type FinanceStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceStatus
     */
    select?: FinanceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceStatus
     */
    omit?: FinanceStatusOmit<ExtArgs> | null
    /**
     * Filter, which FinanceStatus to fetch.
     */
    where?: FinanceStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceStatuses to fetch.
     */
    orderBy?: FinanceStatusOrderByWithRelationInput | FinanceStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinanceStatuses.
     */
    cursor?: FinanceStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinanceStatuses.
     */
    distinct?: FinanceStatusScalarFieldEnum | FinanceStatusScalarFieldEnum[]
  }

  /**
   * FinanceStatus findMany
   */
  export type FinanceStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceStatus
     */
    select?: FinanceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceStatus
     */
    omit?: FinanceStatusOmit<ExtArgs> | null
    /**
     * Filter, which FinanceStatuses to fetch.
     */
    where?: FinanceStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinanceStatuses to fetch.
     */
    orderBy?: FinanceStatusOrderByWithRelationInput | FinanceStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinanceStatuses.
     */
    cursor?: FinanceStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinanceStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinanceStatuses.
     */
    skip?: number
    distinct?: FinanceStatusScalarFieldEnum | FinanceStatusScalarFieldEnum[]
  }

  /**
   * FinanceStatus create
   */
  export type FinanceStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceStatus
     */
    select?: FinanceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceStatus
     */
    omit?: FinanceStatusOmit<ExtArgs> | null
    /**
     * The data needed to create a FinanceStatus.
     */
    data: XOR<FinanceStatusCreateInput, FinanceStatusUncheckedCreateInput>
  }

  /**
   * FinanceStatus createMany
   */
  export type FinanceStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinanceStatuses.
     */
    data: FinanceStatusCreateManyInput | FinanceStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinanceStatus createManyAndReturn
   */
  export type FinanceStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceStatus
     */
    select?: FinanceStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceStatus
     */
    omit?: FinanceStatusOmit<ExtArgs> | null
    /**
     * The data used to create many FinanceStatuses.
     */
    data: FinanceStatusCreateManyInput | FinanceStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinanceStatus update
   */
  export type FinanceStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceStatus
     */
    select?: FinanceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceStatus
     */
    omit?: FinanceStatusOmit<ExtArgs> | null
    /**
     * The data needed to update a FinanceStatus.
     */
    data: XOR<FinanceStatusUpdateInput, FinanceStatusUncheckedUpdateInput>
    /**
     * Choose, which FinanceStatus to update.
     */
    where: FinanceStatusWhereUniqueInput
  }

  /**
   * FinanceStatus updateMany
   */
  export type FinanceStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinanceStatuses.
     */
    data: XOR<FinanceStatusUpdateManyMutationInput, FinanceStatusUncheckedUpdateManyInput>
    /**
     * Filter which FinanceStatuses to update
     */
    where?: FinanceStatusWhereInput
    /**
     * Limit how many FinanceStatuses to update.
     */
    limit?: number
  }

  /**
   * FinanceStatus updateManyAndReturn
   */
  export type FinanceStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceStatus
     */
    select?: FinanceStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceStatus
     */
    omit?: FinanceStatusOmit<ExtArgs> | null
    /**
     * The data used to update FinanceStatuses.
     */
    data: XOR<FinanceStatusUpdateManyMutationInput, FinanceStatusUncheckedUpdateManyInput>
    /**
     * Filter which FinanceStatuses to update
     */
    where?: FinanceStatusWhereInput
    /**
     * Limit how many FinanceStatuses to update.
     */
    limit?: number
  }

  /**
   * FinanceStatus upsert
   */
  export type FinanceStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceStatus
     */
    select?: FinanceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceStatus
     */
    omit?: FinanceStatusOmit<ExtArgs> | null
    /**
     * The filter to search for the FinanceStatus to update in case it exists.
     */
    where: FinanceStatusWhereUniqueInput
    /**
     * In case the FinanceStatus found by the `where` argument doesn't exist, create a new FinanceStatus with this data.
     */
    create: XOR<FinanceStatusCreateInput, FinanceStatusUncheckedCreateInput>
    /**
     * In case the FinanceStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinanceStatusUpdateInput, FinanceStatusUncheckedUpdateInput>
  }

  /**
   * FinanceStatus delete
   */
  export type FinanceStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceStatus
     */
    select?: FinanceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceStatus
     */
    omit?: FinanceStatusOmit<ExtArgs> | null
    /**
     * Filter which FinanceStatus to delete.
     */
    where: FinanceStatusWhereUniqueInput
  }

  /**
   * FinanceStatus deleteMany
   */
  export type FinanceStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinanceStatuses to delete
     */
    where?: FinanceStatusWhereInput
    /**
     * Limit how many FinanceStatuses to delete.
     */
    limit?: number
  }

  /**
   * FinanceStatus without action
   */
  export type FinanceStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinanceStatus
     */
    select?: FinanceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinanceStatus
     */
    omit?: FinanceStatusOmit<ExtArgs> | null
  }


  /**
   * Model vendor_capabilities
   */

  export type AggregateVendor_capabilities = {
    _count: Vendor_capabilitiesCountAggregateOutputType | null
    _min: Vendor_capabilitiesMinAggregateOutputType | null
    _max: Vendor_capabilitiesMaxAggregateOutputType | null
  }

  export type Vendor_capabilitiesMinAggregateOutputType = {
    id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Vendor_capabilitiesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Vendor_capabilitiesCountAggregateOutputType = {
    id: number
    name: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Vendor_capabilitiesMinAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Vendor_capabilitiesMaxAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Vendor_capabilitiesCountAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Vendor_capabilitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vendor_capabilities to aggregate.
     */
    where?: vendor_capabilitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendor_capabilities to fetch.
     */
    orderBy?: vendor_capabilitiesOrderByWithRelationInput | vendor_capabilitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vendor_capabilitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendor_capabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendor_capabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vendor_capabilities
    **/
    _count?: true | Vendor_capabilitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vendor_capabilitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vendor_capabilitiesMaxAggregateInputType
  }

  export type GetVendor_capabilitiesAggregateType<T extends Vendor_capabilitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateVendor_capabilities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendor_capabilities[P]>
      : GetScalarType<T[P], AggregateVendor_capabilities[P]>
  }




  export type vendor_capabilitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vendor_capabilitiesWhereInput
    orderBy?: vendor_capabilitiesOrderByWithAggregationInput | vendor_capabilitiesOrderByWithAggregationInput[]
    by: Vendor_capabilitiesScalarFieldEnum[] | Vendor_capabilitiesScalarFieldEnum
    having?: vendor_capabilitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vendor_capabilitiesCountAggregateInputType | true
    _min?: Vendor_capabilitiesMinAggregateInputType
    _max?: Vendor_capabilitiesMaxAggregateInputType
  }

  export type Vendor_capabilitiesGroupByOutputType = {
    id: string
    name: string
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: Vendor_capabilitiesCountAggregateOutputType | null
    _min: Vendor_capabilitiesMinAggregateOutputType | null
    _max: Vendor_capabilitiesMaxAggregateOutputType | null
  }

  type GetVendor_capabilitiesGroupByPayload<T extends vendor_capabilitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vendor_capabilitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vendor_capabilitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vendor_capabilitiesGroupByOutputType[P]>
            : GetScalarType<T[P], Vendor_capabilitiesGroupByOutputType[P]>
        }
      >
    >


  export type vendor_capabilitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    subCategories?: boolean | vendor_capabilities$subCategoriesArgs<ExtArgs>
    _count?: boolean | Vendor_capabilitiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendor_capabilities"]>

  export type vendor_capabilitiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["vendor_capabilities"]>

  export type vendor_capabilitiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["vendor_capabilities"]>

  export type vendor_capabilitiesSelectScalar = {
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type vendor_capabilitiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["vendor_capabilities"]>
  export type vendor_capabilitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategories?: boolean | vendor_capabilities$subCategoriesArgs<ExtArgs>
    _count?: boolean | Vendor_capabilitiesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type vendor_capabilitiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type vendor_capabilitiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $vendor_capabilitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vendor_capabilities"
    objects: {
      subCategories: Prisma.$vendor_capability_sub_categoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["vendor_capabilities"]>
    composites: {}
  }

  type vendor_capabilitiesGetPayload<S extends boolean | null | undefined | vendor_capabilitiesDefaultArgs> = $Result.GetResult<Prisma.$vendor_capabilitiesPayload, S>

  type vendor_capabilitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vendor_capabilitiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Vendor_capabilitiesCountAggregateInputType | true
    }

  export interface vendor_capabilitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vendor_capabilities'], meta: { name: 'vendor_capabilities' } }
    /**
     * Find zero or one Vendor_capabilities that matches the filter.
     * @param {vendor_capabilitiesFindUniqueArgs} args - Arguments to find a Vendor_capabilities
     * @example
     * // Get one Vendor_capabilities
     * const vendor_capabilities = await prisma.vendor_capabilities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vendor_capabilitiesFindUniqueArgs>(args: SelectSubset<T, vendor_capabilitiesFindUniqueArgs<ExtArgs>>): Prisma__vendor_capabilitiesClient<$Result.GetResult<Prisma.$vendor_capabilitiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendor_capabilities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vendor_capabilitiesFindUniqueOrThrowArgs} args - Arguments to find a Vendor_capabilities
     * @example
     * // Get one Vendor_capabilities
     * const vendor_capabilities = await prisma.vendor_capabilities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vendor_capabilitiesFindUniqueOrThrowArgs>(args: SelectSubset<T, vendor_capabilitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vendor_capabilitiesClient<$Result.GetResult<Prisma.$vendor_capabilitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor_capabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendor_capabilitiesFindFirstArgs} args - Arguments to find a Vendor_capabilities
     * @example
     * // Get one Vendor_capabilities
     * const vendor_capabilities = await prisma.vendor_capabilities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vendor_capabilitiesFindFirstArgs>(args?: SelectSubset<T, vendor_capabilitiesFindFirstArgs<ExtArgs>>): Prisma__vendor_capabilitiesClient<$Result.GetResult<Prisma.$vendor_capabilitiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor_capabilities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendor_capabilitiesFindFirstOrThrowArgs} args - Arguments to find a Vendor_capabilities
     * @example
     * // Get one Vendor_capabilities
     * const vendor_capabilities = await prisma.vendor_capabilities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vendor_capabilitiesFindFirstOrThrowArgs>(args?: SelectSubset<T, vendor_capabilitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__vendor_capabilitiesClient<$Result.GetResult<Prisma.$vendor_capabilitiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendor_capabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendor_capabilitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendor_capabilities
     * const vendor_capabilities = await prisma.vendor_capabilities.findMany()
     * 
     * // Get first 10 Vendor_capabilities
     * const vendor_capabilities = await prisma.vendor_capabilities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendor_capabilitiesWithIdOnly = await prisma.vendor_capabilities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends vendor_capabilitiesFindManyArgs>(args?: SelectSubset<T, vendor_capabilitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendor_capabilitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendor_capabilities.
     * @param {vendor_capabilitiesCreateArgs} args - Arguments to create a Vendor_capabilities.
     * @example
     * // Create one Vendor_capabilities
     * const Vendor_capabilities = await prisma.vendor_capabilities.create({
     *   data: {
     *     // ... data to create a Vendor_capabilities
     *   }
     * })
     * 
     */
    create<T extends vendor_capabilitiesCreateArgs>(args: SelectSubset<T, vendor_capabilitiesCreateArgs<ExtArgs>>): Prisma__vendor_capabilitiesClient<$Result.GetResult<Prisma.$vendor_capabilitiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendor_capabilities.
     * @param {vendor_capabilitiesCreateManyArgs} args - Arguments to create many Vendor_capabilities.
     * @example
     * // Create many Vendor_capabilities
     * const vendor_capabilities = await prisma.vendor_capabilities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vendor_capabilitiesCreateManyArgs>(args?: SelectSubset<T, vendor_capabilitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vendor_capabilities and returns the data saved in the database.
     * @param {vendor_capabilitiesCreateManyAndReturnArgs} args - Arguments to create many Vendor_capabilities.
     * @example
     * // Create many Vendor_capabilities
     * const vendor_capabilities = await prisma.vendor_capabilities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vendor_capabilities and only return the `id`
     * const vendor_capabilitiesWithIdOnly = await prisma.vendor_capabilities.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends vendor_capabilitiesCreateManyAndReturnArgs>(args?: SelectSubset<T, vendor_capabilitiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendor_capabilitiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vendor_capabilities.
     * @param {vendor_capabilitiesDeleteArgs} args - Arguments to delete one Vendor_capabilities.
     * @example
     * // Delete one Vendor_capabilities
     * const Vendor_capabilities = await prisma.vendor_capabilities.delete({
     *   where: {
     *     // ... filter to delete one Vendor_capabilities
     *   }
     * })
     * 
     */
    delete<T extends vendor_capabilitiesDeleteArgs>(args: SelectSubset<T, vendor_capabilitiesDeleteArgs<ExtArgs>>): Prisma__vendor_capabilitiesClient<$Result.GetResult<Prisma.$vendor_capabilitiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendor_capabilities.
     * @param {vendor_capabilitiesUpdateArgs} args - Arguments to update one Vendor_capabilities.
     * @example
     * // Update one Vendor_capabilities
     * const vendor_capabilities = await prisma.vendor_capabilities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vendor_capabilitiesUpdateArgs>(args: SelectSubset<T, vendor_capabilitiesUpdateArgs<ExtArgs>>): Prisma__vendor_capabilitiesClient<$Result.GetResult<Prisma.$vendor_capabilitiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendor_capabilities.
     * @param {vendor_capabilitiesDeleteManyArgs} args - Arguments to filter Vendor_capabilities to delete.
     * @example
     * // Delete a few Vendor_capabilities
     * const { count } = await prisma.vendor_capabilities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vendor_capabilitiesDeleteManyArgs>(args?: SelectSubset<T, vendor_capabilitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendor_capabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendor_capabilitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendor_capabilities
     * const vendor_capabilities = await prisma.vendor_capabilities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vendor_capabilitiesUpdateManyArgs>(args: SelectSubset<T, vendor_capabilitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendor_capabilities and returns the data updated in the database.
     * @param {vendor_capabilitiesUpdateManyAndReturnArgs} args - Arguments to update many Vendor_capabilities.
     * @example
     * // Update many Vendor_capabilities
     * const vendor_capabilities = await prisma.vendor_capabilities.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vendor_capabilities and only return the `id`
     * const vendor_capabilitiesWithIdOnly = await prisma.vendor_capabilities.updateManyAndReturn({
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
    updateManyAndReturn<T extends vendor_capabilitiesUpdateManyAndReturnArgs>(args: SelectSubset<T, vendor_capabilitiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendor_capabilitiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vendor_capabilities.
     * @param {vendor_capabilitiesUpsertArgs} args - Arguments to update or create a Vendor_capabilities.
     * @example
     * // Update or create a Vendor_capabilities
     * const vendor_capabilities = await prisma.vendor_capabilities.upsert({
     *   create: {
     *     // ... data to create a Vendor_capabilities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendor_capabilities we want to update
     *   }
     * })
     */
    upsert<T extends vendor_capabilitiesUpsertArgs>(args: SelectSubset<T, vendor_capabilitiesUpsertArgs<ExtArgs>>): Prisma__vendor_capabilitiesClient<$Result.GetResult<Prisma.$vendor_capabilitiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendor_capabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendor_capabilitiesCountArgs} args - Arguments to filter Vendor_capabilities to count.
     * @example
     * // Count the number of Vendor_capabilities
     * const count = await prisma.vendor_capabilities.count({
     *   where: {
     *     // ... the filter for the Vendor_capabilities we want to count
     *   }
     * })
    **/
    count<T extends vendor_capabilitiesCountArgs>(
      args?: Subset<T, vendor_capabilitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vendor_capabilitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendor_capabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vendor_capabilitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Vendor_capabilitiesAggregateArgs>(args: Subset<T, Vendor_capabilitiesAggregateArgs>): Prisma.PrismaPromise<GetVendor_capabilitiesAggregateType<T>>

    /**
     * Group by Vendor_capabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendor_capabilitiesGroupByArgs} args - Group by arguments.
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
      T extends vendor_capabilitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vendor_capabilitiesGroupByArgs['orderBy'] }
        : { orderBy?: vendor_capabilitiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, vendor_capabilitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendor_capabilitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vendor_capabilities model
   */
  readonly fields: vendor_capabilitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vendor_capabilities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vendor_capabilitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subCategories<T extends vendor_capabilities$subCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, vendor_capabilities$subCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendor_capability_sub_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the vendor_capabilities model
   */
  interface vendor_capabilitiesFieldRefs {
    readonly id: FieldRef<"vendor_capabilities", 'String'>
    readonly name: FieldRef<"vendor_capabilities", 'String'>
    readonly is_active: FieldRef<"vendor_capabilities", 'Boolean'>
    readonly created_at: FieldRef<"vendor_capabilities", 'DateTime'>
    readonly updated_at: FieldRef<"vendor_capabilities", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * vendor_capabilities findUnique
   */
  export type vendor_capabilitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_capabilities
     */
    select?: vendor_capabilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_capabilities
     */
    omit?: vendor_capabilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendor_capabilitiesInclude<ExtArgs> | null
    /**
     * Filter, which vendor_capabilities to fetch.
     */
    where: vendor_capabilitiesWhereUniqueInput
  }

  /**
   * vendor_capabilities findUniqueOrThrow
   */
  export type vendor_capabilitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_capabilities
     */
    select?: vendor_capabilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_capabilities
     */
    omit?: vendor_capabilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendor_capabilitiesInclude<ExtArgs> | null
    /**
     * Filter, which vendor_capabilities to fetch.
     */
    where: vendor_capabilitiesWhereUniqueInput
  }

  /**
   * vendor_capabilities findFirst
   */
  export type vendor_capabilitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_capabilities
     */
    select?: vendor_capabilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_capabilities
     */
    omit?: vendor_capabilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendor_capabilitiesInclude<ExtArgs> | null
    /**
     * Filter, which vendor_capabilities to fetch.
     */
    where?: vendor_capabilitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendor_capabilities to fetch.
     */
    orderBy?: vendor_capabilitiesOrderByWithRelationInput | vendor_capabilitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vendor_capabilities.
     */
    cursor?: vendor_capabilitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendor_capabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendor_capabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vendor_capabilities.
     */
    distinct?: Vendor_capabilitiesScalarFieldEnum | Vendor_capabilitiesScalarFieldEnum[]
  }

  /**
   * vendor_capabilities findFirstOrThrow
   */
  export type vendor_capabilitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_capabilities
     */
    select?: vendor_capabilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_capabilities
     */
    omit?: vendor_capabilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendor_capabilitiesInclude<ExtArgs> | null
    /**
     * Filter, which vendor_capabilities to fetch.
     */
    where?: vendor_capabilitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendor_capabilities to fetch.
     */
    orderBy?: vendor_capabilitiesOrderByWithRelationInput | vendor_capabilitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vendor_capabilities.
     */
    cursor?: vendor_capabilitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendor_capabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendor_capabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vendor_capabilities.
     */
    distinct?: Vendor_capabilitiesScalarFieldEnum | Vendor_capabilitiesScalarFieldEnum[]
  }

  /**
   * vendor_capabilities findMany
   */
  export type vendor_capabilitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_capabilities
     */
    select?: vendor_capabilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_capabilities
     */
    omit?: vendor_capabilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendor_capabilitiesInclude<ExtArgs> | null
    /**
     * Filter, which vendor_capabilities to fetch.
     */
    where?: vendor_capabilitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendor_capabilities to fetch.
     */
    orderBy?: vendor_capabilitiesOrderByWithRelationInput | vendor_capabilitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vendor_capabilities.
     */
    cursor?: vendor_capabilitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendor_capabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendor_capabilities.
     */
    skip?: number
    distinct?: Vendor_capabilitiesScalarFieldEnum | Vendor_capabilitiesScalarFieldEnum[]
  }

  /**
   * vendor_capabilities create
   */
  export type vendor_capabilitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_capabilities
     */
    select?: vendor_capabilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_capabilities
     */
    omit?: vendor_capabilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendor_capabilitiesInclude<ExtArgs> | null
    /**
     * The data needed to create a vendor_capabilities.
     */
    data: XOR<vendor_capabilitiesCreateInput, vendor_capabilitiesUncheckedCreateInput>
  }

  /**
   * vendor_capabilities createMany
   */
  export type vendor_capabilitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vendor_capabilities.
     */
    data: vendor_capabilitiesCreateManyInput | vendor_capabilitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vendor_capabilities createManyAndReturn
   */
  export type vendor_capabilitiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_capabilities
     */
    select?: vendor_capabilitiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_capabilities
     */
    omit?: vendor_capabilitiesOmit<ExtArgs> | null
    /**
     * The data used to create many vendor_capabilities.
     */
    data: vendor_capabilitiesCreateManyInput | vendor_capabilitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vendor_capabilities update
   */
  export type vendor_capabilitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_capabilities
     */
    select?: vendor_capabilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_capabilities
     */
    omit?: vendor_capabilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendor_capabilitiesInclude<ExtArgs> | null
    /**
     * The data needed to update a vendor_capabilities.
     */
    data: XOR<vendor_capabilitiesUpdateInput, vendor_capabilitiesUncheckedUpdateInput>
    /**
     * Choose, which vendor_capabilities to update.
     */
    where: vendor_capabilitiesWhereUniqueInput
  }

  /**
   * vendor_capabilities updateMany
   */
  export type vendor_capabilitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vendor_capabilities.
     */
    data: XOR<vendor_capabilitiesUpdateManyMutationInput, vendor_capabilitiesUncheckedUpdateManyInput>
    /**
     * Filter which vendor_capabilities to update
     */
    where?: vendor_capabilitiesWhereInput
    /**
     * Limit how many vendor_capabilities to update.
     */
    limit?: number
  }

  /**
   * vendor_capabilities updateManyAndReturn
   */
  export type vendor_capabilitiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_capabilities
     */
    select?: vendor_capabilitiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_capabilities
     */
    omit?: vendor_capabilitiesOmit<ExtArgs> | null
    /**
     * The data used to update vendor_capabilities.
     */
    data: XOR<vendor_capabilitiesUpdateManyMutationInput, vendor_capabilitiesUncheckedUpdateManyInput>
    /**
     * Filter which vendor_capabilities to update
     */
    where?: vendor_capabilitiesWhereInput
    /**
     * Limit how many vendor_capabilities to update.
     */
    limit?: number
  }

  /**
   * vendor_capabilities upsert
   */
  export type vendor_capabilitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_capabilities
     */
    select?: vendor_capabilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_capabilities
     */
    omit?: vendor_capabilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendor_capabilitiesInclude<ExtArgs> | null
    /**
     * The filter to search for the vendor_capabilities to update in case it exists.
     */
    where: vendor_capabilitiesWhereUniqueInput
    /**
     * In case the vendor_capabilities found by the `where` argument doesn't exist, create a new vendor_capabilities with this data.
     */
    create: XOR<vendor_capabilitiesCreateInput, vendor_capabilitiesUncheckedCreateInput>
    /**
     * In case the vendor_capabilities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vendor_capabilitiesUpdateInput, vendor_capabilitiesUncheckedUpdateInput>
  }

  /**
   * vendor_capabilities delete
   */
  export type vendor_capabilitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_capabilities
     */
    select?: vendor_capabilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_capabilities
     */
    omit?: vendor_capabilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendor_capabilitiesInclude<ExtArgs> | null
    /**
     * Filter which vendor_capabilities to delete.
     */
    where: vendor_capabilitiesWhereUniqueInput
  }

  /**
   * vendor_capabilities deleteMany
   */
  export type vendor_capabilitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vendor_capabilities to delete
     */
    where?: vendor_capabilitiesWhereInput
    /**
     * Limit how many vendor_capabilities to delete.
     */
    limit?: number
  }

  /**
   * vendor_capabilities.subCategories
   */
  export type vendor_capabilities$subCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_capability_sub_categories
     */
    select?: vendor_capability_sub_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_capability_sub_categories
     */
    omit?: vendor_capability_sub_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendor_capability_sub_categoriesInclude<ExtArgs> | null
    where?: vendor_capability_sub_categoriesWhereInput
    orderBy?: vendor_capability_sub_categoriesOrderByWithRelationInput | vendor_capability_sub_categoriesOrderByWithRelationInput[]
    cursor?: vendor_capability_sub_categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Vendor_capability_sub_categoriesScalarFieldEnum | Vendor_capability_sub_categoriesScalarFieldEnum[]
  }

  /**
   * vendor_capabilities without action
   */
  export type vendor_capabilitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_capabilities
     */
    select?: vendor_capabilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_capabilities
     */
    omit?: vendor_capabilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendor_capabilitiesInclude<ExtArgs> | null
  }


  /**
   * Model vendor_capability_sub_categories
   */

  export type AggregateVendor_capability_sub_categories = {
    _count: Vendor_capability_sub_categoriesCountAggregateOutputType | null
    _min: Vendor_capability_sub_categoriesMinAggregateOutputType | null
    _max: Vendor_capability_sub_categoriesMaxAggregateOutputType | null
  }

  export type Vendor_capability_sub_categoriesMinAggregateOutputType = {
    id: string | null
    name: string | null
    vendor_capability_id: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Vendor_capability_sub_categoriesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    vendor_capability_id: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Vendor_capability_sub_categoriesCountAggregateOutputType = {
    id: number
    name: number
    vendor_capability_id: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Vendor_capability_sub_categoriesMinAggregateInputType = {
    id?: true
    name?: true
    vendor_capability_id?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Vendor_capability_sub_categoriesMaxAggregateInputType = {
    id?: true
    name?: true
    vendor_capability_id?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Vendor_capability_sub_categoriesCountAggregateInputType = {
    id?: true
    name?: true
    vendor_capability_id?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Vendor_capability_sub_categoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vendor_capability_sub_categories to aggregate.
     */
    where?: vendor_capability_sub_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendor_capability_sub_categories to fetch.
     */
    orderBy?: vendor_capability_sub_categoriesOrderByWithRelationInput | vendor_capability_sub_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vendor_capability_sub_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendor_capability_sub_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendor_capability_sub_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vendor_capability_sub_categories
    **/
    _count?: true | Vendor_capability_sub_categoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vendor_capability_sub_categoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vendor_capability_sub_categoriesMaxAggregateInputType
  }

  export type GetVendor_capability_sub_categoriesAggregateType<T extends Vendor_capability_sub_categoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateVendor_capability_sub_categories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendor_capability_sub_categories[P]>
      : GetScalarType<T[P], AggregateVendor_capability_sub_categories[P]>
  }




  export type vendor_capability_sub_categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vendor_capability_sub_categoriesWhereInput
    orderBy?: vendor_capability_sub_categoriesOrderByWithAggregationInput | vendor_capability_sub_categoriesOrderByWithAggregationInput[]
    by: Vendor_capability_sub_categoriesScalarFieldEnum[] | Vendor_capability_sub_categoriesScalarFieldEnum
    having?: vendor_capability_sub_categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vendor_capability_sub_categoriesCountAggregateInputType | true
    _min?: Vendor_capability_sub_categoriesMinAggregateInputType
    _max?: Vendor_capability_sub_categoriesMaxAggregateInputType
  }

  export type Vendor_capability_sub_categoriesGroupByOutputType = {
    id: string
    name: string
    vendor_capability_id: string
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: Vendor_capability_sub_categoriesCountAggregateOutputType | null
    _min: Vendor_capability_sub_categoriesMinAggregateOutputType | null
    _max: Vendor_capability_sub_categoriesMaxAggregateOutputType | null
  }

  type GetVendor_capability_sub_categoriesGroupByPayload<T extends vendor_capability_sub_categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vendor_capability_sub_categoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vendor_capability_sub_categoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vendor_capability_sub_categoriesGroupByOutputType[P]>
            : GetScalarType<T[P], Vendor_capability_sub_categoriesGroupByOutputType[P]>
        }
      >
    >


  export type vendor_capability_sub_categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    vendor_capability_id?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    capability?: boolean | vendor_capabilitiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendor_capability_sub_categories"]>

  export type vendor_capability_sub_categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    vendor_capability_id?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    capability?: boolean | vendor_capabilitiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendor_capability_sub_categories"]>

  export type vendor_capability_sub_categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    vendor_capability_id?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    capability?: boolean | vendor_capabilitiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendor_capability_sub_categories"]>

  export type vendor_capability_sub_categoriesSelectScalar = {
    id?: boolean
    name?: boolean
    vendor_capability_id?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type vendor_capability_sub_categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "vendor_capability_id" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["vendor_capability_sub_categories"]>
  export type vendor_capability_sub_categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    capability?: boolean | vendor_capabilitiesDefaultArgs<ExtArgs>
  }
  export type vendor_capability_sub_categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    capability?: boolean | vendor_capabilitiesDefaultArgs<ExtArgs>
  }
  export type vendor_capability_sub_categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    capability?: boolean | vendor_capabilitiesDefaultArgs<ExtArgs>
  }

  export type $vendor_capability_sub_categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vendor_capability_sub_categories"
    objects: {
      capability: Prisma.$vendor_capabilitiesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      vendor_capability_id: string
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["vendor_capability_sub_categories"]>
    composites: {}
  }

  type vendor_capability_sub_categoriesGetPayload<S extends boolean | null | undefined | vendor_capability_sub_categoriesDefaultArgs> = $Result.GetResult<Prisma.$vendor_capability_sub_categoriesPayload, S>

  type vendor_capability_sub_categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vendor_capability_sub_categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Vendor_capability_sub_categoriesCountAggregateInputType | true
    }

  export interface vendor_capability_sub_categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vendor_capability_sub_categories'], meta: { name: 'vendor_capability_sub_categories' } }
    /**
     * Find zero or one Vendor_capability_sub_categories that matches the filter.
     * @param {vendor_capability_sub_categoriesFindUniqueArgs} args - Arguments to find a Vendor_capability_sub_categories
     * @example
     * // Get one Vendor_capability_sub_categories
     * const vendor_capability_sub_categories = await prisma.vendor_capability_sub_categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vendor_capability_sub_categoriesFindUniqueArgs>(args: SelectSubset<T, vendor_capability_sub_categoriesFindUniqueArgs<ExtArgs>>): Prisma__vendor_capability_sub_categoriesClient<$Result.GetResult<Prisma.$vendor_capability_sub_categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendor_capability_sub_categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vendor_capability_sub_categoriesFindUniqueOrThrowArgs} args - Arguments to find a Vendor_capability_sub_categories
     * @example
     * // Get one Vendor_capability_sub_categories
     * const vendor_capability_sub_categories = await prisma.vendor_capability_sub_categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vendor_capability_sub_categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, vendor_capability_sub_categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vendor_capability_sub_categoriesClient<$Result.GetResult<Prisma.$vendor_capability_sub_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor_capability_sub_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendor_capability_sub_categoriesFindFirstArgs} args - Arguments to find a Vendor_capability_sub_categories
     * @example
     * // Get one Vendor_capability_sub_categories
     * const vendor_capability_sub_categories = await prisma.vendor_capability_sub_categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vendor_capability_sub_categoriesFindFirstArgs>(args?: SelectSubset<T, vendor_capability_sub_categoriesFindFirstArgs<ExtArgs>>): Prisma__vendor_capability_sub_categoriesClient<$Result.GetResult<Prisma.$vendor_capability_sub_categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor_capability_sub_categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendor_capability_sub_categoriesFindFirstOrThrowArgs} args - Arguments to find a Vendor_capability_sub_categories
     * @example
     * // Get one Vendor_capability_sub_categories
     * const vendor_capability_sub_categories = await prisma.vendor_capability_sub_categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vendor_capability_sub_categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, vendor_capability_sub_categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__vendor_capability_sub_categoriesClient<$Result.GetResult<Prisma.$vendor_capability_sub_categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendor_capability_sub_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendor_capability_sub_categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendor_capability_sub_categories
     * const vendor_capability_sub_categories = await prisma.vendor_capability_sub_categories.findMany()
     * 
     * // Get first 10 Vendor_capability_sub_categories
     * const vendor_capability_sub_categories = await prisma.vendor_capability_sub_categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendor_capability_sub_categoriesWithIdOnly = await prisma.vendor_capability_sub_categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends vendor_capability_sub_categoriesFindManyArgs>(args?: SelectSubset<T, vendor_capability_sub_categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendor_capability_sub_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendor_capability_sub_categories.
     * @param {vendor_capability_sub_categoriesCreateArgs} args - Arguments to create a Vendor_capability_sub_categories.
     * @example
     * // Create one Vendor_capability_sub_categories
     * const Vendor_capability_sub_categories = await prisma.vendor_capability_sub_categories.create({
     *   data: {
     *     // ... data to create a Vendor_capability_sub_categories
     *   }
     * })
     * 
     */
    create<T extends vendor_capability_sub_categoriesCreateArgs>(args: SelectSubset<T, vendor_capability_sub_categoriesCreateArgs<ExtArgs>>): Prisma__vendor_capability_sub_categoriesClient<$Result.GetResult<Prisma.$vendor_capability_sub_categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendor_capability_sub_categories.
     * @param {vendor_capability_sub_categoriesCreateManyArgs} args - Arguments to create many Vendor_capability_sub_categories.
     * @example
     * // Create many Vendor_capability_sub_categories
     * const vendor_capability_sub_categories = await prisma.vendor_capability_sub_categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vendor_capability_sub_categoriesCreateManyArgs>(args?: SelectSubset<T, vendor_capability_sub_categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vendor_capability_sub_categories and returns the data saved in the database.
     * @param {vendor_capability_sub_categoriesCreateManyAndReturnArgs} args - Arguments to create many Vendor_capability_sub_categories.
     * @example
     * // Create many Vendor_capability_sub_categories
     * const vendor_capability_sub_categories = await prisma.vendor_capability_sub_categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vendor_capability_sub_categories and only return the `id`
     * const vendor_capability_sub_categoriesWithIdOnly = await prisma.vendor_capability_sub_categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends vendor_capability_sub_categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, vendor_capability_sub_categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendor_capability_sub_categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vendor_capability_sub_categories.
     * @param {vendor_capability_sub_categoriesDeleteArgs} args - Arguments to delete one Vendor_capability_sub_categories.
     * @example
     * // Delete one Vendor_capability_sub_categories
     * const Vendor_capability_sub_categories = await prisma.vendor_capability_sub_categories.delete({
     *   where: {
     *     // ... filter to delete one Vendor_capability_sub_categories
     *   }
     * })
     * 
     */
    delete<T extends vendor_capability_sub_categoriesDeleteArgs>(args: SelectSubset<T, vendor_capability_sub_categoriesDeleteArgs<ExtArgs>>): Prisma__vendor_capability_sub_categoriesClient<$Result.GetResult<Prisma.$vendor_capability_sub_categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendor_capability_sub_categories.
     * @param {vendor_capability_sub_categoriesUpdateArgs} args - Arguments to update one Vendor_capability_sub_categories.
     * @example
     * // Update one Vendor_capability_sub_categories
     * const vendor_capability_sub_categories = await prisma.vendor_capability_sub_categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vendor_capability_sub_categoriesUpdateArgs>(args: SelectSubset<T, vendor_capability_sub_categoriesUpdateArgs<ExtArgs>>): Prisma__vendor_capability_sub_categoriesClient<$Result.GetResult<Prisma.$vendor_capability_sub_categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendor_capability_sub_categories.
     * @param {vendor_capability_sub_categoriesDeleteManyArgs} args - Arguments to filter Vendor_capability_sub_categories to delete.
     * @example
     * // Delete a few Vendor_capability_sub_categories
     * const { count } = await prisma.vendor_capability_sub_categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vendor_capability_sub_categoriesDeleteManyArgs>(args?: SelectSubset<T, vendor_capability_sub_categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendor_capability_sub_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendor_capability_sub_categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendor_capability_sub_categories
     * const vendor_capability_sub_categories = await prisma.vendor_capability_sub_categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vendor_capability_sub_categoriesUpdateManyArgs>(args: SelectSubset<T, vendor_capability_sub_categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendor_capability_sub_categories and returns the data updated in the database.
     * @param {vendor_capability_sub_categoriesUpdateManyAndReturnArgs} args - Arguments to update many Vendor_capability_sub_categories.
     * @example
     * // Update many Vendor_capability_sub_categories
     * const vendor_capability_sub_categories = await prisma.vendor_capability_sub_categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vendor_capability_sub_categories and only return the `id`
     * const vendor_capability_sub_categoriesWithIdOnly = await prisma.vendor_capability_sub_categories.updateManyAndReturn({
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
    updateManyAndReturn<T extends vendor_capability_sub_categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, vendor_capability_sub_categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendor_capability_sub_categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vendor_capability_sub_categories.
     * @param {vendor_capability_sub_categoriesUpsertArgs} args - Arguments to update or create a Vendor_capability_sub_categories.
     * @example
     * // Update or create a Vendor_capability_sub_categories
     * const vendor_capability_sub_categories = await prisma.vendor_capability_sub_categories.upsert({
     *   create: {
     *     // ... data to create a Vendor_capability_sub_categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendor_capability_sub_categories we want to update
     *   }
     * })
     */
    upsert<T extends vendor_capability_sub_categoriesUpsertArgs>(args: SelectSubset<T, vendor_capability_sub_categoriesUpsertArgs<ExtArgs>>): Prisma__vendor_capability_sub_categoriesClient<$Result.GetResult<Prisma.$vendor_capability_sub_categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendor_capability_sub_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendor_capability_sub_categoriesCountArgs} args - Arguments to filter Vendor_capability_sub_categories to count.
     * @example
     * // Count the number of Vendor_capability_sub_categories
     * const count = await prisma.vendor_capability_sub_categories.count({
     *   where: {
     *     // ... the filter for the Vendor_capability_sub_categories we want to count
     *   }
     * })
    **/
    count<T extends vendor_capability_sub_categoriesCountArgs>(
      args?: Subset<T, vendor_capability_sub_categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vendor_capability_sub_categoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendor_capability_sub_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vendor_capability_sub_categoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Vendor_capability_sub_categoriesAggregateArgs>(args: Subset<T, Vendor_capability_sub_categoriesAggregateArgs>): Prisma.PrismaPromise<GetVendor_capability_sub_categoriesAggregateType<T>>

    /**
     * Group by Vendor_capability_sub_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendor_capability_sub_categoriesGroupByArgs} args - Group by arguments.
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
      T extends vendor_capability_sub_categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vendor_capability_sub_categoriesGroupByArgs['orderBy'] }
        : { orderBy?: vendor_capability_sub_categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, vendor_capability_sub_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendor_capability_sub_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vendor_capability_sub_categories model
   */
  readonly fields: vendor_capability_sub_categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vendor_capability_sub_categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vendor_capability_sub_categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    capability<T extends vendor_capabilitiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, vendor_capabilitiesDefaultArgs<ExtArgs>>): Prisma__vendor_capabilitiesClient<$Result.GetResult<Prisma.$vendor_capabilitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the vendor_capability_sub_categories model
   */
  interface vendor_capability_sub_categoriesFieldRefs {
    readonly id: FieldRef<"vendor_capability_sub_categories", 'String'>
    readonly name: FieldRef<"vendor_capability_sub_categories", 'String'>
    readonly vendor_capability_id: FieldRef<"vendor_capability_sub_categories", 'String'>
    readonly is_active: FieldRef<"vendor_capability_sub_categories", 'Boolean'>
    readonly created_at: FieldRef<"vendor_capability_sub_categories", 'DateTime'>
    readonly updated_at: FieldRef<"vendor_capability_sub_categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * vendor_capability_sub_categories findUnique
   */
  export type vendor_capability_sub_categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_capability_sub_categories
     */
    select?: vendor_capability_sub_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_capability_sub_categories
     */
    omit?: vendor_capability_sub_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendor_capability_sub_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which vendor_capability_sub_categories to fetch.
     */
    where: vendor_capability_sub_categoriesWhereUniqueInput
  }

  /**
   * vendor_capability_sub_categories findUniqueOrThrow
   */
  export type vendor_capability_sub_categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_capability_sub_categories
     */
    select?: vendor_capability_sub_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_capability_sub_categories
     */
    omit?: vendor_capability_sub_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendor_capability_sub_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which vendor_capability_sub_categories to fetch.
     */
    where: vendor_capability_sub_categoriesWhereUniqueInput
  }

  /**
   * vendor_capability_sub_categories findFirst
   */
  export type vendor_capability_sub_categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_capability_sub_categories
     */
    select?: vendor_capability_sub_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_capability_sub_categories
     */
    omit?: vendor_capability_sub_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendor_capability_sub_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which vendor_capability_sub_categories to fetch.
     */
    where?: vendor_capability_sub_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendor_capability_sub_categories to fetch.
     */
    orderBy?: vendor_capability_sub_categoriesOrderByWithRelationInput | vendor_capability_sub_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vendor_capability_sub_categories.
     */
    cursor?: vendor_capability_sub_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendor_capability_sub_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendor_capability_sub_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vendor_capability_sub_categories.
     */
    distinct?: Vendor_capability_sub_categoriesScalarFieldEnum | Vendor_capability_sub_categoriesScalarFieldEnum[]
  }

  /**
   * vendor_capability_sub_categories findFirstOrThrow
   */
  export type vendor_capability_sub_categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_capability_sub_categories
     */
    select?: vendor_capability_sub_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_capability_sub_categories
     */
    omit?: vendor_capability_sub_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendor_capability_sub_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which vendor_capability_sub_categories to fetch.
     */
    where?: vendor_capability_sub_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendor_capability_sub_categories to fetch.
     */
    orderBy?: vendor_capability_sub_categoriesOrderByWithRelationInput | vendor_capability_sub_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vendor_capability_sub_categories.
     */
    cursor?: vendor_capability_sub_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendor_capability_sub_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendor_capability_sub_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vendor_capability_sub_categories.
     */
    distinct?: Vendor_capability_sub_categoriesScalarFieldEnum | Vendor_capability_sub_categoriesScalarFieldEnum[]
  }

  /**
   * vendor_capability_sub_categories findMany
   */
  export type vendor_capability_sub_categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_capability_sub_categories
     */
    select?: vendor_capability_sub_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_capability_sub_categories
     */
    omit?: vendor_capability_sub_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendor_capability_sub_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which vendor_capability_sub_categories to fetch.
     */
    where?: vendor_capability_sub_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendor_capability_sub_categories to fetch.
     */
    orderBy?: vendor_capability_sub_categoriesOrderByWithRelationInput | vendor_capability_sub_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vendor_capability_sub_categories.
     */
    cursor?: vendor_capability_sub_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendor_capability_sub_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendor_capability_sub_categories.
     */
    skip?: number
    distinct?: Vendor_capability_sub_categoriesScalarFieldEnum | Vendor_capability_sub_categoriesScalarFieldEnum[]
  }

  /**
   * vendor_capability_sub_categories create
   */
  export type vendor_capability_sub_categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_capability_sub_categories
     */
    select?: vendor_capability_sub_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_capability_sub_categories
     */
    omit?: vendor_capability_sub_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendor_capability_sub_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a vendor_capability_sub_categories.
     */
    data: XOR<vendor_capability_sub_categoriesCreateInput, vendor_capability_sub_categoriesUncheckedCreateInput>
  }

  /**
   * vendor_capability_sub_categories createMany
   */
  export type vendor_capability_sub_categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vendor_capability_sub_categories.
     */
    data: vendor_capability_sub_categoriesCreateManyInput | vendor_capability_sub_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vendor_capability_sub_categories createManyAndReturn
   */
  export type vendor_capability_sub_categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_capability_sub_categories
     */
    select?: vendor_capability_sub_categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_capability_sub_categories
     */
    omit?: vendor_capability_sub_categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many vendor_capability_sub_categories.
     */
    data: vendor_capability_sub_categoriesCreateManyInput | vendor_capability_sub_categoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendor_capability_sub_categoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * vendor_capability_sub_categories update
   */
  export type vendor_capability_sub_categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_capability_sub_categories
     */
    select?: vendor_capability_sub_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_capability_sub_categories
     */
    omit?: vendor_capability_sub_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendor_capability_sub_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a vendor_capability_sub_categories.
     */
    data: XOR<vendor_capability_sub_categoriesUpdateInput, vendor_capability_sub_categoriesUncheckedUpdateInput>
    /**
     * Choose, which vendor_capability_sub_categories to update.
     */
    where: vendor_capability_sub_categoriesWhereUniqueInput
  }

  /**
   * vendor_capability_sub_categories updateMany
   */
  export type vendor_capability_sub_categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vendor_capability_sub_categories.
     */
    data: XOR<vendor_capability_sub_categoriesUpdateManyMutationInput, vendor_capability_sub_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which vendor_capability_sub_categories to update
     */
    where?: vendor_capability_sub_categoriesWhereInput
    /**
     * Limit how many vendor_capability_sub_categories to update.
     */
    limit?: number
  }

  /**
   * vendor_capability_sub_categories updateManyAndReturn
   */
  export type vendor_capability_sub_categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_capability_sub_categories
     */
    select?: vendor_capability_sub_categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_capability_sub_categories
     */
    omit?: vendor_capability_sub_categoriesOmit<ExtArgs> | null
    /**
     * The data used to update vendor_capability_sub_categories.
     */
    data: XOR<vendor_capability_sub_categoriesUpdateManyMutationInput, vendor_capability_sub_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which vendor_capability_sub_categories to update
     */
    where?: vendor_capability_sub_categoriesWhereInput
    /**
     * Limit how many vendor_capability_sub_categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendor_capability_sub_categoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * vendor_capability_sub_categories upsert
   */
  export type vendor_capability_sub_categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_capability_sub_categories
     */
    select?: vendor_capability_sub_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_capability_sub_categories
     */
    omit?: vendor_capability_sub_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendor_capability_sub_categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the vendor_capability_sub_categories to update in case it exists.
     */
    where: vendor_capability_sub_categoriesWhereUniqueInput
    /**
     * In case the vendor_capability_sub_categories found by the `where` argument doesn't exist, create a new vendor_capability_sub_categories with this data.
     */
    create: XOR<vendor_capability_sub_categoriesCreateInput, vendor_capability_sub_categoriesUncheckedCreateInput>
    /**
     * In case the vendor_capability_sub_categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vendor_capability_sub_categoriesUpdateInput, vendor_capability_sub_categoriesUncheckedUpdateInput>
  }

  /**
   * vendor_capability_sub_categories delete
   */
  export type vendor_capability_sub_categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_capability_sub_categories
     */
    select?: vendor_capability_sub_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_capability_sub_categories
     */
    omit?: vendor_capability_sub_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendor_capability_sub_categoriesInclude<ExtArgs> | null
    /**
     * Filter which vendor_capability_sub_categories to delete.
     */
    where: vendor_capability_sub_categoriesWhereUniqueInput
  }

  /**
   * vendor_capability_sub_categories deleteMany
   */
  export type vendor_capability_sub_categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vendor_capability_sub_categories to delete
     */
    where?: vendor_capability_sub_categoriesWhereInput
    /**
     * Limit how many vendor_capability_sub_categories to delete.
     */
    limit?: number
  }

  /**
   * vendor_capability_sub_categories without action
   */
  export type vendor_capability_sub_categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_capability_sub_categories
     */
    select?: vendor_capability_sub_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_capability_sub_categories
     */
    omit?: vendor_capability_sub_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendor_capability_sub_categoriesInclude<ExtArgs> | null
  }


  /**
   * Model vendor_certifications
   */

  export type AggregateVendor_certifications = {
    _count: Vendor_certificationsCountAggregateOutputType | null
    _min: Vendor_certificationsMinAggregateOutputType | null
    _max: Vendor_certificationsMaxAggregateOutputType | null
  }

  export type Vendor_certificationsMinAggregateOutputType = {
    id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Vendor_certificationsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Vendor_certificationsCountAggregateOutputType = {
    id: number
    name: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Vendor_certificationsMinAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Vendor_certificationsMaxAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Vendor_certificationsCountAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Vendor_certificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vendor_certifications to aggregate.
     */
    where?: vendor_certificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendor_certifications to fetch.
     */
    orderBy?: vendor_certificationsOrderByWithRelationInput | vendor_certificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vendor_certificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendor_certifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendor_certifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vendor_certifications
    **/
    _count?: true | Vendor_certificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vendor_certificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vendor_certificationsMaxAggregateInputType
  }

  export type GetVendor_certificationsAggregateType<T extends Vendor_certificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateVendor_certifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendor_certifications[P]>
      : GetScalarType<T[P], AggregateVendor_certifications[P]>
  }




  export type vendor_certificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vendor_certificationsWhereInput
    orderBy?: vendor_certificationsOrderByWithAggregationInput | vendor_certificationsOrderByWithAggregationInput[]
    by: Vendor_certificationsScalarFieldEnum[] | Vendor_certificationsScalarFieldEnum
    having?: vendor_certificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vendor_certificationsCountAggregateInputType | true
    _min?: Vendor_certificationsMinAggregateInputType
    _max?: Vendor_certificationsMaxAggregateInputType
  }

  export type Vendor_certificationsGroupByOutputType = {
    id: string
    name: string
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: Vendor_certificationsCountAggregateOutputType | null
    _min: Vendor_certificationsMinAggregateOutputType | null
    _max: Vendor_certificationsMaxAggregateOutputType | null
  }

  type GetVendor_certificationsGroupByPayload<T extends vendor_certificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vendor_certificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vendor_certificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vendor_certificationsGroupByOutputType[P]>
            : GetScalarType<T[P], Vendor_certificationsGroupByOutputType[P]>
        }
      >
    >


  export type vendor_certificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["vendor_certifications"]>

  export type vendor_certificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["vendor_certifications"]>

  export type vendor_certificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["vendor_certifications"]>

  export type vendor_certificationsSelectScalar = {
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type vendor_certificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["vendor_certifications"]>

  export type $vendor_certificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vendor_certifications"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["vendor_certifications"]>
    composites: {}
  }

  type vendor_certificationsGetPayload<S extends boolean | null | undefined | vendor_certificationsDefaultArgs> = $Result.GetResult<Prisma.$vendor_certificationsPayload, S>

  type vendor_certificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vendor_certificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Vendor_certificationsCountAggregateInputType | true
    }

  export interface vendor_certificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vendor_certifications'], meta: { name: 'vendor_certifications' } }
    /**
     * Find zero or one Vendor_certifications that matches the filter.
     * @param {vendor_certificationsFindUniqueArgs} args - Arguments to find a Vendor_certifications
     * @example
     * // Get one Vendor_certifications
     * const vendor_certifications = await prisma.vendor_certifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vendor_certificationsFindUniqueArgs>(args: SelectSubset<T, vendor_certificationsFindUniqueArgs<ExtArgs>>): Prisma__vendor_certificationsClient<$Result.GetResult<Prisma.$vendor_certificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendor_certifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vendor_certificationsFindUniqueOrThrowArgs} args - Arguments to find a Vendor_certifications
     * @example
     * // Get one Vendor_certifications
     * const vendor_certifications = await prisma.vendor_certifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vendor_certificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, vendor_certificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vendor_certificationsClient<$Result.GetResult<Prisma.$vendor_certificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor_certifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendor_certificationsFindFirstArgs} args - Arguments to find a Vendor_certifications
     * @example
     * // Get one Vendor_certifications
     * const vendor_certifications = await prisma.vendor_certifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vendor_certificationsFindFirstArgs>(args?: SelectSubset<T, vendor_certificationsFindFirstArgs<ExtArgs>>): Prisma__vendor_certificationsClient<$Result.GetResult<Prisma.$vendor_certificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor_certifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendor_certificationsFindFirstOrThrowArgs} args - Arguments to find a Vendor_certifications
     * @example
     * // Get one Vendor_certifications
     * const vendor_certifications = await prisma.vendor_certifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vendor_certificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, vendor_certificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__vendor_certificationsClient<$Result.GetResult<Prisma.$vendor_certificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendor_certifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendor_certificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendor_certifications
     * const vendor_certifications = await prisma.vendor_certifications.findMany()
     * 
     * // Get first 10 Vendor_certifications
     * const vendor_certifications = await prisma.vendor_certifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendor_certificationsWithIdOnly = await prisma.vendor_certifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends vendor_certificationsFindManyArgs>(args?: SelectSubset<T, vendor_certificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendor_certificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendor_certifications.
     * @param {vendor_certificationsCreateArgs} args - Arguments to create a Vendor_certifications.
     * @example
     * // Create one Vendor_certifications
     * const Vendor_certifications = await prisma.vendor_certifications.create({
     *   data: {
     *     // ... data to create a Vendor_certifications
     *   }
     * })
     * 
     */
    create<T extends vendor_certificationsCreateArgs>(args: SelectSubset<T, vendor_certificationsCreateArgs<ExtArgs>>): Prisma__vendor_certificationsClient<$Result.GetResult<Prisma.$vendor_certificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendor_certifications.
     * @param {vendor_certificationsCreateManyArgs} args - Arguments to create many Vendor_certifications.
     * @example
     * // Create many Vendor_certifications
     * const vendor_certifications = await prisma.vendor_certifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vendor_certificationsCreateManyArgs>(args?: SelectSubset<T, vendor_certificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vendor_certifications and returns the data saved in the database.
     * @param {vendor_certificationsCreateManyAndReturnArgs} args - Arguments to create many Vendor_certifications.
     * @example
     * // Create many Vendor_certifications
     * const vendor_certifications = await prisma.vendor_certifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vendor_certifications and only return the `id`
     * const vendor_certificationsWithIdOnly = await prisma.vendor_certifications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends vendor_certificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, vendor_certificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendor_certificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vendor_certifications.
     * @param {vendor_certificationsDeleteArgs} args - Arguments to delete one Vendor_certifications.
     * @example
     * // Delete one Vendor_certifications
     * const Vendor_certifications = await prisma.vendor_certifications.delete({
     *   where: {
     *     // ... filter to delete one Vendor_certifications
     *   }
     * })
     * 
     */
    delete<T extends vendor_certificationsDeleteArgs>(args: SelectSubset<T, vendor_certificationsDeleteArgs<ExtArgs>>): Prisma__vendor_certificationsClient<$Result.GetResult<Prisma.$vendor_certificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendor_certifications.
     * @param {vendor_certificationsUpdateArgs} args - Arguments to update one Vendor_certifications.
     * @example
     * // Update one Vendor_certifications
     * const vendor_certifications = await prisma.vendor_certifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vendor_certificationsUpdateArgs>(args: SelectSubset<T, vendor_certificationsUpdateArgs<ExtArgs>>): Prisma__vendor_certificationsClient<$Result.GetResult<Prisma.$vendor_certificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendor_certifications.
     * @param {vendor_certificationsDeleteManyArgs} args - Arguments to filter Vendor_certifications to delete.
     * @example
     * // Delete a few Vendor_certifications
     * const { count } = await prisma.vendor_certifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vendor_certificationsDeleteManyArgs>(args?: SelectSubset<T, vendor_certificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendor_certifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendor_certificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendor_certifications
     * const vendor_certifications = await prisma.vendor_certifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vendor_certificationsUpdateManyArgs>(args: SelectSubset<T, vendor_certificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendor_certifications and returns the data updated in the database.
     * @param {vendor_certificationsUpdateManyAndReturnArgs} args - Arguments to update many Vendor_certifications.
     * @example
     * // Update many Vendor_certifications
     * const vendor_certifications = await prisma.vendor_certifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vendor_certifications and only return the `id`
     * const vendor_certificationsWithIdOnly = await prisma.vendor_certifications.updateManyAndReturn({
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
    updateManyAndReturn<T extends vendor_certificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, vendor_certificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendor_certificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vendor_certifications.
     * @param {vendor_certificationsUpsertArgs} args - Arguments to update or create a Vendor_certifications.
     * @example
     * // Update or create a Vendor_certifications
     * const vendor_certifications = await prisma.vendor_certifications.upsert({
     *   create: {
     *     // ... data to create a Vendor_certifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendor_certifications we want to update
     *   }
     * })
     */
    upsert<T extends vendor_certificationsUpsertArgs>(args: SelectSubset<T, vendor_certificationsUpsertArgs<ExtArgs>>): Prisma__vendor_certificationsClient<$Result.GetResult<Prisma.$vendor_certificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendor_certifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendor_certificationsCountArgs} args - Arguments to filter Vendor_certifications to count.
     * @example
     * // Count the number of Vendor_certifications
     * const count = await prisma.vendor_certifications.count({
     *   where: {
     *     // ... the filter for the Vendor_certifications we want to count
     *   }
     * })
    **/
    count<T extends vendor_certificationsCountArgs>(
      args?: Subset<T, vendor_certificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vendor_certificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendor_certifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vendor_certificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Vendor_certificationsAggregateArgs>(args: Subset<T, Vendor_certificationsAggregateArgs>): Prisma.PrismaPromise<GetVendor_certificationsAggregateType<T>>

    /**
     * Group by Vendor_certifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendor_certificationsGroupByArgs} args - Group by arguments.
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
      T extends vendor_certificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vendor_certificationsGroupByArgs['orderBy'] }
        : { orderBy?: vendor_certificationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, vendor_certificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendor_certificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vendor_certifications model
   */
  readonly fields: vendor_certificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vendor_certifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vendor_certificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the vendor_certifications model
   */
  interface vendor_certificationsFieldRefs {
    readonly id: FieldRef<"vendor_certifications", 'String'>
    readonly name: FieldRef<"vendor_certifications", 'String'>
    readonly is_active: FieldRef<"vendor_certifications", 'Boolean'>
    readonly created_at: FieldRef<"vendor_certifications", 'DateTime'>
    readonly updated_at: FieldRef<"vendor_certifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * vendor_certifications findUnique
   */
  export type vendor_certificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_certifications
     */
    select?: vendor_certificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_certifications
     */
    omit?: vendor_certificationsOmit<ExtArgs> | null
    /**
     * Filter, which vendor_certifications to fetch.
     */
    where: vendor_certificationsWhereUniqueInput
  }

  /**
   * vendor_certifications findUniqueOrThrow
   */
  export type vendor_certificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_certifications
     */
    select?: vendor_certificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_certifications
     */
    omit?: vendor_certificationsOmit<ExtArgs> | null
    /**
     * Filter, which vendor_certifications to fetch.
     */
    where: vendor_certificationsWhereUniqueInput
  }

  /**
   * vendor_certifications findFirst
   */
  export type vendor_certificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_certifications
     */
    select?: vendor_certificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_certifications
     */
    omit?: vendor_certificationsOmit<ExtArgs> | null
    /**
     * Filter, which vendor_certifications to fetch.
     */
    where?: vendor_certificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendor_certifications to fetch.
     */
    orderBy?: vendor_certificationsOrderByWithRelationInput | vendor_certificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vendor_certifications.
     */
    cursor?: vendor_certificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendor_certifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendor_certifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vendor_certifications.
     */
    distinct?: Vendor_certificationsScalarFieldEnum | Vendor_certificationsScalarFieldEnum[]
  }

  /**
   * vendor_certifications findFirstOrThrow
   */
  export type vendor_certificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_certifications
     */
    select?: vendor_certificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_certifications
     */
    omit?: vendor_certificationsOmit<ExtArgs> | null
    /**
     * Filter, which vendor_certifications to fetch.
     */
    where?: vendor_certificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendor_certifications to fetch.
     */
    orderBy?: vendor_certificationsOrderByWithRelationInput | vendor_certificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vendor_certifications.
     */
    cursor?: vendor_certificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendor_certifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendor_certifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vendor_certifications.
     */
    distinct?: Vendor_certificationsScalarFieldEnum | Vendor_certificationsScalarFieldEnum[]
  }

  /**
   * vendor_certifications findMany
   */
  export type vendor_certificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_certifications
     */
    select?: vendor_certificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_certifications
     */
    omit?: vendor_certificationsOmit<ExtArgs> | null
    /**
     * Filter, which vendor_certifications to fetch.
     */
    where?: vendor_certificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendor_certifications to fetch.
     */
    orderBy?: vendor_certificationsOrderByWithRelationInput | vendor_certificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vendor_certifications.
     */
    cursor?: vendor_certificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendor_certifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendor_certifications.
     */
    skip?: number
    distinct?: Vendor_certificationsScalarFieldEnum | Vendor_certificationsScalarFieldEnum[]
  }

  /**
   * vendor_certifications create
   */
  export type vendor_certificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_certifications
     */
    select?: vendor_certificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_certifications
     */
    omit?: vendor_certificationsOmit<ExtArgs> | null
    /**
     * The data needed to create a vendor_certifications.
     */
    data: XOR<vendor_certificationsCreateInput, vendor_certificationsUncheckedCreateInput>
  }

  /**
   * vendor_certifications createMany
   */
  export type vendor_certificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vendor_certifications.
     */
    data: vendor_certificationsCreateManyInput | vendor_certificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vendor_certifications createManyAndReturn
   */
  export type vendor_certificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_certifications
     */
    select?: vendor_certificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_certifications
     */
    omit?: vendor_certificationsOmit<ExtArgs> | null
    /**
     * The data used to create many vendor_certifications.
     */
    data: vendor_certificationsCreateManyInput | vendor_certificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vendor_certifications update
   */
  export type vendor_certificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_certifications
     */
    select?: vendor_certificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_certifications
     */
    omit?: vendor_certificationsOmit<ExtArgs> | null
    /**
     * The data needed to update a vendor_certifications.
     */
    data: XOR<vendor_certificationsUpdateInput, vendor_certificationsUncheckedUpdateInput>
    /**
     * Choose, which vendor_certifications to update.
     */
    where: vendor_certificationsWhereUniqueInput
  }

  /**
   * vendor_certifications updateMany
   */
  export type vendor_certificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vendor_certifications.
     */
    data: XOR<vendor_certificationsUpdateManyMutationInput, vendor_certificationsUncheckedUpdateManyInput>
    /**
     * Filter which vendor_certifications to update
     */
    where?: vendor_certificationsWhereInput
    /**
     * Limit how many vendor_certifications to update.
     */
    limit?: number
  }

  /**
   * vendor_certifications updateManyAndReturn
   */
  export type vendor_certificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_certifications
     */
    select?: vendor_certificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_certifications
     */
    omit?: vendor_certificationsOmit<ExtArgs> | null
    /**
     * The data used to update vendor_certifications.
     */
    data: XOR<vendor_certificationsUpdateManyMutationInput, vendor_certificationsUncheckedUpdateManyInput>
    /**
     * Filter which vendor_certifications to update
     */
    where?: vendor_certificationsWhereInput
    /**
     * Limit how many vendor_certifications to update.
     */
    limit?: number
  }

  /**
   * vendor_certifications upsert
   */
  export type vendor_certificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_certifications
     */
    select?: vendor_certificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_certifications
     */
    omit?: vendor_certificationsOmit<ExtArgs> | null
    /**
     * The filter to search for the vendor_certifications to update in case it exists.
     */
    where: vendor_certificationsWhereUniqueInput
    /**
     * In case the vendor_certifications found by the `where` argument doesn't exist, create a new vendor_certifications with this data.
     */
    create: XOR<vendor_certificationsCreateInput, vendor_certificationsUncheckedCreateInput>
    /**
     * In case the vendor_certifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vendor_certificationsUpdateInput, vendor_certificationsUncheckedUpdateInput>
  }

  /**
   * vendor_certifications delete
   */
  export type vendor_certificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_certifications
     */
    select?: vendor_certificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_certifications
     */
    omit?: vendor_certificationsOmit<ExtArgs> | null
    /**
     * Filter which vendor_certifications to delete.
     */
    where: vendor_certificationsWhereUniqueInput
  }

  /**
   * vendor_certifications deleteMany
   */
  export type vendor_certificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vendor_certifications to delete
     */
    where?: vendor_certificationsWhereInput
    /**
     * Limit how many vendor_certifications to delete.
     */
    limit?: number
  }

  /**
   * vendor_certifications without action
   */
  export type vendor_certificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_certifications
     */
    select?: vendor_certificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_certifications
     */
    omit?: vendor_certificationsOmit<ExtArgs> | null
  }


  /**
   * Model vendor_flags
   */

  export type AggregateVendor_flags = {
    _count: Vendor_flagsCountAggregateOutputType | null
    _min: Vendor_flagsMinAggregateOutputType | null
    _max: Vendor_flagsMaxAggregateOutputType | null
  }

  export type Vendor_flagsMinAggregateOutputType = {
    id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Vendor_flagsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Vendor_flagsCountAggregateOutputType = {
    id: number
    name: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Vendor_flagsMinAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Vendor_flagsMaxAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type Vendor_flagsCountAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Vendor_flagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vendor_flags to aggregate.
     */
    where?: vendor_flagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendor_flags to fetch.
     */
    orderBy?: vendor_flagsOrderByWithRelationInput | vendor_flagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vendor_flagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendor_flags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendor_flags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vendor_flags
    **/
    _count?: true | Vendor_flagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vendor_flagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vendor_flagsMaxAggregateInputType
  }

  export type GetVendor_flagsAggregateType<T extends Vendor_flagsAggregateArgs> = {
        [P in keyof T & keyof AggregateVendor_flags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendor_flags[P]>
      : GetScalarType<T[P], AggregateVendor_flags[P]>
  }




  export type vendor_flagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vendor_flagsWhereInput
    orderBy?: vendor_flagsOrderByWithAggregationInput | vendor_flagsOrderByWithAggregationInput[]
    by: Vendor_flagsScalarFieldEnum[] | Vendor_flagsScalarFieldEnum
    having?: vendor_flagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vendor_flagsCountAggregateInputType | true
    _min?: Vendor_flagsMinAggregateInputType
    _max?: Vendor_flagsMaxAggregateInputType
  }

  export type Vendor_flagsGroupByOutputType = {
    id: string
    name: string
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: Vendor_flagsCountAggregateOutputType | null
    _min: Vendor_flagsMinAggregateOutputType | null
    _max: Vendor_flagsMaxAggregateOutputType | null
  }

  type GetVendor_flagsGroupByPayload<T extends vendor_flagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vendor_flagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vendor_flagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vendor_flagsGroupByOutputType[P]>
            : GetScalarType<T[P], Vendor_flagsGroupByOutputType[P]>
        }
      >
    >


  export type vendor_flagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["vendor_flags"]>

  export type vendor_flagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["vendor_flags"]>

  export type vendor_flagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["vendor_flags"]>

  export type vendor_flagsSelectScalar = {
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type vendor_flagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["vendor_flags"]>

  export type $vendor_flagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vendor_flags"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["vendor_flags"]>
    composites: {}
  }

  type vendor_flagsGetPayload<S extends boolean | null | undefined | vendor_flagsDefaultArgs> = $Result.GetResult<Prisma.$vendor_flagsPayload, S>

  type vendor_flagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vendor_flagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Vendor_flagsCountAggregateInputType | true
    }

  export interface vendor_flagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vendor_flags'], meta: { name: 'vendor_flags' } }
    /**
     * Find zero or one Vendor_flags that matches the filter.
     * @param {vendor_flagsFindUniqueArgs} args - Arguments to find a Vendor_flags
     * @example
     * // Get one Vendor_flags
     * const vendor_flags = await prisma.vendor_flags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vendor_flagsFindUniqueArgs>(args: SelectSubset<T, vendor_flagsFindUniqueArgs<ExtArgs>>): Prisma__vendor_flagsClient<$Result.GetResult<Prisma.$vendor_flagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendor_flags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vendor_flagsFindUniqueOrThrowArgs} args - Arguments to find a Vendor_flags
     * @example
     * // Get one Vendor_flags
     * const vendor_flags = await prisma.vendor_flags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vendor_flagsFindUniqueOrThrowArgs>(args: SelectSubset<T, vendor_flagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vendor_flagsClient<$Result.GetResult<Prisma.$vendor_flagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor_flags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendor_flagsFindFirstArgs} args - Arguments to find a Vendor_flags
     * @example
     * // Get one Vendor_flags
     * const vendor_flags = await prisma.vendor_flags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vendor_flagsFindFirstArgs>(args?: SelectSubset<T, vendor_flagsFindFirstArgs<ExtArgs>>): Prisma__vendor_flagsClient<$Result.GetResult<Prisma.$vendor_flagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor_flags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendor_flagsFindFirstOrThrowArgs} args - Arguments to find a Vendor_flags
     * @example
     * // Get one Vendor_flags
     * const vendor_flags = await prisma.vendor_flags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vendor_flagsFindFirstOrThrowArgs>(args?: SelectSubset<T, vendor_flagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__vendor_flagsClient<$Result.GetResult<Prisma.$vendor_flagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendor_flags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendor_flagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendor_flags
     * const vendor_flags = await prisma.vendor_flags.findMany()
     * 
     * // Get first 10 Vendor_flags
     * const vendor_flags = await prisma.vendor_flags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendor_flagsWithIdOnly = await prisma.vendor_flags.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends vendor_flagsFindManyArgs>(args?: SelectSubset<T, vendor_flagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendor_flagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendor_flags.
     * @param {vendor_flagsCreateArgs} args - Arguments to create a Vendor_flags.
     * @example
     * // Create one Vendor_flags
     * const Vendor_flags = await prisma.vendor_flags.create({
     *   data: {
     *     // ... data to create a Vendor_flags
     *   }
     * })
     * 
     */
    create<T extends vendor_flagsCreateArgs>(args: SelectSubset<T, vendor_flagsCreateArgs<ExtArgs>>): Prisma__vendor_flagsClient<$Result.GetResult<Prisma.$vendor_flagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendor_flags.
     * @param {vendor_flagsCreateManyArgs} args - Arguments to create many Vendor_flags.
     * @example
     * // Create many Vendor_flags
     * const vendor_flags = await prisma.vendor_flags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vendor_flagsCreateManyArgs>(args?: SelectSubset<T, vendor_flagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vendor_flags and returns the data saved in the database.
     * @param {vendor_flagsCreateManyAndReturnArgs} args - Arguments to create many Vendor_flags.
     * @example
     * // Create many Vendor_flags
     * const vendor_flags = await prisma.vendor_flags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vendor_flags and only return the `id`
     * const vendor_flagsWithIdOnly = await prisma.vendor_flags.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends vendor_flagsCreateManyAndReturnArgs>(args?: SelectSubset<T, vendor_flagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendor_flagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vendor_flags.
     * @param {vendor_flagsDeleteArgs} args - Arguments to delete one Vendor_flags.
     * @example
     * // Delete one Vendor_flags
     * const Vendor_flags = await prisma.vendor_flags.delete({
     *   where: {
     *     // ... filter to delete one Vendor_flags
     *   }
     * })
     * 
     */
    delete<T extends vendor_flagsDeleteArgs>(args: SelectSubset<T, vendor_flagsDeleteArgs<ExtArgs>>): Prisma__vendor_flagsClient<$Result.GetResult<Prisma.$vendor_flagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendor_flags.
     * @param {vendor_flagsUpdateArgs} args - Arguments to update one Vendor_flags.
     * @example
     * // Update one Vendor_flags
     * const vendor_flags = await prisma.vendor_flags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vendor_flagsUpdateArgs>(args: SelectSubset<T, vendor_flagsUpdateArgs<ExtArgs>>): Prisma__vendor_flagsClient<$Result.GetResult<Prisma.$vendor_flagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendor_flags.
     * @param {vendor_flagsDeleteManyArgs} args - Arguments to filter Vendor_flags to delete.
     * @example
     * // Delete a few Vendor_flags
     * const { count } = await prisma.vendor_flags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vendor_flagsDeleteManyArgs>(args?: SelectSubset<T, vendor_flagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendor_flags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendor_flagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendor_flags
     * const vendor_flags = await prisma.vendor_flags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vendor_flagsUpdateManyArgs>(args: SelectSubset<T, vendor_flagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendor_flags and returns the data updated in the database.
     * @param {vendor_flagsUpdateManyAndReturnArgs} args - Arguments to update many Vendor_flags.
     * @example
     * // Update many Vendor_flags
     * const vendor_flags = await prisma.vendor_flags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vendor_flags and only return the `id`
     * const vendor_flagsWithIdOnly = await prisma.vendor_flags.updateManyAndReturn({
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
    updateManyAndReturn<T extends vendor_flagsUpdateManyAndReturnArgs>(args: SelectSubset<T, vendor_flagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendor_flagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vendor_flags.
     * @param {vendor_flagsUpsertArgs} args - Arguments to update or create a Vendor_flags.
     * @example
     * // Update or create a Vendor_flags
     * const vendor_flags = await prisma.vendor_flags.upsert({
     *   create: {
     *     // ... data to create a Vendor_flags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendor_flags we want to update
     *   }
     * })
     */
    upsert<T extends vendor_flagsUpsertArgs>(args: SelectSubset<T, vendor_flagsUpsertArgs<ExtArgs>>): Prisma__vendor_flagsClient<$Result.GetResult<Prisma.$vendor_flagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendor_flags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendor_flagsCountArgs} args - Arguments to filter Vendor_flags to count.
     * @example
     * // Count the number of Vendor_flags
     * const count = await prisma.vendor_flags.count({
     *   where: {
     *     // ... the filter for the Vendor_flags we want to count
     *   }
     * })
    **/
    count<T extends vendor_flagsCountArgs>(
      args?: Subset<T, vendor_flagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vendor_flagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendor_flags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vendor_flagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Vendor_flagsAggregateArgs>(args: Subset<T, Vendor_flagsAggregateArgs>): Prisma.PrismaPromise<GetVendor_flagsAggregateType<T>>

    /**
     * Group by Vendor_flags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendor_flagsGroupByArgs} args - Group by arguments.
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
      T extends vendor_flagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vendor_flagsGroupByArgs['orderBy'] }
        : { orderBy?: vendor_flagsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, vendor_flagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendor_flagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vendor_flags model
   */
  readonly fields: vendor_flagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vendor_flags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vendor_flagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the vendor_flags model
   */
  interface vendor_flagsFieldRefs {
    readonly id: FieldRef<"vendor_flags", 'String'>
    readonly name: FieldRef<"vendor_flags", 'String'>
    readonly is_active: FieldRef<"vendor_flags", 'Boolean'>
    readonly created_at: FieldRef<"vendor_flags", 'DateTime'>
    readonly updated_at: FieldRef<"vendor_flags", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * vendor_flags findUnique
   */
  export type vendor_flagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_flags
     */
    select?: vendor_flagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_flags
     */
    omit?: vendor_flagsOmit<ExtArgs> | null
    /**
     * Filter, which vendor_flags to fetch.
     */
    where: vendor_flagsWhereUniqueInput
  }

  /**
   * vendor_flags findUniqueOrThrow
   */
  export type vendor_flagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_flags
     */
    select?: vendor_flagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_flags
     */
    omit?: vendor_flagsOmit<ExtArgs> | null
    /**
     * Filter, which vendor_flags to fetch.
     */
    where: vendor_flagsWhereUniqueInput
  }

  /**
   * vendor_flags findFirst
   */
  export type vendor_flagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_flags
     */
    select?: vendor_flagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_flags
     */
    omit?: vendor_flagsOmit<ExtArgs> | null
    /**
     * Filter, which vendor_flags to fetch.
     */
    where?: vendor_flagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendor_flags to fetch.
     */
    orderBy?: vendor_flagsOrderByWithRelationInput | vendor_flagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vendor_flags.
     */
    cursor?: vendor_flagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendor_flags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendor_flags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vendor_flags.
     */
    distinct?: Vendor_flagsScalarFieldEnum | Vendor_flagsScalarFieldEnum[]
  }

  /**
   * vendor_flags findFirstOrThrow
   */
  export type vendor_flagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_flags
     */
    select?: vendor_flagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_flags
     */
    omit?: vendor_flagsOmit<ExtArgs> | null
    /**
     * Filter, which vendor_flags to fetch.
     */
    where?: vendor_flagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendor_flags to fetch.
     */
    orderBy?: vendor_flagsOrderByWithRelationInput | vendor_flagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vendor_flags.
     */
    cursor?: vendor_flagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendor_flags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendor_flags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vendor_flags.
     */
    distinct?: Vendor_flagsScalarFieldEnum | Vendor_flagsScalarFieldEnum[]
  }

  /**
   * vendor_flags findMany
   */
  export type vendor_flagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_flags
     */
    select?: vendor_flagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_flags
     */
    omit?: vendor_flagsOmit<ExtArgs> | null
    /**
     * Filter, which vendor_flags to fetch.
     */
    where?: vendor_flagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendor_flags to fetch.
     */
    orderBy?: vendor_flagsOrderByWithRelationInput | vendor_flagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vendor_flags.
     */
    cursor?: vendor_flagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendor_flags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendor_flags.
     */
    skip?: number
    distinct?: Vendor_flagsScalarFieldEnum | Vendor_flagsScalarFieldEnum[]
  }

  /**
   * vendor_flags create
   */
  export type vendor_flagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_flags
     */
    select?: vendor_flagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_flags
     */
    omit?: vendor_flagsOmit<ExtArgs> | null
    /**
     * The data needed to create a vendor_flags.
     */
    data: XOR<vendor_flagsCreateInput, vendor_flagsUncheckedCreateInput>
  }

  /**
   * vendor_flags createMany
   */
  export type vendor_flagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vendor_flags.
     */
    data: vendor_flagsCreateManyInput | vendor_flagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vendor_flags createManyAndReturn
   */
  export type vendor_flagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_flags
     */
    select?: vendor_flagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_flags
     */
    omit?: vendor_flagsOmit<ExtArgs> | null
    /**
     * The data used to create many vendor_flags.
     */
    data: vendor_flagsCreateManyInput | vendor_flagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vendor_flags update
   */
  export type vendor_flagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_flags
     */
    select?: vendor_flagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_flags
     */
    omit?: vendor_flagsOmit<ExtArgs> | null
    /**
     * The data needed to update a vendor_flags.
     */
    data: XOR<vendor_flagsUpdateInput, vendor_flagsUncheckedUpdateInput>
    /**
     * Choose, which vendor_flags to update.
     */
    where: vendor_flagsWhereUniqueInput
  }

  /**
   * vendor_flags updateMany
   */
  export type vendor_flagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vendor_flags.
     */
    data: XOR<vendor_flagsUpdateManyMutationInput, vendor_flagsUncheckedUpdateManyInput>
    /**
     * Filter which vendor_flags to update
     */
    where?: vendor_flagsWhereInput
    /**
     * Limit how many vendor_flags to update.
     */
    limit?: number
  }

  /**
   * vendor_flags updateManyAndReturn
   */
  export type vendor_flagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_flags
     */
    select?: vendor_flagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_flags
     */
    omit?: vendor_flagsOmit<ExtArgs> | null
    /**
     * The data used to update vendor_flags.
     */
    data: XOR<vendor_flagsUpdateManyMutationInput, vendor_flagsUncheckedUpdateManyInput>
    /**
     * Filter which vendor_flags to update
     */
    where?: vendor_flagsWhereInput
    /**
     * Limit how many vendor_flags to update.
     */
    limit?: number
  }

  /**
   * vendor_flags upsert
   */
  export type vendor_flagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_flags
     */
    select?: vendor_flagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_flags
     */
    omit?: vendor_flagsOmit<ExtArgs> | null
    /**
     * The filter to search for the vendor_flags to update in case it exists.
     */
    where: vendor_flagsWhereUniqueInput
    /**
     * In case the vendor_flags found by the `where` argument doesn't exist, create a new vendor_flags with this data.
     */
    create: XOR<vendor_flagsCreateInput, vendor_flagsUncheckedCreateInput>
    /**
     * In case the vendor_flags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vendor_flagsUpdateInput, vendor_flagsUncheckedUpdateInput>
  }

  /**
   * vendor_flags delete
   */
  export type vendor_flagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_flags
     */
    select?: vendor_flagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_flags
     */
    omit?: vendor_flagsOmit<ExtArgs> | null
    /**
     * Filter which vendor_flags to delete.
     */
    where: vendor_flagsWhereUniqueInput
  }

  /**
   * vendor_flags deleteMany
   */
  export type vendor_flagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vendor_flags to delete
     */
    where?: vendor_flagsWhereInput
    /**
     * Limit how many vendor_flags to delete.
     */
    limit?: number
  }

  /**
   * vendor_flags without action
   */
  export type vendor_flagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendor_flags
     */
    select?: vendor_flagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendor_flags
     */
    omit?: vendor_flagsOmit<ExtArgs> | null
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


  export const CompanyScalarFieldEnum: {
    id: 'id',
    company_id: 'company_id',
    company_name: 'company_name',
    sub_domain: 'sub_domain',
    currency_code: 'currency_code',
    currency_symbol: 'currency_symbol',
    timezone: 'timezone',
    first_name: 'first_name',
    last_name: 'last_name',
    phone: 'phone',
    email: 'email',
    password: 'password',
    db_url: 'db_url',
    is_active: 'is_active',
    company_logo: 'company_logo',
    logo_name: 'logo_name',
    logo_size: 'logo_size',
    roles: 'roles',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    exclude_inspection: 'exclude_inspection',
    invoice50: 'invoice50',
    fob_china: 'fob_china',
    require_deposit_invoice: 'require_deposit_invoice',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const MaterialScalarFieldEnum: {
    id: 'id',
    service_id: 'service_id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type MaterialScalarFieldEnum = (typeof MaterialScalarFieldEnum)[keyof typeof MaterialScalarFieldEnum]


  export const FinishScalarFieldEnum: {
    id: 'id',
    service_id: 'service_id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type FinishScalarFieldEnum = (typeof FinishScalarFieldEnum)[keyof typeof FinishScalarFieldEnum]


  export const CurrencyScalarFieldEnum: {
    id: 'id',
    currency_id: 'currency_id',
    code: 'code',
    name: 'name',
    symbol: 'symbol',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CurrencyScalarFieldEnum = (typeof CurrencyScalarFieldEnum)[keyof typeof CurrencyScalarFieldEnum]


  export const Payment_termsScalarFieldEnum: {
    id: 'id',
    payment_terms_id: 'payment_terms_id',
    name: 'name',
    description: 'description',
    due_days: 'due_days',
    discount_days: 'discount_days',
    discount_percent: 'discount_percent',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Payment_termsScalarFieldEnum = (typeof Payment_termsScalarFieldEnum)[keyof typeof Payment_termsScalarFieldEnum]


  export const PaymentStatusScalarFieldEnum: {
    id: 'id',
    name: 'name',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PaymentStatusScalarFieldEnum = (typeof PaymentStatusScalarFieldEnum)[keyof typeof PaymentStatusScalarFieldEnum]


  export const QuoteStatusScalarFieldEnum: {
    id: 'id',
    name: 'name',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type QuoteStatusScalarFieldEnum = (typeof QuoteStatusScalarFieldEnum)[keyof typeof QuoteStatusScalarFieldEnum]


  export const OrderStatusScalarFieldEnum: {
    id: 'id',
    name: 'name',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OrderStatusScalarFieldEnum = (typeof OrderStatusScalarFieldEnum)[keyof typeof OrderStatusScalarFieldEnum]


  export const LogisticsStatusScalarFieldEnum: {
    id: 'id',
    name: 'name',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type LogisticsStatusScalarFieldEnum = (typeof LogisticsStatusScalarFieldEnum)[keyof typeof LogisticsStatusScalarFieldEnum]


  export const FinanceStatusScalarFieldEnum: {
    id: 'id',
    name: 'name',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type FinanceStatusScalarFieldEnum = (typeof FinanceStatusScalarFieldEnum)[keyof typeof FinanceStatusScalarFieldEnum]


  export const Vendor_capabilitiesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Vendor_capabilitiesScalarFieldEnum = (typeof Vendor_capabilitiesScalarFieldEnum)[keyof typeof Vendor_capabilitiesScalarFieldEnum]


  export const Vendor_capability_sub_categoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    vendor_capability_id: 'vendor_capability_id',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Vendor_capability_sub_categoriesScalarFieldEnum = (typeof Vendor_capability_sub_categoriesScalarFieldEnum)[keyof typeof Vendor_capability_sub_categoriesScalarFieldEnum]


  export const Vendor_certificationsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Vendor_certificationsScalarFieldEnum = (typeof Vendor_certificationsScalarFieldEnum)[keyof typeof Vendor_certificationsScalarFieldEnum]


  export const Vendor_flagsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Vendor_flagsScalarFieldEnum = (typeof Vendor_flagsScalarFieldEnum)[keyof typeof Vendor_flagsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    id?: StringFilter<"company"> | string
    company_id?: IntFilter<"company"> | number
    company_name?: StringFilter<"company"> | string
    sub_domain?: StringFilter<"company"> | string
    currency_code?: StringFilter<"company"> | string
    currency_symbol?: StringFilter<"company"> | string
    timezone?: StringFilter<"company"> | string
    first_name?: StringNullableFilter<"company"> | string | null
    last_name?: StringNullableFilter<"company"> | string | null
    phone?: StringNullableFilter<"company"> | string | null
    email?: StringNullableFilter<"company"> | string | null
    password?: StringNullableFilter<"company"> | string | null
    db_url?: StringFilter<"company"> | string
    is_active?: BoolFilter<"company"> | boolean
    company_logo?: StringNullableFilter<"company"> | string | null
    logo_name?: StringNullableFilter<"company"> | string | null
    logo_size?: IntNullableFilter<"company"> | number | null
    roles?: JsonFilter<"company">
    created_at?: DateTimeFilter<"company"> | Date | string
    updated_at?: DateTimeFilter<"company"> | Date | string
  }

  export type companyOrderByWithRelationInput = {
    id?: SortOrder
    company_id?: SortOrder
    company_name?: SortOrder
    sub_domain?: SortOrder
    currency_code?: SortOrder
    currency_symbol?: SortOrder
    timezone?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    db_url?: SortOrder
    is_active?: SortOrder
    company_logo?: SortOrderInput | SortOrder
    logo_name?: SortOrderInput | SortOrder
    logo_size?: SortOrderInput | SortOrder
    roles?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type companyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    company_id?: number
    sub_domain?: string
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    company_name?: StringFilter<"company"> | string
    currency_code?: StringFilter<"company"> | string
    currency_symbol?: StringFilter<"company"> | string
    timezone?: StringFilter<"company"> | string
    first_name?: StringNullableFilter<"company"> | string | null
    last_name?: StringNullableFilter<"company"> | string | null
    phone?: StringNullableFilter<"company"> | string | null
    email?: StringNullableFilter<"company"> | string | null
    password?: StringNullableFilter<"company"> | string | null
    db_url?: StringFilter<"company"> | string
    is_active?: BoolFilter<"company"> | boolean
    company_logo?: StringNullableFilter<"company"> | string | null
    logo_name?: StringNullableFilter<"company"> | string | null
    logo_size?: IntNullableFilter<"company"> | number | null
    roles?: JsonFilter<"company">
    created_at?: DateTimeFilter<"company"> | Date | string
    updated_at?: DateTimeFilter<"company"> | Date | string
  }, "id" | "company_id" | "sub_domain">

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder
    company_id?: SortOrder
    company_name?: SortOrder
    sub_domain?: SortOrder
    currency_code?: SortOrder
    currency_symbol?: SortOrder
    timezone?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    db_url?: SortOrder
    is_active?: SortOrder
    company_logo?: SortOrderInput | SortOrder
    logo_name?: SortOrderInput | SortOrder
    logo_size?: SortOrderInput | SortOrder
    roles?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: companyCountOrderByAggregateInput
    _avg?: companyAvgOrderByAggregateInput
    _max?: companyMaxOrderByAggregateInput
    _min?: companyMinOrderByAggregateInput
    _sum?: companySumOrderByAggregateInput
  }

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    OR?: companyScalarWhereWithAggregatesInput[]
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"company"> | string
    company_id?: IntWithAggregatesFilter<"company"> | number
    company_name?: StringWithAggregatesFilter<"company"> | string
    sub_domain?: StringWithAggregatesFilter<"company"> | string
    currency_code?: StringWithAggregatesFilter<"company"> | string
    currency_symbol?: StringWithAggregatesFilter<"company"> | string
    timezone?: StringWithAggregatesFilter<"company"> | string
    first_name?: StringNullableWithAggregatesFilter<"company"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"company"> | string | null
    phone?: StringNullableWithAggregatesFilter<"company"> | string | null
    email?: StringNullableWithAggregatesFilter<"company"> | string | null
    password?: StringNullableWithAggregatesFilter<"company"> | string | null
    db_url?: StringWithAggregatesFilter<"company"> | string
    is_active?: BoolWithAggregatesFilter<"company"> | boolean
    company_logo?: StringNullableWithAggregatesFilter<"company"> | string | null
    logo_name?: StringNullableWithAggregatesFilter<"company"> | string | null
    logo_size?: IntNullableWithAggregatesFilter<"company"> | number | null
    roles?: JsonWithAggregatesFilter<"company">
    created_at?: DateTimeWithAggregatesFilter<"company"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"company"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    exclude_inspection?: BoolFilter<"Service"> | boolean
    invoice50?: BoolFilter<"Service"> | boolean
    fob_china?: BoolFilter<"Service"> | boolean
    require_deposit_invoice?: BoolFilter<"Service"> | boolean
    name?: StringFilter<"Service"> | string
    created_at?: DateTimeFilter<"Service"> | Date | string
    updated_at?: DateTimeFilter<"Service"> | Date | string
    materials?: MaterialListRelationFilter
    finishes?: FinishListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    exclude_inspection?: SortOrder
    invoice50?: SortOrder
    fob_china?: SortOrder
    require_deposit_invoice?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    materials?: MaterialOrderByRelationAggregateInput
    finishes?: FinishOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    exclude_inspection?: BoolFilter<"Service"> | boolean
    invoice50?: BoolFilter<"Service"> | boolean
    fob_china?: BoolFilter<"Service"> | boolean
    require_deposit_invoice?: BoolFilter<"Service"> | boolean
    name?: StringFilter<"Service"> | string
    created_at?: DateTimeFilter<"Service"> | Date | string
    updated_at?: DateTimeFilter<"Service"> | Date | string
    materials?: MaterialListRelationFilter
    finishes?: FinishListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    exclude_inspection?: SortOrder
    invoice50?: SortOrder
    fob_china?: SortOrder
    require_deposit_invoice?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    exclude_inspection?: BoolWithAggregatesFilter<"Service"> | boolean
    invoice50?: BoolWithAggregatesFilter<"Service"> | boolean
    fob_china?: BoolWithAggregatesFilter<"Service"> | boolean
    require_deposit_invoice?: BoolWithAggregatesFilter<"Service"> | boolean
    name?: StringWithAggregatesFilter<"Service"> | string
    created_at?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type MaterialWhereInput = {
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    id?: StringFilter<"Material"> | string
    service_id?: StringFilter<"Material"> | string
    name?: StringNullableFilter<"Material"> | string | null
    created_at?: DateTimeFilter<"Material"> | Date | string
    updated_at?: DateTimeFilter<"Material"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type MaterialOrderByWithRelationInput = {
    id?: SortOrder
    service_id?: SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    service?: ServiceOrderByWithRelationInput
  }

  export type MaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    service_id?: StringFilter<"Material"> | string
    name?: StringNullableFilter<"Material"> | string | null
    created_at?: DateTimeFilter<"Material"> | Date | string
    updated_at?: DateTimeFilter<"Material"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "id">

  export type MaterialOrderByWithAggregationInput = {
    id?: SortOrder
    service_id?: SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: MaterialCountOrderByAggregateInput
    _max?: MaterialMaxOrderByAggregateInput
    _min?: MaterialMinOrderByAggregateInput
  }

  export type MaterialScalarWhereWithAggregatesInput = {
    AND?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    OR?: MaterialScalarWhereWithAggregatesInput[]
    NOT?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Material"> | string
    service_id?: StringWithAggregatesFilter<"Material"> | string
    name?: StringNullableWithAggregatesFilter<"Material"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Material"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Material"> | Date | string
  }

  export type FinishWhereInput = {
    AND?: FinishWhereInput | FinishWhereInput[]
    OR?: FinishWhereInput[]
    NOT?: FinishWhereInput | FinishWhereInput[]
    id?: StringFilter<"Finish"> | string
    service_id?: StringFilter<"Finish"> | string
    name?: StringNullableFilter<"Finish"> | string | null
    created_at?: DateTimeFilter<"Finish"> | Date | string
    updated_at?: DateTimeFilter<"Finish"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type FinishOrderByWithRelationInput = {
    id?: SortOrder
    service_id?: SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    service?: ServiceOrderByWithRelationInput
  }

  export type FinishWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FinishWhereInput | FinishWhereInput[]
    OR?: FinishWhereInput[]
    NOT?: FinishWhereInput | FinishWhereInput[]
    service_id?: StringFilter<"Finish"> | string
    name?: StringNullableFilter<"Finish"> | string | null
    created_at?: DateTimeFilter<"Finish"> | Date | string
    updated_at?: DateTimeFilter<"Finish"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "id">

  export type FinishOrderByWithAggregationInput = {
    id?: SortOrder
    service_id?: SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: FinishCountOrderByAggregateInput
    _max?: FinishMaxOrderByAggregateInput
    _min?: FinishMinOrderByAggregateInput
  }

  export type FinishScalarWhereWithAggregatesInput = {
    AND?: FinishScalarWhereWithAggregatesInput | FinishScalarWhereWithAggregatesInput[]
    OR?: FinishScalarWhereWithAggregatesInput[]
    NOT?: FinishScalarWhereWithAggregatesInput | FinishScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Finish"> | string
    service_id?: StringWithAggregatesFilter<"Finish"> | string
    name?: StringNullableWithAggregatesFilter<"Finish"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Finish"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Finish"> | Date | string
  }

  export type currencyWhereInput = {
    AND?: currencyWhereInput | currencyWhereInput[]
    OR?: currencyWhereInput[]
    NOT?: currencyWhereInput | currencyWhereInput[]
    id?: StringFilter<"currency"> | string
    currency_id?: IntFilter<"currency"> | number
    code?: StringFilter<"currency"> | string
    name?: StringFilter<"currency"> | string
    symbol?: StringFilter<"currency"> | string
    is_active?: BoolFilter<"currency"> | boolean
    created_at?: DateTimeFilter<"currency"> | Date | string
    updated_at?: DateTimeFilter<"currency"> | Date | string
  }

  export type currencyOrderByWithRelationInput = {
    id?: SortOrder
    currency_id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type currencyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: currencyWhereInput | currencyWhereInput[]
    OR?: currencyWhereInput[]
    NOT?: currencyWhereInput | currencyWhereInput[]
    currency_id?: IntFilter<"currency"> | number
    code?: StringFilter<"currency"> | string
    name?: StringFilter<"currency"> | string
    symbol?: StringFilter<"currency"> | string
    is_active?: BoolFilter<"currency"> | boolean
    created_at?: DateTimeFilter<"currency"> | Date | string
    updated_at?: DateTimeFilter<"currency"> | Date | string
  }, "id">

  export type currencyOrderByWithAggregationInput = {
    id?: SortOrder
    currency_id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: currencyCountOrderByAggregateInput
    _avg?: currencyAvgOrderByAggregateInput
    _max?: currencyMaxOrderByAggregateInput
    _min?: currencyMinOrderByAggregateInput
    _sum?: currencySumOrderByAggregateInput
  }

  export type currencyScalarWhereWithAggregatesInput = {
    AND?: currencyScalarWhereWithAggregatesInput | currencyScalarWhereWithAggregatesInput[]
    OR?: currencyScalarWhereWithAggregatesInput[]
    NOT?: currencyScalarWhereWithAggregatesInput | currencyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"currency"> | string
    currency_id?: IntWithAggregatesFilter<"currency"> | number
    code?: StringWithAggregatesFilter<"currency"> | string
    name?: StringWithAggregatesFilter<"currency"> | string
    symbol?: StringWithAggregatesFilter<"currency"> | string
    is_active?: BoolWithAggregatesFilter<"currency"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"currency"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"currency"> | Date | string
  }

  export type payment_termsWhereInput = {
    AND?: payment_termsWhereInput | payment_termsWhereInput[]
    OR?: payment_termsWhereInput[]
    NOT?: payment_termsWhereInput | payment_termsWhereInput[]
    id?: StringFilter<"payment_terms"> | string
    payment_terms_id?: IntFilter<"payment_terms"> | number
    name?: StringFilter<"payment_terms"> | string
    description?: StringNullableFilter<"payment_terms"> | string | null
    due_days?: IntFilter<"payment_terms"> | number
    discount_days?: IntFilter<"payment_terms"> | number
    discount_percent?: DecimalFilter<"payment_terms"> | Decimal | DecimalJsLike | number | string
    is_active?: BoolFilter<"payment_terms"> | boolean
    created_at?: DateTimeFilter<"payment_terms"> | Date | string
    updated_at?: DateTimeFilter<"payment_terms"> | Date | string
  }

  export type payment_termsOrderByWithRelationInput = {
    id?: SortOrder
    payment_terms_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    due_days?: SortOrder
    discount_days?: SortOrder
    discount_percent?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type payment_termsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: payment_termsWhereInput | payment_termsWhereInput[]
    OR?: payment_termsWhereInput[]
    NOT?: payment_termsWhereInput | payment_termsWhereInput[]
    payment_terms_id?: IntFilter<"payment_terms"> | number
    name?: StringFilter<"payment_terms"> | string
    description?: StringNullableFilter<"payment_terms"> | string | null
    due_days?: IntFilter<"payment_terms"> | number
    discount_days?: IntFilter<"payment_terms"> | number
    discount_percent?: DecimalFilter<"payment_terms"> | Decimal | DecimalJsLike | number | string
    is_active?: BoolFilter<"payment_terms"> | boolean
    created_at?: DateTimeFilter<"payment_terms"> | Date | string
    updated_at?: DateTimeFilter<"payment_terms"> | Date | string
  }, "id">

  export type payment_termsOrderByWithAggregationInput = {
    id?: SortOrder
    payment_terms_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    due_days?: SortOrder
    discount_days?: SortOrder
    discount_percent?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: payment_termsCountOrderByAggregateInput
    _avg?: payment_termsAvgOrderByAggregateInput
    _max?: payment_termsMaxOrderByAggregateInput
    _min?: payment_termsMinOrderByAggregateInput
    _sum?: payment_termsSumOrderByAggregateInput
  }

  export type payment_termsScalarWhereWithAggregatesInput = {
    AND?: payment_termsScalarWhereWithAggregatesInput | payment_termsScalarWhereWithAggregatesInput[]
    OR?: payment_termsScalarWhereWithAggregatesInput[]
    NOT?: payment_termsScalarWhereWithAggregatesInput | payment_termsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"payment_terms"> | string
    payment_terms_id?: IntWithAggregatesFilter<"payment_terms"> | number
    name?: StringWithAggregatesFilter<"payment_terms"> | string
    description?: StringNullableWithAggregatesFilter<"payment_terms"> | string | null
    due_days?: IntWithAggregatesFilter<"payment_terms"> | number
    discount_days?: IntWithAggregatesFilter<"payment_terms"> | number
    discount_percent?: DecimalWithAggregatesFilter<"payment_terms"> | Decimal | DecimalJsLike | number | string
    is_active?: BoolWithAggregatesFilter<"payment_terms"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"payment_terms"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"payment_terms"> | Date | string
  }

  export type PaymentStatusWhereInput = {
    AND?: PaymentStatusWhereInput | PaymentStatusWhereInput[]
    OR?: PaymentStatusWhereInput[]
    NOT?: PaymentStatusWhereInput | PaymentStatusWhereInput[]
    id?: StringFilter<"PaymentStatus"> | string
    name?: StringFilter<"PaymentStatus"> | string
    is_active?: BoolFilter<"PaymentStatus"> | boolean
    created_at?: DateTimeFilter<"PaymentStatus"> | Date | string
    updated_at?: DateTimeFilter<"PaymentStatus"> | Date | string
  }

  export type PaymentStatusOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentStatusWhereInput | PaymentStatusWhereInput[]
    OR?: PaymentStatusWhereInput[]
    NOT?: PaymentStatusWhereInput | PaymentStatusWhereInput[]
    name?: StringFilter<"PaymentStatus"> | string
    is_active?: BoolFilter<"PaymentStatus"> | boolean
    created_at?: DateTimeFilter<"PaymentStatus"> | Date | string
    updated_at?: DateTimeFilter<"PaymentStatus"> | Date | string
  }, "id">

  export type PaymentStatusOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PaymentStatusCountOrderByAggregateInput
    _max?: PaymentStatusMaxOrderByAggregateInput
    _min?: PaymentStatusMinOrderByAggregateInput
  }

  export type PaymentStatusScalarWhereWithAggregatesInput = {
    AND?: PaymentStatusScalarWhereWithAggregatesInput | PaymentStatusScalarWhereWithAggregatesInput[]
    OR?: PaymentStatusScalarWhereWithAggregatesInput[]
    NOT?: PaymentStatusScalarWhereWithAggregatesInput | PaymentStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentStatus"> | string
    name?: StringWithAggregatesFilter<"PaymentStatus"> | string
    is_active?: BoolWithAggregatesFilter<"PaymentStatus"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"PaymentStatus"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"PaymentStatus"> | Date | string
  }

  export type QuoteStatusWhereInput = {
    AND?: QuoteStatusWhereInput | QuoteStatusWhereInput[]
    OR?: QuoteStatusWhereInput[]
    NOT?: QuoteStatusWhereInput | QuoteStatusWhereInput[]
    id?: StringFilter<"QuoteStatus"> | string
    name?: StringFilter<"QuoteStatus"> | string
    is_active?: BoolFilter<"QuoteStatus"> | boolean
    created_at?: DateTimeFilter<"QuoteStatus"> | Date | string
    updated_at?: DateTimeFilter<"QuoteStatus"> | Date | string
  }

  export type QuoteStatusOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type QuoteStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuoteStatusWhereInput | QuoteStatusWhereInput[]
    OR?: QuoteStatusWhereInput[]
    NOT?: QuoteStatusWhereInput | QuoteStatusWhereInput[]
    name?: StringFilter<"QuoteStatus"> | string
    is_active?: BoolFilter<"QuoteStatus"> | boolean
    created_at?: DateTimeFilter<"QuoteStatus"> | Date | string
    updated_at?: DateTimeFilter<"QuoteStatus"> | Date | string
  }, "id">

  export type QuoteStatusOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: QuoteStatusCountOrderByAggregateInput
    _max?: QuoteStatusMaxOrderByAggregateInput
    _min?: QuoteStatusMinOrderByAggregateInput
  }

  export type QuoteStatusScalarWhereWithAggregatesInput = {
    AND?: QuoteStatusScalarWhereWithAggregatesInput | QuoteStatusScalarWhereWithAggregatesInput[]
    OR?: QuoteStatusScalarWhereWithAggregatesInput[]
    NOT?: QuoteStatusScalarWhereWithAggregatesInput | QuoteStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuoteStatus"> | string
    name?: StringWithAggregatesFilter<"QuoteStatus"> | string
    is_active?: BoolWithAggregatesFilter<"QuoteStatus"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"QuoteStatus"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"QuoteStatus"> | Date | string
  }

  export type OrderStatusWhereInput = {
    AND?: OrderStatusWhereInput | OrderStatusWhereInput[]
    OR?: OrderStatusWhereInput[]
    NOT?: OrderStatusWhereInput | OrderStatusWhereInput[]
    id?: StringFilter<"OrderStatus"> | string
    name?: StringFilter<"OrderStatus"> | string
    is_active?: BoolFilter<"OrderStatus"> | boolean
    created_at?: DateTimeFilter<"OrderStatus"> | Date | string
    updated_at?: DateTimeFilter<"OrderStatus"> | Date | string
  }

  export type OrderStatusOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderStatusWhereInput | OrderStatusWhereInput[]
    OR?: OrderStatusWhereInput[]
    NOT?: OrderStatusWhereInput | OrderStatusWhereInput[]
    name?: StringFilter<"OrderStatus"> | string
    is_active?: BoolFilter<"OrderStatus"> | boolean
    created_at?: DateTimeFilter<"OrderStatus"> | Date | string
    updated_at?: DateTimeFilter<"OrderStatus"> | Date | string
  }, "id">

  export type OrderStatusOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: OrderStatusCountOrderByAggregateInput
    _max?: OrderStatusMaxOrderByAggregateInput
    _min?: OrderStatusMinOrderByAggregateInput
  }

  export type OrderStatusScalarWhereWithAggregatesInput = {
    AND?: OrderStatusScalarWhereWithAggregatesInput | OrderStatusScalarWhereWithAggregatesInput[]
    OR?: OrderStatusScalarWhereWithAggregatesInput[]
    NOT?: OrderStatusScalarWhereWithAggregatesInput | OrderStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderStatus"> | string
    name?: StringWithAggregatesFilter<"OrderStatus"> | string
    is_active?: BoolWithAggregatesFilter<"OrderStatus"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"OrderStatus"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"OrderStatus"> | Date | string
  }

  export type LogisticsStatusWhereInput = {
    AND?: LogisticsStatusWhereInput | LogisticsStatusWhereInput[]
    OR?: LogisticsStatusWhereInput[]
    NOT?: LogisticsStatusWhereInput | LogisticsStatusWhereInput[]
    id?: StringFilter<"LogisticsStatus"> | string
    name?: StringFilter<"LogisticsStatus"> | string
    is_active?: BoolFilter<"LogisticsStatus"> | boolean
    created_at?: DateTimeFilter<"LogisticsStatus"> | Date | string
    updated_at?: DateTimeFilter<"LogisticsStatus"> | Date | string
  }

  export type LogisticsStatusOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LogisticsStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogisticsStatusWhereInput | LogisticsStatusWhereInput[]
    OR?: LogisticsStatusWhereInput[]
    NOT?: LogisticsStatusWhereInput | LogisticsStatusWhereInput[]
    name?: StringFilter<"LogisticsStatus"> | string
    is_active?: BoolFilter<"LogisticsStatus"> | boolean
    created_at?: DateTimeFilter<"LogisticsStatus"> | Date | string
    updated_at?: DateTimeFilter<"LogisticsStatus"> | Date | string
  }, "id">

  export type LogisticsStatusOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: LogisticsStatusCountOrderByAggregateInput
    _max?: LogisticsStatusMaxOrderByAggregateInput
    _min?: LogisticsStatusMinOrderByAggregateInput
  }

  export type LogisticsStatusScalarWhereWithAggregatesInput = {
    AND?: LogisticsStatusScalarWhereWithAggregatesInput | LogisticsStatusScalarWhereWithAggregatesInput[]
    OR?: LogisticsStatusScalarWhereWithAggregatesInput[]
    NOT?: LogisticsStatusScalarWhereWithAggregatesInput | LogisticsStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LogisticsStatus"> | string
    name?: StringWithAggregatesFilter<"LogisticsStatus"> | string
    is_active?: BoolWithAggregatesFilter<"LogisticsStatus"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"LogisticsStatus"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"LogisticsStatus"> | Date | string
  }

  export type FinanceStatusWhereInput = {
    AND?: FinanceStatusWhereInput | FinanceStatusWhereInput[]
    OR?: FinanceStatusWhereInput[]
    NOT?: FinanceStatusWhereInput | FinanceStatusWhereInput[]
    id?: StringFilter<"FinanceStatus"> | string
    name?: StringFilter<"FinanceStatus"> | string
    is_active?: BoolFilter<"FinanceStatus"> | boolean
    created_at?: DateTimeFilter<"FinanceStatus"> | Date | string
    updated_at?: DateTimeFilter<"FinanceStatus"> | Date | string
  }

  export type FinanceStatusOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FinanceStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FinanceStatusWhereInput | FinanceStatusWhereInput[]
    OR?: FinanceStatusWhereInput[]
    NOT?: FinanceStatusWhereInput | FinanceStatusWhereInput[]
    name?: StringFilter<"FinanceStatus"> | string
    is_active?: BoolFilter<"FinanceStatus"> | boolean
    created_at?: DateTimeFilter<"FinanceStatus"> | Date | string
    updated_at?: DateTimeFilter<"FinanceStatus"> | Date | string
  }, "id">

  export type FinanceStatusOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: FinanceStatusCountOrderByAggregateInput
    _max?: FinanceStatusMaxOrderByAggregateInput
    _min?: FinanceStatusMinOrderByAggregateInput
  }

  export type FinanceStatusScalarWhereWithAggregatesInput = {
    AND?: FinanceStatusScalarWhereWithAggregatesInput | FinanceStatusScalarWhereWithAggregatesInput[]
    OR?: FinanceStatusScalarWhereWithAggregatesInput[]
    NOT?: FinanceStatusScalarWhereWithAggregatesInput | FinanceStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FinanceStatus"> | string
    name?: StringWithAggregatesFilter<"FinanceStatus"> | string
    is_active?: BoolWithAggregatesFilter<"FinanceStatus"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"FinanceStatus"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"FinanceStatus"> | Date | string
  }

  export type vendor_capabilitiesWhereInput = {
    AND?: vendor_capabilitiesWhereInput | vendor_capabilitiesWhereInput[]
    OR?: vendor_capabilitiesWhereInput[]
    NOT?: vendor_capabilitiesWhereInput | vendor_capabilitiesWhereInput[]
    id?: StringFilter<"vendor_capabilities"> | string
    name?: StringFilter<"vendor_capabilities"> | string
    is_active?: BoolFilter<"vendor_capabilities"> | boolean
    created_at?: DateTimeFilter<"vendor_capabilities"> | Date | string
    updated_at?: DateTimeFilter<"vendor_capabilities"> | Date | string
    subCategories?: Vendor_capability_sub_categoriesListRelationFilter
  }

  export type vendor_capabilitiesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    subCategories?: vendor_capability_sub_categoriesOrderByRelationAggregateInput
  }

  export type vendor_capabilitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: vendor_capabilitiesWhereInput | vendor_capabilitiesWhereInput[]
    OR?: vendor_capabilitiesWhereInput[]
    NOT?: vendor_capabilitiesWhereInput | vendor_capabilitiesWhereInput[]
    name?: StringFilter<"vendor_capabilities"> | string
    is_active?: BoolFilter<"vendor_capabilities"> | boolean
    created_at?: DateTimeFilter<"vendor_capabilities"> | Date | string
    updated_at?: DateTimeFilter<"vendor_capabilities"> | Date | string
    subCategories?: Vendor_capability_sub_categoriesListRelationFilter
  }, "id">

  export type vendor_capabilitiesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: vendor_capabilitiesCountOrderByAggregateInput
    _max?: vendor_capabilitiesMaxOrderByAggregateInput
    _min?: vendor_capabilitiesMinOrderByAggregateInput
  }

  export type vendor_capabilitiesScalarWhereWithAggregatesInput = {
    AND?: vendor_capabilitiesScalarWhereWithAggregatesInput | vendor_capabilitiesScalarWhereWithAggregatesInput[]
    OR?: vendor_capabilitiesScalarWhereWithAggregatesInput[]
    NOT?: vendor_capabilitiesScalarWhereWithAggregatesInput | vendor_capabilitiesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"vendor_capabilities"> | string
    name?: StringWithAggregatesFilter<"vendor_capabilities"> | string
    is_active?: BoolWithAggregatesFilter<"vendor_capabilities"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"vendor_capabilities"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"vendor_capabilities"> | Date | string
  }

  export type vendor_capability_sub_categoriesWhereInput = {
    AND?: vendor_capability_sub_categoriesWhereInput | vendor_capability_sub_categoriesWhereInput[]
    OR?: vendor_capability_sub_categoriesWhereInput[]
    NOT?: vendor_capability_sub_categoriesWhereInput | vendor_capability_sub_categoriesWhereInput[]
    id?: StringFilter<"vendor_capability_sub_categories"> | string
    name?: StringFilter<"vendor_capability_sub_categories"> | string
    vendor_capability_id?: StringFilter<"vendor_capability_sub_categories"> | string
    is_active?: BoolFilter<"vendor_capability_sub_categories"> | boolean
    created_at?: DateTimeFilter<"vendor_capability_sub_categories"> | Date | string
    updated_at?: DateTimeFilter<"vendor_capability_sub_categories"> | Date | string
    capability?: XOR<Vendor_capabilitiesScalarRelationFilter, vendor_capabilitiesWhereInput>
  }

  export type vendor_capability_sub_categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    vendor_capability_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    capability?: vendor_capabilitiesOrderByWithRelationInput
  }

  export type vendor_capability_sub_categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: vendor_capability_sub_categoriesWhereInput | vendor_capability_sub_categoriesWhereInput[]
    OR?: vendor_capability_sub_categoriesWhereInput[]
    NOT?: vendor_capability_sub_categoriesWhereInput | vendor_capability_sub_categoriesWhereInput[]
    name?: StringFilter<"vendor_capability_sub_categories"> | string
    vendor_capability_id?: StringFilter<"vendor_capability_sub_categories"> | string
    is_active?: BoolFilter<"vendor_capability_sub_categories"> | boolean
    created_at?: DateTimeFilter<"vendor_capability_sub_categories"> | Date | string
    updated_at?: DateTimeFilter<"vendor_capability_sub_categories"> | Date | string
    capability?: XOR<Vendor_capabilitiesScalarRelationFilter, vendor_capabilitiesWhereInput>
  }, "id">

  export type vendor_capability_sub_categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    vendor_capability_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: vendor_capability_sub_categoriesCountOrderByAggregateInput
    _max?: vendor_capability_sub_categoriesMaxOrderByAggregateInput
    _min?: vendor_capability_sub_categoriesMinOrderByAggregateInput
  }

  export type vendor_capability_sub_categoriesScalarWhereWithAggregatesInput = {
    AND?: vendor_capability_sub_categoriesScalarWhereWithAggregatesInput | vendor_capability_sub_categoriesScalarWhereWithAggregatesInput[]
    OR?: vendor_capability_sub_categoriesScalarWhereWithAggregatesInput[]
    NOT?: vendor_capability_sub_categoriesScalarWhereWithAggregatesInput | vendor_capability_sub_categoriesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"vendor_capability_sub_categories"> | string
    name?: StringWithAggregatesFilter<"vendor_capability_sub_categories"> | string
    vendor_capability_id?: StringWithAggregatesFilter<"vendor_capability_sub_categories"> | string
    is_active?: BoolWithAggregatesFilter<"vendor_capability_sub_categories"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"vendor_capability_sub_categories"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"vendor_capability_sub_categories"> | Date | string
  }

  export type vendor_certificationsWhereInput = {
    AND?: vendor_certificationsWhereInput | vendor_certificationsWhereInput[]
    OR?: vendor_certificationsWhereInput[]
    NOT?: vendor_certificationsWhereInput | vendor_certificationsWhereInput[]
    id?: StringFilter<"vendor_certifications"> | string
    name?: StringFilter<"vendor_certifications"> | string
    is_active?: BoolFilter<"vendor_certifications"> | boolean
    created_at?: DateTimeFilter<"vendor_certifications"> | Date | string
    updated_at?: DateTimeFilter<"vendor_certifications"> | Date | string
  }

  export type vendor_certificationsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type vendor_certificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: vendor_certificationsWhereInput | vendor_certificationsWhereInput[]
    OR?: vendor_certificationsWhereInput[]
    NOT?: vendor_certificationsWhereInput | vendor_certificationsWhereInput[]
    name?: StringFilter<"vendor_certifications"> | string
    is_active?: BoolFilter<"vendor_certifications"> | boolean
    created_at?: DateTimeFilter<"vendor_certifications"> | Date | string
    updated_at?: DateTimeFilter<"vendor_certifications"> | Date | string
  }, "id">

  export type vendor_certificationsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: vendor_certificationsCountOrderByAggregateInput
    _max?: vendor_certificationsMaxOrderByAggregateInput
    _min?: vendor_certificationsMinOrderByAggregateInput
  }

  export type vendor_certificationsScalarWhereWithAggregatesInput = {
    AND?: vendor_certificationsScalarWhereWithAggregatesInput | vendor_certificationsScalarWhereWithAggregatesInput[]
    OR?: vendor_certificationsScalarWhereWithAggregatesInput[]
    NOT?: vendor_certificationsScalarWhereWithAggregatesInput | vendor_certificationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"vendor_certifications"> | string
    name?: StringWithAggregatesFilter<"vendor_certifications"> | string
    is_active?: BoolWithAggregatesFilter<"vendor_certifications"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"vendor_certifications"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"vendor_certifications"> | Date | string
  }

  export type vendor_flagsWhereInput = {
    AND?: vendor_flagsWhereInput | vendor_flagsWhereInput[]
    OR?: vendor_flagsWhereInput[]
    NOT?: vendor_flagsWhereInput | vendor_flagsWhereInput[]
    id?: StringFilter<"vendor_flags"> | string
    name?: StringFilter<"vendor_flags"> | string
    is_active?: BoolFilter<"vendor_flags"> | boolean
    created_at?: DateTimeFilter<"vendor_flags"> | Date | string
    updated_at?: DateTimeFilter<"vendor_flags"> | Date | string
  }

  export type vendor_flagsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type vendor_flagsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: vendor_flagsWhereInput | vendor_flagsWhereInput[]
    OR?: vendor_flagsWhereInput[]
    NOT?: vendor_flagsWhereInput | vendor_flagsWhereInput[]
    name?: StringFilter<"vendor_flags"> | string
    is_active?: BoolFilter<"vendor_flags"> | boolean
    created_at?: DateTimeFilter<"vendor_flags"> | Date | string
    updated_at?: DateTimeFilter<"vendor_flags"> | Date | string
  }, "id">

  export type vendor_flagsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: vendor_flagsCountOrderByAggregateInput
    _max?: vendor_flagsMaxOrderByAggregateInput
    _min?: vendor_flagsMinOrderByAggregateInput
  }

  export type vendor_flagsScalarWhereWithAggregatesInput = {
    AND?: vendor_flagsScalarWhereWithAggregatesInput | vendor_flagsScalarWhereWithAggregatesInput[]
    OR?: vendor_flagsScalarWhereWithAggregatesInput[]
    NOT?: vendor_flagsScalarWhereWithAggregatesInput | vendor_flagsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"vendor_flags"> | string
    name?: StringWithAggregatesFilter<"vendor_flags"> | string
    is_active?: BoolWithAggregatesFilter<"vendor_flags"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"vendor_flags"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"vendor_flags"> | Date | string
  }

  export type companyCreateInput = {
    id?: string
    company_id?: number
    company_name: string
    sub_domain: string
    currency_code: string
    currency_symbol: string
    timezone?: string
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    email?: string | null
    password?: string | null
    db_url: string
    is_active?: boolean
    company_logo?: string | null
    logo_name?: string | null
    logo_size?: number | null
    roles: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type companyUncheckedCreateInput = {
    id?: string
    company_id?: number
    company_name: string
    sub_domain: string
    currency_code: string
    currency_symbol: string
    timezone?: string
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    email?: string | null
    password?: string | null
    db_url: string
    is_active?: boolean
    company_logo?: string | null
    logo_name?: string | null
    logo_size?: number | null
    roles: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    sub_domain?: StringFieldUpdateOperationsInput | string
    currency_code?: StringFieldUpdateOperationsInput | string
    currency_symbol?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    db_url?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    company_logo?: NullableStringFieldUpdateOperationsInput | string | null
    logo_name?: NullableStringFieldUpdateOperationsInput | string | null
    logo_size?: NullableIntFieldUpdateOperationsInput | number | null
    roles?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: IntFieldUpdateOperationsInput | number
    company_name?: StringFieldUpdateOperationsInput | string
    sub_domain?: StringFieldUpdateOperationsInput | string
    currency_code?: StringFieldUpdateOperationsInput | string
    currency_symbol?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    db_url?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    company_logo?: NullableStringFieldUpdateOperationsInput | string | null
    logo_name?: NullableStringFieldUpdateOperationsInput | string | null
    logo_size?: NullableIntFieldUpdateOperationsInput | number | null
    roles?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type companyCreateManyInput = {
    id?: string
    company_id?: number
    company_name: string
    sub_domain: string
    currency_code: string
    currency_symbol: string
    timezone?: string
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    email?: string | null
    password?: string | null
    db_url: string
    is_active?: boolean
    company_logo?: string | null
    logo_name?: string | null
    logo_size?: number | null
    roles: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    sub_domain?: StringFieldUpdateOperationsInput | string
    currency_code?: StringFieldUpdateOperationsInput | string
    currency_symbol?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    db_url?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    company_logo?: NullableStringFieldUpdateOperationsInput | string | null
    logo_name?: NullableStringFieldUpdateOperationsInput | string | null
    logo_size?: NullableIntFieldUpdateOperationsInput | number | null
    roles?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: IntFieldUpdateOperationsInput | number
    company_name?: StringFieldUpdateOperationsInput | string
    sub_domain?: StringFieldUpdateOperationsInput | string
    currency_code?: StringFieldUpdateOperationsInput | string
    currency_symbol?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    db_url?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    company_logo?: NullableStringFieldUpdateOperationsInput | string | null
    logo_name?: NullableStringFieldUpdateOperationsInput | string | null
    logo_size?: NullableIntFieldUpdateOperationsInput | number | null
    roles?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    id?: string
    exclude_inspection?: boolean
    invoice50?: boolean
    fob_china?: boolean
    require_deposit_invoice?: boolean
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    materials?: MaterialCreateNestedManyWithoutServiceInput
    finishes?: FinishCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    exclude_inspection?: boolean
    invoice50?: boolean
    fob_china?: boolean
    require_deposit_invoice?: boolean
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    materials?: MaterialUncheckedCreateNestedManyWithoutServiceInput
    finishes?: FinishUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    exclude_inspection?: BoolFieldUpdateOperationsInput | boolean
    invoice50?: BoolFieldUpdateOperationsInput | boolean
    fob_china?: BoolFieldUpdateOperationsInput | boolean
    require_deposit_invoice?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: MaterialUpdateManyWithoutServiceNestedInput
    finishes?: FinishUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    exclude_inspection?: BoolFieldUpdateOperationsInput | boolean
    invoice50?: BoolFieldUpdateOperationsInput | boolean
    fob_china?: BoolFieldUpdateOperationsInput | boolean
    require_deposit_invoice?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: MaterialUncheckedUpdateManyWithoutServiceNestedInput
    finishes?: FinishUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    exclude_inspection?: boolean
    invoice50?: boolean
    fob_china?: boolean
    require_deposit_invoice?: boolean
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    exclude_inspection?: BoolFieldUpdateOperationsInput | boolean
    invoice50?: BoolFieldUpdateOperationsInput | boolean
    fob_china?: BoolFieldUpdateOperationsInput | boolean
    require_deposit_invoice?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    exclude_inspection?: BoolFieldUpdateOperationsInput | boolean
    invoice50?: BoolFieldUpdateOperationsInput | boolean
    fob_china?: BoolFieldUpdateOperationsInput | boolean
    require_deposit_invoice?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialCreateInput = {
    id?: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    service: ServiceCreateNestedOneWithoutMaterialsInput
  }

  export type MaterialUncheckedCreateInput = {
    id?: string
    service_id: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MaterialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutMaterialsNestedInput
  }

  export type MaterialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialCreateManyInput = {
    id?: string
    service_id: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MaterialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinishCreateInput = {
    id?: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    service: ServiceCreateNestedOneWithoutFinishesInput
  }

  export type FinishUncheckedCreateInput = {
    id?: string
    service_id: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FinishUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutFinishesNestedInput
  }

  export type FinishUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinishCreateManyInput = {
    id?: string
    service_id: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FinishUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinishUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    service_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type currencyCreateInput = {
    id?: string
    currency_id?: number
    code: string
    name: string
    symbol: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type currencyUncheckedCreateInput = {
    id?: string
    currency_id?: number
    code: string
    name: string
    symbol: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type currencyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currency_id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type currencyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currency_id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type currencyCreateManyInput = {
    id?: string
    currency_id?: number
    code: string
    name: string
    symbol: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type currencyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    currency_id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type currencyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    currency_id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payment_termsCreateInput = {
    id?: string
    payment_terms_id?: number
    name: string
    description?: string | null
    due_days?: number
    discount_days?: number
    discount_percent?: Decimal | DecimalJsLike | number | string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type payment_termsUncheckedCreateInput = {
    id?: string
    payment_terms_id?: number
    name: string
    description?: string | null
    due_days?: number
    discount_days?: number
    discount_percent?: Decimal | DecimalJsLike | number | string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type payment_termsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    payment_terms_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_days?: IntFieldUpdateOperationsInput | number
    discount_days?: IntFieldUpdateOperationsInput | number
    discount_percent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payment_termsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    payment_terms_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_days?: IntFieldUpdateOperationsInput | number
    discount_days?: IntFieldUpdateOperationsInput | number
    discount_percent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payment_termsCreateManyInput = {
    id?: string
    payment_terms_id?: number
    name: string
    description?: string | null
    due_days?: number
    discount_days?: number
    discount_percent?: Decimal | DecimalJsLike | number | string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type payment_termsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    payment_terms_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_days?: IntFieldUpdateOperationsInput | number
    discount_days?: IntFieldUpdateOperationsInput | number
    discount_percent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payment_termsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    payment_terms_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    due_days?: IntFieldUpdateOperationsInput | number
    discount_days?: IntFieldUpdateOperationsInput | number
    discount_percent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentStatusCreateInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentStatusUncheckedCreateInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentStatusCreateManyInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteStatusCreateInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type QuoteStatusUncheckedCreateInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type QuoteStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteStatusCreateManyInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type QuoteStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderStatusCreateInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderStatusUncheckedCreateInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderStatusCreateManyInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogisticsStatusCreateInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LogisticsStatusUncheckedCreateInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LogisticsStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogisticsStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogisticsStatusCreateManyInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LogisticsStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogisticsStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceStatusCreateInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FinanceStatusUncheckedCreateInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FinanceStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceStatusCreateManyInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FinanceStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinanceStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vendor_capabilitiesCreateInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    subCategories?: vendor_capability_sub_categoriesCreateNestedManyWithoutCapabilityInput
  }

  export type vendor_capabilitiesUncheckedCreateInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    subCategories?: vendor_capability_sub_categoriesUncheckedCreateNestedManyWithoutCapabilityInput
  }

  export type vendor_capabilitiesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategories?: vendor_capability_sub_categoriesUpdateManyWithoutCapabilityNestedInput
  }

  export type vendor_capabilitiesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategories?: vendor_capability_sub_categoriesUncheckedUpdateManyWithoutCapabilityNestedInput
  }

  export type vendor_capabilitiesCreateManyInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type vendor_capabilitiesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vendor_capabilitiesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vendor_capability_sub_categoriesCreateInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    capability: vendor_capabilitiesCreateNestedOneWithoutSubCategoriesInput
  }

  export type vendor_capability_sub_categoriesUncheckedCreateInput = {
    id?: string
    name: string
    vendor_capability_id: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type vendor_capability_sub_categoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    capability?: vendor_capabilitiesUpdateOneRequiredWithoutSubCategoriesNestedInput
  }

  export type vendor_capability_sub_categoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vendor_capability_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vendor_capability_sub_categoriesCreateManyInput = {
    id?: string
    name: string
    vendor_capability_id: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type vendor_capability_sub_categoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vendor_capability_sub_categoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    vendor_capability_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vendor_certificationsCreateInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type vendor_certificationsUncheckedCreateInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type vendor_certificationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vendor_certificationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vendor_certificationsCreateManyInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type vendor_certificationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vendor_certificationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vendor_flagsCreateInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type vendor_flagsUncheckedCreateInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type vendor_flagsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vendor_flagsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vendor_flagsCreateManyInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type vendor_flagsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vendor_flagsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    company_name?: SortOrder
    sub_domain?: SortOrder
    currency_code?: SortOrder
    currency_symbol?: SortOrder
    timezone?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    db_url?: SortOrder
    is_active?: SortOrder
    company_logo?: SortOrder
    logo_name?: SortOrder
    logo_size?: SortOrder
    roles?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type companyAvgOrderByAggregateInput = {
    company_id?: SortOrder
    logo_size?: SortOrder
  }

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    company_name?: SortOrder
    sub_domain?: SortOrder
    currency_code?: SortOrder
    currency_symbol?: SortOrder
    timezone?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    db_url?: SortOrder
    is_active?: SortOrder
    company_logo?: SortOrder
    logo_name?: SortOrder
    logo_size?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    company_name?: SortOrder
    sub_domain?: SortOrder
    currency_code?: SortOrder
    currency_symbol?: SortOrder
    timezone?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    db_url?: SortOrder
    is_active?: SortOrder
    company_logo?: SortOrder
    logo_name?: SortOrder
    logo_size?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type companySumOrderByAggregateInput = {
    company_id?: SortOrder
    logo_size?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type MaterialListRelationFilter = {
    every?: MaterialWhereInput
    some?: MaterialWhereInput
    none?: MaterialWhereInput
  }

  export type FinishListRelationFilter = {
    every?: FinishWhereInput
    some?: FinishWhereInput
    none?: FinishWhereInput
  }

  export type MaterialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FinishOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    exclude_inspection?: SortOrder
    invoice50?: SortOrder
    fob_china?: SortOrder
    require_deposit_invoice?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    exclude_inspection?: SortOrder
    invoice50?: SortOrder
    fob_china?: SortOrder
    require_deposit_invoice?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    exclude_inspection?: SortOrder
    invoice50?: SortOrder
    fob_china?: SortOrder
    require_deposit_invoice?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type MaterialCountOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MaterialMinOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FinishCountOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FinishMaxOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FinishMinOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type currencyCountOrderByAggregateInput = {
    id?: SortOrder
    currency_id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type currencyAvgOrderByAggregateInput = {
    currency_id?: SortOrder
  }

  export type currencyMaxOrderByAggregateInput = {
    id?: SortOrder
    currency_id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type currencyMinOrderByAggregateInput = {
    id?: SortOrder
    currency_id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type currencySumOrderByAggregateInput = {
    currency_id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type payment_termsCountOrderByAggregateInput = {
    id?: SortOrder
    payment_terms_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    due_days?: SortOrder
    discount_days?: SortOrder
    discount_percent?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type payment_termsAvgOrderByAggregateInput = {
    payment_terms_id?: SortOrder
    due_days?: SortOrder
    discount_days?: SortOrder
    discount_percent?: SortOrder
  }

  export type payment_termsMaxOrderByAggregateInput = {
    id?: SortOrder
    payment_terms_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    due_days?: SortOrder
    discount_days?: SortOrder
    discount_percent?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type payment_termsMinOrderByAggregateInput = {
    id?: SortOrder
    payment_terms_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    due_days?: SortOrder
    discount_days?: SortOrder
    discount_percent?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type payment_termsSumOrderByAggregateInput = {
    payment_terms_id?: SortOrder
    due_days?: SortOrder
    discount_days?: SortOrder
    discount_percent?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type PaymentStatusCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentStatusMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type QuoteStatusCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type QuoteStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type QuoteStatusMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderStatusCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderStatusMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LogisticsStatusCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LogisticsStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LogisticsStatusMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FinanceStatusCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FinanceStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FinanceStatusMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Vendor_capability_sub_categoriesListRelationFilter = {
    every?: vendor_capability_sub_categoriesWhereInput
    some?: vendor_capability_sub_categoriesWhereInput
    none?: vendor_capability_sub_categoriesWhereInput
  }

  export type vendor_capability_sub_categoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type vendor_capabilitiesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type vendor_capabilitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type vendor_capabilitiesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Vendor_capabilitiesScalarRelationFilter = {
    is?: vendor_capabilitiesWhereInput
    isNot?: vendor_capabilitiesWhereInput
  }

  export type vendor_capability_sub_categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    vendor_capability_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type vendor_capability_sub_categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    vendor_capability_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type vendor_capability_sub_categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    vendor_capability_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type vendor_certificationsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type vendor_certificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type vendor_certificationsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type vendor_flagsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type vendor_flagsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type vendor_flagsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MaterialCreateNestedManyWithoutServiceInput = {
    create?: XOR<MaterialCreateWithoutServiceInput, MaterialUncheckedCreateWithoutServiceInput> | MaterialCreateWithoutServiceInput[] | MaterialUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutServiceInput | MaterialCreateOrConnectWithoutServiceInput[]
    createMany?: MaterialCreateManyServiceInputEnvelope
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type FinishCreateNestedManyWithoutServiceInput = {
    create?: XOR<FinishCreateWithoutServiceInput, FinishUncheckedCreateWithoutServiceInput> | FinishCreateWithoutServiceInput[] | FinishUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: FinishCreateOrConnectWithoutServiceInput | FinishCreateOrConnectWithoutServiceInput[]
    createMany?: FinishCreateManyServiceInputEnvelope
    connect?: FinishWhereUniqueInput | FinishWhereUniqueInput[]
  }

  export type MaterialUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<MaterialCreateWithoutServiceInput, MaterialUncheckedCreateWithoutServiceInput> | MaterialCreateWithoutServiceInput[] | MaterialUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutServiceInput | MaterialCreateOrConnectWithoutServiceInput[]
    createMany?: MaterialCreateManyServiceInputEnvelope
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type FinishUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<FinishCreateWithoutServiceInput, FinishUncheckedCreateWithoutServiceInput> | FinishCreateWithoutServiceInput[] | FinishUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: FinishCreateOrConnectWithoutServiceInput | FinishCreateOrConnectWithoutServiceInput[]
    createMany?: FinishCreateManyServiceInputEnvelope
    connect?: FinishWhereUniqueInput | FinishWhereUniqueInput[]
  }

  export type MaterialUpdateManyWithoutServiceNestedInput = {
    create?: XOR<MaterialCreateWithoutServiceInput, MaterialUncheckedCreateWithoutServiceInput> | MaterialCreateWithoutServiceInput[] | MaterialUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutServiceInput | MaterialCreateOrConnectWithoutServiceInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutServiceInput | MaterialUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: MaterialCreateManyServiceInputEnvelope
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutServiceInput | MaterialUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutServiceInput | MaterialUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type FinishUpdateManyWithoutServiceNestedInput = {
    create?: XOR<FinishCreateWithoutServiceInput, FinishUncheckedCreateWithoutServiceInput> | FinishCreateWithoutServiceInput[] | FinishUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: FinishCreateOrConnectWithoutServiceInput | FinishCreateOrConnectWithoutServiceInput[]
    upsert?: FinishUpsertWithWhereUniqueWithoutServiceInput | FinishUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: FinishCreateManyServiceInputEnvelope
    set?: FinishWhereUniqueInput | FinishWhereUniqueInput[]
    disconnect?: FinishWhereUniqueInput | FinishWhereUniqueInput[]
    delete?: FinishWhereUniqueInput | FinishWhereUniqueInput[]
    connect?: FinishWhereUniqueInput | FinishWhereUniqueInput[]
    update?: FinishUpdateWithWhereUniqueWithoutServiceInput | FinishUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: FinishUpdateManyWithWhereWithoutServiceInput | FinishUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: FinishScalarWhereInput | FinishScalarWhereInput[]
  }

  export type MaterialUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<MaterialCreateWithoutServiceInput, MaterialUncheckedCreateWithoutServiceInput> | MaterialCreateWithoutServiceInput[] | MaterialUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutServiceInput | MaterialCreateOrConnectWithoutServiceInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutServiceInput | MaterialUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: MaterialCreateManyServiceInputEnvelope
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutServiceInput | MaterialUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutServiceInput | MaterialUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type FinishUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<FinishCreateWithoutServiceInput, FinishUncheckedCreateWithoutServiceInput> | FinishCreateWithoutServiceInput[] | FinishUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: FinishCreateOrConnectWithoutServiceInput | FinishCreateOrConnectWithoutServiceInput[]
    upsert?: FinishUpsertWithWhereUniqueWithoutServiceInput | FinishUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: FinishCreateManyServiceInputEnvelope
    set?: FinishWhereUniqueInput | FinishWhereUniqueInput[]
    disconnect?: FinishWhereUniqueInput | FinishWhereUniqueInput[]
    delete?: FinishWhereUniqueInput | FinishWhereUniqueInput[]
    connect?: FinishWhereUniqueInput | FinishWhereUniqueInput[]
    update?: FinishUpdateWithWhereUniqueWithoutServiceInput | FinishUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: FinishUpdateManyWithWhereWithoutServiceInput | FinishUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: FinishScalarWhereInput | FinishScalarWhereInput[]
  }

  export type ServiceCreateNestedOneWithoutMaterialsInput = {
    create?: XOR<ServiceCreateWithoutMaterialsInput, ServiceUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutMaterialsInput
    connect?: ServiceWhereUniqueInput
  }

  export type ServiceUpdateOneRequiredWithoutMaterialsNestedInput = {
    create?: XOR<ServiceCreateWithoutMaterialsInput, ServiceUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutMaterialsInput
    upsert?: ServiceUpsertWithoutMaterialsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutMaterialsInput, ServiceUpdateWithoutMaterialsInput>, ServiceUncheckedUpdateWithoutMaterialsInput>
  }

  export type ServiceCreateNestedOneWithoutFinishesInput = {
    create?: XOR<ServiceCreateWithoutFinishesInput, ServiceUncheckedCreateWithoutFinishesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutFinishesInput
    connect?: ServiceWhereUniqueInput
  }

  export type ServiceUpdateOneRequiredWithoutFinishesNestedInput = {
    create?: XOR<ServiceCreateWithoutFinishesInput, ServiceUncheckedCreateWithoutFinishesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutFinishesInput
    upsert?: ServiceUpsertWithoutFinishesInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutFinishesInput, ServiceUpdateWithoutFinishesInput>, ServiceUncheckedUpdateWithoutFinishesInput>
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type vendor_capability_sub_categoriesCreateNestedManyWithoutCapabilityInput = {
    create?: XOR<vendor_capability_sub_categoriesCreateWithoutCapabilityInput, vendor_capability_sub_categoriesUncheckedCreateWithoutCapabilityInput> | vendor_capability_sub_categoriesCreateWithoutCapabilityInput[] | vendor_capability_sub_categoriesUncheckedCreateWithoutCapabilityInput[]
    connectOrCreate?: vendor_capability_sub_categoriesCreateOrConnectWithoutCapabilityInput | vendor_capability_sub_categoriesCreateOrConnectWithoutCapabilityInput[]
    createMany?: vendor_capability_sub_categoriesCreateManyCapabilityInputEnvelope
    connect?: vendor_capability_sub_categoriesWhereUniqueInput | vendor_capability_sub_categoriesWhereUniqueInput[]
  }

  export type vendor_capability_sub_categoriesUncheckedCreateNestedManyWithoutCapabilityInput = {
    create?: XOR<vendor_capability_sub_categoriesCreateWithoutCapabilityInput, vendor_capability_sub_categoriesUncheckedCreateWithoutCapabilityInput> | vendor_capability_sub_categoriesCreateWithoutCapabilityInput[] | vendor_capability_sub_categoriesUncheckedCreateWithoutCapabilityInput[]
    connectOrCreate?: vendor_capability_sub_categoriesCreateOrConnectWithoutCapabilityInput | vendor_capability_sub_categoriesCreateOrConnectWithoutCapabilityInput[]
    createMany?: vendor_capability_sub_categoriesCreateManyCapabilityInputEnvelope
    connect?: vendor_capability_sub_categoriesWhereUniqueInput | vendor_capability_sub_categoriesWhereUniqueInput[]
  }

  export type vendor_capability_sub_categoriesUpdateManyWithoutCapabilityNestedInput = {
    create?: XOR<vendor_capability_sub_categoriesCreateWithoutCapabilityInput, vendor_capability_sub_categoriesUncheckedCreateWithoutCapabilityInput> | vendor_capability_sub_categoriesCreateWithoutCapabilityInput[] | vendor_capability_sub_categoriesUncheckedCreateWithoutCapabilityInput[]
    connectOrCreate?: vendor_capability_sub_categoriesCreateOrConnectWithoutCapabilityInput | vendor_capability_sub_categoriesCreateOrConnectWithoutCapabilityInput[]
    upsert?: vendor_capability_sub_categoriesUpsertWithWhereUniqueWithoutCapabilityInput | vendor_capability_sub_categoriesUpsertWithWhereUniqueWithoutCapabilityInput[]
    createMany?: vendor_capability_sub_categoriesCreateManyCapabilityInputEnvelope
    set?: vendor_capability_sub_categoriesWhereUniqueInput | vendor_capability_sub_categoriesWhereUniqueInput[]
    disconnect?: vendor_capability_sub_categoriesWhereUniqueInput | vendor_capability_sub_categoriesWhereUniqueInput[]
    delete?: vendor_capability_sub_categoriesWhereUniqueInput | vendor_capability_sub_categoriesWhereUniqueInput[]
    connect?: vendor_capability_sub_categoriesWhereUniqueInput | vendor_capability_sub_categoriesWhereUniqueInput[]
    update?: vendor_capability_sub_categoriesUpdateWithWhereUniqueWithoutCapabilityInput | vendor_capability_sub_categoriesUpdateWithWhereUniqueWithoutCapabilityInput[]
    updateMany?: vendor_capability_sub_categoriesUpdateManyWithWhereWithoutCapabilityInput | vendor_capability_sub_categoriesUpdateManyWithWhereWithoutCapabilityInput[]
    deleteMany?: vendor_capability_sub_categoriesScalarWhereInput | vendor_capability_sub_categoriesScalarWhereInput[]
  }

  export type vendor_capability_sub_categoriesUncheckedUpdateManyWithoutCapabilityNestedInput = {
    create?: XOR<vendor_capability_sub_categoriesCreateWithoutCapabilityInput, vendor_capability_sub_categoriesUncheckedCreateWithoutCapabilityInput> | vendor_capability_sub_categoriesCreateWithoutCapabilityInput[] | vendor_capability_sub_categoriesUncheckedCreateWithoutCapabilityInput[]
    connectOrCreate?: vendor_capability_sub_categoriesCreateOrConnectWithoutCapabilityInput | vendor_capability_sub_categoriesCreateOrConnectWithoutCapabilityInput[]
    upsert?: vendor_capability_sub_categoriesUpsertWithWhereUniqueWithoutCapabilityInput | vendor_capability_sub_categoriesUpsertWithWhereUniqueWithoutCapabilityInput[]
    createMany?: vendor_capability_sub_categoriesCreateManyCapabilityInputEnvelope
    set?: vendor_capability_sub_categoriesWhereUniqueInput | vendor_capability_sub_categoriesWhereUniqueInput[]
    disconnect?: vendor_capability_sub_categoriesWhereUniqueInput | vendor_capability_sub_categoriesWhereUniqueInput[]
    delete?: vendor_capability_sub_categoriesWhereUniqueInput | vendor_capability_sub_categoriesWhereUniqueInput[]
    connect?: vendor_capability_sub_categoriesWhereUniqueInput | vendor_capability_sub_categoriesWhereUniqueInput[]
    update?: vendor_capability_sub_categoriesUpdateWithWhereUniqueWithoutCapabilityInput | vendor_capability_sub_categoriesUpdateWithWhereUniqueWithoutCapabilityInput[]
    updateMany?: vendor_capability_sub_categoriesUpdateManyWithWhereWithoutCapabilityInput | vendor_capability_sub_categoriesUpdateManyWithWhereWithoutCapabilityInput[]
    deleteMany?: vendor_capability_sub_categoriesScalarWhereInput | vendor_capability_sub_categoriesScalarWhereInput[]
  }

  export type vendor_capabilitiesCreateNestedOneWithoutSubCategoriesInput = {
    create?: XOR<vendor_capabilitiesCreateWithoutSubCategoriesInput, vendor_capabilitiesUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: vendor_capabilitiesCreateOrConnectWithoutSubCategoriesInput
    connect?: vendor_capabilitiesWhereUniqueInput
  }

  export type vendor_capabilitiesUpdateOneRequiredWithoutSubCategoriesNestedInput = {
    create?: XOR<vendor_capabilitiesCreateWithoutSubCategoriesInput, vendor_capabilitiesUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: vendor_capabilitiesCreateOrConnectWithoutSubCategoriesInput
    upsert?: vendor_capabilitiesUpsertWithoutSubCategoriesInput
    connect?: vendor_capabilitiesWhereUniqueInput
    update?: XOR<XOR<vendor_capabilitiesUpdateToOneWithWhereWithoutSubCategoriesInput, vendor_capabilitiesUpdateWithoutSubCategoriesInput>, vendor_capabilitiesUncheckedUpdateWithoutSubCategoriesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type MaterialCreateWithoutServiceInput = {
    id?: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MaterialUncheckedCreateWithoutServiceInput = {
    id?: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MaterialCreateOrConnectWithoutServiceInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutServiceInput, MaterialUncheckedCreateWithoutServiceInput>
  }

  export type MaterialCreateManyServiceInputEnvelope = {
    data: MaterialCreateManyServiceInput | MaterialCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type FinishCreateWithoutServiceInput = {
    id?: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FinishUncheckedCreateWithoutServiceInput = {
    id?: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FinishCreateOrConnectWithoutServiceInput = {
    where: FinishWhereUniqueInput
    create: XOR<FinishCreateWithoutServiceInput, FinishUncheckedCreateWithoutServiceInput>
  }

  export type FinishCreateManyServiceInputEnvelope = {
    data: FinishCreateManyServiceInput | FinishCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type MaterialUpsertWithWhereUniqueWithoutServiceInput = {
    where: MaterialWhereUniqueInput
    update: XOR<MaterialUpdateWithoutServiceInput, MaterialUncheckedUpdateWithoutServiceInput>
    create: XOR<MaterialCreateWithoutServiceInput, MaterialUncheckedCreateWithoutServiceInput>
  }

  export type MaterialUpdateWithWhereUniqueWithoutServiceInput = {
    where: MaterialWhereUniqueInput
    data: XOR<MaterialUpdateWithoutServiceInput, MaterialUncheckedUpdateWithoutServiceInput>
  }

  export type MaterialUpdateManyWithWhereWithoutServiceInput = {
    where: MaterialScalarWhereInput
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyWithoutServiceInput>
  }

  export type MaterialScalarWhereInput = {
    AND?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
    OR?: MaterialScalarWhereInput[]
    NOT?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
    id?: StringFilter<"Material"> | string
    service_id?: StringFilter<"Material"> | string
    name?: StringNullableFilter<"Material"> | string | null
    created_at?: DateTimeFilter<"Material"> | Date | string
    updated_at?: DateTimeFilter<"Material"> | Date | string
  }

  export type FinishUpsertWithWhereUniqueWithoutServiceInput = {
    where: FinishWhereUniqueInput
    update: XOR<FinishUpdateWithoutServiceInput, FinishUncheckedUpdateWithoutServiceInput>
    create: XOR<FinishCreateWithoutServiceInput, FinishUncheckedCreateWithoutServiceInput>
  }

  export type FinishUpdateWithWhereUniqueWithoutServiceInput = {
    where: FinishWhereUniqueInput
    data: XOR<FinishUpdateWithoutServiceInput, FinishUncheckedUpdateWithoutServiceInput>
  }

  export type FinishUpdateManyWithWhereWithoutServiceInput = {
    where: FinishScalarWhereInput
    data: XOR<FinishUpdateManyMutationInput, FinishUncheckedUpdateManyWithoutServiceInput>
  }

  export type FinishScalarWhereInput = {
    AND?: FinishScalarWhereInput | FinishScalarWhereInput[]
    OR?: FinishScalarWhereInput[]
    NOT?: FinishScalarWhereInput | FinishScalarWhereInput[]
    id?: StringFilter<"Finish"> | string
    service_id?: StringFilter<"Finish"> | string
    name?: StringNullableFilter<"Finish"> | string | null
    created_at?: DateTimeFilter<"Finish"> | Date | string
    updated_at?: DateTimeFilter<"Finish"> | Date | string
  }

  export type ServiceCreateWithoutMaterialsInput = {
    id?: string
    exclude_inspection?: boolean
    invoice50?: boolean
    fob_china?: boolean
    require_deposit_invoice?: boolean
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    finishes?: FinishCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutMaterialsInput = {
    id?: string
    exclude_inspection?: boolean
    invoice50?: boolean
    fob_china?: boolean
    require_deposit_invoice?: boolean
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    finishes?: FinishUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutMaterialsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutMaterialsInput, ServiceUncheckedCreateWithoutMaterialsInput>
  }

  export type ServiceUpsertWithoutMaterialsInput = {
    update: XOR<ServiceUpdateWithoutMaterialsInput, ServiceUncheckedUpdateWithoutMaterialsInput>
    create: XOR<ServiceCreateWithoutMaterialsInput, ServiceUncheckedCreateWithoutMaterialsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutMaterialsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutMaterialsInput, ServiceUncheckedUpdateWithoutMaterialsInput>
  }

  export type ServiceUpdateWithoutMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    exclude_inspection?: BoolFieldUpdateOperationsInput | boolean
    invoice50?: BoolFieldUpdateOperationsInput | boolean
    fob_china?: BoolFieldUpdateOperationsInput | boolean
    require_deposit_invoice?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finishes?: FinishUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    exclude_inspection?: BoolFieldUpdateOperationsInput | boolean
    invoice50?: BoolFieldUpdateOperationsInput | boolean
    fob_china?: BoolFieldUpdateOperationsInput | boolean
    require_deposit_invoice?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finishes?: FinishUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateWithoutFinishesInput = {
    id?: string
    exclude_inspection?: boolean
    invoice50?: boolean
    fob_china?: boolean
    require_deposit_invoice?: boolean
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    materials?: MaterialCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutFinishesInput = {
    id?: string
    exclude_inspection?: boolean
    invoice50?: boolean
    fob_china?: boolean
    require_deposit_invoice?: boolean
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    materials?: MaterialUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutFinishesInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutFinishesInput, ServiceUncheckedCreateWithoutFinishesInput>
  }

  export type ServiceUpsertWithoutFinishesInput = {
    update: XOR<ServiceUpdateWithoutFinishesInput, ServiceUncheckedUpdateWithoutFinishesInput>
    create: XOR<ServiceCreateWithoutFinishesInput, ServiceUncheckedCreateWithoutFinishesInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutFinishesInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutFinishesInput, ServiceUncheckedUpdateWithoutFinishesInput>
  }

  export type ServiceUpdateWithoutFinishesInput = {
    id?: StringFieldUpdateOperationsInput | string
    exclude_inspection?: BoolFieldUpdateOperationsInput | boolean
    invoice50?: BoolFieldUpdateOperationsInput | boolean
    fob_china?: BoolFieldUpdateOperationsInput | boolean
    require_deposit_invoice?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: MaterialUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutFinishesInput = {
    id?: StringFieldUpdateOperationsInput | string
    exclude_inspection?: BoolFieldUpdateOperationsInput | boolean
    invoice50?: BoolFieldUpdateOperationsInput | boolean
    fob_china?: BoolFieldUpdateOperationsInput | boolean
    require_deposit_invoice?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: MaterialUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type vendor_capability_sub_categoriesCreateWithoutCapabilityInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type vendor_capability_sub_categoriesUncheckedCreateWithoutCapabilityInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type vendor_capability_sub_categoriesCreateOrConnectWithoutCapabilityInput = {
    where: vendor_capability_sub_categoriesWhereUniqueInput
    create: XOR<vendor_capability_sub_categoriesCreateWithoutCapabilityInput, vendor_capability_sub_categoriesUncheckedCreateWithoutCapabilityInput>
  }

  export type vendor_capability_sub_categoriesCreateManyCapabilityInputEnvelope = {
    data: vendor_capability_sub_categoriesCreateManyCapabilityInput | vendor_capability_sub_categoriesCreateManyCapabilityInput[]
    skipDuplicates?: boolean
  }

  export type vendor_capability_sub_categoriesUpsertWithWhereUniqueWithoutCapabilityInput = {
    where: vendor_capability_sub_categoriesWhereUniqueInput
    update: XOR<vendor_capability_sub_categoriesUpdateWithoutCapabilityInput, vendor_capability_sub_categoriesUncheckedUpdateWithoutCapabilityInput>
    create: XOR<vendor_capability_sub_categoriesCreateWithoutCapabilityInput, vendor_capability_sub_categoriesUncheckedCreateWithoutCapabilityInput>
  }

  export type vendor_capability_sub_categoriesUpdateWithWhereUniqueWithoutCapabilityInput = {
    where: vendor_capability_sub_categoriesWhereUniqueInput
    data: XOR<vendor_capability_sub_categoriesUpdateWithoutCapabilityInput, vendor_capability_sub_categoriesUncheckedUpdateWithoutCapabilityInput>
  }

  export type vendor_capability_sub_categoriesUpdateManyWithWhereWithoutCapabilityInput = {
    where: vendor_capability_sub_categoriesScalarWhereInput
    data: XOR<vendor_capability_sub_categoriesUpdateManyMutationInput, vendor_capability_sub_categoriesUncheckedUpdateManyWithoutCapabilityInput>
  }

  export type vendor_capability_sub_categoriesScalarWhereInput = {
    AND?: vendor_capability_sub_categoriesScalarWhereInput | vendor_capability_sub_categoriesScalarWhereInput[]
    OR?: vendor_capability_sub_categoriesScalarWhereInput[]
    NOT?: vendor_capability_sub_categoriesScalarWhereInput | vendor_capability_sub_categoriesScalarWhereInput[]
    id?: StringFilter<"vendor_capability_sub_categories"> | string
    name?: StringFilter<"vendor_capability_sub_categories"> | string
    vendor_capability_id?: StringFilter<"vendor_capability_sub_categories"> | string
    is_active?: BoolFilter<"vendor_capability_sub_categories"> | boolean
    created_at?: DateTimeFilter<"vendor_capability_sub_categories"> | Date | string
    updated_at?: DateTimeFilter<"vendor_capability_sub_categories"> | Date | string
  }

  export type vendor_capabilitiesCreateWithoutSubCategoriesInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type vendor_capabilitiesUncheckedCreateWithoutSubCategoriesInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type vendor_capabilitiesCreateOrConnectWithoutSubCategoriesInput = {
    where: vendor_capabilitiesWhereUniqueInput
    create: XOR<vendor_capabilitiesCreateWithoutSubCategoriesInput, vendor_capabilitiesUncheckedCreateWithoutSubCategoriesInput>
  }

  export type vendor_capabilitiesUpsertWithoutSubCategoriesInput = {
    update: XOR<vendor_capabilitiesUpdateWithoutSubCategoriesInput, vendor_capabilitiesUncheckedUpdateWithoutSubCategoriesInput>
    create: XOR<vendor_capabilitiesCreateWithoutSubCategoriesInput, vendor_capabilitiesUncheckedCreateWithoutSubCategoriesInput>
    where?: vendor_capabilitiesWhereInput
  }

  export type vendor_capabilitiesUpdateToOneWithWhereWithoutSubCategoriesInput = {
    where?: vendor_capabilitiesWhereInput
    data: XOR<vendor_capabilitiesUpdateWithoutSubCategoriesInput, vendor_capabilitiesUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type vendor_capabilitiesUpdateWithoutSubCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vendor_capabilitiesUncheckedUpdateWithoutSubCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialCreateManyServiceInput = {
    id?: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FinishCreateManyServiceInput = {
    id?: string
    name?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MaterialUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinishUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinishUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinishUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vendor_capability_sub_categoriesCreateManyCapabilityInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type vendor_capability_sub_categoriesUpdateWithoutCapabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vendor_capability_sub_categoriesUncheckedUpdateWithoutCapabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vendor_capability_sub_categoriesUncheckedUpdateManyWithoutCapabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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