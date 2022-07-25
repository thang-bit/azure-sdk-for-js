/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  AlphaIdsGetConfigurationOptionalParams,
  AlphaIdsGetConfigurationResponse,
  AlphaIdsUpsertConfigurationOptionalParams,
  AlphaIdsUpsertConfigurationResponse
} from "../models";

/** Interface representing a AlphaIds. */
export interface AlphaIds {
  /**
   * Get the Alpha IDs configuration that's applied for the current resource.
   * @param options The options parameters.
   */
  getConfiguration(
    options?: AlphaIdsGetConfigurationOptionalParams
  ): Promise<AlphaIdsGetConfigurationResponse>;
  /**
   * Creates or updates Alpha ID Configuration for the current resource.
   * @param enabled Indicates whether the use of Alpha IDs is supported for a specific resource.
   * @param options The options parameters.
   */
  upsertConfiguration(
    enabled: boolean,
    options?: AlphaIdsUpsertConfigurationOptionalParams
  ): Promise<AlphaIdsUpsertConfigurationResponse>;
}