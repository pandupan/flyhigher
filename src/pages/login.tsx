import IndexLoginPage from "@/components/pages/login/IndexLoginPage"
import { getCsrfToken, getProviders, getSession } from "next-auth/react"

const LoginPage = ({ csrfToken, providers }: any) => {
  return <IndexLoginPage />
}

export default LoginPage

export async function getServerSideProps(context: any) {
  const session = await getSession(context)

  // if logged in, redirect to home page
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
      csrfToken: await getCsrfToken(context),
      providers: await getProviders(),
    },
  }
}
