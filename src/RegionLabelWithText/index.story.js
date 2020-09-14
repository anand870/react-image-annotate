import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import { RegionLabelWithText } from "./"

const events = {
  onDelete: () => null,
  onClose: () => null,
  onChange: () => null,
  onOpen: () => null,
  onRegionClassAdded: () => null,
}

const allowedClasses = ["name","fname","dob","pan"]

export const testRegion = {
  cls: 'name',
  type: 'box',
  x: 0.08282568602246689,
  y: 0.2748429902755267,
  w: 0.42517185491533005,
  h: 0.06969205834683956,
  highlighted : true,
  visible: true,
  color: "#ff0000",
  id: "testbox",
  mtext: 'Hello'
}

storiesOf("RegionLabelWithText",module)
  .add("Basic",() => (
    <RegionLabelWithText 
      region={testRegion}
      editing={false}
      allowedClasses={allowedClasses}
      allowMetaText={true}
      {...events}
    />
  ))
  .add("EditingMode",() => (
    <RegionLabelWithText
      region={testRegion}
      editing={true}
      allowedClasses={allowedClasses}
      allowMetaText={true}
      {...events}
    />
  ))

