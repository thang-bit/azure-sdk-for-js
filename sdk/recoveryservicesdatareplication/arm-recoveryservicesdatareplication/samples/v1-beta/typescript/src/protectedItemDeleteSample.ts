/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ProtectedItemDeleteOptionalParams,
  AzureSiteRecoveryManagementServiceAPI
} from "@azure/arm-recoveryservicesdatareplication";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Removes the protected item.
 *
 * @summary Removes the protected item.
 * x-ms-original-file: specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/preview/2021-02-16-preview/examples/ProtectedItem_Delete.json
 */
async function protectedItemDelete() {
  const subscriptionId =
    process.env["RECOVERYSERVICESDATAREPLICATION_SUBSCRIPTION_ID"] ||
    "930CEC23-4430-4513-B855-DBA237E2F3BF";
  const resourceGroupName =
    process.env["RECOVERYSERVICESDATAREPLICATION_RESOURCE_GROUP"] ||
    "rgrecoveryservicesdatareplication";
  const vaultName = "4";
  const protectedItemName = "d";
  const forceDelete = true;
  const options: ProtectedItemDeleteOptionalParams = { forceDelete };
  const credential = new DefaultAzureCredential();
  const client = new AzureSiteRecoveryManagementServiceAPI(
    credential,
    subscriptionId
  );
  const result = await client.protectedItem.beginDeleteAndWait(
    resourceGroupName,
    vaultName,
    protectedItemName,
    options
  );
  console.log(result);
}

async function main() {
  protectedItemDelete();
}

main().catch(console.error);
