/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { RelayAPI } = require("@azure/arm-relay");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Primary and secondary connection strings to the WCF relay.
 *
 * @summary Primary and secondary connection strings to the WCF relay.
 * x-ms-original-file: specification/relay/resource-manager/Microsoft.Relay/stable/2017-04-01/examples/Relay/RelayAuthorizationRuleListKey.json
 */
async function relayAuthorizationRuleListKeyJson() {
  const subscriptionId = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName = "resourcegroup";
  const namespaceName = "example-RelayNamespace-01";
  const relayName = "example-Relay-wcf-01";
  const authorizationRuleName = "example-RelayAuthRules-01";
  const credential = new DefaultAzureCredential();
  const client = new RelayAPI(credential, subscriptionId);
  const result = await client.wCFRelays.listKeys(
    resourceGroupName,
    namespaceName,
    relayName,
    authorizationRuleName
  );
  console.log(result);
}

relayAuthorizationRuleListKeyJson().catch(console.error);