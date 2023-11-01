import { Stack } from "@mui/material"
import { AiTwotoneStar } from "react-icons/ai"

type reviewCardProp = {
  data?: any
}

const imageStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "9999px",
}

export const ReviewCard: React.FC<reviewCardProp> = ({ data }) => {
  let tagRatings: any[] = data?.tag_rating?.split("|")

  return (
    <Stack
      direction={"row"}
      spacing={2}
      padding={2}
      borderRadius={0.5}
      style={{ backgroundColor: "#090909" }}
    >
      <img
        src={
          data?.image_user_review ??
          "https://api.dicebear.com/6.x/initials/svg?seed=avatar"
        }
        style={imageStyle}
        alt={`profile of ${data?.name_user_review}`}
      />
      <Stack spacing={1}>
        <div style={{ fontWeight: "bold", fontSize: "14px" }}>
          {data?.name_user_review ?? "Aaron Wilson"}
        </div>
        <Stack direction={"row"} style={{ whiteSpace: "nowrap" }}>
          <AiTwotoneStar
            style={{ color: data?.total_rating > 0 ? "#f8d62b" : "" }}
          />
          <AiTwotoneStar
            style={{ color: data?.total_rating > 1 ? "#f8d62b" : "" }}
          />
          <AiTwotoneStar
            style={{ color: data?.total_rating > 2 ? "#f8d62b" : "" }}
          />
          <AiTwotoneStar
            style={{ color: data?.total_rating > 3 ? "#f8d62b" : "" }}
          />
          <AiTwotoneStar
            style={{ color: data?.total_rating > 4 ? "#f8d62b" : "" }}
          />
        </Stack>
        <Stack
          direction={"row"}
          spacing={1}
          fontSize={"12px"}
          // overflow={"auto"}
        >
          {tagRatings?.map((tagRating: string, idx: number) => (
            <span
              className="bg-primary"
              key={idx}
              style={{
                borderRadius: "5px",
                padding: "4px 6px",
                whiteSpace: "nowrap",
              }}
            >
              {tagRating}
            </span>
          ))}
        </Stack>
        <div>
          <p style={{ fontSize: "10px", width: "250px", fontWeight: "bold" }}>
            {data?.content_rating ??
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ratione voluptatum sunt facilis amet illum corrupti dolor a fugiat, aspernatur optio aliquam reiciendis, nesciunt odio repellendus pariatur quibusdam et. Neque."}
          </p>
        </div>
      </Stack>
    </Stack>
  )
}
