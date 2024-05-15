import { useEffect, useState } from "react";
import CustomTabs from "../atoms/CustomTabs";
import { SubTitle } from "../atoms/Text";
import axios from "axios";
import { Category } from "../molecules/Challenge/Category";
import { Box } from "@mui/material";
import Search from "../molecules/Challenge/Search";
import Page from "../molecules/Challenge/Page";
import ChallengeList from "../molecules/Challenge/ChallengeList";


const ChallengeContainer = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [data, setData] = useState([]);

    const handleTabChange = (newValue) => {
        setSelectedTab(newValue);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/data?tab=${selectedTab}&category=yourCategory&page=yourPageNumber`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, [selectedTab]);

    return (
        <>
            <SubTitle>챌린지</SubTitle>
            <CustomTabs onTabChange={handleTabChange} labels={["모집중인 챌린지", "진행중인 챌린지", "종료된 챌린지"]} />
            <Box sx={{ display: "flex", alignItems: 'center', py:1 }}>
                <Category />
                <Search/>
            </Box>
            <ChallengeList/>
            <Page/>

        </>
    );
}

export default ChallengeContainer;