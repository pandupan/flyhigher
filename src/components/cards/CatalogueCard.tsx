type catalogueCardProp = {
  onClick: any
}

const bigImageStyle = {
  borderRadius: "40px",
  padding: "5px",
  "&:hover": {
    cursor: "pointer",
  },
}

export const CatalogueCard: React.FC<catalogueCardProp> = ({ onClick }) => {
  return (
    <>
      <img
        src="https://api.dicebear.com/6.x/initials/svg?seed=avatar"
        alt="avatar"
        loading="lazy"
        style={bigImageStyle}
        onClick={onClick}
      />
    </>
  )
}
