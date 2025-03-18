import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import Title from "../src/title.vue"

const AXIOM = "Rem is the best girl"

describe("Title.vue", () => {
  test("render test", () => {
    const wrapper = mount(() => <Title>{AXIOM}</Title>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
