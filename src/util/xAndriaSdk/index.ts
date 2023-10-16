import { PublicKey } from "@solana/web3.js";

export * from "./forum.client";
export * from "./forum.pda";
export * from "./forum.types";

export const FORUM_PROG_ID = new PublicKey(
	"FoRUMvAQAPBBJhMvw2UAc1Yx67rxQf9eao87b75GJ857"
);

// export const FORUM_PROG_ID = new PublicKey(
//     'FoRUMUrDyBL5wh1N5Lntac21rVNRcktQFmkigLaUp4ab'
// );
