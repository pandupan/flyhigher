import { ServiceType } from "@/types"
import { _renderNumeric } from "@/utils/number"
import { Stack } from "@mui/material"
import { useEffect, useState } from "react"
import { AiFillStar } from "react-icons/ai"
import { BiMailSend } from "react-icons/bi"
import {
  BsCalendar2CheckFill,
  BsCalendar2XFill,
  BsFacebook,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs"
import { FiShare2 } from "react-icons/fi"
import { RxDash } from "react-icons/rx"
import { useRef } from "react"

const imageStyle = {
  width: "25px",
  height: "25px",
  borderRadius: "9999px",
}

const buttonShareOther = {
  borderRadius: "9999px",
  padding: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  cursor: "pointer",
  border: "none",
}

export const RangeDateForm: React.FC<{
  type: string
  openDate: any
  setOpenDate: any
  closeDate: any
  setCloseDate: any
}> = ({ type, openDate, closeDate, setOpenDate, setCloseDate }) => {
  const [currentUrl, setCurrentUrl] = useState<string>("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("window.innerHeight", window.innerHeight)
      setCurrentUrl(() => window.location.href)
    }
  }, [])

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={1}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1}
        alignItems={"center"}
      >
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <img
            src="https://api.dicebear.com/6.x/initials/svg?seed=avatar"
            alt="avatar"
            loading="lazy"
            style={imageStyle}
          />
          <span className="text-primary">Harry Perkasa</span>
        </Stack>
        <div>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            {type === (ServiceType.JASTIP as string) ? (
              <RangePO
                openDate={openDate}
                closeDate={closeDate}
                setOpenDate={setOpenDate}
                setCloseDate={setCloseDate}
              />
            ) : null}
            <RatingService value={0.0} countReview={0} />
          </Stack>
        </div>
      </Stack>

      <ShareService url={currentUrl} />
    </Stack>
  )
}

const RatingService: React.FC<{ value: number; countReview: number }> = ({
  value,
  countReview = 0,
}) => {
  return (
    <Stack direction={"row"} spacing={1} alignItems={"center"}>
      <Stack direction={"row"} spacing={0} alignItems={"center"}>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <span style={{ marginLeft: "5px" }}>{value}</span>
      </Stack>

      <Stack direction={"row"} spacing={1} alignItems={"center"}>
        <span>({_renderNumeric(countReview)} Reviews)</span>
      </Stack>
    </Stack>
  )
}

const RangePO: React.FC<{
  openDate: string
  setOpenDate: any
  closeDate: string
  setCloseDate: any
}> = ({ openDate, closeDate, setOpenDate, setCloseDate }) => {
  const openRef = useRef<any>()
  const closeRef = useRef<any>()

  return (
    <Stack direction={"row"} spacing={1} alignItems={"center"}>
      <Stack direction={"row"} spacing={1} alignItems={"center"}>
        <Stack
          direction={"row"}
          spacing={1}
          alignItems={"center"}
          onClick={() => openRef.current.showPicker()}
        >
          <BsCalendar2CheckFill className="text-white" />
          <span className="text-primary">{openDate || "-- From Date --"}</span>
          <input
            type="date"
            ref={openRef}
            placeholder="from"
            onChange={(e: any) => setOpenDate(() => e.target.value)}
            value={openDate}
            style={{ position: "absolute", opacity: 0 }}
          />
        </Stack>
        <RxDash />
        <Stack
          direction={"row"}
          spacing={1}
          alignItems={"center"}
          position={"relative"}
          onClick={() => closeRef.current.showPicker()}
        >
          <BsCalendar2XFill className="text-white" />
          <span className="text-primary">{closeDate || "-- To Date --"}</span>
          <input
            ref={closeRef}
            type="date"
            placeholder="from"
            onChange={(e: any) => setCloseDate(() => e.target.value)}
            value={closeDate}
            style={{ position: "absolute", opacity: 0 }}
          />
        </Stack>
      </Stack>
    </Stack>
  )
}

const ShareService: React.FC<{ url: string }> = ({ url }) => {
  return (
    <Stack direction={"row"} spacing={1} alignItems={"center"}>
      <FiShare2 className="text-white" />
      <a
        href={`http://www.facebook.com/sharer.php?u=${url}`}
        style={{
          ...buttonShareOther,
          backgroundColor: "#3B5998",
        }}
      >
        <BsFacebook />
      </a>
      <a
        href={`https://twitter.com/share?url=${url}&text=Simple%20Share%20Buttons&hashtags=simplesharebuttons`}
        style={{
          ...buttonShareOther,
          backgroundColor: "#55ACEE",
        }}
      >
        <BsTwitter />
      </a>
      <a
        href={`mailto:?subject=${url}`}
        style={{
          ...buttonShareOther,
          backgroundColor: "#d62976",
        }}
      >
        <BiMailSend />
      </a>
      <a
        href={`whatsapp://send?text=${url}`}
        style={{
          ...buttonShareOther,
          backgroundColor: "#00b489",
        }}
      >
        <BsWhatsapp />
      </a>
    </Stack>
  )
}
