import { MainLayout } from "@/components/layouts/MainLayout";
import { IndexServicePage } from "@/components/pages/services/IndexServicePage";
import { Container } from "@mui/material";
import { useRouter } from "next/router";

export default function ServicePage() {
    const router = useRouter();
    const { type } = router.query;
    // const type = 'JASTIP';

    return (
        <MainLayout>
            <Container maxWidth="lg">
                <IndexServicePage type={type as string} />
            </Container>
        </MainLayout>
    )
}