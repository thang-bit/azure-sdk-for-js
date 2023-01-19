/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ContainerServiceClient } = require("@azure/arm-containerservice");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to A member contains a reference to an existing Kubernetes cluster. Creating a member makes the referenced cluster join the Fleet.
 *
 * @summary A member contains a reference to an existing Kubernetes cluster. Creating a member makes the referenced cluster join the Fleet.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-09-02-preview/examples/FleetMembers_Create.json
 */
async function createAFleetMemberResourceJoinsAnExistingClusterToTheFleet() {
  const subscriptionId = process.env["CONTAINERSERVICE_SUBSCRIPTION_ID"] || "subid1";
  const resourceGroupName = process.env["CONTAINERSERVICE_RESOURCE_GROUP"] || "rg1";
  const fleetName = "fleet-1";
  const fleetMemberName = "member-1";
  const parameters = {
    clusterResourceId:
      "/subscriptions/subid1/resourcegroups/rg1/providers/Microsoft.ContainerService/managedClusters/cluster-1",
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.fleetMembers.beginCreateOrUpdateAndWait(
    resourceGroupName,
    fleetName,
    fleetMemberName,
    parameters
  );
  console.log(result);
}

async function main() {
  createAFleetMemberResourceJoinsAnExistingClusterToTheFleet();
}

main().catch(console.error);
