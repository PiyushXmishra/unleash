/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * Data about an application environment
 */
export interface ApplicationOverviewEnvironmentSchema {
    /** The number of instances of the application environment */
    instanceCount: number;
    /** The last time the application environment was seen */
    lastSeen: string;
    /** Name of the application environment */
    name: string;
    /** SDKs used in the application environment */
    sdks: string[];
}
