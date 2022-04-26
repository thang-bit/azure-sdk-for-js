/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SynapseManagementClient } = require("@azure/arm-synapse");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get the specified SQL pool geo backup policy
 *
 * @summary Get the specified SQL pool geo backup policy
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/GetSqlPoolGeoBackupPolicy.json
 */
async function getSqlPoolGeoBackupPolicy() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "sqlcrudtest-4799";
  const workspaceName = "sqlcrudtest-5961";
  const sqlPoolName = "testdw";
  const geoBackupPolicyName = "Default";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.sqlPoolGeoBackupPolicies.get(
    resourceGroupName,
    workspaceName,
    sqlPoolName,
    geoBackupPolicyName
  );
  console.log(result);
}

getSqlPoolGeoBackupPolicy().catch(console.error);