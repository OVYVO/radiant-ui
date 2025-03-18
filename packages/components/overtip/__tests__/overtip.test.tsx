import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Overtip from "../src/overtip.vue"

const AXIOM = "Rem is the best girl"

describe("Overtip.vue", () => {
  test("render test", () => {
    const wrapper = mount(() => <Overtip>{AXIOM}</Overtip>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
