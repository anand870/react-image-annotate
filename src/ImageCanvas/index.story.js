// @flow

import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import ImageCanvas from "./"
import RegionLabelWithText from "../RegionLabelWithText"
import exampleMask from "./mouse_mask.story.png"
import exampleImage from "./seves_desk.story.jpg"
import panImage from "./pan.jpg"

export const testRegions = [
  {
    type: "point",
    id: "point1",
    cls: "Paper",
    highlighted: true,
    x: 0.8,
    y: 0.5,
    visible: true,
    color: "#f00",
  },
  {
    type: "point",
    id: "point2",
    cls: "Dude's Head",
    tags: ["human", "head", "male"],
    x: 0.1,
    y: 0.15,
    visible: true,
    color: "#0F0",
  },
  {
    type: "box",
    id: "box1",
    cls: "Business Card",
    highlighted: true,
    x: 0.315,
    y: 0.63,
    w: 0.067,
    h: 0.045,
    visible: true,
    color: "#ff0",
  },
  {
    type: "polygon",
    id: "polygon1",
    cls: "Laptop",
    tags: ["Electronic Device"],
    editingLabels: true,
    highlighted: true,
    points: [
      [0.4019, 0.5065],
      [0.407, 0.5895],
      [0.4157, 0.6801],
      [0.6579, 0.656],
      [0.6115, 0.5674],
      [0.5792, 0.4895],
    ],
    visible: true,
    color: "#f0f",
  },
  {
    type: "polygon",
    id: "polygon2",
    open: true,
    points: [
      [0.1201, 0.5987],
      [0.0674, 0.7063],
      [0.0726, 0.7477],
      [0.2132, 0.7311],
    ],
    visible: true,
    color: "#00f",
  },
  {
    type: "pixel",
    id: "pixel1",
    cls: "Mouse",
    tags: ["Electronic Device"],
    sx: 0.7433,
    sy: 0.5847,
    w: 0.83 - 0.7433,
    h: 0.67 - 0.5847,
    src: exampleMask,
    visible: true,
    color: "#00f",
  },
]

