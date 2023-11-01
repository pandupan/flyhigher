import { Stack, Button } from "@mui/material"
import { AiFillStar } from "react-icons/ai"
import { RxDash } from "react-icons/rx"
import { FiShare2 } from "react-icons/fi"
import { RiUser3Fill } from "react-icons/ri"
import { BsCalendar2CheckFill, BsCalendar2XFill } from "react-icons/bs"
import { FREELANCE, JASTIP, RETAIL } from "../../../../data/services"
import { BsFacebook } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsWhatsapp } from "react-icons/bs"
import { useEffect, useState } from "react"
import { HiLocationMarker } from "react-icons/hi"
import { BiMailSend } from "react-icons/bi"

const imageStyle = {
    width: '20px',
    height: '20px',
    borderRadius: '9999px',
}

const buttonShareOther = {
    borderRadius: '9999px',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    cursor: 'pointer',
    border: 'none',
}

export const InfoServiceSection: React.FC<{ type: string }> = ({ type }) => {
    const [currentUrl, setCurrentUrl] = useState<string>('')

    useEffect(() => {
        if (typeof window !== 'undefined') {
            console.log('window.innerHeight', window.innerHeight);
            setCurrentUrl(() => window.location.href)
        }
    }, [])

    return (
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            alignItems={'center'}
            justifyContent={'space-between'}
        >
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1}
                alignItems={'center'}
            >
                <Stack
                    direction={'row'}
                    spacing={1}
                    alignItems={'center'}
                >
                    <img
                        src="https://api.dicebear.com/6.x/initials/svg?seed=avatar"
                        alt="avatar"
                        loading="lazy"
                        style={imageStyle}
                    />
                    <span className="text-primary">
                        Harry Perkasa
                    </span>
                </Stack>
                <div>
                    {[FREELANCE, RETAIL].includes(type) ?
                        <Stack
                            direction={'row'}
                            spacing={1}
                            alignItems={'center'}
                        >
                            <RatingService value={0.0} orders={0} />
                            <Button>
                                <RiUser3Fill className="mr-1" />
                                Chat Me
                            </Button>
                            {type !== RETAIL ? null :
                                <Button color="secondary">
                                    <HiLocationMarker className="mr-1" />
                                    Location
                                </Button>
                            }
                        </Stack>
                        : null
                    }

                    {type === JASTIP ?
                        <RangePO openDate="15 April" closeDate="20 April" />
                        : null
                    }
                </div>
            </Stack>

            <ShareService url={currentUrl} />
        </Stack>
    )
}

const RatingService: React.FC<{ value: number, orders: number }> = ({ value, orders }) => {
    return (
        <Stack
            direction={'row'}
            spacing={1}
            alignItems={'center'}
        >
            <Stack
                direction={'row'}
                spacing={1}
                alignItems={'center'}
            >
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <span>
                    ({value})
                </span>
            </Stack>

            <Stack
                direction={'row'}
                spacing={1}
                alignItems={'center'}
            >
                <span>
                    | {orders} in Queque
                </span>
            </Stack>
        </Stack>
    )
}

const RangePO: React.FC<{ openDate: string, closeDate: string }> = ({ openDate, closeDate }) => {
    return (
        <Stack
            direction={'row'}
            spacing={1}
            alignItems={'center'}
        >
            <Stack
                direction={'row'}
                spacing={1}
                alignItems={'center'}
            >
                <Stack
                    direction={'row'}
                    spacing={1}
                    alignItems={'center'}
                >
                    <BsCalendar2CheckFill className="text-white" />
                    <span className="text-primary">
                        {openDate}
                    </span>
                </Stack>
                <RxDash />
                <Stack
                    direction={'row'}
                    spacing={1}
                    alignItems={'center'}
                >
                    <BsCalendar2XFill className="text-white" />
                    <span className="text-primary">
                        {closeDate}
                    </span>
                </Stack>
            </Stack>
        </Stack>
    )
}

const ShareService: React.FC<{ url: string }> = ({ url }) => {
    return (
        <Stack
            direction={'row'}
            spacing={1}
            alignItems={'center'}
        >
            <FiShare2 className="text-white" />
            <a href={`http://www.facebook.com/sharer.php?u=${url}`}
                style={{
                    ...buttonShareOther,
                    backgroundColor: '#3B5998'
                }}
            >
                <BsFacebook />
            </a>
            <a href={`https://twitter.com/share?url=${url}&text=Simple%20Share%20Buttons&hashtags=simplesharebuttons`}
                style={{
                    ...buttonShareOther,
                    backgroundColor: '#55ACEE'
                }}
            >
                <BsTwitter />
            </a>
            <a href={`mailto:?subject=${url}`}
                style={{
                    ...buttonShareOther,
                    backgroundColor: '#d62976'
                }}
            >
                <BiMailSend />
            </a>
            <a href={`whatsapp://send?text=${url}`}
                style={{
                    ...buttonShareOther,
                    backgroundColor: '#00b489'
                }}
            >
                <BsWhatsapp />
            </a>
        </Stack>
    )
}