import { randomInt } from "crypto"
import { BytesLike, Wallet, utils } from "ethers"



export function buf(s: string): Buffer {
  return Buffer.from(s.substring(2), "hex")
}

export function getTimestampNs(addDays: number = 10): BigInt {
  const deltaInMs = addDays * 24 * 60 * 60 * 1000
  return BigInt(Date.now() + deltaInMs) * 1_000_000n
}

export function wallet(pkHex?: string): Wallet {
  if (pkHex == null) {
    return Wallet.createRandom()
  }
  return new Wallet(pkHex)
}

export function nonce() {
  return randomInt(22021991)
}

export type CfgMap = Map<number, Bytes32>

export async function bytes32(v: string | number | Wallet): Promise<Bytes32> {
  let hex: BytesLike = "0"
  if (typeof v === "number") {
    hex = utils.hexlify(v)
  } else if (v instanceof Wallet) {
    hex = await v.getAddress()
  }
  return utils.hexZeroPad(hex, 32)
}

export type Bytes32 = string

