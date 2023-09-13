/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * The representation of a dora time to production feature metric
 */
export interface DoraFeaturesSchema {
    /** The name of a feature toggle */
    name: string;
    /** The average number of days it takes a feature toggle to get into production */
    timeToProduction: number;
}
