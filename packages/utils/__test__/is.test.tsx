import {
  isEmpty,
  isElectron,
  isCIDR,
  isIPV4,
  isIPV6,
  isIP,
  isPort,
  isIPv4WithPort,
  isMask,
  isMultipleIp,
  isIpRange,
  isIpWithIpRange,
  isUrl,
  isPhoneNum,
  isTelNum,
  isContactNum,
  isEmail,
  isId
} from "../src/is"

import { describe, expect, test } from "vitest"

describe("isEmpty", () => {
  test("should return true/false for empty array/object", () => {
    expect(isEmpty([])).toBe(true)
    expect(isEmpty({})).toBe(true)
    expect(isEmpty([1, 2])).toBe(false)
    expect(isEmpty({ key: "value" })).toBe(false)
  })
})

describe("isElectron", () => {
  test("should return false in non-Electron environment", () => {
    expect(isElectron).toBe(false)
  })
})

describe("isCIDR", () => {
  test("should validate IPv4 CIDR notation", () => {
    expect(isCIDR("192.168.0.0/24")).toBe(true)
    expect(isCIDR("256.168.0.0/24")).toBe(false)
  })

  test("should validate IPv6 CIDR notation", () => {
    expect(isCIDR("2001:db8::/32")).toBe(true)
    expect(isCIDR("2001:db8::/129")).toBe(false)
  })
})

describe("isIPV4", () => {
  test("should validate IPv4 addresses", () => {
    expect(isIPV4("192.168.0.1")).toBe(true)
    expect(isIPV4("256.168.0.1")).toBe(false)
  })
})

describe("isIPV6", () => {
  test("should validate IPv6 addresses", () => {
    expect(isIPV6("2001:0db8:85a3:0000:0000:8a2e:0370:7334")).toBe(true)
    expect(isIPV6("2001:0db8:85a3:0:0:8a2e:0370:7334")).toBe(true)
    expect(isIPV6("not-an-ipv6")).toBe(false)
  })
})

describe("isIP", () => {
  test("should validate IP addresses (IPv4 or IPv6)", () => {
    expect(isIP("192.168.0.1")).toBe(true)
    expect(isIP("2001:0db8:85a3:0:0:8a2e:0370:7334")).toBe(true)
    expect(isIP("not-an-ip")).toBe(false)
  })
})

describe("isPort", () => {
  test("should validate port numbers", () => {
    expect(isPort("8080")).toBe(true)
    expect(isPort("65535")).toBe(true)
    expect(isPort("65536")).toBe(false)
    expect(isPort("-1")).toBe(false)
  })
})

describe("isIPv4WtesthPort", () => {
  test("should validate IPv4 wtesth port", () => {
    expect(isIPv4WithPort("192.168.0.1:8080")).toBe(true)
    expect(isIPv4WithPort("192.168.0.1:port")).toBe(false)
  })
})

describe("isMask", () => {
  test("should validate subnet masks", () => {
    expect(isMask("255.255.255.0")).toBe(true)
    expect(isMask("255.255.254.0")).toBe(false)
  })
})

describe("isMultipleIp", () => {
  test("should validate multiple IPs", () => {
    expect(isMultipleIp("192.168.0.1, 192.168.0.2")).toBe(true)
    expect(isMultipleIp("192.168.0.1, 192.168.0.1")).toBe(false)
  })
})

describe("isIpRange", () => {
  test("should validate IP range", () => {
    expect(isIpRange("192.168.0.1 - 192.168.0.10")).toBe(true)
    expect(isIpRange("192.168.0.10 - 192.168.0.1")).toBe(false)
  })
})

describe("isIpWtesthIpRange", () => {
  test("should validate IP and IP range mix", () => {
    expect(isIpWithIpRange("192.168.0.1, 192.168.0.2 - 192.168.0.10")).toBe(true)
    expect(isIpWithIpRange("invalidip, 192.168.0.2 - 192.168.0.10")).toBe(false)
  })
})

describe("isUrl", () => {
  test("should validate URLs", () => {
    expect(isUrl("http://example.com")).toBe(true)
    expect(isUrl("https://example.com/path?query=param#hash")).toBe(true)
    expect(isUrl("invalid-url")).toBe(false)
  })
})

describe("isPhoneNum", () => {
  test("should validate phone numbers", () => {
    expect(isPhoneNum("13800000000")).toBe(true)
    expect(isPhoneNum("12345678901")).toBe(false)
  })
})

describe("isTelNum", () => {
  test("should validate landline numbers", () => {
    expect(isTelNum("(010)12345678")).toBe(true)
    expect(isTelNum("010-12345678")).toBe(true)
    expect(isTelNum("12345678")).toBe(true)
    expect(isTelNum("01012345678")).toBe(true)
    expect(isTelNum("010-1234567")).toBe(false)
  })
})

describe("isContactNum", () => {
  test("should validate contact numbers (phone or landline)", () => {
    expect(isContactNum("13800000000")).toBe(true)
    expect(isContactNum("(010)12345678")).toBe(true)
    expect(isContactNum("invalid-number")).toBe(false)
  })
})

describe("isEmail", () => {
  test("should validate email addresses", () => {
    expect(isEmail("test@example.com")).toBe(true)
    expect(isEmail("invalid-email")).toBe(false)
  })
})

describe("isId", () => {
  test("should validate Chinese ID numbers", () => {
    expect(isId("110101199003072316")).toBe(true)
    expect(isId("110101199003072315")).toBe(false)
  })
})
