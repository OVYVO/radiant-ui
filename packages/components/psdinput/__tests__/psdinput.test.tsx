import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Psdinput from "../src/psdinput.vue"

const AXIOM = "Rem is the best girl"

describe("Psdinput.vue", () => {
  test("render test", () => {
    const wrapper = mount(() => <Psdinput>{AXIOM}</Psdinput>)
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
