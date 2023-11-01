import { Breadcrumbs, Stack } from "@mui/material"
import Link from "next/link"
import { HiChevronRight } from "react-icons/hi"
import { TfiLayoutGrid2Alt } from "react-icons/tfi"
import { InfoServiceSection } from "../../sections/viewListings/InfoServiceSection"
import { FREELANCE, JASTIP, RETAIL } from "../../../../data/services"
import { CatalogServiceSection } from "../../sections/viewListings/CatalogServiceSection"
import { JastipRouteSection } from "../../sections/viewListings/JastipRouteSection"
import { ProductListSection } from "../../sections/viewListings/ProductListSection"
import { ServiceListSection } from "../../sections/viewListings/ServiceListSection"
import { DetailTalentServiceSection } from "../../sections/viewListings/DetailTalentServiceSection"

export const IndexServicePage: React.FC<{ type: string }> = ({ type }) => {
  return (
    <Stack spacing={2} direction={"column"}>
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <TfiLayoutGrid2Alt />
          <span>Categories :</span>
        </Stack>

        <div>
          <Breadcrumbs separator={<HiChevronRight />} className="text-white">
            <Link href={"/"} className="text-white no-underline">
              {type === JASTIP ? "Jasa Titip" : null}
              {type === FREELANCE ? "Freelance" : null}
              {type === RETAIL ? "Retail" : null}
            </Link>
            {type === JASTIP ? null : (
              <Link href={"/"} className="text-white no-underline">
                Graphic Design
              </Link>
            )}
          </Breadcrumbs>
        </div>
      </Stack>

      <JastipRouteSection from={"Bankok"} to={"Jakarta"} />

      <InfoServiceSection type={type} />

      <CatalogServiceSection />

      {[RETAIL, FREELANCE].includes(type?.toUpperCase()) ? <ServiceListSection /> : null}
      {[RETAIL, JASTIP].includes(type?.toUpperCase()) ? <ProductListSection /> : null}

      <DetailTalentServiceSection />
    </Stack>
  )
}
