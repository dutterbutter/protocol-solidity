/**
 * Copyright 2021-2023 Webb Technologies
 * SPDX-License-Identifier: Apache 2.0/MIT
 */

pragma solidity ^0.8.5;

struct ExtData {
	address recipient;
	int256 extAmount;
	address relayer;
	uint256 fee;
	uint256 refund;
	address token;
	bytes encryptedOutput1;
	bytes encryptedOutput2;
}
