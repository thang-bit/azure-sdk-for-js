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
  DeploymentResource,
  AppPlatformManagementClient
} from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Operation to update an exiting Deployment.
 *
 * @summary Operation to update an exiting Deployment.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2022-09-01-preview/examples/Deployments_Update.json
 */
async function deploymentsUpdate() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const appName = "myapp";
  const deploymentName = "mydeployment";
  const deploymentResource: DeploymentResource = {
    properties: {
      instances: [],
      source: {
        type: "Source",
        artifactSelector: "sub-module-1",
        relativePath:
          "resources/a172cedcae47474b615c54d510a5d84a8dea3032e958587430b413538be3f333-2019082605-e3095339-1723-44b7-8b5e-31b1003978bc",
        version: "1.0"
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.deployments.beginUpdateAndWait(
    resourceGroupName,
    serviceName,
    appName,
    deploymentName,
    deploymentResource
  );
  console.log(result);
}

deploymentsUpdate().catch(console.error);

/**
 * This sample demonstrates how to Operation to update an exiting Deployment.
 *
 * @summary Operation to update an exiting Deployment.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2022-09-01-preview/examples/Deployments_Update_CustomContainer.json
 */
async function deploymentsUpdateCustomContainer() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const appName = "myapp";
  const deploymentName = "mydeployment";
  const deploymentResource: DeploymentResource = {
    properties: {
      instances: [],
      source: {
        type: "Container",
        customContainer: {
          args: ["-c", "while true; do echo hello; sleep 10;done"],
          command: ["/bin/sh"],
          containerImage: "myNewContainerImage:v1",
          imageRegistryCredential: {
            password: "<myNewPassword>",
            username: "myNewUsername"
          },
          server: "mynewacr.azurecr.io"
        }
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.deployments.beginUpdateAndWait(
    resourceGroupName,
    serviceName,
    appName,
    deploymentName,
    deploymentResource
  );
  console.log(result);
}

deploymentsUpdateCustomContainer().catch(console.error);