export const panTestRegions =[
  {
    "type": "box",
    "id": "1",
    "x": 0.2683222289521502,
    "y": 0.05684007707129094,
    "w": 0.15505754088431253,
    "h": 0.08766859344894026,
    "cls": "BG",
    "visible": true,
    "mText": "\u0935\u093f\u092d\u093e\u0917",
    "color": "#458190"
  },
  {
    "type": "box",
    "id": "2",
    "x": 0.8013325257419746,
    "y": 0.06165703275529865,
    "w": 0.17019987886129617,
    "h": 0.06165703275529865,
    "cls": "BG",
    "visible": true,
    "mText": "\u0938\u0930\u0915\u093e\u0930",
    "color": "#458190"
  },
  {
    "type": "box",
    "id": "3",
    "x": 0.6390066626287099,
    "y": 0.06936416184971098,
    "w": 0.12780133252574197,
    "h": 0.05684007707129094,
    "cls": "BG",
    "visible": true,
    "mText": "\u092d\u093e\u0930\u0924",
    "color": "#458190"
  },
  {
    "type": "box",
    "id": "4",
    "x": 0.04603270745003028,
    "y": 0.0789980732177264,
    "w": 0.19321623258631132,
    "h": 0.0626204238921002,
    "cls": "BG",
    "visible": true,
    "mText": "\u0906\u092f\u0915\u0930",
    "color": "#458190"
  },
  {
    "type": "box",
    "id": "5",
    "x": 0.7746820109024833,
    "y": 0.16377649325626203,
    "w": 0.059357964869775896,
    "h": 0.05973025048169557,
    "cls": "BG",
    "visible": true,
    "mText": "OF",
    "color": "#458190"
  },
  {
    "type": "box",
    "id": "6",
    "x": 0.8358570563294972,
    "y": 0.16377649325626203,
    "w": 0.12780133252574197,
    "h": 0.05684007707129094,
    "cls": "BG",
    "visible": true,
    "mText": "INDIA",
    "color": "#458190"
  },
  {
    "type": "box",
    "id": "7",
    "x": 0.6420351302241066,
    "y": 0.16570327552986513,
    "w": 0.12477286493034524,
    "h": 0.05973025048169557,
    "cls": "BG",
    "visible": true,
    "mText": "GOVT.",
    "color": "#458190"
  },
  {
    "type": "box",
    "id": "8",
    "x": 0.21986674742580253,
    "y": 0.1724470134874759,
    "w": 0.20048455481526348,
    "h": 0.0626204238921002,
    "cls": "BG",
    "visible": true,
    "mText": "DEPARTMENT",
    "color": "#458190"
  },
  {
    "type": "box",
    "id": "9",
    "x": 0.03331314354936402,
    "y": 0.17630057803468208,
    "w": 0.1265899454875833,
    "h": 0.06358381502890173,
    "cls": "BG",
    "visible": true,
    "mText": "INCOME",
    "color": "#458190"
  },
  {
    "type": "box",
    "id": "10",
    "x": 0.16050878255602666,
    "y": 0.17822736030828518,
    "w": 0.059357964869775896,
    "h": 0.057803468208092484,
    "cls": "BG",
    "visible": true,
    "mText": "TAX",
    "color": "#458190"
  },
  {
    "type": "box",
    "id": "11",
    "x": 0.23198061780738946,
    "y": 0.28901734104046245,
    "w": 0.14778921865536038,
    "h": 0.051059730250481696,
    "cls": "NAME",
    "visible": true,
    "mText": "SOLANKI",
    "color": "#02C677",
	"highlighted": true
  },
  {
    "type": "box",
    "id": "12",
    "x": 0.06056935190793458,
    "y": 0.2947976878612717,
    "w": 0.16414294367050272,
    "h": 0.04720616570327553,
    "cls": "NAME",
    "visible": true,
    "mText": "KHUSHBU",
    "color": "#02C677",
  },
  {
    "type": "box",
    "id": "13",
    "x": 0.1901877649909146,
    "y": 0.4123314065510597,
    "w": 0.14839491217443973,
    "h": 0.04720616570327553,
    "cls": "FNAME",
    "visible": true,
    "mText": "SOLANKI",
    "color": "#43D9F8"
  },
  {
    "type": "box",
    "id": "14",
    "x": 0.05754088431253786,
    "y": 0.4142581888246628,
    "w": 0.1265899454875833,
    "h": 0.04720616570327553,
    "cls": "FNAME",
    "visible": true,
    "mText": "PRAVIN",
    "color": "#43D9F8"
  },
  {
    "type": "box",
    "id": "15",
    "x": 0.06056935190793458,
    "y": 0.5173410404624278,
    "w": 0.19079345850999394,
    "h": 0.057803468208092484,
    "cls": "DOB",
    "visible": true,
    "mText": "10/01/1990",
    "color": "#8EAA0C"
  },
  {
    "type": "box",
    "id": "16",
    "x": 0.27013930950938825,
    "y": 0.5886319845857418,
    "w": 0.09812235009085403,
    "h": 0.03468208092485549,
    "cls": "BG",
    "visible": true,
    "mText": "Number",
    "color": "#458190"
  },
  {
    "type": "box",
    "id": "17",
    "x": 0.02301635372501514,
    "y": 0.5905587668593449,
    "w": 0.13264688067837674,
    "h": 0.03564547206165703,
    "cls": "BG",
    "visible": true,
    "mText": "Permanent",
    "color": "#458190"
  },
  {
    "type": "box",
    "id": "18",
    "x": 0.16050878255602666,
    "y": 0.5905587668593449,
    "w": 0.1029678982434888,
    "h": 0.03564547206165703,
    "cls": "BG",
    "visible": true,
    "mText": "Account",
    "color": "#458190"
  },
  {
    "type": "box",
    "id": "19",
    "x": 0.04966686856450636,
    "y": 0.651252408477842,
    "w": 0.23622047244094488,
    "h": 0.06165703275529865,
    "cls": "PAN",
    "visible": true,
    "mText": "BVKPS6800A",
    "color": "#58371B"
  },
  {
    "type": "box",
    "id": "20",
    "x": 0.9545729860690491,
    "y": 0.7129094412331407,
    "w": 0.02483343428225318,
    "h": 0.1811175337186898,
    "cls": "DOI",
    "visible": true,
    "mText": "26042008",
    "color": "#87DF93"
  },
  {
    "type": "box",
    "id": "21",
    "x": 0.06541490006056935,
    "y": 0.7514450867052023,
    "w": 0.13567534827377348,
    "h": 0.11175337186897881,
    "cls": "BG",
    "visible": true,
    "mText": "Islands",
    "color": "#458190"
  },
  {
    "type": "box",
    "id": "22",
    "x": 0.015142337976983646,
    "y": 0.8815028901734104,
    "w": 0.11871592973955179,
    "h": 0.04238921001926782,
    "cls": "BG",
    "visible": true,
    "mText": "Signature",
    "color": "#458190"
  }
]
 
