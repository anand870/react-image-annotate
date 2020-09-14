// @flow

import React, { useState } from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import Select from "react-select"
import Code from "react-syntax-highlighter"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import DialogActions from "@material-ui/core/DialogActions"
import MonacoEditor from "react-monaco-editor"

import panImg from "../ImageCanvas/pan.jpg"

const useStyles = makeStyles({
  editBar: {
    padding: 10,
    borderBottom: "1px solid #ccc",
    backgroundColor: "#f8f8f8",
    display: "flex",
    alignItems: "center",
    "& .button": { margin: 5 },
  },
  select: { width: 240, fontSize: 14 },
  contentArea: {
    padding: 10,
  },
  specificationArea: {
    padding: 10,
  },
})

const loadSavedInput = () => {
  try {
    return JSON.parse(window.localStorage.getItem("customInput") || "{}")
  } catch (e) {
    return {}
  }
}

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
	//"highlighted": true
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
export const examples = {
  "Simple Bounding Box": () => ({
    taskDescription:
      "Annotate each image according to this _markdown_ specification.",
    // regionTagList: [],
    // regionClsList: ["hotdog"],
    regionTagList: ["has-bun"],
    regionClsList: ["hotdog", "not-hotdog"],
    enabledTools: ["select", "create-box"],
    // showTags: true,
    images: [
      {
        src:
          "https://images.unsplash.com/photo-1496905583330-eb54c7e5915a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        name: "hot-dogs-1",
      },
      {
        src:
          "https://www.bianchi.com/wp-content/uploads/2019/07/YPB17I555K.jpg",
        name: "bianchi-oltre-xr4",
      },
    ],
  }),
  "OCR Bounding Box": () => ({
    taskDescription:
      "Annotate each image according to this _markdown_ specification.",
    // regionTagList: [],
    // regionClsList: ["hotdog"],
    regionClsList: ['DOI', 'DOB', 'PAN', 'FNAME', 'NAME', 'BG'],
    enabledTools: ["select", "create-box"],
    // showTags: true,
	ocrMode:true,
    images: [
      {
        src: panImg,
        name: "pan1",
		regions : panTestRegions
      },
    ],
  }),
  "Simple Segmentation": () => ({
    taskDescription:
      "Annotate each image according to this _markdown_ specification.",
    regionClsList: ["car", "truck"],
    enabledTools: ["select", "create-polygon"],
    images: [
      {
        src:
          "https://images.unsplash.com/photo-1561518776-e76a5e48f731?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        name: "car-image-1",
      },
    ],
  }),
  Custom: () => loadSavedInput(),
}

const Editor = ({ onOpenAnnotator, lastOutput }: any) => {
  const c = useStyles()
  const [currentError, changeCurrentError] = useState()
  const [selectedExample, changeSelectedExample] = useState(
    window.localStorage.getItem("customInput")
      ? "Custom"
      : "Simple Bounding Box"
  )
  const [outputDialogOpen, changeOutputOpen] = useState(false)
  const [currentJSONValue, changeCurrentJSONValue] = useState(
    JSON.stringify(examples[selectedExample](), null, "  ")
  )
  return (
    <div>
      <div className={c.editBar}>
        <h3>React Image Annotate</h3>
        <div style={{ flexGrow: 1 }} />
        <div>
          <div style={{ display: "inline-flex" }}>
            <Select
              className={c.select}
              value={{ label: selectedExample, value: selectedExample }}
              options={Object.keys(examples).map((s) => ({
                label: s,
                value: s,
              }))}
              onChange={(selectedOption) => {
                changeSelectedExample(selectedOption.value)

                changeCurrentJSONValue(
                  JSON.stringify(
                    selectedOption.value === "Custom"
                      ? loadSavedInput()
                      : examples[selectedOption.value](),
                    null,
                    "  "
                  )
                )
              }}
            />
          </div>
          <Button
            className="button"
            disabled={!lastOutput}
            onClick={() => changeOutputOpen(true)}
          >
            View Output
          </Button>
          <Button
            className="button"
            variant="outlined"
            disabled={Boolean(currentError)}
            onClick={() => {
              onOpenAnnotator(
                selectedExample === "Custom"
                  ? loadSavedInput()
                  : examples[selectedExample]
              )
            }}
          >
            Open Annotator
          </Button>
        </div>
      </div>
      <div
        className={c.contentArea}
        style={
          currentError
            ? { border: "2px solid #f00" }
            : { border: "2px solid #fff" }
        }
      >
        <div>
          <MonacoEditor
            value={currentJSONValue}
            language="javascript"
            onChange={(code) => {
              try {
                window.localStorage.setItem(
                  "customInput",
                  JSON.stringify(JSON.parse(code))
                )
                changeCurrentError(null)
              } catch (e) {
                changeCurrentError(e.toString())
              }
              changeCurrentJSONValue(code)
            }}
            width="100%"
            height="550px"
          />
        </div>
      </div>
      <div className={c.specificationArea}>
        <h2>React Image Annotate Format</h2>
        <Code language="javascript">{`
{
  taskDescription?: string, // markdown
  regionTagList?: Array<string>,
  regionClsList?: Array<string>,
  imageTagList?: Array<string>,
  imageClsList?: Array<string>,
  // all tools are enabled by default
  enabledTools?: Array< "select" | "create-point" | "create-box" | "create-polygon">,
  selectedImage?: string, // initial selected image
  images: Array<{
    src: string,
    thumbnailSrc?: string, // use this if you are using high-res images
    name: string,
    regions?: Array<{
      id: string | number,
      cls?: string,
      color?: string,
      tags?: Array<string>,

      // Point
      type: "point",
      x: number, // [0-1] % of image width
      y: number, // [0-1] % of image height

      // Bounding Box
      type: "box",
      x: number, // [0-1] % of image width
      y: number, // [0-1] % of image height
      w: number, // [0-1] % of image width
      h: number, // [0-1] % of image height

      // Polygon
      type: "polygon",
      open?: boolean, // should last and first points be connected, default: true
      points: Array<[number, number]> // [0-1] % of image width/height
    }>
  }>,
}
`}</Code>
      </div>
      <Dialog fullScreen open={outputDialogOpen}>
        <DialogTitle>React Image Annotate Output</DialogTitle>
        <DialogContent style={{ minWidth: 400 }}>
          <MonacoEditor
            value={JSON.stringify(lastOutput, null, "  ")}
            language="javascript"
            width="100%"
            height="550px"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => changeOutputOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Editor
