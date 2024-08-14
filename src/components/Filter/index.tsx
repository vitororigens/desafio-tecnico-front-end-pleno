import { useState } from "react";
import { BannerFilter, Button, Container, Icon, Text } from "./style";

export function Filter() {
    const [showBannerFilter, setShowBannerFilter] = useState(false);

    const handleToggleBannerFilter = () => {
        setShowBannerFilter(prevState => !prevState);
    };

    return (
        <>
            <Container onClick={handleToggleBannerFilter}>
                <Icon />
            </Container>
            {showBannerFilter &&
                <BannerFilter >
                    <Button>
                        <Text>
                            Ação
                        </Text>
                    </Button>
                </BannerFilter>
            }
        </>
    );
}
