/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Gets information about the specified mobile network slice.
 *
 * @summary Gets information about the specified mobile network slice.
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/preview/2022-01-01-preview/examples/SliceGet.json
 */
const { MobileNetworkManagementClient } = require("@azure/arm-mobilenetwork");
const { DefaultAzureCredential } = require("@azure/identity");

async function getMobileNetworkSlice() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const mobileNetworkName = "testMobileNetwork";
  const sliceName = "testSlice";
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const result = await client.slices.get(resourceGroupName, mobileNetworkName, sliceName);
  console.log(result);
}

getMobileNetworkSlice().catch(console.error);