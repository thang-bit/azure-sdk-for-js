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
 * This sample demonstrates how to Creates a new peer ASN or updates an existing peer ASN with the specified name under the given subscription.
 *
 * @summary Creates a new peer ASN or updates an existing peer ASN with the specified name under the given subscription.
 * x-ms-original-file: specification/peering/resource-manager/Microsoft.Peering/stable/2021-06-01/examples/CreatePeerAsn.json
 */
import { PeerAsn, PeeringManagementClient } from "@azure/arm-peering";
import { DefaultAzureCredential } from "@azure/identity";

async function createAPeerAsn() {
  const subscriptionId = "subId";
  const peerAsnName = "peerAsnName";
  const peerAsn: PeerAsn = {
    peerAsn: 65000,
    peerContactDetail: [
      { email: "noc@contoso.com", phone: "+1 (234) 567-8999", role: "Noc" },
      { email: "abc@contoso.com", phone: "+1 (234) 567-8900", role: "Policy" },
      {
        email: "xyz@contoso.com",
        phone: "+1 (234) 567-8900",
        role: "Technical"
      }
    ],
    peerName: "Contoso"
  };
  const credential = new DefaultAzureCredential();
  const client = new PeeringManagementClient(credential, subscriptionId);
  const result = await client.peerAsns.createOrUpdate(peerAsnName, peerAsn);
  console.log(result);
}

createAPeerAsn().catch(console.error);