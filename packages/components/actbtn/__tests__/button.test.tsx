import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Button from "../src/actbtn.vue"

const AXIOM = "Rem is the best girl"

describe("Button.vue", () => {
  test("render test", () => {
    const wrapper = mount(() => <Button>{AXIOM}</Button>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
