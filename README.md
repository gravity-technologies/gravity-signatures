# Gravity-Signatures

## Overview 

Reference types for DFNS team that enumerates all [EIP-712 TypedData Signatures]
(https://docs.dfns.co/d/api-docs/wallets/generate-signature-from-wallet/evm-generate-signature#eip712-signature-request-body-1) used in GRVT exchange.


## How to use this repository

1. To see EIP-712 types messages, go to `message/types.ts`
2. To see how signatures are generated from these message, go to `message/sig.ts`
3. To understand custom types that are used as ENUMs in our smart contract, go to `message/customtype.ts`
4. To see how the messages are signed by FE, go to api.ts
5. To see contract ABIs, go to `./abi`

Last Updated: Feb 22, 2023