const events = {
  // Ignore common mouse movements, they fill the action log
  onMouseMove: () => null, //action("onMouseMove"),
  onMouseDown: () => null, //action("onMouseDown"),
  onMouseUp: () => null, //action("onMouseUp"),

  onChangeRegion: action("onChangeRegion"),
  onBeginRegionEdit: action("onBeginRegionEdit"),
  onCloseRegionEdit: action("onCloseRegionEdit"),

  onSelectRegion: action("onSelectRegion"),

  onBeginBoxTransform: action("onBeginBoxTransform"),

  onBeginMovePolygonPoint: action("onBeginMovePolygonPoint"),
  onAddPolygonPoint: action("onAddPolygonPoint"),
  onClosePolygon: action("onClosePolygon"),

  onBeginMovePoint: action("onBeginMovePoint"),
  onDeleteRegion: action("onDeleteRegion"),
}

storiesOf("ImageCanvas", module)
  .add("Basic", () => (
    <ImageCanvas
      regions={testRegions}
      imageSrc={exampleImage}
      showTags
      {...events}
    />
  ))
  .add("Zoom Tool Selected", () => (
    <ImageCanvas
      showTags
      regions={testRegions}
      imageSrc={exampleImage}
      zoomWithPrimary
      {...events}
    />
  ))
  .add("Allowed Area", () => (
    <ImageCanvas
      showTags
      regions={[]}
      imageSrc={exampleImage}
      zoomWithPrimary
      allowedArea={{ x: 0.25, y: 0.25, w: 0.5, h: 0.5 }}
      {...events}
    />
  ))
  .add("Allowed Area (2)", () => (
    <ImageCanvas
      showTags
      regions={[]}
      imageSrc={exampleImage}
      zoomWithPrimary
      allowedArea={{ x: 0.6, y: 0.6, w: 0.2, h: 0.2 }}
      {...events}
    />
  ))
  .add("Modify Allowed Area", () => (
    <ImageCanvas
      showTags
      regions={[]}
      imageSrc={exampleImage}
      modifyingAllowedArea
      allowedArea={{ x: 0.6, y: 0.6, w: 0.2, h: 0.2 }}
      {...events}
    />
  ))
  .add("With Meta Text Enabled", () => (
    <ImageCanvas
      showTags
      regions={panTestRegions}
      imageSrc={"http://localhost:8003/img/3.jpg"}
	  allowMetaText={true}
	  showClsLabel={false}
	  showTextLabel={true}
	  regionClsList={['NAME','FNAME','DOB','DOI','PAN']}
	  hiddenClsLabels={['BG']}
      {...events}
    />
  ))
