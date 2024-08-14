import { useState } from "react";
import { BannerFilter, Button, Container, Icon, Text } from "./style";
import { useMoviePropts } from "@/hooks/useMoviePropts";

export function Filter() {
    const { categories } = useMoviePropts();
    const [showBannerFilter, setShowBannerFilter] = useState(false);

    const handleToggleBannerFilter = () => {
        setShowBannerFilter(prevState => !prevState);
    };

    return (
        <>
            <Container onClick={handleToggleBannerFilter}>
                <Icon />
            </Container>
            {showBannerFilter && (
                <BannerFilter>
                    {categories.map((category) => (
                        <Button key={category}>
                            <Text>{category}</Text>
                        </Button>
                    ))}
                </BannerFilter>
            )}
        </>
    );
}