import IndexRegisterPage from "@/components/pages/register/IndexRegisterPage"
import { getCsrfToken, getProviders, getSession } from "next-auth/react"

const RegisterPage = ({ session }: any) => {
  return <IndexRegisterPage />
}

export default RegisterPage

export async function getServerSideProps(context: any) {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}
